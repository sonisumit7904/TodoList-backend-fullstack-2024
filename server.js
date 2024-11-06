import dotenv from "dotenv";
dotenv.config({
  path: "./config/config.env",
});

import app from "./app.js";
import connectDB from "./config/db.js";

import cors from "cors";

const corsOptions = {
  origin: [process.env.FRONTEND_URL],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
const corsMiddleware =
  process.env.NODE_ENV !== "Development" ? cors(corsOptions) : cors();

app.use(corsMiddleware);

connectDB();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>API is running...</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
