import React from "react";

const FeaturesCard = (props) => {
  return (
    <div className=" flex flex-col items-center text-center p-5 w-full lg:w-1/4 border-2 border-brightColor bg-[#F0F0F6] cursor-pointer rounded-xl gap-2 hover:shadow-[0_3px_10px_rgb(0,0,0,0.5)]">
      {props.icon}
      <h3 className=" font-semibold text-xl"> {props.title} </h3>
      <p className=" text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        doloremque aperiam veniam ducimus praesentium necessitatibus harum cum
        asperiores quos mollitia.
      </p>
    </div>
  );
};

export default FeaturesCard;
