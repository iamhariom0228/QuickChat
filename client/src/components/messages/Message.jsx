import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { format } from 'date-fns'
import useConversation from '../../zustand/useConversation'

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message?.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const bubbleClassName = fromMe ? 'bg-blue-500' : 'bg-gray-600';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleClassName}`}>
        {message?.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {/* display created at in hours and minute */}
        <div>{format(new Date(message.createdAt), "HH:mm")}</div>
      </div>
    </div>
  );
}

export default Message