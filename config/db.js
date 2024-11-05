import mongoose from "mongoose";

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    dbName: "todo-FullStack",
  });
  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

export default connectDB;
