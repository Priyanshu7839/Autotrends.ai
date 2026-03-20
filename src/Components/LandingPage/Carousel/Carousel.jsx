import React, { useState, useEffect, useRef } from "react";
import { Card } from "../../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { useScreenResizeValue } from "../../../ScreenSizeFunction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setCarDetailsSlice } from "../../../Store/CarDetailsSlice";
import { fetchallcardetails } from "../../../Context/ApiCall";


const Carousel = ({PopularElectricCars,UpcomingCars}) => {

  const breakpoint = useScreenResizeValue();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  


 
  return (
   
    <div className="flex items-center justify-center bg-[#FFFFFF]" id={`${PopularElectricCars?'Electric':'Upcoming'}`}>
      <div
        className={`${breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]"} 
      flex gap-[20px]  pt-[20px] border-[1px] border-[#23242c1a]  rounded-[16px] flex-col font-1 overflow-hidden
    `}
      >
        <div className="flex flex-col gap-[20px]">
          <h1 className="font-medium text-[1.4375rem] text-color-9 px-[24px]">
           {
            PopularElectricCars&&'Popular Electric Cars'
           }
           {
            UpcomingCars && 'Upcoming Cars'
           }
          </h1>
        </div>

        <div className="w-[100%]  flex items-center justify-center py-[10px] pb-[20px] px-[24px] mostSearched_Carousel">
                <Swiper
                modules={[Autoplay]}
                autoplay={true}
                allowTouchMove={true}
                    spaceBetween={0}
                    breakpoints={{
                      0:{
                        slidesPerView:1
                      },
                      600:{
                        slidesPerView:1.2
                      },
                      700:{
                        slidesPerView:1.5
                      },
                       850:{
                          slidesPerView:1.8
                       },
                       950:{
                        slidesPerView:2
                       },
                       1050:{
                        slidesPerView:2.2
                       },
                        1150:{
                        slidesPerView:2.5
                       },
                       1300:{
                        slidesPerView:2.8
                       },

                       1400:{
                          slidesPerView:3
                       }

                    }}
                   
                >
                    {PopularElectricCars &&
                       PopularElectricCars.map((electricCars) => {
                            return (
                                <SwiperSlide  key={electricCars.id}   onClick={()=>{
                                  
                                  fetchallcardetails(electricCars.modelUrl,electricCars.brandSlug,electricCars.modelSlug,{dispatch,navigate,setCarDetailsSlice})
                                  window.scrollTo({top:0,behavior:'smooth'})
                                
                                }}>
                                    <>
                                        <Card 
                                            img= {electricCars.image}
                                            name={electricCars.brandName}
                                            model={electricCars.modelName}
                                            desc={electricCars.desc}
                                            rating={electricCars.avgRating}
                                            priceRange={electricCars.priceRange}
                                            LaunchDate={electricCars.launchedAt}
                                            minPrice={electricCars.minPrice}
                                          
                                        />
                                    </>
                                </SwiperSlide>
                            )
                        })
                    }
                    {UpcomingCars &&
                       UpcomingCars.map((electricCars) => {
                            return (
                                <SwiperSlide key={electricCars.id} onClick={()=>{
                                  fetchallcardetails(electricCars.modelUrl,electricCars.brandSlug,electricCars.modelSlug,{dispatch,navigate,setCarDetailsSlice})
                                   window.scrollTo({top:0,behavior:'smooth'})
                                  }}>
                                    <>
                                        <Card 
                                            img= {electricCars.image}
                                            name={electricCars.brandName}
                                            model={electricCars.modelName}
                                            desc={electricCars.desc}
                                            rating={electricCars.avgRating}
                                            priceRange={electricCars.priceRange}
                                            LaunchDate={electricCars.launchedAt}
                                            minPrice={electricCars.minPrice}
                                            tagText={electricCars.tagText}
                                            upcoming={true}

                                        />
                                    </>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>
        



      </div>
    </div>
  );
};

export default Carousel;
