import { Router } from "express";
import {
  createProject,
  projectList,
  updateStatus,
} from "../controller/project.js";
import { auth } from "../middleware/auth.js";

const projectRoutes = Router();

projectRoutes.post("/create-project", auth, createProject);
projectRoutes.get("/project-list", auth, projectList);
projectRoutes.post("/update-status", auth, updateStatus);

export { projectRoutes };
