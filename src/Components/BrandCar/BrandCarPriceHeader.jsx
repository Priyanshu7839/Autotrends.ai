import React,{useState} from 'react'
import { ReadLessicon,ReadMoreicon } from '../../assets/Images/SVG';
import { MdOutlineEdit } from "react-icons/md";
import { motion } from 'framer-motion';
import { useScreenResizeValue } from '../../ScreenSizeFunction';
import { useSelector } from 'react-redux';

const BrandCarPriceHeader = () => {
 const [collapsed, setCollapsed] = useState(true);
 const breakpoint=useScreenResizeValue();
  const details = useSelector((state)=>state.CarDetails)
 

  return (
    <div className='w-full flex flex-col gap-[11.3px] rounded-xl border px-[21px] pt-[18px] pb-[21px]  shadow-md shadow-[rgba(36,39,44,0.1)] border-[rgba(36,39,44,0.1)]'>
        <div className=' items-baseline gap-[9.68px]'>
        <h3 className={` inline ${breakpoint<=412?' text-[24px] leading-[30px]':' text-[27px] leading-[38.8px]'}  font-[500]  text-[#24272c] `}>
        {details?.overView?.name} On Road Prices
        </h3>
        {/* <div className='  inline-flex text-[#0085ff] items-center gap-[4px] cursor-pointer'>
            <MdOutlineEdit className={` ${breakpoint<=412?' w-[13px] h-[13px]':' w-[15px] h-[15px]'} `}/>
            <p className={`  ${breakpoint<=412?'text-[12px]':' text-[14px]'} font-[400]`}>Change City</p>
        </div> */}
        </div>
        
          <p className={` ${breakpoint<=412?'text-[13px] leading-[20px]':'text-[15px]  leading-[24px]'} text-[rgba(36,39,44,0.7)]`}>
         {details?.variantTableHighlight?.description}
                    </p>
          
        </div>
  )
}

export default BrandCarPriceHeader