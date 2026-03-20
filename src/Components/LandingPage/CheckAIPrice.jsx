import React from 'react'
import { AIPriceCheck} from '../../assets/Images'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import { useNavigate } from 'react-router'
import CheckImage1 from '../../assets/Images/CheckImage1.jpg'
const CheckAIPrice = () => {
  const Navigate = useNavigate();
  const breakpoint = useScreenResizeValue();
  return (
    <div className=" w-full flex items-center justify-center bg-[#FFFFFF] relative">
        {/* <div className='  z-0 bg-blue header_carousel max-w-screen w-screen'>

            <img src={AIPriceCheck} alt="" className='w-full min-h-[250px]' />

        </div> */}
            <div
        className={`${breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]" } 
                    ${breakpoint<=768?'flex-col gap-0':'gap-[20px]'} flex      font-1 overflow-hidden`}
      >
     
          <div className={` ${breakpoint<=768?'w-full h-auto aspect-video':'w-[50%]'} border-[1px] border-[#23242c1a] ${breakpoint<=768?'rounded-t-[16px]':'rounded-[16px]'}   overflow-hidden`}>
              <img src={CheckImage1} alt="" className='w-full h-full object-cover' />
          </div>
          <div className={`${breakpoint<=768?'w-full':'w-[50%]'} bg-[#E4f5fe] ${breakpoint<=768?"h-max min-h-[200px]":"min-h-[30rem]"} p-[2rem] border-[1px] border-[#23242c1a]  ${breakpoint<=768?'rounded-b-[16px]':'rounded-[16px]'} py-[20px]`}>
             <div className='flex h-full flex-col gap-[1rem] items-center justify-center'>
                  <h1 className={`font-semibold  text-color-8 text-center
                              ${breakpoint > 1200 && 'text-[2.5rem] leading-[2.5rem]'}
                              ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[2rem] leading-[2rem]'}
                              ${(breakpoint <= 768 && breakpoint > 480) && 'text-[1.5rem] leading-[1.5rem]'} 
                              ${(breakpoint <= 480) && 'text-[1.25rem] leading-[1.25rem]'}
                    `}>Already Have a Price Quotation?</h1>
                    <p className={`text-color-8  font-medium
                            ${breakpoint > 1200 && 'text-[1rem]'}
                            ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.875rem]'}
                            ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.75rem]'} 
                            ${(breakpoint <= 480) && 'text-[.625rem]'}
                    `}> Let’s See if We Can Do Better!</p>
                    <button
                      onClick={()=>{Navigate('/AIPricing')}}
                      className={`text-center py-[.5rem] px-[2rem] font-semibold text-color-1 rounded-[12px] bg-[#0B66FA] relative z-10
                          ${breakpoint > 1200 && 'text-[1.11625rem]'}
                          ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.99125rem]'}
                          ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.86625rem]'} 
                          ${(breakpoint <= 480) && 'text-[.74125rem]'}
                        `}>Check Best AI Price
                      </button>
             </div>
          </div>
    </div>
    </div>
  )
}

export default CheckAIPrice