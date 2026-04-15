import React from 'react'
import { brochurepdf } from '../../assets/Images';
import {  useNavigate } from 'react-router'
import { useScreenResizeValue } from '../../ScreenSizeFunction';
import { useSelector } from 'react-redux';

const Brochure = ({CarName,BrochureLink}) => {
  const details = useSelector((state) => state.CarDetails);

    const navigate =useNavigate();
    const breakpoint = useScreenResizeValue();
    return (
        <div className=' w-full px-[15px] py-[18px]  h-max flex flex-col gap-[16px] drop-shadow-[0_1px_2px_rgba(36,44,39,0.1)] border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 '>
            <div className='flex  items-center justify-between'>
                <div className='flex flex-col gap-[8px] w-[60%]'>
                    <p className={` text-[#24272C] font-medium
                         ${breakpoint>1250 && 'text-[20px]'}
                         ${breakpoint<=1250 && 'text-[18px]'}
                        `}>{details?.brochureWidget?.title}</p>
                    <p className='text-[13px] text-[#24272C] text-opacity-70'>{details?.brochureWidget?.subTitle}</p>
                </div>
                <div>
                    <img src={brochurepdf} alt="" className='w-[120px] h-[105px]' />
                </div>
            </div>
            <div className='w-full '>
                <button onClick={()=>{navigate(BrochureLink)}} className={`w-full text-[#0B66FA] border-[1px] border-[#0B66FA]  font-bold px-[50px] py-[12px] rounded-md 
                    
                     ${breakpoint>1250 && 'text-[16px]'}
                     ${breakpoint<=1250 && 'text-[14px]'}
                    `} >Download Brochure</button>
            </div>
        </div>
    )
}

export default Brochure