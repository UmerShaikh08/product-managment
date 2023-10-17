import { Router } from "express";

import { signup } from "../controller/signup.js";
import { login } from "../controller/login.js";

const userRoutes = Router();

userRoutes.post("/signup", signup);
userRoutes.post("/login", login);

export { userRoutes };
