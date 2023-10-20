import { Project } from "../model/Project.js";

export const createProject = async (req, res) => {
  try {
    const {
      ProjectName,
      Reason,
      Type,
      Division,
      Category,
      Priority,
      Dept,
      Location,
      Status,
      Start,
      End,
    } = req.body;

    const userId = req.user.id;
    console.log("req", req.body);
    console.log("userId", req.user.id);

    if (
      !ProjectName ||
      !Reason ||
      !Type ||
      !Division ||
      !Category ||
      !Priority ||
      !Dept ||
      !Location ||
      !Status ||
      !Start ||
      !End
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newProject = await Project.create({
      ProjectName,
      Reason,
      Type,
      Division,
      Category,
      Priority,
      Dept,
      Location,
      Status,
      Start,
      End,
      User: userId,
    });

    if (!newProject) {
      return res.status(400).json({
        success: false,
        message: "failed to create project",
      });
    }

    return res.status(200).json({
      success: true,
      message: "created successfully",
      project: newProject,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "failed to create project",
    });
  }
};

export const projectList = async (req, res) => {
  try {
    const list = await Project.find({});

    if (!list) {
      return res.status(404).json({
        success: false,
        message: "Courses Not Found",
      });
    }

    console.log("list --->", list);
    return res.status(200).json({
      success: true,
      message: "Courses Fetch Successfully",
      projectList: list,
    });
  } catch (error) {
    console.log("project list error --->", error);
    return res.status(404).json({
      success: false,
      message: "Courses Not Found",
    });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { projectId, Status } = req.body;
    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      { Status: Status },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(4404).json({
        success: false,
        message: "project not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Status changed",
      project: updatedProject,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "failed to update status",
    });
  }
};

export const dashboardDetails = async (req, res) => {
  try {
    const { Dept } = req.body;

    if (!Dept) {
      return res.status(200).json({
        success: false,
        message: "Dept not found",
      });
    }

    const totalResponse = await Project.find({}).count();
    const closedResponse = await Project.find({})
      .or({ Status: "Close" })
      .count();
    const runningResponse = await Project.find({})
      .or({ Status: "Start" })
      .count();
    const registeredResponse = await Project.find({})
      .or({ Status: "Registered" })
      .count();
    const cancelledResponse = await Project.find({})
      .or({ Status: "Cancel" })
      .count();

    let projectCouters = [
      { text: "Total", count: totalResponse },
      { text: "Closed", count: closedResponse },
      { text: "Running", count: runningResponse },
      { text: "Clouser Delay", count: registeredResponse },
      { text: "Cancelled", count: cancelledResponse },
    ];

    const totalDeptWise = [];
    const closeDeptWise = [];
    for (let i = 0; i < Dept.length; i++) {
      const total = await Project.find({}).or({ Dept: Dept[i] }).count();
      const close = await Project.find({})
        .and([{ Dept: Dept[i] }, { Status: "Close" }])
        .count();

      totalDeptWise.push(total);
      closeDeptWise.push(close);
    }

    return res.status(200).json({
      success: true,
      message: "successfully fetched",
      dashboard: {
        projectCouters,
        totalDeptWise,
        closeDeptWise,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "failed to fetch dashboard  details data",
    });
  }
};
