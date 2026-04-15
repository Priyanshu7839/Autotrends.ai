import React from 'react';
import bgGradient from "../Asset/SellMyCar/bg-gradient.webp"
import directlySellBuyer from "../Asset/SellMyCar/directly-sell-buyer.svg"
import forward from "../Asset/SellMyCar/forward.svg"
import shareYourDetails from "../Asset/SellMyCar/share-your-car-detail.svg"
import unwantedCall from "../Asset/SellMyCar/unwanted-call-svg.svg"
import verified from "../Asset/SellMyCar/verified-svg.svg"
import zeroCommission from "../Asset/SellMyCar/zero-commission-svg.svg"
import featureImage from "../Asset/SellMyCar/featureImage.png"
import interestedBuyer from "../Asset/SellMyCar/detail-buyer-svg.svg"
import HowAutotrensWorks from '../Components/SellMyCar/HowAutotrensWorks';
import SellYourCarForm from '../Components/SellMyCar/SellYourCarForm';

import rcs from "../Asset/SellMyCar/HowAutoTrendsWork/rcs-svg.svg"
import carsBought from "../Asset/SellMyCar/HowAutoTrendsWork/cars-bought-svg.svg"
import dealerNetwork from "../Asset/SellMyCar/HowAutoTrendsWork/dealer-newtork-svg.svg"
import serviceableLocation from "../Asset/SellMyCar/HowAutoTrendsWork/servicable-location-svg.svg"
import CustomerReviews from '../Components/SellMyCar/CustomerReviews';

import google from "../Asset/SellMyCar/Google.png.png"
import axis from "../Asset/SellMyCar/axis-bank.png.png"
import sequoia from "../Asset/SellMyCar/sequoia.png.png"
import hdfc from "../Asset/SellMyCar/hdfc-bank.png.png"
import hillhouse from "../Asset/SellMyCar/hillhouse.png.png"
import SellCarsByPopularBrands from '../Components/SellMyCar/SellCarsByPopularBrands';

import FAQs from "../Components/NewCarLoan/FAQs"
import { ContactUs } from '../components';


