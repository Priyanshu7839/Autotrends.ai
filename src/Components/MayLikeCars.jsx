import React from 'react'
import toyota from "../Asset/toyota-urban.png"
import honda from "../Asset/honda-elevate.png"
import tata from "../Asset/tata-punch.png"

const MayLikeCars = () => {
  return (
    <div className='px-[15px] md:px-[18px] py-[20px] shadow-md  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-2'>
            <h1 className='text-[20px] md:text-[24px] font-semibold'>
                {"You may also like these cars"}
            </h1>
            <div className='flex gap-3 overflow-auto' style={{scrollbarWidth: "none"}}>

                        <div className=' flex flex-col gap-4 justify-center  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 overflow-clip'>
                            <div className='flex justify-center items-center'>
                                <img src={toyota} alt="" className='h-[195px] max-md:min-w-[330px] md:w-full ' />
                            </div>
                            <div className='flex flex-col gap-2 pb-[10px] px-[10px] md:px-[15px] font-semibold  '>
                                <p className='px-[2px] text-[15px] text-[#24272C] '>Toyota Urban Cruiser Hyryder</p>
                                <p className='px-[2px] text-[15px] text-[#24272C]  '><span className='text-[15px]'>R</span>11.14 - 19.99 Lakh<sup>*</sup></p>                                
                                <div className='w-full '>
                                    <button className="w-full text-[#0B66FA] border-[1px] border-[#0B66FA] text-[16px] font-bold px-auto py-[8px] rounded-md " >Check December Offers</button>
                                </div>

                            </div>

                        </div>

                        <div className='flex flex-col gap-4 justify-center  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 overflow-clip'>
                            <div className='flex justify-center items-center'>
                                <img src={tata} alt="" className='h-[195px] max-md:min-w-[330px] md:w-full  ' />
                            </div>
                            <div className='flex flex-col gap-2 pb-[10px] px-[10px] md:px-[15px] font-semibold '>
                                <p className='px-[2px] text-[15px] text-[#24272C] '>Tata Punch</p>
                                <p className='px-[2px] text-[15px] text-[#24272C] '><span className='text-[15px]'>R</span>6.13 - 10.15 Lakh<sup>*</sup></p>                                

                                <div className='w-full '>
                                    <button className="w-full text-[#0B66FA] border-[1px] border-[#0B66FA] text-[16px] font-bold px-auto py-[8px] rounded-md " >Check December Offers</button>
                                </div>

                            </div>

                        </div>

                        <div className='flex flex-col gap-4 justify-center  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 overflow-clip'>
                            <div className='flex justify-center items-center'>
                                <img src={honda} alt="" className='h-[195px] max-md:min-w-[330px] md:w-full ' />
                            </div>
                            <div className='flex flex-col gap-2 pb-[10px] px-[10px] md:px-[15px] font-semibold  '>
                                <p className='px-[2px] text-[15px] text-[#24272C] '>Honda Elevate</p>
                                <p className='px-[2px] text-[15px] text-[#24272C] '><span className='text-[15px]'>R</span>11.69 - 16.71 Lakh<sup>*</sup></p>
                                <div className='w-full '>
                                    <button className="w-full text-[#0B66FA] border-[1px] border-[#0B66FA] text-[16px] font-bold px-auto py-[8px] rounded-md " >Check December Offers</button>
                                </div>


                            </div>

                        </div>

            </div>


        </div>
  )
}

export default MayLikeCars