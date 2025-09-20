import React from 'react'
import Card from './Card'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import card4 from '../../assets/card4.png'
import card5 from '../../assets/card5.png'
import card6 from '../../assets/card6.png'
const CardPage = () => {
  return (
    <div className='mt-30 max-w-[1600px] mx-auto'>
      <div className='text-center flex flex-col items-center gap-3 '>
        <h3 className='uppercase  text-md md:text-2xl md:font-semibold lg:text-3xl'>Industries we Serve</h3>
        <p className='uppercase  text-md w-[80%] md:w-[40rem]'>We've had the pleasure of working with a variety of sectors, addressing key challenges and delighting end customers with our engaging mobile apps.</p>
      </div>
      <div className='grid gap-3 justify-center md:grid-cols-2 lg:grid-cols-3 lg:px-10 mt-12'>
        <Card icon={card1} head='Health Care' para='Schedule daily workout, check fitness, and provide immediate patient care solutions with digital healthcare services' />
        <Card icon={card2} head='real estate' para ='With one digital platform, you can easily list properties compare them, and quick and safe home pyrchasing options.'/>
        <Card icon={card3} head='retail & E-Commerce' para='Increase conversion rates and develop brands that people love by unlocking the full potential of merchants and ecommerce shops.'/>
        <Card icon={card4} head='automotive' para='Improve visibility and business success by improving customer happiness with linked autonomous cars and smart mobility services that reinvent mobility.'/>
        <Card icon={card5} head='education' para='With an elearning management system, you may get online sessions to in-classroom instruction and figital solutions that make the learning experience difficult.'/>
        <Card icon={card6} head='entertainment' para='with digital entertainment solutions, provide live streaming, online chatting, social networking, and more all in one platform.'/>
      </div>
    </div>
  )
}

export default CardPage
