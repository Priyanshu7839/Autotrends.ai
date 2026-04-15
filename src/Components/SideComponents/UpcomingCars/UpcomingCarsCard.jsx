import React from 'react'
import { kia3 } from '../../../assets/Images'
import { Link } from 'react-router'
import { useScreenResizeValue } from '../../../ScreenSizeFunction'

const UpcomingCarsCard = ({upcoming}) => {
    
    
        const breakpoint=useScreenResizeValue();
      
      
    
    
      return (
        <div className={` ${breakpoint<=412 ? 'w-[320px] flex-col gap-[10px] ' : 'w-[300px]'} h-max flex rounded-xl mt-[16px] `}>
          {/* left part */}
          <div
            className={`relative ${breakpoint<=412 ? ' w-full aspect-[4/3]' :'w-[32.56%] h-[58px]'}   rounded-[10px] `}
            style={{
              backgroundImage: `url(${kia3})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >

          </div>
          {/* right part */}
          <div className={`relative pl-[8px] ${breakpoint<=412? ' w-full' :' w-[67.44%]'}  h-max rounded-tr-xl mr-[21px] rounded-br-xl `}>
          
          <div className=''>
            <h2 className={` ${breakpoint<=412?' text-[20px] font-[600]':' text-[18px] font-[500]'}`}>Jeep Avenger</h2>
            <div className=' flex gap-[6.66px] items-baseline'>
            <p className='text-[14px] font-[500]'>Rs. 50 Lakh<sup >*</sup></p>
            {upcoming&&<Link to='/'>
            <p className=' text-[10px] font-[500] text-[#24272c] text-opacity-50'>Expected Price</p>
            </Link>}
            </div>
            
          </div>
         {upcoming&&<div className='flex flex-col gap-[10px] mt-[10px] '>

          
           { <p className=' text-[#24272c] text-[10px] leading-[15px] text-wrap text-opacity-70'>
          Expected Launch Jan 01, 2025
            </p>}
          
        
          </div>}
        </div>
        </div>
  )
}

export default UpcomingCarsCard
