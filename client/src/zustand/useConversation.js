import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  messages: [],
  setSelectedConversation: (selectedConversation) =>
    set((state) => ({ ...state, selectedConversation })),
  setMessages: (messages) =>
    set((state) => ({ ...state, messages: [...messages] })),
}));

export default useConversation;
