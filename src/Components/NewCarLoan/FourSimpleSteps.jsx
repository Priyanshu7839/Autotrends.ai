import React from 'react'
import checkEligibility from "../../Asset/NewCarLoan/check-eligibilty-svg.svg"
import uploadDoc from "../../Asset/NewCarLoan/upload-documents-svg.svg"
import loanOffer from "../../Asset/NewCarLoan/loan-offer-svg.svg"
import leaveTheRest from "../../Asset/NewCarLoan/leave-the-rest-svg.svg"


const FourSimpleSteps = () => {
    return (
        <>
            <h2 className="text-[28px] md:text-[36px] font-semibold mb-8 text-center ">
                Avail loan in  <span className="text-[#57BE88] ">4 simple steps</span>
            </h2>
            <div className='flex max-md:flex-wrap gap-[10px] md:gap-4 justify-center'>

                <div className="relative overflow-clip w-[180px] md:w-[268px] max-md:h-[230px] bg-[white] rounded-[20px] p-[16px] md:py-[20px] shadow-md border-[1px] border-[#DFE7FF] flex flex-col gap-[25px] items-center ">
                    <div className="text-[14px]   flex justify-center items-center">
                        <img src={checkEligibility} alt="" className='w-[60px] h-[60px]' />
                    </div>

                    <h3 className="text-[16px] md:text-[21px] font-semibold text-center  text-[#24272C]">
                        Check eligibility
                    </h3>
                    <p className="text-center text-[10px] text-[#333846]">
                        Fill your details on your platform
                    </p>
                    <div className='absolute top-0 left-0 bg-[#DFE7FF] h-[40px] w-[40px] md:h-[56px] md:w-[56px] rounded-br-[24px] md:rounded-br-[30px] text-[16px] md:text-[20px] text-[#333846] flex justify-center items-center '>
                        1
                    </div>
                </div>
                <div className="relative overflow-clip w-[180px] md:w-[268px] max-md:h-[230px] bg-[white] rounded-[20px] p-[16px] md:py-[20px] shadow-md border-[1px] border-[#DFE7FF] flex flex-col gap-[25px] items-center ">
                    <div className="text-[14px]   flex justify-center items-center">
                        <img src={loanOffer} alt="" className='w-[60px] h-[60px]' />
                    </div>

                    <h3 className="text-[16px] md:text-[21px] font-semibold text-center  text-[#24272C]">
                        Choose your loan offer
                    </h3>
                    <p className="text-center text-[10px] text-[#333846]">
                        Choose from available offers
                    </p>
                    <div className='absolute top-0 left-0 bg-[#DFE7FF] h-[40px] w-[40px] md:h-[56px] md:w-[56px] rounded-br-[24px] md:rounded-br-[30px] text-[16px] md:text-[20px] text-[#333846] flex justify-center items-center '>
                        2
                    </div>
                </div>
                <div className="relative overflow-clip w-[180px] md:w-[268px] max-md:h-[230px] bg-[white] rounded-[20px] p-[16px] md:py-[20px] shadow-md border-[1px] border-[#DFE7FF] flex flex-col gap-[25px] items-center ">
                    <div className="text-[14px]   flex justify-center items-center">
                        <img src={uploadDoc} alt="" className='w-[60px] h-[60px]' />
                    </div>

                    <h3 className="text-[16px] md:text-[21px] font-semibold text-center  text-[#24272C]">
                        Upload documents
                    </h3>
                    <p className="text-center text-[10px] text-[#333846]">
                        Verify your identity
                    </p>
                    <div className='absolute top-0 left-0 bg-[#DFE7FF] h-[40px] w-[40px] md:h-[56px] md:w-[56px] rounded-br-[24px] md:rounded-br-[30px] text-[16px] md:text-[20px] text-[#333846] flex justify-center items-center '>
                        3
                    </div>
                </div>
                <div className="relative overflow-clip w-[180px] md:w-[268px] max-md:h-[230px] bg-[white] rounded-[20px] p-[16px] md:py-[20px] shadow-md border-[1px] border-[#DFE7FF] flex flex-col gap-[25px] items-center ">
                    <div className="text-[14px]   flex justify-center items-center">
                        <img src={leaveTheRest} alt="" className='w-[60px] h-[60px]' />
                    </div>

                    <h3 className="text-[16px] md:text-[21px] font-semibold text-center  text-[#24272C]">
                        Leave the rest to us
                    </h3>
                    <p className="text-center text-[10px] text-[#333846]">
                        Loan disbursal process initiated
                    </p>
                    <div className='absolute top-0 left-0 bg-[#DFE7FF] h-[40px] w-[40px] md:h-[56px] md:w-[56px] rounded-br-[24px] md:rounded-br-[30px] text-[16px] md:text-[20px] text-[#333846] flex justify-center items-center '>
                        4
                    </div>
                </div>

            </div>
        </>
    )
}

export default FourSimpleSteps