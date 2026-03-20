import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const NavigateSection = () => {
    const navigateOptions = ["Seltos", "Price", "Compare", "Images", "Specs", "User Reviews", "360 View", "Variants", "Videos", "More"];
    const [selectedNavigationOptions, setSelectedNavigationOptions] = useState(0);
    return (
        <div className='flex gap-3 items-center'>
            {
                navigateOptions.map((currentNav, index) => (
                    <div key={index} onClick={() => setSelectedNavigationOptions(index)} className={`px-3 py-1 flex flex-col gap-4 rounded-full ${selectedNavigationOptions === index ? "border-2  border-[#007BE5] text-[#007BE5] bg-[#007BE5] bg-opacity-10 " : " border-[#24272C] border-[1px]  border-opacity-10  text-[#24272C]"} `}>
                        <p className='text-[14px] font-semibold flex gap-[2px] items-center'>{currentNav} {index===navigateOptions.length-1 && <span><MdOutlineKeyboardArrowDown className='w-[18px] h-[18px] '/>
                            </span>}</p>
                    </div>
                ))
            }
        </div>

    )
}

export default NavigateSection