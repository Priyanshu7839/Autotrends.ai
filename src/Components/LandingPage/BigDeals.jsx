import React, { useEffect, useState } from 'react'
import { useScreenResizeValue } from '../../ScreenSizeFunction'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { BigDealsCard } from "../../components";
import KiaEv6Image from '../../assets/DealImage/KiaEv6Image.webp'
import CretaImage from '../../assets/DealImage/CretaDealImage.webp'
import KiaSeltosImage from '../../assets/DealImage/KiaSeltosDealImage.webp'
import ScorpioDealImage from '../../assets/DealImage/ScorpioDealImage.webp'
import TharDealImage from '../../assets/DealImage/TharDealImage.webp'
import { IoCloseCircleSharp } from "react-icons/io5";
import confetti from "canvas-confetti";
import { Button } from "../../Components/ui/button";
import { openSignInPopup } from '../../Store/GlobalSigninSlice';







const BigDeals = () => {
    const breakpoint = useScreenResizeValue()
      const dispatch = useDispatch();
      const navigate = useNavigate();

      const userDetails = useSelector((state)=>state.UserDetails)
      const [contactDealer,setContactDealer] = useState(false);
      const [BigDealsPopup,setBigDealsPopup] = useState(false)
      const [dealProp,setDealProp] = useState(null);



      const Deals = [
        {
          carName: 'Kia Seltos',
          image:KiaSeltosImage,
          dealership: 'Jai Pitambra Kia',
          dis: '20000',
          accesories: '3000',
          desc: 'Stylish SUV with great features and an exciting discount offer.',
          delivery:'Delivery Within 48 Hours'
        },
        {
          carName: 'Kia EV6',
          image:KiaEv6Image,
          dealership: 'Jai Pitambra Kia',
          dis: '15 Lakhs',
          accesories: '5000',
          Emi: '1,57,531',
          desc:'Stylish SUV with great features and an exciting discount offer.',
          delivery: 'Same Day Delivery'
        },
        {
          carName: 'Hyundai Creta',
          image:CretaImage,
          dealership: 'Natraj Hyundai',
          dis: '15000',
          accesories: '2000',
          desc: 'Reliable compact SUV, perfect family car with great discount.',
          delivery:'Delivery Within 1 Week'
        },
        {
          carName: 'Mahindra Thar',
          image:TharDealImage,
          dealership: 'Mahindra Natraj Mobiles',
          dis: '1.5 Lakhs',
          accesories: '4000',
          desc: 'Rugged off-roader with bold looks and big price cut.',
          delivery:'Delivery Within 48 Hours'
        },
        {
          carName: 'Mahindra Scorpio N',
          image:ScorpioDealImage,
          dealership: 'Mahindra Natraj Mobiles',
          dis: '20000',
          accesories: '3000',
          desc: 'Powerful SUV with spacious cabin and thrilling performance offer.',
          delivery:'Delivery Within 1 Week'

        },
      ];

      const showConfetti = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
 
    const frame = () => {
      if (Date.now() > end) return;
 
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
        zIndex:999999
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });
 
      requestAnimationFrame(frame);
    };
 
    frame();
  };

  useEffect(()=>{
    if(userDetails.loggedIn && dealProp){
      setBigDealsPopup(true)
    }
  },[userDetails.loggedIn])
      
  
  return (
    <div className="flex items-center justify-center bg-[#FFFFFF]">
      <div
        className={`${breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]"} 
      flex gap-[20px]  pt-[20px] border-[1px] border-[#23242c1a] relative  rounded-[16px] flex-col font-1
    `}
      >
        <div className="flex flex-col gap-[20px] ">
          <h1 className="font-medium font-1 text-[1.4375rem] text-color-9 px-[24px]">
         Big Deals on Cars
          </h1>

         
          <div className="w-[100%]  flex items-center justify-center py-[10px] pb-[20px] px-[24px] mostSearched_Carousel">
                <Swiper
                modules={[Autoplay]}
                autoplay={true}
                allowTouchMove={true}
                    spaceBetween={0}
                    breakpoints={{
                      0:{
                        slidesPerView:1
                      },
                      600:{
                        slidesPerView:1.2
                      },
                      700:{
                        slidesPerView:1.5
                      },
                       850:{
                          slidesPerView:1.8
                       },
                       950:{
                        slidesPerView:2
                       },
                       1050:{
                        slidesPerView:2.2
                       },
                        1150:{
                        slidesPerView:2.5
                       },
                       1300:{
                        slidesPerView:2.8
                       },

                       1400:{
                          slidesPerView:3
                       }

                    }}
                   
                >
                    {Deals.map((deal,index) => {
                            return (
                                <SwiperSlide  key={index} onClick={()=>{
                                    if(userDetails.loggedIn){
                                    setBigDealsPopup(true)
                                    setDealProp(deal)
                                    }
                                    else{
                                      setDealProp(deal)
                                      dispatch(openSignInPopup(true));
                                    }
                                    
                                }} >
                                    <>
                                        <BigDealsCard img= {deal.image}
                                                    name={deal.carName}
                                                    accesories={deal.accesories}
                                                    dis = {deal.dis}
                                                    desc = {deal.desc}
                                                    delivery = {deal.delivery}
                                                    dealership={deal.dealership}
                                        />
                                    </>
                                </SwiperSlide>
                            )
                        })
                    }
                 

                </Swiper>
            </div>

           
        </div>

        <div className={`w-[100vw] h-[100vh] bg-[rgba(0,0,0,.6)] fixed  top-0 left-0 z-[9999] flex items-center justify-center
          ${BigDealsPopup?'flex':'hidden'}
          `}>
                       {!contactDealer &&
                             
                             <div className={`bg-[#fff] p-[1rem] flex flex-col gap-[1rem] rounded-[8px] font-1
                              ${breakpoint<=412?'w-[375px]':'w-[400px]'}
                             `}>
                                
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[1.5rem] font-semibold'>{dealProp?.carName}</h1>
                                    <div
                                    onClick={()=>{
                                     setBigDealsPopup(false)
                                    }}
                                    className='cursor-pointer'
                                    >
                                      <IoCloseCircleSharp/>
                                    </div>
                                </div>
                                <div>
                                  <img src={dealProp?.image} alt="" />
                                </div>
                                <div className='border-b-[1px] border-[#c1c7cd] pb-[1rem] font-medium'>
                                 
                                  <h1 className='flex items-center justify-between gap-[1rem]'>On-Road Price:  <span>₹65,00,000</span></h1>
                                  <h1 className='flex items-center justify-between gap-[1rem]'>Discount:<span>{dealProp?.dis}</span></h1>
                                  <h1 className='flex items-center justify-between gap-[1rem]'>Accesories Worth:<span>₹2000</span></h1>
                                </div>
                                <div className='border-b-[1px] border-[#c1c7cd] pb-[1rem] font-medium'>
                                  <h1 className='flex items-center justify-between gap-[1rem]'>Day Of Delivery : <h1>{dealProp?.delivery}</h1> </h1>
                                 
                                </div>
                                <div className='border-b-[1px] border-[#c1c7cd] pb-[1rem] flex flex-col gap-[1rem] font-medium'>
                                  <div>
                                  <h1 className='flex items-center justify-between gap-[1rem]'>Manufacturing Year:<span>2023</span></h1>
                                    <h1 className='flex items-center justify-between gap-[1rem]'>Color: <span>Aurora Black Pearl</span></h1>
                                    <h1 className='flex items-center justify-between gap-[1rem]'>Model: <span>GT Line</span></h1>
                                  </div>
                      
                                </div>
                                 
                                  <Button className='px-[1rem] py-[.5rem] bg-[#0085ff] text-center text-color-1 rounded-[8px] flex items-center justify-center gap-[.5rem]'
                                  onClick={()=>{
                                 showConfetti()
                                   
                                    setContactDealer(true)}}
                                  >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                                  Request Callback  
                      
                                  </Button>
                               
                              
                              </div>}
                      
                              {contactDealer&& 
                              <div className='w-[300px] p-[1rem] bg-[#fff] flex flex-col gap-[1rem] items-center justify-center rounded-[12px]'>
                                <h1 className='font-medium'>Your Enquiry has been registered with us. Our team will get back to you shortly.</h1>
                               <button  onClick={()=>{
                                setBigDealsPopup(false)
                                setContactDealer(false)
                              }}
                                className='px-[1rem] py-[.5rem] bg-[#0085ff] text-center text-color-1 rounded-[8px] flex items-center justify-center gap-[.5rem]'>Done</button>
                              </div>
                              }
        </div>

</div>
</div>
  )
}

export default BigDeals