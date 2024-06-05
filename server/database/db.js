import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = () => {
  const URI = process.env.MONGO_DB_URI;
  mongoose.connect(URI, { useNewUrlParser: true });
  // mongoose.connect(, {useNewUrlParser: true});

  mongoose.connection.on("connected", () => {
    console.log("Database connected!!!!");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected!!!!");
  });

  mongoose.connection.on("error", () => {
    //display error message
    console.log("Database connection error!!!!");
  });
};

export default Connection;
