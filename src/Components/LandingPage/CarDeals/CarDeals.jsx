import React, { useState } from "react";
import { useScreenResizeValue } from "../../../ScreenSizeFunction";
import { BrandModelCard } from "../../../components";
import { IoIosArrowDropdownCircle,IoIosArrowDropupCircle } from "react-icons/io";

const CarDeals = ({CarDealsHeadings,CarDealHeading,SetCarDealHeading,CarDealCars,LatestCars}) => {
  const breakpoint = useScreenResizeValue();

  let CarDealsLength = 0;

  if(CarDealCars){
    CarDealsLength = CarDealCars.length
  }

  const [CarDealsShowing,setCarDealsShowing] = useState("3")

  let LatestcarLength = 0;

  if(LatestCars){
    LatestcarLength = LatestCars.length;
  }

  const [LatestCarShowing,setLatestCarShowing] = useState('3');


 

  return (
    <div className="flex items-center justify-center bg-[#FFFFFF]" id={`${LatestCars?'Latest':'Upcoming'}`}>
      <div
        className={`${breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]"} 
      flex gap-[20px]  pt-[20px] border-[1px] border-[#23242c1a]  rounded-[16px] flex-col font-1 overflow-hidden
    `}
      >
        <div className="flex flex-col gap-[20px]">
          <h1 className="font-medium text-[1.4375rem] text-color-9 px-[24px]">
          {CarDealCars && '  Most Searched Cars'}
          {LatestCars && 'Latest Cars Hitting The Streets'}
          </h1>

       
       {CarDealsHeadings &&
       <div className=" w-full  overflow-x-scroll " style={{scrollbarWidth:'none'}}>
           
           <div className=" w-max  relative flex px-[24px] py-[10px] items-center justify-start gap-[36px] border-b-[1px] border-[rgba(36,39,44,0.15)]">
           {CarDealsHeadings.map((heading, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col cursor-pointer relative"
                  onClick={() => {
                    SetCarDealHeading(heading);
                  }}
                >
                  <h1
                    className={`${
                      CarDealHeading === heading
                        ? "font-medium text-[.875rem] text-color-9"
                        : "text-color-9-70 text-[.875rem] "
                    }`}
                  >
                    {heading}
                  </h1>
                  <span
                    className={` h-[3px] bg-[#0b66fa] absolute bottom-[-10px]  ${
                      CarDealHeading === heading ? "w-full" : "w-0"
                    } transition-all duration-200`}
                  ></span>
                </div>
              );
            })
          }
            
            </div>
                 
            </div>
}
            
        </div>

       {CarDealCars && 
       
       <div className="w-[100%]  flex flex-col gap-[20px] items-center justify-center py-[10px]  px-[24px] mostSearched_Carousel">
          {CarDealCars.slice(0,CarDealsShowing).map((car) => {
            return (
              <BrandModelCard
                key={car.id}
                name={car.modelName}
                image={car.image}
                priceRange={car.priceRange}
                launchedat={car.launchedAt}
                modelurl = {car.modelUrl}
                BrandSlug = {car.brandSlug}
                ModelSlug ={car.modelSlug}
              />
            );
          })}
        </div>}
       {LatestCars && 
       
       <div className="w-[100%]  flex flex-col gap-[20px] items-center justify-center py-[10px] pb-[20px] px-[24px] mostSearched_Carousel">
          {LatestCars.slice(0,LatestCarShowing).map((car) => {
            return (
              <BrandModelCard
                key={car.id}
                name={car.modelName}
                image={car.image}
                priceRange={car.priceRange}
                launchedat={car.tagText}
                latest={true}
                modelurl = {car.modelUrl}
                BrandSlug = {car.brandSlug}
                ModelSlug ={car.modelSlug}
              />
            );
          })}
        </div>}

       {CarDealCars &&
        <h1 
        onClick={()=>{
          if(CarDealsShowing==='3'){
            setCarDealsShowing(CarDealsLength)
          }
          else{
            setCarDealsShowing('3')
          }
        }}
        className="px-[24px] pb-[20px] text-color-7 font-2 cursor-pointer flex items-center justify-start gap-[.25rem]">
          {CarDealsShowing === '3' ?'View all ':'View Less'} 
          {CarDealsShowing === '3' ?<IoIosArrowDropdownCircle /> : <IoIosArrowDropupCircle />} 
      

        </h1>}

       {LatestCars &&
        <h1 
        onClick={()=>{
          if(LatestCarShowing==='3'){
            setLatestCarShowing(LatestcarLength)
          }
          else{
            setLatestCarShowing('3')
          }
        }}
        className="px-[24px] pb-[20px] text-color-7 font-2 cursor-pointer flex items-center justify-start gap-[.25rem]">
          {LatestCarShowing === '3' ?'View all':'View Less'} 
          {LatestCarShowing === '3' ?<IoIosArrowDropdownCircle /> : <IoIosArrowDropupCircle />} 
        </h1>}
      </div>
    </div>
  );
};

export default CarDeals;
