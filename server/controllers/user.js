import User from "../models/user.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const otherUsers = await User.find({ _id: { $ne: loggedInUserId } }).select('-password');

        res.status(200).json({
            users: otherUsers,
        });

    } catch (error) {
        console.log("Error in getUsersForSidebar: ", error.message);
        res.status(500).json({
            error: "Internal Server Error",
        });
    }
}