import React from "react";

const Gallery_Card = ({ imgSrc, Alt, para }) => {
  return (
    <div  className="p-5 w-full aspect-square my-10 max-lg:my-10 max-lg:p-0">
      <img src={imgSrc} className="w-full h-full rounded-lg" alt={Alt} />
      <p data-aos="zoom-in-down"  className="text-center text-text_color my-3 text-[16px]">
        {para}
      </p>
    </div>
  );
};

export default Gallery_Card;