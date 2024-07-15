import React from "react";
import { GalleryData } from "../../data/GalleryData";
import Gallery_Card from "./Gallery_Card";

const Compltedproject = () => {
  return (
    <div className="sec-padding w-full">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-center uppercase text-3xl max-md:text-2xl font-[700]">
          Completed Projects
        </h1>
        <p className="text-center w-[1000px] mt-4 max-lg:w-full max-lg:text-justify">
          Our portfolio of completed projects reflects our passion for
          innovation and precision. Each project is a testament to our team's
          skill and dedication, demonstrating our ability to deliver outstanding
          results on time and within budget for our clients.
        </p>
      </div>

      <div className="flex items-center justify-center gap-5 max-lg:flex-col">
        <div className="w-full p-5 flex flex-col justify-between gap-5 max-lg:p-0">
          {GalleryData.slice(0, 3).map((item, index) => (
            <Gallery_Card
              imgSrc={item.imgSrc}
              Alt={item.Alt}
              para={item.para}
              key={index}
            />
          ))}
        </div>
        <div className="w-full p-5 flex flex-col justify-evenly max-lg:p-0 gap-5">
          {GalleryData.slice(3, 5).map((item, index) => (
            <Gallery_Card
              imgSrc={item.imgSrc}
              Alt={item.Alt}
              para={item.para}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compltedproject;
