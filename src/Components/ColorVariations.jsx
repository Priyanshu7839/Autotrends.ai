import React from 'react'
import { seltos_glacier_white,seltos_sparkling_white,seltos_pewter_olive } from '../assets/Images'

import colourPallete from '../MockData/ColorPallete'
import { FaCheck } from 'react-icons/fa'
import { Rightarrow } from '../assets/Images/SVG'
import { useScreenResizeValue } from '../ScreenSizeFunction'

const ColorVariations = () => {
    const [selectedColor, setSelectedColor] = React.useState(1);
    const breakpoint=useScreenResizeValue();

    return (
        <div className=' py-[20px] w-full  shadow-sm shadow-[rgba(36,39,44,0.1)] border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-4'>
            <h1 className='text-[24px] px-[20px] font-semibold'>Kia Seltos colours</h1>
            <p className='text-[14px] px-[20px] text-[#24272C] text-opacity-70 font-semibold'>Kia Seltos is available in the following colours in India. View all car images with different colour options on CarDekho.</p>
            <div className=' w-full px-[20px] overflow-x-scroll' style={{scrollbarWidth:'none'}}>
            <div className='flex gap-2 w-max '>
                <div className='flex flex-col gap-3'>
                    <div>
                        <img src={seltos_sparkling_white} alt="" className='h-[195px] w-[290px] ' />
                    </div>
                    <p className='text-[16px] text-[#24272C] font-semibold '>Sparkling Silver</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <div>
                        <img src={seltos_glacier_white} alt="" className='h-[195px] w-[290px] ' />
                    </div>
                    <p className='text-[16px] text-[#24272C] font-semibold '>Glacier White Pearl</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <div>
                        <img src={seltos_pewter_olive} alt="" className='h-[195px] w-[290px] ' />
                    </div>
                    <p className='text-[16px] text-[#24272C] font-semibold '>Pewter Olive</p>
                </div>
            </div>
            </div>
           

            {/* color pallete  */}
            <div className=' w-full overflow-x-scroll px-[20px]' style={{scrollbarWidth:'none'}}>
            <div className='flex w-max gap-4'>
                {
                    colourPallete.map((pallete, index) => (<div key={index} onClick={(e) => { e.preventDefault(); setSelectedColor(pallete.id) }} style={{ backgroundColor: pallete.color, }} className={` cursor-pointer  w-[28px] h-[28px] rounded-full  border-[#24272C] border-[1px] border-opacity-25 flex justify-center items-center`}>
                        {
                            selectedColor === pallete.id ? (<div className='  bg-[#24272C] bg-opacity-25 rounded-full text-white w-[20px] h-[20px] flex justify-center items-center'><FaCheck className='w-[14px] h-[14px] text-[white]' /></div>) : (<div></div>)
                        }
                    </div>))
                }
            </div>
            </div>
           

            <p className=' flex gap-1 cursor-pointer px-[20px] text-[#0085FF] font-semibold items-center'>
                View All Seltos Colours <Rightarrow/>
            </p>

        </div>
    )
}

export default ColorVariations