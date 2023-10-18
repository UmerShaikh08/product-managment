import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectList: [],
};

const authSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    addProject(state, action) {
      const idx = state.projectList.findIndex(
        (data) => data._id === action.payload._id
      );
      state.projectList[idx] = action.payload;
    },
    setProjectList(state, action) {
      state.projectList = action.payload;
    },
  },
});

export const { addProject, setProjectList } = authSlice.actions;
export default authSlice.reducer;
