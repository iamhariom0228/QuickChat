import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TbMessages } from "react-icons/tb";
import useConversation from "../../zustand/useConversation";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //cleanup function to remove selected conversation when component unmounts
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text text-md">To: </span>
            <span className="text-gray-900 font-bold">{selectedConversation.name}</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;


const NoChatSelected = () => {
    return (
       <div className="flex items-center justify-center w-full h-full">
        <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <span>Welcome👋 Hariom Sharma</span>
                <span>Select a chat to start messaging</span>
                <TbMessages className="text-4xl md:text-6xl text-center text-blue-500" />
        </div>
       </div>
    );
}