import React from 'react'
import VirtualExperience from '../Components/VirtualExperience'
import SeltosInteriorAndExterior from '../Components/SeltosInteriorAndExterior'
import HighlightImages from '../Components/HighlightImages'
import SeltosDesignData from '../MockData/SeltosDesignData'
import AreYouConfused from '../Components/AreYouConfused'
import ExploreAlternativeImages from '../Components/ExploreAlternativeImages'
import MoreOptionsToConsiderData from '../MockData/MoreOptionsToConsiderData'
import ColorVariations from '../Components/ColorVariations'
import NavigateSection from '../Components/NavigateSection'

const SeltosVariant = () => {
    return (
        <div className='parent-div flex justify-center'>

            <div className=' md:w-[calc(100%-240px)] mt-[32px] mb-[40px] w-full max-md:px-[10px] '>

                <div className=' md:w-[76%] w-full flex flex-col gap-[20px]'>

                    <div className=' h-[200px]  px-[20px] py-[20px]  shadow-md border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex justify-center items-center '>Seltos Specification</div>

                    <div className=' '>
                        <SeltosInteriorAndExterior />
                    </div>

                    <div className=' '>
                        <VirtualExperience />
                    </div>


                    <div className=' '>
                        <HighlightImages data={SeltosDesignData} />
                    </div>

                    <div className=' '>
                        <ColorVariations />
                    </div>


                    <div className=' h-[200px]  px-[20px] py-[20px] shadow-md  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 '>Compare Variants</div>


                    <div className=''>
                        <ExploreAlternativeImages heading={"Explore 360 View of Seltos alternatives"} userReview={false} />
                    </div>

                    <div className=''>
                        <HighlightImages data={MoreOptionsToConsiderData} />
                    </div>

                    <div className=' '>
                        <AreYouConfused />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeltosVariant