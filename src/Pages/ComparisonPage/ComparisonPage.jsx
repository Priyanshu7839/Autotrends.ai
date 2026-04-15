import React from 'react'
import { ComparisonSection1, ComparisonSection2 ,ComparisonSection3, ComparisonSection4, ComparisonSection5, ProsandCons,ComparisonSection6, ComparisonSection7, ComparisonSection8,ComparisonSection9} from '../../components'


const ComparisonPage = () => {

  return (
    <div className='flex flex-col gap-[20px] bg-[#FAFAFA]'>
        <ComparisonSection1/>
        <ComparisonSection2/>
        <ComparisonSection3/>
        <ComparisonSection4/>
        <ProsandCons/>
        <ComparisonSection5/>
        <ComparisonSection6/>
        <ComparisonSection7/>
        <ComparisonSection8/>
        <ComparisonSection9/>
       

    </div>
  )
}

export default ComparisonPage