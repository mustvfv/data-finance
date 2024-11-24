import React from "react";
import Button from "./Button";

const Card = ({ image, text_1, text_2, text_3, price, title, theme }) => {
  if (theme === "focus")
    return (
      <div className="w-full bg-slate-50 shadow-xl flex flex-col items-center sm:scale-110 p-4 my-10 sm:my-8 rounded-lg hover:scale-105 sm:hover:scale-125 duration-500">
        <img className="w-20 mx-auto mt-[-3rem]" src={image} alt="" />
        <h2 className="text-2xl font-bold text-center py-5">{title}</h2>
        <p className="text-center text-4xl font-bold pb-4">{price}</p>
        <div className="text-center font-medium">
          <p className="py-2 border-b mx-8">{text_1}</p>
          <p className="py-2 border-b mx-8">{text_2}</p>
          <p className="py-2 border-b mx-8">{text_3}</p>
        </div>
        <Button text={"Start Trial"} bgColor={"black"} textColor={"#00df9a"} />
      </div>
    );
  return (
    <div className="w-full shadow-xl flex flex-col items-center p-4 my-8 rounded-lg hover:scale-105 duration-500">
      <img className="w-20 mx-auto mt-[-3rem] " src={image} alt="" />
      <h2 className="text-2xl font-bold text-center py-5">{title}</h2>
      <p className="text-center text-4xl font-bold pb-4">{price}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8">{text_1}</p>
        <p className="py-2 border-b mx-8">{text_2}</p>
        <p className="py-2 border-b mx-8">{text_3}</p>
      </div>
      <Button text={"Start Trial"} bgColor={"#00df9a"} />
    </div>
  );
};

export default Card;
