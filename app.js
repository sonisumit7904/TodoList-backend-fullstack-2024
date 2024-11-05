import express from "express";
import errorMiddleware from "./utils/errorMiddleware.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/tasks", taskRoutes);




app.use(errorMiddleware);
export default app;
