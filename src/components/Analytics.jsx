import React from "react";

import Laptop from "../assets/laptop.jpg";
import Button from "./Button";

const Analytics = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 py-20 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <img
            className="w-full max-w-[500px] mx-auto my-6 rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            src={Laptop}
            alt="Analytics Dashboard"
          />
        </div>
        <div className="flex flex-col gap-4 order-1 md:order-2">
          <span className="text-[#00df9a] font-bold tracking-wider text-sm">
            DATA ANALYTICS DASHBOARD
          </span>
          <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold leading-tight">
            Manage Data Analytics{' '}
            <span className="text-[#00df9a]">Centrally</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, debitis? Tenetur dolor blanditiis saepe alias, numquam
            eius cumque vitae sint architecto quia harum delectus molestiae.
          </p>
          <div className="mt-4">
            <Button
              text="Get Started"
              bgColor="black"
              textColor="#00df9a"
              theme="primary"
              className="hover:scale-105 transform transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
