import React from 'react'
import seltosFrontLeft from "../Asset/seltos-front-left.png"
import view360 from "../Asset/360-view.png"
import arrowright from "../Asset/right-arrow.png"

const SeltosInteriorAndExterior = () => {
    return (
        <div className=' px-[15px] md:px-[20px] py-[20px] shadow-md  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10'>
            <h1 className='text-[18px] md:text-[24px] font-semibold'>Seltos interior & exterior images</h1>

            <div className='flex flex-col gap-2 '>
                <div className='flex gap-[36px] py-[6px] text-[12px] md:text-[14px] text-[#24272C] text-opacity-70 border-b-[1px] '>
                    <li className='font-bold text-[#24272C] opacity-100 border-b-[#0085FF] border-b-[4px] py-[10px]'>Exterior</li>
                    <li className='py-[10px]'>Interior</li>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 gap-[10px] md:gap-[20px] '>
                    <div className='col-span-1'>
                        <img src={seltosFrontLeft} alt="" className='w-[180px] h-[110px] md:w-[286px] md:h-[200px] rounded-md' />
                    </div>
                    <div className='col-span-1'>
                        <img src={seltosFrontLeft} alt="" className='w-[180px] h-[110px] md:w-[286px] md:h-[200px] rounded-md' />
                    </div>
                    <div className='col-span-1'>
                        <img src={seltosFrontLeft} alt="" className='w-[180px] h-[110px] md:w-[286px] md:h-[200px] rounded-md' />
                    </div>
                    <div className='col-span-1'>
                        <img src={seltosFrontLeft} alt="" className='w-[180px] h-[110px] md:w-[286px] md:h-[200px] rounded-md' />
                    </div>
                    <div className='col-span-1'>
                        <img src={seltosFrontLeft} alt="" className='w-[180px] h-[110px] md:w-[286px] md:h-[200px] rounded-md' />
                    </div>
                    <div className='col-span-1 flex justify-center items-center bg-[#FAFAFA] rounded-md'>
                        <img src={view360} alt="" className='w-[80px] md:w-[116px] h-auto md:h-[70px] px-1 py-1' />
                    </div>
                </div>


                <p className='flex gap-1 text-[#0085FF] font-semibold items-center text-[14px] md:text-[16px]'>
                    Seltos Exterior Images <img src={arrowright} alt="" className='w-[16px] md:w-[19px] h-[16px] md:h-[18px] ' />
                </p>
            </div>
        </div>
    )
}

export default SeltosInteriorAndExterior