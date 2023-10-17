import { connectDB } from "./config/connectDB.js";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRoutes } from "./routes/userRoutes.js";
import { projectRoutes } from "./routes/projectRoutes.js";

dotenv.config({ path: ".env" });

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "*", // Replace with the origin you want to allow
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // If you need to allow cookies, set this to true
    optionsSuccessStatus: 204, // Some legacy browsers (IE11) choke on 204
  })
);

app.use("/api/vi/", userRoutes);
app.use("/api/vi/", projectRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    massage: "Your server is up and running...",
  });
});

app.listen(process.env.PORT || "4000", () => {
  console.log("server run successfully");
});

// db connect
connectDB();
