import React,{useState} from 'react'

import {  CarNews,variantData,MoreOptionsToConsiderData, BrandCars} from '../../MockData'
import { BrandCarRelevantCars,BrandCarAlternativesCompare,BrandNewsCard,Accordion,Helpful,CalculateEmi,Brochure,CarPriceInIndia,TrendingCars,PopularSUV,SimilarCars,BrandCarVideosHeader,MoreOptions,AreYouConfused,BrandCarVariantCard,Menu, BrandCarVariantPriceCard } from '../../components'
import { Rightarrow } from '../../assets/Images/SVG'
import { kia1,grill,headlight } from '../../assets/Images'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import { useSelector } from 'react-redux'

const BrandModelVariants = () => {
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

          const breakpoint=useScreenResizeValue();
          console.log(breakpoint);
          const [item,setitem]=useState("Latest Questions");
          const [carCategory,setCarCategory]=useState("All");
          const [carsubcategory,setcarsubcategory]=useState("All");


            const MileageVariantsHeading = [
              "All",
              ...new Set(details?.variantTable?.variantList?.map((v) => v.fuelName)),
            ];
            const [MileageVariantHeading, SetMileageVariantHeading] = useState("All");


  return (
    <div className=' w-full h-max flex justify-center'>
    <div className={`  h-max pt-[20px] w-full`} >
        <BrandCarVideosHeader prop={Model[0]} videos={false} variants={true} text={"variants"} category={"Variants"}/>
       
        <div className='w-full  flex justify-center mt-[41px]'>

        
        <div className={`${breakpoint<=1440?breakpoint<=768?'w-[92%]':'w-[84%]':'w-[1200px]'}   flex gap-[20px] mt-[20px] `}>
           
            <div className={` ${breakpoint<=1050?"w-full":"w-[76%]"} relative  flex flex-col gap-[20px]   `}>
                <div className=' w-full relative flex flex-col  pt-[18px]   rounded-xl  drop-shadow-[0px_1px_2px_rgba(36,39,44,0.1)] shadow-[rgba(36,39,44,0.1)] border border-[rgba(36,39,44,0.1)]  '>
                          <h3 className={`font-[500] pl-[20px]
                            ${breakpoint>1250 && 'text-[23px]'}
                            ${breakpoint<=1250 && 'text-[20px]'}
                            `}> {Model.name} Variants Price List</h3>
                           
                          <div className="relative flex px-[20px]  py-[10px] items-center justify-start gap-[36px] border-b-[1px] border-[rgba(36,39,44,0.15)] ">
                {MileageVariantsHeading.map((heading, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col cursor-pointer relative"
                      onClick={() => {
                        SetMileageVariantHeading(heading);
                      }}
                    >
                      <h1
                        className={`
                            ${breakpoint>1250 && 'text-[.875rem]'}
                            ${breakpoint<=1250 && 'text-[.75rem]'}
                          ${
                          MileageVariantHeading === heading
                            ? "font-medium  text-color-9"
                            : "text-color-9-70 "
                        }`}
                      >
                        {heading}
                      </h1>
                      <span
                        className={` h-[3px] bg-[#0b66fa] absolute bottom-[-10px]  ${
                          MileageVariantHeading === heading ? "w-full" : "w-0"
                        } transition-all duration-200`}
                      ></span>
                    </div>
                  );
                })}
              </div>
                            
                             <div className=' pl-[20px] border-b-2 border-[rgba(36,39,44,0.1)] w-full py-[10px] flex gap-[19.18px] items-center'>
                                <div className=' text-[12px] leading-[18px] flex gap-[9px] items-center'>
                                 <input type="radio" name="all" id="all" className='w-[18px] h-[18px]' checked={carsubcategory==="All"} onClick={(e)=>setcarsubcategory("All")} />
                                 <p >All</p>
                                </div>
                                <div className=' text-[12px] leading-[18px] flex gap-[9px] items-center'>
                                 <input type="radio" name="all" id="all" className='w-[18px] h-[18px]' checked={carsubcategory==="Automatic"} onClick={(e)=>setcarsubcategory("Automatic")} />
                                 <p >Automatic</p>
                                </div>
                                <div className=' text-[12px] leading-[18px] flex gap-[9px] items-center'>
                                 <input type="radio" name="all" id="all" className='w-[18px] h-[18px]' checked={carsubcategory==="Manual"} onClick={(e)=>setcarsubcategory("Manual")}/>
                                 <p >Manual</p>
                                </div>
                
                
                            </div>
                            <div className="flex flex-col justify-center w-full">
          <div className={`flex  font-[600]  text-[12px] leading-[18px] ${breakpoint<768?" justify-between":'justify-center'} bg-[#fafafa] items-center w-full   min-h-[44px] text-[#24272c] text-opacity-70`}>
            <div className="  py-3.5 pl-6 my-auto whitespace-nowrap  min-h-[44px] min-w-[240px] max-w-[300px] w-max">
              Variant
            </div>
            <div className={`  py-3.5 pr-[10px] whitespace-nowrap bg-neutral-50 min-h-[44px] max-w-[178px] w-max`}>
              Ex-Showroom Price
            </div>
           { breakpoint>=768 && <div className="flex grow shrink self-stretch my-auto h-11 bg-neutral-50 min-w-[240px] w-[290px]" />
}
            
            { breakpoint>=768 && <div className="grow shrink self-stretch py-3.5 pr-10 pl-4 my-auto text-center whitespace-nowrap bg-neutral-50 min-h-[44px] w-[86px] max-md:pr-5">
              Compare
            </div>}
          </div>

          <div className="flex flex-col justify-center w-full min-h-[787px]">
            {variantData.map((variant, index) => (
              <BrandCarVariantPriceCard
                key={index}
                variant={variant}
                onCompare={() =>{}}
              />
            ))}
          </div>
          <div className=' rounded-b-xl'>
          <button className=' text-blue text-[15px] font-[700] pl-[20px] flex gap-[8px] mb-[17px] mt-[12px] items-center'>
            View All {Model[0].name.split(" ")[1]} Variants <Rightarrow/>
                      </button>
          </div>
        </div>
                          
                           
                         
                       
                                    </div>
                                  {breakpoint<=1050 && <CalculateEmi/>}
                                    <div className=' w-full relative flex flex-col gap-[8px] pt-[18px] pb-[20px]  px-[21.22px] rounded-xl border border-[rgba(36,39,44,0.1)]  drop-shadow-[0px_1px_2px_rgba(36,39,44,0.1)]'>
          <h3 className={` font-[500]
            ${breakpoint>1250 && 'text-[23px]'}
            ${breakpoint<=1250 && 'text-[20px]'}
            `}>Must read articles before buying Kia Seltos</h3>
           
           <BrandNewsCard CarNews={CarNews} vertical={breakpoint<1050?true:false} horizontal={breakpoint>=1050?true:false} />
                    
        </div>
        <div className=' w-full flex flex-col  pt-[18px]   rounded-xl border border-[rgba(36,39,44,0.1)]  drop-shadow-[0px_1px_2px_rgba(36,39,44,0.1)]'>
            <div className=' w-full px-[21px] flex flex-col gap-[10px] '>
            <h3 className={`  font-[500]
              ${breakpoint>1250 && 'text-[23px]'}
              ${breakpoint<=1250 && 'text-[20px]'}
              `}>Save 2%-22% on buying a used Kia Seltos <sup>**</sup></h3>
          <div className='  w-full   overflow-x-scroll mt-[10px] rounded-lg ' style={{scrollbarWidth:'none'}}>
            <div className=' w-max flex   gap-[20px]'>
            {
                Array(5).fill().map((item,index)=>{
                    console.log(index)
                return <BrandCarRelevantCars index={index} CarModels={BrandCars} used={true}/>
})
            }
            </div>
           
                      
        
          </div>
          <button className={` text-blue  font-[700] flex gap-[8px] mb-[10px] mt-[10px] items-center
            ${breakpoint>1250 && 'text-[15px]'}
            ${breakpoint<=1250 && 'text-[13px]'}
            `}>
            View Used Kia Cars in Jhansi <Rightarrow/>
                      </button>
            </div>
            <div className=' rounded-b-xl  bg-[#f1f1f1] py-[8px] px-[21px] text-[12px]'>
            ** Value are approximate calculated on cost of new car with used car
            </div>
         
          
          </div>

          {breakpoint<=1050 && <Brochure/>}
          <div className=' w-full flex flex-col gap-[8px] pt-[18px] pb-[21px] px-[21px] rounded-xl border border-[rgba(36,39,44,0.1)] shadow-md shadow-[rgba(36,39,44,0.1)]'>
          <h3 className={`   font-[500]
            ${breakpoint>1250 && 'text-[23px]'}
            ${breakpoint<=1250 && 'text-[20px]'}
            `}>{Model[0].name} Comparison with Similar Cars</h3>
          <div className='w-full  overflow-x-scroll mt-[10px] rounded-lg ' style={{scrollbarWidth:'none'}}>
          <div className=' w-max flex gap-[20px]'>
          {
                Array(5).fill().map((item,key)=>(<BrandCarAlternativesCompare key={key} price={false} variant={true}  CarModels={BrandCars}/>))
            }
          </div>
          
                        
           

          </div>
          

                    </div>

  
  
               
               
                
                <MoreOptions data={MoreOptionsToConsiderData}/>
                
          
                        
           

        
          

                    
                <AreYouConfused/>
                 <div className=' w-full relative flex flex-col gap-[8px] pt-[18px] pb-[26.5px]  px-[31.22px] rounded-xl border-2 border-[rgba(36,39,44,0.1)] shadow-md shadow-[rgba(36,39,44,0.1)]'>
                                  <h3 className={` font-[500]
                                    ${breakpoint>1250 && 'text-[23px]'}
                                    ${breakpoint<=1250 && 'text-[20px]'}
                                    `}>{Model[0].name} Questions & Answers</h3>
                                  <Menu menuItems={["Latest Questions","FAQs"]} item={item} setitem={setitem}/>
                                   <Accordion/>
                                 
                                </div>
                                
                                {breakpoint<=1050 && <Helpful/>}
                                {breakpoint<=1050 && <CarPriceInIndia/>}
                                {breakpoint<=1050 &&<TrendingCars/>}
                                {breakpoint<=1050 &&<PopularSUV/>}
                                {breakpoint<=1050 &&<SimilarCars/>}
  
  
 </div>
 {breakpoint>1050 && <div className=' w-[25%] flex flex-col gap-[40px] '>
              <CalculateEmi/>
              <Brochure/>
              <CarPriceInIndia/>
              <TrendingCars/>
              <PopularSUV/>
              <SimilarCars/>
            </div>
}
        </div>
 
      
        
        
        </div>
       


    </div>

</div>
  )
}

export default BrandModelVariants
