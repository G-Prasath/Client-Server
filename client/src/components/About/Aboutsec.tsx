import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Aboutsec = () => {
  return (
    <div className="w-full sec-padding flex items-center justify-evenly gap-x-20 max-lg:flex-col">
      <div className="w-2/4 max-md:w-full text-center max-lg:w-full">
        <h1 className="uppercase text-4xl font-bold mb-5 max-lg:text-3xl">
          About Us{" "}
        </h1>
        <p className="text-text_color my-5 text-justify max-md:px-2">
          E STAR Engineers Private Limited, born from the evolution of MECH CI
          CADD Group in 1995, pioneers in design, manufacturing, and
          commissioning of Automatic Multi-Level Car Parking/Bike Parking
          systems. As an engineering-based company with vast experience in
          engineering design and consultancy services, we specialize in various
          cutting-edge Car Parking Systems, including 2 Post Hydraulic Parking,
          4 Post Hydraulic Parking, Puzzle Parking, Shuttle Parking, Tower
          Parking, Multilevel Stacked Rotary Parking, ASRS, and Car Elevator.
        </p>
        <p className="text-text_color my-5 text-justify max-md:px-2">
          At E STAR Engineers, we specialize in crafting futuristic Car Parking
          Systems through design, manufacturing, erection, and commissioning.
          Fueled by innovation, sustainability, and customer-centricity, we
          commence on a mission to redefine parking solutions. Our vision
          propels us to set global benchmarks as engineering leaders. Drawing
          strength from our expertise, we continuously evolve to meet client
          needs. With unwavering dedication to excellence and boundary-pushing,
          we envision a future where parking solutions seamlessly merge
          efficiency, sustainability, and unmatched quality, delivering enduring
          value to all stakeholders.
        </p>
      </div>

      <div className="w-2/4 rounded-lg max-lg:w-full ">
        <div className="w-full h-[505px] max-lg:w-full max-lg:h-[350px] overflow-hidden rounded-lg">
          <LazyLoadImage
            src="Aboutus/About-Image.jpg"
            alt="about"
            className="w-full h-full aspect-square rounded-lg hover:scale-110 duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutsec;
