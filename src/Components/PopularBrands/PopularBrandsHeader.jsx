import React, { useRef, useState } from 'react'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import { Swiper,SwiperSlide } from 'swiper/react';
import { Pagination,Navigation,Autoplay } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/swiper-bundle.css'
import { delay } from 'framer-motion';
import { bg_latestcars, bg_offersanddiscounts, bg_popularbrands, bg_upcomingcars } from '../../assets/Images';
const PopularBrandsHeader = () => {

    const breakpoint=useScreenResizeValue();
    const swiperRef=useRef(null);
    const [index,setindex]=useState(0);

    const goToSlide = (index) => {
        if (swiperRef.current) {
          swiperRef.current.slideTo(index);
        }
      };

  return (
    <div className={`${breakpoint<=1440?'w-full ':'w-[1400px]'} relative h-max`}>
        <Swiper
        onSwiper={(swiper)=>(swiperRef.current=swiper)}
        speed={1300}
        autoplay={
            {
                delay:2000,
                stopOnLastSlide:false,
                
            
            }
        }
        modules={[Pagination,Navigation,Autoplay]}
        loop={true}
        
        pagination={{
            clickable:true,
           
        }
        }
        scrollbar={{
            draggable:true,
            
        }}
        
        slidesPerView={1}
        className={` ${breakpoint<=412?' w-full h-[300px] relative ':'w-full h-max'}`}
        onSlideChange={(swiper)=>{
          setindex(swiper.realIndex);
        }
           
            
        }
        >
            <SwiperSlide className={` w-full ${breakpoint<=412?'h-[250px] relative':'h-max'}`} >
                <img src={bg_popularbrands} alt="" className={` w-full ${breakpoint<=412?'h-[250px]':'h-[500px]'}`} />
               { breakpoint<=412 && <div className=' absolute bottom-[10px] left-[40%] right-[50%] flex flex-col gap-[8px] w-max cursor-pointer' >
                <p className={` text-[white] text-[14px] leading-[21px] font-[500]`}>Crystal MG</p>
                <div className={` w-full h-[2px] bg-[white] `}></div>
            </div>}
            </SwiperSlide>
            <SwiperSlide className={` w-full ${breakpoint<=412?' h-[250px] relative':'h-max'}`} >
                <img src={bg_latestcars} alt="" className={` w-full ${breakpoint<=412?'h-[250px]':'h-[500px]'}`} />
                { breakpoint<=412 && <div className=' absolute bottom-[10px] left-[40%] right-[50%] flex flex-col gap-[8px] w-max cursor-pointer' >
                <p className={` text-[white] text-[14px] leading-[21px] font-[500]`}> 2024 Honda Amaze</p>
                <div className={` w-full h-[2px] bg-[white] `}></div>
            </div>}
            </SwiperSlide>
            <SwiperSlide className={` w-full ${breakpoint<=412?' h-[250px] relative':'h-max'}`} >
                <img src={bg_offersanddiscounts} alt="" className={` w-full ${breakpoint<=412?'h-[250px]':'h-[500px]'}`} />
                { breakpoint<=412 && <div className=' absolute bottom-[10px] left-[40%] right-[50%] flex flex-col gap-[8px] w-max cursor-pointer' >
                <p className={` text-[white] text-[14px] leading-[21px] font-[500]`}> Skoda Kylaq Launch</p>
                <div className={` w-full h-[2px] bg-[white] `}></div>
            </div>}
            </SwiperSlide>
            <SwiperSlide className={` w-full ${breakpoint<=412?' h-[250px] relative':'h-max'}`} >
                <img src={bg_upcomingcars} alt="" className={` w-full ${breakpoint<=412?'h-[250px]':'h-[500px]'}`} />
                { breakpoint<=412 && <div className=' absolute bottom-[10px] left-[40%] right-[50%] flex flex-col gap-[8px] w-max cursor-pointer' >
                <p className={` text-[white] text-[14px] leading-[21px] font-[500]`}> Mahindra XEV and BE</p>
                <div className={` w-full h-[2px] bg-[white] `}></div>
            </div>}
            </SwiperSlide>
        </Swiper>
      { breakpoint>412 && 
      <div className={`absolute z-10 flex items-end gap-[16px] ${breakpoint<=412?'w-full left-0':'w-[40%] right-[20%]'}  h-[100px] bottom-[20%] `}>
            <div className=' flex flex-col gap-[8px] w-[24.5%] cursor-pointer' onClick={()=>goToSlide(0)} >
                <p className={` text-[white] text-[14px] leading-[21px] ${index===0?'font-[500]':''}`}>Crystal MG</p>
                <div className={` w-full ${index===0?'h-[8px]':'h-[2px]'} bg-[white] transition-[height]  delay-0 duration-[700ms] `}></div>
            </div>
            <div className=' flex flex-col gap-[8px] w-[24.5%] cursor-pointer' onClick={()=>goToSlide(1)}>
                <p className={` text-[white] text-[14px] leading-[21px] ${index===1?'font-[500]':''}`}>2024 Honda Amaze</p>
                <div className={` w-full ${index===1?'h-[8px]':'h-[2px]'} bg-[white]  transition-[height] delay-0 duration-[700ms]`}></div>
            </div>
            <div className=' flex flex-col gap-[8px] w-[24.5%] cursor-pointer' onClick={()=>goToSlide(2)}>
                <p className={` text-[white] text-[14px] leading-[21px] ${index===2?'font-[500]':''}`}>Skoda Kylaq Launch</p>
                <div className={` w-full ${index===2?'h-[8px]':'h-[2px]'} bg-[white] transition-[height] delay-0 duration-[700ms] `}></div>
            </div>
            <div className=' flex flex-col gap-[8px] w-[24.5%] cursor-pointer' onClick={()=>goToSlide(3)}>
                <p className={` text-[white] text-[14px] leading-[21px] ${index===3?'font-[500]':''}`}>Mahindra XEV and BE</p>
                <div className={` w-full ${index===3?'h-[8px]':'h-[2px]'} bg-[white] transition-[height] delay-0 duration-[700ms]`}></div>
            </div>
         
        </div>
}
        <style>
            {
                `
                ${breakpoint<=412?'.swiper-slide{ height:250px;}':''}

                .swiper-pagination-bullets.swiper-pagination-horizontal{
              position:absolute;
              bottom:10px;
              }

               .swiper-scrollbar {
      display: none !important;  
    }

                `
            }
        </style>

      
    </div>
  )
}

export default PopularBrandsHeader
