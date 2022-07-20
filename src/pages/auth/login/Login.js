import React from "react";
import Button from "../../../components/button/Button";

const Login = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[70vw] max-h-[70vh] flex flex-col rounded-xl md:rounded-3xl main">
        <div className="addBirthdayHeader my-4 flex justify-center items-center mx-6">
          <h1 className="font-bold text-2xl md:text-4xl text-[#084887]">
            Login
          </h1>
        </div>
        <div className="flex flex-col h-full">
          <form>
            <div className="flex justify-evenly w-full flex-wrap h-full">
              <div className="mt-4 flex flex-col w-[80%]">
                <label
                  htmlFor="email"
                  className="text-left text-[#084887] font-bold text-xl"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="placeholder:text-[#3178c0] bg-transparent border-b-2 border-[#084887] text-[#084887] outline-none px-2 py-1 font-medium"
                />
              </div>

              <div className="mt-4 flex flex-col w-[80%]">
                <label
                  htmlFor="password"
                  className="text-left text-[#084887] font-bold text-xl"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="placeholder:text-[#3178c0] bg-transparent border-b-2 border-[#084887] text-[#084887] outline-none px-2 py-1 font-medium"
                />
              </div>

              <div className="self-end flex w-full justify-around my-5">
                <Button label="Login" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
