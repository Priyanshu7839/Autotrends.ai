import React from 'react'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import { useSelector } from 'react-redux';

const CarPriceInIndia = () => {
    const details = useSelector((state) => state.CarDetails);


    const breakpoint=useScreenResizeValue();
    let pricesMap ;

   if(details?.priceInCitiesMap){  pricesMap = details?.priceInCitiesMap.length > 0}

    return pricesMap && (
        <div className={`font-1 ${breakpoint<=1050?'w-full':'min-w-max w-full'} shadow-sm shadow-[rgba(36,39,44,0.1)] border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 px-[15px] py-[15px] `}>
            <div><h1 className='text-[20px] text-[#24272C] font-medium pb-[8px]'>{details?.priceInCitiesMap?.title}</h1></div>
            <div className='bg-[#FAFAFA] flex items-center justify-between'>
                {
                    details?.priceInCitiesMap?.items[0]?.heading?.map((item,index)=>{
                        return(
                            <div key={index} className=' py-[4px] text-[14px] text-[#24272C] text-opacity-70 font-semibold col-span-1 flex justify-center'>{item.text}</div>
                        )
                    })
                }
                
            </div>
            <div className='flex flex-col gap-[8px] py-[8px] '>

                {
                    details?.priceInCitiesMap?.items[0]?.childs?.map((item,index)=>{
                        return(
                            <div key={index} className={`text-[#24272C] flex justify-between px-[4px] font-semibold 
                                ${breakpoint>1250 && 'text-[14px]'}
                                ${breakpoint<=1250 && 'text-[12px]'}
                               `}>
                               <p className='underline'>{item.text}</p>
                               <p><span>Rs.</span>{item.price}</p>
                           </div>
                        )
                    })
                }

                
               
            </div>
        </div>
    )
}

export default CarPriceInIndia