import React from 'react'

const SoluCards = ({icon, head, para}) => {
  return (
    <div className='devParent flex max-w-[32rem] cursor-pointer hover:shadow-[0_3px_12px_rgba(0,0,0,0.3)] transition-all duration-100 group rounded-lg py-3 px-2 mx-auto lg:pb-15'>
      <img className='devIcon h-28 ' src={icon} alt='Dev Icon'/>
      <div className='flex flex-col gap-2'>
        <h3 className='text-lg capitalize md:text-xl'>{head}</h3>
        <p className='text-md'>{para}</p>
      </div>
    </div>
  )
}

export default SoluCards
