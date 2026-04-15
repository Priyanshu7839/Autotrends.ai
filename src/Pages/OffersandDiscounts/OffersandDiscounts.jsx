import React, { useState } from 'react'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import { bg_upcomingcars,kia1,grill,headlight, bg_latestcars, bg_offersanddiscounts } from '../../assets/Images'
import { BrandCarRelevantCars, CarPriceRanges, Monthranges, Menu, CarBrandCard, ContactUs,UpcomingCars, NewCarsHeader,LatestCarsSide,NewlyLaunchedCarsCard, LatestOffers } from '../../components';
import { ReadMoreicon,Rightarrow } from '../../assets/Images/SVG';
import { AnimatePresence, motion } from 'framer-motion';
import PopularCarsSection6 from '../../Components/PopularCars/PopularCarsSection6';


import PopularCarsByBodyType from '../../Components/SideComponents/PopularCarsByBodyType/PopularCarsByBodyType';
import PopularUsedCars from '../../Components/SideComponents/PopularUsedCars/PopularUsedCars';
import { brandoffers } from '../../MockData';

const OffersandDiscounts = () => {

    const breakpoint = useScreenResizeValue();
    const [collapsed,setCollapsed]=useState(true);

    const Model = [
        {
          image: kia1,
          name: "Kia Seltos",
          MinPrice: "9.95",
          MaxPrice: "17.65",
          features: [
            "Diesel / Petrol",
            "17 to 20.7 kmpl",
            "Manual/Automatic",
            "1482 cc - 1497 cc",
            "113.42 - 157.81 bhp",
            "3 Star Safety",
          ],
          facelift: true,
          electric: false,
          moreimages: [grill, headlight],
          rating: 4.5,
          reviews: 1200,
        },
      ];

      const bodyTypes=["SUV","Hatchback","Sedan","MUV","Luxury"];
       const [bodyType,setbodyType]=useState("SUV");

  return (
    <div className=' w-full h-max flex flex-col items-center'>
         <NewCarsHeader image={bg_offersanddiscounts} textcolor='blue' form_display={false}/>
        <div className={`${breakpoint<=1440?'w-[84%]':'w-[1280px]'} mt-[20px] flex flex-col gap-[50px]`}>
            <div className=' w-full flex '>
            <div className=' w-[75%] flex flex-col gap-[20px]'>
<div className="w-full flex flex-col gap-[11.3px] rounded-xl  px-[21px] border border-[rgba(36,39,44,0.1)]
     pt-[18px] pb-[21px]  "
        >
          <div className=" flex items-baseline gap-[9.68px]">
            <h3 className=" text-[32px] font-[600] leading-[38.8px] text-[#24272c] ">
          Newly Car Offers & Discounts
            </h3>
          </div>

          <p className="text-[15px] text-[rgba(36,39,44,0.7)] leading-[24px]">
          {`Explore best offers, discounts and top deals on your dream car in December 2024 in your city. Offers include cash discount, exchange
bonus, government employee schemes, extended warranty, free car accessories and more. Login to CarDekho and enter your city, the`}
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
        <div className="  bg-[white] px-[20px]   relative flex flex-col  pt-[18px] pb-[20px]   rounded-xl  border border-[rgba(36,39,44,0.1)]  ">
          <h3 className="  text-[23px]  leading-[33.2px] font-[500] ">
            Find Offers on top Brands
          </h3>

          <div className="  flex mt-[20px] flex-wrap gap-[20px]">
            {brandoffers.brands.map((brand, index) =>
               (
                <div
                  key={index}
                  className=" border border-[rgba(36,39,44,0.15)] rounded-[8px] w-[165px] h-[155px] flex flex-col justify-center items-center "
                >
                  <img
                    src={brand.image}
                    alt="Tata Logo"
                    className=" w-[140px] h-[82px]"
                  />
                  <p className=" text-[#24272c] text-[16px] leading-[21px]">
                    {brand.name}
                  </p>
                  <p className=" text-[10px] leading-[15px] text-[rgba(36,39,44,0.3)] font-[400]">
                    {brand.offers} Offers available
                  </p>
                </div>
              ) 
            )}
          </div>
        
        </div>
       <LatestOffers/>
       <div className="  bg-[white] px-[21px]   relative flex flex-col  pt-[18px]   rounded-xl  border border-[rgba(36,39,44,0.1)]  ">
                 <h3 className="  text-[23px]  leading-[33.2px] font-[500] ">
                   The Most Searched Cars
                 </h3>
                 <div className="  mt-[16.59px]">
                   <Menu menuItems={bodyTypes} setitem={setbodyType} item={bodyType  } />
                 </div>
                 <div className=" w-full flex flex-col  pt-[29.5px] pb-[10px]  rounded-xl ">
                   <div
                     className="w-full rounded-lg   overflow-x-scroll gap-[20px] "
                     style={{ scrollbarWidth: "none" }}
                   >
                     <div className=" w-max flex  gap-[20px]">
                       {Array(5)
                         .fill()
                         .map((item, key) => (
                           <BrandCarRelevantCars
                             CarModels={Model}
                             used={false}
                             buttonText={"Check December Offers"}
                             newVariant={(key>1)?true:false}
                           />
                         ))}
                     </div>
                   </div>
                   <button className=" text-blue text-[15px] mt-[8px] font-[700] w-max flex gap-[8px] mb-[10px]  items-center">
                     View All {bodyType} Cars <Rightarrow />
                   </button>
                 </div>
               </div>
        
        
        
       
</div>
<div className=' w-[25%] px-[11px] flex flex-col gap-[20px]'>
    <UpcomingCars/>
    <LatestCarsSide/>
    
    
</div>
            </div>
            <ContactUs/>


        </div>
      
    </div>
  )
}

export default OffersandDiscounts
