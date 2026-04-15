import React from 'react'
import {ask_que} from "../assets/Images"
import AreYouConfusedImage from '../assets/Images/AreYouConfusedImage.png'
import { useScreenResizeValue } from '../ScreenSizeFunction'
const AreYouConfused = () => {

     const breakpoint=useScreenResizeValue();

    return (
        <div className=' px-[20px] py-[15px] w-full  drop-shadow-[0_1px_2px_rgba(36,39,44,0.1)] border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-3 bg-[#FEFEFE]'>
            <div className=' w-full'>

                <div className='flex w-full gap-4 items-center'>
                    <div className='w-[235px] h-[125px] flex justify-center items-center'>
                        <img src={AreYouConfusedImage} alt="road test" className='h-[118px] w-[115px]' />
                    </div>
                    <div className='py-[10px] w-full flex flex-col gap-1'>
                        <p className={`  text-[#24272C]  font-[500]
                            ${breakpoint>1250 && 'text-[23px]'}
                            ${breakpoint<=1250 && 'text-[20px]'}
                            `}>Are you confused?</p>
                        <p className={` font-[400] text-[#24272C] text-opacity-70 
                            ${breakpoint>1250 && 'text-[15px]'}
                            ${breakpoint<=1250 && 'text-[13px]'}
                            `}>Ask anything & get answer in 48 hours.</p>
                        <div className={`mt-[8px] w-full flex gap-[10px]
                            ${breakpoint<=700 && 'flex-col'}
                            `}>
                            <input type="text" name="" id="" placeholder='Write your question here...' className={`border border-[#46474a]   rounded-md px-3 py-2 focus:outline-none focus:ring-[1px] focus:ring-[#3f4043] text-[14px] text-[#24272C] text-opacity-70 font-[400]
                            ${breakpoint<=700 ? 'w-[100%]':'w-[60%]'}
                                
                                `} />
                            <button className={`bg-[#24272C] bg-opacity-30 px-5 py-2 rounded-md  text-[white]  font-semibold
                                ${breakpoint>1250 && 'text-[1rem]'}
                                ${breakpoint<=1250 && 'text-[.875rem]'}
                                `}>Ask Question</button>
                        </div>
                    </div>
                </div> 

            </div>

        </div>
    )
}

export default AreYouConfused