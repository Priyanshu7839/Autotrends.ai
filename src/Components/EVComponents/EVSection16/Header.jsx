import React from 'react';

export function Header() {
  return (
    <div className=' w-full  flex items-center flex-col'>
      <div className=" w-max text-[44px] font-semibold leading-[57px]  text-zinc-800  max-md:px-5 max-md:w-full">
        Pros and cons of electric cars
      </div>
      <div className=" text-lg  text-[rgba(36,39,44,0.7)] leading-[25.5px] text-opacity-70 w-max max-md:px-5 max-md:max-w-full">
        As it turns out, people love us. Here is what some of our customers have to say.
      </div>
    </div>
  );
}