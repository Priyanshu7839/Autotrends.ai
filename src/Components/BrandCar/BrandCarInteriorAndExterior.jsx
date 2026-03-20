import React, { useState } from 'react'
import { seltos_front_left,view360 } from '../../assets/Images'
import { Rightarrow } from '../../assets/Images/SVG'
import {Menu} from '../../components'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import { useSelector } from 'react-redux'


const BrandCarInteriorAndExterior = () => {
    
    const [viewType,setViewtype]=useState('Exterior');
    
    const breakpoint=useScreenResizeValue();

  const details = useSelector((state) => state.CarDetails);
  const name = details?.overView?.name;
  const brand = details?.overView?.brandName;
  const model = name.replace(brand, "").trim();




    return (
        <div className='  py-[20px] w-full  shadow-inner border-[#24272C] border-[1px] rounded-[16px] border-opacity-10'>
            <h1 className={` px-[20px] font-medium mb-[20px] font-2
                ${breakpoint>1250 && 'text-[24px]'}
                ${breakpoint<=1250 && 'text-[20px]'}
                `}>{details?.overView?.name} Images</h1>

            <div className='flex flex-col gap-2  '>
                {/* <div className=' px-[20px] w-full border-b border-[rgba(36,39,44,0.1)]'>
                <Menu menuItems={["Exterior","Interior"]} item={viewType} setitem={setViewtype}/>
                </div> */}
            

               { breakpoint>480 ? <div className='grid grid-cols-3 gap-[20px] px-[20px] '>
                   

                     {
                        details?.gallerySection.items[0].items.map((image,index)=>{
                            return(
                                    <img src={image.image} alt="" className='w-[286px] h-[200px] object-coverT rounded-md' />
                            )
                        })
                     }
                    
                    <div className='col-span-1 flex justify-center items-center bg-[#FAFAFA] rounded-md'>
                        <img src={view360} alt="" className='w-[116px] h-[70px] px-1 py-1' />
                    </div>
                </div>:
                <div className=' w-full overflow-x-scroll px-[20px]' style={{ scrollbarWidth:"none"}}>
                    <div className=' flex w-max gap-[10px]'>
                    { Array(5).fill("").map(()=><div className=''>
                        <img src={seltos_front_left} alt="" className='w-[286px] h-[200px] rounded-md' />
                    </div>)
                     }
                    <div className='col-span-1 flex justify-center items-center bg-[#FAFAFA] rounded-md'>
                        <img src={view360} alt="" className='w-[150px] h-[150px] px-1 py-1' />
                    </div>
                    </div>
                </div>}
                

                <p className={`flex gap-1  px-[20px] mt-[10px] text-[#0085FF] font-semibold items-center
                    ${breakpoint>1250 && 'text-[16px]'}
                    ${breakpoint<=1250 && 'text-[14px]'}
                    `}>
                    {model} {viewType} Images <Rightarrow/>
                </p>
            </div>
        </div>
    )
}

export default BrandCarInteriorAndExterior