import React from 'react'
import { Rightarrow } from '../../../assets/Images/SVG'
import UpcomingCarsCard from '../UpcomingCars/UpcomingCarsCard'
import { useScreenResizeValue } from '../../../ScreenSizeFunction'

const LatestCarsSide = () => {

    const breakpoint=useScreenResizeValue();

  return (
    <div className=' w-full rounded-[8px] pt-[14px] pb-[6.5px]  flex flex-col border border-[rgba(36,39,44,0.1)]'>
    <h5 className="px-[20px]  text-xl font-medium leading-snug text-[rgba(36,39,44)]">
        Latest Cars
      </h5>
      <div className={` mt-[8px] px-[10px]  flex ${breakpoint<=412 ? ' w-full overflow-x-scroll':'flex-col'} w-full `} style={{scrollbarWidth:'none'}}>
        {
          breakpoint<=412 &&
          <div className=' w-max flex '>
            <div className=' px-[10px] w-max'>
            <UpcomingCarsCard upcoming={false}/>
          </div>
          <div className=' px-[10px] w-max'>
            <UpcomingCarsCard upcoming={false}/>
          </div>
          <div className=' px-[10px] w-max'>
            <UpcomingCarsCard upcoming={false}/>
          </div>
          <div className=' px-[10px] w-max'>
            <UpcomingCarsCard upcoming={false}/>
          </div>
          <div className=' px-[10px] w-max'>
            <UpcomingCarsCard upcoming={false}/>
          </div>
          </div>
        }
        {breakpoint>412 && <>
          <div className=' px-[10px] w-full'>
            <UpcomingCarsCard upcoming={false}/>
          </div>
          <div className=' px-[10px] w-full'>
            <UpcomingCarsCard upcoming={false}/>
          </div>
          <div className=' px-[10px] w-full'>
            <UpcomingCarsCard upcoming={false}/>
          </div>
          <div className=' px-[10px] w-full'>
            <UpcomingCarsCard upcoming={false}/>
          </div>
          <div className=' px-[10px] w-full'>
            <UpcomingCarsCard upcoming={false}/>
          </div>
        </> }
      </div>
      <div className=' mt-[13px] px-[21px] text-[14px] flex gap-[8px] items-center leading-[21px] font-[500] w-full text-blue'>
        View All Latest cars <Rightarrow/>

      </div>
    </div>
  )
}

export default LatestCarsSide
