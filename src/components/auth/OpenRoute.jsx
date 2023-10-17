import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const OpenRoute = ({ children }) => {
  const { token } = useSelector((store) => store.auth);

  if (token === null) {
    return children;
  } else {
    return <Navigate to={"/dashboard/dashboard-details"} />;
  }
};

export default OpenRoute;
