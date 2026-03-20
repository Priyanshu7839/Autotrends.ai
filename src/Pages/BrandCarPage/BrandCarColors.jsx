import React from 'react'
import { Accordion, AreYouConfused, BrandCarAlternativesCompare, BrandCarHeader, BrandCarInteriorAndExterior, BrandCarUserReviews, BrandCarVariantComparison, Colors, Helpful, MoreOptions, PopularSUV, SimilarCars, TrendingCars } from '../../components'
import { kia1,grill,headlight } from '../../assets/Images'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import { BrandCars, MoreOptionsToConsiderData } from '../../MockData'

const BrandCarColors = () => {

    const Model = [
                      {
                        image: kia1,
                        name: 'Kia Seltos',
                        MinPrice: '9.95',
                        MaxPrice: '17.65',
                        features: ["Diesel / Petrol", "17 to 20.7 kmpl", "Manual/Automatic", "1482 cc - 1497 cc", "113.42 - 157.81 bhp", "3 Star Safety"],
                        facelift: true,
                        electric: false,
                        moreimages: [grill, headlight],
                        rating: 4.5,
                        reviews: 1200
                      }]

            const description="Kia Seltos is available in 11 different colours - Glacier White Pearl, Sparkling Silver, Pewter Olive, Clear White, Intense Red, Aurora Black Pearl, Xclusive Matte Graphite, Imperial Blue, Glacier White Pearl With Aurora Black Pearl, Gravity Gray and Intense Red With Aurora Black"          

            const breakpoint=useScreenResizeValue();

  return (
    <div className=' w-full h-max flex flex-col gap-[20px] justify-center items-center'>
        <BrandCarHeader prop={Model[0]} category={"Colors"} description={description}/>
        <div className=' w-full flex justify-center'>
            <div className={`${breakpoint<=1440?'w-[84%]':'w-[1200px]'} flex gap-[20px]`}>

                <div className=' w-[76%] flex flex-col gap-[20px]'>
                    <div className=' w-full h-max flex flex-col border rounded-[16px] border-[rgba(36,39,44,0.1)] drop-shadow-[0px_1px_2px_rgba(36,39,44,0.1)] px-[23px] py-[20px]'>
                        <h2 className=' text-[23px] leading-[32.2px] font-[500] text-[#24272c]'>{Model[0].name.split(" ")[1]} Colors</h2>
                        <Colors/>

                    </div>
                    <div className=' w-full flex flex-col gap-[8px] pt-[18px] pb-[21px] px-[21px] rounded-[16px] border border-[rgba(36,39,44,0.1)] drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)] shadow-[rgba(36,39,44,0.1)]'>
          <h3 className=' text-[23px] leading-[33.2px] font-[500]'>Explore Color Options for {Model[0].name.split(" ")[1]} Alternatives</h3>
          <div className='w-full rounded-lg  overflow-x-scroll ' style={{scrollbarWidth:'none'}}>
          <div className=' w-max flex gap-[20px]'>
          {
                Array(5).fill().map((item,key)=>(<BrandCarAlternativesCompare key={key} CarModels={BrandCars} category={"Colors"}/>))
            }
          </div>
        
          
                        
           

          </div>
          

                    </div>
                    <BrandCarInteriorAndExterior/>
                    <BrandCarUserReviews category={"Color Options"}/>
                    <BrandCarVariantComparison/>
                    <MoreOptions data={MoreOptionsToConsiderData}/>
                    <AreYouConfused/>
                    <div className=' flex flex-col gap-[20px] border border-[rgba(36,39,44,0.1)] rounded-2xl px-[21px] py-[17px]'>
                        <h2 className=' text-[23px] leading-[32.2px] font-medium text-[#24272c]'>FAQs About Kia Seltos Colors</h2>
                        <Accordion/>

                    </div>
                    <div className=' flex flex-col gap-[20px] border border-[rgba(36,39,44,0.1)] rounded-2xl px-[21px] py-[17px]'>
                        <h2 className=' text-[23px] leading-[32.2px] font-medium text-[#24272c]'>Questions & Answers on Seltos Colors</h2>
                        <Accordion/>

                    </div>
                    <Helpful/>
                   
                   

                </div>
                <div className=' w-[25%] flex flex-col gap-[20px] pt-[400px]'>
                    <TrendingCars/>
                    <PopularSUV/>
                    <SimilarCars/>
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default BrandCarColors
