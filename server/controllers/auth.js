import User from "../models/user.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookies from "../utils/generateToken.js";

//Signup
export const signup = async (req, res) => {
    try {
        const { name, username, password, confirmPassword, gender } = req.body;
        if(password !== confirmPassword){
            return res.status(400).json({
                data: "Passwords do not match",
            });
        }
        const user = await User.findOne({ username });
        if(user){
            return res.status(400).json({
                data: "Username already exists",
            });
        }
        
        //Hashing the password
        const hashedPassword = await bcrypt.hash(password, 12);


        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            name,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        });

        if (newUser) {
            generateTokenAndSetCookies(newUser._id, res);
            await newUser.save();
            res.status(201).json({
              data: "User created successfully. Please login.",
            });
        }
        else {
            res.status(400).json({
                data: "Failed to create user",
            })
        }

    } catch (error) {
        console.log("Error in signup: ", error.message);
        res.status(500).json({
            error: "Internal Server Error",
        })
    }
};

//Login
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({
                data: "Invalid credentials",
            });
        }
        //Compare the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                data: "Invalid credentials",
            });
        }
        generateTokenAndSetCookies(user._id, res);
        res.status(200).json({
            data: "Login successful",
        });
    }
    catch (error) {
        console.log("Error in login: ", error.message);
        res.status(500).json({
            error: "Internal Server Error",
        });
    }
};

//Logout
export const logout = (req, res) => {
    try {
        res.clearCookie("jwt");
        res.status(200).json({
            data: "Logged out successfully",
        });
    } catch (error) {
        console.log("Error in logout: ", error.message);
        res.status(500).json({
            error: "Internal Server Error",
        });
    }
};