const SellMyCar = () => {
  return (
    <div className=" ">
      <div
        className="bg-no-repeat bg-left-top bg-cover px-5 py-7 md:px-0 w-full"
        style={{
          backgroundImage:
            'url(../Asset/SellMyCar/bg-gradient.jpg)',
        }}
      >
        <div className="container mx-auto md:max-w-[1120px]  md:px-5 md:pt-[55px]  md:pb-0 ">
          <div className="flex flex-col md:flex-row  justify-between ">
            <div className="md:max-w-[441px] md:inline-block md:align-top ">
              <h1
                className="text-2xl md:text-[36px] font-semibold text-[#333846] mb-2 md:mb-4 leading-9 md:leading-[46.8px]"
              >
                Sell your car from home for the best price
              </h1>
              <p
                className=" bg-gradient-to-r from-transparent to-gray-300 inline-block text-gray-800 text-xs  md:text-[15px] font-normal  md:font-light leading-[29px] md:leading-[24px] px-2 md:px-[8px] py-0.5 rounded-full  md:pt-1 md:pb-1 md:pr-0"
              >
                Get an additional amount of up to{' '}
                <span className="font-semibold">₹25,000</span>
              </p>
              <div className="mt-2 md:mt-[24px]">
                <ul className="flex  gap-7 md:gap-[40px] mt-4">
                  <li
                    className="relative flex flex-col min-w-[89px] w-[89px] md:w-[100px] md:min-w-[100px] "
                  >
                    <div className="mr-2 md:mr-0 relative z-10 w-8 h-8 md:h-9 md:w-9">
                      <img
                        alt="faster"
                        className="w-8 h-8 md:w-9 md:h-9"
                        src={verified}
                      />
                    </div>
                    <div className="text-gray-800 text-xs md:text-[14px] font-semibold  mt-1 md:mt-1 leading-5 md:leading-[20px]">
                      Verified<span className="block font-normal ">Car Buyers </span>
                    </div>
                  </li>
                  <li
                    className="relative flex flex-col min-w-[89px] w-[89px] md:w-[100px] md:min-w-[100px] "
                  >
                    <div className="mr-2 md:mr-0 relative z-10 w-8 h-8 md:h-9 md:w-9">
                      <img
                        alt="faster"
                        className="w-8 h-8 md:w-9 md:h-9"
                        src={zeroCommission}
                      />
                    </div>
                    <div className="text-gray-800 text-xs md:text-[14px] font-semibold mt-1 md:mt-1 leading-5 md:leading-[20px] ">
                      Zero<span className="block font-normal">Commission</span>
                    </div>
                  </li>
                  <li
                    className="relative flex flex-col  min-w-[89px] w-[89px] md:w-[100px] md:min-w-[100px] "
                  >
                    <div className="mr-2 md:mr-0 relative z-10 w-8 h-8 md:h-9 md:w-9">
                      <img
                        alt="faster"
                        className="w-8 h-8 md:w-9 md:h-9"
                        src={unwantedCall}
                      />
                    </div>
                    <div className="text-gray-800 text-xs md:text-[14px] font-semibold mt-1 md:mt-1 leading-5 md:leading-[20px] ">
                      No Unwanted<span className="block font-normal">Calls</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" md:inline-block md:align-top md:pl-1">
              <div className="relative md:m-auto  md:pt-0  md:w-auto md:block">
                <img
                  alt="faster"
                  className="block m-auto w-[200px] h-auto md:w-[222px] md:h-[166px]"
                  src={featureImage}
                />
              </div>
              <div className="relative border rounded-lg border-[#FCEEEA] bg-[white] min-h-[74px] md:h-[72px] w-full  md:px-[12px]  px-2 md:pt-[6px] py-2  md:pb-[6px] md:pr-[20px]  md:mt-0 mb-[-66px] md:mb-0">
                <ul className="flex justify-between gap-[10px] md:gap-0 py-2 items-start">
                  <li className="relative  md:w-[115px] ">
                    <div className="w-6 h-6 mb-1 md:mb-0">
                      <img
                        alt="faster"
                        className="h-6 w-6 "
                        src={shareYourDetails}
                      />
                    </div>
                    <div className="text-gray-800 text-[11px] md:text-[12px] font-normal leading-[15px] md:leading-[17px]">
                      Share your
                      <span className="block font-medium text-gray-900">
                        Car Details
                      </span>
                    </div>
                  </li>
                  <img src={forward} alt="" />
                  <li className="relative  md:w-[115px] ">
                    <div className="w-6 h-6 mb-1 md:mb-0">
                      <img
                        alt="faster"
                        className="h-6 w-6"
                        src={interestedBuyer}
                      />
                    </div>
                    <div className="text-gray-800 text-[11px] md:text-[12px] font-normal leading-[15px] md:leading-[17px] ">
                      Get details of
                      <span className="block font-medium text-gray-900">
                        interested buyers
                      </span>
                    </div>
                  </li>
                  <img src={forward} alt="" />
                  <li className="relative  md:w-[115px] ">
                    <div className="w-6 h-6 mb-1 md:mb-0">
                      <img
                        alt="faster"
                        className="h-6 w-6"
                        src={directlySellBuyer}
                      />
                    </div>
                    <div className="text-gray-800 text-[11px] md:text-[12px] font-normal leading-[15px] md:leading-[17px] ">
                      Sell car directly to
                      <span className="block font-medium text-gray-900">
                        buyers
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-[90px] w-full flex justify-center items-center md:px-[140px]'>
        <SellYourCarForm />
      </div>

      <div className='mt-[80px] w-full'>
        <HowAutotrensWorks />
      </div>


      <div className='mt-[20px] md:px-[140px]'>
        <div className="w-full text-center">
          {/* Title and Subtitle */}
          <h2 className="text-[20px] md:text-[28px] font-bold text-[#333846] mb-2">
            Why sell to
            <br />
            Autotrends?
          </h2>
          <p className="text-[14px] md:text-[18px] text-[#24272C]">
            Sell your car at the best price by connecting with potential buyers
            without getting <br />spammed.
          </p>

          {/* Stats Container */}
          <div className="mt-[80px] flex justify-around items-center text-center max-md:flex-wrap max-md:px-[20px] max-md:gap-[50px]">
            {/* Cars Bought */}
            <div className="flex flex-col items-center max-md:gap-2">
              <img src={carsBought} alt="" />
              <p className="text-[20px] md:text-[24px] font-bold text-[#24272C]">50,000+</p>
              <p className="text-[14px] md:text-[18px] text-[#24272C]">Cars bought</p>
            </div>

            {/* Dealers Network */}
            <div className="flex flex-col items-center max-md:gap-2">
              <img src={dealerNetwork} alt="" />
              <p className="text-[20px] md:text-[24px] font-bold text-[#24272C]">3500+</p>
              <p className="text-[14px] md:text-[18px] text-[#24272C]">Dealers Network</p>
            </div>

            {/* RCs Transferred */}
            <div className="flex flex-col items-center max-md:gap-2">
              <img src={rcs} alt="" />
              <p className="text-[20px] md:text-[24px] font-bold text-[#24272C]">5,000+</p>
              <p className="text-[14px] md:text-[18px] text-[#24272C]">RCs Transferred</p>
            </div>

            {/* Serviceable locations */}
            <div className="flex flex-col items-center max-md:gap-2">
              <img src={serviceableLocation} alt="" />
              <p className="text-[20px] md:text-[24px] font-bold text-[#24272C]">100+</p>
              <p className="text-[14px] md:text-[18px] text-[#24272C]">Serviceable locations</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-[20px] px-[20px] md:px-[140px] flex justify-center'>
        <CustomerReviews />
      </div>


      <div className='mt-[20px] px-[20px] md:px-[140px] flex justify-center'>
        <div className='w-[880px]'>
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#24272C] text-center mb-6 md:mb-12">
            Backed by some of the world's most prominent investors
          </h2>

          <div className='flex gap-3 max-md:gap-1 max-md:flex-wrap'>
            <img src={google} alt="" className='w-[170px] md:w-[184px] h-[70px]' />
            <img src={sequoia} alt="" className='w-[170px] md:w-[184px] h-[70px]' /><img src={hdfc} alt="" className='w-[170px] md:w-[184px] h-[70px]' />
            <img src={axis} alt="" className='w-[170px] md:w-[184px] h-[70px]' /><img src={hillhouse} alt="" className='w-[170px] md:w-[184px] h-[70px]' />
          </div>

        </div>
      </div>

      <div className='mt-[20px] md:mt-[150px] md:px-[140px] flex justify-center '>
        <SellCarsByPopularBrands />
      </div>

      <div className='mt-[20px] h-[200px] text-center'>
        FAQs
      </div>

      <div className='mt-[20px] flex flex-col justify-center items-center'>
        <div className=' md:w-[940px] max-md:px-[20px]'>
          <p className="text-[20px] font-bold text-[#24272C] text-start mb-4">Sell Used Car</p>
          <p className="text-[12px]  text-[#24272C]">Even before coronavirus had paralysed the country, personal mobility had become vital to people in India. Urbanisation and connectivity had a significant
            effect on the way we perceived cars, creating a niche in the market for used cars. Today, with a population of 136.64 Cr, India pushes approx 2.9 million used
            cars into the market annually. Autotrends understands this and offers its customers a chance to sell their used cars for the best price via their online portal.</p>
          <br /><p className="text-[12px]  text-[#24272C]">The fastest way to sell your car through Autotrends is to book a home inspection. Let us come to you, evaluate your used car and give you a quotation under 1
            hr... </p>
          <a href="#" className='text-[#007BFF] text-[14px] font-medium'>Read More {">"}</a>

        </div>
      </div>

      <div className='w-full mt-[25px]'>
                    <ContactUs/>
                </div>



    </div>
  );
};

export default SellMyCar;