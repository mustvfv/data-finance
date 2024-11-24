import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import Card from "./Card";

const CardsContainer = () => {
  return (
    <div className="w-full py-[10rem] px-8 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 sm:gap-14">
        <Card
          image={Single}
          title={"Single User"}
          price={"$149"}
          text_1={"500 GB Storage"}
          text_2={"1 Granted User"}
          text_3={"Send up to 2 GB"}
        />
        <Card
          theme="focus"
          image={Double}
          title={"Single User"}
          price={"$149"}
          text_1={"500 GB Storage"}
          text_2={"1 Granted User"}
          text_3={"Send up to 2 GB"}
        />
        <Card
          image={Triple}
          title={"Single User"}
          price={"$149"}
          text_1={"500 GB Storage"}
          text_2={"1 Granted User"}
          text_3={"Send up to 2 GB"}
        />
      </div>
    </div>
  );
};

export default CardsContainer;
