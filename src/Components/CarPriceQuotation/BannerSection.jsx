import React from 'react'
import { CarPriceBannerImg } from '../../assets/Images'
import { useScreenResizeValue } from '../../ScreenSizeFunction'

const BannerSection = () => {
  const breakpoint = useScreenResizeValue();

  return (
    <div className='p-[4rem] flex items-center justify-center gradient-1 relative'>
      <div className={` flex items-center   
        ${breakpoint>1200 && 'w-[40%]' }
        ${(breakpoint<=1200 && breakpoint>1000) && 'w-[35%]' }
        ${(breakpoint<=1000 && breakpoint>0) && 'w-[100%]' }
        ${breakpoint<=600 ?'justify-center':'justify-start' }
        `} >
        <div className={`p-[1rem] flex flex-col gap-[1rem] rounded-[8px] border-[1px] border-[rgba(0,0,0,0.2)]  relative z-10
            ${breakpoint>1000 && 'w-full mix-blend-multiply bg-white'}
            ${(breakpoint<=1000 && breakpoint>500) && 'w-[350px] bg-white/30 backdrop-blur-md '}
            ${(breakpoint<=500 && breakpoint>0) && 'w-[300px] bg-white/30 backdrop-blur-md '}

          `}>
          <h1 className={`text-color-6 font-1 font-semibold
            ${breakpoint>1200 && 'text-[1.5rem]'}
            ${(breakpoint <=1200 && breakpoint>768) && 'text-[1.375rem]'}
            ${(breakpoint<=768 && breakpoint>480) && 'text-[1.25rem]'} 
            ${(breakpoint<=480) && 'text-[1.125rem]'}
            `}>Already Have a Price Quotation</h1>
          <p className={`text-color-6 font-1 font-regular 
            ${breakpoint>1200 && 'text-[.875rem]'}
            ${(breakpoint <=1200 && breakpoint>768) && 'text-[.75rem]'}
            ${(breakpoint<=768 && breakpoint>480) && 'text-[.625rem]'} 
            ${(breakpoint<=480) && 'text-[.5rem]'}
            `}>
            Let's see if we can do better! Enter your car details and the quoted price from another dealer to see if we can find a better deal for you.
          </p>
          <div className='text-color-8 flex flex-col gap-[1rem]'>
            <div className='flex items-center justify-between'>
              <div className='w-[49%] flex flex-col gap-[.25rem]'>
                <label htmlFor="" className={` font-normal font-1
                  ${breakpoint>1200 && 'text-[1rem]'}
                  ${(breakpoint <=1200 && breakpoint>768) && 'text-[.875rem]'}
                  ${(breakpoint<=768 && breakpoint>480) && 'text-[.75rem]'} 
                  ${(breakpoint<=480) && 'text-[.625rem]'}
                  `}>Car Maker</label>
                <input type="text" 
                className={`rounded-[5px] border-[1px] border-[#000000DE] p-[.5rem] text-color-8 font-1
                outline-none
                  ${breakpoint>1200 && 'text-[1rem]'}
                  ${(breakpoint <=1200 && breakpoint>768) && 'text-[.875rem]'}
                  ${(breakpoint<=768 && breakpoint>480) && 'text-[.75rem]'} 
                  ${(breakpoint<=480) && 'text-[.625rem]'}
                  
                  `}
                  placeholder='Toyota'
                />
              </div>
              <div className='w-[49%] flex flex-col gap-[.25rem]'>
                <label htmlFor="" className={` font-normal font-1
                  ${breakpoint>1200 && 'text-[1rem]'}
                  ${(breakpoint <=1200 && breakpoint>768) && 'text-[.875rem]'}
                  ${(breakpoint<=768 && breakpoint>480) && 'text-[.75rem]'} 
                  ${(breakpoint<=480) && 'text-[.625rem]'}
                  `}>Car Model</label>
                <input type="text"
                 className={`rounded-[5px] border-[1px] border-[#000000DE] p-[.5rem] text-color-8 font-1
                outline-none
                  ${breakpoint>1200 && 'text-[1rem]'}
                  ${(breakpoint <=1200 && breakpoint>768) && 'text-[.875rem]'}
                  ${(breakpoint<=768 && breakpoint>480) && 'text-[.75rem]'} 
                  ${(breakpoint<=480) && 'text-[.625rem]'}
                  
                  `}
                  placeholder='Enter The Model'
                />
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div className='w-[49%] flex flex-col gap-[.25rem]'>
                <label htmlFor="" className={` font-normal font-1
                  ${breakpoint>1200 && 'text-[1rem]'}
                  ${(breakpoint <=1200 && breakpoint>768) && 'text-[.875rem]'}
                  ${(breakpoint<=768 && breakpoint>480) && 'text-[.75rem]'} 
                  ${(breakpoint<=480) && 'text-[.625rem]'}
                  `}>Car variant</label>
                <input type="text" 
                className={`rounded-[5px] border-[1px] border-[#000000DE] p-[.5rem] text-color-8 font-1
                  outline-none
                    ${breakpoint>1200 && 'text-[1rem]'}
                    ${(breakpoint <=1200 && breakpoint>768) && 'text-[.875rem]'}
                    ${(breakpoint<=768 && breakpoint>480) && 'text-[.75rem]'} 
                    ${(breakpoint<=480) && 'text-[.625rem]'}
                    
                    `}
                  placeholder='Enter The Variant'
                />
              </div>
              <div className='w-[49%] flex flex-col gap-[.25rem]'>
                <label htmlFor="" className={` font-normal font-1
                  ${breakpoint>1200 && 'text-[1rem]'}
                  ${(breakpoint <=1200 && breakpoint>768) && 'text-[.875rem]'}
                  ${(breakpoint<=768 && breakpoint>480) && 'text-[.75rem]'} 
                  ${(breakpoint<=480) && 'text-[.625rem]'}
                  `}>Car color</label>
                <input type="text"
                 className={`rounded-[5px] border-[1px] border-[#000000DE] p-[.5rem] text-color-8 font-1
                  outline-none
                    ${breakpoint>1200 && 'text-[1rem]'}
                    ${(breakpoint <=1200 && breakpoint>768) && 'text-[.875rem]'}
                    ${(breakpoint<=768 && breakpoint>480) && 'text-[.75rem]'} 
                    ${(breakpoint<=480) && 'text-[.625rem]'}
                    
                    `}
                  placeholder='Toyota'
                />
              </div>
            </div>
            
            <div className='flex flex-col gap-[.25rem]'>
              <label htmlFor="" className={` font-normal font-1
                  ${breakpoint>1200 && 'text-[1rem]'}
                  ${(breakpoint <=1200 && breakpoint>768) && 'text-[.875rem]'}
                  ${(breakpoint<=768 && breakpoint>480) && 'text-[.75rem]'} 
                  ${(breakpoint<=480) && 'text-[.625rem]'}
                  `}>Ex-Showroom Quoted Price</label>
                <input type="text"
                 className={`rounded-[5px] border-[1px] border-[#000000DE] p-[.5rem] text-color-8 font-1
                outline-none
                  ${breakpoint>1200 && 'text-[1rem]'}
                  ${(breakpoint <=1200 && breakpoint>768) && 'text-[.875rem]'}
                  ${(breakpoint<=768 && breakpoint>480) && 'text-[.75rem]'} 
                  ${(breakpoint<=480) && 'text-[.625rem]'}
                  
                  `}
                  placeholder='Enter The Price'
                />
            </div>


          </div>


            <button className={`p-[.5rem] flex items-center justify-center text-color-1 font-1 font-semibold rounded-[5px] bg-[#0B66FA]
                  ${breakpoint>1200 && 'text-[1rem]'}
                  ${(breakpoint <=1200 && breakpoint>768) && 'text-[.875rem]'}
                  ${(breakpoint<=768 && breakpoint>480) && 'text-[.75rem]'} 
                  ${(breakpoint<=480) && 'text-[.625rem]'}
                  
              `}>
              Get The Best Price Now
            </button>
        </div>

      </div>
      

    </div>
  )
}

export default BannerSection