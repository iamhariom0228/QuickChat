import React from "react";

const Conversation = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/boy?username=iamhariom"
              alt="user-avatar"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <span className="font-bold text-gray-200">Hariom Sharma</span>
            <span className="text-xl">😍</span>
          </div>
        </div>
      </div>
      <div className="divider h-1 my-0"></div>
    </div>
  );
};

export default Conversation;


//starter code for client/src/components/sidebar/Conversations.jsx
// import React from "react";

// const Conversation = () => {
//   return (
//     <div className="flex flex-col">
//       <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 cursor-pointer">
//         <div className="avatar online">
//           <div className="w-12 rounded-full">
//             <img
//               src="https://avatar.iran.liara.run/public/boy?username=iamhariom"
//               alt="user-avatar"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col flex-1">
//           <div className="flex gap-3 justify-between">
//             <span className="font-bold text-gray-200">Hariom Sharma</span>
//             <span className="text-xl">😍</span>
//           </div>
//         </div>
//       </div>
//       <div className="divider h-1 my-0"></div>
//     </div>
//   );
// };

// export default Conversation;
