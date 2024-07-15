import React from "react";
import { OurteamData } from "../../data/AboutData";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Ourteam = () => {
  return (
    <div className="sec-padding bg-light_white w-full">
      <h6 className="text-center text-4xl font-[700] uppercase">our team</h6>

      <div className="flex items-center gap-10 justify-between my-10 max-lg:flex-col max-lg:gap-y-5">

        <div className="w-2/4 max-lg:w-full flex justify-center overflow-hidden">
          <LazyLoadImage
            src="/ourteam.png"
            alt="Team-Members"
            className="w-[700px] h-[480px] max-sm:w-full max-sm:h-full bg-contain bg-center rounded-lg hover:scale-105 duration-300"
          />
        </div>

        <div className="w-2/4 max-lg:w-full text-center">
          <h6 className="text-2xl font-[700] uppercase">jAYARAMAN k</h6>
          <small className="text-[16px] uppercase tracking-wide">
            mANAGING dIRECTOR
          </small>
          <p className="text-text_color my-4 text-justify max-md:px-2">
            At E STAR Engineers, our esteemed founder and CEO, Mr. K. Jayaraman,
            boasts a visionary leadership with a three-decade-long career in
            engineering. With a passion for innovation and unwavering commitment
            to excellence, he shapes our company's trajectory. With over 30
            years of hands-on experience, Mr. Jayaraman drives our company with
            a clear vision and strategic direction, leveraging expertise in
            design, manufacturing, project management, and client relations to
            propel us forward.
          </p>
          <p className="text-text_color text-justify max-md:px-2">
            With over three decades of expertise, our CEO propels E STAR
            Engineers with a clear vision and strategic direction. Under his
            stewardship, we've emerged as a leader in parking solutions, revered
            for innovation and reliability. Under his visionary leadership, we
            are inspired to exceed limits, offering solutions that set new
            benchmarks in the industry.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10 content-center max-lg:grid-cols-2 max-sm:grid-cols-1">
        {OurteamData.map((item, index) => (
          <div
            className="team-card bg-gray p-4 w-full rounded-lg flex flex-col items-center"
            key={index}
          >
            <div className="team-img overflow-hidden">
              <LazyLoadImage
                src={item.img}
                alt="Our Team Img"
                className="w-full rounded-lg hover:scale-110 duration-300"
              />
            </div>
            <h6 className="text-2xl font-[700] mt-4 tracking-wide uppercase">
              {item.name}
            </h6>
            <small className="text-[16px] uppercase">{item.posistion}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourteam;
