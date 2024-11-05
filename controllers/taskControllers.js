import Task from "../models/taskModel.js";
import catchAsyncErrors from "../utils/catchAsyncErrors.js";

export const createTask = catchAsyncErrors(async (req, res, next) => {
  const { title, description } = req.body;
  const task = await Task.create({ title, description, user: req.user._id });

  res.status(201).json({ success: true, task });
});
export const getMyTasks = catchAsyncErrors(async (req, res, next) => {
  const tasks = await Task.find({ user: req.user._id });
  res.status(200).json({ success: true, tasks });
});

export const updateTask = catchAsyncErrors(async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  if (!task) return next(new ErrorHandler("Task not found", 404));

  task.isCompleted = !task.isCompleted;
  await task.save();

  res.status(200).json({ success: true, task });
});

export const deleteTask = catchAsyncErrors(async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  if (!task) return next(new ErrorHandler("Task not found", 404));

  await task.deleteOne();

  res.status(200).json({ success: true, message: "Task deleted successfully" });
});
