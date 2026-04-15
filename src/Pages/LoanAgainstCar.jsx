import React from 'react'
import BenefitsAndFeatures from '../Components/LoanAgainstCar/FeaturesAndBenefits'
import arrowRight from "../Asset/right-arrow-green.svg"
import straightGD from "../Asset/LoanAgainstCar/straight-green-gd.svg"
import docRequired from '../Asset/LoanAgainstCar/documents-required-svg.svg'
import FourSimpleSteps from '../Components/NewCarLoan/FourSimpleSteps'
import LendingPartners from '../Components/NewCarLoan/LendingPartners'
import { City } from "../MockData/CityAndImage"
import bgCity from '../Asset/LoanAgainstCar/citybackground-svg.svg'
import mahindraFinance from "../Asset/LoanAgainstCar/news-mahindra-finance.png.png"
import mayankThatte from "../Asset/LoanAgainstCar/mayank-thatte.png.png"
import evNews from "../Asset/LoanAgainstCar/news-EV-financing.png.png"
import tickMark from "../Asset/LoanAgainstCar/tick.svg"
import loanOptions from '../MockData/loanOptions'
import { ContactUs } from '../components'
const LoanAgainstCar = () => {




    return (
        <div className='parent-div flex flex-col justify-center items-center'>
            <div className='flex md:gap-[100px] justify-center items-center  text-[#24272C] w-full '>

                <div className='w-full md:px-[120px]'>
                    {/* <img src={featureImage} alt="" className='h-[460px] w-[690px]' /> */}

                    <div className='flex flex-col max-md:justify-center max-md:items-center gap-4 md:w-1/2'>
                        <div className='text-center'>
                            <h2 className="text-[28px] md:text-[42px] font-bold ">
                                Loan Against Car
                            </h2>
                            <p className='text-[20px] md:text-[24px] font-semibold'>Simple. <span className='text-[#0B66FA]'> Flexible.</span> Transparent.</p>
                            <p className='text-[16px] font-normal text-[#24272C]'>Fund your business needs, travel plans, education, marriage or any personal goals</p>
                        </div>
                        <div className='flex flex-col gap-[20px] p-[30px] bg-[#EBF8FF] rounded-[20px] text-[16px] md:text-[20px]'>
                            <h2 className="font-semibold text-center">
                                Do you have an existing loan against your car?
                            </h2>
                            <div className='flex gap-4 '>
                                <button className='text-[white] bg-[#0B66FA] rounded-full px-8 md:px-[62px] py-2 md:py-[10px]'>Yes, I do</button>
                                <button className='text-[#0B66FA] border-[2px] border-[#0B66FA] rounded-full px-8 md:px-[62px] py-2 md:py-[10px]'>No, I don't</button>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className='flex gap-2  items-center py-[14px]'>
                                <img src={tickMark} alt="" className='h-[38px] w-[38px]' />
                                <div className='text-[18px] font-normal text-justify flex flex-col  text-[#24272C]'>
                                    <p>Attractive interest rates</p>
                                    <p className='text-[12px]'>Lower ROI than Personal loans</p>
                                </div>
                            </div>
                            <div className='flex gap-2  items-center py-[14px]'>
                                <img src={tickMark} alt="" className='h-[38px] w-[38px]' />
                                <div className='text-[18px] font-normal text-justify flex flex-col  text-[#24272C]'>
                                    <p>Upto 150% Loan</p>
                                    <p className='text-[12px]'>Funding upto 150% of your car's value</p>
                                </div>
                            </div>
                            <div className='flex gap-2  items-center py-[14px]'>
                                <img src={tickMark} alt="" className='h-[38px] w-[38px]' />
                                <div className='text-[18px] font-normal text-justify flex flex-col  text-[#24272C]'>
                                    <p>Paperless Process</p>
                                    <p className='text-[12px]'>End to End Digital lending experience</p>
                                </div>
                            </div>
                            <div className='flex gap-2  items-center py-[14px]'>
                                <img src={tickMark} alt="" className='h-[38px] w-[38px]' />
                                <div className='text-[18px] font-normal text-justify flex flex-col  text-[#24272C]'>
                                    <p>Quick Approvals</p>
                                    <p className='text-[12px]'>Instant eligibility check and approvals</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-full mt-[100px] '>
                <BenefitsAndFeatures />
            </div>
            
            <div className='mt-[12px] md:mt-[20px] relative z-[10] px-[15px] md:px-[160px]'>
                <h2 className="text-[28px] md:text-[36px] md:mb-6 font-semibold text-center ">
                    <span className='text-[#46BE88]'>What is </span> Loan Against Car
                </h2>
                <p className='text-[14px] md:text-[18px] font-normal text-justify flex justify-center text-[#24272C]'>Loan against car or Car Refinancing provides a convenient and stress-free borrowing option using your car as collateral. It proves to be a great choice when you require fast funds for various financial needs. This type of loan offers a secured option without the necessity of pledging any additional Asset.</p>
            </div>

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

            <div className='w-full mt-[20px] px-[20px] md:px-[120px]'>
                <div className='mb-4'>
                    <p className="text-[28px] md:text-[36px] font-bold text-[#24272C] text-start ">Loan Against Car <span className='text-[#0B66FA]'>Eligibility</span></p>
                    <p className='text-[14px] text-[#333846]'>You are eligible to avail a car loan if you meet the below criteria</p>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
                    <div>
                        <p className="text-[24px] font-bold text-[#24272C] text-start mb-4">For Salaried Individuals</p>
                        <div className='mt-[15px] flex flex-col  gap-4 md:gap-3 text-[14px] text-[#333846]'>
                            <div className='flex gap-2'>
                                <img src={arrowRight} alt="" />
                                <p className=" ">Individuals who are a minimum of 21 years of age at the
                                    time of applying for the loan, and no older than 60 at
                                    the end of the loan tenure</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src={arrowRight} alt="" />
                                <p className="  ">Individuals who have had a job for at least 2 years, with
                                    a minimum of 1 year with the current employer</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src={arrowRight} alt="" />
                                <p className="  ">Those who earn a minimum of ₹ 2,50,000 per year,
                                    including the income of the spouse.</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src={arrowRight} alt="" />
                                <p className="  ">Individuals who own a car and have paid at least 12
                                    EMIs if there is an active loan on their car.</p>
                            </div>

                        </div>

                    </div>
                    <div>
                        <p className="text-[24px] font-bold text-[#24272C] text-start mb-4">For Self Employed Individuals</p>
                        <div className='mt-[15px] flex flex-col  gap-4 md:gap-3 text-[14px] text-[#333846]'>
                            <div className='flex gap-2'>
                                <img src={arrowRight} alt="" />
                                <p className=" ">Individuals who are a minimum of 25 years of age at
                                    the time of applying for the loan, and no older than 60
                                    at the end of the loan tenure.</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src={arrowRight} alt="" />
                                <p className="  ">Individuals who have been in business for minimum 2
                                    years.</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src={arrowRight} alt="" />
                                <p className="  ">Those who earn a minimum of ₹2,50,000 per year.</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src={arrowRight} alt="" />
                                <p className="  ">Individuals who own a car and have paid at least 12
                                    EMIs if there is an active loan on their car.</p>
                            </div>

                        </div>
                    </div>

                </div>
                <p className=' mt-2 text-[10px] md:text-[12px] text-[#333846] '>*Final eligibility is subject to profile and credit score</p>
            </div>


            <div className='w-full  md:px-[120px] mt-[50px]'>
                <div className='mb-4 md:px-[55px] px-[20px] max-md:flex max-md:flex-col max-md:gap-2 max-md:text-center'>
                    <p className="text-[28px] md:text-[36px] font-bold text-[#24272C] md:text-start "><span className='text-[#0B66FA]'>Documents required <br/></span> for loan against car</p>
                    <p className='text-[14px] text-[#333846]'>You need to submit the following documents for processing your application</p>
                </div>

                <div className='w-full  flex max-md:flex-col gap-8 bg-[#F5F8FE] p-4 md:pt-[60px] md:pb-[30px] md:px-[55px] relative'>
                    <div className='mt-[15px] flex flex-col  gap-4 md:gap-3 text-[14px] text-[#333846]'>
                        <div className='flex gap-2'>
                            <img src={straightGD} alt="" />
                            <p className=" ">KYC documents (Valid Photo ID Proofs)</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src={straightGD} alt="" />
                            <p className="  ">Last 2 years ITR as proof of income (for self-
                                employed individuals)</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src={straightGD} alt="" />
                            <p className="  ">Salary account statement(latest 6 months)</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src={straightGD} alt="" />
                            <p className="  ">Registration Certificate of the car</p>
                        </div>

                    </div>
                    <div className='mt-[15px] flex flex-col  gap-4 md:gap-3 text-[14px] text-[#333846]'>
                        <div className='flex gap-2'>
                            <img src={straightGD} alt="" />
                            <p className=" ">PAN Card</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src={straightGD} alt="" />
                            <p className="  ">Salary Slip (latest 3 months)</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src={straightGD} alt="" />
                            <p className="  ">Signature Verification Proof</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src={straightGD} alt="" />
                            <p className="  ">Loan track (if there is an active loan on the
                                car)</p>
                        </div>
                    </div>
                    <div className='max-md:hidden absolute right-4 -top-[45%]'>
                        <img src={docRequired} alt="" className='h-[406px] w-[392px]' />
                    </div>
                </div>
            </div>

            <div className='md:px-[120px] px-[10px] mt-[50px] md:mt-[100px]'>
                <FourSimpleSteps />
            </div>

            <div className='px-[40px]'>
                <LendingPartners bg={false} cardBg={true} />
            </div>

            <div style={{ backgroundImage: `url(${bgCity})` }} className='w-full md:px-[120px] md:mt-[100px] flex flex-col gap-8 relative '>
                <div className='mb-4 text-center flex flex-col gap-3'>
                    <p className="text-[28px] md:text-[36px] font-bold text-[#24272C] text-center "><span className='text-[#0B66FA]'>Locations </span>for Loan <br/>Against Car</p>
                    <p className='text-[14px] md:text-[18px] text-[#333846]'>Rupyy currently provides Loan Against Car across 22 other cities in India.</p>
                </div>
                <div className='grid grid-cols-3 md:grid-cols-9 md:gap-y-[44px] md:gap-x-[54px] gap-x-[18px] gap-y-[18px] pb-[50px] md:pb-[100px]'>
                    {
                        City.map((city, index) => {
                            return (
                                <div key={city.id} className='flex flex-col gap-3 items-center justify-center'>
                                    <img src={city.image} alt="" className='h-[80px] w-[80px] ' />
                                    <p className='text-[14px] text-[#333846]'>{city.city}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='absolute z-[-10] bottom-0 right-0 '>
                    <img src={bgCity} alt="" className='h-[350px] w-full md:h-[775px]' />
                </div>
            </div>


            <div className='mt-[20px] py-[20px] md:px-[140px] bg-[#EFF0F3] w-full '>
                <h1 className='text-[24px] font-semibold max-md:text-center'>Autotrends in <span className='text-[#0B66FA]'>News</span></h1>
                <div className=' flex max-md:flex-wrap max-md:items-center max-md:justify-center gap-4  mt-[10px]'>

                    <div className='w-[358px] flex flex-col gap-6  overflow-clip'>
                        <div className='flex flex-col gap-6 justify-center items-center'>
                            <img src={mahindraFinance} alt="" className='min-h-[198px] w-full rounded-[24px] overflow-clip' />
                        </div>
                        <div className='flex flex-col gap-1  pb-[10px] px-[15px] '>
                            <p className='px-[2px] text-[18px] font-bold text-[#24272C] '>Mahindra Finance Partners With
                                car&bike, Rupyy To Launch New Used
                                Car Loan Service</p>
                            <p className='px-[2px] text-[15px] text-[#777777]  '>Credit: carandbike.com</p>
                        </div>
                    </div>
                    <div className='w-[358px] flex flex-col gap-6  overflow-clip'>
                        <div className='flex flex-col gap-6 justify-center items-center'>
                            <img src={evNews} alt="" className='min-h-[198px] w-full  rounded-[24px] overflow-clip' />
                        </div>
                        <div className='flex flex-col gap-1  pb-[10px] px-[15px] '>
                            <p className='px-[2px] text-[18px] font-bold text-[#24272C] '>CarDekho Group's Rupyy sets its sights
                                on EV financing, driving sustainable
                                mobility</p>
                            <p className='px-[2px] text-[15px] text-[#777777]  '>Credit: cardekho.com</p>
                        </div>
                    </div>
                    <div className='w-[358px] flex flex-col gap-6  overflow-clip'>
                        <div className='flex flex-col gap-6 justify-center items-center'>
                            <img src={mayankThatte} alt="" className='min-h-[198px] w-full bg-[white] rounded-[24px] overflow-clip' />
                        </div>
                        <div className='flex flex-col gap-1  pb-[10px] px-[15px] '>
                            <p className='px-[2px] text-[18px] font-bold text-[#24272C] '>Rupyy of CarDekho Group appoints
                                Mayank Thatte as CFO</p>
                            <p className='px-[2px] text-[15px] text-[#777777]  '>Credit: cfo.economictimes.indiatimes.com</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='text-center my-[20px]'>
                faqs
            </div>
            <div className='w-full mt-[20px]'>
                    <ContactUs/>
                </div>
        </div>

    )
}

export default LoanAgainstCar