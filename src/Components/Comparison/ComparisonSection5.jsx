import React, { useState } from "react";
import { ViewallvariantIconSvg } from "../../assets/Images/SVG";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useScreenResizeValue } from "../../ScreenSizeFunction";
import { seltos } from '../../assets/Images';
import { ResearchCar } from "../../assets/Images";
import { LuDot } from "react-icons/lu";


const ComparisonSection5 = () => {

  const breakpoint = useScreenResizeValue();
  const ResearchHeading = ["Expert Reviews", "Recent News" , "Must Read Articles"];
  const [researchHeading, SetresearchHeading] = useState("Expert Reviews");

  return (
    <div className="bg-[#FAFAFA] w-[100%] flex items-center justify-center font-1">
      <div
        className={` flex flex-col gap-[20px] font-1  py-[20px] border-[1px] border-[#24272c1a]  rounded-[16px]
                         ${breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]"}`}
      >
        <div className="flex flex-col gap-[10px]">
          <h1 className="font-medium text-[1.4375rem] text-color-9 px-[24px]">
            Research more on Creta and Seltos
          </h1>
          <div className="relative flex px-[24px] py-[10px] items-center justify-start gap-[36px] border-b-[1px] border-[rgba(36,39,44,0.15)] ">
            {ResearchHeading.map((heading, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col cursor-pointer relative"
                  onClick={() => {
                    SetresearchHeading(heading);
                  }}
                >
                  <h1
                    className={`${
                      researchHeading === heading
                        ? "font-medium text-[.875rem] text-color-9"
                        : "text-color-9-70 text-[.875rem] "
                    }`}
                  >
                    {heading}
                  </h1>
                  <span
                    className={` h-[3px] bg-[#0b66fa] absolute bottom-[-10px]  ${
                      researchHeading === heading ? "w-full" : "w-0"
                    } transition-all duration-200`}
                  ></span>
                </div>
              );
            })}
          </div>
        </div>
        <div className='px-[20px]'>
                <Swiper spaceBetween={50} slidesPerView={4}>
                    {Array(4).fill().map((_, index) => {
                        return (
                          <SwiperSlide>
                            <div
                              key={index}
                              className="flex flex-col w-fit border-[1px] border-[#24272c1a] overflow-hidden rounded-[8px]"
                            >
                              <div className="w-[285px] h-[194px]  rounded-[8px]">
                                <img src={ResearchCar} alt="" />
                              </div>

                              <div className=" p-[16px] rounded-b-[8px] flex flex-col gap-[.5rem] ">
                                <h1 className="text-[.9375rem] text-color-9 font-medium">
                                  Hyundai Creta Long Term Review II | 5000
                                  Kilometers Covered
                                </h1>
                                <p className="text-[.8125rem] text-color-9-70 line-clamp-2">
                                  Five months in Pune's dense traffic has
                                  painted a clear picture of how the Creta CV…
                                </p>
                                <div className="flex items-center gap-[.5rem] text-color-9-70 text-[.6875rem]">
                                  <p>By Alan Richard</p>
                                  <h1 className="text-[1rem]">
                                    
                                    <LuDot />
                                  </h1>
                                  <p>Aug 17, 2024</p>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

        <div className="px-[20px] flex gap-[10px] items-center ">
          <h1 className="font-semibold text-[.875rem] text-color-7">
            View All Variants
          </h1>
          <ViewallvariantIconSvg />
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection5;
