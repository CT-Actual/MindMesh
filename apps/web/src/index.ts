import type { ChatMessage } from "@mindmesh/shared";

const sampleMessage: ChatMessage = {
  id: "sample-1",
  roomId: "boot",
  author: "system",
  text: "MindMesh web scaffold initialized.",
  createdAtIso: new Date().toISOString(),
};

console.log("[web] MindMesh scaffold started", {
  sampleMessage,
});

// TODO: wire frontend framework/runtime and realtime transport.
