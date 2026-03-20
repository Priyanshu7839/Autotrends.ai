import React, { useState } from 'react'
import imgSlider from "../Asset/360viewimage.png"
import img1 from "../Asset/seltos-glacier-white.png"
import img2 from "../Asset/seltos-sparkling-white.png"
import img3 from "../Asset/seltos-pewter-olive.png"
import img4 from "../Asset/roadtestkiaseltos.png"
import { FaArrowRight } from 'react-icons/fa'
import seltosFrontLeft from "../Asset/seltos-front-left.png"
import view360 from "../Asset/360-view.png"
import arrowright from "../Asset/right-arrow.png"
import VirtualExperience from './VirtualExperience'
import HighlightImages from "./HighlightImages"
import SeltosDesignData from '../MockData/SeltosDesignData'
import CalculateEmi from './SideComponents/CalculateEmi'
import TrendingCars from './SideComponents/TrendingCars'
import SimilarCars from './SideComponents/SimilarCars'
import PopularSUV from './SideComponents/PopularSUV'
import ColorPallete from '../MockData/ColorPallete'
import ColorVariations from './ColorVariations'
import MoreOptionsToConsiderData from '../MockData/MoreOptionsToConsiderData'
import UserReviewForCar from './UserReviewForCar'
import AreYouConfused from './AreYouConfused'
import ExploreAlternativeImages from './ExploreAlternativeImages'

