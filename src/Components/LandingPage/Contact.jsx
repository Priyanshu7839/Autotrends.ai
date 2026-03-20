import React from 'react'
import { ContactRectangleSvg } from '../../assets/Images/SVG'

const Contact = () => {
  return (
    <div className='p-[2rem] relative'>
        <ContactRectangleSvg/>

        <div className="w-[400px] h-[500px] shadow-md bg-[#ffffff] absolute top-0 right-[15%] rounded-[12px] p-[1rem] flex flex-col gap-[1rem]">
                <input type="text" className='py-[.5rem] px-[1rem] rounded-[5px] border-[#0A142F] border-[.5px] outline-none font-2'
                placeholder='Name'
                />
                <input type="text" className='py-[.5rem] px-[1rem] rounded-[5px] border-[#0A142F] border-[.5px] outline-none font-2'
                placeholder='Email'
                />
                <input type="text" className='py-[.5rem] px-[1rem] rounded-[5px] border-[#0A142F] border-[.5px] outline-none font-2'
                placeholder='Subject'
                />

                <textarea name="" id="" rows='7' className='py-[.5rem] px-[1rem] rounded-[5px] border-[#0A142F] border-[.5px] outline-none font-2'
                placeholder='Message'
                ></textarea>
                
                <div className='flex items-center justify-start gap-[.5rem] font-2 text-[.875rem] font-light'>
                    <input type="checkbox" className='' />
                    <h1>He leido y acepto la <a href="" className='text-color-7'>política de privacidad.</a></h1>
                </div>

                <button className='py-[.5rem] px-[1rem] flex items-center justify-center w-fit rounded-[10px] bg-[#0081FE] font-2 font-medium text-[.875rem] text-color-1'>Send Message</button>
               
        </div>
    </div>
  )
}

export default Contact