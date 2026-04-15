import React from 'react'
import kiaseltos from "../Asset/kiaseltos.png"
import colours from "../Asset/colours-pallete.png"
import view from "../Asset/360-view.png"
import images from "../Asset/images-pallete.png"
import likes from "../Asset/likes.png"
import share from "../Asset/share.png"
import fullStar from "../Asset/star.png"
import halfStar from "../Asset/half-star.png"
import edit from "../Asset/Edit.png"
import tag from "../Asset/tag.png"
import engine from "../Asset/engine.png"
import torque from "../Asset/torque.png"
import mileage from "../Asset/mileage.png"
import power from "../Asset/power.png"
import seating from "../Asset/seating-capacity.png"
import drive from "../Asset/torque-type.png"
import arrowright from "../Asset/right-arrow.png"

import CalculateEmi from "./SideComponents/CalculateEmi.jsx"
import arrowDown from "../Asset/down-arrow.png"


import thumbsup from "../Asset/thumbsup.png"
import thumbsdown from "../Asset/thumbsdown.png"
import greenStar from "../Asset/greenstar.png"
import ReviewsList from './ReviewsList'

import kiaseltos1 from "../Asset/kiaseltos1.png"
import kiaseltos2 from "../Asset/kiaseltos2.png"
import kiaseltos3 from "../Asset/kiaseltos3.png"
import view360Image from "../Asset/360viewimage.png"
import roadtest from "../Asset/roadtestkiaseltos.png"

import Compare from "./CompareTable.jsx"
import videoUrlImg from "../Asset/videourlImg.png"
import arrowTrends from "../Asset/arrowIconTrends.png"

import Brochure from "./SideComponents/Brochure.jsx"
import CarPriceInIndia from './SideComponents/CarPriceInIndia.jsx'
import TrendingCars from './SideComponents/TrendingCars.jsx'



import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'

