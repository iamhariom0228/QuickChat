import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenMessages = (conversationId) => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();
    
    useEffect(() => {
        if (socket) {
            socket.on("newMessage", (message) => {
                console.log(message);
                if (message.senderId === conversationId) {
                    const newMessages = messages;
                    newMessages.push(message);
                    setMessages(newMessages);
                }
            });
        }

        return () => socket?.off("newMessage");
    }, [socket, messages, setMessages]);
}

export default useListenMessages;