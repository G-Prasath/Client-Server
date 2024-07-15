import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Clients = () => {
    const options = {
    type: 'loop',
    perPage: 6,
    gap: 10,
    arrows: false,
    interval: 5000, 
    speed: 50000,
    autoplay: {
        delay: 5000,
      },
    pauseOnHover: true, 
    breakpoints: {
        867: {
            perPage: 4,
        },
      768: {
        perPage: 3,
      },
      576: {
        perPage: 2,

      }
    },
  };
  return (
    <div className="grid w-full md:grid sec-padding">
        <h2 className="text-center font-bold text-[30px] pb-5 uppercase">OUR Clients</h2>
        <Splide options={options} aria-label="My Favorite Images">


          <SplideSlide className="relative">
            <img src="clients/Aachi.png" alt="Image 1" className="aspect-square client_scroll" />
          </SplideSlide>
          <SplideSlide className="relative">
            <img src="clients/chennai_silks.png" alt="Image 2" className="aspect-square client_scroll" />
          </SplideSlide>
          <SplideSlide className="relative">
            <img src="clients/casa_grand.png" alt="Image 3" className="aspect-square client_scroll" />
          </SplideSlide>


          <SplideSlide className="relative">
            <img src="clients/Dev-Automobiles.png" alt="Image 1" className="aspect-square client_scroll" />
          </SplideSlide>
          <SplideSlide className="relative">
            <img src="clients/Equitas.png" alt="Image 2" className="aspect-square client_scroll" />
          </SplideSlide>
          <SplideSlide className="relative">
            <img src="clients/Kalyan.png" alt="Image 3" className="aspect-square client_scroll" />
          </SplideSlide>


          <SplideSlide className="relative">
            <img src="clients/Kasi.png" alt="Image 1" className="aspect-square client_scroll" />
          </SplideSlide>
          <SplideSlide className="relative">
            <img src="clients/Novel.png" alt="Image 2" className="aspect-square client_scroll" />
          </SplideSlide>
          <SplideSlide className="relative">
            <img src="clients/Taj.png" alt="Image 3" className="aspect-square client_scroll" />
          </SplideSlide>


        </Splide>
      </div>
  )
}

export default Clients