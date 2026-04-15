import React from 'react'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import {ComparisonSection3_Subsection1} from '../../components/index'

const ComparisonSection3 = () => {

    const breakpoint = useScreenResizeValue();

  return (
      <div className='bg-[#FAFAFA] w-[100%] flex items-center justify-center '>
          <div className={` py-[1rem] flex flex-col gap-[20px]
                         ${breakpoint <= 1440 ? 'w-[84%]' : 'w-[1200px]'}`}>
          <ComparisonSection3_Subsection1/>
    </div>
    </div>
  )
}

export default ComparisonSection3