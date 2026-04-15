import React from 'react'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import QandAsection from '../SimilarSections/QandAsection'

const ComparisonSection9 = () => {
    const breakpoint = useScreenResizeValue()
  return (
    <div className="bg-[#FAFAFA] w-[100%] flex items-center justify-center font-1">
    <div
      className={`
                       ${breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]"}`}
    >
        <QandAsection/>
    </div>
    </div>
  )
}

export default ComparisonSection9