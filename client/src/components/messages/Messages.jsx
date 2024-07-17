import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";
import useConversation from "../../zustand/useConversation";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  const { selectedConversation } = useConversation();
  useListenMessages(selectedConversation._id);
  const lastMessageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView();
      }
    }, 5);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading && (
        <div className="flex items-center justify-center h-full">
          <div className="loading loading-spinner"></div>
        </div>
      )}

      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the Conversation</p>
      )}

      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div ref={lastMessageRef} key={message?._id}>
            <Message key={message?._id} message={message} />
          </div>
        ))}
    </div>
  );
};

export default Messages;
