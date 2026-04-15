import React from 'react'
import { cities } from '../../MockData'
import LocationCards from './LocationCards'
import { CiLocationOn } from "react-icons/ci";
import { MdArrowDropDown, MdArrowRight, MdOutlineArrowDropDown } from 'react-icons/md';
import { city_background } from '../../assets/Images';
import { useScreenResizeValue } from '../../ScreenSizeFunction';

const PopularBrandsSection10 = () => {

    const breakpoint=useScreenResizeValue();

  return (
    <div className=' w-full px-[21px] relative  py-[16px] flex flex-col rounded-[16px] border border-[rgba(36,39,44,0.1)] shadow-[0px_1px_2px_rgba(36,39,44,0.1)] gap-[8.6px]'>
         <h3 className="  text-[23px]  leading-[33.2px] font-[500] ">
            Get trusted used cars nearby 
          </h3>
        <div className={` ${breakpoint<=412?' flex-col ':''} flex relative z-10`} >
            <div className={` ${breakpoint<=412?'w-full grid-cols-3':'w-[75%] grid-cols-6'}  grid  gap-x-[20px] gap-y-[20px]`}>
                  {
                    cities.map((city,index)=>{
                        return <LocationCards city={city} key={index}/>
                    })
                  }

            </div>
            <div className={`relative z-20 px-[20px]  ${breakpoint<=412?' w-full mt-[20px]':'w-[25%]'} flex flex-col justify-center items-center gap-[20px]`}>
                <p className='text-[20px] w-full text-center leading-[24px] text-[#24272cb3]'>
                I am looking to buy a second
                hand car in
                </p>
                <div className='  w-full bg-[white] border shadow-[0px_2px_8px_rgba(36,39,44,0.1)] border-[#24272c] border-opacity-10 flex rounded-[8px] py-[12px] px-[16px] '>
                    <div className=' w-full   flex items-center relative z-[15] gap-[7.19px]'>
                        <CiLocationOn className=' w-[20px] h-[20px] text-[#24272c] text-opacity-50'/>
                        <select className=' appearance-none py-[5px] outline-none border-none px-[3px] w-full bg-[white] bg-opacity-0 relative z-10 text-[#24272c]  text-opacity-50 text-[15px] leading-[22.5px]'>
                            {
                                cities.map((city,index)=>{
                                    return <option key={index}>{city.name}</option>
                                })
                            }
                        </select>
                        <MdOutlineArrowDropDown className=' w-[20px] h-auto z-[5] text-[#24272c] text-opacity-50 right-0 absolute top-[25%] '/>

                    </div> 
                   
                </div>
              
                

            </div>
        </div>
        <img src={city_background} className={`${breakpoint<=412?' w-[90%] h-[25%]':'w-[40%] h-[50%]'}  absolute z-[-10] bottom-0 right-0`}/>
    </div>
  )
}

export default PopularBrandsSection10
