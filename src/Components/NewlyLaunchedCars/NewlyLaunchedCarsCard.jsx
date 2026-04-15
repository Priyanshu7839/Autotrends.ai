import React from 'react'
import { SlOptionsVertical } from "react-icons/sl";
import { kia4 } from '../../assets/Images';
import { Overlay } from '../../assets/Images/SVG';
import { MdArrowRight } from "react-icons/md";
import { FaPlug } from 'react-icons/fa';
import { Faceliftimage } from '../../assets/Images/SVG';
import { useScreenResizeValue } from '../../ScreenSizeFunction';


const NewlyLaunchedCarsCard = ({electric=true,facelift=true,newVariant=false}) => {

    const breakpoint=useScreenResizeValue();

  return (
    <div className={`flex flex-col  ${breakpoint<=412 ? 'w-[340px]': 'w-[285px]'} h-max  gap-2  drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)]   border-[#24272C] border rounded-[16px] border-opacity-10`}>
                                   <div className={`flex w-full h-[200px] relative mt-0 justify-center rounded-t-xl pb-[10px] `} style={{backgroundImage:`url(${kia4})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
                                      
                                       <div className=' self-end flex justify-between h-max w-full text-[#242424] px-[10px]'>
                                                                         {electric&&<button className=' bg-[white] font-[500] items-center flex gap-[6px] px-[10px] rounded-[10px] text-[10px] leading-[20px]'>
                                                                          <FaPlug className=' text-[#242424]'/>
                                                                           Electric
                                                                          </button>}
                                                                          {
                                                                            facelift&&<button className=' bg-[white] font-[500] items-center flex gap-[6px] px-[10px] rounded-[10px] text-[10px] leading-[20px]'>
                                                                              <Faceliftimage/>
                                                                              Facelift
                                                                          </button>
                                                                          }
                                                                          {
                                                                            newVariant&&<button className=' bg-[white] font-[500] items-center flex gap-[6px] px-[10px] rounded-[10px] text-[10px] leading-[20px]'>
                                                                           <IoCopySharp className=' text-[#242424]'/>
                                                                            New Variant
                                                                        </button>
                                                                          }
                                    </div> 
                                   </div>
                                    <div className='flex flex-col gap-[0.25px] pb-[20px] px-[15px] font-semibold  '>
                                       <div className=' h-max flex justify-between w-full'>
                                       <p className='px-[2px] text-[17px] text-[#24272C] '>Hyundai Creta</p>
                                       
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
                                   <div className=' w-full py-[10px] rounded-b-[16px] flex items-center justify-between border-[rgba(36,39,44,0.15)] border px-[10px]'>
                                    <div className=' flex gap-[6px]'>
                                        <div className='w-max px-[10px] py-[4px] rounded-3xl text-[10px] leading-[12px] bg-[rgba(36,39,44,0.3)] text-[white] '>
                                            3
                                        </div>
                                        <p className=' text-[13px] text-[rgba(36,39,44,0.7)]'>
                                            Variants Launched: Dec 28, 2025
                                        </p>
                                    </div>
                                    <MdArrowRight className=' w-[25px]  text-[rgba(36,39,44,0.7)]'/>

                                   </div>
       
                               </div>
  )
}

export default NewlyLaunchedCarsCard
