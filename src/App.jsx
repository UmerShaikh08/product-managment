import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import AddProject from "./components/dashboard/addProject/AddProject";
import ProjectList from "./components/dashboard/ProjectList/ProjectList";
import DashboardDetails from "./components/dashboard/DashboardDetails";
import OpenRoute from "./components/auth/OpenRoute";
import PrivateRoute from "./components/auth/PrivateRoute";

function App() {
  return (
    <div className="h-full w-full">
      <Routes>
        <Route
          path="/"
          element={
            <OpenRoute>
              {" "}
              <Login />{" "}
            </OpenRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              {" "}
              <Dashboard />{" "}
            </PrivateRoute>
          }
        >
          <Route
            path="/dashboard/dashboard-details"
            element={<DashboardDetails />}
          />
          <Route path="/dashboard/create-page" element={<AddProject />} />
          <Route path="/dashboard/project-list" element={<ProjectList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
