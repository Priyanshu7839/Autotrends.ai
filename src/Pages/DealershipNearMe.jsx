import React from 'react'
import featureImage from "../Asset/DealerShipImages/Background-features.png"
import arrowright from "../Asset/right-arrow.png"
import Select from 'react-select'
import { City, cityOptions } from '../MockData/CityAndImage'
import HighlightImages from '../Components/HighlightImages'
import LuxaryCarDealership from '../MockData/LuxaryCarDealership'
import usedCarSVG from "../Asset/DealerShipImages/usedCars-svg.svg"
import sellCarSVG from "../Asset/DealerShipImages/sell-your-car-svg.svg"
import trueValSVG from "../Asset/DealerShipImages/get-trueval-svg.svg"
import PopularUsedCars from '../Components/SideComponents/PopularUsedCars'
import { ContactUs } from '../components'


const DealershipNearMe = () => {

    return (
        <div className='parent-div flex flex-col justify-center items-center'>
            <div className='h-[200px] md:h-[400px]'>
                <img src={featureImage} alt="" className='max-md:w-full max-md:h-[200px]'/>
            </div>
            <div className='w-full md:w-[calc(100%-240px)] max-md:px-[10px] mt-[32px] mb-[40px]'>

                <h1 className='md:mt-[30px] text-[24px] font-semibold'>Used Car Showrooms in India</h1>

                <div className='flex md:flex-row flex-col gap-3'>
                    <div className='w-full md:w-[76%] mt-[20px]'>

                        {/* select charging station by city */}
                        <div className=' px-[15px] md:px-[18px] py-[20px] shadow-md border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-[11px] relative overflow-clip'>
                            <div className='flex flex-col md:flex-row gap-4 justify-between'>
                                <h1 className='text-[18px] md:text-[24px] font-semibold'>Used Car Dealer in Popular Cities</h1>
                                <Select
                                    className='w-[75%] md:w-[45%] shadow-sm hover:shadow-md focus:ring-slate-600'
                                    options={cityOptions}
                                    placeholder="Search your city"
                                />
                            </div>

                            <div className={`grid grid-cols-3 md:grid-cols-6 max-md:gap-x-2 max-md:gap-y-3 md:gap-3 mt-[20px] pb-[10px] `}>
                                {
                                    City.map((city, index) => {
                                        return <div key={city.id} className='col-span-1 py-[13px] bg-white shadow-md hover:shadow-lg border-[#24272C] border-[1px] rounded-[8px] border-opacity-10 hover:border-opacity-25 flex flex-col justify-center items-center '>
                                            <img src={city.image} alt={city.city} className='w-[62px] h-[62px] md:h-[82px] md:w-[82px] ' />
                                            <p className='text-[16px] text-[#24272C] text-opacity-70 font-semibold'>{city.city}</p>
                                        </div>
                                    })
                                }
                            </div>
                        </div>


                        {/* popular cars */}
                        <div className='mt-[20px] '>
                            <HighlightImages data={LuxaryCarDealership} />
                        </div>




                        <div className='mt-[20px] px-[15px] md:px-[18px] py-[20px] shadow-md border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-[30px] '>
                            <h1 className='text-[18px] md:text-[24px] font-semibold'>For Your Further Research</h1>
                            <div className='grid grid-cols-1 md:grid-cols-3 px-auto gap-3'>
                                <div className='col-span-1 flex gap-3 justify-between py-2 pr-[25px] max-md:border-b-[1px] md:border-r-[1px] border-[#24272C] border-opacity-15 '>
                                    <div className='flex flex-col gap-2'>
                                        <h1 className='text-[16px] md:text-[18px] font-medium'>Used Cars In India</h1>
                                        <p className='flex gap-1 text-[#0085FF] font-semibold items-center text-[14px] md:text-[16px]'>
                                            View All {"(51475)"}</p>
                                    </div>
                                    <div >
                                        <img src={usedCarSVG} alt="" className='h-[80px] w-[72px] md:h-[90px] md:w-[80px]' />
                                    </div>
                                </div>
                                <div className='col-span-1 flex gap-3 justify-between py-2 pr-[25px] max-md:border-b-[1px] md:border-r-[1px] border-[#24272C] border-opacity-15 '>
                                    <div className='flex flex-col gap-2'>
                                        <h1 className='text-[16px] md:text-[18px] font-medium'>Sell Your Car For Free</h1>
                                        <p className='flex gap-1 text-[#0085FF] font-semibold items-center text-[14px] md:text-[16px]'>
                                            Upload Car</p>
                                    </div>
                                    <div >
                                        <img src={sellCarSVG} alt="" className='h-[80px] w-[72px] md:h-[90px] md:w-[80px]' />
                                    </div>
                                </div>
                                <div className='col-span-1 flex gap-3 justify-between py-2 pr-[25px] '>
                                    <div className='flex flex-col gap-2'>
                                        <h1 className='text-[16px] md:text-[18px] font-medium'>Get The True Price Of Your Car</h1>
                                        <p className='flex gap-1 text-[#0085FF] font-semibold items-center text-[14px] md:text-[16px]'>
                                            Start Valuation</p>
                                    </div>
                                    <div >
                                        <img src={trueValSVG} alt="" className='h-[80px] w-[76px] md:h-[90px] md:w-[88px]' />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='w-full md:w-[23%] mt-[20px] flex flex-col gap-[20px]'>
                        {/* right section */}
                        <PopularUsedCars />
                    </div>

                </div>
                <div className='mt-[20px] px-[15px] md:px-[18px] py-[20px] shadow-md border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col '>
                    <h1 className='text-[18px] md:text-[24px] font-semibold'>Sell Your Car in Cities</h1>
                    <div className='grid grid-cols-2 md:grid-cols-4 py-[24px] text-[14px] md:text-[16px] gap-y-2  px-auto border-b-[1px] border-[#24272C] border-opacity-15'>
                        {
                            City.map((city, index) => {
                                return (index<8 && <p key={index} className='text-[14px] md:text-[16px]'>
                                    Sell Car in {city.city}
                                </p>)
                            })
                        }
                    </div>
                    <p className='flex gap-1 text-[#0085FF] font-semibold items-center mt-[18px] text-[14px] md:text-[16px]'>
                        Read More<img src={arrowright} alt="" className='w-[19px] h-[18px]' />
                    </p>
                </div>
            </div>
                <div className='w-full mt-[25px]'>
                    <ContactUs/>
                </div>
        </div>
    )
}

export default DealershipNearMe