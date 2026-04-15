
import React from 'react'
import arrowright from "../Asset/right-arrow.png"
import view360Image from "../Asset/360viewimage.png"
const VirtualExperience = () => {
    return (
        <div className='px-[15px] md:px-[20px] py-[20px] shadow-md  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-3'>
            <h1 className='text-[18px] md:text-[24px] font-semibold'>Virtual Experience of {"Kia Seltos"}</h1>
            <div className=''>
                    <div className='relative'>
                        <img src={view360Image} alt="360 view" className='h-auto md:h-[302px] w-full md:w-[452px] ' />
                        <div className=' absolute top-[48%] md:top-[44%] left-[24%] md:left-[16%]'>
                            <button className='text-[14px] text-[#24272C] bg-[#6BAD23] rounded-2xl py-[7px] px-[12px] font-semibold'>Tap to Interact 360º</button>
                        </div>
                    </div>
            </div>

            <p className='text-[14px] md:text-[14px] text-[#24272C] text-opacity-70 font-semibold'>Kia Seltos Exterior</p>

            <p className=' flex gap-1 text-[#0085FF] font-semibold items-center text-[14px] md:text-[16px]'>
                Experience 360º View of Kia Seltos <img src={arrowright} alt="" className='w-[16px] h-[16px] md:w-[19px] md:h-[18px] ' />
            </p>

        </div>
    )
}

export default VirtualExperience
