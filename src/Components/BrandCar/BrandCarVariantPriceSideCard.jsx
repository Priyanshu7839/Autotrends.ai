import React from 'react'
import { GoStarFill } from 'react-icons/go';
import { useScreenResizeValue } from '../../ScreenSizeFunction';
import { div } from 'framer-motion/client';
import { useSelector } from 'react-redux';

const BrandCarVariantPriceSideCard = ({prop}) => {
    const {name,image,MinPrice,MaxPrice,features,rating, reviews,electric, facelift} = prop;

    const breakpoint=useScreenResizeValue();
    console.log(breakpoint);
  const details = useSelector((state)=>state.CarDetails)


  return (
     <div className={` ${breakpoint<=412?'items-center':''} flex flex-col w-full gap-[20px]  rounded-xl  shadow-md shadow-[rgba(36,39,44,0.1)]`}>
      {
        breakpoint>412 
        && 
        <>
        <div className={`  bg-center bg-cover  bg-no-repeat w-full h-[220px] rounded-t-xl `} style={{ backgroundImage: `url(${details?.overView?.image})` }}>
        </div>
        
        <div className=' w-full flex flex-col gap-[8px] px-[20px] rounded-b-xl border border-t-0 border-[rgba(36,39,44,0.1)] py-[13px]'>
          <p className='text-[18px] leading-[27px] font-[500] text-[#24272c]'>{details?.overView?.name}</p>
          <p className='text-[13px] flex items-center gap-[6px] leading-[19.5px]'>
            <div className=' flex  items-center gap-[2.69px]'>
            <span className=' font-bold'>{details?.overView?.rating}</span>
              <span className='block'>
                                <GoStarFill className='w-[13px] h-[13px] text-blue' />
                              </span>
            </div>
              
                              <span className=' text-[#24272c] text-opacity-50'>{details?.overView?.ratingDesc}</span>
                              </p>
                              <div className=' flex flex-col gap-[15.55px]'>
                              <p className='text-[16px] font-[500] leading-[24px]'>{details?.overView?.priceRange}<sup>*</sup> </p>
          <div className=' w-full flex justify-center '>
{breakpoint>412 && <button className="bg-blue w-full text-[white] text-[14px] leading-[40px] font-[700]  text-center rounded-xl hover:bg-blue-600">
  Get Best Live Deal
</button>}
</div>
                              </div>
         

        </div>
        </>
      }
      {
        breakpoint<=412 &&
        <>
        <div className=' flex w-full px-[10px]  '>
            <div className={`  bg-center bg-cover  bg-no-repeat w-[40%] mt-[10px] h-[100px]  rounded-xl `} style={{ backgroundImage: `url(${details?.overView?.image})` }}>
            </div>
            <div className=' w-[55%] flex flex-col gap-[8px] px-[10px] rounded-b-xl  pt-[13px]'>
          <p className='text-[18px] leading-[27px] font-[500] text-[#24272c]'>{name}</p>
          <p className='text-[13px] flex items-center gap-[6px] leading-[19.5px]'>
            <div className=' flex  items-center gap-[2.69px]'>
            <span className=' font-bold'>{details?.overView?.rating}</span>
              <span className='block'>
                                <GoStarFill className='w-[13px] h-[13px] text-blue' />
                              </span>
            </div>
              
                              <span className=' text-[#24272c] text-opacity-50'>{details?.overView?.ratingDesc}</span>
                              </p>
                              <div className=' flex flex-col gap-[15.55px]'>
                              <p className='text-[16px] font-[500] leading-[24px]'>{details?.overView?.priceRange}<sup>*</sup> </p>
          <div className=' w-full flex justify-center '>

</div>
                              </div>
         

        </div>


        </div>  
        <button className="bg-blue w-[80%]  text-[white] text-[14px] leading-[40px] font-[700]  text-center rounded-xl hover:bg-blue-600">
          Get Best Live Deal
</button>
</>
      }
              
    
    
    
    
            </div>
  )
}

export default BrandCarVariantPriceSideCard