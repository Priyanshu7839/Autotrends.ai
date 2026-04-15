import React from 'react'
import {AreYouConfused, FAQsSection, Helpful, MileageSection2, MileageSection2_SubSectionLeft_Section1,MileageSection2_SubSectionLeft_Section2, MileageSection2_SubSectionLeft_Section6, QandAsection, UserReviews,MoreOptions, MileageSection2_SubSectionLeft_Section5} from '../../components'
import { MoreOptionsToConsiderData } from '../../MockData'

const MileageSection2_SubSectionLeft = () => {
  return (
    <div className='w-full flex flex-col gap-[20px]'>
        <MileageSection2_SubSectionLeft_Section1/>
        <MileageSection2_SubSectionLeft_Section2/>
        <UserReviews/>
        <MileageSection2_SubSectionLeft_Section5/>
        <MileageSection2_SubSectionLeft_Section6/>
        <MoreOptions data={MoreOptionsToConsiderData}/>
        <AreYouConfused/>
        <FAQsSection/>
        <QandAsection/>
        <Helpful/>
    </div>
  )
}

export default MileageSection2_SubSectionLeft