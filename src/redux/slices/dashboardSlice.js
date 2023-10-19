import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectCounters: [],
  totalDeptWise: [],
  closeDeptWise: [],
};

const dashboardSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    setProjecCounters(state, action) {
      state.projectCounters = action.payload;
    },
    setTotalDeptWise(state, action) {
      state.totalDeptWise = action.payload;
    },
    setCloseDeptWise(state, action) {
      state.closeDeptWise = action.payload;
    },
  },
});

export const { setTotalDeptWise, setProjecCounters, setCloseDeptWise } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
