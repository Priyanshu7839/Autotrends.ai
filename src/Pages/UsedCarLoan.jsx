import React, { useState } from "react";
import featureImage from "../Asset/UsedCarLoan/banner-featuer.png"
import attractiveInterest from "../Asset/UsedCarLoan/loan-.svg"
import loanUpto from "../Asset/UsedCarLoan/loan-upto-100.svg"
import quickApproval from "../Asset/UsedCarLoan/quick-approval.svg"
import rcTransfer from "../Asset/UsedCarLoan/rc-transfer.svg"

import selectOffer from "../Asset/UsedCarLoan/select-offer.svg"
import submitDetails from "../Asset/UsedCarLoan/submit-your-details.svg"
import completeKYC from "../Asset/UsedCarLoan/complete-kyc.svg"
import loanDisbursed from "../Asset/UsedCarLoan/get-loan-disbursed.svg"

import loanOptions from "../MockData/loanOptions"
import straightGD from "../Asset/LoanAgainstCar/straight-green-gd.svg"
import laonEligibilityBG from "../Asset/UsedCarLoan/loan-eligibility-bg.png"
import arrowRight from "../Asset/right-arrow-green.svg"
import docRequiredBG from "../Asset/UsedCarLoan/doc-required-bg.png"
import LendingPartners from "../Components/NewCarLoan/LendingPartners";
import LendingPartnersData from "../MockData/NewCarLoan/LendingPartnersData";

import usedCarSVG from "../Asset/UsedCarLoan/used-car-purchase.svg"
import topUpSVG from "../Asset/UsedCarLoan/top-up-svg.svg"
import refinanceSVG from "../Asset/UsedCarLoan/refinance.svg"
import { ContactUs } from "../components";

