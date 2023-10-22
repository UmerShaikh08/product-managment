import dotenv from "dotenv";
import mongoose from "mongoose";

const connectDB = async () => {
  dotenv.config({ path: ".env" });
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connection successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

export { connectDB };
