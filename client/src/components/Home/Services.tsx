import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaCircleArrowRight } from "react-icons/fa6";
import FaqsItems from "./FaqsItems";
import { HomeService } from "../../data/HomeData";
import { Link } from "react-router-dom";

const Services = () => {
  const [arrIndex, setArrIndex] = useState(0);

  const changeService = (index: any) => {
    setArrIndex(index);
  };

  return (
    <>
      <div className="w-full sec-padding flex items-center justify-between max-lg:hidden">
        <div className="w-2/5 pl-10">
          <h5 className="text-[30px] font-bold mb-8 uppercase max-lg:text-center">
            Services
          </h5>
          <ul className="flex flex-col gap-y-[7.5px]">
            {HomeService.map((item, index) => (
              <li key={index} onClick={() => changeService(index)}>
                <div
                  className={`flex items-center cursor-pointer pl-4 ${
                    arrIndex === index ? "bg-primary rounded-l-lg" : ""
                  } `}
                >
                  <FaCircleArrowRight
                    fontSize={20}
                    className={`${
                      arrIndex === index
                        ? "text-white animate-none"
                        : "text-text_color animate-pulse"
                    } `}
                  />
                  <span
                    className={`font-[700] p-4 uppercase ${
                      arrIndex === index ? "text-white" : "text-text_color"
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/5">
          {HomeService.map((item, index) => {
            if (index === arrIndex) {
              return (
                <div key={index} className="bg-primary p-4 rounded-lg">
                  <div className="serivce-right_img w-full aspect-video overflow-hidden">
                    <LazyLoadImage
                      src={item.img}
                      alt="service_img"
                      className="transistion hover:scale-[1.1] duration-500 animate-[pulse_.8s_ease-in-out] rounded-md w-full h-full"
                    />
                  </div>
                  <div className="service-right_img mt-5 text-white">
                    {item.content}
                  </div>
                  <div className="service-right_btn mt-5 flex items-center justify-end">
                    {item.broucher ? (
                      <Link
                        to={item.broucher}
                        target="_blank"
                        className="text-gray font-bold border border-white px-[15px] ml-2 py-[8px] rounded-full hover:text-primary hover:bg-white"
                      >
                        Prospectus
                      </Link>
                    ) : (
                      ""
                    )}

                    <Link
                      to={item.link}
                      className="text-gray font-bold border border-prmary px-[15px] ml-2 py-[8px] rounded-full hover:text-primary hover:bg-white"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>

      <FaqsItems />
    </>
  );
};

export default Services;
