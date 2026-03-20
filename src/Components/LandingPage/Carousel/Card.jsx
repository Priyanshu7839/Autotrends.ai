import React from 'react';
import styled from 'styled-components';
import { Askaiicon, AudiImg } from '../../../assets/Images';
import { FaStar,FaStarHalf } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useScreenResizeValue } from '../../../ScreenSizeFunction';
import { setformOpen } from '../../../Store/GlobalSigninSlice';
import { useDispatch } from 'react-redux';

const Card = ({img,name,model,desc,rating,priceRange,LaunchDate,minPrice,upcoming,tagText}) => {

  const dispatch = useDispatch();

  const breakpoint = useScreenResizeValue();
  function customRound(num) {
    return num - Math.floor(num) >= 0.5 ? Math.floor(num) + 0.5 : Math.floor(num);
  }

  const RoundedRating = customRound(rating);

  let HalfStar = false
  if((RoundedRating - Math.floor(RoundedRating))>0){
    HalfStar = true
  }
  else{
    HalfStar = false
  }
  

  return (
   <div className={` flex flex-col font-1 rounded-[12px] border-[1px] border-[#0000001F] overflow-hidden cursor-pointer
      ${breakpoint > 1300 && 'w-[350px]'}
      ${(breakpoint <= 1300 && breakpoint>1100) && 'w-[350px] '}
      ${(breakpoint <= 1100 && breakpoint>1000) && 'w-[350px] '}
      ${(breakpoint <= 1000 && breakpoint>950) && 'w-[350px] '}
      ${(breakpoint <= 950 && breakpoint>850) && 'w-[350px] '}
      ${(breakpoint <= 850 && breakpoint>750) && 'w-[350px] '}
      ${(breakpoint <= 750 && breakpoint>700) && 'w-[350px] '}
      ${(breakpoint <= 700 && breakpoint>0) && 'w-[350px] '}
   `}
 
   >
      <img src={img} alt="" className='w-full'/>
      <div className='bg-[#ffffff] border-[1px] border-[#0000001F] rounded-[12px] px-[.5rem] py-[.125rem] absolute top-[2%] left-[5%] text-[.75rem]'>{tagText}</div>

    <div className='p-[1rem] flex flex-col items-start gap-[1rem]'>
      <div className='flex flex-col items-start gap-[.25rem]'>
           <h1 className={`font-bold  text-color-5
             ${breakpoint > 1200 && 'text-[1rem]'}
             ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.75rem]'}
             ${(breakpoint <= 768 && breakpoint > 0) && 'text-[.5rem]'} 
            `}>{name}</h1>
           <h2 className={`font-bold text-color-6
             ${breakpoint > 1200 && 'text-[1.11625rem]'}
             ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.86625rem]'}
             ${(breakpoint <= 768 && breakpoint > 0) && 'text-[.61625rem]'} 
            `}>{model}</h2>
           <p className={`text-color-6 line-clamp-2
             ${breakpoint > 1200 && 'text-[.875rem]'}
             ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.75rem]'}
             ${(breakpoint <= 768 && breakpoint > 0) && 'text-[.625rem]'} 
            `}>{desc}</p>
          {!upcoming&& <a href="" className={`text-color-7
             ${breakpoint > 1200 && 'text-[.8rem]'}
             ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.675rem]'}
             ${(breakpoint <= 768 && breakpoint > 0) && 'text-[.55rem]'} 
            `}>{model} review</a>}
           {!upcoming&&
            <div className={`flex items-center justify-center gap-[.5rem]
             ${breakpoint > 1200 && 'text-[1rem]'}
             ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.875rem]'}
             ${(breakpoint <= 768 && breakpoint > 0) && 'text-[.75rem]'} 
            `}>
             <div className='flex items-center justify-center gap-[.5rem]'>
              {Array(Math.floor(RoundedRating)).fill().map((_,index)=>{
                return(
                    <FaStar className='text-[.75rem]' key={index}/>
                )
              })}
             {HalfStar && <FaStarHalf className='text-[.75rem]'/>}
             </div>
             <p className='font-medium font-2 text-[.75rem]'>{rating}</p>
           </div>}

           <h2 className={`font-medium text-color-6
             ${breakpoint > 1200 && 'text-[.875rem]'}
             ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.75rem]'}
             ${(breakpoint <= 768 && breakpoint > 0) && 'text-[.625rem]'} 
            `}>{upcoming ?'Expected Price:':'Price Range :'} {priceRange}</h2>
           {!upcoming &&
             <h2 className={`font-medium font-2 text-color-6
             ${breakpoint > 1200 && 'text-[1rem]'}
             ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.86625rem]'}
             ${(breakpoint <= 768 && breakpoint > 0) && 'text-[.61625rem]'} 
            `}>Launch Date : {LaunchDate}</h2>}

           
      </div>

      {/* <div className='p-[.5rem] rounded-[12px] border-[1px] border-[#0000001F] bg-[#FAFAFA] w-full'>
          <h1 className={`font-bold text-color-5
             ${breakpoint > 1200 && 'text-[.9925rem]'}
             ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.8675rem]'}
             ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.7425rem]'} 
             ${(breakpoint <= 480) && 'text-[.6175rem]'}
            `}>New Audi A3 Sportback (2016-2020)</h1>
          <p className={`text-color-8 
             ${breakpoint > 1200 && 'text-[1.11625rem]'}
             ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.99125rem]'}
             ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.86625rem]'} 
             ${(breakpoint <= 480) && 'text-[.74125rem]'}
            `}>Currently unavailable</p>
      </div> */}
      
      {/* <div className='p-[.5rem] rounded-[12px] border-[1px] border-[#0000001F] flex w-full items-center justify-between'>
          <div>
              <h1 className={`font-bold text-color-7 
                  ${breakpoint > 1200 && 'text-[.9925rem]'}
                  ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.8675rem]'}
                  ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.7425rem]'} 
                  ${(breakpoint <= 480) && 'text-[.6175rem]'}

                `}>Used Audi A3 Sportback (2016-2020)</h1>
              <p className={` text-color-8
                ${breakpoint > 1200 && 'text-[1.11625rem]'}
                ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.99125rem]'}
                ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.86625rem]'} 
                ${(breakpoint <= 480) && 'text-[.74125rem]'}
                `}>From <span className='font-bold'>E9.950</span></p>
          </div>
              <MdKeyboardArrowRight />

      </div> */}
      {!upcoming &&
       <div className='flex flex-col gap-[.5rem] w-full'>
         <div className={`   flex  justify-start px-[1rem] py-[.5rem] gap-[1rem] items-center   bg-[#0b66fa] rounded-[10px]
                  
                  `}
                  onClick={(event)=>{
                    event.stopPropagation();
                    dispatch(setformOpen(true))
                  }}
                  >
                    <img src={Askaiicon} alt="" className='h-[25px] w-[25px]'/>
                    <h1 className='font-2 text-[#fff] text-[.875rem]'>Ask Autotrends.ai</h1>
            
                  </div>
         <div className='p-[.5rem] w-full rounded-[12px] border-[1px] border-[#0000001F] flex  items-center justify-between cursor-pointer'
        onClick={(e)=>{
          e.stopPropagation();
         }}
        >
          <div>
              {/* <p className={` text-color-8 
                    ${breakpoint > 1200 && 'text-[.9925rem]'}
                    ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.8675rem]'}
                    ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.7425rem]'} 
                    ${(breakpoint <= 480) && 'text-[.6175rem]'}
                `}>New {model} from {minPrice}</p> */}
                <h1 className={`font-medium text-color-7 
                     ${breakpoint > 1200 && 'text-[1rem]'}
                     ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.99125rem]'}
                     ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.86625rem]'} 
                     ${(breakpoint <= 480) && 'text-[.74125rem]'}
  
                  `}>Get Live Personalied Offers</h1>
          </div>
              <MdKeyboardArrowRight />

      </div>
      
       </div>
      
      }


      {
        upcoming &&
        <div className='p-[.5rem] rounded-[12px] border-[1px] border-[#0000001F] flex w-full items-center justify-between cursor-pointer border-blue'>
      
           
              <h1 className={` w-full font-2-book text-color-7 flex items-center justify-center
                   ${breakpoint > 1200 && 'text-[1.11625rem]'}
                   ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.99125rem]'}
                   ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.86625rem]'} 
                   ${(breakpoint <= 480) && 'text-[.74125rem]'}

                `}>Alert Me When Launched</h1>
        
            

    </div>

      }
    </div>
   </div>
  );
}



export default Card;
