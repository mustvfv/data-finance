import React from "react";

const Button = ({ text, bgColor, textColor, theme }) => {
  if (theme === "primary") {
    return (
      <button
        style={{ backgroundColor: bgColor, color: textColor }}
        className="w-[200px] rounded-md font-bold mx-auto py-2 mt-9"
      >
        {text}
      </button>
    );
  }
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      className="w-[200px] rounded-md font-bold my-6 px-4 py-2 "
    >
      {text}
    </button>
  );
};

export default Button;
