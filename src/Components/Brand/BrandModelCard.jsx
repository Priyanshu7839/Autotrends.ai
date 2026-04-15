import React,{useState} from 'react'
import { useNavigate} from 'react-router'
import { Faceliftimage } from '../../assets/Images/SVG';
import { FaPlug } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { RxHeartFilled } from "react-icons/rx";
import { useScreenResizeValue } from '../../ScreenSizeFunction';
import { LuDot } from "react-icons/lu";
import { useDispatch } from 'react-redux';
import { setCarDetailsSlice } from '../../Store/CarDetailsSlice';
import { fetchallcardetails } from '../../Context/ApiCall';
import { IoStar } from 'react-icons/io5';
import { setformOpen } from '../../Store/GlobalSigninSlice';
import { Askaiicon } from '../../assets/Images';

const BrandModelCard = ({ name, image, priceRange,rating,reviewCount, facelift, electric,upcoming=false ,launchedat,latest,details ,modelurl,BrandSlug,ModelSlug}) => {

  const breakpoint = useScreenResizeValue();

  const [liked,setLiked]=useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <div
    
    className={`w-full h-max flex rounded-xl border bg-[#f9f9f9] shadow-md shadow-[rgba(36,39,44,0.1)] border-[rgba(36,39,44,0.1)] overflow-hidden cursor-pointer
            ${breakpoint<=850 &&'flex-col'}
    `}
    onClick={()=>{
      if(modelurl){
        fetchallcardetails(modelurl,BrandSlug,ModelSlug,{dispatch,navigate,setCarDetailsSlice})
        window.scrollTo(0,0)
      }
      
    }}
    >
      {/* left part */}
      <div
        className={`relative  rounded-tl-xl rounded-bl-xl 
            ${breakpoint<=850 ?'w-full h-[300px]':'w-[32.56%] h-[220px]'}
          `}
        style={{
          backgroundImage: `url(${image || details?.overView?.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div  className='w-full flex items-center absolute bottom-[10px] px-[10px] '>
          {(electric)?
              <div className=' w-max flex  rounded-xl px-[10px] bg-[white] gap-[6px] items-center'>
                <FaPlug className='w-[7px] h-[10px]'/>
                <span className=' text-[10px] leading-[21px] font-[500] text-[#242424]'>Electric</span>
              </div>:null
}
{(facelift)?
              <div className=' w-max flex ml-auto  rounded-xl px-[10px] bg-[white] gap-[6px] items-center'>
                <Faceliftimage/>
                <span className=' text-[10px] leading-[21px] font-[500] text-[#242424]'>Facelift</span>
              </div>:null
}
        </div>
      </div>
      {/* right part */}
      <div className={`relative pl-[24px] rounded-tr-xl mr-[21px] rounded-br-xl ${breakpoint<=850 ?'w-full h-fit':'w-[67.44%] h-[220px] '}`}>
      <div className={` absolute top-[11px] right-[10px]  flex  justify-center  py-[.25rem] bg-[#0b66fa] rounded-[10px]
      ${breakpoint<=650?'px-[.5rem] gap-[.5rem] items-end':'px-[1rem] gap-[1rem] items-center'}
      `}
      onClick={(event)=>{
        event.stopPropagation();
        dispatch(setformOpen(true))
      }}
      >
        <img src={Askaiicon} alt="" className='h-[25px] w-[25px]'/>
        <h1 className='font-2 text-[#fff] text-[.875rem]'>{breakpoint<=650 ?'Ask AI': 'Ask Autotrends.ai'}</h1>

      </div>
      <div className='mt-[10px]'>
        <h2 className={` ${breakpoint<=450?'text-[16px]':'text-[20px]'} font-[500]`}>{name}</h2>
       
   
        
      </div>
      <div className='flex flex-col gap-[10px] mt-[10px] mb-[27px]'>
       {details&&  <div className='flex items-center justify gap-[.5rem] text-[#24272c] text-[12px] leading-[18px] text-opacity-70'>
            <h1>{details?.overView?.engine}</h1>
            <LuDot className='text-[1rem] mt-[3px]'/>
            <h1>{details?.overView?.mileage}</h1>
            <LuDot className='text-[1rem] mt-[3px]'/>
            <h1>{details?.overView?.fuelType}</h1>
            <LuDot className='text-[1rem] mt-[3px]'/>
            <h1>{details?.overView?.transmissionType}</h1>

        </div>}
       
     
      <div className=' text-[#24272c] text-[12px] leading-[18px] flex gap-[11px] text-opacity-70'>
        <p>Rs. {priceRange || details?.overView?.priceRange}<sup >*</sup></p>
      </div>
     {details&& <div className=' text-[#24272c] text-[12px] leading-[18px] flex gap-[11px] text-opacity-70'>
        <p className='flex items-center justify-center gap-[.25rem]'><span>Rating </span>{details?.overView?.rating}</p>
      </div>}
      <div className=' text-[#24272c] text-[12px] leading-[18px] flex gap-[11px] text-opacity-70'>
        {/* <p>
          {!latest && 'Launched At:'}
          {(latest && launchedat)&&  launchedat} </p> */}
          <p className='flex items-center justify-start gap-[.5rem]'>{rating} <IoStar/> {reviewCount} reviews</p>
      </div>


      <button className={` px-[24.8px] ${breakpoint>=450?'min-w-[220px]':''} ${(upcoming)?'mt-[6px]':''} w-max ${breakpoint<=450?"text-[13px]":"text-[16px]"} font-[500px] leading-[43px] text-[#0085ff] rounded-lg border-[1px] border-[#0085ff]`}
      onClick={()=>{
       if(details){ dispatch(setCarDetailsSlice(details))}
        navigate('/CarDetails')
      }}
      >
        {(upcoming)?'Alert Me When Launched':`Check Live Personalized Offers`}
      </button>
      </div>
    </div>
    </div>
  )
}

export default BrandModelCard