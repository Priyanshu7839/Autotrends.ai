import React, { useState } from 'react'
import { useScreenResizeValue } from '../../ScreenSizeFunction'

import { MdOutlineArrowDropDown, MdKeyboardArrowRight } from "react-icons/md";
import SearchVehicle from '../SearchVehicles/SearchVehicles';

const NewCarsHeader = ({image,popular_cars=false,textcolor="white",form_display=true}) => {

  const [category,setcategory]=useState('budget');
    const breakpoint=useScreenResizeValue();

  return (
    <div className={`${breakpoint<=1440?'w-full':'w-[1440px]'} bg-cover bg-no-repeat bg-center h-[400px] ${popular_cars?'pl-[30%]':'pl-[120px]'} flex items-center `} style={{backgroundImage:`url(${image})`}}>
        
       { form_display&&<div className=' w-[45%] h-max'>
          <h2 className={` text-[48px] leading-[60px] font-[500] ${textcolor==="white"?'text-[white]':'text-blue'}`}>
          Buying your dream car?
          Check Now!
          </h2>
          <SearchVehicle/>
        </div>}
      
    </div>
  )
}

export default NewCarsHeader
