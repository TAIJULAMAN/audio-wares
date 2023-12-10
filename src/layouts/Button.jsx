import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className=" bg-backgroundColor text-white px-4 py-2 rounded-md hover:bg-brightColor transition duration-300 ease-in-out">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
