import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import projectSlice from "./slices/projectSlice";

const Store = configureStore({
  reducer: {
    auth: authSlice,
    project: projectSlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default Store;
