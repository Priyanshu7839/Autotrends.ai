import React from 'react'
import arrowright from "../Asset/right-arrow.png"

const ReviewAndNewFeature = ({data}) => {
  return (
    <div className=' px-[20px] py-[20px] shadow-md  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-3'>
                    <h1 className='text-[24px] font-semibold'>{data.heading}</h1>
                    <div className=' border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 overflow-clip'>
                        {
                            data.features.map((feature,index)=>{
                                return <div key={index} className='flex gap-4'>
                                <div className='h-[195px] min-w-[305px]'>
                                    <img src={feature.image} alt="" className=' w-full h-full scale-y-105' />
                                </div>
                                <div className='py-[20px] flex flex-col gap-2 pr-[15px]'>
                                    <p className='text-[15px] text-[#24272C]  font-semibold'>{feature.para1}</p>
                                    <p className='text-[14px] text-[#24272C] text-opacity-70 font-semibold'>{feature.para2}</p>
                                    <p className='text-[12px] text-[#24272C] text-opacity-70 font-semibold flex gap-3'>By {feature.by} <span className='list-outside'><li >{feature.date}</li></span></p>
    
                                </div>
                            </div>
                            })
                        }
                        
                    </div>
                    <p className=' flex gap-1 text-[#0085FF] font-semibold items-center'>
                        {data.more}<img src={arrowright} alt="" className='w-[19px] h-[18px] ' />
                    </p>
                </div>
  )
}

export default ReviewAndNewFeature