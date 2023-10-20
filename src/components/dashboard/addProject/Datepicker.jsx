// DatePicker.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import "react-datepicker/dist/react-datepicker-cssmodules.css"; // Optional CSS modules
import { data } from "autoprefixer";

const Datepicker = ({ name, errors, setValue }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  // console.log(name);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setValue(name, date);
  };

  return (
    <div className="relative col-span-3 md:col-span-1  flex flex-col w-full text-[#8B8B8B] ">
      <label htmlFor={name}>{name} Date</label>
      <DatePicker
        className={`text-black placeholder:text-black bg-white px-3 py-2 transition-all cursor-pointer hover:border-blue-600/30 border border-gray-200 rounded-lg outline-blue-600/50 appearance-none invalid:text-black/30 w-full ${
          errors[name] && "border-[#FF4949]"
        }`}
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MMM-dd, yyyy"
        isClearable
        placeholderText={`Choose ${name} Date`}
      />
      {errors?.[name] && (
        <span className=" absolute bottom-[-25%] left-1 text-[12px] text-[#FF4949]">
          {name} is required
        </span>
      )}
    </div>
  );
};

export default Datepicker;
