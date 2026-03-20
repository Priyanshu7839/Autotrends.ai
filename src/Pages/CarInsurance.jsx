import React from 'react'
import featureImage from "../Asset/CarInsuranceImages/feature-image.png"
import honda from "../Asset/CarInsuranceImages/car-model-honda.png"
import mg from "../Asset/CarInsuranceImages/car-model-mg-astar.png"
import skoda from "../Asset/CarInsuranceImages/car-model-skoda.png"
import { MdArrowLeft, MdArrowRight } from 'react-icons/md'
import leftArrow from "../Asset/CarInsuranceImages/left-svg.svg"
import rightArrow from "../Asset/CarInsuranceImages/right-svg.svg"
import hondaElevate from "../Asset/CarInsuranceImages/honda-elevate.png"
import brezzaVSBolero from "../Asset/CarInsuranceImages/brezzar-vs-bolero-thumbnail.png"
import insureYourNewCarSVG from "../Asset/CarInsuranceImages/insure-your-new-car-svg.svg"
import WhatCoverageToConsider from '../Components/CarInsurance/WhatCoverageToConsider'
import AdditionalBenefits from '../Components/CarInsurance/AdditionalBenefits'
import CarInsuranceTerms from '../Components/CarInsurance/CarInsuranceTerms'
import LatestInsuranceNews from '../Components/CarInsurance/LatestInsuranceNews'
import GatherInformation from '../Components/CarInsurance/GatherInformation'
import ChooseInsurancePlan from '../Components/CarInsurance/ChooseInsurancePlan'
import FileAClaim from '../Components/CarInsurance/FlieAClaim'
import tataAIGFeatureBanner from "../Asset/CarInsuranceImages/tata-aig-main-banner.png.png"
import autotrendsLogo from "../Asset/CarInsuranceImages/autotrends-logo.svg"


