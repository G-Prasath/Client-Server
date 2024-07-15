import React from 'react'

const Ongoingproject = () => {
  return (
    <div className='sec-padding w-full bg-light_white max-sm:mt-[50px]'>
      <h6 className='text-center font-[700] text-3xl uppercase'>On Going Projects</h6>

      <div className='w-full h-auto mt-10 flex items-center justify-center p-5 overflow-hidden max-sm:p-0'>
        <div className='flex max-sm:flex-col'>
          <img data-aos="zoom-in" data-aos-easing="ease-in-back"  data-aos-duration="200" src="/gallery/ongoing-1.jpg" alt="slide banner" className='border border-white shadow-imgShadow max-sm:h-auto h-[450px] w-[450px] aspect-square max-lg:w-full' />

          <img data-aos="zoom-in" data-aos-easing="ease-in-back"  data-aos-duration="400" src="/gallery/ongoing-2.jpg" alt="slide banner" className='border border-white max-sm:h-auto max-sm:mt-[-220px] max-sm:ml-0 shadow-imgShadow max-md:ml-[-450px] h-[450px] ml-[-300px] mt-[50px] w-[450px] aspect-square max-md:w-full' />

          <img data-aos="zoom-in" data-aos-easing="ease-in-back"  data-aos-duration="600" src="/gallery/ongoing-3.jpg" alt="slide banner" className='border border-white max-sm:h-auto max-sm:mt-[-220px] max-sm:ml-0 shadow-imgShadow max-md:ml-[-450px] h-[450px] ml-[-300px] mt-[100px] w-[450px] aspect-square max-md:w-full' />

        </div>
      </div>
    </div>
  )
}

export default Ongoingproject
