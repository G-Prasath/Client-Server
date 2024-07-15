import React from "react";
import CountUp from "react-countup";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Funfact = () => {
  return (
    <>
      <div className="sec-heading">
        <h2 className="text-center font-[700] pb-5 text-[30px] max-lg:mt-5">
          OUR ACHIVEMENTS
        </h2>
      </div>
<div className="flex items-center w-full max-lg:flex-col relative gap-[20px] max-lg: flex-cols px-[5%] max-lg:p-5">
        <div className="grid grid-cols-2 gap-2 w-2/5 max-lg:w-full">

          <div className="bg-light_white inline-flex items-center justify-center w-full h-[230px]">
            <div className="flex flex-col">
              <div className="max-md:text-center">
                <CountUp
                  end={25}
                  duration={8}
                  className="text-5xl font-[1000] text-center"
                />
                <span className="text-5xl font-bold">+</span>
              </div>
              <p className="mt-2 uppercase text-center">Years experience</p>
            </div>
          </div>

          <div className="bg-light_white inline-flex items-center justify-center w-full h-[230px]">
            <div className="flex flex-col">
              <div className="max-md:text-center">
                <CountUp
                  end={30}
                  duration={8}
                  className="text-5xl font-[1000]"
                />
                <span className="text-5xl font-bold">+</span>
              </div>
              <p className="mt-2 uppercase text-center">Successful Clients</p>
            </div>
          </div>


          <div className="bg-light_white inline-flex items-center justify-center w-full h-[230px]">
            <div className="flex flex-col">
              <div className="max-md:text-center">
                <CountUp
                  end={50}
                  duration={8}
                  className="text-5xl font-[1000]"
                />
                <span className="text-5xl font-bold">+</span>
              </div>
              <p className="mt-2 uppercase text-center">Staffs Strength</p>
            </div>
          </div>
          
          <div className="bg-light_white inline-flex items-center justify-center w-full h-[230px]">
            <div className="flex flex-col">
              <div className="max-md:text-center">
                <CountUp
                  end={100}
                  duration={8}
                  className="text-5xl font-[1000]"
                />
                <span className="text-5xl font-bold">+</span>
              </div>
              <p className="mt-2 uppercase text-center">Project installations</p>
            </div>
          </div>
        </div>

        <div className="w-3/5 max-lg:w-full grid grid-cols-2 gap-3">
          <div className="bg-tst h-[244px] max-md:h-[200px] overflow-hidden">
            <LazyLoadImage
              src="/achievement-1.jpeg"
              alt="funfact_img"
              className="w-full h-full hover:scale-[1.7] transition ease-in-out duration-500 object-contain max-md:object-cover scale-[1.5]"
            />
          </div>
          <div className="bg-tst row-span-2 max-lg:order-2 max-lg:col-span-2 overflow-hidden">
            <LazyLoadImage
              src="/achievement-3.jpeg"
              alt="funfact_img"
              className="w-full h-full hover:scale-[1.1] transition ease-in-out duration-500 object-cover"
            />
          </div>
          <div className="bg-tst h-[244px] max-md:h-[200px] overflow-hidden">
            <LazyLoadImage
              src="/achievement-2.jpeg"
              alt="funfact_img"
              className="w-full h-full hover:scale-[1.1] transition ease-in-out duration-500 object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Funfact;
