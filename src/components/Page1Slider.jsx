import React from 'react'


const Page1Slider = ({source}) => {
  return (
    <div className='w-full sm:w-[50%] lg:w-[40%] sm:mt-0 mt-10 p-4 pr-8 sm:overflow-hidden'>
      <img src={source} alt="Slider Image" className='sm:w-full '/>
    </div>
  )
}

export default Page1Slider
