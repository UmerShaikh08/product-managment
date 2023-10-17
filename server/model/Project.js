import mongoose, { Schema, model } from "mongoose";

const ProjectSchema = new Schema({
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  ProjectName: {
    type: String,
    required: true,
  },
  Reason: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  Division: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
  Priority: {
    type: String,
    required: true,
  },
  Dept: {
    type: String,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
  Start: {
    type: String,
    required: true,
  },
  End: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
});

const Project = model("Project", ProjectSchema);

export { Project };
