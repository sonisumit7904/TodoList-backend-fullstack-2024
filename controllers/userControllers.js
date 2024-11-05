import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import ErrorHandler from "../middleware/ErrorHandler.js";
import { sendCookie, removeCookie } from "../utils/sendCookie.js";
import catchAsyncErrors from "../utils/catchAsyncErrors.js";

export const registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) return next(new ErrorHandler("User Already Exists", 400));

  const hashedPassword = await bcrypt.hash(password, 10);
  user = await User.create({ name, email, password: hashedPassword });

  sendCookie(user, res, "Registered Successfully", 201);
});

export const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email }).select("+password");
  if (!user) return next(new ErrorHandler("Invalid Email or Password", 400));

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch)
    return next(new ErrorHandler("Invalid Email or Password", 400));

  sendCookie(user, res, "Logged In Successfully", 200);
});

export const logoutUser = catchAsyncErrors(async (req, res, next) => {
  removeCookie(res);
});

export const getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (!user) return next(new ErrorHandler("User Not Found", 404));

  res.status(200).json({
    success: true,
    user,
  });
});

export const getAllUsers = catchAsyncErrors(async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    users,
  });
});
