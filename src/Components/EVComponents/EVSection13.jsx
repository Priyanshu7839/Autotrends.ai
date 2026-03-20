import React from 'react'
import { Evbenefits } from '../../assets/Images'
import { useScreenResizeValue } from '../../ScreenSizeFunction'

const EVSection13 = () => {

    const breakpoint=useScreenResizeValue();

  return (
    <div className=' w-full flex justify-between'>
        {breakpoint>412 && <div className=' w-[40%] flex px-[10px] items-center'>
            <img src={Evbenefits} alt=" image" className=' w-full h-auto' />
        </div>}
        <div className={` ${breakpoint<=412?' w-full flex flex-col px-[20px] gap-[20px]':' w-[45%] flex flex-col px-[10px] gap-[50px]'}`}>
        <h3 className=" text-[32px] font-[600] leading-[38.8px] text-[#24272c] ">
               How to maintain your EV's Battery
        </h3>
       {breakpoint<=412 && <div className=' w-full flex px-[10px] items-center'>
            <img src="https://stimg.cardekho.com/pwa/img/ev/evBenefits-new-mobii.png" alt=" image" className=' w-full h-auto' />
        </div>}
        <ul className=' flex flex-col gap-[25px] '>
            <li className=' border-l-[4px] pl-[24px] border-[#f2f3f7] flex flex-col gap-[6px] '>
                <h5 className=' text-[20px] leading-[28px] text-[#24272c] font-[500]'>
                Avoid Frequent Fast Charges
                </h5>
                <p className=' text-[15px] leading-[22.5px] text-[rgba(36,39,44,0.7)] font-[400]'>
                Frequent fast-charging may have a negative impact on a battery's health over time, as
                sending high currents causes a lot of strain.
                </p>
            </li>
            <li className=' border-l-[4px] pl-[24px] border-[#f2f3f7] flex flex-col gap-[6px] '>
                <h5 className=' text-[20px] leading-[28px] text-[#24272c] font-[500]'>
                Control Level of Charge
                </h5>
                <p className=' text-[15px] leading-[22.5px] text-[rgba(36,39,44,0.7)] font-[400]'>
                Having the battery percentage dip close to zero, or charging it to 100 per cent, are both
bad for an EV. These extremes can reduce the battery’s capacity to store electricity and
even drain faster over time.
                </p>
            </li>
            <li className=' border-l-[4px] pl-[24px] border-[#f2f3f7] flex flex-col gap-[6px] '>
                <h5 className=' text-[20px] leading-[28px] text-[#24272c] font-[500]'>
                Avoid Exposure to Hot Temperatures
                                </h5>
                <p className=' text-[15px] leading-[22.5px] text-[rgba(36,39,44,0.7)] font-[400]'>
                Do not leave your EV parked under the hot sun for long durations. Doing so can expose
your electric vehicle to extreme hot temperatures and can potentially damage the
battery.
                </p>
            </li>
            <li className=' border-l-[4px] pl-[24px] border-[#f2f3f7] flex flex-col gap-[6px] '>
                <h5 className=' text-[20px] leading-[28px] text-[#24272c] font-[500]'>
                Check Battery Coolant
                </h5>
                <p className=' text-[15px] leading-[22.5px] text-[rgba(36,39,44,0.7)] font-[400]'>
                To ensure that the battery is always working within the preset safe operating
                temperature, it is necessary to check the battery coolant level at regular intervals.
                </p>
            </li>
            <li className=' border-l-[4px] pl-[24px] border-[#f2f3f7] flex flex-col gap-[6px] '>
                <h5 className=' text-[20px] leading-[28px] text-[#24272c] font-[500]'>
                Parking for Longer Periods
                </h5>
                <p className=' text-[15px] leading-[22.5px] text-[rgba(36,39,44,0.7)] font-[400]'>
                When parked for an extended period of time (more than a month), maintain a charging
                range of 40 to 60% to safeguard the battery's health.
                </p>
            </li>

        </ul>
        </div>
      
    </div>
  )
}

export default EVSection13
