import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add a title"],
        trim: true,
        maxlength: [50, "Title cannot be more than 50 characters"],
    },
    description: {
        type: String,
        required: [true, "Please add a description"],
        maxlength: [500, "Description cannot be more than 500 characters"],
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}); 

const Task = mongoose.model("Task", taskSchema);

export default Task;