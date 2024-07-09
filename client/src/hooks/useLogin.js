import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
    const [loading, setLoading] = useState(false);

    const { authUser, setAuthUser } = useAuthContext();
    
    const login = async ({ username, password }) => {
        const success = handleInputError({ username, password });
        if (!success) return;

        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();
            // console.log("API response:", data); // Log the entire response

            if (!res.ok) {
                throw new Error(data.data || "Login failed");
            }

            const user = data.data; // Extract user from data field
            // console.log("User data:", user);

            // Local storage set item
            localStorage.setItem("chat-user", JSON.stringify(user));

            // Context
            setAuthUser(user);

            // Display success message
            toast.success("Login successful");
        } catch (error) {
            console.error("Login failed:", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, login };
}

export default useLogin;

function handleInputError({ username, password }) {
    if (!username || !password) {
        toast.error("Please fill all fields");
        return false;
    }
    return true;
}