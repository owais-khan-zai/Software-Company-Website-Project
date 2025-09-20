import React from 'react'
import SoluCards from './SoluCards'
import dev1 from '../../assets/dev1.png'
import dev2 from '../../assets/dev2.png'
import dev3 from '../../assets/dev3.png'
import dev4 from '../../assets/dev4.png'
import dev5 from '../../assets/dev5.png'
import dev6 from '../../assets/dev6.png'
const Solutions = () => {
  return (
    <div className='mt-10 px-2 max-w-[1600px] mx-auto'>
      <div className='flex flex-col gap-2 items-center'>
        <h6 className='text-sm uppercase '>your choice of weapon</h6>
        <h2 className='text-center  text-[1.5rem] w-[98%] font-semibold leading-8'>USE OUR END-TO-END DIGITAL SOLUTIONS TO GROW YOUR BUSINESS.</h2>
      </div> 
      <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-10 md:px-2 lg:px-4 xl:px-8'>
        <SoluCards icon={dev1} head='Mobile development' para='With the expertise of our development professionals, you can create intuitive mobile apps for iOS/Android or go cross-platform.'/>
        <SoluCards icon={dev2} head='web development' para='With the aid of a responsive and dynamic company or eCommerce website, you may strengthen your online presence.'/>
        <SoluCards icon={dev3} head='blockchain development' para='Cryptocurrency creation, wallet development, smart contract development, and multichain/ hyper ledger solutions are all possible with blockchain.'/>
        <SoluCards icon={dev4} head='progressive web application' para='Tech startups, multinational corporations, and large-scale organisations can benefit from our progressive web app development services.'/>
        <SoluCards icon={dev5} head='E-commerce & CMS' para='To provide end-to-end Magento, Shopify, and WordPress development solutions, our eCommerce and CMS development specialists use best development techniques.'/>
        <SoluCards icon={dev6} head='digital marketing' para='Our specialists will create digital marketing plans that will help you promote your business online.'/>
      </div>
    </div>
  )
}

export default Solutions
