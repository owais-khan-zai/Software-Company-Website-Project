import React from 'react'

function ParaBox({head, para}) {
  return (
    <div className='flex flex-col justify-center gap-3 items-center lg:items-start lg:justify-start '>
      <h3 className='text-3xl font-semibold lg:text-4xl'>{head}</h3>
      <p className='text-center text-[0.95rem] lg:text-start '>{para}</p>
    </div>
  )
}

export default ParaBox
