import React from 'react'
import { SpecificationSection1, SpecificationSection2 } from '../../components'

const SpecificationPage = () => {
  return (
    <div className='flex flex-col gap-[20px] '>
        <SpecificationSection1/>
        <SpecificationSection2/>
    </div>
  )
}

export default SpecificationPage