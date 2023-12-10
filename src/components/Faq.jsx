import { useState } from "react";
import FaqCard from "../layouts/FaqCard";
import img from "../assets/img/faq.png"

const Faq = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };

  const accordionData = [
    {
      title: "This is first question",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, fugit?"
    },
    {
      title: "This is Second question",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, fugit?"
    },
    {
      title: "This is third question",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, fugit?"
    },
    {
      title: "This is fourth question",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, fugit?"
    },
  ];

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold mt-24 text-center lg:text-start">
        FAQs
      </h1>

      <h3 className=" text-xl font-medium mt-4">What People Asks From Us</h3>

      <div className=" flex flex-col lg:flex-row items-center justify-center">
        <div className=" w-full lg:w-3/4">
            <img src={img} alt="img" />
        </div>
        <section className="w-full grid place-items-center">
          <div className=" lg:px-[40px] max-w-[800px] -mt-10">
            {accordionData.map((data, index) => {
              return (
                <FaqCard
                  key={index}
                  open={index === open}
                  title={data.title}
                  desc={data.desc}
                  toggle={() => toggle(index)}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Faq;
