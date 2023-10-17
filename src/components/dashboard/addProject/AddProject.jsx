import React from "react";
import bgImg from "../../../assets/Header-bg.svg";
import logo from "../../../assets/Logo.svg";
import { MdLogout } from "react-icons/md";
import { useForm } from "react-hook-form";
import SelectionBox from "./SelectionBox";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../services/operations/auth";
import { useDispatch, useSelector } from "react-redux";
import Datepicker from "./DatePicker";
import { createProject } from "../../../services/operations/project";
import toast from "react-hot-toast";
import { addProject } from "../../../redux/slices/projectSlice";
import { selectBox } from "../../../utils/SelectBoxData";

const AddProject = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const { token } = useSelector((store) => store.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitData = async (data) => {
    const end = "End";
    const start = "start";

    console.log(data.End);
    if (
      data.End === undefined ||
      data.End === null ||
      data.Start === undefined ||
      data.Start === null
    ) {
      toast.error("Enter valide project date");
      return;
    }

    if (data.Start > data.End) {
      toast.error("Enter Valid Project Date");
      return;
    }
    console.log(data);
    data.Status = "Registered";
    const result = await createProject(data, token);

    if (result) {
      console.log(result);
      dispatch(addProject(result?.data?.project));
      reset();
    }
  };

  return (
    <div className=" w-full h-full space-y-4  mb-[100px]">
      <div className="relative w-full h-full">
        <img src={bgImg} className="w-full h-full" />
        <h3 className="absolute top-1 left-2 md:top-[20%] md:left-[2%] text-xl md:-2xl font-semibold text-white">
          Create Project
        </h3>

        <img
          src={logo}
          className="absolute hidden md:block top-[20%] left-[50%] w-[5%]"
        />

        <div
          className="md:hidden absolute   top-1 right-6 w-[5%]"
          onClick={() => dispatch(logout(navigate))}
        >
          <MdLogout size={25} className="text-white" />
        </div>
      </div>

      {/* project creation box */}
      <form
        onSubmit={handleSubmit(submitData)}
        className="bg-white flex flex-col gap-5 md:flex-row justify-between rounded-md w-[90%]  md:w-[98%] mx-auto p-3"
      >
        <div className="grid grid-cols-3 gap-10 w-full md:w-[80%]">
          <div className=" relative col-span-3 md:col-span-2 ">
            <input
              type="text"
              id="ProjectName"
              placeholder="Enter Project Name"
              className={`h-16 rounded-md border  outline-none pl-3   w-full ${
                errors.ProjectName ? "border-[#FF4949]" : "border-[#979797]"
              }`}
              {...register("ProjectName", { required: true })}
            />
            {errors.ProjectName && (
              <span className=" absolute bottom-[-35%] left-0 text-[16px] text-[#FF4949]">
                Project is required
              </span>
            )}
          </div>
          <div className=" hidden md:block col-span-1">&nbsp;</div>

          <SelectionBox
            register={register}
            options={selectBox.Reason}
            name={"Reason"}
            errors={errors}
          />
          <SelectionBox
            register={register}
            options={selectBox.Type}
            name={"Type"}
            errors={errors}
          />
          <SelectionBox
            register={register}
            options={selectBox.Division}
            name={"Division"}
            errors={errors}
          />
          <SelectionBox
            register={register}
            options={selectBox.Category}
            name={"Category"}
            errors={errors}
          />
          <SelectionBox
            register={register}
            options={selectBox.Priority}
            name={"Priority"}
            errors={errors}
          />
          <SelectionBox
            register={register}
            options={selectBox.Dept}
            name={"Dept"}
            errors={errors}
          />

          <Datepicker
            register={register}
            name={"Start"}
            errors={errors}
            setValue={setValue}
          />
          <Datepicker
            register={register}
            name={"End"}
            errors={errors}
            setValue={setValue}
          />

          <SelectionBox
            register={register}
            options={selectBox.Location}
            name={"Location"}
            errors={errors}
          />

          <h3 className="text-[#767676] col-span-3 md:text-end">
            Status:{" "}
            <span className="text-black font-semibold"> Registered</span>
          </h3>
        </div>
        {/* <SelectionBox register={register} errors={errors} /> */}

        <button
          type="submit"
          className="bg-[#025AAB] text-[#E3ECF5]  rounded-full py-2  px-8  h-fit  transition-all duration-200 hover:scale-95"
        >
          {" "}
          Save Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
