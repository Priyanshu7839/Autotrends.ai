import React from 'react'
import { GoStarFill } from 'react-icons/go';

const BrandCarHeader = ({prop}) => {
    const {name,image,MinPrice,MaxPrice,features,rating, reviews,electric, facelift} = prop;
  return (
     <div className='flex w-full  rounded-xl  shadow-md shadow-[rgba(36,39,44,0.1)]'>
              <div className={`  bg-center bg-cover  bg-no-repeat w-full h-[220px] rounded-t-xl `} style={{ backgroundImage: `url(${image})` }}>
              </div>
              <div className=' w-full flex flex-col gap-[8px] px-[20px] rounded-b-xl border border-t-0 border-[rgba(36,39,44,0.1)] py-[13px]'>
                <p className='text-[14px] leading-[21px] text-[#24272c]'>{name}</p>
                <p className='text-[16px] flex items-center gap-[8px] leading-[24px]'>
                    <span className=' font-bold'>{rating}</span>
                    <span className='block'>
                                      <GoStarFill className='w-[20px] h-[20px] text-blue' />
                                    </span>
                                    <span className=' text-[#24272c] text-opacity-50'>{reviews} Reviews</span>
                                    </p>
                <p className='text-[17px] font-bold leading-[24px]'>Rs. {MinPrice} - {MaxPrice} Lakhs<sup>*</sup> </p>
                <div className=' w-[90%] pt-[7px]'>
<button className="bg-blue w-full text-[white] font-medium py-2 px-6 rounded-xl hover:bg-blue-600">
       Check December Offers
      </button>
</div>
    
              </div>
    
    
    
    
            </div>
  )
}

export default BrandCarHeader
