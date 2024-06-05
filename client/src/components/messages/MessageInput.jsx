import React from "react";
import { BsSendFill } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form action="" className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Send a message..."
          className="w-full bg-slate-500 text-white rounded-full px-4 py-2 opacity-0.5"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <BsSendFill className="text-blue-500 text-xl" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
