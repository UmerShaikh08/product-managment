import React from "react";

const SelectionBox = ({ register, name, errors, options }) => {
  return (
    <div className="relative col-span-3 md:col-span-1  flex flex-col w-full text-[#8B8B8B] ">
      <label htmlFor="category">{name}</label>
      <select
        id="category"
        name="category"
        defaultValue={""}
        className={`text-black bg-white px-3 py-2 transition-all cursor-pointer hover:border-blue-600/30 border border-gray-200 rounded-lg outline-blue-600/50 appearance-none invalid:text-black/30 w-full ${
          errors.name && "border-[#FF4949]"
        }`}
        {...register(name, { required: true })}
      >
        <option disabled value={""}>
          Choose a {name}
        </option>
        {options?.map((option, idx) => (
          <option key={idx}> {option}</option>
        ))}
      </select>
      {errors?.[name] && (
        <span className=" absolute bottom-[-25%] left-1 text-[12px] text-[#FF4949]">
          {name} is required
        </span>
      )}
    </div>
  );
};

export default SelectionBox;
