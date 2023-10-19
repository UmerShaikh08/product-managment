import { setToken } from "../../redux/slices/authSlice";
import apiConnector from "../apiConnector";
import { auth } from "../apis";

export const login = async (data, navigate, dispatch, setLoading) => {
  try {
    setLoading(true);
    const response = await apiConnector("POST", auth.LOGIN, data);
    setLoading(false);
    console.log("login response --->", response);

    if (!response?.data?.success) {
      return null;
    }

    localStorage.setItem("token", JSON.stringify(response?.data?.token));
    dispatch(setToken(response?.data?.token));
    navigate("/dashboard/dashboard-details");
  } catch (error) {
    setLoading(false);
    console.log("error--->", error);
  }
};

export function logout(navigate) {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch(setToken(null));
    navigate("/");
  };
}
