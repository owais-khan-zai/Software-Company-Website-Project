import React from "react";

const Page1Content = ({ head, para }) => {
  return (
    <div className="w-full sm:w-[50%] lg:w-[40%] flex flex-col items-end">
      <div className="border-6 border-zinc-200 w-[90%] p-2 mx-4">
        <div className="bg-white relative right-5 p-4 flex flex-col items-center gap-4 ">
          <h2 className="slide-head text-[#01345B] text-[1.4rem] text-center lg:text-[] sm:text-[1.7rem]  font-semibold">
            {head}
          </h2>
          <p className="slide-para text-[1rem] text-center sm:text-[1rem]">
            {para}
          </p>
          <button className='group cursor-pointer relative z-[0]  mt-4 w-fit px-4 py-3 uppercase text-white text-md overflow-hidden before:content-[""] before:absolute before:h-full before:w-[55%] before:top-0 before:left-0 before:bg-[#01345B] before:z-[-1] before:transition-all before:duration-300 hover:before:w-[100%]'>
            <span className="relative z-[2]">check</span>
            <span className="relative z-10 ml-1 group-hover:text-white text-black transition-colors duration-300">
              now
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page1Content;