const Seltos = () => {

    const viewType = ["All", "Exterior", "Interior", "360 View", "Colours"];
    const [selectedViewType, setSelectedViewType] = useState("All");

    const imagesData = [{ id: 1, image: imgSlider }, { id: 2, image: img1 }, { id: 3, image: img2 }, { id: 4, image: img3 }, { id: 5, image: img4 }, { id: 6, image: imgSlider }, { id: 7, image: imgSlider }, { id: 8, image: imgSlider },]
    const [selectedImageForView, setSelectedImageForView] = useState(0);
    return (
        <div className='parent-div flex justify-center'>

            <div className=' w-[calc(100%-240px)] mt-[32px] mb-[40px]  '>

                <div className='flex gap-3 items-center'>
                    <div className='w-[76%]'>
                        {/* View Sections  */}
                        <div className=' shadow-inner border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 px-[20px] py-[20px] flex flex-col gap-[8px] '>
                            <div className='flex gap-2 items-center'>
                                {
                                    viewType.map((view, index) => (
                                        <div key={index} onClick={() => setSelectedViewType(view)} className={`px-2 py-1 flex flex-col gap-4 rounded-md ${selectedViewType === view ? "border-2 shadow-inner border-[#007BE5] text-[#007BE5] bg-[#007BE5] bg-opacity-10 " : "shadow-inner border-[#24272C] border-[1px]  border-opacity-10  text-[#24272C]"} `}>
                                            <p className='text-[14px] font-semibold '>{view}</p>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className='relative'>
                                <img src={imagesData[selectedImageForView].image} alt="" className='h-[495px] w-[895px] rounded-lg ' />
                                {/* <div onClick={()=>{setSelectedImageForView((selectedImageForView+1)%imagesData.size)}} className='absolute right-0 top-[50%] rounded-full w-[24px] h-[24px] bg-[#24272C] bg-opacity-25 flex justify-center items-center'><FaArrowRight className='h-[18px] w-[18px] text-slate-600'/></div> */}
                            </div>
                            <div className='flex justify-center gap-[15px]  overflow-scroll no-scrollbar'>
                                {
                                    imagesData.map((data, index) => (<div className='flex  w-[90px] h-[65px]'>
                                        <img src={data.image} alt="" onClick={() => (setSelectedImageForView(index))} className='w-[85px] h-[60px] rounded-md ' />
                                    </div>))
                                }
                            </div>

                        </div>
                        {/* Seltos Interior and Exterior */}
                        <div className=' mt-[20px] px-[20px] py-[20px]  shadow-inner border-[#24272C] border-[1px] rounded-[16px] border-opacity-10'>
                            <h1 className='text-[24px] font-semibold'>Seltos interior & exterior images</h1>

                            <div className='flex flex-col gap-2 '>
                                <div className='flex gap-[36px] py-[6px] text-[14px] text-[#24272C] text-opacity-70 border-b-[1px] '>
                                    <li className='font-bold text-[#24272C] opacity-100 border-b-[#0085FF] border-b-[4px] py-[10px]'>Exterior</li>
                                    <li className='py-[10px]'>Interior</li>
                                </div>

                                <div className='grid grid-cols-3 gap-[20px] '>
                                    <div className='col-span-1'>
                                        <img src={seltosFrontLeft} alt="" className='w-[286px] h-[200px] rounded-md' />
                                    </div>
                                    <div className='col-span-1'>
                                        <img src={seltosFrontLeft} alt="" className='w-[286px] h-[200px] rounded-md' />
                                    </div>
                                    <div className='col-span-1'>
                                        <img src={seltosFrontLeft} alt="" className='w-[286px] h-[200px] rounded-md' />
                                    </div>
                                    <div className='col-span-1'>
                                        <img src={seltosFrontLeft} alt="" className='w-[286px] h-[200px] rounded-md' />
                                    </div>
                                    <div className='col-span-1'>
                                        <img src={seltosFrontLeft} alt="" className='w-[286px] h-[200px] rounded-md' />
                                    </div>
                                    <div className='col-span-1 flex justify-center items-center bg-[#FAFAFA] rounded-md'>
                                        <img src={view360} alt="" className='w-[116px] h-[70px] px-1 py-1' />
                                    </div>
                                </div>


                                <p className='flex gap-1 text-[#0085FF] font-semibold items-center'>
                                    Seltos Exterior Images <img src={arrowright} alt="" className='w-[19px] h-[18px] ' />
                                </p>
                            </div>
                        </div>

                        <div className='mt-[20px]'>
                            <VirtualExperience />
                        </div>

                        <div className='mt-[20px]'>
                            <HighlightImages data={SeltosDesignData} />
                        </div>

                    </div>
                    <div className='flex flex-col gap-4 items-center w-[23%]'>
                        <div className='w-full'>
                            {/* Calculate Emi */}
                            <CalculateEmi />
                        </div>
                        <div className='w-full'>
                            {/* Trending Cars */}
                            <TrendingCars />
                        </div>
                        <div className='w-full'>
                            {/* Popular Cars */}
                            <PopularSUV />
                        </div>
                        <div className='w-full'>
                            {/* Similar Cars */}
                            <SimilarCars />
                        </div>
                    </div>
                </div>


                {/* colour Pallete */}
                <div className='w-[76%] mt-[20px]'>
                    <ColorVariations />
                </div>

                {/* Explore Images  */}
                <div className='w-[76%] mt-[20px]'>
                    <ExploreAlternativeImages/>
                </div>

                {/* compare Variants  */}
                <div className='w-[76%] mt-[20px]'>
                    compare Variants
                </div>

                {/* More Options to Consider  */}
                <div className='w-[76%] mt-[20px]'>
                    <HighlightImages data={MoreOptionsToConsiderData} />
                </div>

                {/* Kia Seltos Videos  */}
                <div className=' w-[76%] h-[480px] mt-[20px] px-[18px] py-[20px]  shadow-inner border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-4'>
                    <h1 className='text-[24px] font-semibold'>Kia Seltos videos</h1>

                </div>

                {/* User Reviews  */}
                <div className='w-[76%] mt-[20px]'>
                    <UserReviewForCar />
                </div>

                {/* Are You Confused */}
                <div className='w-[76%] mt-[20px]'>
                    <AreYouConfused />
                </div>


            </div>
        </div>
    )
}

export default Seltos