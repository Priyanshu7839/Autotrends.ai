import React, { useState } from 'react'

import { KiaCarens,KiaSonet } from '../../assets/Images'
import { Rightarrow } from '../../assets/Images/SVG'
import {Menu} from '../../components'
import { useScreenResizeValue } from '../../ScreenSizeFunction'

const PopularSUV = () => {

    const [state,setstate]=useState('Trending');
    const breakpoint = useScreenResizeValue();


    return (
        <div className="w-full drop-shadow-[0_1px_2px_rgba(36,44,39,0.1)] border-[#24272C] border-[1px] rounded-[16px] border-opacity-10  py-[15px]   ">
             <div>
               <h1 className="text-[20px] px-[15px] text-[#24272C] font-medium pb-[8px]">
                 Popular SUV Cars
               </h1>
             </div>
             <div className=' w-full overflow-x-scroll' style={{scrollbarWidth:'none'}}>
             <Menu
                 menuItems={["Trending", "Latest", "Upcoming"]}
                 item={state}
                 setitem={setstate}
               />
             </div>
              
            
             {breakpoint>1050 && 
             <div className="pt-[16px] px-[15px] flex flex-col gap-[16px]">
               {Array(4)
                 .fill("")
                 .map(() => (
                   <div className="flex gap-2">
                     <div>
                       <img
                         src={KiaSonet}
                         alt=""
                         className="w-[88px] h-[59px] rounded-lg "
                       />
                     </div>
                     <div className="text-[14px] text-[#24272C]">
                       <p>Kia Sonet</p>
                       <p className="font-semibold">
                         <span>Rs.</span>13.58 - 25.61 Lakh
                       </p>
                     </div>
                   </div>
                 ))}
             </div>}
             {
               breakpoint<=1050 &&
               <div className=" w-full overflow-x-scroll px-[15px] " style={{scrollbarWidth:'none'}}>
                     <div className="pt-[16px] w-max flex  gap-[16px]">
               {Array(4)
                 .fill("")
                 .map(() => (
                   <div className="flex flex-col gap-2">
                     <div>
                       <img
                         src={KiaSonet}
                         alt=""
                         className="w-[280px] h-[180px] aspect-video rounded-lg "
                       />
                     </div>
                     <div className="text-[14px] px-[10px] text-[#24272C]">
                       <p>Kia Sonet</p>
                       <p className="font-semibold">
                         <span>Rs.</span>13.58 - 25.61 Lakh
                       </p>
                     </div>
                   </div>
                 ))}
             </div>
       
               </div>
       
             }
             <p className="flex gap-1 px-[15px] text-[#0085FF] font-semibold items-center pt-[8px]">
               View All {"Kia Cars"} <Rightarrow />
             </p>
           </div>
    )
}

export default PopularSUV