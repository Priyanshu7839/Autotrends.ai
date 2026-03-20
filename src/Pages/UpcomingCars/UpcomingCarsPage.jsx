import React, { useState } from 'react'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import { bg_upcomingcars,kia1,grill,headlight } from '../../assets/Images'
import { BrandCarRelevantCars, CarPriceRanges, Monthranges, Menu, CarBrandCard, ContactUs,UpcomingCars } from '../../components';
import { ReadMoreicon,Rightarrow } from '../../assets/Images/SVG';
import { AnimatePresence, motion } from 'framer-motion';
import PopularCarsSection6 from '../../Components/PopularCars/PopularCarsSection6';
import LatestCars from '../../Components/SideComponents/LatestCars/LatestCars';
import PopularCarsByBodyType from '../../Components/SideComponents/PopularCarsByBodyType/PopularCarsByBodyType';
import PopularUsedCars from '../../Components/SideComponents/PopularUsedCars/PopularUsedCars';

const UpcomingCarsPage = () => {

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
      <div className={`${breakpoint <= 1440 ? 'w-full' : 'w-[1440px]'} bg-cover bg-no-repeat bg-center h-[400px] pl-[20%]  flex items-center `} style={{ backgroundImage: `url(${bg_upcomingcars})` }}>
        <div className='w-[40%] h-max p-[10px] bg-blue rounded-[8px] text-[48px] leading-[60px] text-[white] font-[500]'>
          Know everything about the latest cars

        </div>


      </div>
      <div className={`${breakpoint <= 1440 ? 'w-[84%]' : 'w-[1280px]'} mt-[20px] flex flex-col gap-[50px]`}>
        <div className=' w-full flex '>
          <div className=' w-[75%] flex flex-col gap-[20px]'>
            <div className="w-full flex flex-col gap-[11.3px] rounded-xl  px-[21px] border border-[rgba(36,39,44,0.1)]
     pt-[18px] pb-[21px]  "
            >
              <div className=" flex items-baseline gap-[9.68px]">
                <h3 className=" text-[32px] font-[600] leading-[38.8px] text-[#24272c] ">
                  Upcoming Cars
                </h3>
              </div>

              <p className="text-[15px] text-[rgba(36,39,44,0.7)] leading-[24px]">
                Around 60 upcoming cars like Avenger, Harrier EV, eVX, EV6 2025, Creta EV will be launched in India in 2024-2026. Among these 60
                upcoming cars, there are 44 SUVs, 8 Hatchbacks, 3 Sedans, 4 Coupes, 2 Convertibles, 2 MUVs and 2 Pickup Trucks. Of the above, 19
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
              <h3 className=" text-[32px] font-[600] leading-[38.8px] text-[#24272c] ">
                Upcoming Cars in India 2025
              </h3>
              <div className=" w-full grid grid-cols-3  pt-[6px] pb-[10px] gap-y-[20px] ">


                {Array(6)
                  .fill()
                  .map((item, key) => (
                    <BrandCarRelevantCars
                      CarModels={Model}
                      used={false}
                      buttonText={"Alert Me When Launched"}
                      electric={true}
                      facelift={(key > 2) ? true : false}
                      upcoming={true}
                    />
                  ))}
                <div className=' col-span-3'>
                  <CarPriceRanges text={"Upcoming Cars By Budget"} />
                </div>
                {Array(6)
                  .fill()
                  .map((item, key) => (
                    <BrandCarRelevantCars
                      CarModels={Model}
                      used={false}
                      buttonText={"Alert Me When Launched"}
                      electric={true}
                      facelift={(key > 2) ? true : false}
                      upcoming={true}
                    />
                  ))}
                <div className=' col-span-3'>
                  <Monthranges />
                </div>



                <button className=" text-blue text-[15px] mt-[8px] font-[700] w-max flex gap-[8px] mb-[10px]  items-center">
                  View All Upcoming Cars <Rightarrow />
                </button>
              </div>

            </div>

            <PopularCarsSection6 />


          </div>
          <div className=' w-[25%] px-[11px] flex flex-col gap-[20px]'>
            <CarBrandCard />
            <UpcomingCars />
            <LatestCars />
            <PopularCarsByBodyType />
            <PopularUsedCars />
          </div>
        </div>
        <ContactUs />


      </div>

    </div>
  )
}

export default UpcomingCarsPage
