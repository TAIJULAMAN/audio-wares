import React from "react";
import FeaturesCard from "../layouts/FeaturesCard";
import { FaUsers, FaDropbox, FaXbox } from "react-icons/fa";
import { LuBoxes } from "react-icons/lu";

const Features = () => {
  const icon1 = <FaUsers size={65} className=" text-backgroundColor" />;
  const icon2 = <FaDropbox size={65} className=" text-backgroundColor" />;
  const icon3 = <FaXbox size={65} className=" text-backgroundColor" />;
  const icon4 = <LuBoxes size={65} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold mt-24 lg:mt-10 text-center lg:text-start">
        Product Features
      </h1>
      <p className=" mt-2 text-center lg:text-start">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure excepturi
        corporis veritatis eum molestias facere.
      </p>
      <div className=" flex flex-col lg:flex-row gap-4 mt-12">
        <FeaturesCard icon={icon1} title="User Friendly" />
        <FeaturesCard icon={icon2} title="Latest Technology" />
        <FeaturesCard icon={icon3} title="High Quality" />
        <FeaturesCard icon={icon4} title="Awesome Design" />
      </div>
    </div>
  );
};

export default Features;
