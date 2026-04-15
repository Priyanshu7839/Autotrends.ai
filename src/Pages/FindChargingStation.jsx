import React from 'react'
import Select from 'react-select'
import featureImage from "../Asset/Feature-image-for-charging-station.png"
import arrowright from "../Asset/right-arrow.png"
import Patna from "../Asset/CityImages/Patna.svg"
import citySearchBG from "../Asset/CityImages/citysearch-bg.svg"
import PopularCars from '../Components/FindChargingStation/PopularCars'
import { cityOptions, City } from '../MockData/CityAndImage'
import ReviewAndNewFeature from '../Components/ReviewAndNewFeature'
import toyotaUrban from "../Asset/toyota-urban.png"
import MahindraBE from "../Asset/MahindraBE.png"
import { ContactUs } from '../components'
const FindChargingStation = () => {
    return (
        <div className='parent-div flex flex-col justify-center items-center'>
            <div className='h-auto md:h-[412px]'>
                <img src={featureImage} alt="" />
            </div>
            <div className='md:w-[calc(100%-240px)] w-full mt-[32px] mb-[40px]'>
                <div className='flex flex-col md:flex-row gap-3'>
                    <div className='w-full md:w-[76%] mt-[20px]'>
                        <div className='px-[18px] py-[20px] shadow-md border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-[11px]'>
                            <h1 className='text-[24px] font-semibold'>{"Electric (EV) Charging Stations"}</h1>
                            <p className='text-[14px] text-[#24272C] text-opacity-70 font-semibold'>Looking for an electric vehicle charging station near you? There are 10470 EV charging stations in India spread across 849 cities. Of
                                these, Maharashtra has the highest number with 2681 charging stations while Tripura has the least with 1 charging stations. Locate</p>
                            <p className='flex gap-1 text-[#0085FF] font-semibold items-center'>
                                Read More<img src={arrowright} alt="" className='w-[19px] h-[18px]' />
                            </p>
                        </div>

                        {/* select charging station by city */}
                        <div className='mt-[20px] px-[18px] py-[20px] shadow-md border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-[11px] relative overflow-clip'>
                            <div className='flex gap-4 justify-between'>
                                <h1 className='text-[24px] font-semibold'>Electric Charging Stations in India</h1>
                                <Select
                                    className='w-[45%] shadow-sm hover:shadow-md focus:ring-slate-600'
                                    options={cityOptions}
                                    placeholder="Search your city"
                                />

                            </div>

                            <div className={`grid grid-cols-4 gap-3 mt-[20px] pb-[10px] `}>
                                {
                                    City.map((city, index) => {
                                        return <div key={city.id} className='col-span-1 py-[18px] bg-[white] shadow-md hover:shadow-lg border-[#24272C] border-[1px] rounded-[8px] border-opacity-10 hover:border-opacity-25 flex flex-col justify-center items-center '>
                                            <img src={city.image} alt={city.city} className='h-[90px] w-[90px] ' />
                                            <p className='text-[16px] text-[#24272C] text-opacity-70 font-semibold'>{city.city}</p>
                                        </div>
                                    })
                                }
                            </div>
                            <div>
                                <img src={citySearchBG} alt="bg" className='h-[250px] absolute z-[-10] bottom-[-4px] right-0' />
                            </div>
                        </div>

                        {/* popular cars */}
                        <div className='mt-[20px] '>
                            <PopularCars heading={"Popular cars"} />
                        </div>


                        {/* Latest News */}
                        <div className='mt-[20px]'>
                            <ReviewAndNewFeature data={{
                                heading: "Latest News on EV cars", more: "View All Electric Car News", features: [{
                                    image: toyotaUrban, para1: "Toyota Urban Cruiser Unveiled Globally As Rebadged Maruti Suzuki eVX", para2: `The Urban Cruiser features the same battery pack and motors as the eVX, but unlike their other
                                    shared products, these looks a lot different from each other`, by: "Ansh", date: "Dec 12, 2024"
                                }]
                            }} />
                        </div>

                        {/* road test review for electric car */}
                        <div className='mt-[20px]'>
                            <ReviewAndNewFeature data={{ heading: "Electric Car Road Test Reviews", more: "View All Road Test Reviews", features: [{ image: MahindraBE, para1: "Mahindra BE 6: Unapologetically Fun!", para2: "Finally an SUV where the driver takes centrestage and everything else is secondary!", by: "Dipan", date: "Dec 05, 2024" }] }} />
                        </div>

                        <div className='mt-[20px] h-[200px] shadow-md border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 '>
                            faqs container
                        </div>


                    </div>
                    <div className='w-full md:w-[23%] mt-[20px] flex flex-col gap-[20px]'>
                        {/* right section */}
                        <div className='w-full h-[165px] px-[18px] py-[20px] shadow-md border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex justify-center items-center'>
                            ads
                        </div>
                    </div>

                </div>
                <div className='w-full mt-[90px]'>
                    <ContactUs/>
                </div>
            </div>
        </div>
    )
}

export default FindChargingStation