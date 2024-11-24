import React from "react";
import Button from "./Button";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto md:px-4 grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4 lg:ml-2">
          <div className="flex md:flex-col flex-row justify-center items-center md:items-start">
            <input
              className="p-2 w-full flex rounded-md text-black md:mr-0 mr-4"
              type="email"
              placeholder="Enter Email"
            />
            <Button
              text={"Notify Me"}
              bgColor={"#00df9a"}
              textColor={"black"}
            />
          </div>
          <p>
            We care about the protection of your data. Read Our{" "}
            <a href="/" className="text-[#00df9a]">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
