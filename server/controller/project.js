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
