import React from "react";
import "./Home_banner.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Home_banner = () => {
  const slideOptions = {
    type: "loop",
    autoplay: true, // Set autoplay to true
    interval: 2000, // Set autoplay interval in milliseconds
    arrows: false,
  };

  return (
    <div className="main">
      <Splide options={slideOptions}>
        <SplideSlide className="item1">
          <div className="banner-slide"></div>
          <div className="banner-container">
            <h2 className="text-5xl max-lg:text-3xl max-sm:text-xl">Shuttle Parking for Streamlined Convenience</h2>
          </div>
        </SplideSlide>

        <SplideSlide className="item2">
          <div className="banner-slide"></div>
          <div className="banner-container">
            <h2 className="text-5xl max-lg:text-3xl max-sm:text-xl">Innovative Puzzle Parking Smart Solutions</h2>
          </div>
        </SplideSlide>

        <SplideSlide className="item3">
          <div className="banner-slide"></div>
          <div className="banner-container">
            <h2 className="text-5xl max-lg:text-3xl max-sm:text-xl">ASRS : Effortless Material Handling</h2>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Home_banner;
