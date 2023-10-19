import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import projectSlice from "./slices/projectSlice";
import dashboardSlice from "./slices/dashboardSlice";

const Store = configureStore({
  reducer: {
    auth: authSlice,
    project: projectSlice,
    dashboard: dashboardSlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default Store;
