import React from 'react'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import MileageSection2_SubSectionLeft from './MileageSection2_SubSectionLeft';
import MileageSection2_SubSectionRight from './MileageSection2_SubSectionRight';

const MileageSection2 = () => {
    const breakpoint = useScreenResizeValue();

  return (
   <div className='flex items-center justify-center bg-[#FFFFFF]'>
     <div className={`${breakpoint <= 1440
                            ? breakpoint <= 500
                              ? "w-[92%]"
                              : "w-[84%]"
                            : "w-[1200px]"
                        }
     flex gap-[20px]
     ${breakpoint<=1200 ?'flex-col items-center justify-center':'items-start justify-between'}
    `}>
        <div className={`${breakpoint<=1200?'w-[100%]':'w-[70%]'}`}>
            <MileageSection2_SubSectionLeft/>
        </div>
        <div className={`${breakpoint<=1200?'w-[100%]':'w-[30%]'}`}>
            <MileageSection2_SubSectionRight/>
        </div>

    </div>
   </div>
  )
}

export default MileageSection2