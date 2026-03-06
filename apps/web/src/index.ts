import {
  DEFAULT_AGENT_REPLY_SETTINGS,
  type AgentReplySettings,
  type ChatMessage,
} from "@mindmesh/shared";

const sampleMessage: ChatMessage = {
  id: "sample-1",
  roomId: "boot",
  author: "system",
  text: "MindMesh web scaffold initialized.",
  createdAtIso: new Date().toISOString(),
};

const renderReplyPolicyControls = (settings: AgentReplySettings): string => {
  return [
    "Agent Reply Settings (UI placeholder)",
    `- policy: ${settings.policy} (always | mentioned | never)`,
    `- max agent turns / human message: ${settings.maxAgentTurnsPerHumanMessage}`,
    `- same-agent cooldown turns: ${settings.sameAgentCooldownTurns}`,
    `- max consecutive agent turns: ${settings.maxConsecutiveAgentTurns}`,
  ].join("\n");
};

console.log("[web] MindMesh scaffold started", {
  sampleMessage,
  settingsPanel: renderReplyPolicyControls(DEFAULT_AGENT_REPLY_SETTINGS),
});

// TODO: wire frontend framework/runtime and realtime transport.
