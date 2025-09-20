import React from 'react'

const DevItems = ({icons, name}) => {
  return (
    <div className='flex items-center flex-col gap-2 cursor-pointer hover:shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-200 py-2 px-4 rounded-lg'>
        <img className='h-12' src={icons} alt='Icons Image'/>
        <h5 className='capitalize text-md'>{name}</h5>
    </div>
  )
}

export default DevItems