import SimilarCars from './SideComponents/SimilarCars.jsx'
import AreYouConfused from './AreYouConfused.jsx'
import ColorVariations from './ColorVariations.jsx'
import HighlightImages from './HighlightImages.jsx'
import MoreOptionsToConsiderData from '../MockData/MoreOptionsToConsiderData.jsx'
import UserReviewForCar from './UserReviewForCar.jsx'
import VirtualExperience from './VirtualExperience.jsx'
import { useNavigate } from 'react-router-dom'
const BrandCar = () => {
    
    const navigate=useNavigate();
    return (
        <div className='parent-div flex justify-center'>


            <div className=' w-[calc(100%-240px)] mt-[32px] mb-[40px] '>

                {/* Basic Details and Price */}
                <div className='w-full flex gap-[32px] h-[326px]'>
                    <div className='w-[38%] h-[326px] flex flex-col gap-4' onClick={()=>{navigate("/seltos")}}>
                        <img src={kiaseltos} alt="" className='w-[484px] h-[272px] rounded-md' />
                        <div className=' flex gap-[35px] px-auto h-[54px] ml-[20px] '>
                            <div className=' flex gap-2'>
                                <img src={colours} alt="" className='w-[24px] h-[24px] ' />
                                <p className='text-[14px] text-[#6F6F6F]'>Colours</p>
                            </div>
                            <div className=' flex gap-2 '>
                                <img src={images} alt="" className='w-[24px] h-[24px] ' />
                                <p className='text-[14px] text-[#6F6F6F]'>Images</p>
                            </div>
                            <div className=' flex gap-2 '>
                                <img src={view} alt="" className='w-[24px] h-[24px] ' />
                                <p className='text-[14px] text-[#6F6F6F]'>View</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[60%] '>
                        <div className='flex flex-col gap-[8px]'>
                            <div className='flex justify-between'>
                                <h1 className='text-[#24272C] text-[28px] font-semibold leading-[140%]'>Kia Seltos <sub className='text-[13px] text-[#2176AE]  '>change car</sub></h1>
                                <div className='flex gap-[21px]'>
                                    <div className='flex justify-center items-center  h-[32px] w-[32px] rounded-full bg-[#E9E9E9]'>
                                        <img src={likes} alt="" className='h-[17px] w-[17px]' />
                                    </div>
                                    <div className='flex justify-center items-center h-[32px] w-[32px] rounded-full bg-[#E9E9E9] ' >
                                        <img src={share} alt="" className='h-[20px] w-[17px]' />
                                    </div>
                                </div>
                            </div>

                            <div className='mt-[8px] flex gap-2 items-baseline'>
                                <div className='flex gap-[4px]'>
                                    <img src={fullStar} alt="" className='h-[13px] w-[13px]' />
                                    <img src={fullStar} alt="" className='h-[13px] w-[13px]' />
                                    <img src={fullStar} alt="" className='h-[13px] w-[13px]' />
                                    <img src={fullStar} alt="" className='h-[13px] w-[13px]' />
                                    <img src={halfStar} alt="" className='h-[13px] w-[13px]' />
                                </div>
                                <p className='text-[14px] text-[#24272C]'>1.2k Reviews</p>
                                <p className='text-[12px] text-[#24272C] rounded-md  border-[1px] border-[#cfcfd5]  px-[9px] py-[4px] '> Rate & win ₹1000</p>
                            </div>
                            <div className='w-[74%]'>
                                <p className='font-medium text-[20px] '>
                                    11.35 - 17.60 Lakh<sup>*</sup><span className='pl-[8px] text-[14px] text-[#2176AE]  '>Get On-Road Price</span>
                                </p>
                                <p className='text-[#24272C] text-opacity-50 text-[13px] flex items-baseline '>
                                    *Ex-showroom Price in <span className='pl-[8px] text-[12px] text-[#2176AE] flex gap-1 items-baseline' >New Delhi <img src={edit} alt="" className='h-[11px] w-[11px]' /></span>
                                </p>
                                <p className='text-[#24272C] text-opacity-70 text-[14px]'>The Kia Seltos is among the most popular compact SUVs in India. It offers a blend of style, comfort, features, and performance, making it an appealing choice to those looking for a feature-rich family car with enough space for five.</p>
                            </div>
                            <div>
                                <button className="bg-[#0B66FA] text-white text-[16px] font-bold px-[50px] py-[12px] rounded-md " onClick={() => { }}>Get Best live Deals</button>
                            </div>
                            <div>
                                <p className='mt-[6px] text-[#24272C] text-opacity-70 text-[13px] flex gap-[8px] items-baseline'><span className=''><img src={tag} alt="" className='w-[18px] h-[18px] ' /></span>Don't miss out on the best Deal with Aotutrends</p>
                            </div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>

                {/* Car Specs section */}
                <div className='flex gap-3'>
                    <div className='w-[76%] shadow-inner border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 px-[20px] py-[20px] flex flex-col gap-[8px] '>
                        <div>
                            <h1 className='text-[23px] font-medium'>Kia Seltos specs & features</h1>
                        </div>
                        <div className='flex gap-[36px] py-[6px] text-[14px] text-[#24272C] text-opacity-70 border-b-[1px] '>
                            <li className='font-bold text-[#24272C] opacity-100 border-b-[#0085FF] border-b-[4px] py-[10px]'>Key Specifications</li>
                            <li className='py-[10px]'>Top Features</li>
                            <li className='py-[10px] '>Stand Out Features</li>
                        </div>

                        <div className='grid grid-cols-2 gap-4 gap-y-3 py-[15px] '>
                            <div className=' col-span-1 text-[15px] flex justify-between py-[10px] '>
                                <p className='text-[#24272C] text-opacity-70 flex items-center gap-[12px]'><span><img src={engine} alt="" className='w-[16px] h-[16px]' /></span> Engine</p>
                                <p className='font-semibold text-[#24272C] '>1482 cc - 1497 cc</p>
                            </div>
                            <div className=' col-span-1 text-[15px] flex justify-between py-[10px]'>
                                <p className='text-[#24272C] text-opacity-70 flex items-center gap-[12px]'><span><img src={power} alt="" className='w-[16px] h-[16px]' /></span> Power</p>
                                <p className='font-semibold text-[#24272C] '>113.42 - 157.81 bhp</p>
                            </div>
                            <div className=' col-span-1 text-[15px] flex justify-between py-[10px]'>
                                <p className='text-[#24272C] text-opacity-70 flex items-center gap-[12px]'><span><img src={torque} alt="" className='w-[16px] h-[16px]' /></span> Torque</p>
                                <p className='font-semibold text-[#24272C] '>144 Nm - 253 Nm</p>
                            </div>
                            <div className=' col-span-1 text-[15px] flex justify-between py-[10px]'>
                                <p className='text-[#24272C] text-opacity-70 flex items-center gap-[12px]'><span><img src={seating} alt="" className='w-[16px] h-[16px]' /></span> Seating Capacity</p>
                                <p className='font-semibold text-[#24272C] '>5</p>
                            </div>
                            <div className=' col-span-1 text-[15px] flex justify-between py-[10px]'>
                                <p className='text-[#24272C] text-opacity-70 flex items-center gap-[12px]'><span><img src={drive} alt="" className='w-[16px] h-[16px]' /></span> Drive Type</p>
                                <p className='font-semibold text-[#24272C] '>2WD</p>
                            </div>
                            <div className=' col-span-1 text-[15px] flex justify-between py-[10px]'>
                                <p className='text-[#24272C] text-opacity-70 flex items-center gap-[12px]'><span><img src={mileage} alt="" className='w-[16px] h-[16px]' /></span> Mileage</p>
                                <p className='font-semibold text-[#24272C] '>17 - 20.7 kmpl</p>
                            </div>
                        </div>
                        <p className='flex gap-1 text-[#0085FF] font-semibold items-center'>
                            View All Specs and Features <img src={arrowright} alt="" className='w-[19px] h-[18px] ' />
                        </p>

                    </div>
                    <div className='w-[23%] h-[250px] '>
                        <CalculateEmi />
                    </div>
                </div>

                {/* Updates */}
                <div className='mt-[20px] w-[76%] shadow-inner border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 px-[20px] py-[20px] flex flex-col gap-[8px] '>
                    <h1 className='text-[24px] font-semibold'>Kia Seltos latest updates</h1>
                    <p className='text-[15px] text-[#24272C] text-opacity-70'>What is the latest update on the Kia Seltos?</p>
                    <p className='text-[15px] text-[#24272C] text-opacity-70'>A new Gravity Edition, based on the higher-spec HTX variant of the Seltos, has been launched. This variant is priced from Rs 16.63 lakh to</p>
                    <div><button className=' text-[#0085FF] font-semibold text-[14px] rounded-sm flex gap-2 items-center'> Read More <span><img src={arrowDown} alt="" className='h-[16px] w-[16px] ' /></span></button></div>
                </div>

                <div className='mt-[22px] flex gap-3'>
                    <div className='w-[76%] shadow-inner border-[#24272C] border-[1px] rounded-[16px] border-opacity-10  py-[25px] flex flex-col gap-[8px] '>

                        <div className='px-[20px] '>
                            <h1 className='text-[24px] font-semibold'>Kia Seltos price</h1>
                            <p className='text-[15px] text-[#24272C] text-opacity-70 '>Kia Seltos price starts at ₹ 10.90 Lakh and top model price goes upto ₹ 20.45 Lakh. Seltos is offered in 31 variants - the base model of Seltos is HTE and the
                                top model Kia Seltos X-Line Turbo DCT.</p>

                            <div className='flex gap-[36px] py-[6px] text-[14px] text-[#24272C] text-opacity-70 border-b-[1px] '>
                                <li className='font-bold text-[#24272C] opacity-100 border-b-[#0085FF] border-b-[4px] py-[10px]'>All</li>
                                <li className='py-[10px]'>Diesel</li>
                                <li className='py-[10px] '>Petrol</li>
                            </div>
                        </div>

                        <div className='flex '>
                            <div className='w-[33%] px-[20px] flex gap-4 text-[14px] border-r-[1px] border-r-[#24272C] border-opacity-40'>
                                <div className='flex items-center gap-2 text-[14px]'><input type="radio" checked></input> <label htmlFor='id1'>All</label></div>
                                <div className='flex items-center gap-2'> <input type='radio' checked={false}></input><label htmlFor='id2'>Automatic</label></div>
                                <div className='flex items-center gap-2'><input type='radio' checked={false}></input><label htmlFor='id3'>Mannual</label></div>
                            </div>
                            <div className='w-[65%] flex gap-3 ml-[60px] font-semibold text-[#24272C] '>
                                <div className='py-[8px] px-[12px] border-[#24272C] border-[2px] rounded-md border-opacity-10'>
                                    <select>
                                        <option value="Series" selected >Series</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </div>
                                <div className='py-[8px] px-[12px] border-[#24272C] border-[2px] rounded-md border-opacity-10'>
                                    <select>
                                        <option value="Price" selected>Price</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </div>
                                <div className='py-[8px] px-[12px] border-[#24272C] border-[2px] rounded-md border-opacity-10'>
                                    <select>
                                        <option value="Features" selected>Features</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </div>
                                <div className='py-[8px] px-[12px] border-[#24272C] border-[2px] rounded-md border-opacity-10'>
                                    <select>
                                        <option value="Colours" selected>Colous</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div className='bg-[#FAFAFA] grid grid-cols-10 px-[15px] '>
                            <div className=' py-[12px] text-[12px] text-[#24272C] text-opacity-70 font-semibold col-span-3'>Variant</div>
                            <div className=' py-[12px] text-[12px] text-[#24272C] text-opacity-70 font-semibold col-span-2'>Ex-Showroom Price</div>
                            <div className=' py-[12px] text-[12px] text-[#24272C] text-opacity-70 font-semibold grid grid-cols-subgrid col-span-5 '>
                                <div className='flex justify-center col-span-2 col-start-4 pl-[25px] '>Compare</div></div>
                        </div>
                        <div className='pl-[20px] py-[24px]  grid grid-cols-10 items-center border-b-[1px] border-b-[#24272C] border-opacity-10'>
                            <div className='col-span-3'>
                                <p className='text-[18px] text-[#24272C] font-semibold'>Seltos HTE</p>
                                <p className='text-[12px] text-[#24272C] text-opacity-70 '>(Base Model)</p>
                                <p className='text-[12px] text-[#24272C] text-opacity-70 '>1497 cc, Manual, Petrol, 17 kmpl</p>
                                <p className='text-[12px] text-[#24272C] text-opacity-90'>1 Month waiting</p>
                            </div>
                            <div className='col-span-2'>
                                <p className='text-[16px] font-semibold'>10.90 Lakh<sup>*</sup></p>
                                <p className='text-[15px] text-[#0B66FA]  font-semibold'>Get On-Road Price</p>
                            </div>
                            <div className='col-span-3'>
                                <button className=' text-[#0B66FA] border-[1px] border-[#0B66FA] text-[14px] font-bold px-[30px] py-[12px] rounded-md'>View Complete Offers</button>
                            </div>
                            <div className='col-span-2 flex items-center justify-center'>
                                <input type="checkbox" className='h-[18px] w-[18px] ' />
                            </div>
                        </div>
                        <div className='pl-[20px] py-[22px]  grid grid-cols-10 items-center border-b-[1px] border-b-[#24272C] border-opacity-10'>
                            <div className='col-span-3'>
                                <p className='text-[18px] text-[#24272C] font-semibold'>Seltos HTK</p>
                                <p className='text-[12px] text-[#24272C] text-opacity-70 '>(Base Model)</p>
                                <p className='text-[12px] text-[#24272C] text-opacity-70 '>1497 cc, Manual, Petrol, 17 kmpl</p>
                                <p className='text-[12px] text-[#24272C] text-opacity-90'>1 Month waiting</p>
                            </div>
                            <div className='col-span-2'>
                                <p className='text-[16px] font-semibold'>12.29 Lakh<sup>*</sup></p>
                                <p className='text-[15px] text-[#0B66FA]  font-semibold'>Get On-Road Price</p>
                            </div>
                            <div className='col-span-3'>
                                <button className=' text-[#0B66FA] border-[1px] border-[#0B66FA] text-[14px] font-bold px-[30px] py-[12px] rounded-md'>View Complete Offers</button>
                            </div>
                            <div className='col-span-2 flex items-center justify-center'>
                                <input type="checkbox" className='h-[18px] w-[18px] ' />
                            </div>
                        </div>
                        <div className='pl-[20px] py-[22px]  grid grid-cols-10 items-center border-b-[1px] border-b-[#24272C] border-opacity-10'>
                            <div className='col-span-3'>
                                <p className='text-[18px] text-[#24272C] font-semibold'>Seltos HTE Diesel</p>
                                <p className='text-[12px] text-[#24272C] text-opacity-70 '>(Base Model)</p>
                                <p className='text-[12px] text-[#24272C] text-opacity-70 '>1493 cc, Manual, Diesel, 20.7 kmpl</p>
                                <p className='text-[12px] text-[#24272C] text-opacity-90'>1 Month waiting</p>
                            </div>
                            <div className='col-span-2'>
                                <p className='text-[16px] font-semibold'>12.46 Lakh<sup>*</sup></p>
                                <p className='text-[15px] text-[#0B66FA]  font-semibold'>Get On-Road Price</p>
                            </div>
                            <div className='col-span-3'>
                                <button className=' text-[#0B66FA] border-[1px] border-[#0B66FA] text-[14px] font-bold px-[30px] py-[12px] rounded-md'>View Complete Offers</button>
                            </div>
                            <div className='col-span-2 flex items-center justify-center'>
                                <input type="checkbox" className='h-[18px] w-[18px] ' />
                            </div>
                        </div>
                        <div className='pl-[20px] py-[22px]  grid grid-cols-10 items-center border-b-[1px] border-b-[#24272C] border-opacity-10'>
                            <div className='col-span-3'>
                                <p className='text-[18px] text-[#24272C] font-semibold'>Seltos HTK Diesel</p>
                                <p className='text-[12px] text-[#24272C] text-opacity-70 '>(Base Model)</p>
                                <p className='text-[12px] text-[#24272C] text-opacity-70 '>1493 cc, Manual, Diesel, 20.7 kmpl</p>
                                <p className='text-[12px] text-[#24272C] text-opacity-90'>1 Month waiting</p>
                            </div>
                            <div className='col-span-2'>
                                <p className='text-[16px] font-semibold'>13.88 Lakh<sup>*</sup></p>
                                <p className='text-[15px] text-[#0B66FA]  font-semibold'>Get On-Road Price</p>
                            </div>
                            <div className='col-span-3'>
                                <button className=' text-[#0B66FA] border-[1px] border-[#0B66FA] text-[14px] font-bold px-[30px] py-[12px] rounded-md'>View Complete Offers</button>
                            </div>
                            <div className='col-span-2 flex items-center justify-center'>
                                <input type="checkbox" className='h-[18px] w-[18px] ' />
                            </div>
                        </div>
                        <div className='pl-[20px] py-[22px]  grid grid-cols-10 items-center border-b-[1px] border-b-[#24272C] border-opacity-10'>
                            <div className='col-span-3'>
                                <p className='text-[18px] text-[#24272C] font-semibold'>Seltos HTK Plus</p>
                                <p className='text-[12px] text-[#24272C] text-opacity-70 '>(Base Model)</p>
                                <p className='text-[12px] text-[#24272C] text-opacity-70 '>1497 cc, Manual, Petrol, 17 kmpl</p>
                                <p className='text-[12px] text-[#24272C] text-opacity-90'>1 Month waiting</p>
                            </div>
                            <div className='col-span-2'>
                                <p className='text-[16px] font-semibold'>14.06 Lakh<sup>*</sup></p>
                                <p className='text-[15px] text-[#0B66FA]  font-semibold'>Get On-Road Price</p>
                            </div>
                            <div className='col-span-3'>
                                <button className=' text-[#0B66FA] border-[1px] border-[#0B66FA] text-[14px] font-bold px-[30px] py-[12px] rounded-md'>View Complete Offers</button>
                            </div>
                            <div className='col-span-2 flex items-center justify-center'>
                                <input type="checkbox" className='h-[18px] w-[18px] ' />
                            </div>
                        </div>
                        <div><button className='px-[20px] text-[#0085FF] font-semibold text-[14px] rounded-sm flex gap-2 items-center'> View All Variants <span><img src={arrowDown} alt="" className='h-[16px] w-[16px] ' /></span></button></div>
                    </div>

                    <div className='w-[23%] flex flex-col gap-[16px]  '>
                        <div>
                            <Brochure CarName={"Kia Seltos"} BrochureLink={"/brochure-kia-seltos"}/>
                            </div>

                        <div>
                            <CarPriceInIndia/>
                        </div>

                        <div>
                            <TrendingCars/>
                        </div>

                        

                    </div>
                </div>

                {/* Comparision Section Backend Data Source */}

                <div className='flex gap-3 mt-[20px] items-center'>
                    <div className='w-[76%] px-[20px] py-[25px]  shadow-inner border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-4'>
                        <h1 className='text-[20px] text-[#24272C] font-medium pb-[8px]'>Kia Seltos comparison with similar cars</h1>
                        <div className='border-b-[1px] border-b-[#24272C] border-opacity-40 pb-[8px] '>
                            <Compare />
                        </div>
                        <div className=' py-[8px] flex gap-3'>
                            <img src={videoUrlImg} alt="" className='w-[80px] h-[56px] ' />
                            <h1 className='text-[16px] text-[#24272C] font-medium'>Hyundai Creta 2024 vs Kia Seltos Comparison Review in Hindi | AutoTrends |</h1>
                        </div>
                        <div className='bg-[#F75D34] bg-opacity-10 flex gap-1 items-center rounded-xl py-[4px] px-[10px] '>
                            <img src={arrowTrends} alt="" className='w-[18px] h-[11px] ' />
                            <p className='text-[14px] text-[#24272C] text-opacity-70'>Check out the car comparison video!</p>
                        </div>
                    </div>

                    <div className='w-[23%]'>
                        <SimilarCars data={"data"}/>
                    </div>
                </div>

                <div className='mt-[20px] w-[76%] px-[20px] py-[20px]  shadow-inner border-[#24272C] border-[1px] rounded-[16px] border-opacity-10'>
                    <h1 className='text-[24px] font-semibold'>Pros & Cons of Kia Seltos</h1>
                    <div className='flex gap-[20px] mt-[14px] '>
                        <div className='px-[14px] py-[18px] rounded-[8px] text-[15px] bg-[#DFF1E7]  text-[#6BAD23] text-opacity-70 flex flex-col gap-[13px] '>
                            <p className='flex gap-2 items-center text-opacity-100 text-[#24272C] text-[18px]  font-semibold'><span> <img src={thumbsup} alt="" className='w-[17px] h-[17px] ' /></span>Things We Like</p>
                            <li><span className='text-[#24272C]'>Upmarket cabin experience with soft-touch elements and
                                dual 10.25-inch displays.</span></li>
                            <li><span className='text-[#24272C]'>Some features from segments above, including
                                panoramic sunroof, ADAS and dual-zone climate control.</span></li>
                            <li><span className='text-[#24272C]'>Multiple engine options including a diesel with both
                                manual and automatic options.</span></li>
                            <p className='text-[13px] text-[#24272C] underline'>View More </p>
                        </div>
                        <div className='px-[14px] py-[18px] rounded-[8px] text-[15px] bg-[#FF1E3C]  bg-opacity-[3%] text-[#007FFF] text-opacity-70 flex flex-col gap-[13px] '>
                            <p className='flex gap-2 items-end text-opacity-100 text-[#24272C] text-[18px]  font-semibold'><span> <img src={thumbsdown} alt="" className='w-[17px] h-[17px] ' /></span>Things We Don't Like</p>
                            <li><span className='text-[#24272C]'>Crash test is still pending, but is expected to be less than
                                the 5 stars of Kushaq and Taigun.</span></li>
                            <li><span className='text-[#24272C]'>Shallow boot limits the practicality of the space.</span></li>
                        </div>
                    </div>
                </div>

                {/* User reviews */}
                <div className='mt-[20px] w-[76%] '>
                    <UserReviewForCar/>
                </div>


                {/* Mileage  */}
                <div className='mt-[20px] w-[76%] px-[20px] py-[20px]  shadow-inner border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-4'>
                    <h1 className='text-[24px] font-semibold'>Kia Seltos mileage</h1>
                    <div>
                        <p className='text-[14px] text-[#24272C] text-opacity-70 font-semibold'>The Kia Seltos mileage is 17 to 20.7 kmpl. The Diesel models have mileage range between 17 kmpl to 20.7 kmpl with manual/automatic.</p>
                        <p className='text-[14px] text-[#24272C] text-opacity-70 font-semibold' >The Petrol models have mileage range between 17 kmpl to 17.9 kmpl with manual/automatic.</p>
                    </div>

                    <div className='flex flex-col gap-[16px] '>
                        <div className='bg-[#FAFAFA] grid grid-cols-3 px-[15px]  '>
                            <div className=' py-[4px] text-[14px] text-[#24272C] text-opacity-70 font-semibold col-span-1 flex '>Fuel Type</div>
                            <div className=' py-[4px] text-[14px] text-[#24272C] text-opacity-70 font-semibold col-span-1 flex '>Transmission</div>
                            <div className=' py-[4px] text-[14px] text-[#24272C] text-opacity-70 font-semibold col-span-1 flex '>ARAI Mileage</div>
                        </div>

                        <div className='bg-[#FAFAFA] grid grid-cols-3 px-[15px]  '>
                            <div className=' py-[4px] text-[14px] text-[#24272C] font-semibold col-span-1 flex '>Diesel</div>
                            <div className=' py-[4px] text-[14px] text-[#24272C] font-semibold col-span-1 flex '>Manual</div>
                            <div className=' py-[4px] text-[14px] text-[#24272C] font-semibold col-span-1 flex '>20.7 kmpl</div>
                        </div>
                        <div className='bg-[#FAFAFA] grid grid-cols-3 px-[15px]  '>
                            <div className=' py-[4px] text-[14px] text-[#24272C] font-semibold col-span-1 flex '>Diesel</div>
                            <div className=' py-[4px] text-[14px] text-[#24272C] font-semibold col-span-1 flex '>Automatic</div>
                            <div className=' py-[4px] text-[14px] text-[#24272C] font-semibold col-span-1 flex '>20.7 kmpl</div>
                        </div>
                        <div className='bg-[#FAFAFA] grid grid-cols-3 px-[15px]  '>
                            <div className=' py-[4px] text-[14px] text-[#24272C] font-semibold col-span-1 flex '>Petrol</div>
                            <div className=' py-[4px] text-[14px] text-[#24272C] font-semibold col-span-1 flex '>Automatic</div>
                            <div className=' py-[4px] text-[14px] text-[#24272C] font-semibold col-span-1 flex '>17.9 kmpl</div>
                        </div>
                        <div className='bg-[#FAFAFA] grid grid-cols-3 px-[15px]  '>
                            <div className=' py-[4px] text-[14px] text-[#24272C] font-semibold col-span-1 flex '>Petrol</div>
                            <div className=' py-[4px] text-[14px] text-[#24272C] font-semibold col-span-1 flex '>Manual</div>
                            <div className=' py-[4px] text-[14px] text-[#24272C] font-semibold col-span-1 flex '>17.7 kmpl</div>
                        </div>
                    </div>
                    <p className=' flex gap-1 text-[#0085FF] font-semibold items-center'>
                        Check Kia Seltos Mileage Details <img src={arrowright} alt="" className='w-[19px] h-[18px] ' />
                    </p>
                </div>


                {/* Colour Variations */}
                <div className='w-[76%] mt-[20px] '>
                    <ColorVariations/>
                </div>

                {/* Kia Seltos IMages */}
                <div className='mt-[20px] w-[76%] px-[20px] py-[20px]  shadow-inner border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-4'>
                    <h1 className='text-[24px] font-semibold'>Kia Seltos Images</h1>
                    <p className='text-[14px] text-[#24272C] text-opacity-70 font-semibold'>We have 20 images of Kia Seltos, view picture gallery of Seltos which includes exterier, interior & 360° view of SUV car.</p>
                    <div className=' '>

                        <Swiper
                            // spaceBetween={25}
                            loop={true}
                            // freeMode={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: true,
                            }}
                            breakpoints={{
                                '@0.00': {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                '@0.75': {
                                    slidesPerView: 2,
                                    spaceBetween: 12,
                                },
                                '@1.00': {
                                    slidesPerView: 3,
                                    spaceBetween: 12,
                                },
                                '@1.50': {
                                    slidesPerView: 3,
                                    spaceBetween: 12,
                                },
                            }}
                            modules={[FreeMode, Pagination, Autoplay]}
                            className="w-full h-full"
                        >
                            <SwiperSlide >
                                <div className=''>
                                    <div>
                                        <img src={kiaseltos1} alt="" className='h-[195px] w-[290px] rounded-xl' />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className=''>
                                    <div>
                                        <img src={kiaseltos2} alt="" className='h-[195px] w-[290px] rounded-xl' />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className=''>
                                    <div>
                                        <img src={kiaseltos3} alt="" className='h-[195px] w-[290px] rounded-xl' />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className=''>
                                    <div>
                                        <img src={kiaseltos2} alt="" className='h-[195px] w-[290px] rounded-xl' />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>

                    <p className='flex gap-1 text-[#0085FF] font-semibold items-center'>
                        View All Seltos Images <img src={arrowright} alt="" className='w-[19px] h-[18px] ' />
                    </p>

                </div>


                {/* Virtual Experience */}
                <div className='w-[76%] mt-[20px] '>
                    <VirtualExperience/>
                </div>


                {/* Road Test */}
                <div className='mt-[20px] w-[76%] px-[20px] py-[20px]  shadow-inner border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-3'>
                    <h1 className='text-[24px] font-semibold'>{"Kia Seltos"} Road Test</h1>
                    <div className='shadow-inner border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 overflow-clip'>
                        <div className='flex gap-4'>
                            <div className=''>
                                <img src={roadtest} alt="road test" className='h-[195px] w-[305px] scale-y-105' />
                            </div>
                            <div className='py-[20px] flex flex-col gap-2'>
                                <p className='text-[15px] text-[#24272C]  font-semibold'>Kia Seltos 6000 Km Update: Alibaug In The Summer</p>
                                <p className='text-[14px] text-[#24272C] text-opacity-70 font-semibold'>Our long-term Kia Seltos visits Alibaug on its first road trip.</p>
                                <p className='text-[12px] text-[#24272C] text-opacity-70 font-semibold flex gap-3'>By Nabeel <span className='list-outside'><li >Apr 30, 2024</li></span></p>

                            </div>
                        </div>
                    </div>
                    <p className=' flex gap-1 text-[#0085FF] font-semibold items-center'>
                        View All Kia Seltos Road Test<img src={arrowright} alt="" className='w-[19px] h-[18px] ' />
                    </p>
                </div>


                {/* More Images */}
                <div className='w-[76%] mt-[20px] '>
                    <HighlightImages data={MoreOptionsToConsiderData}/>
                </div>

                {/* Ask Ques */}
                <div className='w-[76%] mt-[20px]'>
                    <AreYouConfused/>
                </div>
            </div>

        </div>
    )
}

export default BrandCar