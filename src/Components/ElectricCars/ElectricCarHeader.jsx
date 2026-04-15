import React, { useState } from 'react'
import { Leaf } from '../../assets/Images/SVG'
import { MdOutlineArrowDropDown } from 'react-icons/md';
import {Swiper, SwiperSlide } from 'swiper/react';

import { Pagination,Navigation,Scrollbar,A11y,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { kia1, kia2, kia3, kia4, kia5, KiaCarnival } from '../../assets/Images';
import { FaArrowRight } from 'react-icons/fa6';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useScreenResizeValue } from '../../ScreenSizeFunction';

const ElectricCarHeader = () => {

    const [category,setcategory]=useState('price');
    const [activeslide,setactiveslide]=useState(0);
    const breakpoint=useScreenResizeValue();
    console.log(breakpoint);

  return (
    <div className={`w-full h-max ${breakpoint<=412?'flex flex-col-reverse gap-[-10px] items-center':'justify-between flex '} `}>
        <div className={` ${breakpoint<=412?'w-full overflow-x-hidden h-max':'w-[50%]'} relative h-max `}>
            <div className={` ${breakpoint<=412?'h-[450px] w-[120vw] ':' w-full h-[520px] blur-sm rounded-tr-[200px] rounded-br-[150px] mt-[4px]'}   ml-[-5px] bg-gradient-to-br from-[rgba(193,211,245)] to-[rgba(255,255,255)] `} ></div>
            <div className={` ${breakpoint<=412?'absolute h-max gap-[40px] top-[80px] w-full flex flex-col px-[20px]':'absolute h-max gap-[20px] top-[80px] w-full flex flex-col pl-[35px]'}`}>
                <div className='flex flex-col gap-[7.5px]'>
                    <div className='flex items-end gap-[8px]'>
                       <Leaf/>
                       <p className='text-[15px] leading-[23px] text-[#24272c] font-[500] font-Roboto'>
                        Green Initiatives
                       </p>
                    </div>
                    <h1 className={`${breakpoint<=412?'text-[32px] leading-[42px]':'text-[44px] leading-[57px]'} font-[700] font-Roboto text-[#24272c]`}>
                    Electric Cars Bringing Revolution to India
                    </h1>
                </div>
                <div className='flex flex-col gap-[16px]'>
                    <ul className='list-disc list-inside flex gap-[16px] items-center flex-wrap'>
                        <li className={`cursor-pointer ${category==='price'?'text-[#24272c] border-b-[4px] border-blue border-dashed':'text-[rgba(36,39,44,0.5)]'} text-[15px] leading-[23px] font-[700] font-Roboto`} style={category==='price'?{borderImage: 'repeating-linear-gradient(90deg, rgba(11,102,250) 0, rgba(11,102,250) 2px, transparent 2px, transparent 4px) 10'}:{}} onClick={()=>setcategory('price')}>Price</li>
                        <li className={`cursor-pointer ${category==='brand'?'text-[#24272c] border-b-[4px] border-blue border-dashed':'text-[rgba(36,39,44,0.5)]'} text-[15px] leading-[23px] font-[700] font-Roboto`} style={category==='brand'?{borderImage: 'repeating-linear-gradient(90deg, rgba(11,102,250) 0, rgba(11,102,250) 2px, transparent 2px, transparent 4px) 10'}:{}} onClick={()=>setcategory('brand')}>Brand</li>
                        <li className={`cursor-pointer ${category==='range'?'text-[#24272c] border-b-[4px] border-blue border-dashed':'text-[rgba(36,39,44,0.5)]'} text-[15px] leading-[23px] font-[700] font-Roboto`} style={category==='range'?{borderImage: 'repeating-linear-gradient(90deg, rgba(11,102,250) 0, rgba(11,102,250) 2px, transparent 2px, transparent 4px) 10'}:{}} onClick={()=>setcategory('range')}>Range</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-[15px]'>
                <div className={`${breakpoint<=412?' w-full h-max flex flex-col rounded-[12px] px-[8px] py-[6px] bg-[white] drop-shadow-[0px_4px_12px_rgba(0,0,0,0.1)]':'w-full h-max flex rounded-[12px] py-[6px] px-[8px] bg-[white] drop-shadow-[0px_4px_12px_rgba(0,0,0,0.1)]'} `}>
                         <div className={` ${breakpoint<=412?' w-full  relative py-[10px]   h-full items-center':'w-[70%]  relative py-[10px]   h-full items-center'}`}>
                                         <select className=' cursor-pointer bg-[white] pl-[14px] outline-none bg-opacity-0 relative z-10 appearance-none text-[16px] w-full font-[700] text-[rgba(36,39,44,0.5)] ' defaultValue={' '}>
                                         <option value="" >
                                        {(category=='price')&&<p>Select Budget</p>}
                                        {(category=='brand')&&<p>Select Brand</p>}
                                        {(category=='range')&&<p>Select Price Range</p>}

                                        </option>
                                        <option value="" >
                                            2 Lakhs
                                        </option>
                         
                                         </select>
                                         <MdOutlineArrowDropDown className=' absolute z-0 right-[14px] top-[40%] text-[rgba(36,39,44)]'/>
                         
                                         
                                         
                                         </div>
                                         {breakpoint>412&&<button className=' text-[15px] leading-[23px] font-Roboto font-[700] text-[white] rounded-[8px] bg-blue py-[10px] w-[30%] text-center '>
                                             Search
                                         </button>}
                        

                    </div>
                 { breakpoint<=412 && <button className=' text-[15px] font-bold w-full leading-[23px] font-Roboto text-[white] rounded-[8px] bg-blue py-[10px] text-center '>
                                             Search
                                         </button>}
                    
                </div>
               

              
            </div>
        </div>
        <div className={`${breakpoint<=412?'w-full h-[200px] pt-[20px] bg-gradient-to-r from-[rgba(193,211,245)] to-[rgba(193,211,245,0.5)]   ':'w-max relative h-[400px] mt-[100px]'} `}>
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      className={`${breakpoint<=412?' h-[200px] w-full':'rounded-lg relative  h-[400px] w-[500px] '}`} 
      loop={true}
      slidesPerView={breakpoint<=412?1.2:1}
      centeredSlides={breakpoint<=412?true:false}
      autoplay={{ delay:1000 }}
      spaceBetween={breakpoint<=412?15:0}
      navigation={
        breakpoint<=412?false:{
          
          prevEl: ".custom-button-prev",
          nextEl: ".custom-button-next",
         
        }
      }
      pagination={breakpoint<=412?false:{ 
        clickable: true, }}
      scrollbar={{ draggable: true }}>
      {[kia2, kia3, kia4, kia5].map((image, index) => (
        <SwiperSlide key={index}>
          <div className={`w-full ${breakpoint<=412?'h-full':'h-[350px]'} bg-no-repeat bg-cover bg-center rounded-lg`} style={{backgroundImage:`url(${image})`}}></div>
        </SwiperSlide>
      ))}
    </Swiper>
    {  breakpoint<=412?<></> :<div  className=' custom-button-prev absolute cursor-pointer top-[40%] left-[-3%] z-20 rounded-full drop-shadow-[0px_4px_12px_rgba(36,39,44)] bg-[white] w-[36px] h-[36px] flex justify-center items-center'>
        <IoIosArrowBack className='text-[#24272c] w-[10px] h-[10px]'/>
    </div>
}
{breakpoint<=412?<></> :<div  className=' custom-button-next absolute cursor-pointer top-[40%] right-[-3%] z-20 rounded-full drop-shadow-[0px_4px_12px_rgba(36,39,44)] bg-[white] w-[36px] h-[36px] flex justify-center items-center'>
<IoIosArrowForward className='text-[#24272c] w-[10px] h-[10px]'/>
</div>}
        </div>
        <style>
           {`
            .swiper{
              position:relative;
              overflow-x:hidden !important;
             
            }
            .swiper-scrollbar{
              display:none;
            }
              .swiper-pagination-bullets.swiper-pagination-horizontal{
              position:absolute;
              bottom:10px;
              }
            ${breakpoint<=412?`swiper-wrapper { overflow: visible !important; }`:``}
          `}
        </style>
    </div>
  )
}

export default ElectricCarHeader;