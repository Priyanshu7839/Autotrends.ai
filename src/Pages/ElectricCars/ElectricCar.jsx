import React, { useState } from 'react'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import { BrandCarCompare, BrandCarRelevantCars, ElectricCarHeader, EVCostCalculator, EVNewsCard, CarImages, EVSection13, BrandDealers, EVsection16, EVSection17, EVSection18, EVSection19, ContactUs } from '../../components';
import { EvChargingStation, EvIconLatestCars, EvMaintenanceTips, EvNewsUpdatesIcon, VideosIcon,ReadMoreicon,ReadLessicon, Rightarrow, Minus, PlusIcon } from '../../assets/Images/SVG';
import { AnimatePresence,motion } from 'framer-motion';
import { kia1,grill,headlight, ev_why_new, feature_low_running_cost, feature_performnace_exp, feature_technology, feature_eco_friendly, feature_convenient_charging, evmap, fuelStation } from '../../assets/Images';
import { brandoffers,faqs,EVTrending, EVNews,EVCarImages, cities } from '../../MockData';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineArrowDropDown } from 'react-icons/md';

const ElectricCar = () => {

    const [collapsed,setCollapsed]=useState(true);
    const [carsCategory,setcarsCategory]=useState('popular');
    const [openIndex,setOpenIndex]=useState(-1);

    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index? -1 : index);
    };

    const breakpoint=useScreenResizeValue();
    console.log(breakpoint);
    const benefitsOfEv=[
        {
            title:'Lower Running cost',
            image:feature_low_running_cost,
            description:'Electric vehicles are the future of transportation, reducing the carbon footprint and improving air quality.'
        },
        {
            title:'Performane And Driving Experience',
            image:feature_performnace_exp,
            description:'Electric vehicles offer a smoother driving experience, making it easier to navigate through traffic and avoid accidents.'
        },
        {
            title:'Technology',
            image:feature_technology,
            description:'Electric vehicles have advanced technology, such as electric batteries, charging infrastructure, and advanced sensors.'
        },
        {
            title:'Eco-Freindly',
            image:feature_eco_friendly,
            description:'Electric vehicles are becoming more environmentally friendly, reducing the need for fossil fuels and greenhouse gas emissions.'
        },
        {
            title:'Convenient Charging',
            image:feature_convenient_charging,
            description:'Electric vehicles are becoming more convenient to charge, making it easier to access charging stations and reduce traffic congestion.'
        }
    ]

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

  return (
    <div className='w-full h-max flex justify-center font-Roboto'>
        <div className={`${breakpoint<=1440?breakpoint<=412?'w-[100vw]':'w-[84%]':'w-[1200px]'}  `}>
          <ElectricCarHeader/>
        { breakpoint>412&&
        <div className=' w-full h-[68px]  mb-[100px] flex justify-center items-center border-y-[#e5e5e5] border-y'>
     <div className=' px-[16px] gap-[9px] h-full flex justify-center items-center'>
        <EvChargingStation/>
        <p className=' text-[15px] leading-[23px] font-[500] '>Charging Stations</p>
     </div>
     <div className=' px-[16px] gap-[9px] h-full flex justify-center items-center'>
        <EvMaintenanceTips/>
        <p className=' text-[15px] leading-[23px] font-[500] '>Maintenance Tips</p>
     </div>
     
     <div className=' px-[16px] gap-[9px] h-full flex justify-center items-center'>
        <EvIconLatestCars/>
        <p className=' text-[15px] leading-[23px] font-[500] '>Electric cars</p>
     </div>
     <div className=' px-[16px] gap-[9px] h-full flex justify-center items-center'>
        <VideosIcon/>
        <p className=' text-[15px] leading-[23px] font-[500] '>Videos</p>
     </div>
     <div className=' px-[16px] gap-[9px] h-full flex justify-center items-center'>
       <EvNewsUpdatesIcon/>
        <p className=' text-[15px] leading-[23px] font-[500] '>News Updates</p>
     </div>
          </div>}
          <div
          className={` ${breakpoint<=412?'w-full mt-[40px] flex flex-col gap-[11.3px] rounded-xl  px-[21px] pb-[21px]':'w-full flex flex-col gap-[11.3px] rounded-xl  px-[21px] pb-[21px]'}  `}
        >
          <div className=" flex items-baseline gap-[9.68px]">
            <h3 className=" text-[32px] font-[600] leading-[38.8px] text-[#24272c] ">
            Electric cars in India
            </h3>
          </div>

          <p className="text-[15px] text-[rgba(36,39,44,0.7)] leading-[24px]">
          Currently, there are 45 electric cars on sale in India. Of these, the MG Comet EV is the cheapest EV while the BMW i7 is the most expensive electric car in India. Upcoming electric cars in
India include Jeep Avenger,Tata Harrier EV and Maruti eVX among others.Locate a charging station in your city.
          </p>
          <details
            className={`w-full top-0 left-0 ${
              collapsed ? "" : "pb-[30px]"
            } relative`}
          >
            <summary
              className={`list-none w-full  bg-[white] ${
                collapsed ? "" : "absolute z-10 bottom-0"
              }`}
            >
              <div
                className="flex gap-[6px] w-max text-[#0085ff] text-[14px] font-[600] items-center cursor-pointer"
                onClick={() => setCollapsed((prev) => !prev)}
              >
                Read {collapsed ? "More" : "Less"}{" "}
                <span>
                  <ReadMoreicon
                    bg="#0085ff"
                    w={16}
                    h={16}
                    collapsed={collapsed}
                  ></ReadMoreicon>
                </span>
              </div>
            </summary>
            <AnimatePresence>
              {!collapsed && (
                <motion.p
                  className="text-[rgba(36,39,44,0.7)]  relative z-0 w-full text-[15px] leading-[24px] cursor-text"
                  initial={{
                    height: 0,
                    display: "hidden",
                    opacity: 0,
                  }}
                  animate={{
                    height: "max-content",
                    display: "block",
                    opacity: "100%",
                  }}
                  exit={{
                    height: 0,

                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestiae laborum voluptate sed exercitationem, amet, qui,
                  eius culpa natus necessitatibus quasi quas voluptates vel.
                  Fugiat necessitatibus officiis reprehenderit quaerat
                  aspernatur est.
                </motion.p>
              )}
            </AnimatePresence>
          </details>
        </div>
        <div className=' w-full h-max flex flex-col mt-[70px] gap-[50px] '>
        <div className='h-max w-full flex flex-col gap-[30px] '>
            <h3 className=" px-[20px] text-[32px] font-[600] leading-[38.8px] text-[#24272c] ">
            Electric cars
            </h3>
           
                <ul className=' px-[20px] list-inside list-disc items-center flex w-full gap-[12px]'>
                <li 
                className={` cursor-pointer  rounded-full py-[9.5px] px-[16px]  bg-[#f1f3f6] ${carsCategory==="popular"?'text-[#24272c] font-[700]':'text-[rgba(36,39,44,0.5)] font-[500]'}`}
                onClick={(e)=>setcarsCategory('popular')}>
                    Popular
                </li>
                <li
                className={` cursor-pointer rounded-full py-[9.5px] px-[16px]  bg-[#f1f3f6] ${carsCategory==="upcoming"?'text-[#24272c] font-[700]':'text-[rgba(36,39,44,0.5)] font-[500]'}`} 
                onClick={(e)=>setcarsCategory('upcoming')}>
                    Upcoming
                
                </li>
                </ul>
                <div className=" w-full flex flex-col   pt-[10px] pb-[10px]  rounded-xl ">
            <div
              className="w-full rounded-lg   overflow-x-scroll px-[20px] gap-[20px] "
              style={{ scrollbarWidth: "none" }}
            >
              <div className=" w-max flex   gap-[20px]">
                {
                    Array(5).fill().map((item,index)=><BrandCarRelevantCars key={index} CarModels={Model} buttonText={"Check December Offers"}/>)
                }
                </div>
                </div>
                 <button className=" px-[20px] text-blue text-[15px] mt-[8px] font-[700] w-max flex gap-[8px] mb-[10px]  items-center">
                              View All Electric Cars <Rightarrow />
                            </button>
                </div>
               
                 

          </div>
          <div className="  bg-[white] px-[20px]   relative flex flex-col     rounded-xl   ">
          <h3 className=" text-[32px] font-[600] leading-[38.8px] text-[#24272c] ">
            Popular Brands
          </h3>
         { breakpoint>412?
         <div className=' w-full overflow-x-scroll' style={{scrollbarWidth:'none'}}>
          <div className="  flex mt-[20px] w-max gap-[20px]">
            {brandoffers.brands.map((brand, index) =>
               (
                <div
                  key={index}
                  className=" border border-[rgba(36,39,44,0.15)] rounded-[8px] w-[175px] h-[155px] flex flex-col justify-center items-center "
                >
                  <img
                    src={brand.image}
                    alt="Tata Logo"
                    className=" w-[140px] h-[82px]"
                  />
                  <p className=" text-[#24272c] text-[16px] leading-[21px]">
                    {brand.name}
                  </p>
                </div>
              ) 
            )}
          </div>
          </div>:
          
           <div className="  grid grid-cols-3 mt-[20px] w-full gap-[10px]">
             {brandoffers.brands.map((brand, index) =>
                (
                 <div
                   key={index}
                   className=" border border-[rgba(36,39,44,0.15)] rounded-[8px] shadow-[0px_2px_5px_rgba(36,39,44,0.1)]  h-max py-[10px] flex flex-col justify-center items-center "
                 >
                   <img
                     src={brand.image}
                     alt="Tata Logo"
                     className=" w-[140px] h-[82px]"
                   />
                   <p className=" text-[#24272c] text-[16px] leading-[21px]">
                     {brand.name}
                   </p>
                 </div>
               ) 
             )}
           </div>
          
          }
         

         
         
        </div>
        <div className="  bg-[white]   relative flex flex-col gap-[50px]     rounded-xl    ">
          <h3 className=" px-[20px] text-[32px] font-[600] leading-[38.8px] text-[#24272c] ">
          Compare EV Cars in India
          </h3>
          
          <div className=" w-full flex flex-col   pt-[6px]  pb-[10px]  rounded-xl ">
            <div
              className="w-full rounded-lg   overflow-x-scroll px-[20px]  gap-[20px] "
              style={{ scrollbarWidth: "none" }}
            >
              <div className=" w-max flex  gap-[20px]">
                {Array(5)
                  .fill()
                  .map((item, key) => (
                    <BrandCarCompare/>
                  ))}
              </div>
            </div>
           
          </div>
        </div>
        <div className={` ${breakpoint<=412?'flex flex-col':'flex'}`} >
          { breakpoint>412 && 
          <div className=' w-[40%] px-[20px]'>
                <img src={ev_why_new} alt=" image" />
            </div>}
            <div className={` ${breakpoint<=412? 'w-full flex flex-col':'w-[60%] flex flex-col  px-[20px]'}`} >
                <h3 className=" px-[20px] text-[32px] font-[600] leading-[38.8px] text-[#24272c] ">
                Why the Automotive Future is Electric
                </h3>
                <p className=' px-[20px] mt-[13.19px]  text-[17px] leading-[25.5px] font-[400] text-[rgba(36,39,44,0.5)]'>
                The concerns regarding the environment and limited natural resources, a sustainable and clean future is
deeply linked to the inevitable electrification of our cars. It also comes with a lot of benefits, as listed
here:

                </p>
                { breakpoint<=412 && 
          <div className=' w-full px-[7px]'>
                <img src='https://stimg.cardekho.com/pwa/img/ev/evBenefits-mobile-new.png' alt=" image" />
            </div>}

                <div className={` ${breakpoint<=412?"w-full mt-[10px] px-[20px]":"w-full mt-[48px] px-[20px]"}`} >
                     
                      <div className=" w-full flex flex-col">
                        {benefitsOfEv.map((item, index) => (
                          <div
                            key={index}
                            className={`rounded-lg overflow-hidden py-[19px] flex gap-[16px] ${(index!==faqs.length-1)?'border-b-[2px] border-[rgba(36,39,44,0.1)]':''}`}
                          >
                            <img src={item.image} alt=" low running cost icon" className=' w-[52px] h-[51px]'/>
                            <div className=' w-full flex flex-col'>
                            <button
                              onClick={() => toggleAccordion(index)}
                              className={`w-full flex justify-between items-center  bg-gray-100 hover:bg-gray-200 text-left `}
                            >
                               
                                
                              <div className=" flex gap-2">
                               
                                <span className="font-medium">{item.title}</span>
                              </div>
                                
                                 
                            
                              {openIndex===index &&<Minus/>}
                              {
                                openIndex!== index && <PlusIcon />
                              }
                            </button>
                            {openIndex === index && (
                              <div className="py-[4px]  text-[#6f6f6f]  bg-white text-gray-600 ">
                               {
                                item.description
                               }
                              </div>
                            )}

                            </div>
                            
                            
                          </div>
                        ))}
                      </div>
                      <button className=" text-blue text-[15px] mt-[8px] font-[700] w-max flex gap-[8px] mb-[10px]  items-center">
                                Read More <Rightarrow />
                            </button>
                    </div>

            </div>
        </div>
        <div className="  bg-[white]    relative flex flex-col  pt-[18px]   rounded-xl   ">
          <h3 className=" px-[20px] text-[32px] font-[600] leading-[38.8px] text-[#24272c] ">
            What's Trending
          </h3>
          <div className=' w-full overflow-x-scroll ' style={{scrollbarWidth:'none'}}>
          <div className={` ${breakpoint<=412?'flex mt-[20px]  px-[10px] w-max ':'flex mt-[20px] w-max'}`}  >
            {EVTrending.Trending.map((trending, index) =>
               (
                <div
                  key={index}
                  className=" px-[10px] "
                >
                    <div className=' w-[232px] h-[350px] rounded-[8px] flex items-end   bg-no-repeat bg-cover bg-center aspect-[9/16]  ' style={{backgroundImage:`url(${trending.thumbnail})`}}>
                      
                         <p className=' bg-gradient-to-b pb-[18px] text-[white] rounded-b-[8px]  text-[15px] leading-[22.5px] font-[400] from-[rgba(0,0,0,0.1)] to-60%  to-[rgba(0,0,0,0.8)] h-max w-full px-[15px]'>
                            {
                                trending.title
                            }


                         </p>


                    </div>
                  
                </div>
              ) 
            )}
          </div>
          </div>

         
         
        </div>
        <div className="  bg-[white]    relative flex flex-col  pt-[18px]   rounded-xl   ">
          <h3 className=" px-[20px] text-[32px] font-[600] leading-[38.8px] text-[#24272c] ">
            EV News & Updates
          </h3>
          <div className=' w-full overflow-x-scroll px-[10px]' style={{scrollbarWidth:'none'}}>
          <div className="  flex mt-[20px] w-max ">
            {EVNews.news.map((news, index) =>
               (
                <div
                  key={index}
                  className=" px-[10px] w-max "
                >
                    <EVNewsCard props={news}/>
                  
                </div>
              ) 
            )}
          </div>
          </div>
          <button className=" px-[20px] text-blue text-[15px] mt-[12px] font-[700] w-max flex gap-[8px] mb-[10px]  items-center">
                              View All Electric Car News <Rightarrow />
                            </button>


         
         
        </div>
        <div className="  bg-[white] px-[20px]   relative flex flex-col  pt-[18px]    rounded-xl   ">
          <div className=' flex w-full items-center gap-0'>
          <h3 className=" text-[32px] font-[600] leading-[38.8px] text-[#24272c]  ">
            EV Running Cost Calculator
          </h3>
         { breakpoint<=412&&<img src={fuelStation} alt=" charging point image" className=' w-[30%] ' />}
          </div>
       
          <EVCostCalculator/>
          

         
         
        </div>
        <div className="  bg-[white]   relative flex flex-col  pt-[18px]   rounded-xl   ">
          <h3 className=" px-[20px] text-[32px] font-[600] leading-[38.8px] text-[#24272c] ">
            Popular Electric Car Road test
          </h3>
          <div className=' w-full overflow-x-scroll px-[10px]' style={{scrollbarWidth:'none'}}>
          <div className="  flex mt-[20px] w-max ">
            {EVNews.news.map((news, index) =>
               (
                <div
                  key={index}
                  className=" px-[10px] w-max "
                >
                    <EVNewsCard props={news}/>
                  
                </div>
              ) 
            )}
          </div>
          </div>
          


         
         
        </div>
        <div className="  bg-[white]    relative flex flex-col  pt-[18px]   rounded-xl   ">
          <h3 className=" px-[20px] text-[32px] font-[600] leading-[38.8px] text-[#24272c] ">
            Electric Car Images
          </h3>
          <div className=' w-full overflow-x-scroll px-[20px]' style={{scrollbarWidth:'none'}}>
          <div className="  flex mt-[20px] w-max  gap-[20px]">
            {
              EVCarImages.images.map((car,index)=> <CarImages props={car}   />)
            }
          </div>
          </div>
          


         
         
        </div>
        <div className='h-max w-full flex flex-col gap-[50px] '>
            <h3 className=" text-[32px] px-[20px] font-[600] leading-[38.8px] text-[#24272c] ">
           Popular Hybrid Cars
            </h3>
                <div className=" w-full flex flex-col  pt-[29.5px] pb-[10px]  rounded-xl ">
            <div
              className="w-full rounded-lg   overflow-x-scroll px-[20px] gap-[20px] "
              style={{ scrollbarWidth: "none" }}
            >
              <div className=" w-max flex  gap-[20px]">
                {
                    Array(5).fill().map((item,index)=><BrandCarRelevantCars key={index} CarModels={Model} buttonText={"Check December Offers"}/>)
                }
                </div>
                </div>
                 <button className=" text-blue text-[15px] px-[20px] mt-[8px] font-[700] w-max flex gap-[8px] mb-[10px]  items-center">
                 Popular Hybrid Cars<Rightarrow />
                            </button>
                </div>
               
                 

          </div>
          <EVSection13/>
          <div className='h-max w-full flex flex-col gap-[30px] '>
            <h3 className=" text-[32px] px-[20px] font-[600] leading-[38.8px] text-[#24272c] ">
           Latest EV Videos
            </h3>
                <div className=" w-full flex flex-col   pb-[10px]  rounded-xl ">
            <div
              className="w-full rounded-lg px-[10px]   overflow-x-scroll gap-[20px] "
              style={{ scrollbarWidth: "none" }}
            >
              <div className=" w-max flex  ">
              {EVNews.news.map((news, index) =>
               (
                <div
                  key={index}
                  className=" px-[10px] w-max "
                >
                    <EVNewsCard props={news}/>
                  
                </div>
              ) 
            )}
                </div>
                </div>
                 
                </div>
               
                 

          </div>
          <div className='h-max w-full flex flex-col  '>
            <h3 className=" px-[20px] text-[32px] font-[600] leading-[38.8px] text-[#24272c] ">
              Electric Vehicles Charging Stations in India
            </h3>
                <div className=" w-full flex flex-col  pt-[29.5px] pb-[10px]  rounded-xl ">
            <div
              className="w-full rounded-lg px-[10px]   overflow-x-scroll gap-[20px] "
              style={{ scrollbarWidth: "none" }}
            >
              <div className=" w-max flex px-[10px] py-[5px]  gap-[20px] ">
              {
                cities.map(( city,index)=>
                  (index<7)?<BrandDealers key={index} dealers={false} w={66} h={66} city={city} py={8}/>:''
                )
              }
                </  div>
                </div>
                 
                </div>
                </div>
                <div className={` ${breakpoint<=412?' flex items-center w-full mt-[20px]  h-[300px] px-[5%] bg-center bg-cover bg-no-repeat':' mt-[20px] flex items-center w-full h-[427px] pl-[10%]  bg-center bg-cover bg-no-repeat'}`} style={{backgroundImage:`url(${evmap})`}}>
                        <div className={` ${breakpoint<=412?'w-full rounded-[12px] bg-[white]  gap-[14px] flex flex-col px-[20px] py-[50px] h-max ':'min-w-[280px] rounded-[12px] bg-[white] w-max  gap-[14px] flex flex-col px-[50px] py-[50px] h-max'}`} >
                          <p className={` ${breakpoint<=412?' text-[20px] leading-[28px] font-[600] text-[#24272c] ':'text-[24px] leading-[36px] font-[600] text-[#24272c]'}`}>
                          Search Electric Charging Station in
                          </p>
                                <div className="flex relative  items-center h-max rounded-[8px] gap-[7px]  pl-[17px] bg-[#f2f3f7]  w-full">
                                <CiLocationOn className=' w-[12px] h-[14px] text-[rgba(36,39,44,0.5)]'/>
                                <input 
                                  id="carSelect"
                                  className="flex overflow-hidden  appearance-none outline-none border-none z-[10] pl-[4px] pt-[9px] flex-col pb-[11.5px] w-full  text-[14px] font-[500] text-sm bg-opacity-0 bg-[white]  text-[rgba(36,39,44,0.5)] bg-white rounded-lg h-max   "
                                  aria-label="Select electric car"
                                  placeholder='Enter Your City'
                                >
                                  
                                </input>
                                <MdOutlineArrowDropDown className=' absolute z-0 top-[30%] right-[16px]'/>
                               
                              </div>

                        </div>

                </div>
                <EVsection16/>
                <EVSection17/>
                <EVSection18/>
                <EVSection19/>
                <ContactUs/>
               
                 

          </div>
         

        </div>
        
        
        

        </div>
      
   
  )
}

export default ElectricCar;


