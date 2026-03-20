import React from 'react'
import { SlOptionsVertical } from "react-icons/sl";
import { kia4 } from '../../assets/Images';
import { Overlay } from '../../assets/Images/SVG';
import { useScreenResizeValue } from '../../ScreenSizeFunction';

const BestCars = () => {

     const breakpoint=useScreenResizeValue();

  return (
    <div className={` ${breakpoint<=412?' flex flex-col mx-[20px] w- full h-[340px] pb-2 gap-2   drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)]   border-[#24272C] border rounded-[16px] border-opacity-10':' flex flex-col w-[285px] h-[340px] pb-2 gap-2  drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)]   border-[#24272C] border rounded-[16px] border-opacity-10'}`}>
                                   <div className={`flex w-full h-[200px] relative mt-0 justify-center rounded-t-xl pb-[10px] `} style={{backgroundImage:`url(${kia4})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
                                      
                                      <div className=' self-end flex justify-between h-max w-full text-[#242424] px-[10px]'>

                                       </div> 
                                   </div>
                                    <div className='flex flex-col gap-[0.25px] pb-[10px] px-[15px] font-semibold  '>
                                       <div className=' h-max flex justify-between w-full'>
                                       <p className='px-[2px] text-[17px] text-[#24272C] '>Hyundai Creta</p>
                                       <SlOptionsVertical className=' w-[18px] h-auto text-[rgba(36,39,44,0.5)]'/>
                                    </div>
                                       <p className='px-[2px] text-[17px] text-[#24272C]  '><span className='text-[15px]'>Rs.</span>11 - 20.30 Lakh<sup>*</sup></p>
                                       {<p className=' items-center mt-[8px] text-[11px] leading-[16.5px] text-[rgba(36,39,44,0.5)] flex gap-[4px]'>
                                           <span>25.71kmpl</span>
                                           <Overlay/>
                   <span>1199cc</span>
                   <Overlay/>
                   <span>Diesel</span>
   
                                       </p>}
                                      
                                       <button className=' mt-[16px] flex gap-1 text-[14px] border-2 py-[10px] border-blue rounded-xl text-[#0085FF] font-semibold items-center justify-center'>
                                          Check December Offers
                                           
                                       </button>
       
                                   </div>
       
                               </div>
  )
}

export default BestCars
