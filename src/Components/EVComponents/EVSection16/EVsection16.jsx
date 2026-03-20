import React, { useState } from 'react'
import { Header,CarImage,ProsSection,ConsSection } from './'
import { BgPattern } from '../../../assets/Images/SVG'
import { useScreenResizeValue } from '../../../ScreenSizeFunction';
import { img } from 'framer-motion/client';
const EVsection16 = () => {
   
  const [pros,setpros]=useState(true);
  const breakpoint=useScreenResizeValue();

  return (
    <div className="flex overflow-hidden  flex-col  mt-[100px]  w-full h-max ">
      <Header />
      <div className={` ${breakpoint<=412?' flex flex-col gap-[30px] px-[20px] mt-[20px] bg-[white] bg-opacity-0 relative z-[10]':' flex mt-[39.5px] bg-[white] bg-opacity-0 relative z-[10] '}`}>
        {breakpoint<=412 && <img src='https://stimg.cardekho.com/pwa/img/ev/new-good-and-bed-mobi.svg' alt='pros and cons image' className=' w-full '/>}
        {breakpoint<=412 && <ul className=' w-full flex gap-[14px] font-bold'>
          <li className={`${pros?' bg-[#e3f4ff]':'bg-[#f2f8fd]'} px-[20px] py-[7px] rounded-[20px] text-[13px]`} onClick={(e)=>setpros(true)}> Pros</li>
          <li className={`${!pros?' bg-[#e3f4ff]':'bg-[#f2f8fd]'} px-[20px] py-[7px] rounded-[20px] text-[13px]`} onClick={(e)=>setpros(false)}> Cons</li>
          </ul>}
      { breakpoint>412 &&<ProsSection />}
      
     {breakpoint>412 && <CarImage />}
     {breakpoint>412 && <ConsSection />}
     {breakpoint<=412 && (pros?<ProsSection/>:<ConsSection/>)}
      <BgPattern clas={'absolute bottom-0 right-0 z-[-1]'} />
      </div>
     
    </div>
  )
}

export default  EVsection16
