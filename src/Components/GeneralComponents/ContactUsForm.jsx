import React from 'react'
import { useScreenResizeValue } from '../../ScreenSizeFunction'

const ContactUsForm = () => {

  const breakpoint = useScreenResizeValue();


  return (
    <div className={` ${breakpoint <=768 ? ' flex w-[100%] rounded-[20px] flex-col px-[20px] pt-[25px] pb-[25px] bg-[white] shadow-md' : 'flex w-[45%] rounded-[20px] flex-col px-[40px] pt-[50px] pb-[40px] bg-[white] shadow-md'}`}>
      <div className=' flex flex-col gap-[20px] w-full'>
        <input type="text" name='name' className=' w-full rounded-[5px] border-[1.5px] border-[#C1C7CD] py-[12px] md:py-[18px] px-[15px] md:px-[25px] text-[16px] font-Outfit text-[#0a142f] outline-none' placeholder='John Doe' />
        <input type="email" name='email' className=' w-full rounded-[5px] border-[1.5px] border-[#C1C7CD] py-[12px] md:py-[18px] px-[15px] md:px-[25px] text-[16px] font-Outfit text-[#0a142f] outline-none' placeholder='johndoe@example.com' />
        <input type="text" name="subject" className=' w-full rounded-[5px] border-[1.5px] border-[#C1C7CD] py-[12px] md:py-[18px] px-[15px] md:px-[25px] text-[16px] font-Outfit text-[#0a142f] outline-none' placeholder='Regarding...' />
        <textarea rows={6} placeholder='My feedback or Query is ...' className=' w-full max-w-full min-w-full max-h-[165px] h-[165px] rounded-[5px] border-[1.5px] border-[#C1C7CD] py-[12px] md:py-[18px] px-[15px] md:px-[25px] text-[16px] font-Outfit text-[#0a142f] outline-none'>
        </textarea>
      </div>
      <div className=' mt-[10px] items-center w-full flex gap-[8px]'>
        <input type="checkbox" className=' w-[13px] h-[22px] rounded-[3px] border-[#C1C7CD] border' />
        <p className=' text-[12px] font-[500] font-Outfit text-[#0a142f]'>I have read and accept the <span className=' text-blue'>privacy policy</span></p>
      </div>
      <button type="submit" className='text-[14px] mt-[20px] w-max text-[white] font-Outfit font-[500] bg-blue rounded-[10px] outline-none px-[16px] py-[10px]'>
        Send message
      </button>


    </div>
  )
}

export default ContactUsForm
