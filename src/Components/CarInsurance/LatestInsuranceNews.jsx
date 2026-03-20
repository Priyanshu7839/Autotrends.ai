import React from 'react'
import latestInsuranceNews1 from "../../Asset/CarInsuranceImages/insurance-news-1.png"
import latestInsuranceNews2 from "../../Asset/CarInsuranceImages/insurance-news-2.png"
import latestInsuranceNews3 from "../../Asset/CarInsuranceImages/insurance-news-3.png"
import leftArrow from "../../Asset/CarInsuranceImages/left-svg.svg"
import rightArrow from "../../Asset/CarInsuranceImages/right-svg.svg"
const LatestInsuranceNews = () => {
    return (
        <div className='py-[20px] px-[20px] w-full'>
            <h1 className='text-[24px] font-semibold'>Latest Insurance News</h1>
            <div className='grid grid-cols-3 gap-2 mt-[10px]'>

                <div className=' flex flex-col gap-6 justify-between bg-[#EFF0F3] border-[#24272C] shadow-md rounded-[16px] border-opacity-10 overflow-clip'>
                    <div className='flex flex-col gap-6 justify-center items-center'>
                        <img src={latestInsuranceNews1} alt="" className='min-h-[220px] w-full' />
                        <div className='flex flex-col gap-1  px-[25px] '>
                            <p className='px-[2px] text-[12px] text-[#24272C] '>22 Nov, 2024</p>
                            <p className='px-[2px] text-[18px] text-[#0B66FA]  '>Top Benefits of Tata AIG Car Insurance Coverage</p>
                        </div>
                    </div>
                    <div className='w-full px-[25px] flex flex-col gap-1  mb-[25px]'>
                        <p className='text-[12px] text-[#071E54]'>Find out what Tata AIG car insurance has to
                        offer you and to your car</p>
                        <button className="w-full text-[#24272C] border-l border-white border-t  drop-shadow-md shadow-[rgba(255, 255, 255, 0.5)_0px_0px_2px_2px] shadow-[rgba(124, 122, 122, 0.5)_6px_6px_0px_0px] bg-gradient-to-r from-[#f5f5f8] to-[#EFF0F3]  text-[16px] font-bold px-auto py-[8px] rounded-full " >Read More</button>
                    </div>
                </div>

                <div className=' flex flex-col gap-6 justify-between bg-[#EFF0F3] border-[#24272C] shadow-md rounded-[16px] border-opacity-10 overflow-clip'>
                    <div className='flex flex-col gap-6 justify-center items-center'>
                        <img src={latestInsuranceNews2} alt="" className='min-h-[220px] w-full' />
                        <div className='flex flex-col gap-1   px-[25px] '>
                            <p className='px-[2px] text-[12px] text-[#24272C] '>28 Nov, 2024</p>
                            <p className='px-[2px] text-[18px] text-[#0B66FA]  '>Tips for Lowering Car Insurance Premiums with Tata AIG</p>
                        </div>
                    </div>
                    <div className='w-full px-[25px] flex flex-col gap-1 mb-[25px]'>
                        <p className='text-[12px] text-[#071E54]'>Tata AIG car insurance is designed specifically
                        to cater to customers' needs, offering holistic...</p>
                        <button className="w-full text-[#24272C] border-l border-white border-t  drop-shadow-md shadow-[rgba(255, 255, 255, 0.5)_0px_0px_2px_2px] shadow-[rgba(124, 122, 122, 0.5)_6px_6px_0px_0px] bg-gradient-to-r from-[#f5f5f8] to-[#EFF0F3]  text-[16px] font-bold px-auto py-[8px] rounded-full " >Read More</button>
                    </div>
                </div>

                <div className=' flex flex-col gap-6 justify-between bg-[#EFF0F3] border-[#24272C] shadow-md rounded-[16px] border-opacity-10 overflow-clip'>
                    <div className='flex flex-col gap-6 justify-center items-center'>
                        <img src={latestInsuranceNews3} alt="" className='min-h-[220px] w-full' />
                        <div className='flex flex-col gap-1   px-[25px] '>
                            <p className='px-[2px] text-[12px] text-[#24272C] '>22 Nov, 2024</p>
                            <p className='px-[2px] text-[18px] text-[#0B66FA]  '>How to Renew Expired Car Insurance with Tata AIG</p>
                        </div>
                    </div>
                    <div className='w-full px-[25px] flex flex-col gap-1 mb-[25px]'>
                        <p className='text-[12px] text-[#071E54]'>Easy online procedures and customer support from Tata AIG allow you to renew your expired…</p>
                        <button className="w-full text-[#24272C] border-l border-white border-t  drop-shadow-md shadow-[rgba(255, 255, 255, 0.5)_0px_0px_2px_2px] shadow-[rgba(124, 122, 122, 0.5)_6px_6px_0px_0px] bg-gradient-to-r from-[#f5f5f8] to-[#EFF0F3]  text-[16px] font-bold px-auto py-[8px] rounded-full " >Read More</button>
                    </div>
                </div>

            </div>
            <div className='flex justify-center gap-[50px] mt-[20px]'>
            <button className='h-[40px] w-[40px] bg-[#EFF0F3] drop-shadow-md rounded-full flex justify-center items-center '><img src={leftArrow} alt="" className='h-[24px] w-[12px]' /> </button>
            <button className='h-[40px] w-[40px] bg-[#EFF0F3] drop-shadow-md rounded-full flex justify-center items-center '><img src={rightArrow} alt="" className='h-[24px] w-[12px]' /></button>
          </div>
        </div>
    )
}

export default LatestInsuranceNews