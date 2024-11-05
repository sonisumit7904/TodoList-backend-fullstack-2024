import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "Please add a name"],
        trim: true,
        maxlength: [20, "Name cannot be more than 20 characters"],
    },
    email: {
        type: String,
        required: [true, "Please add an email"],
        unique: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please add a valid email"
        ],
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
        minlength: [6, "Password must be at least 6 characters"],
        select: false,
    },
});

const User = mongoose.model("User", userSchema);

export default User;
