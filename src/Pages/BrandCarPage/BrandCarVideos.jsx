import React,{useState} from 'react'
import {BrandCars, carvideos,MoreOptionsToConsiderData} from '../../MockData'
import { UserReviews,BrandCarVideosCard,Accordion,Helpful,CalculateEmi,Brochure,CarPriceInIndia,TrendingCars,PopularSUV,SimilarCars,BrandCarVideosHeader,
  Pagination,BrandCarShortsCard,BrandCarInteriorAndExterior,BrandCarVariantComparison,ColorVariations,MoreOptions,AreYouConfused,BrandCarAlternativeVideos,
  BrandCarVariantPriceSideCard
 } from '../../components'

import { kia1,grill,headlight } from '../../assets/Images'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import { useSelector } from 'react-redux'


const BrandCarVideos = () => {
  const details = useSelector((state) => state.CarDetails);

  const Model = [
      {
        image: details?.overView?.image,
        name: details?.overView?.name,
        MinPrice: '9.95',
        MaxPrice: '17.65',
        features: ["Diesel / Petrol", "17 to 20.7 kmpl", "Manual/Automatic", "1482 cc - 1497 cc", "113.42 - 157.81 bhp", "3 Star Safety"],
        facelift: true,
        electric: false,
        moreimages: [grill, headlight],
        rating: 4.5,
        reviews: 1200
      }]

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 2; // Update this based on your total pages
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    const breakpoint = useScreenResizeValue();
  return (
    <div className='  h-max flex flex-col items-center justify-center'>
      
       <BrandCarVideosHeader prop={Model[0]} text={'Videos'}/>
       
      
    <div className={`  h-max pt-[20px] ${(breakpoint<=1440)? breakpoint<=1050?'w-[92%]':'w-[84%]':'w-[1280px]'}`} >
       
       
        <div className={`w-full  flex ${breakpoint<=1050?' ':'mt-[41px]'} `}>
        
        <div className={` w-full  ${breakpoint<=1050?'flex-col':'flex-row'} flex gap-[20px] mt-[20px]`}>
           
            <div className={` ${breakpoint<=1050 ? 'w-full': 'w-[76%]'}  relative  flex flex-col gap-[20px] items-center   `}>
                <div className=' flex flex-col gap-[8px] pt-[18px] pb-[21px] px-[21px]   rounded-xl shadow-md shadow-[rgba(36,39,44,0.1)] border border-[rgba(36,39,44,0.1)] '>
                <h3 className=' text-[23px] leading-[33.2px] font-[500] '> {Model[0].name} Videos</h3>
                <BrandCarVideosCard videos={carvideos} isvideopage={true}/>
                </div>
  <div className=' mt-[39px] flex flex-col gap-2'>
  <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
  <p className=' pl-[21px] text-[13px] text-[#24272c]'>
          Showing page {currentPage} of {totalPages}
        </p>
  </div>
  <div className=' flex flex-col w-full gap-[8px] pt-[18px] pb-[21px]    rounded-xl shadow-md shadow-[rgba(36,39,44,0.1)] border border-[rgba(36,39,44,0.1)] '>
                <h3 className=' text-[23px] leading-[33.2px] font-[500] px-[21px] '> {Model[0].name} Shorts</h3>
                <BrandCarShortsCard/>
                </div>
                <BrandCarInteriorAndExterior/>
                <BrandCarVariantComparison/>
                <UserReviews/>
            
                {/* <ColorVariations/> */}
               
                <MoreOptions data={MoreOptionsToConsiderData}/>
                <div className=' w-full flex flex-col gap-[8px] pt-[18px] pb-[21px]  rounded-xl border-[1px] border-[rgba(36,39,44,0.1)]'>
          <h3 className=' text-[23px] leading-[33.2px] font-[500] px-[21px]'>Explore Videos of Seltos Alternatives</h3>
          <div className='w-full  overflow-x-scroll px-[21px] ' style={{scrollbarWidth:'none'}}>
          <div className=' w-max flex gap-[20px]'>
          {
                [1,1,1,1,1].map((item,key)=>(<BrandCarAlternativeVideos CarModels={BrandCars}/>))
            }
          </div>
          
                        
           

          </div>
          

                    </div>
                <AreYouConfused/>
                 <div className=' w-full relative flex flex-col gap-[8px] pt-[18px] pb-[26.5px]  px-[31.22px] rounded-xl border-[1px] border-[rgba(36,39,44,0.1)] '>
                                  <h3 className=' text-[23px] leading-[33.2px] font-[500]'>Questions & Answers</h3>
                                  
                                   <Accordion/>
                                 
                                </div>
                                
                                <Helpful/>
  
  
 </div>
 <div className={` ${breakpoint<=1050?'w=full':'w-[25%]'} flex flex-col gap-[40px] `}>
              <CalculateEmi/>
              <Brochure/>
              <CarPriceInIndia/>
              <TrendingCars/>
              <PopularSUV/>
              <SimilarCars/>
            </div>

        </div>
      
        
        
        </div>
       


    </div>

</div>
  )
}

export default BrandCarVideos