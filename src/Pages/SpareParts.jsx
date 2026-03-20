import React from 'react'
import AreYouConfused from '../Components/AreYouConfused'
import UserReviewForCar from '../Components/UserReviewForCar'
import PopularSUV from '../Components/SideComponents/PopularSUV'
import facebook from "../Asset/facebook-icon.png"
import SparePartsList from '../Components/SparePartsList'
import NewlyLaunchedServices from '../Components/NewlyLaunchedServices'
import ExploreAlternativeImages from '../Components/ExploreAlternativeImages'

const SpareParts = () => {
    return (
        <div className='parent-div flex justify-center'>

            <div className=' md:w-[calc(100%-240px)] w-full mt-[20px] md:mt-[32px] mb-[40px]  '>
               
                <div className='w-full h-[200px]  mt-[20px] shadow-md border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex justify-center items-center'>
                    Kia Seltos spare parts
                </div>
                <div className='flex md:flex-row flex-col gap-3 max-md:px-[10px]'>
                    <div className='w-full md:w-[76%]'>
                        {/* left section  */}
                        <div className=' mt-[20px] '>
                            <SparePartsList />
                        </div>

                        <div className=' mt-[20px]  '>
                            <NewlyLaunchedServices />
                        </div>


                        <div className=' mt-[20px] '>
                            <UserReviewForCar />
                        </div>

                        <div className=' mt-[20px] h-[250px] shadow-md border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex justify-center items-center'>
                            compare Variants
                        </div>

                        <div className=' mt-[20px] h-[250px] shadow-md border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex justify-center items-center'>
                            Seltos Ownership Cost
                        </div>

                        <div className='mt-[20px] '>
                            <ExploreAlternativeImages heading={"Find spare parts cost of Seltos alternatives"} userReview={false} />
                        </div>


                        <div className=' mt-[20px] '>
                            <AreYouConfused />
                        </div>


                        <div className=' mt-[20px] h-[200px] shadow-md border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex justify-center items-center'>
                            Ques And Answer
                        </div>

                    </div>

                    <div className='md:w-[23%] w-full mt-[20px] flex flex-col gap-[20px]'>
                        {/* right section */}
                        <div className='flex justify-end gap-1 text-[12px] font-semibold'>
                            <div className='rounded-[2px] overflow-hidden flex justify-center items-center border-[#24272C] border-[1px] border-opacity-10'>
                                <div className=' w-[22px] h-[24px]  flex justify-center items-center  bg-[#9B9B9B]'>
                                    <img src={facebook} alt="" className=' h-[12px] w-[7px] ' />
                                </div>
                                <p className='px-[10px]'>
                                    Share
                                </p>
                            </div>
                            <p className='rounded-[2px] px-[21px] flex justify-center items-center border-[#24272C] border-[1px] border-opacity-10'>0</p>
                        </div>
                        <div className='h-[100px] flex justify-center items-center'>
                            {/* Ad Space */}
                            Advertisement
                        </div>

                        <div>
                            <PopularSUV />
                        </div>


                    </div>

                </div>

            </div>
        </div>)
}

export default SpareParts