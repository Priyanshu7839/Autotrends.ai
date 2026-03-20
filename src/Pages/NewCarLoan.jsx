import React from 'react'
import featureImage from "../Asset/NewCarLoan/NewCarMast-header.png"
import BenefitsAndFeatures from '../Components/NewCarLoan/BenefitsAndFeatures'
import LoanEligibility from '../Components/NewCarLoan/LoanEligibility';
import FourSimpleSteps from '../Components/NewCarLoan/FourSimpleSteps';
import LendingParterners from '../Components/NewCarLoan/LendingPartners';
import LendingPartners from '../Components/NewCarLoan/LendingPartners';
import InterestRateComparision from '../Components/NewCarLoan/InterestRateComparision';
import LoanInformation from '../Components/NewCarLoan/LoanInformation';
import FAQs from '../Components/NewCarLoan/FAQs';
import loanOptions from '../MockData/loanOptions';
import { ContactUs } from '../components';
const NewCarLoan = () => {





    return (
        <div className='parent-div flex flex-col justify-center items-center'>
            <div className='flex max-md:flex-col max-md:flex-reverse md:gap-[100px] justify-center items-center md:pl-[25px] text-[#24272C]'>
                <div className='flex flex-col gap-[0px] '>
                    <h1 className='text-[28px] md:text-[60px] md:leading-[84px] font-bold'>New Car Loan</h1>
                    <p className=' text-[18px] md:text-[24px] font-medium '>Simple. <span className='text-[#0B66FA] '>Flexible.</span> Transparent.</p>
                    <p className=' text-[#3D4159] text-[14px] md:text-[16px] font-medium '>Get best offers from multiple lenders to buy<br /> the dream car you always wanted!</p>
                    <button className="mt-[20px] bg-[#0B66FA] text-white text-[16px] font-semibold md:w-[200px] px-[20px] md:px-[50px] py-[8px] md:py-[15px] rounded-[58px] " onClick={() => { }}>Apply Now</button>
                </div>
                <div className='flex justify-end'>
                    <img src={featureImage} alt="" className='h-[310px] w-[full] md:h-[460px] md:w-[690px]' />
                </div>
            </div>

            <div className='w-full'>
                <BenefitsAndFeatures />
            </div>

            <div>

            </div>


            <div className='w-full md:w-[calc(100%-240px)] mt-[80px] mb-[40px]'>


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

                <div className='mt-[80px] md:mt-[150px]  max-md:px-[10px] '>
                    <LoanEligibility />
                    <p className="mt-3 text-[10px] md:text-xs text-gray-500 md:text-center">
                        *Final eligibility is subject to profile and credit score
                    </p>
                </div>

                <div className='mt-[80px]'>
                    <FourSimpleSteps />
                </div>







            </div>
            <div className='w-full'>
                <LendingPartners />
            </div>

            <div className='mt-[20px] md:px-[120px]'>
                <InterestRateComparision />
                <p className="mt-3 text-[10px] md:text-xs text-gray-500 md:text-center">
                    *Processing fee is calculated on the loan amount. Additional Taxes and Stamp duty as applicable.</p>
                <p className=" text-[10px] md:text-xs text-gray-500 md:text-center">
                    **Interest rate and Processing fee are indicative in nature and are subject to lender's discretion.</p>
            </div>

            <div className='mt-[90px] md:mt-[150px] md:px-[120px] shadow-lg pb-6'>
                <LoanInformation />
            </div>

            <div className='mt-[20px] w-full px-[15px]  md:px-[120px]'>
                <FAQs />
            </div>

            <div className='w-full mt-[20px]'>
                    <ContactUs/>
                </div>

        </div>
    )
}

export default NewCarLoan