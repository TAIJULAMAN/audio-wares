import React from "react";
import { Collapse } from "react-collapse";
import { FaMinus, FaPlus } from "react-icons/fa";

const FaqCard = ({ open, toggle, title, desc }) => {
  return (
    <div className="pt-[4px] mt-2">
      <div
        className=" bg-slate-100 py-4 lg:px-[50px] px-5 flex justify-between items-center cursor-pointer rounded-t-xl"
        onClick={toggle}
      >
        <p className=" text-xl font-semibold">{title} </p>
        <div className=" text-lg">{open ? <FaMinus size={20} /> : <FaPlus size={20} />}</div>
      </div>

      <Collapse isOpened={open}>
        <div className=" bg-slate-100 rounded-b-xl px-[50px] pb-[20px]">{desc}</div>
      </Collapse>
    </div>
  );
};

export default FaqCard;
