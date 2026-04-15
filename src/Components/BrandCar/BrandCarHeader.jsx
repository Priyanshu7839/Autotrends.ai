import React from 'react'
import { GoStarFill } from 'react-icons/go';
import { useScreenResizeValue } from '../../ScreenSizeFunction';

const BrandCarHeader = ({prop,category,description}) => {
    const breakpoint = useScreenResizeValue();
    const [liked, setLiked] = React.useState(false);
    const {name,image,MinPrice,MaxPrice,features,rating, reviews,electric, facelift} = prop;
    console.log(image);
  return (
    <div className='bg-[#FFFFFF] w-[100%] flex items-center justify-center drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)] '>
         <div className={` py-[1rem] flex  gap-[20px]
                 ${breakpoint <= 1440 ? 'w-[84%]' : 'w-[1200px]'}`}>
              <div className={`  bg-center bg-cover  bg-no-repeat w-[30%] h-[160px] rounded-xl `} style={{ backgroundImage: `url(${image})` }}>
              </div>
              <div className=' w-full flex flex-col gap-[12px] px-[20px] rounded-b-xl rounded-r-xl  py-[13px]'>
                <p className='text-[21px] font-semibold leading-[21px] text-[#24272c]'>{name} {category}</p>
                {(description)&&
                <div className=' flex  items-end h-max w-full '>
                  <p className=' w-[70%] line-clamp-2 text-[rgba(36,39,44,0.7)] text-[13px] '>
                   {description} 
                   </p>
                   <p className='inline ml-[-10px] cursor-pointer text-[black] text-[15px] underline underline-offset-2'>Read More</p>
                   </div>}
                   
                <p className='text-[16px] flex items-center gap-[8px] leading-[24px]'>
                    <span className=' font-bold'>{rating}</span>
                    <span className='block'>
                                      <GoStarFill className='w-[20px] h-[20px] text-blue' />
                                    </span>
                                    <span className=' text-[#24272c] text-opacity-50'>{reviews} Reviews</span>
                                    </p>
                <p className='text-[17px] font-bold leading-[24px]'>Rs. {MinPrice} - {MaxPrice} Lakhs<sup>*</sup> </p>
                <p className=' underline underline-offset-2 text-[15px] leading-[22.5px] text-[rgba(36,39,44,0.7)]'>EMI starts @ ₹28,262</p>

                <div className=' w-[35%] '>
<button className="bg-blue w-full text-[white] font-medium py-2 px-6 rounded-xl hover:bg-blue-600">
       Check December Offers
      </button>
</div>
<div className=' w-full flex items-center border-t-2 border-[rgba(36,39,44,0.3)] border-dashed py-[10px] px-[5px] justify-between'>
    <p className='text-[#24272c] text-[13px] leading-[19.5px]'><sup>*</sup>Ex-showroom Price in New Delhi</p>
    <p className=' text-[rgba(36,39,44,0.7)] text-[11px] leading-[16.5px] flex gap-[6px] items-center'>      
        <i class={`${(!liked)?'icon-heart-empty before:content-["\\f08a"]':'icon-heart before:content-["\\f004"] before:text-[#0085ff]  '} `} style={{ display:'flex',justifyContent:'center',alignItems:'center'}}></i>
        Shortlist
    </p>
</div>
    
              </div>
    
    
    
    
            </div>
            </div>
  )
}

export default BrandCarHeader
