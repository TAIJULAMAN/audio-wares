import React from "react";
import img from "../assets/img/about.png";
import { HiCheckBadge } from "react-icons/hi2";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row items-center justify-between lg:px-32 px-5 pt-6">
      <div>
        <img src={img} alt="img" />
      </div>
      <div className=" w-full lg:w-2/4 space-y-4">
        <h1 className="text-4xl font-semibold">About Products</h1>
        <h2 className=" text-2xl font-medium pt-4">
          Experience audio redefined. Our headsets deliver quality, comfort, and
          style in every note.
        </h2>
        <p className=" text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
          inventore quibusdam fugit voluptatum ab est adipisci blanditiis
          asperiores fuga repudiandae!
        </p>
        <div className=" flex gap-2 font-semibold">
          <HiCheckBadge size={25} className=" text-backgroundColor" />
          <h2>Wireless Headphones</h2>
        </div>
        <div className=" flex gap-2 font-semibold">
          <HiCheckBadge size={25} className=" text-backgroundColor" />
          <h2>High Quality Sounds</h2>
        </div>
        <div className=" flex gap-2 font-semibold">
          <HiCheckBadge size={25} className=" text-backgroundColor" />
          <h2>Voice Call Facility</h2>
        </div>
        <div className=" flex gap-2 font-semibold">
          <HiCheckBadge size={25} className=" text-backgroundColor" />
          <h2>Nice and Soft Design</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
