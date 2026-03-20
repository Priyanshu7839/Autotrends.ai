import React from "react";
import { Rightarrow } from "../../assets/Images/SVG";
import { view360image } from "../../assets/Images";
import { useScreenResizeValue } from "../../ScreenSizeFunction";
import { useSelector } from "react-redux";

const BrandCarVirtualExperience = () => {
  const breakpoint = useScreenResizeValue();
  const details = useSelector((state) => state.CarDetails);

  return (
    <div className="px-[20px] py-[20px] w-full  shadow-inner border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-3">
      <h1
        className={` font-semibold
                ${breakpoint > 1250 && "text-[24px]"}
                ${breakpoint <= 1250 && "text-[20px]"}
                `}
      >
        Virtual Experience of {details?.overView?.name}
      </h1>
      <div className="">
        <div className="">
          <div className="relative">
            <img
              src={details?.gallerySection?.items[0]?.items[0]?.image}
              alt="360 view"
              className={` ${
                breakpoint <= 412 ? " w-[330px]" : " h-[302px] w-[452px]"
              } `}
            />
            <div className=" absolute top-[44%] left-[16%]">
              <button
                className={`text-color-1 bg-[#0b66ff] rounded-2xl py-[7px] px-[12px] font-semibold
                                ${breakpoint > 1250 && "text-[14px]"}
                                ${breakpoint <= 1250 && "text-[12px]"}
                                `}
              >
                Tap to Interact 360º
              </button>
            </div>
          </div>
        </div>
      </div>

      <p
        className={` text-[#24272C] text-opacity-70 font-semibold
                ${breakpoint > 1250 && "text-[14px]"}
                ${breakpoint <= 1250 && "text-[12px]"}
                `}
      >
        {details?.overView.name} Exterior
      </p>

      <p
        className={`flex gap-1 cursor-pointer text-[#0085FF] font-semibold items-center
                ${breakpoint > 1250 && "text-[16px]"}
                ${breakpoint <= 1250 && "text-[14px]"}
                `}
      >
        Experience 360º View of {details?.overView.name} <Rightarrow />
      </p>
    </div>
  );
};

export default BrandCarVirtualExperience;
