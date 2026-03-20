import React from 'react'
import { Overlay } from '../../assets/Images/SVG'
import { useScreenResizeValue } from '../../ScreenSizeFunction'

const BrandCarRelevantCars = ({index,CarModels,used=false,upcoming=false}) => {
    

    const breakpoint=useScreenResizeValue();
   
   

  return (
    <div className={` flex flex-col ${breakpoint<=412?'w-[285px]':'w-[285px]'} h-[380px] pb-2 gap-2 justify-center drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)]   border-[#24272C] border rounded-[16px] border-opacity-10`}>
                                <div className={`flex w-full ${(used)?'h-[61%]':'h-[65%]'} relative mt-0 justify-center rounded-t-xl items-center`} style={{backgroundImage:`url(${CarModels[0].image})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
                                    
                                </div>
                                <div className='flex flex-col gap-[0.25px] pb-[10px] px-[15px] font-semibold  '>
                                    <p className='px-[2px] text-[17px] text-[#24272C] '>Hyundai Creta</p>
                                    <p className='px-[2px] text-[17px] text-[#24272C]  '><span className='text-[15px]'>Rs.</span>11 - 20.30 Lakh<sup>*</sup>{upcoming?<span className=' text-[12px] text-[rgba(36,39,44,0.5)]'> Expected Price</span>:''}</p>
                                    {used&&<p className=' items-center mt-[8px] text-[11px] leading-[16.5px] text-[rgba(36,39,44,0.5)] flex gap-[4px]'>
                                        <span>2023</span>
                                        <Overlay/>
                <span>30,000 Km</span>
                <Overlay/>
                <span>Diesel</span>

                                    </p>}
                                    {
                                      upcoming&& <p className='text-[12px] text-[rgba(36,39,44,0.5)] '>Expected Launch 12 Jan, 2025</p>
                                    }
                                    
    
                                    <button className=' mt-[16px] flex gap-1 text-[14px] border-2 py-[10px] border-blue rounded-xl text-[#0085FF] font-semibold items-center justify-center'>
                                        {(used)?'View Seller Details':'Check December Offers'}
                                    </button>
    
                                </div>
    
                            </div>
  )
}

export default BrandCarRelevantCars