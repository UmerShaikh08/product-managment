import toast from "react-hot-toast";
import apiConnector from "../apiConnector";
import { project } from "../apis";
import { addProject, setProjectList } from "../../redux/slices/projectSlice";
import {
  setCloseDeptWise,
  setProjecCounters,
  setTotalDeptWise,
} from "../../redux/slices/dashboardSlice";

export const createProject = async (data, token, setLoading) => {
  try {
    setLoading(true);
    const response = await apiConnector("POST", project.CREATE_PROJECT, data, {
      Authorization: `Bearer ${token}`,
    });
    setLoading(false);
    console.log("create project response --->", response);

    if (!response?.data?.success) {
      toast.error("Failed to create project");
      throw new Error("Failed to create project");
    }

    toast.success("Successfully Create");
    return response;
  } catch (error) {
    setLoading(false);
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

export const updateStatus = async (data, token, projectList, setLoading) => {
  try {
    setLoading(true);
    const response = await apiConnector("POST", project.UPDATE_STATUS, data, {
      Authorization: `Bearer ${token}`,
    });

    console.log("Update status response --->", response);
    if (!response?.data?.success) {
      throw new Error("failed to update status");
    }

    setLoading(false);
    return response?.data?.project;
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};

export const fetchDashboardDetails = async (
  Dept,
  token,
  setLoading,
  dispatch
) => {
  try {
    setLoading(true);
    const response = await apiConnector(
      "POST",
      project.DASHBOARD_DETAILS,
      { Dept },
      {
        Authorization: `Bearer ${token}`,
      }
    );

    console.log("Dashboard details response --->", response);
    if (!response?.data?.success) {
      throw new Error("failed to fetch dashboard details");
    }

    dispatch(setProjecCounters(response?.data?.dashboard?.projectCouters));
    dispatch(setTotalDeptWise(response?.data?.dashboard?.totalDeptWise));
    dispatch(setCloseDeptWise(response?.data?.dashboard?.closeDeptWise));
    setLoading(false);
    return response?.data?.dashboard;
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
