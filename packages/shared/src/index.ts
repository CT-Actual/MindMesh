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
