import React from 'react'

const MiniCard = ({head, no, para}) => {
  return (
    <div className='bg-white flex flex-col justify-center items-center text-center py-6 pb-8 px-4 sm:pt-0 lg:text-start lg:px-6 lg:items-start'>
        <div className='sm:flex sm:items-center sm:justify-between sm:w-[55vw]  md:w-[58vw] lg:w-full sm:self-end '>
            <h4 className='text-xl md:text-2xl lg:text-3xl font-semibold'>{head}</h4>
            <h2 className='text-[4rem] font-semibold opacity-[0.08] sm:text-[4.3rem]'>{no}</h2>
        </div>
      <p className='text-md lg:text-[1.1rem] lg:w-[90%]'>{para}</p>
    </div>
  )
}

export default MiniCard
