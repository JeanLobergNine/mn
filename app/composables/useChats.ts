import type { Chat } from "../types";
import { MOCK_CHAT } from "./mockData";

export default function useChats() {
  const chats = useState<Chat[]>("chats", () => [MOCK_CHAT]);

  function createChat(options: { projectId?: string } = {}) {
    const id = (chats.value.length + 1).toString();
    console.log("id", id);
    const chat = {
      id,
      title: `Chat ${id}`,
      messages: [],
      projectId: options.projectId,
      updatedAt: new Date(),
      createdAt: new Date(),
    };
    chats.value.push(chat);
    return chat;
  }

  function chatsInProject(projectId: string) {
    return chats.value.filter((chat: Chat) => chat.projectId === projectId);
  }

  return {
    chats,
    createChat,
    chatsInProject,
  };
}
