import React from 'react'
import { MileageSection1, MileageSection2 } from '../../components';

const MileagePage = () => {


  return (
    <div className='flex flex-col gap-[20px]'>
        <MileageSection1/>
        <MileageSection2/>
    </div>
  )
}

export default MileagePage