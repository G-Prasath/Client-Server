import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Cards = ({ card1, card2, card3 }) => {

  return (
    <div className="sec-padding bg-[#EDFFFD80]">

      <div className="service-card">

        {/* ----------- Card 1 -----------  */}
        <div className="w-full card-1 flex items-center justify-between max-lg:flex-col max-lg:my-10">
          <div className="card-img w-2/5 h-[500px] rounded-lg flex items-center justify-center max-[1200px]:h-[400px] max-lg:w-full max-lg:h-auto max-sm:aspect-square">
            <LazyLoadImage
              src={card1.img}
              alt="Card Images"
              className="rounded-lg w-full z-10 h-full"
            />
          </div>

          <div data-aos="fade-right"  data-aos-offset="100" data-aos-easing="ease-in-sine" className="card-cnt w-3/5 bg-light_white flex flex-col items-center max-lg:w-[90%] max-sm:w-full px-5">
            <div className="flex items-center justify-center gap-5 my-6 max-sm:flex-col max-sm:my-5 max-sm:gap-2">
              <h6 className="text-center text-3xl font-[700] uppercase max-sm:text-2xl">
                {card1.title}
              </h6>

            </div>

            <ul className="mb-5"> 
            {
              Object.keys(card1.para).map((items, index) => (
              <li className="mb-3" key={index}>
                  <p>
                    <span className="font-[700]">{items}</span> : {card1.para[items]}
                  </p>
                </li>
              ))
            }   
            </ul>


          </div>

          <div data-aos="fade-right"  data-aos-offset="200" data-aos-easing="ease-in-sine" className="card-bar h-[400px] w-10 bg-gray rounded-full max-lg:h-10 max-lg:w-full max-sm:rounded-t-lg"></div>
        </div>

        {/* ---------- Card 2 -------------  */}
        <div className="w-full card-2 flex items-center justify-between max-lg:flex-col  max-lg:my-10">
          <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" className="card-bar h-[400px] w-10 bg-gray rounded-full max-lg:h-10 max-lg:w-full max-sm:rounded-t-lg max-lg:order-3"></div>

          <div data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" className="card-cnt px-5 w-3/5 bg-light_white flex flex-col items-center max-lg:w-[90%] max-sm:w-full max-lg:order-2">
            <div className="flex items-center justify-center gap-5 my-5 max-sm:flex-col max-sm:my-5 max-sm:gap-2">
              <h6 className="text-center text-3xl font-[700] uppercase max-sm:text-2xl">
                {card2.title}
              </h6>

            </div>

            <ul className="mb-5"> 
            {
              Object.keys(card2.para).map((items, index) => (
              <li className="mb-3" key={index}>
                  <p>
                    <span className="font-[700]">{items}</span> : {card2.para[items]}
                  </p>
                </li>
              ))
            }   
            </ul>
          </div>

          <div className="card-img w-2/5 h-[500px] rounded-lg flex items-center justify-center max-[1200px]:h-[400px] max-lg:w-full max-lg:h-auto max-sm:aspect-square max-lg:order-1">
            <LazyLoadImage
              src={card2.img}
              alt="Card Images"
              className="rounded-lg w-full z-10 h-full"
            />
          </div>
        </div>

        {/* ----------- Card 3 ------------- */}
        <div className="w-full card-1 flex items-center justify-between max-lg:flex-col max-lg:my-10">
          <div className="card-img w-2/5 h-[500px] rounded-lg flex items-center justify-center max-[1200px]:h-[400px] max-lg:w-full max-lg:h-auto max-sm:aspect-square">
            <LazyLoadImage
              src={card3.img}
              alt="Card Images"
              className="rounded-lg w-full h-full z-10"
            />
          </div>

          <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="card-cnt w-3/5 bg-light_white flex flex-col items-center max-lg:w-[90%] max-sm:w-full px-5">
            <div className="flex items-center justify-center gap-5 my-8 max-sm:flex-col max-sm:my-5 max-sm:gap-2">
              <h6 className="text-center text-3xl font-[700] uppercase max-sm:text-2xl">
                {card3.title}
              </h6>

            </div>

            <ul className="mb-5"> 
            {
              Object.keys(card3.para).map((items, index) => (
              <li className="mb-3" key={index}>
                  <p>
                    <span className="font-[700]">{items}</span> : {card3.para[items]}
                  </p>
                </li>
              ))
            }   
            </ul>
          </div>

          <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="card-bar h-[400px] w-10 bg-gray rounded-full max-lg:h-10 max-lg:w-full max-sm:rounded-t-lg"></div>
        </div>

      </div>
    </div>
  );
};

export default Cards;
