"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IconAppWindow } from "@tabler/icons-react";


import { BackgroundGradient } from "@/components/ui/background-gradient";

const From = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [input, setInput] = useState("");
  const [toinput, tosetInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
    // fetchData(value);
  };

  const tohandleChange = (value1) => {
    tosetInput(value1);
    // fetchData(value1);
  };

  return (
    // <div className="flex flex-col w-[75%] mx-auto p-8 bg-slate-300 border-double border-4 rounded-3xl font-bold text-black ml-3 mr-3">
    <div className="w-[80%]">
    <BackgroundGradient className="flex flex-col rounded-[22px] w-full p-4 sm:p-10 bg-slate-300 dark:bg-zinc-900">
      <form>
        <div className="flex flex-col mt-4">
          <label htmlFor="from">From</label>
          <input
            type="text"
            id="from"
            placeholder="From"
            className="w-full mt-2 p-2 border rounded"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="to">To</label>
          <input
            type="text"
            id="to"
            placeholder="To"
            className="w-full mt-2 p-2 border rounded"
            value={toinput}
            onChange={(e) => tohandleChange(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="dateTime">Date/Time</label>
          <br />
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            showTimeSelect
            dateFormat="Pp"
            placeholderText="Select Date and Time"
            className="w-full mt-2 p-2 border rounded"
          />
        </div>

        <div className="flex items-center justify-center mt-8">
          <button
            type="button"
            className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700"
          >
            Find
          </button>
        </div>
      </form>
      </BackgroundGradient>
      </div>
    // </div>
  );
};

export default From;