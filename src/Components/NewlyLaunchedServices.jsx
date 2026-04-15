import React from 'react'
import arrowright from "../Asset/right-arrow.png"
const NewlyLaunchedServices = () => {
    return (
        <div className=" shadow-md relative flex flex-col gap-2  px-[15px] md:px-[20px] py-[20px]  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 ">
            <h1 className='text-[18px] md:text-[24px] font-semibold'>Newly Launched! Car Services</h1>

            <div className='flex gap-3 justify-between overflow-auto' style={{scrollbarWidth:"none"}}>
                <div className='flex flex-col gap-2 md:w-[32%] min-w-[250px]'>
                    <div className='flex justify-center items-center'>
                        <div className='h-[150px] w-full bg-[#e7e5e5] rounded-xl'></div>
                        {/* <img src={} alt="" className='h-[150px] w-full rounded-xl' /> */}
                    </div>
                    <div className='flex h-full flex-col gap-2 pb-[10px]  font-semibold  justify-between'>
                        <p className='px-[2px] text-[14px] md:text-[16px] text-[#24272C] '>Challan Check</p>
                        <p className=' flex gap-1 text-[12px] md:text-[14px] text-[#0085FF] font-semibold items-center'>
                            {"View Challan Details"} <img src={arrowright} alt="" className='w-[14px] h-[14px] md:w-[18px] md:h-[16px]' />
                        </p>

                    </div>
                </div>
                <div className='flex flex-col gap-2 md:w-[32%] min-w-[250px]'>
                    <div className='flex justify-center items-center'>
                        <div className='h-[150px] w-full bg-[#e7e5e5] rounded-xl'></div>
                        {/* <img src={} alt="" className='h-[150px] w-full rounded-xl' /> */}
                    </div>
                    <div className='flex flex-col gap-1 pb-[10px]  font-semibold justify-between '>
                        <div>
                            <p className='px-[2px] text-[14px] md:text-[16px] text-[#24272C] '>Car Service History</p>
                            <div className='flex gap-1 items-center'>
                                <p className='px-[2px] text-[16px] md:text-[18px] text-[#24272C] '>₹299</p>
                                <p className='px-[2px] text-[8px] md:text-[10px] text-[#24272C] text-opacity-70 '><s>₹500</s></p>
                                <p className='px-[2px] text-[8px] md:text-[10px] text-[#FF1E3C] '>40% OFF</p>

                            </div>

                        </div>
                        <p className=' flex gap-1 text-[12px] md:text-[14px] text-[#0085FF] font-semibold items-center'>
                            {"Get Report"} <img src={arrowright} alt="" className='w-[14px] h-[14px] md:w-[18px] md:h-[16px]' />
                        </p>

                    </div>
                </div>
                <div className='flex flex-col gap-2 md:w-[32%]  min-w-[250px]'>
                    <div className='flex justify-center items-center'>
                        <div className='h-[150px] w-full bg-[#e7e5e5] rounded-xl'></div>
                        {/* <img src={} alt="" className='h-[150px] w-full rounded-xl' /> */}
                    </div>
                    <div className='flex flex-col gap-1 pb-[10px] font-semibold justify-between '>
                        <div>
                            <p className='px-[2px] text-[14px] md:text-[16px] text-[#24272C] '>RTO Records Service</p>
                            <div className='flex gap-1 items-center'>
                                <p className='px-[2px] text-[16px] md:text-[18px] text-[#24272C] '>₹199</p>
                                <p className='px-[2px] text-[8px] md:text-[10px] text-[#24272C] text-opacity-70 '><s>₹299</s></p>
                                <p className='px-[2px] text-[8px] md:text-[10px] text-[#FF1E3C] '>33% OFF</p>

                            </div>

                        </div>
                        <p className=' flex gap-1 text-[12px] md:text-[14px] text-[#0085FF] font-semibold items-center'>
                            {"Get Report"} <img src={arrowright} alt="" className='w-[14px] h-[14px] md:w-[18px] md:h-[16px] ' />
                        </p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewlyLaunchedServices