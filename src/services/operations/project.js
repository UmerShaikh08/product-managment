import toast from "react-hot-toast";
import apiConnector from "../apiConnector";
import { project } from "../apis";
import { addProject, setProjectList } from "../../redux/slices/projectSlice";

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

export const fetchProjectList = async (dispatch, token) => {
  try {
    const response = await apiConnector(
      "GET",
      project.FETCH_PROJECT_LIST,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    console.log("fetch project list response --->", response);
    if (!response?.data?.success) {
      throw new Error("failed to fetch data");
    }

    dispatch(setProjectList(response?.data?.projectList));
    return response?.data?.projectList;
  } catch (error) {
    console.log(error);
  }
};

export const updateStatus = (data, token, projectList, dispatch) => {
  return async (dispatch) => {
    try {
      const response = await apiConnector("POST", project.UPDATE_STATUS, data, {
        Authorization: `Bearer ${token}`,
      });

      console.log("Update status response --->", response);
      if (!response?.data?.success) {
        throw new Error("failed to update status");
      }

      // const newArr = [...projectList, response?.data?.project];
      // dispatch(addProject(response?.data?.project));

      return response?.data?.project;
    } catch (error) {
      console.log(error);
    }
  };
};
