import type { RoomSnapshot } from "@mindmesh/shared";

const bootRoom: RoomSnapshot = {
  roomId: "boot",
  messages: [],
};

console.log("[server] MindMesh scaffold started", {
  roomId: bootRoom.roomId,
  messageCount: bootRoom.messages.length,
});

// TODO: add HTTP server startup flow.
// TODO: wire persistence bootstrap.
// TODO: wire realtime room pub/sub.
// TODO: wire OpenRouter-backed multi-agent orchestration.
