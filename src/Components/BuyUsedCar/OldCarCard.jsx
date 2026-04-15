import React, { useState } from 'react'
import hyundaiAl from '../../Asset/hyundai-alcazar.png'
import bmw3 from "../../Asset/BuyUsedCar/bmw3.png"
import { PiHeart, PiHeartBold, PiHeartFill } from 'react-icons/pi'
import arrowright from "../../Asset/right-arrow.png"
import locationPointer from "../../Asset/BuyUsedCar/location-pointer.svg"

const OldCarCard = ({ data }) => {
    const [liked, setLiked] = useState(false);
    const likeHandler = () => {
        setLiked(!liked);
    }
    let price;
    if (data.actualPrice) {
        const discount = data.actualPrice - data.price;
        var multiplicator = Math.pow(10, 5);
        price = parseFloat((discount * multiplicator).toFixed(6));
    }

    return (
        <div className=' flex flex-col gap-4 justify-center  border-[#24272C] border-[1px] rounded-[16px] overflow-clip border-opacity-10'>
            <div className='flex justify-center items-center '>
                <img src={data.image} alt="" className='h-[110px] w-full md:h-[195px] md:min-w-[295px] ' />
            </div>
            <div>
                <div className='flex flex-col gap-2 md:gap-3 pb-[10px] px-1 font-semibold  '>
                    <div className='flex flex-col gap-1 justify-between'>
                        <div className='flex gap-3 justify-between'>
                            <p className='text-[12px] md:text-[15px] text-[#24272C] '>{data.title}</p>
                            {
                                liked ? (<PiHeartFill onClick={likeHandler} className='text-[#e83a3a] text-[14px] md:text-[24px]' />) : (<PiHeart onClick={likeHandler} className='text-[#24272C] text-[14px] md:text-[24px]' />)
                            }
                        </div>
                        <div className='flex gap-2 text-[8px] md:text-[12px] text-[#24272C] text-opacity-70'>
                            <p> {data.distanceTravelled}</p>
                            <li> {data.fuelType}</li>
                            <li> {data.transmissionMode}</li>
                        </div>
                        <p className=' text-[12px] md:text-[15px] text-[#24272C]  '><span className=''>₹</span>{data.price}{" "}Lakh<sup>*</sup></p>
                        {data.actualPrice ? (<p className=' text-[8px] md:text-[12px] text-[#4D4F53]  '><span className='line-through '>₹{data.actualPrice}{" "} Lakh </span><span className='text-[8px] md:text-[12px] text-[#32BEA6]'>{`(Save ₹${price})`}</span></p>) : (<p className='text-[8px] md:text-[12px] text-[white] select-none'>{"."}</p>)}


                    </div>
                    <p className=' flex gap-1 text-[10px] md:text-[14px] text-[#0085FF] font-semibold items-center'>
                        View Seller Details <img src={arrowright} alt="" className='w-[12px] h-[12px] md:w-[18px] md:h-[16px] ' /></p>
                </div>
                <p className=' flex gap-1 mx-[15px] py-[10px] text-[8px] md:text-[12px] text-[#24272C] font-regular items-center border-dashed border-t-[1px] '>
                    <img src={locationPointer} alt="" className='w-[18px] h-[16px] ' />{data.location}</p>

            </div>
        </div>
    )
}

export default OldCarCard