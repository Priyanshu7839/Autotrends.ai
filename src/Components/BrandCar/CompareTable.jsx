import React from 'react'
import { green_star } from '../../assets/Images'
import { useSelector } from 'react-redux'
import { useScreenResizeValue } from '../../ScreenSizeFunction'

const CompareTable = () => {

    const details = useSelector((state)=>state.CarDetails)
    const breakpoint = useScreenResizeValue();

    return (
        <div className='overflow-auto relative mb-[20px] ' style={{scrollbarWidth:'none'}}>
            <table class="table-auto ">
                <thead className='' >
                    <tr className='flex gap-1'>

                        {details?.compareWith?.list.map((singleData, index) => (<th className={`w-[162px] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}   bg-[#FFFFFF]`}><div key={index} className='flex flex-col gap-1'>
                            <img src={singleData.image} alt="" className='w-[150px] h-[100px] rounded-xl ' />
                            <p className='text-[#24272C] font-medium text-[14px] text-start'>{singleData.brandName} {singleData.name}</p>
                            <p className='text-[#24272C] font-medium text-[15px] text-start'>{singleData.priceRange}</p>
                        </div></th>))}

                    </tr>
                </thead>
                <tbody >
                    <tr className='bg-[#D9D9D9] bg-opacity-20 flex gap-1'>
                        {
                           details?.compareWith?.list.map((singleData, index) => (<td className={`text-[#24272C] font-medium w-[162px] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}
                            ${breakpoint>1250 && 'text-[1rem]'}
                            ${breakpoint<=1250 && 'text-[.875rem]'}
                           `}>
                                {index === 0 ? "Rating" : ""}
                            </td>))
                        }

                    </tr>
                    <tr className='flex gap-1'>
                        {
                            details?.compareWith?.list.map((singleData, index) => (<td className={`w-[162px] bg-[#FFFFFF] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}`}>
                                <div className={`flex gap-1 items-center 
                                     ${breakpoint>1250 && 'text-[14px]'}
                                     ${breakpoint<=1250 && 'text-[12px]'}
                                    `}> {}
                                    <p className=''>{singleData.rating}</p>
                                    <img src={green_star} alt="" className='w-[13px] h-[13px] ' />
                                    <p>{singleData.specs.Rating.reviewCount} {" "}Reviews</p>
                                </div>
                            </td>))
                        }
                    </tr>

                  {details?.compareWith?.list[0].specs.Transmission &&
                  <>
                  <tr className='bg-[#D9D9D9] bg-opacity-20 flex gap-1'>
                        {
                            details?.compareWith?.list.map((singleData, index) => (<td className={`text-[#24272C] font-medium w-[162px] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}
                             ${breakpoint>1250 && 'text-[1rem]'}
                            ${breakpoint<=1250 && 'text-[.875rem]'}
                            `}>
                                {index === 0 ? "Transmission" : ""}
                            </td>))
                        }

                    </tr>
                    <tr className='flex gap-1'>
                        {
                            details?.compareWith?.list.map((singleData, index) => (<td className={`w-[162px] bg-[#FFFFFF] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}`}>
                                <div className={`flex gap-1  items-center 
                                     ${breakpoint>1250 && 'text-[14px]'}
                                     ${breakpoint<=1250 && 'text-[12px]'}
                                    `}> {}
                                    <p className=''>{singleData.specs.Transmission}</p>
                                </div>
                            </td>))
                        }
                    </tr>
                    </>
                    }

                  {details?.compareWith?.list[0].specs?.Engine &&
                  <>
                  <tr className='bg-[#D9D9D9] bg-opacity-20 flex gap-1'>
                        {
                            details?.compareWith?.list.map((singleData, index) => (<td className={`text-[#24272C]  font-medium w-[162px] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}
                             ${breakpoint>1250 && 'text-[1rem]'}
                            ${breakpoint<=1250 && 'text-[.875rem]'}
                            `}>
                                {index === 0 ? "Engine" : ""}
                            </td>))
                        }

                    </tr>
                    <tr className='flex gap-1'>
                        {
                            details?.compareWith?.list.map((singleData, index) => (<td className={`w-[162px] bg-[#FFFFFF] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}`}>
                                <div className={`flex gap-1  items-center 
                                     ${breakpoint>1250 && 'text-[14px]'}
                                     ${breakpoint<=1250 && 'text-[12px]'}
                                    `}> {}
                                    <p className=''>{singleData?.specs?.Engine}</p>
                                </div>
                            </td>))
                        }
                    
                    </tr>
                    </>
                    }

                   {details?.compareWith?.list[0].specs?.["Fuel Type"] &&
                   <>
                   <tr className='bg-[#D9D9D9] bg-opacity-20 flex gap-1'>
                        {
                           details?.compareWith?.list.map((singleData, index) => (<td className={`text-[#24272C] font-medium w-[162px] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}
                            ${breakpoint>1250 && 'text-[1rem]'}
                            ${breakpoint<=1250 && 'text-[.875rem]'}
                           `}>
                                {index === 0 ? "Fuel Type" : ""}
                            </td>))
                        }

                    </tr>
                    <tr className='flex gap-1'>
                        {
                            details?.compareWith?.list.map((singleData, index) => (<td className={`w-[162px] bg-[#FFFFFF] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}`}>
                                <div className={`flex gap-1  items-center 
                                     ${breakpoint>1250 && 'text-[14px]'}
                                     ${breakpoint<=1250 && 'text-[12px]'}
                                    `}> {}
                                    <p className=''>{singleData?.specs?.["Fuel Type"]}</p>
                                </div>
                            </td>))
                        }
                    </tr>
                    </>
                    }
                   {details?.compareWith?.list[0].specs?.["Battery Capacity"] &&
                   <>
                   <tr className='bg-[#D9D9D9] bg-opacity-20 flex gap-1'>
                        {
                           details?.compareWith?.list.map((singleData, index) => (<td className={`text-[#24272C] font-medium w-[162px] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}
                            ${breakpoint>1250 && 'text-[1rem]'}
                            ${breakpoint<=1250 && 'text-[.875rem]'}
                           `}>
                                {index === 0 ? "Battery Capacity" : ""}
                            </td>))
                        }

                    </tr>
                    <tr className='flex gap-1'>
                        {
                            details?.compareWith?.list.map((singleData, index) => (<td className={`w-[162px] bg-[#FFFFFF] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}`}>
                                <div className={`flex gap-1  items-center 
                                     ${breakpoint>1250 && 'text-[14px]'}
                                     ${breakpoint<=1250 && 'text-[12px]'}
                                    `}> {}
                                    <p className=''>{singleData?.specs?.["Battery Capacity"]}</p>
                                </div>
                            </td>))
                        }
                    </tr>
                    </>
                    }

                   {details?.compareWith?.list[0].specs?.Range &&
                   <>
                   <tr className='bg-[#D9D9D9] bg-opacity-20 flex gap-1'>
                        {
                            details?.compareWith?.list.map((singleData, index) => (<td className={`text-[#24272C] font-medium w-[162px] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}
                             ${breakpoint>1250 && 'text-[1rem]'}
                            ${breakpoint<=1250 && 'text-[.875rem]'}
                            `}>
                                {index === 0 ? "Range" : ""}
                            </td>))
                        }

                    </tr>
                    <tr className='flex gap-1'>
                        {
                            details?.compareWith?.list.map((singleData, index) => (<td className={`w-[162px] bg-[#FFFFFF] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}`}>
                                <div className={`flex gap-1  items-center 
                                     ${breakpoint>1250 && 'text-[14px]'}
                                     ${breakpoint<=1250 && 'text-[12px]'}
                                    `}> {}
                                    <p className=''>{singleData.specs.Range}</p>
                                </div>
                            </td>))
                        }
                    </tr>
                    </>
                    }

                    {details?.compareWith?.list[0].specs?.["Charging Time"] &&
                   <>
                   <tr className='bg-[#D9D9D9] bg-opacity-20 flex gap-1'>
                        {
                            details?.compareWith?.list.map((singleData, index) => (<td className={`text-[#24272C] font-medium w-[162px] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}
                             ${breakpoint>1250 && 'text-[1rem]'}
                            ${breakpoint<=1250 && 'text-[.875rem]'}
                            `}>
                                {index === 0 ? "Charging Time" : ""}
                            </td>))
                        }

                    </tr>
                    <tr className='flex gap-1'>
                        {
                            details?.compareWith?.list.map((singleData, index) => (<td className={`w-[162px] bg-[#FFFFFF] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}`}>
                                <div className={`flex gap-1  items-center 
                                     ${breakpoint>1250 && 'text-[14px]'}
                                     ${breakpoint<=1250 && 'text-[12px]'}
                                    `}> {}
                                    <p className=''>{singleData.specs?.['Charging Time']}</p>
                                </div>
                            </td>))
                        }
                    </tr>
                    </>
                    }


                   {details?.compareWith?.list[0].specs?.Power &&
                   <>
                   <tr className='bg-[#D9D9D9] bg-opacity-20 flex gap-1'>
                        {
                            details?.compareWith?.list.map((singleData, index) => (<td className={`text-[#24272C] font-medium w-[162px] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}
                             ${breakpoint>1250 && 'text-[1rem]'}
                            ${breakpoint<=1250 && 'text-[.875rem]'}
                            `}>
                                {index === 0 ? "Power" : ""}
                            </td>))
                        }

                    </tr>
                    <tr className='flex gap-1'>
                        {
                            details?.compareWith?.list.map((singleData, index) => (<td className={`w-[162px] bg-[#FFFFFF] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}`}>
                                <div className={`flex gap-1  items-center 
                                     ${breakpoint>1250 && 'text-[14px]'}
                                     ${breakpoint<=1250 && 'text-[12px]'}
                                    `}> {}
                                    <p className=''>{singleData.specs.Power}</p>
                                </div>
                            </td>))
                        }
                    </tr>
                    </>
                    }
                    
                   {details?.compareWith?.list[0].specs?.Mileage &&
                   <>
                   <tr className='bg-[#D9D9D9] bg-opacity-20 flex gap-1'>
                        {
                            details?.compareWith?.list.map((singleData, index) => (<td className={`text-[#24272C] font-medium w-[162px] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}
                             ${breakpoint>1250 && 'text-[1rem]'}
                            ${breakpoint<=1250 && 'text-[.875rem]'}
                            `}>
                                {index === 0 ? "Mileage" : ""}
                            </td>))
                        }

                    </tr>
                    <tr className='flex gap-1'>
                        {
                            details?.compareWith?.list.map((singleData, index) => (<td className={`w-[162px] bg-[#FFFFFF] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}`}>
                                <div className={`flex gap-1  items-center 
                                     ${breakpoint>1250 && 'text-[14px]'}
                                     ${breakpoint<=1250 && 'text-[12px]'}
                                    `}> {}
                                    <p className=''>{singleData.specs.Mileage}</p>
                                </div>
                            </td>))
                        }
                    </tr>
                    </>
                    }

                   {details?.compareWith?.list[0].specs?.["Boot Space"] &&
                   <>
                   <tr className='bg-[#D9D9D9] bg-opacity-20 flex gap-1'>
                        {
                            details?.compareWith?.list.map((singleData, index) => (<td className={`text-[#24272C] font-medium w-[162px] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}
                             ${breakpoint>1250 && 'text-[1rem]'}
                            ${breakpoint<=1250 && 'text-[.875rem]'}
                            `}>
                                {index === 0 ? "Boot Space" : ""}
                            </td>))
                        }

                    </tr>
                    <tr className='flex gap-1'>
                        {
                            details?.compareWith?.list.map((singleData, index) => (<td className={`w-[162px] bg-[#FFFFFF] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}`}>
                                <div className={`flex gap-1  items-center 
                                     ${breakpoint>1250 && 'text-[14px]'}
                                     ${breakpoint<=1250 && 'text-[12px]'}
                                    `}> {}
                                    <p className=''>{singleData.specs?.['Boot Space']}</p>
                                </div>
                            </td>))
                        }
                    </tr>
                    </>
                    }
                    
                   {details?.compareWith?.list[0].specs?.Airbags &&
                   <>
                   <tr className='bg-[#D9D9D9] bg-opacity-20 flex gap-1'>
                        {
                            details?.compareWith?.list.map((singleData, index) => (<td className={`text-[#24272C] font-medium w-[162px] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}
                             ${breakpoint>1250 && 'text-[1rem]'}
                            ${breakpoint<=1250 && 'text-[.875rem]'}
                            `}>
                                {index === 0 ? "Air Bags" : ""}
                            </td>))
                        }

                    </tr>
                    <tr className='flex gap-1'>
                        {
                            details?.compareWith?.list.map((singleData, index) => (<td className={`w-[162px] bg-[#FFFFFF] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}`}>
                                <div className={`flex gap-1  items-center 
                                     ${breakpoint>1250 && 'text-[14px]'}
                                     ${breakpoint<=1250 && 'text-[12px]'}
                                    `}> {}
                                    <p className=''>{singleData.specs.Airbags}</p>
                                </div>
                            </td>))
                        }
                    </tr>
                    </>
                    }

                    
                    <tr className='flex gap-1'>
                        {
                            details?.compareWith?.list.map((singleData, index) => (<td className={`w-[162px] bg-[#FFFFFF] ${index===0?'shadow-[2px_0px_2px_rgba(36,39,44,0.2)] left-0 sticky':''}
                             ${breakpoint>1250 && 'text-[1rem]'}
                            ${breakpoint<=1250 && 'text-[.875rem]'}
                            `}>
                                <div className={`flex gap-1  items-center 
                                     ${breakpoint>1250 && 'text-[14px]'}
                                     ${breakpoint<=1250 && 'text-[12px]'}
                                    `}> {}
                                    <p className=''>{index===0 ? "Currently Viewing": singleData.ctaText}</p>
                                </div>
                            </td>))
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CompareTable