import React from 'react'
import {Accordion} from '../../components'
import { useScreenResizeValue } from '../../ScreenSizeFunction';


const QandAsection = () => {
     const breakpoint = useScreenResizeValue();
  
  return (
    <div className=' w-full relative flex flex-col gap-[8px] pt-[18px] pb-[26.5px]  px-[31.22px] rounded-[16px] border-[1px] border-[#24272c1a] drop-shadow-[0_1px_2px_#24272c1a]'>
    <h3 className={` font-[500]
       ${breakpoint>1250 && 'text-[23px]'}
         ${breakpoint<=1250 && 'text-[19px]'}
      `}> Questions & Answers</h3>
     <Accordion/>
   
  </div>
  )
}

export default QandAsection