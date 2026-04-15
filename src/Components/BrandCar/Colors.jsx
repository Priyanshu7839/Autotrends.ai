import React, { useEffect, useState } from 'react'
import { colorPallete } from '../../MockData';
import { FaCheck } from 'react-icons/fa';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { seltos_glacier_white,seltos_pewter_olive,seltos_sparkling_white } from '../../assets/Images';



const Colors = () => {

    const [selectedColor,setSelectedColor]=useState(0);

    useEffect(()=>{
        
            document.getElementById('scrollablediv').scrollLeft=selectedColor*870;
            document.getElementById('scrollablediv').style.scrollBehavior='smooth';
        
    },[selectedColor])


  return (
    <div className='flex flex-col relative w-full pt-[46px] pb-[75px]'>
        <div className=' px-[19.44px] flex gap-[54px]'>
            {
                 
                colorPallete.map((pallete, index) => (<div key={index} onClick={(e) => { e.preventDefault(); setSelectedColor(pallete.id) }} style={{ backgroundColor: pallete.color, }} className={` cursor-pointer  w-[46px] h-[46px] rounded-full  border-[#24272C] border-[1px] border-opacity-25 flex justify-center items-center`}>
                     {
                         selectedColor === pallete.id ? (<div className={` bg-[#24272c] bg-opacity-50 rounded-full text-white w-[38px] h-[38px] flex justify-center items-center`}><FaCheck className={`w-[14px] h-[14px] ${pallete.color==='#FFFFFF'?'text-[#24272c]':'text-[white]'} `} /></div>) : <></>
                     }
                </div>))
                                
            }


        </div>
        <div className=' absolute w-[50px] h-[50px] left-0 top-[40%] z-20 flex justify-center text-[30px] items-center text-[white] bg-[rgba(0,0,0,0.3)] cursor-pointer' onClick={()=>setSelectedColor((prev)=>prev>0?prev-1:(colorPallete.length-1))}><MdKeyboardArrowLeft/></div>

        <div className=' absolute w-[50px] h-[50px] right-0 top-[40%] z-20 flex justify-center text-[30px] items-center text-[white] bg-[rgba(0,0,0,0.3)] cursor-pointer' onClick={()=>setSelectedColor((prev)=>prev<(colorPallete.length-1)?prev+1:0)}><MdKeyboardArrowRight/></div>

      

        <div className={`w-full flex  overflow-x-scroll h-[500px] relative `} id='scrollablediv'  style={{scrollbarWidth:'none'}}>
            <div  className={` w-max h-full flex gap-0 `}>
            <div className={` w-[870px] h-full relative flex flex-col `}>
                               <div className=' w-full h-[100%]' style={{backgroundImage:`url(${seltos_sparkling_white})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
                                   
                               </div>
                               <div className=' w-full h-[94px] absolute bottom-0  flex justify-end items-end pb-[21px] pr-[14.62px] bg-gradient-to-t from-[rgba(35,35,35,1)] to-[rgba(106,106,106,0)] from-0% to-100%'>
                               <p className=' text-[14px] leading-[21px] text-[#ffffff] font-normal '>Sparkling Silver</p>
                               </div>
                              
                           </div>
                           <div className=' w-[870px] h-full relative flex flex-col'>
                               <div className=' w-full h-[100%]' style={{backgroundImage:`url(${seltos_glacier_white})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
                                   
                               </div>
                               <div className=' w-full h-[94px] absolute bottom-0  flex justify-end items-end pb-[21px] pr-[14.62px] bg-gradient-to-t from-[rgba(35,35,35,1)] to-[rgba(106,106,106,0)] from-0% to-100%'>
                               <p className=' text-[14px] leading-[21px] text-[#ffffff] font-normal '>Glacier White</p>
                               </div>
                              
                           </div>
                           <div className=' w-[870px] h-full relative flex flex-col'>
                               <div className=' w-full h-[100%]' style={{backgroundImage:`url(${seltos_pewter_olive})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
                                   
                               </div>
                               <div className=' w-full h-[94px] absolute bottom-0  flex justify-end items-end pb-[21px] pr-[14.62px] bg-gradient-to-t from-[rgba(35,35,35,1)] to-[rgba(106,106,106,0)] from-0% to-100%'>
                               <p className=' text-[14px] leading-[21px] text-[#ffffff] font-normal '>Pewter Olive</p>
                               </div>
                              
                           </div>
            </div>
           
                          

        </div>


      
    </div>
  )
}

export default Colors
