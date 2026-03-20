
import React from 'react'
import { useScreenResizeValue } from '../../ScreenSizeFunction';

const BrandCarVariantPriceCard = ({variant}) => {

  const breakpoint=useScreenResizeValue();

  const {name,specs,waiting,price,features,isBaseModel}=variant;
  return (
    <div className={`w-full h-max flex ${breakpoint<768?'flex-wrap justify-between':''}   pb-[20px] border-b border-[rgba(36,39,44,0.15)] `}>
   <div className={` ${breakpoint<768?'w-[48%]':'w-max'} py-3.5 flex flex-col gap-[6px] pt-[19.5px] pl-6   whitespace-nowrap h-max    max-w-[300px] `}>
   
                                <p className='text-[18px] text-[#24272C] font-[500]'>{name}</p>
                                <p className='text-[12px] text-[#24272C] text-opacity-70 '>{(isBaseModel)?'(Base Model)':''}</p>
                                <div>
                                <p className='text-[12px] text-[#24272C] text-opacity-70 w-[70%]'>{specs}</p>
                                <p className='text-[12px] text-[#24272C] text-opacity-90'>{waiting}</p>
                                </div>

                            </div>
   <div className={`grow shrink self-stretch flex justify-center   pt-[25px] ${breakpoint<768?'w-[48%]':'w-max'}     h-max   max-w-[178px] `}>
    <div className=' flex flex-col items-center gap-[1.5px] h-max'>
    <p className={` ${breakpoint<=480?"text-[14px]":'text-[18px]'} leading-[27px] font-[500] text-[#24272c]`}>Rs. {price} Lakhs<sup>*</sup></p>
    <p className=' text-[14px] leading-[21px] font-[500] text-blue'>Get On-Road Price</p>
    </div>


   </div> 
   <div className="flex  grow shrink  pl-6 self-stretch  bg-neutral-50 pt-[17px] min-w-[240px] w-max" >
    {(features.length>0)&&<div className=' flex flex-col  '>
                      <p className='text-[14px] leading-[21px] font-[500] text-[#24272c]'>Key Features</p>
                      <ul className=' list-inside list-disc gap-1'>
                        {
                          features.map((feature,index)=>{
                            return <li className=' text-[12px] leading-[24px] text-[#24272c] font-[400]'>{feature}</li>

                          })
                        }
                        
                      </ul>
                  </div>
}
    
    </div>
    <div className={`grow shrink self-stretch  flex ${breakpoint<768?'place-items-end':''} justify-center pt-[17px] text-center whitespace-nowrap bg-neutral-50 min-h-[44px] w-[86px] max-md:pr-5`}>
              <div className=' flex flex-col text-[11px] items-center   text-[#24272c] text-opacity-50 gap-[6.25px]'>
              <input type="checkbox" name="" id="" className=' w-[18px] h-[20px] border border-[rgba(36,39,44,0.5)]' />
              <p className=' leading-[16.5px] font-[400]'>Compare</p>

              </div>
            </div>  
      
    </div>

    
  )
}

export default BrandCarVariantPriceCard

