import React, { useState } from "react";
import GenderCheckbox from "../../components/GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleGender = (gender) => {
    setInputs({ ...inputs, gender });
  };

   const handleKeyPress = (e) => {
     if (e.key === "Enter") {
       handleLogin(e);
     }
   };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> QuickChat</span>
        </h1>

        <form action="" onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-md">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter fullname..."
              className="input input-bordered w-full max-w-xs"
              value={inputs.name}
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              onKeyPress={handleKeyPress}
            />
          </div>
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
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-md">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password again..."
              className="input input-bordered w-full max-w-xs"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              onKeyPress={handleKeyPress}
            />
          </div>
          <GenderCheckbox
            onCheckboxChange={handleGender}
            selectedGender={inputs.gender}
          />
          <Link
            to="/login"
            className="text-sm hover-underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Already"} have an account? Login
          </Link>
          <div className="mt-4 w-full max-w-xs">
            <button className="btn btn-block btn-sm">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

//Starter code for Signup.jsx
// import React from 'react'
// import GenderCheckbox from '../../components/GenderCheckbox';

// const Signup = () => {
//    return (
//      <div className="flex flex-col items-center justfify-center min-w-96 mx-auto">
//        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//          <h1 className="text-3xl font-semibold text-center text-gray-300">
//            Sign Up
//            <span className="text-blue-500"> QuickChat</span>
//          </h1>

//          <form action="">
//            <div>
//              <label className="label p-2">
//                <span className="text-base label-text text-md">Name</span>
//              </label>
//              <input
//                type="text"
//                placeholder="Enter fullname..."
//                className="input input-bordered w-full max-w-xs"
//              />
//            </div>
//            <div>
//              <label className="label p-2">
//                <span className="text-base label-text text-md">Username</span>
//              </label>
//              <input
//                type="text"
//                placeholder="Enter username..."
//                className="input input-bordered w-full max-w-xs"
//              />
//            </div>
//            <div>
//              <label className="label p-2">
//                <span className="text-base label-text text-md">Password</span>
//              </label>
//              <input
//                type="password"
//                placeholder="Enter password..."
//                className="input input-bordered w-full max-w-xs"
//              />
//            </div>
//            <div>
//              <label className="label p-2">
//                <span className="text-base label-text text-md">
//                  Confirm Password
//                </span>
//              </label>
//              <input
//                type="password"
//                placeholder="Enter password again..."
//                className="input input-bordered w-full max-w-xs"
//              />
//            </div>
//            <GenderCheckbox />
//            <a
//              href="#"
//              className="text-sm hover-underline hover:text-blue-600 mt-2 inline-block"
//            >
//              {"Already"} have an account? Login
//            </a>
//            <div>
//              <button className="btn btn-block btn-sm mt-2">Sign Up</button>
//            </div>
//          </form>
//        </div>
//      </div>
//    );
// }

// export default Signup
