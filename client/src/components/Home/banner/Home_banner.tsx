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
            <h1>Shuttle Parking for Streamlined Convenience</h1>
          </div>
        </SplideSlide>

        <SplideSlide className="item2">
          <div className="banner-slide"></div>
          <div className="banner-container">
            <h1>Innovative Puzzle Parking Smart Solutions</h1>
          </div>
        </SplideSlide>

        <SplideSlide className="item3">
          <div className="banner-slide"></div>
          <div className="banner-container">
            <h1>ASRS : Effortless Material Handling</h1>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Home_banner;
