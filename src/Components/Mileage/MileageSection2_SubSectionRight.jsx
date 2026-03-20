import React from 'react'
import {Brochure,TrendingCars,PopularSUV,SimilarCars} from '../../components'


const MileageSection2_SubSectionRight = () => {
  return (
    <div className='flex flex-col  gap-[20px]'>
          <Brochure/>
          <TrendingCars/>
          <PopularSUV/>
          <SimilarCars/>
        </div>
  )
}

export default MileageSection2_SubSectionRight