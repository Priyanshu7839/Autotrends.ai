import React from 'react'
import NavigateSection from '../Components/NavigateSection'
import MayLikeCars from '../Components/MayLikeCars'
import ExploreAlternativeImages from '../Components/ExploreAlternativeImages'
import RecommendedAlternativeCars from '../Components/RecommendedAlternativeCars'
import UserReviewForCar from '../Components/UserReviewForCar'
import MustReadArticleForCar from '../Components/MustReadArticleForCar'
import CarDealerContact from '../Components/CarDealerContact'
import CalculateEmi from "../Components/SideComponents/CalculateEmi"
import Brochure from "../Components/SideComponents/Brochure"
import CarPriceInIndia from "../Components/SideComponents/CarPriceInIndia"
import TrendingCars from '../Components/SideComponents/TrendingCars'
import PopularSUV from "../Components/SideComponents/PopularSUV"
import SimilarCars from "../Components/SideComponents/SimilarCars"

const EmiCalculator = () => {
  return (

    <div className='parent-div flex justify-center'>

      <div className=' w-full md:w-[calc(100%-240px)] mt-[32px] mb-[40px]  '>
      
        <div className='w-full h-[200px]  mt-[20px] shadow-md border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex justify-center items-center'>
          Kia Seltos price in Jhansi
        </div>
        <div className='flex flex-col md:flex-row gap-3 max-md:px-[10px]'>
          <div className='w-full md:w-[76%]'>
            {/* left section  */}
            <div className=' mt-[20px] '>
              <MayLikeCars />
            </div>

            <div className=' mt-[20px] '>
              <ExploreAlternativeImages userReview={false} heading={"Compare prices of Seltos alternatives"} />
            </div>

            <div className=' mt-[20px] h-[462px] border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex justify-center items-center'>
              Seltos Ownership Cost
            </div>

            <div className=' mt-[20px] '>
              <RecommendedAlternativeCars />
            </div>

            <div className=' mt-[20px] '>
              <UserReviewForCar />
            </div>

            <div className=' mt-[20px] '>
              <MustReadArticleForCar />
            </div>

            <div className=' mt-[20px] '>
              <CarDealerContact />
            </div>

            <div className=' mt-[20px] flex justify-center items-center'>
              Ques And Answer
            </div>
          </div>
          <div className='w-full md:w-[23%] mt-[20px] flex flex-col gap-[20px]'>
            {/* right section */}
            <div >
              <CalculateEmi />
            </div>
            <div className='md:h-[250px]'>
              {/* Ad Space */}
            </div>
            <div >
              <Brochure />
            </div>
            <div>
              <CarPriceInIndia />
            </div>
            <div className='md:h-[250px]'>
              {/* Ad Space */}
            </div>
            <div >
              <TrendingCars />
            </div>
            <div>
              <PopularSUV />
            </div>
            <div>
              <SimilarCars />
            </div>


          </div>

        </div>


      </div>
    </div>
  )
}

export default EmiCalculator