import express from "express";
import {
  createTask,
  getMyTasks,
  updateTask,
  deleteTask,
} from "../controllers/taskControllers.js";
import isAuthenticated from "../utils/isAuthenticated.js";

const router = express.Router();

router.post("/new", isAuthenticated, createTask);
router.get("/my", isAuthenticated, getMyTasks);
router
  .route("/:id")
  .put(isAuthenticated, updateTask)
  .delete(isAuthenticated, deleteTask);

export default router;
