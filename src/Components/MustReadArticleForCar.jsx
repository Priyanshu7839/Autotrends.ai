import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'

import kia from "../Asset/kia-article.png"
import seltos from "../Asset/seltos-article.png"
import volk from "../Asset/seltos-volk-article.png"
const MustReadArticleForCar = () => {
    return (
        <div className='px-[15px] md:px-[18px] py-[20px] shadow-md border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-2'>
            <h1 className='text-[20px] md:text-[24px] font-semibold'>
                {"Must read articles before buying Kia Seltos"}
            </h1>
            <div className=' flex gap-3 max-md:overflow-auto ' style={{scrollbarWidth:"none"}}>
                
                        <div className=' flex flex-col gap-4 justify-between  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 overflow-clip'>
                            <div className='flex justify-center items-center'>
                                <img src={kia} alt="" className='h-[195px] max-md:min-w-[300px] md:w-full ' />
                            </div>
                            <div className='flex flex-col pb-[10px] px-[15px] font-semibold  text-[12px] text-[#24272C] text-opacity-70'>
                                <p className='px-[2px] text-[15px] text-[#24272C] '>Kia Seltos 6000 Km Update: Alibaug
                                    In The Summer</p>
                                <p>Our long-term Kia Seltos visits Alibaug on
                                    its first road trip.</p>
                                <div className='flex gap-2'>
                                    <li>By Nabeel</li>
                                    <li>• Apr 30, 2024</li>

                                </div>
                            </div>

                        </div>
                   
                        <div className='flex flex-col gap-4 justify-between  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 overflow-clip'>
                            <div className='flex justify-center items-center'>
                                <img src={seltos} alt="" className='h-[195px] max-md:min-w-[300px] md:w-full ' />
                            </div>
                            <div className='flex flex-col pb-[10px] px-[15px] font-semibold  text-[12px] text-[#24272C] text-opacity-70'>
                                <p className='px-[2px] text-[15px] text-[#24272C] '>Everything You Need To Know About
                                    The New Kia Seltos Ahead Of Its
                                    Debut Tomorrow</p>
                                <p>With the facelift, the Seltos will become a …</p>
                                <div className='flex gap-2'>
                                    <p>By Rohit</p>
                                    <li>• July 04, 2024</li>

                                </div>
                            </div>

                        </div>
                    
                        <div className='flex flex-col gap-4 justify-between  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 overflow-clip'>
                            <div className='flex justify-center items-center'>
                                <img src={volk} alt="" className='h-[195px] max-md:min-w-[300px] md:w-full ' />
                            </div>
                            <div className='flex flex-col pb-[10px] px-[15px] font-semibold  text-[12px] text-[#24272C] text-opacity-70'>
                                <p className='px-[2px] text-[15px] text-[#24272C] '>Kia Seltos DCT vs Volkswagen Taigun
                                    DCT vs Skoda Kushaq DCT: Real-
                                    world Performance Comparison</p>
                                <p>Can the German duo match the performa…</p>
                                <div className='flex gap-2 '>
                                    <p>By Shreyash</p>
                                    <li>• Nov 27, 2024</li>

                                </div>
                            </div>

                        </div>
                    

            </div>


        </div>
    )
}

export default MustReadArticleForCar