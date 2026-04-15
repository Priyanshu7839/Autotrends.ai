import React from 'react'
import { cities } from '../../MockData/citiespng'
import { p } from 'framer-motion/client'


const BrandDealers = ({dealers=true,w=90,h=90,city,py,key}) => {
  return (
     <div key={key} className={` text-[13px] leading-[19.5px] text-[#24272c] px-[12px] py-[${py}px] gap-[10px] flex flex-col items-center rounded-xl shadow-md shadow-[rgba(36,39,44,0.15)] `}>
                  <img src={cities} alt="" width={w} height={h} />
                  <div className=' w-full flex flex-col items-center'>
                   { dealers &&<p>6 Kia</p>}
                  { dealers && <p>Dealers in namen</p>}
                  {!dealers && <p>{city.name.charAt(0).toUpperCase()+city.name.slice(1)}</p>}
                  </div>
            </div>)
       
  
}

export default BrandDealers
