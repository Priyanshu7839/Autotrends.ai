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
import VirtualExperience from '../Components/VirtualExperience'
import HighlightImages from "../Components/HighlightImages"
import SeltosDesignData from '../MockData/SeltosDesignData'
import CalculateEmi from '../Components/SideComponents/CalculateEmi'
import TrendingCars from '../Components/SideComponents/TrendingCars'
import SimilarCars from '../Components/SideComponents/SimilarCars'
import PopularSUV from '../Components/SideComponents/PopularSUV'
import ColorPallete from '../MockData/ColorPallete'
import ColorVariations from '../Components/ColorVariations'
import MoreOptionsToConsiderData from '../MockData/MoreOptionsToConsiderData'
import UserReviewForCar from '../Components/UserReviewForCar'
import AreYouConfused from '../Components/AreYouConfused'
import ExploreAlternativeImages from '../Components/ExploreAlternativeImages'
import SeltosInteriorAndExterior from '../Components/SeltosInteriorAndExterior'
import NavigateSection from '../Components/NavigateSection'

const Seltos = () => {

    const viewType = ["All", "Exterior", "Interior", "360 View", "Colours"];
    const [selectedViewType, setSelectedViewType] = useState("All");

    const imagesData = [{ id: 1, image: imgSlider }, { id: 2, image: img1 }, { id: 3, image: img2 }, { id: 4, image: img3 }, { id: 5, image: img4 }, { id: 6, image: imgSlider }, { id: 7, image: imgSlider }, { id: 8, image: imgSlider },]
    const [selectedImageForView, setSelectedImageForView] = useState(0);
    return (
        <div className='parent-div flex justify-center'>

            <div className=' w-full md:w-[calc(100%-240px)] mt-[32px] mb-[40px] max-md:px-[10px] '>

               
                <div className='flex flex-col md:flex-row gap-3 items-center'>
                    <div className='w-full md:w-[76%]'>
                        {/* View Sections  */}
                        <div className='  border-[#24272C] border-[1px] shadow-md rounded-[16px] border-opacity-10 px-[10px] md:px-[20px] py-[20px] flex flex-col gap-[8px] '>
                            <div className='flex gap-2 items-center'>
                                {
                                    viewType.map((view, index) => (
                                        <div key={index} onClick={() => setSelectedViewType(view)} className={`px-2 py-1 flex flex-col gap-4 rounded-md ${selectedViewType === view ? "border-2  border-[#007BE5] text-[#007BE5] bg-[#007BE5] bg-opacity-10 " : " border-[#24272C] border-[1px]  border-opacity-10  text-[#24272C]"} `}>
                                            <p className='text-[14px] font-semibold '>{view}</p>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className='relative'>
                                <img src={imagesData[selectedImageForView].image} alt="" className='h-[250px] w-full md:h-[495px] md:w-[895px] rounded-lg ' />
                                {/* <div onClick={()=>{setSelectedImageForView((selectedImageForView+1)%imagesData.size)}} className='absolute right-0 top-[50%] rounded-full w-[24px] h-[24px] bg-[#24272C] bg-opacity-25 flex justify-center items-center'><FaArrowRight className='h-[18px] w-[18px] text-slate-600'/></div> */}
                            </div>
                            <div className='flex justify-center gap-[10px] md:gap-[15px] overflow-auto ' style={{scrollbarWidth:'none'}}>
                                {
                                    imagesData.map((data, index) => (<div className='flex  min-w-[90px] h-[65px]'>
                                        <img src={data.image} alt="" onClick={() => (setSelectedImageForView(index))} className='min-w-[85px] h-[60px] rounded-md ' />
                                    </div>))
                                }
                            </div>

                        </div>
                        {/* Seltos Interior and Exterior */}

                        <div className=' mt-[20px] '>
                            <SeltosInteriorAndExterior />
                        </div>

                        <div className='mt-[20px]'>
                            <VirtualExperience />
                        </div>

                        <div className='mt-[20px]'>
                            <HighlightImages data={SeltosDesignData} />
                        </div>

                    </div>
                    <div className='flex flex-col gap-4 items-center w-full md:w-[23%]'>
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
                <div className='w-full md:w-[76%] mt-[20px]'>
                    <ColorVariations />
                </div>

                {/* Explore Images  */}
                <div className='w-full md:w-[76%] mt-[20px]'>
                    <ExploreAlternativeImages heading={"Explore images of Seltos alternatives"} userReview={false} />
                </div>

                {/* compare Variants  */}
                <div className='w-full md:w-[76%] mt-[20px]'>
                    compare Variants
                </div>

                {/* More Options to Consider  */}
                <div className='w-full md:w-[76%] mt-[20px]'>
                    <HighlightImages data={MoreOptionsToConsiderData} />
                </div>

                {/* Kia Seltos Videos  */}
                <div className=' w-full md:w-[76%] h-[480px] mt-[20px] px-[18px] py-[20px]  shadow-md border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-4'>
                    <h1 className='text-[24px] font-semibold'>Kia Seltos videos</h1>

                </div>

                {/* User Reviews  */}
                <div className='w-full md:w-[76%] mt-[20px]'>
                    <UserReviewForCar />
                </div>

                {/* Are You Confused */}
                <div className='w-full md:w-[76%] mt-[20px]'>
                    <AreYouConfused />
                </div>


            </div>
        </div>
    )
}

export default Seltos