import React from 'react'
import { useSelector } from 'react-redux'
import { useScreenResizeValue } from '../../ScreenSizeFunction';



const MileageSection2_SubSectionLeft_Section1 = () => {

    const details = useSelector((state)=>state.CarDetails);
    const breakpoint = useScreenResizeValue();

    return (
        <div className='w-full px-[24px] py-[20px] border-[1px] border-[#24272c1a]  rounded-[16px] flex flex-col gap-[5px] font-1'>
            <h1 className={`font-medium  text-color-9
                ${breakpoint>1250 && 'text-[23px]'}
                ${breakpoint<=1250 && 'text-[19px]'}
                `}>{details?.overView?.name} Mileage</h1>
            <p className='text-[.8125rem] text-color-9-70'>{details?.mileageTable?.description}
            </p>
            <div className="w-full border-[1px] border-[rgba(36,39,44,0.1)] rounded-[16px]  pt-[20px] pb-[10px] px-[2rem]">
                <table className="table-auto w-full text-center">
                    <thead className="bg-[#FAFAFA]">
                        <tr className={`font-1 font-bold text-color-9-50
                            ${breakpoint>1250 && 'text-[.875rem]'}
                            ${breakpoint<=1250 && 'text-[.75rem]'}
                            `}>
                            {details?.mileageTable?.heading?.map((heading) => (
                                <th key={heading} className="py-2">{heading.text}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white w-full">
                      
                            {
                                details?.mileageTable?.childs?.map((mileage,index)=>{
                                    return(
                                        <tr key={index}  className={`w-full  font-1  text-color-9-70 ${index <  details?.mileageTable?.childs?.length-1 ? "border-b-2 border-[rgba(36,39,44,0.1)]" : ""
                                        }
                                        ${breakpoint>1250 && 'text-[.875rem]'}
                            ${breakpoint<=1250 && 'text-[.75rem]'}
                                        `}>
                                            {
                                                mileage.map((mile,i)=>{
                                                    return(
                                                        <td key={i} className={`px-[1rem] py-[.5rem]`}>{mile.text}</td>
                                                    )
                                                })
                                            }
                                        </tr>
                                    )
                                })
                            }
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default MileageSection2_SubSectionLeft_Section1