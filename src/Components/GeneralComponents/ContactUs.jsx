import React from 'react'
import { LogoWhite, Rectangle } from '../../assets/Images/SVG'
import ContactUsForm from './ContactUsform'
import { useScreenResizeValue } from '../../ScreenSizeFunction'

const ContactUs = () => {

  const breakpoint = useScreenResizeValue();


  return (
    <div className="flex items-center justify-center bg-[#FFFFFF]">
    <div
      className={`${breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]"} 
                  flex  ${breakpoint<=768?"":" pt-[20px]"} border-[1px] border-[#23242c1a]  rounded-[16px] flex-col font-1 overflow-hidden`}
    >
    <div className=' w-full relative    overflow-hidden'>
      {breakpoint > 768 && <div className='w-full relative h-max mt-[100px]'>
        <Rectangle height={900} />
        <div className=' absolute w-max h-max z-10 opacity-20 top-[-20px] left-[20px]'>
          <LogoWhite width={700} />
        </div>
        <div className=' absolute w-max h-max z-10 opacity-20 bottom-[-70px] left-[62.3%]'>
          <LogoWhite width={1000} />
        </div>
        <div className=' absolute top-[120px] left-[80px] z-20 flex flex-col gap-[38px] w-[36%]'>
          <div className={` ${breakpoint<=1100?"text-[38px] leading-[40px]":"text-[44px] leading-[60px]"}  text-wrap text-[white] font-Outfit font-semibold`}>
            GIVE  US A CALL FOR MORE INFORMATION
          </div>
          <div className=' text-[20pxpx] leading-[30px] w-[75%] text-[white] font-Outfit font-semibold text-wrap'>
           Get You Query Regarding Your Car Get Resolved With Autotrends
          </div>
        </div>
      </div>}
      {breakpoint > 768 &&
        <div className=' absolute w-full top-0 z-[20] flex justify-end right-[50px] '>
          <ContactUsForm />
        </div>}
      {
        breakpoint <= 768 && <div className='  relative w-full bg-blue h-max flex flex-col'>
          <div className=' absolute w-max h-max z-10 opacity-20  -top-16 -right-1 '>
            <LogoWhite width={breakpoint} height={350} />
          </div>

          <div className=' px-[20px] pt-[30px] flex flex-col gap-[18px] md:gap-[38px] w-full'>
            <div className={`  ${breakpoint <= 768 ? ' text-[28px] ' : 'text-[44px] leading-[60px]'}  text-wrap text-[white] font-Outfit font-semibold`}>
              GIVE  US A CALL FOR MORE INFORMATION
            </div>
            <div className=' text-[14px] w-[80%] text-[white] font-Outfit font-semibold text-wrap'>
            Get You Query Regarding Your Car Get Resolved With Autotrends
            </div>
          </div>
          <div className=' w-full mt-[20px] mb-[30px]  flex  px-[15px] z-[10]'>
            <ContactUsForm />
          </div>

        </div>
      }




    </div>
    </div>
    </div>
  )
}

export default ContactUs
