export type RoomId = string;

export interface ChatMessage {
  id: string;
  roomId: RoomId;
  author: string;
  text: string;
  createdAtIso: string;
}

export interface RoomSnapshot {
  roomId: RoomId;
  messages: ChatMessage[];
}

export type ReplyPolicy = "always" | "mentioned" | "never";

export interface AgentReplySettings {
  policy: ReplyPolicy;
  maxAgentTurnsPerHumanMessage: number;
  sameAgentCooldownTurns: number;
  maxConsecutiveAgentTurns: number;
}

export interface AgentRuntimeState {
  consecutiveAgentTurns: number;
  turnsSinceAgentLastReply: number;
  wasMentionedInHumanMessage: boolean;
  agentTurnsForCurrentHumanMessage: number;
}

export interface AgentReplyDecision {
  allowed: boolean;
  reason:
    | "policy_never"
    | "not_mentioned"
    | "max_turns_reached"
    | "cooldown_active"
    | "max_consecutive_agent_turns"
    | "allowed";
}

/**
 * Minimal policy + anti-loop guardrails used by orchestration code.
 */
export function decideAgentReply(
  settings: AgentReplySettings,
  state: AgentRuntimeState,
): AgentReplyDecision {
  if (settings.policy === "never") {
    return { allowed: false, reason: "policy_never" };
  }

  if (settings.policy === "mentioned" && !state.wasMentionedInHumanMessage) {
    return { allowed: false, reason: "not_mentioned" };
  }

  if (
    state.agentTurnsForCurrentHumanMessage >= settings.maxAgentTurnsPerHumanMessage
  ) {
    return { allowed: false, reason: "max_turns_reached" };
  }

  if (state.turnsSinceAgentLastReply < settings.sameAgentCooldownTurns) {
    return { allowed: false, reason: "cooldown_active" };
  }

  if (state.consecutiveAgentTurns >= settings.maxConsecutiveAgentTurns) {
    return { allowed: false, reason: "max_consecutive_agent_turns" };
  }

  return { allowed: true, reason: "allowed" };
}

export const DEFAULT_AGENT_REPLY_SETTINGS: AgentReplySettings = {
  policy: "mentioned",
  maxAgentTurnsPerHumanMessage: 1,
  sameAgentCooldownTurns: 1,
  maxConsecutiveAgentTurns: 2,
};

export function parseReplyPolicy(value: string | undefined): ReplyPolicy {
  if (value === "always" || value === "mentioned" || value === "never") {
    return value;
  }
  return DEFAULT_AGENT_REPLY_SETTINGS.policy;
}

export function readAgentReplySettingsFromEnv(
  env: Record<string, string | undefined>,
): AgentReplySettings {
  const toPositiveInt = (input: string | undefined, fallback: number): number => {
    const parsed = Number.parseInt(input ?? "", 10);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
  };

  return {
    policy: parseReplyPolicy(env.MINDMESH_REPLY_POLICY),
    maxAgentTurnsPerHumanMessage: toPositiveInt(
      env.MINDMESH_MAX_AGENT_TURNS_PER_HUMAN_MESSAGE,
      DEFAULT_AGENT_REPLY_SETTINGS.maxAgentTurnsPerHumanMessage,
    ),
    sameAgentCooldownTurns: toPositiveInt(
      env.MINDMESH_SAME_AGENT_COOLDOWN_TURNS,
      DEFAULT_AGENT_REPLY_SETTINGS.sameAgentCooldownTurns,
    ),
    maxConsecutiveAgentTurns: toPositiveInt(
      env.MINDMESH_MAX_CONSECUTIVE_AGENT_TURNS,
      DEFAULT_AGENT_REPLY_SETTINGS.maxConsecutiveAgentTurns,
    ),
  };
}
