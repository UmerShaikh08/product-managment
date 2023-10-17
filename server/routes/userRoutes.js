import { Router } from "express";
import { login } from "../controller/login.js";

const userRoutes = Router();

userRoutes.post("/login", login);

export { userRoutes };
