import React, { useEffect } from 'react'
import LendingPartnersData from '../../MockData/NewCarLoan/LendingPartnersData'
import { useScreenResizeValue } from '../../ScreenSizeFunction'

const InterestRateComparision = () => {
    const screenSize = useScreenResizeValue();
    let isMobile = false;
    let maxComparision ;
    useEffect(() => {
        if (screenSize < 800) {
            maxComparision = LendingPartnersData.length+1;
            isMobile = true;
        } else {
            maxComparision = 6;
        }
        console.log("maxComparision: " + maxComparision);
        console.log("", isMobile)
    }, [])
    return (
        <div>
            <h2 className="text-[28px] md:text-[35px] font-semibold mb-8 text-center ">
                New car loan  <span className="text-[#57BE88] ">interest rate comparison</span>
            </h2>

            <div className="flex flex-col">
                <div className="flex w-full ">
                    <div className="md:w-1/2 px-[10px] text-[14px] md:text-[16px]">
                        <div className="w-full flex flex-col gap-3 ">
                            <div>
                                <div className='grid grid-cols-3 place-content-center border border-[#E8ECEF] rounded-md drop-shadow'>
                                    <div className="text-left p-2 ">Lender</div>
                                    <div className="text-left p-2 ">Interest rate</div>
                                    <div className="text-left p-2 ">Processing fee*</div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3'>
                                {LendingPartnersData.slice(0, 6).map((partner) => (
                                    <div key={partner.id} className=" h-[88px] grid grid-cols-3 place-content-center max-md:place-items-center border-[1px] border-[#E8ECEF] rounded-md shadow-sm drop-shadow-sm ">
                                        <div className="p-1">
                                            <div className="flex items-center ">
                                                <img src={partner.image} alt={partner.lenderName} className="md:w-[115px] h-auto" />
                                            </div>
                                        </div>
                                        <div className="p-1 flex items-center text-[14px]">Starting from {partner.interesdivate}%</div>
                                        <div className="p-1 flex items-center text-[14px]">{partner.processingFee}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={`max-md:hidden md:w-1/2 px-[10px] text-[14px] md:text-[16px]`}>
                        <div className="w-full flex flex-col gap-3 ">
                            <div>
                                <div className='grid grid-cols-3 place-content-center border border-[#E8ECEF] rounded-md drop-shadow'>
                                    <div className="text-left p-2 ">Lender</div>
                                    <div className="text-left p-2 ">Interest rate</div>
                                    <div className="text-left p-2 ">Processing fee*</div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3'>
                                {LendingPartnersData.slice(6, 12).map((partner) => (
                                    <div key={partner.id} className=" h-[88px] grid grid-cols-3 place-content-center border-[1px] border-[#E8ECEF] rounded-md shadow-sm drop-shadow-sm">
                                        <div className="p-1">
                                            <div className="flex items-center">
                                                <img src={partner.image} alt={partner.lenderName} className="md:w-[115px] h-auto" />
                                            </div>
                                        </div>
                                        <div className="p-1 flex items-center text-[14px]">Starting from {partner.interesdivate}%</div>
                                        <div className="p-1 flex items-center text-[14px]">{partner.processingFee}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InterestRateComparision