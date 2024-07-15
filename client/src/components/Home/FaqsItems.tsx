import React, { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { HomeService } from "../../data/HomeData";
import { Link } from "react-router-dom";

const FaqsItems = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full sec-padding hidden max-lg:block mt-5">
      <h5 className="text-[25px] font-bold mb-5 uppercase">Services</h5>
      <div className="accordion">
        {HomeService.map((item, index) => (
          <div key={index} className="shadow-custom my-2 px-5 rounded-lg">
            

            {/* Accordion Button */}
            <button
              className="w-full py-4 text-left flex justify-between items-center focus:outline-none"
              aria-controls={`accordion-item-${index}`}
              aria-expanded={openIndex === index ? "true" : "false"}
              onClick={() => handleToggle(index)}
            >
              <span className="font-medium uppercase">{item.name}</span>
            </button>


            {/* Accordion Content */}
            <div
              id={`accordion-item-${index}`}
              className={`accordion-content py-4 ${
                openIndex === index ? "" : "hidden"
              }`}
            >
              <div key={index}>
                <div className="serivce-right_img w-full aspect-video overflow-hidden">
                  <LazyLoadImage
                    src={item.img}
                    alt="service_img"
                    className="transistion hover:scale-[1.1] duration-500 animate-[pulse_.8s_ease-in-out]"
                  />
                </div>
                <div className="service-right_img mt-5">{item.content}</div>
                <div className="service-right_btn mt-5 flex items-center justify-end">
                  {item.broucher ? (
                      <Link
                        to={item.broucher}
                        target="_blank"
                        className="text-primary font-bold border border-primary px-[15px] ml-2 py-[8px] rounded-full hover:text-primary hover:bg-white"
                      >
                        Prospectus
                      </Link>
                    ) : (
                      ""
                    )}
                  <Link
                    to={item.link}
                    className="text-primary ml-2 font-bold border border-primary px-[15px] py-[8px] rounded-full hover:text-white hover:bg-primary"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqsItems;
