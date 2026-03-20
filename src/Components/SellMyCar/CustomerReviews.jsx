import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import google from "../../Asset/SellMyCar/HowAutoTrendsWork/googleIcon-svg.svg"
import star from "../../Asset/SellMyCar/HowAutoTrendsWork/yellow-star.svg"


const CustomerReviews = () => {
    const [isMobile,setIsMobilie]=useState(false);
    const [innerWidth,setInnerWidth]=useState(window.innerWidth);
    useEffect(() => {
        if(innerWidth<=440){
            setIsMobilie(true);
        }
    })
    const reviews = [
        {
            name: 'Sai Krishna',
            rating: 4,
            reviewText: "Very good experience dealing with them and it's hassle free...",
            profilePic: "https://i.pravatar.cc/40?img=1", 
        },
        {
            name: 'nishant lal',
            rating: 5,
            reviewText: 'I would like to share an exceptional and seamless experienc...',
             profilePic: "https://i.pravatar.cc/40?img=2",
        },
        {
            name: 'kaushik mishra',
            rating: 5,
            reviewText: 'Sold my 6 years old grand i10 car at an awesome price. The enti...',
            profilePic: "https://i.pravatar.cc/40?img=3",
        },
        {
            name: 'kaushik mishra',
            rating: 5,
            reviewText: 'Sold my 6 years old grand i10 car at an awesome price. The enti...',
            profilePic: "https://i.pravatar.cc/40?img=3",
        },
        
    ];

    return (
        <div className=" md:max-w-[880px]">
            {/* Title */}
            <h2 className="text-[20px] md:text-[28px] font-bold text-[#24272C] text-center mb-12">
                Customer Reviews
            </h2>

            {/* Overall rating and Google logo */}
            <div className="flex mb-6">
                <div className="bg-[white] rounded-md px-3 py-2 flex items-center">
                    <img src={google} alt="" />
                    <span className="font-bold text-sm mr-1">4.8</span>
                    <img src={star} alt=""  className=" w-[18px] h-[18px] mr-1" />
                    <span className="text-sm">4.8 of 5</span>
                </div>
            </div>

            {/* Swiper container */}
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={isMobile?1:3}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev'
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024:{
                        slidesPerView: 3
                    }
                }}
                className='relative'
            >
                {/* Review Cards */}
                {reviews.map((review, index) => (
                    <SwiperSlide key={index} className="bg-white rounded-[6px] border border-[#DDDDDD] p-[21px] h-auto relative min-h-[160px] max-w-[280px]">
                        {/* Review Card */}
                        
                            <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                            <img src={review.profilePic} alt={review.name} className="w-8 h-8 rounded-full object-cover" />
                            <div>
                            <p className="text-sm font-semibold text-[#24272C]">{review.name}</p>
                            <p className="flex items-center [#24272C] ">
                                <img src={star} alt=""  className="inline-block w-[14px] h-[14px] mr-1" />
                            {review.rating}
                                </p>
                                </div>
                            </div>
                                <img src={google} alt="" />
                            </div>
                            <p className="text-sm text-[#24272C] mt-2 line-clamp-2 ">{review.reviewText} <a href="#" className='text-[#007BFF]'>Read More</a> </p>
                            
                    </SwiperSlide>
                ))}
                 {/* <div className="swiper-button-next !absolute !z-[50] !top-1/2 !-right-0 !bg-white !text-gray-600 !px-2 !py-2 rounded-full hover:!bg-gray-300 active:!bg-gray-400  "></div>
                <div className="swiper-button-prev !absolute !z-[10] !top-1/2 !-left-4 !bg-white !text-gray-600 !px-2 !py-2 rounded-full hover:!bg-gray-300 active:!bg-gray-400"></div> */}
            </Swiper>
        </div>
    );
};

export default CustomerReviews;