const CarInsurance = () => {
  return (
    <div className='parent-div flex flex-col justify-center items-center'>
      <div className='h-[400px] relative '>
        <img src={featureImage} alt="" />
        <div className='absolute top-[55%] right-[48%]'>
          <img src={autotrendsLogo} alt="" />
          <p className='text-white text-[24px] leading-[24px]'>INSURANCE</p>
        </div>
      </div>

      <div className='w-[calc(100%-240px)] mt-[32px] mb-[40px] px-[20px]'>

        <div className='mt-[40px] mb-4'>
          <h1 className='text-[32px] font-bold text-[#005BAA] font-sans mb-2'>The Road to New Car Insurance</h1>
          <p className='text-[14px] text-[#24272C] py-1'>Buying a new car is a milestone and a dream come true for many of us! It represents an achievement not just for you but for your whole family and brings immense joy to
            all those who share this journey with you.</p>
          <p className='text-[14px] text-[#24272C] py-1' >So, celebrate this special moment by safeguarding your vehicle by purchasing new car insurance.</p>
          <p className='text-[14px] text-[#24272C] py-1' >Find out how to stay protected and keep your prized possession out of harm’s way on the road ahead.</p>
        </div>

        {/* Car Models */}
        <div className='mt-[40px] flex flex-col gap-3'>
          <h1 className='text-[24px] font-semibold'>Cars Models</h1>
          <div className='grid grid-cols-3 gap-2 mt-[10px]'>
            <div className=' flex flex-col gap-5 justify-center bg-[#EFF0F3] border-[#24272C] shadow-md rounded-[16px] border-opacity-10 overflow-clip'>
              <div className='flex justify-center items-center'>
                <img src={honda} alt="" className='h-[242px] w-full' />
              </div>
              <div className='flex flex-col  pb-[10px] px-[15px] font-semibold  '>
                <p className='px-[2px] text-[18px] text-[#24272C] font-bold'>Honda Amaze</p>
                <p className='px-[2px] text-[22px] text-[#0B66FA]  '><span className='text-[15px]'>₹</span>6.99 - 9.6 Lakh</p>
              </div>
            </div>

            <div className=' flex flex-col gap-5 justify-center bg-[#EFF0F3] border-[#24272C] shadow-md rounded-[16px] border-opacity-10 overflow-clip'>
              <div className='flex justify-center items-center'>
                <img src={mg} alt="" className='h-[242px] w-full' />
              </div>
              <div className='flex flex-col  pb-[10px] px-[15px] font-semibold  '>
                <p className='px-[2px] text-[18px] text-[#24272C] font-bold'>MG Astor</p>
                <p className='px-[2px] text-[22px] text-[#0B66FA]  '><span className='text-[15px]'>₹</span>10.51 - 18.42 Lakh</p>
              </div>

            </div>

            <div className=' flex flex-col gap-5 justify-center bg-[#EFF0F3] border-[#24272C] shadow-md rounded-[16px] border-opacity-10 overflow-clip'>
              <div className='flex justify-center items-center'>
                <img src={skoda} alt="" className='h-[242px] w-full ' />
              </div>
              <div className='flex flex-col  pb-[10px] px-[15px] font-semibold  '>
                <p className='px-[2px] text-[18px] text-[#24272C] font-bold'>Skoda Slavia</p>
                <p className='px-[2px] text-[22px] text-[#0B66FA]  '><span className='text-[15px]'>₹</span>11.29 - 18.4 Lakh</p>
              </div>

            </div>

          </div>
          <div className='flex justify-center gap-[50px] mt-[10px]'>
            <button className='h-[40px] w-[40px] bg-[#EFF0F3] drop-shadow-md rounded-full flex justify-center items-center '><img src={leftArrow} alt="" className='h-[24px] w-[12px]' /> </button>
            <button className='h-[40px] w-[40px] bg-[#EFF0F3] drop-shadow-md rounded-full flex justify-center items-center '><img src={rightArrow} alt="" className='h-[24px] w-[12px]' /></button>
          </div>
        </div>
      </div>

      {/* Latest Videos */}
      <div className='mt-[20px] py-[20px] px-[140px] bg-[#EFF0F3] w-full'>
        <h1 className='text-[24px] font-semibold'>Latest Video</h1>
        <div className='grid grid-cols-3 gap-2 mt-[10px]'>

          <div className=' flex flex-col gap-6 justify-between bg-[#EFF0F3] border-[#24272C] shadow-md rounded-[16px] border-opacity-10 overflow-clip'>
            <div className='flex flex-col gap-6 justify-center items-center'>
              <img src={brezzaVSBolero} alt="" className='min-h-[220px] w-full' />
              <div className='flex flex-col gap-1  pb-[10px] px-[15px] '>
                <p className='px-[2px] text-[12px] text-[#24272C] '>22 Nov, 2024</p>
                <p className='px-[2px] text-[18px] text-[#0B66FA]  '>Maruti Suzuki Brezza VS Mahindra Bolero Neo - Two SUVs, One Winner | Trump Cards | PowerDrift</p>
              </div>
            </div>
            <div className='w-full px-[15px] mb-[25px]'>
              <button className="w-full text-[#24272C] border-l border-white border-t  drop-shadow-md shadow-[rgba(255, 255, 255, 0.5)_0px_0px_2px_2px] shadow-[rgba(124, 122, 122, 0.5)_6px_6px_0px_0px] bg-gradient-to-r from-[#f5f5f8] to-[#EFF0F3]  text-[16px] font-bold px-auto py-[8px] rounded-full " >Read More</button>
            </div>
          </div>

          <div className=' flex flex-col gap-6 justify-between bg-[#EFF0F3] border-[#24272C] shadow-md rounded-[16px] border-opacity-10 overflow-clip'>
            <div className='flex flex-col gap-6 justify-center items-center'>
              <img src={hondaElevate} alt="" className='min-h-[220px] w-full' />
              <div className='flex flex-col gap-1  pb-[10px] px-[15px] '>
                <p className='px-[2px] text-[12px] text-[#24272C] '>28 Nov, 2024</p>
                <p className='px-[2px] text-[18px] text-[#0B66FA]  '>Honda Elevate | A Date With the Elevate | PowerDrift</p>
              </div>
            </div>
            <div className='w-full px-[15px] mb-[25px]'>
              <button className="w-full text-[#24272C] border-l border-white border-t  drop-shadow-md shadow-[rgba(255, 255, 255, 0.5)_0px_0px_2px_2px] shadow-[rgba(124, 122, 122, 0.5)_6px_6px_0px_0px] bg-gradient-to-r from-[#f5f5f8] to-[#EFF0F3]  text-[16px] font-bold px-auto py-[8px] rounded-full " >Read More</button>
            </div>
          </div>

          <div className=' flex flex-col gap-6 justify-between bg-[#EFF0F3] border-[#24272C] shadow-md rounded-[16px] border-opacity-10 overflow-clip'>
            <div className='flex flex-col gap-6 justify-center items-center'>
              <img src={brezzaVSBolero} alt="" className='min-h-[220px] w-full' />
              <div className='flex flex-col gap-1  pb-[10px] px-[15px] '>
                <p className='px-[2px] text-[12px] text-[#24272C] '>22 Nov, 2024</p>
                <p className='px-[2px] text-[18px] text-[#0B66FA]  '>Maruti Suzuki Brezza VS Mahindra Bolero Neo - Two SUVs, One Winner | Trump Cards | PowerDrift</p>
              </div>
            </div>
            <div className='w-full px-[15px] mb-[25px]'>
              <button className="w-full text-[#24272C] border-l border-white border-t  drop-shadow-md shadow-[rgba(255, 255, 255, 0.5)_0px_0px_2px_2px] shadow-[rgba(124, 122, 122, 0.5)_6px_6px_0px_0px] bg-gradient-to-r from-[#f5f5f8] to-[#EFF0F3]  text-[16px] font-bold px-auto py-[8px] rounded-full " >Read More</button>
            </div>
          </div>

        </div>
      </div>

      <div className='mt-[20px] flex py-[20px]'>
        <div className=''>
          <p className='text-[28px] leading-[32px]'>Insure</p>
          <p className='text-[32px] leading-[32px] font-semibold'>Your New Car</p>
          <div className=' mt-[30px] grid grid-cols-3 gap-[32px]'>
            <input type="text" placeholder='Brand Name' className=' text-[#6C757D] border border-[#CED4DA] rounded-md px-3 py-1' />
            <input type="text" placeholder='Model name' className=' text-[#6C757D] border border-[#CED4DA] rounded-md px-3 py-1' />
            <input type="text" placeholder='Variant' className=' text-[#6C757D] border border-[#CED4DA] rounded-md px-3 py-1' />

          </div>
        </div>
        <div>
          <img src={insureYourNewCarSVG} alt="" />
        </div>
      </div>

      <div className='px-[120px] mt-[20px] mb-4'>
        <h1 className='text-[24px] font-bold text-[#005BAA] font-sans mb-2'>Evaluate your car insurance needs</h1>
        <p className='text-[14px] text-[#24272C] py-1'>According to the Motor Vehicles Act, if you own a car, you must have car insurance, especially third-party coverage. But here's the thing: third-party insurance covers just
          the third-party damages, which might not be enough for you.</p>
        <p className='text-[14px] text-[#24272C] py-1' >So, before you decide, take a moment to figure out what you need in your car insurance.</p>
        <p className='text-[14px] text-[#24272C] py-1' >The path to understanding your insurance needs requires you to answer a couple of questions.</p>
      </div>

      <div className='w-full px-[120px] flex flex-col gap-5 py-[30px]'>
        <WhatCoverageToConsider />
        <AdditionalBenefits />
        <CarInsuranceTerms />
      </div>

      <div className='mt-[20px] w-full bg-[#EFF0F3] px-[120px]'>
        <LatestInsuranceNews />
      </div>

      {/* Research and Compare Car Insurance Providers */}
      <div className='mt-[20px] w-full px-[120px]'>
        <div className="w-full px-[20px]">
          <h2 className="text-[24px] font-bold text-[#005BAA] mb-2">
            Research and Compare Car Insurance Providers
          </h2>
          <p className="text-[14px] text-[#24272C] py-1">
            When you purchase a car insurance plan, researching the best products
            and comparing them to satisfy your needs is essential. So, how can you
            go about doing that?
          </p>

          <div className="mt-4">
            {/* Section 1: Look out for various car insurance providers online */}
            <h3 className="text-[18px] font-bold text-[#24272C] mb-1">
              Look out for the various car insurance providers online
            </h3>
            <p className="text-[14px] text-[#24272C] py-1">
              You can find the various car insurance providers and their products
              online with detailed features and benefits.
            </p>
          </div>

          <div className="mt-4">
            {/* Section 2: Compare the coverage options */}
            <h3 className="text-[18px] font-bold text-[#24272C] mb-1">
              Compare the coverage options
            </h3>
            <p className="text-[14px] text-[#24272C] py-1">
              Analyse and compare the coverage options offered under the car
              insurance policies. You can consider the car insurance plan features
              and the value for money.
            </p>
            <p className="text-[14px] text-[#24272C] py-1">
              Look for features such as add-on options, network of garages, claim
              assistance, etc. Doing this lets you determine the car insurance
              plans that provide the most appropriate coverage for your budget.
            </p>
          </div>

          <div className="mt-4">
            {/* Section 3: New rules for car insurance in 2023 */}
            <h3 className="text-[18px] font-bold text-[#24272C] mb-1">
              New rules for car insurance in 2023
            </h3>
            <p className="text-[14px] text-[#24272C] py-1">
              Insurance Regulatory and Development Authority (IRDAI) has mandated
              Know Your Customer (KYC) verification mandatory starting January
              2023.
            </p>
            <p className="text-[14px] text-[#24272C] py-1">
              Digital KYC, Aadhaar-based KYC, Central KYC, and Video KYC are all
              valid under this new regulation in 2023. Therefore, also look for
              insurance providers offering the best services and user-friendly
              processes.
            </p>
          </div>

          <div className="mt-4">
            {/* Section 4: Value claim settlement ratio and customer reviews */}
            <h3 className="text-[18px] font-bold text-[#24272C] mb-1">
              Value claim settlement ratio and customer reviews
            </h3>
            <p className="text-[14px] text-[#24272C] py-1">
              The main purpose of purchasing a car insurance plan is to ensure the
              benefits when you need them the most.
            </p>
            <p className="text-[14px] text-[#24272C] py-1">
              So, ensure you choose a car insurance provider who offers the best
              services, simple claim settlement processes, and is reliable in
              offering the benefits. You can do so by comparing the claim
              settlement ratio and the customer reviews.
            </p>
            <p className="text-[14px] text-[#24272C] py-1">
              Tata AIG is one of the leading <span className='text-[#007BFF]'>car insurance</span> providers in India, having a high claim settlement ratio of 99% and
              offering several add-on options at an affordable price.
            </p>
          </div>
        </div>

      </div>

      <div className='mt-[20px] w-full px-[120px]'>
        <GatherInformation />
      </div>

      <div className='mt-[20px] w-full px-[120px]'>
        <div className="w-full px-[20px]">
          <h2 className="text-[20px] font-bold text-[#005BAA] mb-2">
            Get Insurance Quotes
          </h2>
          <p className="text-[14px] text-[#24272C] py-1">
            Now that you have researched and compared the different car insurance
            plans and know how insurance is calculated, it is time to get insurance
            quotes and choose the best insurance policy for your new car.
          </p>

          <div className="mt-4">
            <h3 className="text-[18px] font-bold text-[#24272C] mb-1">
              How to get insurance on a new car?
            </h3>
            <p className="text-[14px] text-[#24272C] py-1">
              Generally, insurance on a new car can be purchased along with the new
              vehicle from your dealer on the delivery date. Your dealer will offer
              the car insurance plan of the insurance provider with whom they have a
              business association.
            </p>
            <p className="text-[14px] text-[#24272C] py-1">
              If you want to purchase a car insurance plan for a new car from a
              different insurance provider, you can always speak to the dealer and
              change it as per your preferences.
            </p>
            <p className="text-[14px] text-[#24272C] py-1">
              You can get insurance quotes for your car specifications at the
              insurance provider's website. The details that will be required are
              the brand, car name, variant, registration code, and date of
              purchase, and you get the insurance quotes instantly.
            </p>
            <p className="text-[14px] text-[#24272C] py-1">
              Look out for the different car insurance plans with customisable
              options and discounts. For example, Tata AIG offers up to 85%
              discount on new car insurance.
            </p>
          </div>
        </div>
      </div>

      <div className='mt-[20px] w-full px-[120px]'>
        <ChooseInsurancePlan />
      </div>

      <div className='mt-[20px] w-full px-[120px]'>
        <div className="w-full px-[20px] ">
          <h2 className="text-[20px] font-bold text-[#005BAA] mb-2">
            Verify Documents
          </h2>
          <p className="text-[14px] text-[#24272C] py-1">
            If you have chosen the car insurance policy, the next step is to verify
            your documents, complete the KYC process, and pay the premium.
          </p>
          <p className="text-[14px] text-[#24272C] py-1">
            KYC verification is mandatory for purchasing a car insurance policy.
            You can choose between options such as Central KYC, Aadhaar-based,
            Digital, Video-based, and offline KYC verification processes.
          </p>

          <div className="mt-4">
            <h2 className="text-[20px] font-bold text-[#005BAA] mb-2">
              Verify Documents
            </h2>
            <p className="text-[14px] text-[#24272C] py-1">
              When your documents are verified, you can purchase the car insurance
              policy of your choice by paying the applicable premium.
            </p>
            <p className="text-[14px] text-[#24272C] py-1">
              You can pay the premium for your new car insurance policy online using
              any of the digital payment options applicable.
            </p>
            <p className="text-[14px] text-[#24272C] py-1">
              While purchasing your car insurance plan, you might come across the
              following questions.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-[18px] font-bold text-[#24272C] mb-1">
              Is it compulsory to buy insurance from a car dealer?
            </h3>
            <p className="text-[14px] text-[#24272C] py-1">
              Buying car insurance from a car dealer is not mandatory. You can
              research, compare, get quotes, and choose a suitable car insurance
              policy at an affordable rate for your new car.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-[18px] font-bold text-[#24272C] mb-1">
              When should I start my car insurance policy?
            </h3>
            <p className="text-[14px] text-[#24272C] py-1">
              The financial protection for your new car must be availed of from the
              date of purchase and its delivery. Having insurance coverage from day
              one ensures that you are financially secure in the event of an
              unprecedented event that can damage your new car or third party and
              experience the pleasure of driving your car with peace of mind.
            </p>
          </div>
        </div>
      </div>


      <div className='mt-[20px] w-full px-[120px]'>
        <FileAClaim />
      </div>

      <div className='mt-[20px] w-full px-[120px]'>
        <div className="w-full px-[20px]">
          <h2 className="text-[20px] font-bold text-[#005BAA] mb-2">
            Wrapping Up
          </h2>
          <p className="text-[14px] text-[#24272C] py-1">
            Buying car insurance is pivotal in safeguarding your most treasured car. By evaluating your coverage needs, exploring add-ons, and researching and comparing insurers,
            you can get the first step right! Further, calculating the insurance costs, gathering the essential information, and choosing a car insurance plan tailored to your
            requirements completes the process. When your analysis and purchase options are right, you can start enjoying your driving experience, bringing happiness and peace of
            mind to every mile.
          </p>
        </div>
      </div>


<div className='mt-[20px] w-full px-[120px]'>
  <img src={tataAIGFeatureBanner} alt="" className='px-[20px] h-[370px] w-full'/>
</div>

      <div className='h-[100px] w-full '></div>
    </div>
  )
}

export default CarInsurance