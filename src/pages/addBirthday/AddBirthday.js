import React from "react";
import Button from "./../../components/button/Button";
import "./AddBirthday.css";
const AddBirthday = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[70vw] max-h-[70vh] flex flex-col rounded-xl md:rounded-3xl main">
        <div className="addBirthdayHeader mb-4">
          <h1 className="font-bold text-2xl md:text-4xl text-[#084887]">
            Add Birthday
          </h1>
        </div>
        <div className="flex flex-col h-full">
          <form>
            <div className="flex justify-evenly w-full flex-wrap h-full">
              <div className="flex flex-col w-[35%]">
                <label
                  htmlFor="name"
                  className="text-left text-[#084887] font-bold"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name e.g: Abu Hurairah"
                  className="placeholder:text-[#28629c] bg-transparent border-b-2 border-[#084887] text-[#084887] outline-none px-2 py-1 font-medium"
                />
              </div>
              <div className="flex flex-col w-[35%]">
                <label
                  htmlFor="dob"
                  className="text-left text-[#084887] font-bold"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="placeholder:text-[#28629c] bg-transparent border-b-2 border-[#084887] text-[#084887] outline-none px-2 py-1 font-medium"
                />
              </div>
              <div className="mt-4 flex flex-col w-[80%]">
                <label
                  htmlFor="phone"
                  className="text-left text-[#084887] font-bold numberLabel"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  className="placeholder:text-[#28629c] bg-transparent border-b-2 border-[#084887] text-[#084887] outline-none px-2 py-1 font-medium"
                />
              </div>
              <div className="flex flex-col w-[35%] mt-4">
                <label
                  htmlFor="time"
                  className="text-left text-[#084887] font-bold"
                >
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  className="placeholder:text-[#28629c] bg-transparent border-b-2 border-[#084887] text-[#084887] outline-none px-2 py-1 font-medium"
                />
              </div>
              <div className="self-end flex w-full justify-around my-5">
                <Button label="Clear" />
                <Button label="Submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBirthday;
