import React from 'react'
const LatestItems = ({img, head}) => {
  return (
    <div className='flex latestCard gap-4 sm:w-[30rem] md:w-[35rem] lg:mx-0 lg:w-[25rem] py-3 pr-4 mx-8 shadow-[0_2px_10px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-300'>
      <img className='h-14 latestImg' src={img} alt='Latest Thoughts Image'/>
      <div className='flex flex-col gap-4'>
        <h4 className='latestHead text-[0.9rem] sm:text-[1rem] font-semibold '>{head}</h4>
        <h6 className='latestRead text-sm text-md text-[#01345B] cursor-pointer'>Read More <i class="ri-arrow-right-line"></i></h6>
      </div>
    </div>
  )
}

export default LatestItems
