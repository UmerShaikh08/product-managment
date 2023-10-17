import toast from "react-hot-toast";
import apiConnector from "../apiConnector";
import { project } from "../apis";

export const createProject = async (data, token) => {
  try {
    const response = await apiConnector("POST", project.CREATE_PROJECT, data, {
      Authorization: `Bearer ${token}`,
    });

    console.log("create project response --->", response);

    if (!response?.data?.success) {
      toast.error("Failed to create project");
      throw new Error("Failed to create project");
    }

    toast.success("Successfully Create");
    return response;
  } catch (error) {
    toast.error("Failed to create project");
    console.log("create project error-->", error);
  }
};
