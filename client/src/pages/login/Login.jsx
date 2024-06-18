import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import toast from "react-hot-toast";


const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { loading, login } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await login(inputs);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin(e);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> QuickChat</span>
        </h1>

        <form onSubmit={handleLogin}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-md">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username..."
              className="input input-bordered w-full max-w-xs"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              onKeyPress={handleKeyPress}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-md">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password..."
              className="input input-bordered w-full max-w-xs"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              onKeyPress={handleKeyPress}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account? Signup
          </Link>
          <div className="mt-4 w-full max-w-xs">
            <button className="btn btn-block btn-sm">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Login


//starter code for login.jsx

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justfify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className="text-blue-500"> QuickChat</span>
//         </h1>

//         <form action="">
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-md">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username..."
//               className="input input-bordered w-full max-w-xs"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-md">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter password..."
//               className="input input-bordered w-full max-w-xs"
//             />
//           </div>
//           <a
//             href="#"
//             className="text-sm hover-underline hover:text-blue-600 mt-2 inline-block"
//           >
//             {"Don't"} have an account? Signup
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2 `">
//                Login 
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login