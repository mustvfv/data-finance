import React from "react";

import Laptop from "../assets/laptop.jpg";
import Button from "./Button";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-6" src={Laptop} alt="" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="text-black text-justify md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, debitis? Tenetur dolor blanditiis saepe alias, numquam
            eius cumque vitae sint architecto quia harum delectus molestiae
            aliquam id. Culpa, nobis laborum?
          </p>
          <Button
            text={"Get Started"}
            bgColor={"black"}
            textColor={"#00df9a"}
            theme="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