const UsedCarLoan = () => {
    const [minIndex, setMinIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(4);

    return (
        <div className=" flex flex-col justify-center items-center w-full">
            <div className="w-full  lg:px-[120px] relative max-md:flex max-md:flex-col-reverse max-md:gap-[40px]">
                <img src={featureImage} alt="" className='md:h-[460px] w-full md:absolute md:z-[-10] md:right-0 ' />

                <div className="flex flex-col gap-4 md:w-1/4 md:mt-[120px] max-md:px-[40px] ">
                    <div className="max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
                        <h2 className=" text-[24px]  md:text-[42px] font-bold ">Used Car Loan</h2>
                        <p className="text-[18px] md:text-[24px] font-semibold">
                            Fast. <span className="text-[#0B66FA]">Secure.</span>{" "}
                            Easy
                        </p>
                        <p className=" text-[14px] md:text-[16px] font-normal text-[#24272C] max-md:text-center">
                            Get used car loan in few minutes with our
                            100% paperless process
                        </p>
                        <button className="mt-[20px] text-[white] font-semibold text-[16px] md:text-[20px] bg-[#0B66FA] rounded-full px-[50px] py-[14px]">
                            Apply Now <span className="font-bold">{">"}</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-[80px] justify-center items-center  text-[#24272C] w-full ">

                {/* benefits and featues */}
                <div className=" w-full ">
                    <div className="bg-[white] py-10 px-[10px] md:px-[160px] relative z-[0]">
                        <div className='bg-[#EBF8FF] w-full h-[460px] md:h-[300px] absolute top-0 left-0  z-[-10] '></div>
                        <div className=" flex flex-col ga[p-[15px] md:gap-[30px] md:px-4 justify-center items-center">
                            <p className="text-[28px] md:text-[35px]  font-semibold mb-8 w-full text-center ">
                                Features and <span className="text-[#57BE88] ">Benefits</span>
                            </p>
                            <div className="flex md:gap-6 gap-[10px]  max-md:flex-wrap justify-center w-full ">
                                {/* Feature Card 1 */}
                                <div className="w-[180px] md:w-[268px] max-md:h-[230px] bg-[white] rounded-[20px] p-[16px] md:p-[20px] shadow-md border-[1px] border-[#DFE7FF] flex flex-col max-md:gap-4 items-center">
                                    <div className=" mb-4 rounded-full bg-[white] flex justify-center items-center">
                                        <img src={loanUpto} alt="" className='w-[148px] md:w-[184px] h-[74px] md:h-[92px]' />
                                    </div>

                                    <h3 className="text-[14px] md:text-[16px] md:text-[21px] font-semibold text-center mb-2 text-[#24272C]">
                                        Upto 100% loan
                                    </h3>
                                    <p className="text-center text-[10px] md:text-[14px] text-[#24272C]">
                                        Upto 100% on-road funding
                                    </p>
                                </div>

                                {/* Feature Card 2 */}
                                <div className="w-[180px] md:w-[268px] max-md:h-[230px] bg-[white] rounded-[20px] p-[16px] md:p-[20px] shadow-md border-[1px] border-[#DFE7FF] flex flex-col max-md:gap-4 items-center">
                                    <div className=" mb-4 rounded-full bg-[white] flex justify-center items-center">
                                        <img src={rcTransfer} alt="" className='w-[148px] md:w-[184px] h-[74px] md:h-[92px]' />
                                    </div>

                                    <h3 className="text-[14px] md:text-[16px] md:text-[21px] font-semibold text-center mb-2 text-[#24272C]">
                                    RC Transfer
                                    </h3>
                                    <p className="text-center text-[10px] md:text-[14px] text-[#24272C]">
                                    Hassle free RC Transfer and
                                    end-to-end Support
                                    </p>
                                </div>
                               

                                {/* Feature Card 3 */}
                                <div className="w-[180px] md:w-[268px] max-md:h-[230px] bg-[white] rounded-[20px] p-[16px] md:p-[20px] shadow-md border-[1px] border-[#DFE7FF] flex flex-col max-md:gap-4 items-center">
                                    <div className=" mb-4 rounded-full bg-[white] flex justify-center items-center">
                                        <img src={attractiveInterest} alt="" className='w-[148px] md:w-[184px] h-[74px] md:h-[92px]' />
                                    </div>

                                    <h3 className="text-[14px] md:text-[16px] md:text-[21px] font-semibold text-center mb-2 text-[#24272C]">
                                    Attractive car loan

                                    </h3>
                                    <p className="text-center text-[10px] md:text-[14px] text-[#24272C]">
                                    Comparable EMIs with multiple
                                    offers
                                    </p>
                                </div>
                                {/* Feature Card 4 */}
                               
                                <div className="w-[180px] md:w-[268px] max-md:h-[230px] bg-[white] rounded-[20px] p-[16px] md:p-[20px] shadow-md border-[1px] border-[#DFE7FF] flex flex-col max-md:gap-4 items-center">
                                    <div className=" mb-4 rounded-full bg-[white] flex justify-center items-center">
                                        <img src={quickApproval} alt="" className='w-[148px] md:w-[184px] h-[74px] md:h-[92px]' />
                                    </div>

                                    <h3 className="text-[14px] md:text-[16px] md:text-[21px] font-semibold text-center mb-2 text-[#24272C]">
                                    Quick Approvals

                                    </h3>
                                    <p className="text-center text-[10px] md:text-[14px] text-[#24272C]">
                                    Instant eligibility check and
                                        completely digital process
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                {/* Quick Apply */}
                <div className="w-full mt-[50px] md:mt-[82px]">
                    <h2 className="text-[28px] md:text-[35px] font-semibold mb-8 text-center max-md:flex max-md:flex-col leading-[120%]">
                        Avail loan in  <span className="text-[#57BE88] ">4 simple steps</span>
                    </h2>
                    <div className='flex max-md:flex-wrap gap-[10px] md:gap-4 justify-center'>
                        <div className="relative overflow-clip w-[180px] md:w-[268px] max-md:h-[230px] bg-[white] rounded-[20px] p-[16px] md:py-[20px] shadow-md border-[1px] border-[#DFE7FF] flex flex-col gap-[25px] items-center ">
                            <div className="text-[14px]   flex justify-center items-center">
                                <img src={submitDetails} alt="" className='w-[60px] h-[60px]' />
                            </div>

                            <h3 className="text-[16px] md:text-[21px] font-semibold text-center  text-[#24272C]">
                                Submit your
                                details
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
                                <img src={selectOffer} alt="" className='w-[60px] h-[60px]' />
                            </div>

                            <h3 className="text-[16px] md:text-[21px] font-semibold text-center  text-[#24272C]">
                            Select your loan
                            offer
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
                                <img src={completeKYC} alt="" className='w-[60px] h-[60px]' />
                            </div>

                            <h3 className="text-[16px] md:text-[21px] font-semibold text-center  text-[#24272C]">
                            Complete instant
                            V-KYC online
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
                                <img src={loanDisbursed} alt="" className='w-[60px] h-[60px]' />
                            </div>

                            <h3 className="text-[16px] md:text-[21px] font-semibold text-center  text-[#24272C]">
                            Get your loan
                            disbursed
                            </h3>
                            <p className="text-center text-[10px] text-[#333846]">
                            Loan disbursal process initiated
                            </p>
                            <div className='absolute top-0 left-0 bg-[#DFE7FF] h-[40px] w-[40px] md:h-[56px] md:w-[56px] rounded-br-[24px] md:rounded-br-[30px] text-[16px] md:text-[20px] text-[#333846] flex justify-center items-center '>
                                4
                            </div>
                        </div>

                    </div>
                </div>
                {/* loan options */}
                <div className='w-full mt-[20px] md:px-[120px]'>
                    <div className="py-10 bg-[white] px-[15px] md:px-6">
                        <div className=" md:px-4">
                            <h2 className=" text-[24px] md:text-2xl mb-6 font-semibold ">
                                <span className='text-[#46BE88]'>Discover</span> our other product or other loan options
                            </h2>
                            <div className="flex flex-wrap gap-y-[13px] gap-[12px] md:gap-[18px] max-md:justify-center">
                                {loanOptions.map((loanOption, index) => (
                                    <p
                                        key={index}
                                        className={`text-[14px] font-medium leading-[21px] py-[12px] px-[21px] rounded-[50px]  border-[1px]  text-[#24272C] `}
                                        style={{ borderColor: loanOption.color, }}
                                    >
                                        {loanOption.text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div>

                </div>
                {/* used car loan eligibility */}
                <div className='w-full md:px-[120px] mt-[50px]'>
                    <div className='mb-4 max-md:px-[15px] '>
                        <p className="text-[28px] md:text-[36px] font-bold text-[#24272C] text-start ">Used Car <span className='text-[#0B66FA]'>Loan Eligibility</span> </p>
                        <p className='text-[14px] text-[#333846]'>You are eligible to avail a car loan if you meet the below criteria</p>
                    </div>

                    <div className='w-full  flex md:flex-row flex-col gap-8 bg-[#F5F8FE] md:pt-[60px] md:pb-[30px] px-[20px] py-[35px] md:px-[55px] relative'>
                        <div className='lg:w-1/3 lg:mt-[15px] flex flex-col  gap-3 text-[14px] text-[#333846]'>
                            <p className="text-[18px] md:text-[22px] text-[#333846] font-semibold">For Salaried Individuals</p>
                            <div className='flex gap-2 text-[12px] md:text-[16px]'>
                                <img src={straightGD} alt="" />
                                <p className=" ">Individuals who are at least 21 years old at
                                    the time of loan application and no older
                                    than 60 at the conclusion of the loan term</p>
                            </div>
                            <div className='flex gap-2 text-[12px] md:text-[16px]'>
                                <img src={straightGD} alt="" />
                                <p className="  ">Individuals who have worked for at least
                                    two years, including at least one year with
                                    their present employer</p>
                            </div>

                        </div>
                        <div className='lg:w-1/3 lg:mt-[15px] flex flex-col  gap-3 text-[14px] text-[#333846]'>
                            <p className="text-[18px] md:text-[22px] text-[#333846] font-semibold">For Self-employed Individuals</p>
                            <div className='flex gap-2 text-[12px] md:text-[16px]'>
                                <img src={straightGD} alt="" />
                                <p className=" ">Individuals who are at least 25 years old at
                                    the time of application and no older than 65
                                    at the conclusion of the loan term are
                                    eligible.</p>
                            </div>
                            <div className='flex gap-2 text-[12px] md:text-[16px]'>
                                <img src={straightGD} alt="" />
                                <p className="  ">Those who have been in operation for at
                                    least two years</p>
                            </div>

                        </div>
                        <div className='absolute right-4 -top-[45%] max-md:hidden'>
                            <img src={laonEligibilityBG} alt="" className='h-[406px] w-[392px]' />
                        </div>
                    </div>
                </div>

                <div className='w-full mt-[120px] md:px-[120px] mb-[90px]'>
                    <div className="relative px-[20px]">
                        <img src={docRequiredBG} alt="" className="h-[450px] max-md:hidden" />

                        <div className="md:absolute md:top-[200px] md:left-[18%] md:w-3/4">
                            <div className='mb-4'>
                                <p className="text-[28px] md:text-[36px] font-bold text-[#24272C] text-start "><span className='text-[#0B66FA]'>Documents Required </span>for second hand car loan</p>
                            </div>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                                <div>
                                    <p className="text-[24px] font-bold text-[#24272C] text-start mb-2 md:mb-4">For Salaried Individuals</p>
                                    <div className='mt-[10px] md:mt-[15px] flex flex-col  gap-2 md:gap-3 text-[14px] text-[#333846]'>
                                        <div className='flex gap-2'>
                                            <img src={arrowRight} alt="" />
                                            <p className=" ">KYC documents (Valid Photo ID Proofs)</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <img src={arrowRight} alt="" />
                                            <p className="  ">PAN Card</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <img src={arrowRight} alt="" />
                                            <p className="  ">Salary Slip (latest 3 months)</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <img src={arrowRight} alt="" />
                                            <p className="  ">Salary account statement(latest 6 months)</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <img src={arrowRight} alt="" />
                                            <p className="  ">Signature Verification Proof</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <img src={arrowRight} alt="" />
                                            <p className="  ">Registration Certificate of the car</p>
                                        </div>

                                    </div>

                                </div>
                                <div>
                                    <p className="text-[24px] font-bold text-[#24272C] text-start mb-2 md:mb-4">For Self Employed Individuals</p>
                                    <div className='mt-[10px] md:mt-[15px] flex flex-col  gap-2 md:gap-3 text-[14px] text-[#333846]'>
                                        <div className='flex gap-2'>
                                            <img src={arrowRight} alt="" />
                                            <p className=" ">KYC documents (Valid Photo ID Proofs)</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <img src={arrowRight} alt="" />
                                            <p className="  ">PAN Card</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <img src={arrowRight} alt="" />
                                            <p className="  ">Last 2 years ITR as proof of income</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <img src={arrowRight} alt="" />
                                            <p className="  ">Salary account statement(latest 6 months)</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <img src={arrowRight} alt="" />
                                            <p className="  ">Signature Verification Proof</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <img src={arrowRight} alt="" />
                                            <p className="  ">Registration Certificate of the car</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#EBF8FF] w-full relative">
                    <div className={`w-full  md:px-[150px] py-[12px] md:py-[80px] relative `}>
                        <div className=''>
                            <h2 className="text-[28px] md:text-[36px] font-semibold mb-8 text-center">
                                Used Car Loan  <span className="text-[#0B66FA] ">Interest rate comparison</span>
                            </h2>
                        </div>
                        <div className='flex max-md:flex-wrap  gap-5 justify-center '>
                            {
                                LendingPartnersData.map((partner, index) => {
                                    return (
                                        index >= minIndex && index < maxIndex &&
                                        <div key={partner.id} className="flex flex-col justify-center items-center gap-[20px] w-[175px] md:w-[265px]">
                                            <div className={` md:px-[30px] px-[15px] py-[12px] flex justify-center items-center bg-[white] rounded-[20px] overflow-clip`}>
                                                <img src={partner.image} alt="" className='w-[115px] md:w-[175px] h-[50px] md:h-[90px] mix-blend-multiply' />
                                            </div>
                                            <div className="max-md:text-center flex flex-col gap-2">
                                                <p className="text-[10px] md:text-[18px] font-semibold text-[#3D4159] ">{partner.interestRate}% Interest rate</p>
                                                <p className="text-[14px]  text-[#808080] ">1% Processing fee*</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="md:absolute md:bottom-2 md:left-[150px] px-[10px] max-md:mt-[20px] text-[8px] md:text-[12px] font-normal text-[#808080] mb-2">
                        <p className="">*Processing fee is calculated on the loan amount. Additional Taxes and Stamp duty as applicable.</p>
                        <p className=" ">**Interest rate and Processing fee are indicative in nature and are subject to the lender's discretion.</p>
                    </div>
                </div>


                <div className="mt-[50px] md:mt-[80px] md:px-[120px] ">
                    <div className="md:px-[80px] py-[10px]">
                        <h2 className="text-[28px] md:text-[36px] font-semibold mb-8 text-center">
                            <span className="text-[#0B66FA] ">Types   </span>of Used Car Loan
                        </h2>
                        <div className="flex max-md:flex-col justify-center max-md:items-center gap-[24px]">

                            <div className="w-[260px] bg-[#EBF8FF] rounded-[20px] flex flex-col gap-[40px] px-[16px] pt-[32px] pb-[16px] items-center">
                                <img src={usedCarSVG} alt="" className="w-[120px] h-[120px]" />
                                <div className='bg-[white] h-full rounded-[20px] flex flex-col gap-1 items-center px-[21px] py-[24px] '>
                                    <h3 className="text-[18px] md:text-[24px] font-medium text-center">Used Car
                                        Purchase</h3>
                                    <p className="text-[12px] text-gray-700 text-center">Chose your car and in need of
                                        prompt funds? Opt for our fast
                                        and hassle-free used car loan.</p>
                                </div>
                                <button className="mt-[20px] text-[white] text-[16px] md:text-[20px] bg-[#0B66FA] rounded-full px-6 py-1">
                                    Apply Now <span className="font-bold">{">"}</span>
                                </button>
                            </div>

                            <div className="w-[260px] bg-[#EBF8FF] rounded-[20px] flex flex-col gap-[40px] px-[16px] pt-[32px] pb-[16px] items-center">
                                <img src={refinanceSVG} alt={"" } className="w-[120px] h-[120px]" />
                                <div className='bg-[white] h-full rounded-[20px] flex flex-col gap-1 items-center px-[21px] py-[24px] '>
                                    <h3 className="text-[18px] md:text-[24px] font-medium text-center">Refinance</h3>
                                    <p className="text-[12px] text-gray-700 text-center">Require funds? A car refinance
                                        loan offers the opportunity to
                                        secure a loan using your car as
                                        collateral.</p>
                                </div>
                                <button className="mt-[20px] text-[white] text-[16px] md:text-[20px] bg-[#0B66FA] rounded-full px-6 py-1">
                                    Apply Now <span className="font-bold">{">"}</span>
                                </button>
                            </div>
                            <div className="w-[260px] bg-[#EBF8FF] rounded-[20px] flex flex-col gap-[40px] px-[16px] pt-[32px] pb-[16px] items-center">
                                <img src={topUpSVG} alt={""} className="w-[120px] h-[120px]" />
                                <div className='bg-[white] h-full rounded-[20px] flex flex-col gap-1 items-center px-[21px] py-[24px] '>
                                    <h3 className="text-[18px] md:text-[24px] font-medium text-center">Top-Up</h3>
                                    <p className="text-[12px] text-gray-700 text-center">Require funds but already have
                                        a car loan? A top-up loan can
                                        assist. Utilize the extra funds for
                                        weddings, personal needs etc.</p>
                                </div>
                                <button className="mt-[20px] text-[white] text-[16px] md:text-[20px] bg-[#0B66FA] rounded-full px-6 py-1">
                                    Apply Now <span className="font-bold">{">"}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="mt-[80px] w-full">
                    <LendingPartners />
                </div>

                <div className="h-[100px]">
                    faqs
                </div>
                <div className='w-full mt-[25px]'>
                    <ContactUs/>
                </div>

            </div>
        </div>
    );
};

export default UsedCarLoan;
