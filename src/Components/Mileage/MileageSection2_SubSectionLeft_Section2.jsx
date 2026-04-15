import React, { useState } from 'react'
import { ViewallvariantIconSvg } from '../../assets/Images/SVG';
import { useSelector } from 'react-redux';
import { useScreenResizeValue } from '../../ScreenSizeFunction';

const MileageSection2_SubSectionLeft_Section2 = () => {

    const MileageVariantsHeading = ["All", "Diesel", "Petrol"];
    const [MileageVariantHeading, SetMileageVariantHeading] = useState("All")
    const MileageVariantsSubHeading = ["All", "Automatic", "Manual"];
    const [MileageVariantSubHeading, SetMileageVariantSubHeading] = useState("All")

    const details = useSelector((state)=>state.CarDetails);
const breakpoint = useScreenResizeValue();
    return (
        <div className='w-full pt-[20px] border-[1px] border-[#23242c1a]  rounded-[16px] flex flex-col font-1 overflow-hidden'>
            <div className='flex flex-col gap-[20px]'>
                <h1 className={`font-medium text-[1.4375rem] text-color-9 px-[24px]
                     ${breakpoint>1250 && 'text-[23px]'}
         ${breakpoint<=1250 && 'text-[19px]'}
                    `}>{details?.overView?.name} Mileage (Variants)</h1>

                <div className='flex flex-col'>
                    <div className='relative flex px-[24px] py-[10px] items-center justify-start gap-[36px] border-b-[1px] border-[rgba(36,39,44,0.15)] '>
                        {MileageVariantsHeading.map((heading, index) => {
                            return (
                                <div key={index} className='flex flex-col cursor-pointer relative'
                                    onClick={() => { SetMileageVariantHeading(heading) }}
                                >
                                    <h1 className={`${MileageVariantHeading === heading ? "font-medium text-color-9" : "text-color-9-70 "}
                                     ${breakpoint>1250 && 'text-[.875]'}
         ${breakpoint<=1250 && 'text-[.75rem]'}
                                    `}>{heading}</h1>
                                    <span className={` h-[3px] bg-[#0b66fa] absolute bottom-[-10px]  ${MileageVariantHeading === heading ? 'w-full' : 'w-0'} transition-all duration-200`}></span>
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex px-[24px] py-[10px] items-center justify-start gap-[36px] '>
                        {MileageVariantsSubHeading.map((subheading, index) => {
                            return (
                                <div key={index} className='flex items-center justify-center gap-[10px] cursor-pointer relative'
                                    onClick={() => { SetMileageVariantSubHeading(subheading) }}
                                >
                                    <span className={`h-[18px] w-[18px] border-[1px] border-[#0B66FA] rounded-full flex items-center justify-center`}>
                                        <span className={`${MileageVariantSubHeading === subheading ? 'w-[8px] h-[8px] ' : 'w-[0px] h-[0px]'} rounded-full bg-[#0B66FA] transition-all duration-200`}></span>
                                    </span>
                                    <h1 className={`${MileageVariantSubHeading === subheading ? "font-medium text-color-9" : "text-color-9-70 "}
                                     ${breakpoint>1250 && 'text-[.875rem]'}
         ${breakpoint<=1250 && 'text-[.75rem]'}
                                    `}>{subheading}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>

            <table className="table-auto w-full text-center">
                <thead className="bg-[#FAFAFA] w-full">
                    {breakpoint>900 &&
                        <tr className="font-1 font-bold text-sm text-color-9-50">
                        {["Variants", "Mileage", "", "Compare"].map((heading) => (
                            <th key={heading} className="py-2 px-[1rem] text-left">{heading}</th>
                        ))}
                    </tr>}
                    {breakpoint<=900 &&
                        <tr className="font-1 font-bold text-sm text-color-9-50">
                        {["Variants", "Mileage"].map((heading) => (
                            <th key={heading} className="py-2 px-[1rem] text-left w-full ">{heading}</th>
                        ))}
                    </tr>}
                </thead>
                <tbody className="bg-white font-1">

                {details?.variantTable?.variantList?.map((variant)=>{
                        if((variant.subText.toLowerCase().includes(MileageVariantHeading !== 'All' ? MileageVariantHeading.toLowerCase():'')&&variant.subText.toLowerCase().includes(MileageVariantSubHeading !== 'All' ? MileageVariantSubHeading.toLowerCase():'') )){
                            return(
                          

                            <tr className={`font-1  text-color-9-70  border-b-[1px] border-[rgba(36,39,44,0.1)]`} key={variant.centralId}>

                            <td className={`p-[1rem]`}>
                            <div className='col-span-3 flex flex-col items-start justify-start text-left gap-[6px] w-[75%] '>
                                    <p className='text-[18px] text-[#24272C] font-[500] flex flex-col items-start'>{variant.name} 
                                     <p className='text-[12px] text-[#24272C] text-opacity-70 '>{variant.tag &&(variant.tag)}</p>
                                    </p>
                                    
                                    <div>
                                    <p className='text-[12px] text-[#24272C] text-opacity-70 '>{variant.subText}</p>
                                    <p className='text-[12px] text-[#24272C] '>{variant.waitingPeriod}</p>
                                    </div>
                                   {breakpoint<=900 && <button className='flex items-center justify-center  rounded-[8px] '>
                                    <h1 className='text-color-7 font-medium text-[.875rem] underline'>Check December Offers</h1>
                                </button>}
                                    
                                </div>
                            </td>
                            <td className={`px-[1rem] py-[.5rem]  `}>
                                <h1 className='font-medium text-color-9 text-[.9375rem]'>{variant.subText.split(',')[3]}</h1>
                                <div className='flex items-center gap-[.5rem]'>
                                <input type="checkbox" name="" id="" />
                                <h1 className={`text-color-9-70 font-2-book 
                                    ${breakpoint>1250&&'text-[.875rem]'}
                                    ${breakpoint<=1250&&'text-[.75rem]'}
                                    `}>Compare</h1>
                                </div>
                                
                            </td>
                           {breakpoint>900 &&
                            <td className={`px-[1rem] py-[.5rem]  `}>
                                <button className='flex items-center justify-center border-[1px] border-[#0B66FA] px-[1rem] py-[.5rem] rounded-[8px] min-w-[195px]'>
                                    <h1 className='text-color-7 font-medium text-[.875rem] underline'>Check December Offers</h1>
                                </button>
                            </td>}
                          {breakpoint>900 &&
                            <td className={`px-[1rem] py-[.5rem] `}>
                                <input type="checkbox" name="" id="" />
                            </td>}

                            </tr>
                            )
                        }
                       })
                       
                    }

                    

                    <div className='px-[20px] py-[15px] flex gap-[10px] items-center '>
                        <h1 className='font-semibold text-[.875rem] underline text-color-7'>View All Variants</h1>
                        <ViewallvariantIconSvg/>
                        </div>

                </tbody>
            </table>


        </div>
    )
}

export default MileageSection2_SubSectionLeft_Section2