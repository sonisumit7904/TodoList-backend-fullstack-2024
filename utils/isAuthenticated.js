import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import ErrorHandler from "../middleware/ErrorHandler.js";
import catchAsyncErrors from "./catchAsyncErrors.js";

const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return next(new ErrorHandler("Please Login First", 401));

  const decodedUserId = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedUserId.id);

  next();
});

export default isAuthenticated;
