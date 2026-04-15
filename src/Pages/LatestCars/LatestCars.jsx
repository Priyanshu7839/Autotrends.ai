import React, { useState } from 'react'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import { bg_upcomingcars, kia1, grill, headlight, bg_latestcars } from '../../assets/Images'
import { BrandCarRelevantCars, CarPriceRanges, Monthranges, Menu, CarBrandCard, ContactUs, UpcomingCars, NewCarsHeader, LatestCarsSide, NewlyLaunchedCarsCard } from '../../components';
import { ReadMoreicon, Rightarrow } from '../../assets/Images/SVG';
import { AnimatePresence, motion } from 'framer-motion';
import PopularCarsSection6 from '../../Components/PopularCars/PopularCarsSection6';


import PopularCarsByBodyType from '../../Components/SideComponents/PopularCarsByBodyType/PopularCarsByBodyType';
import PopularUsedCars from '../../Components/SideComponents/PopularUsedCars/PopularUsedCars';

const LatestCars = () => {

  const breakpoint = useScreenResizeValue();
  const [collapsed, setCollapsed] = useState(true);

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

  return (
    <div className=' w-full h-max flex flex-col items-center'>
      {breakpoint > 412 && <NewCarsHeader image={bg_latestcars} textcolor='blue' />}
      <div className={`${breakpoint <= 1440 ? breakpoint <= 412 ? 'w-full' : 'w-[84%]' : 'w-[1280px]'} mt-[20px] flex flex-col gap-[50px]`}>
        <div className={` ${breakpoint<=412 ? ' w-full flex flex-col gap-[20px]': ' w-full flex '}`}>
          <div className={` ${breakpoint<=412 ?' w-full flex flex-col gap-[20px]': 'w-[75%] flex flex-col gap-[20px]'}`}>
            <div className="w-full flex flex-col gap-[11.3px] rounded-xl  px-[21px] border border-[rgba(36,39,44,0.1)]
     pt-[18px] pb-[21px]  "
            >
              <div className=" flex items-baseline gap-[9.68px]">
                <h3 className=" text-[32px] font-[600] leading-[38.8px] text-[#24272c] ">
                  Newly Launched Cars in 2025
                </h3>
              </div>

              <p className="text-[15px] text-[rgba(36,39,44,0.7)] leading-[24px]">
                {`There are 30 cars recently launched in India in last 3 months. Some of the popular latest cars are Toyota Camry (₹ 48 Lakh), Honda
Amaze (₹ 8 - 10.90 Lakh), Kylaq Prestige AT (₹ 14.40 Lakh), Nexon Fearless Plus PS Dark Diesel AMT (₹ 15.80 Lakh), BMW M2 (₹ 1.03`}
              </p>
              <details
                className={`w-full top-0 left-0 ${collapsed ? "" : "pb-[30px]"
                  } relative`}
              >
                <summary
                  className={`list-none w-full  bg-[white] ${collapsed ? "" : "absolute z-10 bottom-0"
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
            <div className=' w-full flex flex-col  gap-[14px]'>

              <div className={` ${breakpoint<=412 ? 'w-full flex flex-col gap-[20px] items-center pt-[6px] pb-[10px] ' : " w-full grid grid-cols-3  pt-[6px] pb-[10px] gap-y-[20px] "}`}>


                {Array(6)
                  .fill()
                  .map((item, key) => (
                    <NewlyLaunchedCarsCard

                      electric={true}
                      facelift={(key > 2) ? true : false}

                    />
                  ))}
                {breakpoint<=412 && 
                                                <div className=' relative  w-full col-span-1 bg-[#f0f0f0] rounded-2xl overflow-x-scroll' style={{scrollbarWidth:'none'}}>
                                                  <h3 className='px-[20px] sticky top-[10px] left-0 text-[20px] font-bold '>Latest cars by budget</h3>
                                                <div className=' w-max '>
                                                <CarPriceRanges/>
                                                </div>
                                                </div>}
                                                { breakpoint>412 &&
                                                <div className=' col-span-3'>
                                                   <CarPriceRanges text={'Latest Cars by budget'} />
                                                  </div>
                                                       
                                                        }
                {Array(6)
                  .fill()
                  .map((item, key) => (
                    <NewlyLaunchedCarsCard

                      electric={true}
                      facelift={(key > 2) ? true : false}

                    />
                  ))}
                  {breakpoint<=412 && <CarBrandCard text={'Latest cars'}/>}
                  {Array(6)
                  .fill()
                  .map((item, key) => (
                    <NewlyLaunchedCarsCard

                      electric={true}
                      facelift={(key > 2) ? true : false}

                    />
                  ))}
                  {breakpoint<=412 && <PopularCarsByBodyType text={'Latest Cars'}/>}

              </div>
              <div className=' w-full flex justify-center mt-[50px]'>
                <button className=' w-[50%] bg-[#fafafa] border hover:bg-[#e4e3e3] border-[rgba(36,39,44,0.15)]  rounded-[4px] h-max text-[14px] leading-[48px] text-blue font-[500] text-center'>
                  { breakpoint>412 ?'View All Cars':'Load More'}
                </button>
              </div>

            </div>




          </div>
          <div className={` ${breakpoint<=412? ' w-full flex flex-col gap-[20px] px-[11px]': ' w-[25%] px-[11px] flex flex-col gap-[20px]' }`}>
          {breakpoint>412 &&<CarBrandCard text={'Latest cars'}/>}
            <UpcomingCars />
            <LatestCarsSide />
           { breakpoint>412 && <PopularCarsByBodyType text={'Latest cars'} />}

          </div>
        </div>
        <ContactUs />


      </div>

    </div>
  )
}

export default LatestCars
