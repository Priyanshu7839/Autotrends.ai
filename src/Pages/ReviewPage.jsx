import React from 'react'
import ReviewsList from '../Components/ReviewsList'
import greenStar from "../Asset/greenstar.png"
import arrowright from "../Asset/right-arrow.png"
import { useState } from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import MoreOptionsToConsiderData from '../MockData/MoreOptionsToConsiderData'
import HighlightImages from '../Components/HighlightImages'
import ExploreAlternativeImages from '../Components/ExploreAlternativeImages'
import AreYouConfused from '../Components/AreYouConfused'
import NavigateSection from '../Components/NavigateSection'
import {Menu} from "../components/index"

const ReviewPage = () => {
    const viewType = ["All", "Mileage", "Performance", "Looks", "Comfort", "Engine", "Interior", "Power", "More..."];
    const [reviewPageNumber, setReviewPageNumber] = useState(1);
    const maxPageNumber = 10;
    let numberOfPage = Array(maxPageNumber);
    for (let i = 0; i < maxPageNumber; i++) {
        numberOfPage[i] = i + 1;
    }

    const [selectedReviewType, setSelectedReviewType] = useState("All");

    return (
        <div className='parent-div flex justify-center'>

            <div className=' md:w-[calc(100%-240px)] w-full mt-[20px] md:mt-[32px] mb-[40px] max-md:px-[10px] '>
               
                <div className=' h-[200px] md:w-[76%] mt-[20px] px-[20px] md:py-[20px]  shadow-md border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex justify-center items-center '>Seltos Specification</div>


                <div className=' md:w-[76%] mt-[20px] px-[15px] md:px-[20px] py-[20px] shadow-md  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10'>
                    <h1 className='text-[18px] md:text-[24px] font-semibold'>Rating of Kia Seltos</h1>
                    <div>
                        <div className='flex md:gap-[95px] items-center '>
                            <div className='flex flex-row gap-[15px] text-[10px] md:text-[13px] '>
                                <p className='flex gap-1 text-[18px] md:text-[26px] font-bold items-center'>4.5 <span><img src={greenStar} alt="" className=' h-[18px] w-[18px] md:h-[28px] md:w-[28px] ' /></span></p>
                                <div>
                                    <p>Based on</p>
                                    <p>396 User Reviews</p>
                                </div>
                            </div>
                            <div>
                                <button className=" text-[#0B66FA] border-[1px] border-[#0B66FA] text-[12px] md:text-[16px] font-bold px-[20px] md:px-[25px] py-[12px] md:w-[250px] rounded-md " >Write a Review & Win ₹1000</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className=' md:w-[76%] mt-[20px] px-[15px] md:px-[20px] py-[20px] flex flex-col gap-2  shadow-md  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10'>
                    <h1 className='text-[18px] md:text-[24px] font-semibold'>Kia Seltos user reviews</h1>

                    <div className='flex flex-col gap-2 '>
                        <div className='flex gap-2 items-center overflow-auto py-2'>
                            {
                                viewType.map((view, index) => (
                                    <div key={index} onClick={() => setSelectedReviewType(view)} className={`px-1 md:px-2 py-1 flex flex-col gap-4 rounded-md ${selectedReviewType === view ? "border-2 md:border-2  border-[#007BE5] text-[#007BE5] bg-[#007BE5] bg-opacity-10 " : " border-[#24272C] border-[1px]  border-opacity-10  text-[#24272C]"} `}>
                                        <p className='text-[10px] md:text-[14px] font-semibold '>{view}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <Menu menuItems={["Latest","Helpful","Critical"]}/>
                        </div>

                        <div className='flex flex-col gap-2 mt-[20px] '>

                            <ReviewsList  />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList  />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList  />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList  />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList  />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList  />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList  />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList  />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList  />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList  />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList  />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList  />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList  />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList  />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList  />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList  />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList  />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList  />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList  />

                        </div>

                        {/* page numbers */}
                        <div className='flex gap-2 items-center overflow-auto max-md:py-2 text-[12px] md:text-[16px]'>
                            <div onClick={() => setReviewPageNumber((reviewPageNumber - 1) === 0 ? maxPageNumber : reviewPageNumber - 1)} className={`px-3 py-2 md:py-3 flex flex-col gap-4 rounded-md  border-[#24272C] border-[1px]  border-opacity-10  text-[#24272C] text-opacity-70 `}>
                                <p className=' font-semibold '><MdOutlineKeyboardArrowLeft className=' text-[18px] ' />
                                </p>
                            </div>
                            {numberOfPage.map((el, index) =>
                            (
                                <div key={index} onClick={() => setReviewPageNumber(el)} className={`px-4 py-2 flex flex-col gap-4 rounded-md ${reviewPageNumber === el ? "border-2  border-[#24272C] border-opacity-80 text-[#24272C]  " : " border-[#24272C] border-[1px]  border-opacity-10  text-[#24272C] text-opacity-70"} `}>
                                    <p className=' font-semibold '>{el}</p>
                                </div>
                            ))
                            }
                            <div onClick={() => setReviewPageNumber((reviewPageNumber + 1) === maxPageNumber + 1 ? 1 : reviewPageNumber + 1)} className={`px-3 py-2 md:py-3 flex flex-col gap-4 rounded-md  border-[#24272C] border-[1px]  border-opacity-10  text-[#24272C] text-opacity-70 `}>
                                <p className=' font-semibold '><MdOutlineKeyboardArrowRight className=' text-[18px] text-[#24272C] text-opacity-70' />
                                </p>
                            </div>

                        </div>

                        <div>
                            <p className='text-[12px] md:text-[14px] text-[#24272C] text-opacity-70 font-semibold select-none'>Page {reviewPageNumber} of {maxPageNumber} Pages</p>
                        </div>

                    </div>

                </div>

                <div className=' h-[200px] md:w-[76%] mt-[20px] px-[20px] py-[20px] shadow-md  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 '>Compare Variants</div>

                <div className='md:w-[76%] mt-[20px]'>
                    <HighlightImages data={MoreOptionsToConsiderData} />
                </div>

                <div className='md:w-[76%] mt-[20px]'>
                    <ExploreAlternativeImages heading={"User reviews on Seltos alternatives"} />
                </div>

                <div className='md:w-[76%] mt-[20px] '>
                    <AreYouConfused />
                </div>
            </div>
        </div>
    )
}

export default ReviewPage