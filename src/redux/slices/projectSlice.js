import { createSlice } from "@reduxjs/toolkit";
import { projectList } from "../../utils/data";

const initialState = {
  projectList: [],
};

const authSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    addProject(state, action) {
      state.projectList.push(action.payload);
    },
  },
});

export const { addProject } = authSlice.actions;
export default authSlice.reducer;
