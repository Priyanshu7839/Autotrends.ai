import React, { useState } from 'react'
import star from "../Asset/UsedCarValuation/star-svg.svg"
import featureImage from "../Asset/UsedCarValuation/featureImage.png"
import maruti from "../Asset/UsedCarValuation/maruti-svg.svg"
import hyundai from "../Asset/UsedCarValuation/hyundai.svg"
import kia from "../Asset/UsedCarValuation/kia.svg"
import mahindra from "../Asset/UsedCarValuation/mahindra.svg"
import toyota from "../Asset/UsedCarValuation/toyota.svg"
import tata from "../Asset/UsedCarValuation/tata.svg"
import honda from "../Asset/UsedCarValuation/honda.svg"
import certificateBanner from '../Asset/UsedCarValuation/certificate-Banner.png'
import { ContactUs } from '../components'

const UsedCarValuation = () => {
    const [activeButton, setActiveButton] = useState(1);
    return (
        <div>
            <div className='px-[15px] md:px-[120px] '>

                <div className='flex gap-0 mt-[10px]'>
                    <div className='flex flex-col  gap-4 w-full md:w-[40%] px-[10px]'>
                        <p className="text-[28px] md:text-[36px] leading-[120%] font-bold text-[#24272C] text-start md:mb-4">Used Car Valuation Online</p>
                        <p className="text-[10px] md:text-[14px]  text-[#333846]">Get an unbiased and best price quote for your second hand car using our used car value calculator with true and honest car valuation. Listing a used car to sell on CarDekho is free.</p>
                        <div className='mt-[15px] flex flex-col  gap-3 text-[12px] md:text-[14px] text-[#333846]'>
                            <div className='flex gap-2 items-center'>
                                <img src={star} alt="" className='h-[14px] w-[14px] md:h-[18px] md:w-[18px]' />
                                <p className=" ">10 Million+ Valuation This Year</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img src={star} alt="" className='h-[14px] w-[14px] md:h-[18px] md:w-[18px]' />
                                <p className="  ">2.5 Million+ Car Analysed</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img src={star} alt="" className='h-[14px] w-[14px] md:h-[18px] md:w-[18px]' />
                                <p className="  ">300+ Dealers Data Analysed</p>
                            </div>

                        </div>
                        <p className="mt-[20px] font-bold text-[#24272C] text-start">I'm looking to...</p>

                        <div className='bg-[#F2F5F9] p-[5px] flex gap-0 rounded-[5px] w-fit'>
                            <button onClick={() => { setActiveButton(1) }} className={` ${activeButton === 1 ? "bg-[black] text-[white]" : "bg-[#F2F5F9] text-[#66686B]"} text-[10px] md:text-[14px] px-[20px] md:px-[55px] py-[6px] rounded-[6px]`}>Sell My Car</button>
                            <button onClick={() => { setActiveButton(2) }} className={` ${activeButton === 2 ? "bg-[black] text-[white]" : "bg-[#F2F5F9] text-[#66686B]"} text-[10px] md:text-[14px] px-[20px] md:px-[55px] py-[6px] rounded-[6px]`}>Buy Used Car</button>
                        </div>
                        <div className='grid grid-cols-4 gap-[10px]'>
                            <div className='px-[24px] md:px-[42px] py-[10px] flex flex-col justify-center items-center bg-white border border-[#E9E9EA] rounded-[8px] mb-1'>
                                <img src={maruti} alt="" />
                                <p className='text-[#24272C] text-[10px] md:text-[14px] '>Maruti</p>
                            </div>
                            <div className='px-[24px] md:px-[42px] py-[10px] flex flex-col justify-center items-center bg-white border border-[#E9E9EA] rounded-[8px]'>
                                <img src={hyundai} alt="" className='h-[30px] w-[32px]' />
                                <p className='text-[#24272C] text-[10px] md:text-[14px]'>Hyundai</p>
                            </div><div className='px-[24px] md:px-[42px] py-[10px] flex flex-col justify-center items-center bg-white border border-[#E9E9EA] rounded-[8px]'>
                                <img src={honda} alt="" className='h-[30px] w-[32px]' />
                                <p className='text-[#24272C] text-[10px] md:text-[14px]'>Honda</p>
                            </div><div className='px-[24px] md:px-[42px] py-[10px] flex flex-col justify-center items-center bg-white border border-[#E9E9EA] rounded-[8px]'>
                                <img src={tata} alt="" className='h-[30px] w-[32px]' />
                                <p className='text-[#24272C] text-[10px] md:text-[14px]'>Tata</p>
                            </div><div className='px-[24px] md:px-[42px] py-[10px] flex flex-col justify-center items-center bg-white border border-[#E9E9EA] rounded-[8px]'>
                                <img src={toyota} alt="" className='h-[30px] w-[32px]' />
                                <p className='text-[#24272C] text-[10px] md:text-[14px]'>Toyota</p>
                            </div><div className='px-[24px] md:px-[42px] py-[10px] flex flex-col justify-center items-center bg-white border border-[#E9E9EA] rounded-[8px]'>
                                <img src={mahindra} alt="" className='h-[30px] w-[32px]' />
                                <p className='text-[#24272C] text-[10px] md:text-[14px]'>Mahindra</p>
                            </div><div className='px-[24px] md:px-[42px] py-[10px] flex flex-col justify-center items-center bg-white border border-[#E9E9EA] rounded-[8px]'>
                                <img src={kia} alt="" className='h-[30px] w-[32px]' />
                                <p className='text-[#24272C] text-[10px] md:text-[14px]'>Kia</p>
                            </div><div className='px-[10px] md:px-[42px] py-[10px] flex flex-col justify-center items-center bg-white border border-[#E9E9EA] rounded-[8px]'>
                                <p className='text-[#007FFF] font-medium text-[10px] md:text-[14px] text-center'>View All Brands</p>
                            </div>
                        </div>
                    </div>
                    <div className='max-md:hidden w-[60%] flex justify-center pt-[50px]'>
                        <img src={featureImage} alt="" className='w-[490px] h-[445px]' />
                    </div>
                </div>

                <div className='flex gap-0 mt-[50px]'>
                    <div className='flex flex-col  gap-4  px-[10px]'>
                        <p className="text-[24px] font-medium text-[#24272C] text-start mb-4">Importance of Used Car Valuation</p>
                        <p className="text-[12px] md:text-[14px]  text-[#333846]">The car value calculator is a free tool designed to help you get the estimated resale value of your car within seconds. Our used car valuation algorithm is updated on a real-time
                            basis which means that it’s in sync with the latest changes and market developments. However, the figures shown during online car valuation are just an estimation and are subject
                            to change post your car’s inspection at the store.</p>
                        <p className="text-[12px] md:text-[14px]  text-[#333846]">To get the estimated value of your car through our used car price calculator, you don’t even need to register to get the valuation done, what you have to do is add basic details of
                            your car like, the make, model, kilometers run, your city, your contact number and that’s it. If you like the price range shown, you can schedule an appointment at the nearest
                            CarDekho store. We currently offer our services in Delhi-NCR, Bengaluru, Lucknow, Pune, Jaipur, Hyderabad, and Ahmedabad.</p>
                        <p className="text-[12px] md:text-[14px]  text-[#333846]">Pricing or valuing a car is crucial for insurance purposes as well as for buying and selling a car. Considering the fact that underpricing your car can lead to you losing money on
                            selling it. Also, you’ll receive a lower claim payout under your insurance policy for a total loss event like car theft. Used car valuation calculator helps the sellers get an idea of what
                            their car is worth and how much they should expect to get for their car. When it comes to the buyers, they too get an idea of what’s the maximum amount they should be paid while
                            buying a particular car. This way the tool proves to be beneficial for both parties.</p>

                    </div>
                </div>

                <div className='text-center my-[20px]'>
                    faqs container
                </div>
            </div>

            <div className='overflow-auto'>
                <img src={certificateBanner} alt="" className='h-[216px]  ' />
            </div>
            <div className='w-full mt-[25px]'>
                <ContactUs />
            </div>
        </div>
    )
}

export default UsedCarValuation