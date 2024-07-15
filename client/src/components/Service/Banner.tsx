import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Banner = ({ imgSrc, mainTitle, cnt1, cnt2}) => {
  return (
    <div>
      <div className="service_banner">
        <LazyLoadImage src={imgSrc} alt="Banner-img" className='w-full aspect-[16/8] max-md:aspect-[16/9]' />
      </div>
      <div className="sec-padding">
        <h1 className='text-4xl font-[700] text-center uppercase mb-10 max-sm:text-2xl max-md:mb-5'>{mainTitle}</h1>
        <p className='text-text_color text-[18px] max-md:text-justify'>{cnt1}</p>
        <p className='my-5 text-text_color text-[18px] max-md:text-justify'>{cnt2}</p>
      </div>
    </div>
  )
}

export default Banner
