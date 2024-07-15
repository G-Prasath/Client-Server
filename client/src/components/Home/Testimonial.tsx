import React from 'react'

const Testimonial = () => {
  return (
    <section className="sec-padding">
      <p className='font-bold text-[30px] text-center mb-4 uppercase'>Testimonial</p>
      <div className='grid grid-cols-3 gap-4 max-lg:grid-cols-1'>
      <div className='p-4 bg-gray text-center py-8'>
        <h6 className='text-2xl font-[700] uppercase mb-4'>Chennai Silks</h6>
        <p className='max-sm:text-justify'>As per our requirement Estar Constructed us Shuttle Stacker for 72 Cars. From Start to end they followed clean workflow structure and handovered the project before time. Right now we own the same Shuttle Stacker System for 7 Branches.</p>
      </div>

      <div className='p-4 bg-light_white text-center py-8'>
        <h6 className='text-2xl font-[700] uppercase mb-4'>VGN Notting Hill</h6>
        <p  className='max-sm:text-justify'>The Shuttle Stacker system developed by Estar Engineers for about  280 cars transformed our parking needs effortlessly which has become a true asset to our establishment of our company and true space saver in ou apartment environment.</p>
      </div>

      <div className='p-4 bg-gray text-center py-8'>
        <h6 className='text-2xl font-[700] uppercase mb-4'>Dev Automobiles</h6>
        <p className='max-sm:text-justify'>We Requested Estar to Construct a Car Elevator which is capable of lifting up to 9 Tons with Puzzle Parking. They gave us the design and proved their engineering strength with on time delivery which helped us to step ahead in our business journey Successfully.</p>
      </div>
      </div>
    </section>
  )
}

export default Testimonial