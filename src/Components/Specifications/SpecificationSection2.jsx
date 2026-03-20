import React from 'react'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import {SpecificationSection2_Subsection1,MileageSection2_SubSectionLeft_Section6,SpecificationSection2_Subsection5,SpecificationSection2_Subsection6, SpecificationSection2_Subsection4, SpecificationSection2_Subsection7,MoreOptions, UserReviews, FAQsSection, Helpful} from '../../Components'
import { MoreOptionsToConsiderData } from '../../MockData'

const SpecificationSection2 = () => {
    const breakpoint = useScreenResizeValue();
  return (
    <div className='flex items-center justify-center bg-[#FFFFFF] w-[100%]'>
     <div className={`${breakpoint<=1440 ? 'w-[84%]':'w-[1200px]'} flex items-start justify-between gap-[20px]
    `}>
        <div className={` flex flex-col gap-[20px]
          ${breakpoint<=1250 ?'w-[100%]':'w-[70%]'}
          `}>
            <SpecificationSection2_Subsection1/>
            <SpecificationSection2_Subsection4/>
            <MileageSection2_SubSectionLeft_Section6/>
            <SpecificationSection2_Subsection5/>
            <SpecificationSection2_Subsection6/>
            <SpecificationSection2_Subsection7/>
            <UserReviews/>
            <MoreOptions data={MoreOptionsToConsiderData}/>
            <FAQsSection/>
            <Helpful/>
            

            
        </div>
        
        

    </div>
   </div>
  )
}

export default SpecificationSection2