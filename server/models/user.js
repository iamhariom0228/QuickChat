import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required',
    },
    username: {
        type: String,
        trim: true,
        required: 'Username is required',
        unique: true,
    },
    password: {
        type: String,
        required: 'Password is required',
    },
    gender: {
        type: String,
        required: true,
        enum:["male", "female", "other"]
    },
    profilePic: {
        type: String,
        default: '/avatar.png',
    },
}
    , { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;