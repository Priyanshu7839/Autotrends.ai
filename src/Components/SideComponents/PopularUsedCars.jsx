import React from 'react'
import arrowright from "../../Asset/right-arrow.png"
import creta from "../../Asset/DealerShipImages/hyundai-creta.png"
import honda from "../../Asset/DealerShipImages/honda-city.png"
import baleno from "../../Asset/DealerShipImages/maruti-baleno.png"
import swift from "../../Asset/DealerShipImages/maruti-swift.png"
import hyundaiI20 from "../../Asset/DealerShipImages/hyundai-i20.png"
import hyundaiI10 from "../../Asset/DealerShipImages/hyundai-grand-i10.png"



const PopularUsedCars = () => {
  return (
    <div className='w-full  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 px-[15px] md:px-[24px] py-[15px] shadow-md   '>
            <div><h1 className='text-[18px] md:text-[20px] text-[#24272C] font-medium pb-[4px]'>Popular Used Cars</h1></div>
            <div className='flex gap-[15px]  text-[14px] text-[#24272C] text-opacity-70 border-b-[1px] '>
                <li className='font-semibold text-[#24272C] opacity-100 border-b-[#0085FF] border-b-[4px] py-[10px]'>New Delhi</li>
                <li className='py-[10px]'>Mumbai</li>
            </div>
            <div className='py-[16px] flex flex-col gap-[34px]'>
                <div className='flex gap-2 px-[10px]'>
                    <div className='w-[20%]'><img src={creta} alt="" className='w-full h-full' /></div>
                    <div className='text-[14px] text-[#24272C] font-medium w-[70%]'>
                        <p>Hyundai Creta</p>
                        <p className='font-semibold text-[15px]'><span>Starting at R </span>5,00,000</p>
                    </div>
                </div>
                <div className='flex gap-2 px-[10px]'>
                    <div className='w-[20%]'><img src={honda} alt=""className='w-full h-full'  /></div>
                    <div className='text-[14px] text-[#24272C] font-medium'>
                        <p>Honda City</p>
                        <p className='font-semibold text-[15px]'><span>Starting at R </span>1,70,000</p>
                    </div>
                </div>
                <div className='flex gap-2 px-[10px]'>
                    <div className='w-[20%]'><img src={baleno} alt=""className='w-full h-full'  /></div>
                    <div className='text-[14px] text-[#24272C] font-medium'>
                        <p>Maruti Baleno</p>
                        <p className='font-semibold text-[15px]'><span>Starting at R </span>3,50,000</p>
                    </div>
                </div>
                <div className='flex gap-2 px-[10px]'>
                    <div className='w-[20%]'><img src={swift} alt=""className='w-full h-full'  /></div>
                    <div className='text-[14px] text-[#24272C] font-medium'>
                        <p>Maruti Swift</p>
                        <p className='font-semibold text-[15px]'><span>Starting at R </span>2,25,000</p>
                    </div>
                </div>
                <div className='flex gap-2 px-[10px]'>
                    <div className='w-[20%]'><img src={hyundaiI20} alt=""className='w-full h-full'  /></div>
                    <div className='text-[14px] text-[#24272C] font-medium'>
                        <p>Hyundai i20</p>
                        <p className='font-semibold text-[15px]'><span>Starting at R </span>80,762</p>
                    </div>
                </div>
                <div className='flex gap-2 px-[10px]'>
                    <div className='w-[20%]'><img src={hyundaiI10} alt=""className='w-full h-full'  /></div>
                    <div className='text-[14px] text-[#24272C] font-medium'>
                        <p>Hyundai Grand i10</p>
                        <p className='font-semibold text-[15px]'><span>Starting at R </span>2,60,000</p>
                    </div>
                </div>
                <div className='flex gap-2 px-[10px]'>
                    <div className='w-[20%]'><img src={creta} alt=""className='w-full h-full'  /></div>
                    <div className='text-[14px] text-[#24272C] font-medium'>
                        <p>Hyundai Creta</p>
                        <p className='font-semibold text-[15px]'><span>Starting at R </span>5,00,000</p>
                    </div>
                </div>
                <div className='flex gap-2 px-[10px]'>
                    <div className='w-[20%]'><img src={honda} alt=""className='w-full h-full'  /></div>
                    <div className='text-[14px] text-[#24272C] font-medium'>
                        <p>Honda City</p>
                        <p className='font-semibold text-[15px]'><span>Starting at R </span>1,70,000</p>
                    </div>
                </div>
                <div className='flex gap-2 px-[10px]'>
                    <div className='w-[20%]'><img src={baleno} alt=""className='w-full h-full'  /></div>
                    <div className='text-[14px] text-[#24272C] font-medium'>
                        <p>Maruti Baleno</p>
                        <p className='font-semibold text-[15px]'><span>Starting at R </span>3,50,000</p>
                    </div>
                </div>
                <div className='flex gap-2 px-[10px]'>
                    <div className='w-[20%]'><img src={swift} alt=""className='w-full h-full'  /></div>
                    <div className='text-[14px] text-[#24272C] font-medium'>
                        <p>Maruti Swift</p>
                        <p className='font-semibold text-[15px]'><span>Starting at R </span>2,25,000</p>
                    </div>
                </div>
            </div>
            <p className='flex gap-1 text-[#0085FF] font-semibold items-center pt-[8px] '>
                View All Used Cars in {"New Delhi"} <img src={arrowright} alt="" className='w-[19px] h-[18px] ' />
            </p>
        </div>
  )
}

export default PopularUsedCars