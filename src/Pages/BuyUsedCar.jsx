import React, { useState } from 'react'
import featureImage from "../Asset/BuyUsedCar/feature-image.png"
import dropShadow from "../Asset/BuyUsedCar/drop-shadow-svg.svg"
import Select from 'react-select/base'
import { City, cityOptions } from '../MockData/CityAndImage'
import OldCarCard from '../Components/BuyUsedCar/OldCarCard'
import RecommendedCars from '../MockData/BuyUsedCarData/RecommendedCars'
import DiscountedCars from '../MockData/BuyUsedCarData/DiscountedCars'
import { CarBodyTypes, CarByBodyTypes } from '../MockData/BuyUsedCarData/CarByBodyTypes'
import { CarBudget, CarByBudget } from '../MockData/BuyUsedCarData/CarByBudget'
import CarByFuelType from '../Components/CarByFuelType'
import CarByBrands from '../Components/CarByBrands'
import SecondHandCarInCities from '../MockData/BuyUsedCarData/SecondHandCarInCities'
import LocationSelector from '../Components/LocationSelector'
import { ContactUs } from '../components'

const BuyUsedCar = () => {
    const [carBodyTypeSelected, setCarBodyTypeSelected] = useState(0);
    const [carByBudget, setCarByBudget] = useState(0)
    return (
        <div className='parent-div flex flex-col justify-center items-center'>
            <div className='flex justify-end relative'>
                <div className='flex justify-end'>
                    <img src={featureImage} alt="" className='h-[310px] md:h-[587px] w-full' />
                </div>
                <div className='absolute top-0 left-0 z-[50]'>
                    <img src={dropShadow} alt="" className='' />
                </div>
                <div className='flex flex-col gap-[32px] absolute top-4 md:top-[75px] left-1 md:left-[150px] md:w-[510px]'>
                    <h1 className=' text-[#24272C] text-[28px] md:text-[60px] md:leading-[84px] font-bold'>Your Dream Car <br/>Just One Click <br/>Away!</h1>
                    <p className=' text-[#24272C] text-[12px] md:text-[18px] font-medium md:w-[420px]'>Schedule a test drive from our extensive car collection</p>
                    <button className="bg-[#0B66FA] text-[white] text-[16px] font-regular md:w-[240px] px-[16px] md:px-[64px] py-[8px] md:py-[18px] rounded-md " onClick={() => { }}>Buy Used Cars</button>

                </div>
            </div>

            <div className='mt-[20px] flex justify-center items-center'>
                <LocationSelector />
            </div>
            <div className='md:w-[calc(100%-240px)] mt-[32px] mb-[40px]'>

                {/* You Might Like Recommended Cars */}
                <div className='mt-[20px] flex flex-col gap-3'>
                    <h1 className='text-[20px] font-semibold'>Recommended Cars</h1>
                    <div onClick={() => { }} className={`rounded-[5px]  border-[1px] border-[#E9F1F7]  text-[#ffff] w-[80px] md:w-[152px]`}>

                        <li className='rounded-[5px] text-[12px] font-medium list-inside bg-[#24272C] px-[10px] md:px-[25px] py-[8px] md:py-[13px]'>You Might Like</li>

                    </div>

                    <div className='md:flex md:gap-3 max-md:grid max-md:grid-cols-2 max-md:gap-1'>
                        {
                            RecommendedCars.map((car, index) => {
                                return (<OldCarCard data={car} />)
                            })
                        }
                    </div>

                </div>


                {/* You Might Like discounted Cars */}
                <div className='mt-[150px]'>
                    <h1 className='mt-[30px] text-[20px] font-semibold py-[4px]'>Discounted Cars</h1>


                    <div className='flex gap-3 '>
                        {
                            DiscountedCars.map((car, index) => {
                                return (<OldCarCard data={car} />)
                            })
                        }
                    </div>
                </div>


                <div className='mt-[150px] flex flex-col gap-[20px]'>
                    <h1 className='text-[20px] font-semibold'>Used Cars by body types</h1>
                    <div className={`flex gap-4`}>
                        {
                            CarBodyTypes.map((CarBodyType, index) => {
                                return (<div key={index} onClick={() => setCarBodyTypeSelected(index)} className={`py-2  rounded-[5px] overflow-clip border-[1px]  border-[#E9F1F7] ${carBodyTypeSelected === index ? " text-[#fff] bg-[#24272C] " : "bg-[#fff] text-[#24272C]"} `}>
                                    <li className='text-[12px] font-medium list-inside px-[25px]'>{CarBodyType.bodyType}</li>
                                </div>)
                            })
                        }
                    </div>

                    <div className='flex gap-3 '>
                        {
                            CarByBodyTypes.map((car, index) => {
                                return (<OldCarCard key={index} data={car} />)
                            })
                        }
                    </div>
                    <h1 className='text-[16px] font-medium underline'>View All Hatchback Cars</h1>

                </div>

                <div className='mt-[150px] flex flex-col gap-[20px]'>
                    <h1 className='text-[20px] font-semibold'>Used Cars by budget</h1>
                    <div className={`flex gap-4`}>
                        {
                            CarBudget.map((budget, index) => {
                                return (<div key={index} onClick={() => setCarByBudget(index)} className={`py-2  rounded-[5px] overflow-clip border-[1px]  border-[#E9F1F7] ${carByBudget === index ? " text-[#fff] bg-[#24272C] " : "bg-[#fff] text-[#24272C]"} `}>
                                    <li className='text-[12px] font-medium list-inside px-[25px]'>{budget.budget}</li>
                                </div>)
                            })
                        }
                    </div>

                    <div className='flex gap-3 '>
                        {
                            CarByBudget.map((car, index) => {
                                return (<OldCarCard key={index} data={car} />)
                            })
                        }
                    </div>
                    <h1 className='text-[16px] font-medium underline'>View All Used Cars Under 5 Lakh</h1>
                </div>





                <div className='mt-[20px] px-[18px] py-[20px] shadow-md border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-[11px] relative overflow-clip'>
                    <div className='flex gap-4 justify-between'>
                        <h1 className='text-[20px] font-semibold'>Used Cars By Cities</h1>
                        <Select
                            className='w-[45%] shadow-sm hover:shadow-md focus:ring-slate-600'
                            options={cityOptions}
                            placeholder="Search your city"
                        />

                    </div>

                    <div className={`grid grid-cols-6 gap-[20px] mt-[20px] pb-[10px] `}>
                        {
                            City.map((city, index) => {
                                return (index < 11 && <div key={city.id} className='col-span-1 py-[13px] bg-[white] shadow-md hover:shadow-lg border-[#24272C] border-[1px] rounded-[8px] border-opacity-10 hover:border-opacity-25 flex flex-col justify-center items-center '>
                                    <img src={city.image} alt={city.city} className='h-[82px] w-[82px] ' />
                                    <p className='text-[16px] text-[#24272C] text-opacity-70 font-semibold'>{city.city}</p>
                                </div>)
                            })
                        }
                    </div>
                </div>

                <div className='mt-[25px] py-[10px]'>
                    <CarByFuelType heading={"Used Cars by Fuel Type"} />
                </div>

                <div>
                    <CarByBrands heading={"Used Cars by brand"} />
                </div>

                <div className='mt-[20px] flex flex-col gap-1 text-[#24272C]'>
                    <h1 className='text-[20px] font-semibold'>Second hand cars</h1>
                    <p className='text-[14px] font-normal text-[#333846] '>Find a complete list of certified used cars in India. You can select second-hand cars by applying filters such as by location, price, body type, brand etc. & also get info of used car dealers & CarDekho used car stores.</p>
                </div>

                <div className='mt-[20px] flex flex-col gap-3 text-[#24272C]'>
                    <h1 className='text-[20px] font-semibold '>Sell Your Car in Cities</h1>
                    <div className='grid grid-cols-4 '>
                        {
                            SecondHandCarInCities.map((city, index) => {
                                return (
                                    <div key={index} className='col-span-1 '>
                                        <p className='text-[#505256] text-[14px] leading-[200%]'>Sell car in {city}</p>
                                    </div>)
                            })
                        }
                    </div>
                </div>



                <div className='w-full mt-[90px]'>
                    <ContactUs/>
                </div>
            </div>

        </div>

    )
}

export default BuyUsedCar