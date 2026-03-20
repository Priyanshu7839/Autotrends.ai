import React from 'react'

const BrandCarAlternativeVideos = ({userReview=false,CarModels}) => {
  return (
    <div className=' w-[320px] h-[350px] pb-2 flex flex-col gap-2 justify-center shadow-inner border-[#24272C] border-[1px] rounded-xl border-opacity-10'>
    <div className='flex w-full h-[60%] rounded-t-xl justify-center items-center'>
        <img src={CarModels[1].image} alt="" className='w-full h-full rounded-xl' />
    </div>
    <div className='flex flex-col gap-2 pb-[10px] px-[15px] font-semibold  '>
        <p className='px-[2px] text-[17px] text-[#24272C] '>Hyundai Creta</p>
        <p className='px-[2px] text-[17px] text-[#24272C]  '><span className='text-[15px]'>Rs</span>11 - 20.30 Lakh<sup>*</sup></p>
        {userReview && <p className='text-[14px] flex  items-baseline gap-1 '><span className='font-bold'>4.5</span><img src={star} alt="" className='w-[14px] h-[14px] ' />315 User reviews</p>
        }
        <div className='w-full '>
            <button className="w-full text-[#0B66FA] border-[1px] border-[#0B66FA] text-[16px] font-bold px-auto py-[12px] rounded-md " >View All Creta Videos</button>
        </div>

        

    </div>

</div>
  )
}

export default BrandCarAlternativeVideos
