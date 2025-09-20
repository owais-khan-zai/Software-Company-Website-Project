import React from 'react'
import latest from '../../assets/latest-main.jpg'
import latest1 from '../../assets/latest1.jpg'
import latest2 from '../../assets/latest2.jpg'
import latest3 from '../../assets/latest3.jpg'
import LatestItems from './LatestItems' 
const Latest = () => {
  return (
    <div className='px-3 mt-20 max-w-[1600px] mx-auto'>
      <div className='flex flex-col items-center gap-2'>
        <h6 className='text-sm'>INSIGHTS</h6>
        <h2 className='text-lg uppercase md:text-3xl'>our latest thoughts</h2>
      </div>
      <div className=' mt-10 lg:flex lg:p-10 lg:gap-4 '>
        <div className='w-full flex flex-col items-center lg:w-[50%]'>
            <img className='sm:w-[35rem] md:w-[40rem] lg:w-[39rem]' src={latest} alt='Latest Main Image'/>
        </div>
        <div className='mt-25 lg:mt-0 flex flex-col gap-10 items-center lg:w-[50%] lg:gap-15'>
            <LatestItems img={latest1} head='Online Marketplace App Development Guide Before You Startup'/>
            <LatestItems img={latest2} head='MEAN Stack VS MERN Stack: Which Full Stack Web App Development Framework Should You Go For Your Business?'/>
            <LatestItems img={latest3} head='Top Mobile Application Development Trends To Look Out For in 2021'/>
        </div>
      </div>
    </div>
  )
}

export default Latest
