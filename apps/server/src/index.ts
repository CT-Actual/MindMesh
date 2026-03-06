import {
  decideAgentReply,
  readAgentReplySettingsFromEnv,
  type AgentRuntimeState,
  type RoomSnapshot,
} from "@mindmesh/shared";

const bootRoom: RoomSnapshot = {
  roomId: "boot",
  messages: [],
};

const replySettings = readAgentReplySettingsFromEnv(process.env);

const sampleState: AgentRuntimeState = {
  consecutiveAgentTurns: 0,
  turnsSinceAgentLastReply: 2,
  wasMentionedInHumanMessage: true,
  agentTurnsForCurrentHumanMessage: 0,
};

const sampleDecision = decideAgentReply(replySettings, sampleState);

console.log("[server] MindMesh scaffold started", {
  roomId: bootRoom.roomId,
  messageCount: bootRoom.messages.length,
  replySettings,
  sampleDecision,
});

// TODO: add HTTP server startup flow.
// TODO: wire persistence bootstrap.
// TODO: wire realtime room pub/sub.
// TODO: wire OpenRouter-backed multi-agent orchestration using shared guardrails.
