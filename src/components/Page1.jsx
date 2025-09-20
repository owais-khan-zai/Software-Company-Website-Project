import React, { useState } from 'react'
import Page1Content from './Page1Content'
import Page1Slider from './Page1Slider'
import slide1 from '../assets/slide1.svg'
import slide2 from '../assets/slide2.svg'
import slide3 from '../assets/slide3.svg'

const Page1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + totalSlides) % totalSlides
    );
  };

  return (
    <div className='mt-6 p-2 flex flex-col w-full max-w-[1600px] mx-auto overflow-hidden relative'>
      {/* Container width को percentage based banaya gaya hai */}
      <div className="w-[300%] h-fit overflow-hidden flex md:justify-center transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100/3)}%)` }}>
        
        <div className='h-full w-[33.333%] md:px-10 sm:flex md:items-center my-auto relative'>
          <i onClick={handlePrev} className="hidden md:inline-block absolute left-4 top-1/2 -translate-y-1/2 text-[3rem] cursor-pointer font-bold ri-arrow-left-wide-line z-10"></i>
          <div className='flex flex-col sm:flex-row md:items-center lg:justify-center w-full px-12'>
            <Page1Content head='Program for Startup Acceleration' para='Pitch your business idea and sign up for our free startup tech accelerator program.' />
            <Page1Slider source={slide1}/>
          </div>
          <i onClick={handleNext} className="hidden md:inline-block absolute right-4 top-1/2 -translate-y-1/2 text-[3rem] cursor-pointer font-bold ri-arrow-right-wide-line z-10"></i>
        </div>

        <div className='h-full w-[33.333%] md:px-10 sm:flex md:items-center my-auto relative'>
          <i onClick={handlePrev} className="hidden md:inline-block absolute left-4 top-1/2 -translate-y-1/2 text-[3rem] cursor-pointer font-bold ri-arrow-left-wide-line z-10"></i>
          <div className='flex flex-col sm:flex-row md:items-center lg:justify-center w-full px-12'>
            <Page1Content head='Case Study' para='Learn why we are the market leaders in our field to what our clients and customers have to say' />
            <Page1Slider source={slide2}/>
          </div>
          <i onClick={handleNext} className="hidden md:inline-block absolute right-4 top-1/2 -translate-y-1/2 text-[3rem] cursor-pointer font-bold ri-arrow-right-wide-line z-10"></i>
        </div>

        <div className='h-full w-[33.333%] md:px-10 sm:flex md:items-center my-auto relative'>
          <i onClick={handlePrev} className="hidden md:inline-block absolute left-4 top-1/2 -translate-y-1/2 text-[3rem] cursor-pointer font-bold ri-arrow-left-wide-line z-10"></i>
          <div className='flex flex-col sm:flex-row md:items-center lg:justify-center w-full px-12'>
            <Page1Content head='Process' para='Choose a procedure that fits your company aims and aspirations to personalize our collaboration' />
            <Page1Slider source={slide3}/>
          </div>
          <i onClick={handleNext} className="hidden md:inline-block absolute right-4 top-1/2 -translate-y-1/2 text-[3rem] cursor-pointer font-bold ri-arrow-right-wide-line z-10"></i>
        </div>
      </div>

      <div className='flex justify-center gap-20 mt-[2vw] sm:mt-0 md:hidden'>
        <i onClick={handlePrev} className="text-[8vw] sm:text-[3rem] cursor-pointer font-bold ri-arrow-left-wide-line"></i>
        <i onClick={handleNext} className="text-[8vw] sm:text-[3rem] cursor-pointer font-bold ri-arrow-right-wide-line"></i>
      </div>
    </div>
  )
}

export default Page1