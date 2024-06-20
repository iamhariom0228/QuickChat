import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
    const [loading, setLoading] = useState(false);

    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true);

        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await res.json();
            console.log("API response:", data);

            if (!res.ok) {
                throw new Error(data.data || "Logout failed");
            }

            // Local storage remove item
            localStorage.removeItem("chat-user");

            // Context
            setAuthUser(null);

            // Display success message
            toast.success("Logout successful");
        } catch (error) {
            console.error("Logout failed:", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, logout };
};

export default useLogout;