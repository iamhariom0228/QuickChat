import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        console.log("Token: ", token);
        if (!token) {
            return res.status(401).json({
                error: "Unauthorized",
            });
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        
        if (!verified) {
            return res.status(401).json({
                error: "Unauthorized - Invalid token",
            });
        }

        const user = await User.findById(verified.id).select("-password");
        if (!user) {
            return res.status(401).json({
                error: "Unauthorized - User not found",
            });
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoute: ", error.message);
        res.status(401).json({
            error: "Unauthorized",
        });
    }
}