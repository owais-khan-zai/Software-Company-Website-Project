import React from "react";

const Card = ({ icon, head, para }) => {
  return (
    <div className="m-4 px-9 shadow-[0_6px_15px_rgba(0,0,0,0.3)] py-10 pb-24 max-w-[33rem] md:py-15  transform transition duration-300 hover:-translate-y-2 cursor-pointer">
      <img className="h-[5.3rem]" src={icon} alt="Card Icon" />
      <div className="mt-6">
        <h3 className="capitalize font-semibold text-2xl lg:text-[1.8rem]">{head}</h3>
        <p className="opacity-[0.7] text-sm lg:text-md mt-2">{para}
        </p>
      </div>
    </div>
  );
};

export default Card;
