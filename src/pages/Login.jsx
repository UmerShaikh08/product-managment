import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { useForm } from "react-hook-form";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { login } from "../services/operations/auth";
import { useDispatch } from "react-redux";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitData = async (data) => {
    const result = await login(data, navigate, dispatch, setLoading);

    if (!result) {
      setError(true);
    }
  };
  return (
    <>
      <div className=" flex flex-col md:flex-row align-middle justify-center min-h-[50vh] w-full ">
        {/* backgorund mobile  */}
        <div className=" sm:hidden relative bg-gradient-to-r from-[#04529A] via-[#075aa8] to-[#0473da]  w-screen  h-[calc(100vh-60vh)] rounded-bl-[100px] overflow-x-hidden">
          <div className="absolute left-[50%] top-[-10%] lg:w-[650px]  w-[250px] h-[250px] rounded-full bg-[#1276CE] "></div>
        </div>

        {/* backgorund deskstop  */}
        <div className="hidden sm:block h-full w-full">
          <div className="w-screen">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1366 472"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>4440D5BE-BB54-4183-A806-20722829C5EE</title>
              <desc>Created with sketchtool.</desc>
              <defs>
                <linearGradient
                  x1="90.7329503%"
                  y1="50.735091%"
                  x2="18.6243087%"
                  y2="50%"
                  id="linearGradient-1"
                >
                  <stop stopColor="#0474DA" offset="0%"></stop>
                  <stop stopColor="#044E92" offset="100%"></stop>
                </linearGradient>
                <path
                  d="M0,0 L1366,0 L1366,472 L87,472 C38.9512268,472 5.88427763e-15,433.048773 0,385 L0,0 L0,0 Z"
                  id="path-2"
                ></path>
              </defs>
              <g
                id="Web"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g id="Login">
                  <g id="login-bg-1">
                    <mask id="mask-3" fill="white">
                      <use xlinkHref="#path-2"></use>
                    </mask>
                    <use
                      id="Mask"
                      fill="url(#linearGradient-1)"
                      xlinkHref="#path-2"
                    ></use>
                    <ellipse
                      id="Oval"
                      fill="#389AF3"
                      opacity="0.29031808"
                      mask="url(#mask-3)"
                      cx="869.5"
                      cy="127"
                      rx="323.5"
                      ry="313"
                    ></ellipse>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>

        {/* logo */}
        <div className="absolute top-[15%]  left-[20%] md:left-[43%] sm:top-[10%] font-sans space-y-2  flex flex-col justify-center items-center ">
          <img src={logo} className="w-[50%] " />
          <h4 className="text-white">Online Product Managment</h4>
        </div>

        <form
          onSubmit={handleSubmit(submitData)}
          className="md:absolute top-[30%] bg-[#FFFFFF] sm:shadow-2xl sm:rounded-md sm:w-[45%] md:w-[35%] lg:w-[28%] flex flex-col sm:justify-center sm:items-center gap-8 py-7 sm:py-14  px-3"
        >
          {/* heading */}
          <h1 className="text-2xl ">Login to get started</h1>

          {/* email */}
          <div className="relative w-full sm:w-[90%] flex flex-col">
            <label
              htmlFor="email"
              className={`${errors.email ? "text-red-600" : "text-[#7A7A7A]"}`}
            >
              Email{" "}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email", { required: true })}
              className={`border ${
                errors.email ? "border-red-600" : "border-[#7A7A7A]"
              } border-[#979797]  rounded-md h-12 w-full outline-none pl-2 text-[#7A7A7A]`}
            />
            {errors.email && (
              <span className=" absolute bottom-[-25%] text-[12px] text-red-700">
                Email is required
              </span>
            )}
          </div>

          {/* password */}
          <div className="relative w-full sm:w-[90%] flex flex-col">
            <label
              htmlFor="password"
              className={`${
                errors.password ? "text-red-600" : "text-[#7A7A7A]"
              }`}
            >
              Password{" "}
            </label>
            <input
              type={showPass ? "text" : "password"}
              id="password"
              name="password"
              {...register("password", { required: true })}
              className={`border ${
                errors.password ? "border-red-600" : "border-[#7A7A7A]"
              } border-[#979797]  rounded-md h-12 w-full outline-none pl-2 text-[#7A7A7A]`}
            />
            <div
              className=" absolute top-[50%] right-[5%]"
              onClick={() => setShowPass(!showPass)}
            >
              {" "}
              {showPass ? <BsEye size={20} /> : <BsEyeSlash size={20} />}
            </div>
            {errors.password && (
              <span className=" absolute bottom-0 text-[12px] text-red-700">
                Password is required
              </span>
            )}
            <p className="text-[#2571B7] text-xs text-end font-semibold cursor-pointer">
              Forgot Password?
            </p>
          </div>
          <button
            disabled={loading}
            type="submit"
            className={`bg-[#035FB2]   text-white text-center w-[40%] mx-auto py-2 rounded-full transition-all duration-200 hover:scale-95 ${
              loading && "flex items-center px-4 gap-3"
            }`}
          >
            {loading ? (
              <>
                <svg
                  class="animate-spin flex items-center justify-center m-0   w-[20%] text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Login....</span>
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
      {error && (
        <div className=" md:mt-[300px] lg:mt-[150px] text-center text-red-600 text-sm">
          Invalid Credentials
        </div>
      )}
    </>
  );
};

export default Login;
