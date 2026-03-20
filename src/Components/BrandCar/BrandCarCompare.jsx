import React from 'react'
import { kia1,kia2 } from '../../assets/Images'


const BrandCarCompare = ({img1,img2,brandname1,brandname2,modelname1,modelname2,priceRange1,priceRange2,title}) => {
  return (
    <div className=' w-full max-w-[350px] flex flex-col shadow-[rgba(36,39,44,0.1)]  shadow-sm text-[#24272a] rounded-xl border border-[rgba(36,39,44,0.1)] relative'>
      { /* top part */}
      <div className=' w-full flex '>
        
        <div className='flex w-[50%] flex-col'>
          <div className={`  bg-center bg-cover  bg-no-repeat w-full h-[150px] aspect-[4/3] rounded-tl-xl `} style={{ backgroundImage: `url(${img1})` }}>
          </div>
          <div className=' flex flex-col pl-[16px] pr-[10px] pt-[12px]'>
            <p className='text-[14px] leading-[21px] text-[#6f6f6f]'>{brandname1}</p>
            <p className='text-[16px] font-medium leading-[24px]'>{modelname1}</p>
            <p className='text-[13px] leading-[24px]'>Rs. {priceRange1}<sup>*</sup> </p>

          </div>




        </div>
        <div className='flex w-[50%] flex-col'>
          <div className={`  bg-center bg-cover  bg-no-repeat w-full h-[150px]  aspect-[4/3] rounded-tr-xl `} style={{ backgroundImage: `url(${img2})` }}>
          </div>
          <div className=' flex flex-col pl-[16px] pr-[10px] pt-[12px]'>
            <p className='text-[14px] leading-[21px] text-[#6f6f6f]'>{brandname2}</p>
            <p className='text-[16px] font-medium leading-[24px]'>{modelname2}</p>
            <p className='text-[13px] leading-[24px]'>Rs. {priceRange2}<sup>*</sup> </p>

          </div>




        </div>
      </div>
      <div className=' w-full flex justify-center mt-[18px] mb-[18px]'>
        <div className=' w-[90%] rounded-xl border-[1px] text-blue border-blue flex justify-center text-[16px]  leading-[43px]'>
         {title}
        </div>

      </div>

        <div className=' absolute left-[50%] top-[42.5%] translate-x-[-50%]   flex justify-center items-center w-9 h-9 bg-[#24272c] text-[white]  rounded-full'>
          VS
        </div>
    </div>
  )
}

export default BrandCarCompare
