import express from "express";
import { registerUser, loginUser, logoutUser, getUserDetails, getAllUsers } from "../controllers/userControllers.js";
import isAuthenticated from "../utils/isAuthenticated.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", isAuthenticated, logoutUser);
router.get("/my", isAuthenticated, getUserDetails);
router.get("/all", getAllUsers);

export default router;
