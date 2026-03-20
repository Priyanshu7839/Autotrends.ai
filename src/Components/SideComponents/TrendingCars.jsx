import React, { useState } from "react";
import { KiaCarens, KiaSonet } from "../../assets/Images";
import { Rightarrow } from "../../assets/Images/SVG";
import { Menu } from "../../components";
import { useScreenResizeValue } from "../../ScreenSizeFunction";
import { useSelector } from "react-redux";
const TrendingCars = () => {
  const [state, setstate] = useState("Popular");
  const breakpoint = useScreenResizeValue();
  const details = useSelector((state) => state.CarDetails);
  const TrendingCars = details?.popularUpcomingWidget;
   const TrendingVariantHeading = [
    ...new Set(details?.popularUpcomingWidget?.items?.map((v) => v.title))
    ];
    const [TrendingVariant, SetTrendingVariant] = useState("Popular");

   
  return (
    <div className="w-full drop-shadow-[0_1px_2px_rgba(36,44,39,0.1)] border-[#24272C] border-[1px] rounded-[16px] border-opacity-10  py-[15px]   ">
      <div>
        <h1 className={` px-[15px] text-[#24272C] font-medium pb-[8px] capitalize
           ${breakpoint>1250 && 'text-[20px]'}
                ${breakpoint<=1250 && 'text-[18px]'}
          `}>
              {TrendingCars?.title}
        </h1>
      </div>
      
      <div className="px-[15px] relative flex  py-[10px] items-center justify-start gap-[36px] border-b-[1px] border-[rgba(36,39,44,0.15)] ">
                {TrendingVariantHeading.map((heading, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col cursor-pointer relative"
                      onClick={() => {
                        SetTrendingVariant(heading);
                      }}
                    >
                      <h1
                        className={`
                            ${breakpoint>1250 && 'text-[.875rem]'}
                            ${breakpoint<=1250 && 'text-[.75rem]'}
                          ${
                          TrendingVariant === heading
                            ? "font-medium  text-color-9"
                            : "text-color-9-70 "
                        }`}
                      >
                        {heading}
                      </h1>
                      <span
                        className={` h-[3px] bg-[#0b66fa] absolute bottom-[-10px]  ${
                          TrendingVariant === heading ? "w-full" : "w-0"
                        } transition-all duration-200`}
                      ></span>
                    </div>
                  );
                })}
              </div>
      
      {breakpoint>1050 && 
      <div className="pt-[16px] px-[15px] flex flex-col gap-[16px]">
       {details?.popularUpcomingWidget?.items?.filter(item => item.title=== TrendingVariant)[0]?.items?.map((items,index) => (
            <div className="flex gap-2" key={index}>
              <div>
                <img
                  src={items.image}
                  alt=""
                  className="w-[88px] h-[59px] rounded-lg "
                />
              </div>
              <div className={`
                ${breakpoint>1250 && 'text-[14px]'}
                ${breakpoint<=1250 && 'text-[12px]'}
                text-[#24272C]`}>
                <p> {items.modelName} </p>
                <p className="font-semibold">
                  <span>Rs.</span>{items.priceRange}
                </p>
              </div>
            </div>
          ))}
      </div>}
      {
        breakpoint<=1050 &&
        <div className=" w-full overflow-x-scroll px-[15px] " style={{scrollbarWidth:'none'}}>
              <div className="pt-[16px] w-max flex  gap-[16px]">
        {details?.popularUpcomingWidget?.items?.filter(item => item.title === TrendingVariant)[0]?.items?.map((items,index) => (
            <div className="flex flex-col gap-2" key={index}>
              <div>
                <img
                  src={items.image}
                  alt=""
                  className="w-[280px] h-[180px] aspect-video rounded-lg "
                />
              </div>
              <div className="text-[14px] px-[10px] text-[#24272C]">
                <p>{items.modelName}</p>
                <p className="font-semibold">
                  <span>Rs.</span>{items.priceRange}
                </p>
              </div>
            </div>
          ))}
      </div>

        </div>

      }
      <p className={`flex gap-1 px-[15px] text-[#0085FF] font-medium font-2 items-center pt-[8px]
        ${breakpoint>1250 && 'text-[15px]'}
        ${breakpoint<=1250 && 'text-[13px]'}
        `}>
        View All {details?.overView?.brandName} Cars <Rightarrow />
      </p>
    </div>
  );
};

export default TrendingCars;