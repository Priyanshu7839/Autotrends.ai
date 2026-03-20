import React, { useEffect, useRef, useState } from 'react'

import { kiaSeltosVariants,BrandModelArticles,carvideos,BrandCars} from '../../MockData/CarsModels'
import { BrandCarPriceHeader,BrandCarVariantPriceDetailCard,BrandCarVariantPriceSideCard,BrandCarVariantPriceAccordion,BrandCarRelevantCars,BrandCarOwnershipCost,
    UserReviews,BrandNewsCard,BrandCarVideosCard,BrandCarDealers,Accordion,Helpful,CalculateEmi,TrendingCars,PopularSUV,SimilarCars,Menu,CarPriceInIndia,BrandCarAlternativesCompare
 ,Brochure} from '../../components'

import { Rightarrow } from '../../assets/Images/SVG'

import { kia1,grill,headlight } from '../../assets/Images'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import { IoIosArrowForward } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { getCarPrice } from '../../Context/ApiCall'

const BrandModelPrice = () => {

    const scrollContainerRef = useRef(null);
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
  
  const [modelcategory,setmodelcategory]=useState('all');
  const [faqcategory,setfaqcategory] =useState('FAQ');
  const [carCategory,setCarCategory]=useState("All");
  const [fuel,setFuel]=useState("Fuel Cost");
  
  const breakpoint=useScreenResizeValue();



  const details = useSelector((state)=>state.CarDetails)

  useEffect(()=>{
    const GetPrice = async() =>{
      const response = await getCarPrice(details?.overView?.id)
      console.log(response?.data?.msg[0]);
    }

    GetPrice();
  })



    return (
        <div className=' w-full bg-[white]  h-max flex justify-center'>
            <div className={` ${(breakpoint<=1440)?breakpoint<=1050?'w-full':'w-[84%]':'w-[1200px]'} h-max`} >
               
                <div className='  flex flex-col mt-[21px] pt-[20px]'>
                <BrandCarPriceHeader />
                <div className={` w-full ${breakpoint<=1050?'flex-col':'flex'}  gap-[20px] mt-[20px] pb-[46px]`}>
                    {/* Left Part */}
                    <div className={` ${breakpoint<=1050?'w-full':'w-[24%]'} flex flex-col gap-[10px]`}>
                        {breakpoint>1050 && <BrandCarVariantPriceSideCard prop={BrandCars[0]} />}
                        {/* {breakpoint>1050 &&<div className=' text-[#24272c] drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)] rounded-xl shadow-[rgba(36,39,44,0.1)] border border-[rgba(36,39,44,0.1)] text-opacity-70 text-[15px] leading-[18px] w-full  font-[500] h-max flex'>
                            <div  className=' w-[30%] h-full'></div>
                            <div className=' py-[20px] flex flex-col gap-[4px] px-[8px]'>
                                <p>Hyundai Creata</p>
                                <p>Rs. 11 - 20.30 Lakh<sup>*</sup></p>
                            </div>
                        </div>
                        }
                        {breakpoint>1050 && <div className=' text-[#24272c] drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)] rounded-xl  border border-[rgba(36,39,44,0.1)] text-opacity-70 text-[15px] leading-[18px] w-full font-[500] h-max flex'>
                            <div  className=' w-[30%] h-full'></div>
                            <div className=' py-[20px] flex flex-col gap-[4px] px-[8px]'>
                                <p>Hyundai Creata</p>
                                <p>Rs. 11 - 20.30 Lakh<sup>*</sup></p>
                            </div>
                        </div>}
                        {breakpoint>1050 && <div className=' text-[#24272c] drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)] rounded-xl  border border-[rgba(36,39,44,0.1)] text-opacity-70 text-[15px] leading-[18px] w-full font-[500] h-max flex'>
                            <div  className=' w-[30%] h-full'></div>
                            <div className=' py-[20px] flex flex-col gap-[4px] px-[8px]'>
                                <p>Hyundai Creata</p>
                                <p>Rs. 11 - 20.30 Lakh<sup>*</sup></p>
                            </div>
                        </div>} */}
                    </div>
                    <div className={` ${breakpoint<=1050?'w-full ':'w-[76%]'}  bg-[white]    relative flex flex-col  pt-[18px]   rounded-xl  border border-[rgba(36,39,44,0.1)]  `}>
          <h3 className={` text-[23px] ${breakpoint<=1050?'px-[10px]':'px-[20px]'}  leading-[33.2px] font-[500] `}> {details?.variantTableHighlight?.title}</h3>
          {/* <div className={`${breakpoint<=1050?'px-[10px]':'px-[20px]'}  mt-[16.59px]`}>
          <Menu menuItems={["All","Diesel","Petrol"]} setitem={setCarCategory} item={carCategory}/>
          </div> */}
        
         
          
            {/* <div className={` ${breakpoint<=1050?'px-[10px]':'px-[20px]'}   w-full  `}>
                <div className=' flex border-b border-[rgba(36,39,44,0.1)] w-full gap-[19.18px] items-center  py-[10px] '>
                <div className=' text-[12px] leading-[18px] flex gap-[9px] items-center'>
                 <input type="radio" name="all" id="all" className='w-[18px] h-[18px]' />
                 <p >All</p>
                </div>
                <div className=' text-[12px] leading-[18px] flex gap-[9px] items-center'>
                 <input type="radio" name="all" id="all" className='w-[18px] h-[18px]' />
                 <p >Automatic</p>
                </div>
                <div className=' text-[12px] leading-[18px] flex gap-[9px] items-center'>
                 <input type="radio" name="all" id="all" className='w-[18px] h-[18px]' />
                 <p >Manual</p>
                </div>
                </div>
                


            </div> */}
            <div className={` ${breakpoint<=1050?'px-[10px]':'px-[20px]'} w-full flex flex-col bg-[white] drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)]`}>
                {
                    details?.variantTable?.variantList.map((variant,index)=>{
                        return <BrandCarVariantPriceAccordion prop={variant} index={index}/>
                    })
                }
                

            </div>
            
            <div className=' rounded-b-xl  text-[10px] pl-[20px] py-[8px] text-[rgba(36,39,44)] bg-[#f0f1f2]'>
                    <p>*Estimated price via verified sources. The price quote does not include any additional discount offered by the dealer.</p>
                </div>
                    </div>
                    

                </div>
                <div className={`w-full ${breakpoint<=1050?'flex-col':'flex-row'} flex gap-[20px] `}>
                    <div className={` ${breakpoint<=1050?'w-full items-center':'w-[75%]'}  flex gap-[20px] flex-col`}>
                    <div className=' w-full relative flex flex-col gap-[9.58px] pt-[18px] pb-[21px]  rounded-xl border border-[rgba(36,39,44,0.1)] drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)] shadow-[rgba(36,39,44,0.1)]'>
          <h3 className=' text-[23px] leading-[33.2px] px-[21px] font-[500]'>You may also like these cars</h3>
          <div className='w-full rounded-lg  px-[21px]  overflow-x-scroll gap-[20px] scroll-smooth ' id='scroll3' style={{scrollbarWidth:'none'}}>
            <div className=' w-max flex  gap-[20px]'>
            {
               Array(5).fill().map((item,key)=>(<BrandCarRelevantCars key={key} CarModels={BrandCars}/>))
            }
            </div>
           
          </div>
          <div
                    className={` absolute cursor-pointer top-[40%] right-[-10px] z-[100] rounded-full drop-shadow-[0px_4px_12px_rgba(36,39,44)] bg-[white] w-[36px] h-[36px] flex justify-center items-center ${
                      breakpoint <= 1050 ? "hidden" : ""
                    }`}
                  onClick={(e)=>{
                    document.getElementById('scroll3').scrollLeft+=310;
  
                  }}>
                    <IoIosArrowForward className="text-[#24272c] w-[10px] h-[10px]" />
                  </div>
          

                    </div>
                    {breakpoint<=768 && <CalculateEmi/>}
                    <div className=' w-full relative flex flex-col gap-[8px] pt-[18px] pb-[21px]  rounded-xl border border-[rgba(36,39,44,0.1)] drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)] shadow-[rgba(36,39,44,0.1)]'>
          <h3 className=' text-[23px] leading-[33.2px] font-[500] px-[21px]'>Compare Prices of {Model[0].name.split(" ")[1]} Alternatives</h3>
          <div className='w-full rounded-lg  overflow-x-scroll px-[21px] scroll-smooth ' id='scroll2' style={{scrollbarWidth:'none'}}>
          <div className=' w-max flex gap-[20px]'>
          {
                Array(5).fill().map((item,key)=>(<BrandCarAlternativesCompare key={key} CarModels={BrandCars}/>))
            }
          </div>
          <div
                    className={` absolute cursor-pointer top-[40%] right-[-10px] z-[100] rounded-full drop-shadow-[0px_4px_12px_rgba(36,39,44)] bg-[white] w-[36px] h-[36px] flex justify-center items-center ${
                      breakpoint <= 1050 ? "hidden" : ""
                    }`}
                  onClick={(e)=>{
                    document.getElementById('scroll2').scrollLeft+=310;
                  }}>
                    <IoIosArrowForward className="text-[#24272c] w-[10px] h-[10px]" />
                  </div>
          
                        
           

          </div>
          

                    </div>
                    {breakpoint<=768 && <Brochure CarName={Model.name}/>}
                    <div className=' w-full relative flex bg-[white]  flex-col gap-[8px] pt-[18px]  px-[31.22px] rounded-xl border border-[rgba(36,39,44,0.1)] drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)] '>
          <h3 className=' text-[23px] leading-[33.2px] font-[500]'>
            {Model[0].name.split(" ")[1]} Ownership Cost </h3>
           <Menu menuItems={["Fuel Cost"]} setitem={setFuel} item={fuel}  />
           <BrandCarOwnershipCost Model={Model}/>
          
         
        </div>
        <div className=' w-full flex  flex-col relative gap-[9.59px] pt-[18px] pb-[21px]  rounded-xl border border-[rgba(36,39,44,0.1)] drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)] shadow-[rgba(36,39,44,0.1)]'>
          <h3 className=' text-[23px] leading-[33.2px] font-[500] px-[21px]'>Recommended used Kia Seltos alternative cars in Jhansi</h3>
          <div className='w-full rounded-lg    overflow-x-scroll scroll-smooth px-[21px] ' id='scroll1' style={{scrollbarWidth:'none'}}>
                <div className=' w-max flex  gap-[20px] '>
                    {
                         [1,1,1,1,1].map((item,index)=>{
                            return <BrandCarRelevantCars index={index} CarModels={BrandCars} used={true}/>
                            })
                    }
                </div>
                
            </div>
            <div
                    className={` absolute cursor-pointer top-[40%] right-[-10px] z-[100] rounded-full drop-shadow-[0px_4px_12px_rgba(36,39,44)] bg-[white] w-[36px] h-[36px] flex justify-center items-center ${
                      breakpoint <= 1050 ? "hidden" : ""
                    }`}
                  onClick={(e)=>{
                    document.getElementById('scroll1').scrollLeft+=310;
  
                  }}>
                    <IoIosArrowForward className="text-[#24272c] w-[10px] h-[10px]" />
                  </div>
             
            <button className=' text-blue text-[15px] px-[21px] font-[700] flex gap-[8px] mb-[10px] mt-[12px] items-center'>
            View Used Kia Cars in Jhansi <Rightarrow/>
            </button>
        </div>

        {/*  Reviews Section */}

        <UserReviews price={true}/>
                    <div className=' w-full relative flex flex-col gap-[8.59px] pt-[18px] pb-[21px]  px-[31.22px] rounded-xl border border-[rgba(36,39,44,0.1)] drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)] shadow-[rgba(36,39,44,0.1)]'>
          <h3 className=' text-[23px] leading-[33.2px] font-[500]'>Must read articles before buying Kia Seltos</h3>
           
           <BrandNewsCard CarNews={BrandModelArticles} vertical={breakpoint<=1050?true:false} horizontal={breakpoint>1050?true:false} />
                    
        </div>
        <div className=' w-full relative flex flex-col pt-[18px] pb-[11px]  px-[21px] rounded-xl border border-[rgba(36,39,44,0.1)] drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)] shadow-[rgba(36,39,44,0.1)]'>
          <h3 className=' text-[23px] leading-[33.2px] font-[500]'>Kia {Model[0].name.split(" ")[1]} Videos</h3>
          <p className=' mt-[5.25px] mb-[20.75px] text-[13px] leading-[19.5px] text-[#24272c] text-opacity-70'>
          Kia has 103 videos of its popular & latest car models. Watch our detailed videos to know the prices, features, specs & car review in Hindi.
          </p>
          <BrandCarVideosCard videos={carvideos}/>
          <button className=' text-blue text-[15px] font-[700] w-max flex gap-[8px] mb-[10px]  items-center'>
            View All {Model[0].name.split(" ")[1]}
              Videos <Rightarrow/>
                      </button>
        </div>
        <div className=' w-full relative flex flex-col pt-[18px] pb-[21px]  px-[21px] rounded-xl border border-[rgba(36,39,44,0.1)] drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)] shadow-[rgba(36,39,44,0.1)]'>
          <h3 className=' text-[23px] leading-[33.2px] font-[500]'>Kia Car Dealers in Jhansi</h3>
           <BrandCarDealers/>

          
         
        </div>
        <div className=' w-full relative flex flex-col gap-[8px] pt-[18px] pb-[26.5px]  px-[31.22px] rounded-xl border border-[rgba(36,39,44,0.1)] drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)] shadow-[rgba(36,39,44,0.1)]'>
                  <h3 className=' text-[23px] leading-[33.2px] font-[500]'>Questions & Answers</h3>
                  <Menu menuItems={["FAQ","Latest Questions"]} setitem={setfaqcategory} item={faqcategory}/>
           
                   <Accordion/>
                 
                </div>
               {breakpoint<=1050 && <TrendingCars/>}
               {breakpoint<=1050 && <PopularSUV/>}
               {breakpoint<=1050 &&<CarPriceInIndia/>}
                <Helpful/>
                    </div>
                   { breakpoint>1050 && 
                   <div className=' w-[27%] flex flex-col gap-[40px] '>
                      <CalculateEmi/>
                      <Brochure CarName={Model.name}/>
                      <CarPriceInIndia/>
                      <TrendingCars/>
                      <PopularSUV/>
                      <SimilarCars/>
                    </div>}

                </div>
                
                
                </div>
               


            </div>

        </div>

    )
}

export default BrandModelPrice