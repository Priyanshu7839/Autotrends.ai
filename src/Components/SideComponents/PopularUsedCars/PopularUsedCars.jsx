import React, { useState } from 'react'
import { cities } from '../../../MockData'
import Menu from '../../GeneralComponents/Menu';
import { kia1 } from '../../../assets/Images';
import { Rightarrow } from '../../../assets/Images/SVG';
import { useScreenResizeValue } from '../../../ScreenSizeFunction';

const PopularUsedCars = () => {

    const [item,setitem]=useState("ahmedabad");
    const Cities=cities.map((city)=>city.name);

    const breakpoint=useScreenResizeValue();


  return (
    <div className='w-full shadow-sm shadow-[rgba(36,39,44,0.1)] border-[#24272C] border-[1px] rounded-[8px] border-opacity-10  pt-[18px] pb-[21px]   '>
            <div>
                <h1 className='text-[20px] px-[20px] text-[#24272C] font-medium pb-[8px]'>
                    Popular used Cars
                </h1>
            </div>
            <div className=' w-full overflow-x-scroll px-[20px] ' style={{scrollbarWidth:'none'}}>
                <div className=' w-max '>
                <Menu menuItems={Cities} setitem={setitem} item={item}/>
                </div>
            
            </div>
           { breakpoint>412 && Array(5).fill("").map(()=> <div className=' mt-[30.5px] flex flex-col  '>
                <div className=' flex  items-center gap-[5px]'>
                    <img src={kia1} alt="" className=' w-[25%] rounded-[8px]' />
                    <div className='flex w-[75%] pl-[10px] flex-col gap-[2px]'>
                        <p className=' text-[14px] leading-[21px] font-[400] text-[#24272c]'>
                            Volkswagen Polo
                        </p>
                        <p className=' text-[15px] leading-[24px] font-[500]'>
                            Starting at Rs.1.50 Lakh

                        </p>
                    </div>
                </div>
            </div>)}

            {
                breakpoint<=412 && <div className=' w-full overflow-x-scroll  px-[20px]' style={{scrollbarWidth:'none'}}>
                    <div className=' w-max flex gap-[20px]'>
                    {Array(5).fill("").map(()=> <div className=' mt-[30.5px] w-[320px] flex   '>
                <div className=' flex flex-col    gap-[20px]'>
                    <img src={kia1} alt="" className=' w-full rounded-[8px]' />
                    <div className='flex w-[75%] pl-[10px] flex-col gap-[2px]'>
                        <p className=' text-[18px] leading-[21px] font-[400] text-[#24272c]'>
                            Volkswagen Polo
                        </p>
                        <p className=' text-[15px] leading-[24px] font-[500]'>
                            Starting at Rs.1.50 Lakh

                        </p>
                    </div>
                </div>
            </div>)}
                    </div>
                </div>
            }
          
          
            <p className='flex gap-1 text-[#0085FF] px-[20px] font-semibold items-center mt-[12px] '>
            Used Cars in {item.charAt(0).toLocaleUpperCase()+item.slice(1)} <Rightarrow/>
            </p>
        </div>
  )
}

export default PopularUsedCars
