import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      toast.error("Search query must be at least 3 characters long.");
      return;
    }
    const conversation = conversations.find((conversation) =>
      conversation.name.toLowerCase().includes(search.toLowerCase())
    );
    if (!conversation) {
      toast.error("No conversation found.");
      return;
    }
    setSelectedConversation(conversation);
    setSearch("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full w-64"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="text-xl" />
      </button>
    </form>
  );
}

export default SearchInput