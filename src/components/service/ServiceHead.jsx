import React from 'react'

const ServiceHead = (props) => {

  return (
    <div className='serHead flex gap-4 cursor-pointer w-fit'>
        <i className="ri-smartphone-fill"></i>
        <h4 className='text-md '>{props.head}</h4>
    </div>
  )
}

export default ServiceHead
