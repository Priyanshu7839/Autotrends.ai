import { container, AutotrendsLogo } from "../../assets/Images";
import { DownArrow } from "../../assets/Images/SVG";
import React from "react";

const CarRecommender = () => {
  return (
    <div className=" w-full flex justify-center text-[#24272c] bg-[#f0f0f0] pl-[5%] pr-[9%] rounded-xl  gap-[20px] font-1">
      <div className=" w-[30%] h-[200px]">
        <img src={container} alt="" className=" w-full h-full" />
      </div>
      <div className=" flex justify-between items-center w-full py-[47.25px] ">
        <div className=" flex flex-col gap-[.5rem]">
          <p className=" flex gap-[5px] items-center text-[15px]">
            <img src={AutotrendsLogo} alt="" className=" w-[18px] h-[18px]" />
            <span className="font-bold ">Autotrends.ai</span>Recommender
            <span></span>
          </p>
          <p className=" text-[24px] font-[500]">Not Sure, Which car to buy?</p>
          <p className=" text-[14px]">Let us help you find the dream car</p>
        </div>
        <div>
          <button className=" flex items-center gap-[20px]  text-[#0085ff]  bg-white border-[#0085ff] border-2 px-[20px] py-[10px] rounded-lg">
            Show Me Best car
            <DownArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarRecommender;
