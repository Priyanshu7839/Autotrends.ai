import React from 'react'
import { IoMdCall } from 'react-icons/io'

const CarDealerContact = () => {
    
    return (
        <div className=' px-[20px] py-[15px] shadow-md  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-2'>

            <p className='pb-[4px] text-[24px] text-[#24272C]  font-semibold'>Kia car dealers in Jhansi</p>

            <div className='w-[32%] px-[12px] py-[12px] flex flex-col gap-[32px] border-[#24272C] border-[1px] rounded-[8px] border-opacity-10'>
                <div>
                    <p className='text-[14px] text-[#24272C] font-semibold'>Pitambra Kia-Jhansi</p>
                    <p className='px-[2px] text-[12px] text-[#24272C] text-opacity-70'>11th mile, Jhansi</p>
                </div>

                <div className=' flex gap-[12px]'>  
                    <button onClick={() => { }} className="w-full text-[#0B66FA] border-[1px] border-[#0B66FA] text-[14px] font-bold px-[14px] py-[8px] rounded-md " >Contact Dealer</button>
                    <button onClick={() => {  }} className="w-full text-[#24272C] border-[1px] border-[#BCBDBE] text-[14px] font-bold px-[14px] py-[8px] rounded-md flex items-center justify-center gap-1" ><span><IoMdCall className="text-[14px]" />
                    </span>Call Dealer</button>
                </div>

            </div>
        </div>
    )
}

export default CarDealerContact