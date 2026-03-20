import React from 'react'
import { calculate_emi } from '../../assets/Images'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import { useSelector } from 'react-redux';
import EmiImage from '../../assets/Images/EmiImage.png'
const CalculateEmi = () => {

    const breakpoint = useScreenResizeValue();
  const details = useSelector((state) => state.CarDetails);


  return (


    <div className='w-full px-[18px] py-[18px] flex flex-col gap-[16px] shadow-sm shadow-[rgba(36,39,44,0.1)] border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 '>
                        <div className='flex  items-center justify-between'>
                            <div className='flex flex-col gap-[8px] '>
                                <p className={` text-[#24272C] font-medium
                                      ${breakpoint>1250 && 'text-[20px]'}
                                      ${breakpoint<=1250 && 'text-[18px]'}
                                    `}>{details?.emi?.title}</p>
                                <p className='text-[13px] text-[#24272C] text-opacity-70'>Your monthly EMI</p>
                                <p className={` 
                                      ${breakpoint>1250 && 'text-[20px]'}
                                      ${breakpoint<=1250 && 'text-[18px]'}
                                    `}><span className={`
                                      ${breakpoint>1250 && 'text-[16px]'}
                                      ${breakpoint<=1250 && 'text-[14px]'}
                                    `}>Rs.</span>{details?.emi?.value}<span className={`pl-[5px] cursor-pointer underline text-[#24272C] text-opacity-70
                                      ${breakpoint>1250 && 'text-[11px]'}
                                      ${breakpoint<=1250 && 'text-[11px]'}
                                    `}>Edit EMI</span></p>
                                <p className='text-[13px] text-[#24272C] text-opacity-70'>{details?.emi?.displayText}</p>
                            </div>
                            <div>
                                <img src={EmiImage} alt="" className='w-[120px] h-[105px]' />
                            </div>
                        </div>
                        <div className='w-full '>
                            <button className="font-2-book w-full text-[#0B66FA] border-[1px] border-[#0B66FA] text-[16px] font-medium px-[50px] py-[8px] rounded-md " >View EMI Offers</button>
                        </div>
                    </div>
  )
}

export default CalculateEmi