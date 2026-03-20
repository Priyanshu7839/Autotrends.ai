import React from 'react';
import shareCarDetails from "../../Asset/SellMyCar/HowAutoTrendsWork/share-your-car-details.svg"
import carReview from "../../Asset/SellMyCar/HowAutoTrendsWork/car-details-reviewed.svg"
import connectBuyer from "../../Asset/SellMyCar/HowAutoTrendsWork/connect-interested-buyer.svg"
import NoSpamming from "../../Asset/SellMyCar/HowAutoTrendsWork/no-spamming.svg"
import sellCarBuyer from "../../Asset/SellMyCar/HowAutoTrendsWork/sell-car-to-buyer.svg"
import howItWorksImage from "../../Asset/SellMyCar/HowAutoTrendsWork/howitworksimg.png.png"

const HowAutotrensWorks = () => {
  return (
    <div className="bg-[#f6fbff] py-6 px-5 mt-5  md:mt-0  md:py-10 md:px-0  inline-block w-full">
      <div className=" mx-auto md:max-w-[1100px] md:p-0  ">
        <div className="flex flex-col md:flex-row">
          <div className="md:max-w-[520px] w-full inline-block align-top ">
            <h2 className="text-[#24272c] text-[20px] md:text-[28px] font-semibold  leading-[26px] md:leading-[36.4px] ">
              How Autotrends Works?
            </h2>
            <div className="mt-4">
              <ul>
                <li className="flex gap-3  relative mt-6 md:mt-9 ">
                  <div className="min-w-[40px] h-[40px] md:min-w-[52px] md:h-[52px] relative z-10">
                    <img
                      alt="faster"
                      decoding="async"
                      className="w-[40px] h-[40px] md:w-[52px] md:h-[52px]"
                      src={shareCarDetails}
                      loading="eager"
                      fetchpriority="high"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-[#24272c] text-base md:text-xl font-semibold leading-[23px] md:leading-[26px]">
                      Share your car details
                    </div>
                    <div className="text-[rgba(36, 39, 44, 0.7)] text-sm md:text-sm font-normal  leading-[18px] md:leading-[20.8px] mt-1">
                      <div>
                        Share the most accurate details and upload clear, recent
                        photos of your car. This helps buyers confidently
                        evaluate your vehicle and potentially offer more.
                      </div>
                    </div>
                  </div>
                                      <span className="absolute border-l border-dashed border-[rgba(36,39,44,.15)] h-full  top-[38px] left-[20px] md:left-[20px] md:left-[25px]  "></span>

                </li>
                <li className="flex gap-3 relative mt-6 md:mt-9">
                  <div className="min-w-[40px] h-[40px] md:min-w-[52px] md:h-[52px] relative z-10">
                    <img
                      alt="faster"
                      decoding="async"
                      className="w-[40px] h-[40px] md:w-[52px] md:h-[52px]"
                      src={carReview}
                      loading="eager"
                      fetchpriority="high"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-[#24272c] text-base md:text-xl font-semibold leading-[23px] md:leading-[26px]">
                      Your car details will be reviewed
                    </div>
                    <div className="text-[rgba(36, 39, 44, 0.7)] text-sm md:text-sm font-normal  leading-[18px] md:leading-[20.8px] mt-1">
                      <div>
                        Your vehicle details will be verified by our team, once
                        verified your vehicle details will be shown to potential
                        buyer to lakhs of users
                      </div>
                    </div>
                  </div>
                                        <span className="absolute border-l border-dashed border-[rgba(36,39,44,.15)] h-full  top-[38px] left-[20px] md:left-[25px]  "></span>


                </li>
                <li className="flex gap-3 relative mt-6 md:mt-9">
                  <div className="min-w-[40px] h-[40px] md:min-w-[52px] md:h-[52px] relative z-10">
                    <img
                      alt="faster"
                      decoding="async"
                      className="w-[40px] h-[40px] md:w-[52px] md:h-[52px]"
                      src={connectBuyer}
                      loading="eager"
                      fetchpriority="high"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-[#24272c] text-base md:text-xl font-semibold leading-[23px] md:leading-[26px]">
                      Connect with interested buyer
                    </div>
                    <div className="text-[rgba(36, 39, 44, 0.7)] text-sm md:text-sm font-normal  leading-[18px] md:leading-[20.8px] mt-1">
                      <div>
                        Details of potential buyers are shared on your whatsapp.
                        Directly connect with the bidders who offer you the
                        highest price. Sell your car directly to them on the
                        agreed value.
                      </div>
                    </div>
                  </div>

                    <span className="absolute border-l border-dashed border-[rgba(36,39,44,.15)] h-full  top-[38px] left-[20px] md:left-[25px]  "></span>
                </li>
                <li className="flex gap-3 relative mt-6 md:mt-9">
                  <div className="min-w-[40px] h-[40px] md:min-w-[52px] md:h-[52px] relative z-10">
                    <img
                      alt="faster"
                      decoding="async"
                      className="w-[40px] h-[40px] md:w-[52px] md:h-[52px]"
                      src={NoSpamming}
                      loading="eager"
                      fetchpriority="high"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-[#24272c] text-base md:text-xl font-semibold leading-[23px] md:leading-[26px]">
                      No spamming
                    </div>
                    <div className="text-[rgba(36, 39, 44, 0.7)] text-sm md:text-sm font-normal  leading-[18px] md:leading-[20.8px] mt-1">
                      <div>
                        To protect you from getting spammed from un-necessary
                        calls, your detail are not shared with potential buyers,
                        only there details are shared with you. Connect with them
                        at your convenience.
                      </div>
                    </div>
                  </div>
                                        <span className="absolute border-l border-dashed border-[rgba(36,39,44,.15)] h-full  top-[38px] left-[20px] md:left-[25px]  "></span>


                </li>
                <li className="flex gap-3 relative mt-6 md:mt-9 last:after:hidden">
                  <div className="min-w-[40px] h-[40px] md:min-w-[52px] md:h-[52px] relative z-10">
                    <img
                      alt="faster"
                      decoding="async"
                      className="w-[40px] h-[40px] md:w-[52px] md:h-[52px]"
                      src={sellCarBuyer}
                      loading="eager"
                      fetchpriority="high"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-[#24272c] text-base md:text-xl font-semibold leading-[23px] md:leading-[26px]">
                      Sell your car to buyer
                    </div>
                    <div className="text-[rgba(36, 39, 44, 0.7)] text-sm md:text-sm font-normal  leading-[18px] md:leading-[20.8px] mt-1">
                      <div>
                        Complete the sale of your car at the agreed price.
                        CarDekho charges no commission fees to ensure you receive
                        the exact amount offered by the buyer.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:inline-block md:align-top md:w-[calc(100%-520px)] max-md:mt-4 ">
            <div className=" float-right">
              <img
                src={howItWorksImage}
                alt="image"
                className='w-[260px] h-[345px] rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowAutotrensWorks;