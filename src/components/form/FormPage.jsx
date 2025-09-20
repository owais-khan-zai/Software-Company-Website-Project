import React from "react";
import dotBack from '../../assets/formBack.png'
const FormPage = () => {
  return (
    <div className="p-4  py-15 md:py-30 lg:p-35 lg:py-25 flex flex-col gap-4 lg:gap-12 bg-zinc-100 md:flex-row md:justify-center mt-22 w-full max-w-[1600px] mx-auto ">
      <div className="lg:h-fit md:w-[50%] lg:w-[40%] ">
        <h1 className="text-3xl font-semibold md:text-4xl md:font-bold">Drop us a line</h1>
        <p className="text-md mt-4 md:text-lg md:w-fit">
          Stay Ahead of Competition with an Intuative Mobile App for Your
          Business.
        </p>
        <img className="mt-5 hidden lg:inline" src={dotBack} alt="Dotted Background"/>
      </div>
      <form className="flex flex-col gap-4 mt-4 lg:w-[60%] px-2">
        <div className="inputCol flex gap-4">
          <div className="inputGap">
            <input
              className="w-full text-md lg:text-lg border-b-1 border-zinc-400 py-2 outline-none"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="w-full  text-md lg:text-lg border-b-1 border-zinc-400 py-2 outline-none"
              type="email"
              placeholder="E-mail"
            />
          </div>
          <div className="inputGap">
            <input
              className="w-full  text-md lg:text-lg border-b-1 border-zinc-400 py-2 outline-none"
              type="Number"
              placeholder="Phone Number"
            />
            <input
              className="w-full text-md lg:text-lg border-b-1 border-zinc-400 py-2 outline-none"
              type="text"
              placeholder="Skype"
            />
          </div>
        </div>
        <input
          className="w-full border-b-1 text-md lg:text-lg border-zinc-400 py-2  outline-none"
          type="text"
          placeholder="Add Description"
        />
        <buton className="uppercase px-8 py-2 lg:px-13 text-lg border-2 border-zinc-800 rounded-md w-fit mt-5 cursor-pointer">
          Submit
        </buton>
      </form>
    </div>
  );
};

export default FormPage;
