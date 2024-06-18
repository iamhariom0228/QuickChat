import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const { authUser, setAuthUser } = useAuthContext();

  const signup = async ({
    name,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputError({
      name,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      console.log("API response:", data); // Log the entire response

      if (!res.ok) {
        throw new Error(data.data || "Signup failed");
      }

      const user = data.data; // Extract user from data field
      console.log("User data:", user);

      // Local storage set item
      localStorage.setItem("chat-user", JSON.stringify(user));

      // Context
      setAuthUser(user);

      // Display success message
      toast.success("Signup successful");
    } catch (error) {
      toast.error(error.message);
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputError({
  name,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!name || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters long");
    return false;
  }

  //password must contain one number, one uppercase and one lowercase letter and one special character
  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
  if (!passwordRegex.test(password)) {
    toast.error(
      "Password must contain one number, one uppercase and one lowercase letter and one special character"
    );
    return false;
  }

  return true;
}
