import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useScreenResizeValue } from "../../ScreenSizeFunction";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ExtendedHomepageApi } from "../../Context/ApiCall";
import CompareSimilarCarCard from "../SimilarSections/CompareSimilarCarCard";

const VersusSymbol = ({ className }) => {
  return (
    <div
      className={`w-[50px] h-[50px] border-[#0F62EB] border-[1px] rounded-full bg-[#E4E4E4] flex items-center justify-center ${className}`}
    >
      <div className="w-[35px] h-[35px] bg-[#0B66FA] font-1 font-bold text-[1.25rem] flex items-center justify-center text-color-1 rounded-full">
        Vs
      </div>
    </div>
  );
};

const ComparisonCard = ({ img, name, model, priceRange }) => {
  const breakpoint = useScreenResizeValue();

  return img&&(

    
    <div
      className={` font-1 rounded-[12px] border-[1px] border-[#0000001F] w-[49.5%] overflow-hidden 
    `}
    >
      <img src={img} alt="" className="" />

      <div className="p-[1rem]  flex flex-col items-start gap-[1rem]">
       
        <div className={`flex flex-col items-start gap-[.5rem]`}>
          <h1
            className={`font-bold text-color-5
        ${breakpoint > 1200 && "text-[1rem]"}
        ${breakpoint <= 1200 && breakpoint > 768 && "text-[.75rem]"}
        ${breakpoint <= 768 && breakpoint > 0 && "text-[.5rem]"} 
        `}
          >
            {name}
          </h1>
          <h2
            className={`font-bold text-color-6
        ${breakpoint > 1200 && "text-[1.11625rem]"}
        ${breakpoint <= 1200 && breakpoint > 768 && "text-[.86625rem]"}
        ${breakpoint <= 768 && breakpoint > 0 && "text-[.61625rem]"} 
        `}
          >
            {model}
          </h2>
          {/* <p
          className={` text-color-6 line-clamp-1
             ${breakpoint > 1200 && "text-[.875rem]"}
             ${breakpoint <= 1200 && breakpoint > 768 && "text-[.75rem]"}
             ${breakpoint <= 768 && breakpoint > 0 && "text-[.625rem]"} 
        `}
        >
          Upmarket hatchback with good space and the latest tech
        </p> */}
          <a
            href=""
            className={`text-color-7 font-semibold
            ${breakpoint > 1200 && "text-[.8rem]"}
            ${breakpoint <= 1200 && breakpoint > 768 && "text-[.675rem]"}
            ${breakpoint <= 768 && breakpoint > 0 && "text-[.55rem]"} 
        `}
          >
            PriceRange: {priceRange}
          </a>
          {/* <div
          className={`flex items-center justify-center gap-[.5rem]
             ${breakpoint > 1200 && "text-[1rem]"}
             ${breakpoint <= 1200 && breakpoint > 768 && "text-[.875rem]"}
             ${breakpoint <= 768 && breakpoint > 0 && "text-[.75rem]"}
        `}
        >
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <p>{rating}</p>
        </div> */}
        </div>
      <button
        className={`bg-[#0B66FA] rounded-[5px] py-[.5rem] px-[1rem] w-full text-color-1 font-bold
             ${breakpoint > 1200 && "text-[1rem]"}
             ${breakpoint <= 1200 && breakpoint > 768 && "text-[.75rem]"}
             ${breakpoint <= 768 && breakpoint > 0 && "text-[.5rem]"} 
      `}
      >
        Check details
      </button>
      </div>
    </div>
  );
};

const CarComparison = () => {
  const breakpoint = useScreenResizeValue();
  const [CarCompareItems, SetCarCompareItems] = useState([]);
  useEffect(() => {
    ExtendedHomepageApi({ SetCarCompareItems });
  }, []);

  return (
    <div className="flex items-center justify-center bg-[#FFFFFF]">
      <div
        className={`${breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]"} 
      flex gap-[20px]  pt-[20px] border-[1px] border-[#23242c1a]  rounded-[16px] flex-col font-1 overflow-hidden
    `}
      >
        <div className="flex flex-col gap-[20px]">
          <h1 className="font-medium text-[1.4375rem] text-color-9 px-[24px]">
           Compare Cars to Know More
          </h1>
          </div>
          <div className="w-[100%]  flex items-center justify-center py-[10px] pb-[20px] px-[24px] mostSearched_Carousel">
        <Swiper
       
      
        loop={true}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            540: {
              slidesPerView: 1,
            },
            760: {
              slidesPerView: 1.5,
            },
            1000: {
              slidesPerView: 3,
            },
            1300: {
              slidesPerView: 3,
            },
          }}
          
         
        >
          {CarCompareItems.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <>
                  
                  <CompareSimilarCarCard
                  title={item.title}
                  img1={item.image}
                  name1={item.modelBrandName}
                  model1={item.shortModelName}
                  priceRange1={item.priceRange}
                  img2={item.image2}
                  name2={item.modelBrandName2}
                  model2={item.shortModelName2}
                  priceRange2={item.priceRange2}
                  />
                </>
              </SwiperSlide>
            );
          })}
        </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CarComparison;
