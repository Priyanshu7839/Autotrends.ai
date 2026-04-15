import React from 'react'
import { FaCircleInfo } from "react-icons/fa6";
import { useScreenResizeValue } from '../../ScreenSizeFunction';


const BrandCarVariantPriceDetailCard = ({variant}) => {

     const breakpoint=useScreenResizeValue();

  return (
    <div className=' w-full px-[20px] pl-[10px] bg-[white]'>
             <div className=' w-full bg-[#fafafa]  pb-[20px]  mb-[20px] rounded-xl'>
        <div className={` ${breakpoint<=412?'w-full':'w-[60%]'} flex px-[20px]   flex-col`}>
            <div className={` w-full py-[10px]  text-[#24272c] pl-[10px] text-opacity-55  text-[14px] leading-[21px] gap-[8px] flex flex-col `}>
                <p>{variant.name}{`${(variant.petrol)?'(Petrol)':(variant.diesel)?'(Diesel)':'' }`}{' '}{`${(variant.basemodel)?'(Base Model)':''}`}</p>
                <div className=' flex justify-between  w-full'>
                    <p className=' '>Ex-Showroom Price</p>
                    <p className=' text-[#24272c]'>Rs. {variant.price}</p>
                     </div>
                     <div className=' flex justify-between  w-full'>
                    <p className=' '>RTO </p>
                    <p className=' text-[#24272c]'>Rs. {variant.roadtax}</p>
                     </div>
                     <div className=' flex justify-between  w-full'>
                    
                        <div className=' flex gap-[5px] items-center'>
                        <p>Insurance</p>
                        <FaCircleInfo className=' w-[12px] h-[12px] '/>
                        </div>
                    <p className=' text-[#24272c]'>Rs. {variant.insurance}</p>
                        
                     </div>
                     <div className=' flex justify-between  w-full'>
                    
                    <div className=' flex gap-[5px] items-center'>
                    <p>Others</p>
                    <FaCircleInfo className=' w-[12px] h-[12px] '/>
                    </div>
                <p className=' text-[#24272c]'>Rs. {variant.others}</p>
                    
                 </div>

            </div>
            <div className='w-full flex flex-col text-[#24272c] pl-[10px]  text-opacity-55 gap-[15px]'>
                <div className=' border-t border-[rgba(36,39,44,0.3)] border-dashed  flex justify-between items-center h-max w-full pt-[16px] '>

                    <p className={` ${breakpoint<=412?'text-[14px]':''}`}>
                        On Road Price in Jhansi
                    </p>
                    <p className=' flex flex-col items-end gap-[2px]'>
                        <p>Rs. {variant.price+variant.roadtax+variant.insurance}</p>
                        <p className=' text-blue text-[12px] leading-[18px] cursor-pointer font-[500]'>Report Incorrect Price</p>
                    </p>
                </div>
               
                <div className='border-t border-[rgba(36,39,44,0.3)] border-dashed flex justify-between items-center h-max w-full pt-[16px] '>

<p  className=' flex items-center gap-[2px] mr-[10px]'>
   <p className=' w-max '> EMI: Rs. 20,000/month</p>
    <FaCircleInfo className=' w-[12px] h-[12px] '/>
</p>
<p className=' flex flex-col items-end gap-[2px]'>
   
    <p className={` ${breakpoint<=412?'text-[13px]':''} text-blue cursor-pointer  leading-[18px] font-[500]`}>EMI Calculator</p>
</p>
</div>
<div className=' w-full py-[10px]'>
<button className=" w-full bg-blue text-[white] font-medium py-2 px-6 rounded-xl hover:bg-blue-600">
        Get EMI Offers
      </button>
</div>
            </div>

        </div>
      
    </div>
    </div>
    
  )
}

export default BrandCarVariantPriceDetailCard