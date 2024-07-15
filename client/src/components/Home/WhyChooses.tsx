import React from "react";
import { Whychoose } from "../../data/HomeData";

const WhyChooses = () => {
  return (
    <div  className="sec-padding grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Map over JSON data */}
      {Whychoose.map((item, index) => (
        <div
          key={index}
          className={`w-full p-10 max-md:p-3 ${
            index === 0 ? "bg-white" : "bg-light_white"
          }`}
        >
          <h2 data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="200" className={`${
            index === 0 ? "text-5xl font-[700]" : "text-4xl font-[700]"
          } ${index === 0 ? "text-black max-md:text-4xl" : "text-text_color"} mb-2 `}>
            {item.title}
          </h2>
          <p data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="200" className="text-2xl font-[700] text-text_color mb-2 max-sm:text-xl">{item.question}</p>
          <p data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="200" className="text-text_color max-sm:text-justify">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default WhyChooses;
