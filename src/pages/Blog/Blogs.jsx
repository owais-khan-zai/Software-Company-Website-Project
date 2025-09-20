import React, { useMemo } from 'react'
import Header from '../../Header'
import Footer from '../../components/footer/Footer'
import { useBlogData } from '../../context/Context' 
import { useParams } from 'react-router-dom'

const Blogs = () => {

  const blogData = useBlogData();

  let {name} = useParams();

  let route = name.split("-").map((word=> word.charAt(0).toUpperCase() + word.slice(1) )).join(" ");

  let finalData = useMemo(() => {
  return blogData.find((b) => b.name === route);
}, [blogData, route]);

  console.log(finalData)
  return (
    <div className='relative max-w-[1600px] mx-auto w-screen '>
      <Header/>

        <div className='mt-10 flex flex-col justify-center items-start w-full gap-3 px-4 md:px-9 lg:px-13 '>
            {finalData ? ( 
            <>    
            <img src={finalData.img} alt='Blog Image' className=' self-center w-[100%] sm:w-[33rem] lg:w-[40rem]' />
            <h1 className=' mt-10 text-2xl md:text-3xl font-semibold'>{finalData.name}</h1>
            <p className='text-md md:text-lg'>{finalData.content}</p>
            </> ) : 
            (<div className='h-[10rem] w-full flex justify-center items-center'> <h2>There is no such name of  Blog is Available</h2> </div>)}
        </div>
      <Footer/>
    </div>
  )
}

export default Blogs
