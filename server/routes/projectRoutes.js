import { Router } from "express";
import { createProject } from "../controller/project.js";
import { auth } from "../middleware/auth.js";

const projectRoutes = Router();

projectRoutes.post("/create-project", auth, createProject);

export { projectRoutes };
