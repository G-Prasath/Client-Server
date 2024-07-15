import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Blogs = () => {
  return (
    <div className="w-full sec-padding flex items-center flex-col bg-light_white">
      <p className="font-bold text-[30px] text-center mb-8 uppercase">Blog</p>

      <div className="w-full flex max-md:flex-col max-lg:flex-col gap-3">
        <div className="w-1/2 max-lg:w-full rounded-md relative aspect-square overflow-hidden">
          <LazyLoadImage
            src="blog/1.jpg"
            alt="Blog"
            className="w-full h-full rounded-md hover:scale-[1.1] transition ease-in-out duration-500"
          />

          <div className="w-full bg-light_white absolute bottom-3 flex flex-col items-center justify-center opacity-[.9] py-1">
            <h5 className="uppercase font-[700] text-[16px] max-lg:text-[14px]">
              AMRITSAR SMARTCITY PROJECT
            </h5>
            <p className="uppercase text-[12px] font-[700]">
              Shuttle Stacker Parking system
            </p>
            <p className="uppercase text-[10px] font-[500]">Ongoing</p>
          </div>
        </div>

        <div className="w-1/2 max-lg:w-full grid grid-cols-2 gap-3">
          <div className="w-full aspect-square rounded-md relative overflow-hidden">
            <LazyLoadImage
              src="blog/3.png"
              alt="Blog"
              className="w-full h-full rounded-md hover:scale-[1.1] transition ease-in-out duration-500"
            />
            <div className="w-full bg-light_white absolute bottom-3 flex flex-col items-center justify-center opacity-[.9] py-1">
              <h5 className="uppercase font-[700] text-[16px] max-lg:text-[14px] max-sm:text-[12px] text-center">
                Chennai Trade Center
              </h5>
              <p className="uppercase text-[12px] font-[700] max-sm:text-[10px] text-center">
                Waremat Expo
              </p>
              <p className="uppercase text-[10px] font-[500]">
                2<sup>nd</sup>, 3<sup>rd</sup>, 4<sup>th</sup> May, 2024
              </p>
            </div>
          </div>
          <div className="w-full aspect-square rounded-md relative overflow-hidden">
            <LazyLoadImage
              src="blog/2.jpg"
              alt="Blog"
              className="w-full h-full rounded-md hover:scale-[1.1] transition ease-in-out duration-500"
            />
            <div className="w-full bg-light_white absolute bottom-3 flex flex-col items-center justify-center opacity-[.9] py-1">
              <h5 className="uppercase font-[700] text-[16px] max-lg:text-[14px] max-sm:text-[12px]">
                TN HOUSING BOARD
              </h5>
              <p className="uppercase text-[12px] font-[700] max-sm:text-[10px] text-center">
                1+1 2 POST SYSTEM
              </p>
              <p className="uppercase text-[10px] font-[500]">
                28<sup>th</sup> April, 2024
              </p>
            </div>
          </div>
          <div className="w-full aspect-square rounded-md relative overflow-hidden">
            <LazyLoadImage
              src="blog/4.jpg"
              alt="Blog"
              className="w-full h-full rounded-md hover:scale-[1.1] transition ease-in-out duration-500"
            />
            <div className="w-full bg-light_white absolute bottom-3 flex flex-col items-center justify-center opacity-[.9] py-1">
              <h5 className="uppercase font-[700] text-[16px] max-lg:text-[14px] max-sm:text-[12px]">
                Thrissur cORPORATION
              </h5>
              <p className="uppercase text-[12px] font-[700] max-sm:text-[10px] text-center">
                tower parking
              </p>
              <p className="text-[10px] font-[500] text-center">
                19<sup>th</sup> February, 2024
              </p>
            </div>
          </div>
          <div className="w-full aspect-square rounded-md relative overflow-hidden ">
            <LazyLoadImage
              src="blog/5.png"
              alt="Blog"
              className="w-full h-full rounded-md hover:scale-[1.1] transition ease-in-out duration-500"
            />
            <div className="w-full bg-light_white absolute bottom-3 flex flex-col items-center justify-center opacity-[.9] py-1">
              <h5 className="uppercase font-[700] text-[16px] max-lg:text-[14px] max-sm:text-[12px]">
                Summer Bliss
              </h5>
              <p className="uppercase text-[12px] font-[700] max-sm:text-[10px] text-center">
                Easing Chennai's Thirst
              </p>
              <p className=" text-[10px] font-[500]">
                11<sup>th</sup> May, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
