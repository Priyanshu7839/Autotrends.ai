import React, { useState } from 'react'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import { BestCars, BrandNewsCard, CarBrandCard, CarImages, CarPriceRanges, ContactUs, Menu, NewCarsHeader, PopularCarsSection5, UpcomingCars } from '../../components';
import { ReadMoreicon, Rightarrow } from '../../assets/Images/SVG';
import { AnimatePresence,motion } from 'framer-motion';
import { bg_popularcars } from '../../assets/Images';
import LatestCars from '../../Components/SideComponents/LatestCars/LatestCars';
import PopularCarsByBodyType from '../../Components/SideComponents/PopularCarsByBodyType/PopularCarsByBodyType';
import PopularUsedCars from '../../Components/SideComponents/PopularUsedCars/PopularUsedCars';
import { CarNews, EVCarImages } from '../../MockData';
import PopularCarsSection6 from '../../Components/PopularCars/PopularCarsSection6';
import { div } from 'framer-motion/client';

const PopularCars = () => {

    const [collapsed,setCollapsed]=useState("collapsed");
    const [newsoption,setnewsoption]=useState("Recent News");

    const breakpoint=useScreenResizeValue();


  return (
    <div className=' w-full h-max flex flex-col items-center'>
      { breakpoint>412 && <NewCarsHeader image={bg_popularcars} popular_cars={true} textcolor='blue'/>}
        <div className={`${breakpoint<=1440?breakpoint<=412?'w-full':'w-[84%]':'w-[1280px]'} mt-[20px] flex flex-col gap-[50px]`}>
            <div className={` ${breakpoint<=412?' w-full flex flex-col':'w-full flex'}`}  >
            <div className={` ${breakpoint<=412?' w-full flex flex-col gap-[20px]':' w-[75%] flex flex-col gap-[20px]'}`}>
<div className="w-full flex flex-col gap-[11.3px] rounded-xl  px-[21px] border border-[rgba(36,39,44,0.1)]
     pt-[18px] pb-[21px]  "
        >
          <div className=" flex items-baseline gap-[9.68px]">
            <h3 className=" text-[32px] font-[600] leading-[38.8px] text-[#24272c] ">
           Best Cars
            </h3>
          </div>

          <p className="text-[15px] text-[rgba(36,39,44,0.7)] leading-[24px]">
          There are 18 cars available in India, among which popular car models include Amaze, Dzire, 6, Scorpio N, Punch & many more. The top
          Indian car brands are Honda, Maruti Suzuki, Mahindra BE, Tata. Explore the list of best cars price in India and Compare cars to find the
          </p>
          <details
            className={`w-full top-0 left-0 ${
              collapsed ? "" : "pb-[30px]"
            } relative`}
          >
            <summary
              className={`list-none w-full  bg-[white] ${
                collapsed ? "" : "absolute z-10 bottom-0"
              }`}
            >
              <div
                className="flex gap-[6px] w-max text-[#0085ff] text-[14px] font-[600] items-center cursor-pointer"
                onClick={() => setCollapsed((prev) => !prev)}
              >
                Read {collapsed ? "More" : "Less"}{" "}
                <span>
                  <ReadMoreicon
                    bg="#0085ff"
                    w={16}
                    h={16}
                    collapsed={collapsed}
                  ></ReadMoreicon>
                </span>
              </div>
            </summary>
            <AnimatePresence>
              {!collapsed && (
                <motion.p
                  className="text-[rgba(36,39,44,0.7)]  relative z-0 w-full text-[15px] leading-[24px] cursor-text"
                  initial={{
                    height: 0,
                    display: "hidden",
                    opacity: 0,
                  }}
                  animate={{
                    height: "max-content",
                    display: "block",
                    opacity: "100%",
                  }}
                  exit={{
                    height: 0,

                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestiae laborum voluptate sed exercitationem, amet, qui,
                  eius culpa natus necessitatibus quasi quas voluptates vel.
                  Fugiat necessitatibus officiis reprehenderit quaerat
                  aspernatur est.
                </motion.p>
              )}
            </AnimatePresence>
          </details>
        </div>
        <div className=' w-full flex flex-col   gap-[14px]'>
        <h3 className={`${breakpoint<=412?' text-[32px] px-[20px] font-[600] leading-[38.8px] text-[#24272c] ':" text-[32px] font-[600] leading-[38.8px] text-[#24272c] "}`}>
           Best Cars in India
            </h3>
            <div className={` ${breakpoint<=412?' grid grid-cols-1 w-full gap-y-[20px]  ':' grid grid-cols-3 w-full    gap-y-[20px]'}`}>
                {
                    Array(6).fill("").map(( item,index)=><BestCars key={index}/>)
                }
                {breakpoint<=412 && 
                <div className=' w-full bg-[#f0f0f0] rounded-2xl overflow-x-scroll' style={{scrollbarWidth:'none'}}>
                <div className=' w-max '>
                <CarPriceRanges/>
                </div>
                </div>}
                { breakpoint>412 &&
                <div className=' col-span-3'>
                   <CarPriceRanges/>
                  </div>
                       
                        }
                
                
                {
                    Array(12).fill("").map(( item,index)=><BestCars key={index}/>)
                }
            </div>
            
        </div>
        <div className=' w-full flex justify-center'>
            <button className=' w-[50%] bg-[#fafafa] border hover:bg-[#e4e3e3] border-[rgba(36,39,44,0.15)]  rounded-[4px] h-max text-[14px] leading-[48px] text-blue font-[500] text-center'>
                View All Cars
            </button>
        </div>
        <div className=' w-full relative flex flex-col gap-[8px] pt-[18px]  px-[31.22px] rounded-xl border border-[rgba(36,39,44,0.1)] shadow-md shadow-[rgba(36,39,44,0.1)]'>
          <h3 className=' text-[23px] leading-[33.2px] font-[500]'>Best car news & articles</h3>
          
           <Menu menuItems={["Recent News","Car Collection"]} item={newsoption} setitem={setnewsoption}/>
           <div className=' w-full mt-[20px]'>
          <BrandNewsCard CarNews={CarNews}  />
          </div>
                    <button className=' text-blue text-[15px] font-[700] flex gap-[8px] mb-[10px] mt-[10px] items-center'>
            View All Car News <Rightarrow/>
                      </button>
         
        </div>
        <div className={` ${breakpoint<=412?' ':' px-[20px]'} "  bg-[white] gap-[20px]  pb-[20px]    relative flex flex-col  pt-[18px]   rounded-xl border border-[rgba(36,39,44,0.1)] shadow-md shadow-[rgba(36,39,44,0.1)]   "`}>
          <h3 className={` ${breakpoint<=412?' px-[20px]':''} text-[32px]  font-[600] leading-[38.8px] text-[#24272c] `  }>
            Images of Best Cars in India
          </h3>
          <div className={` ${breakpoint<=412?'px-[20px]':''} w-full overflow-x-scroll rounded-[8px] `} style={{scrollbarWidth:'none'}}>
          <div className="  flex rounded-[8px] w-max gap-[20px]">
            {
              EVCarImages.images.map((car,index)=> <CarImages props={car}   />)
            }
          </div>
          </div>
          


         
         
        </div>
        <PopularCarsSection5/>
        <PopularCarsSection6/>
        
       
</div>
<div className={` ${breakpoint<=412?' w-full  flex flex-col gap-[20px]':' w-[25%] px-[11px] flex flex-col gap-[20px]'}`}>
    <CarBrandCard text={'Popular Cars'}/>
    <UpcomingCars/>
    <LatestCars/>
    <PopularCarsByBodyType/>
    <PopularUsedCars/>
</div>
            </div>
            <ContactUs/>


        </div>
      
    </div>
  )
}

export default PopularCars
