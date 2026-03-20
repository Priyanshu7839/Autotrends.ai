import React, { useRef, useState } from 'react'
import { BrandCarCompare, BrandCarRelevantCars, ContactUs, Menu, PopularBrandsHeader, PopularBrandsSection10, PopularBrandsSection11, PopularBrandsSection12 } from '../../components'
import { grill, headlight, kia1 } from '../../assets/Images';
import { Rightarrow } from '../../assets/Images/SVG';
import { useScreenResizeValue } from '../../ScreenSizeFunction';
import { brandoffers, EVTrending } from '../../MockData';

const Popularbrands = () => {
  const [bodyType,setbodyType]=useState("SUV");
  const [priceRange,setpriceRange]=useState("1-5 Lakhs");
  
  const breakpoint=useScreenResizeValue();

 const Model = [
        {
          image: kia1,
          name: "Kia Seltos",
          MinPrice: "9.95",
          MaxPrice: "17.65",
          features: [
            "Diesel / Petrol",
            "17 to 20.7 kmpl",
            "Manual/Automatic",
            "1482 cc - 1497 cc",
            "113.42 - 157.81 bhp",
            "3 Star Safety",
          ],
          facelift: true,
          electric: false,
          moreimages: [grill, headlight],
          rating: 4.5,
          reviews: 1200,
        },
      ];
      const priceList = [
        [100000, 500000],
        [500000, 1000000],
        [1000000, 1500000]];
      const MenuList = priceList.map((item, index) => {
        let Min = "";
        let Max = "";
    
        if (item[0] >= 100000 && item[0] <= 9999999) {
          Min = `${Math.round(item[0] / 100000)} Lakhs`;
        } else {
          Min = `${Math.round(item[0] / 10000000)} Crore`;
        }
        if (item.length == 1) {
          return `Above ${Min}`;
        } else {
          if (item[1] >= 100000 && item[1] <= 9999999) {
            Max = `${Math.round(item[1] / 100000)} Lakhs`;
          } else {
            Max = `${Math.round(item[1] / 10000000)} Crore`;
          }
          let s1 = Min.split(" ")[1];
          let s2 = Max.split(" ")[1];
    
          if (s1 === s2) {
            return `${Min.split(" ")[0]}-${Max.split(" ")[0]} ${s1}`;
          } else {
            return `${Min}-${Max}`;
          }
        }
      });

      const bodyTypes=["SUV","Hatchback","Sedan","MUV","Luxury"];
      



  return (
    <div className=' w-full h-max items-center flex flex-col gap-[20px]'>
        <PopularBrandsHeader/>
        <div className={`${breakpoint<=1440?breakpoint<=412?'w-full':'w-[84%]':'w-[1200px]'}  flex flex-col gap-[20px]`}>
        <div className={` ${breakpoint<=412?'':'pt-[18px]'} bg-[white]   relative flex flex-col     rounded-xl  border border-[rgba(36,39,44,0.1)]  `}>
                 <h3 className="  px-[21px]  text-[23px]  leading-[33.2px] font-[500] ">
                   The Most Searched Cars
                 </h3>
                 <div className="  px-[21px]  mt-[16.59px] w-full overflow-x-scroll " style={{scrollbarWidth:'none'}}>
                   <Menu menuItems={bodyTypes} setitem={setbodyType} item={bodyType  } />
                 </div>
                 <div className=" w-full flex flex-col  pt-[29.5px] pb-[10px]  rounded-xl ">
                   <div
                     className="w-full rounded-lg px-[21px]    overflow-x-scroll gap-[20px] "
                     style={{ scrollbarWidth: "none" }}
                   >
                     <div className=" w-max flex  gap-[20px]">
                       {Array(5)
                         .fill()
                         .map((item, key) => (
                           <BrandCarRelevantCars
                             CarModels={Model}
                             used={false}
                             buttonText={"Check December Offers"}
                             newVariant={(key>1)?true:false}
                           />
                         ))}
                     </div>
                   </div>
                   <button className=" px-[21px]  text-blue text-[15px] mt-[8px] font-[700] w-max flex gap-[8px] mb-[10px]  items-center">
                     View All {bodyType} Cars <Rightarrow />
                   </button>
                 </div>
               </div>
               <div className="  bg-[white]    relative flex flex-col  pt-[18px]   rounded-xl  border border-[rgba(36,39,44,0.1)]  ">
                 <h3 className="  text-[23px]  px-[21px] leading-[33.2px] font-[500] ">
                  Electric Cars
                 </h3>
                 
                 <div className=" w-full flex flex-col  pt-[29.5px] pb-[10px]  rounded-xl ">
                   <div
                     className="w-full rounded-lg px-[21px]   overflow-x-scroll gap-[20px] "
                     style={{ scrollbarWidth: "none" }}
                   >
                     <div className=" w-max flex  gap-[20px]">
                       {Array(5)
                         .fill()
                         .map((item, key) => (
                           <BrandCarRelevantCars
                             CarModels={Model}
                             used={false}
                             buttonText={"Check December Offers"}
                             newVariant={(key>1)?true:false}
                           />
                         ))}
                     </div>
                   </div>
                   <button className=" px-[21px] text-blue text-[15px] mt-[8px] font-[700] w-max flex gap-[8px] mb-[10px]  items-center">
                     View All Electric Cars <Rightarrow />
                   </button>
                 </div>
               </div>
               <div className="  bg-[white]    relative flex flex-col  pt-[18px]   rounded-xl  border border-[rgba(36,39,44,0.1)]  ">
                 <h3 className="  text-[23px] px-[21px]  leading-[33.2px] font-[500] ">
                  Upcoming Cars
                 </h3>
        <div className=" w-full flex flex-col  pt-[29.5px] pb-[10px]  rounded-xl ">
                   <div
                     className="w-full rounded-lg  px-[21px]  overflow-x-scroll gap-[20px] "
                     style={{ scrollbarWidth: "none" }}
                   >
                     <div className=" w-max flex  gap-[20px]">
                     {Array(6)
                  .fill()
                  .map((item, key) => (
                    <BrandCarRelevantCars
                      CarModels={Model}
                      used={false}
                      buttonText={"Alert Me When Launched"}
                      electric={true}
                      facelift={(key>2)?true:false}
                      upcoming={true}
                    />
                  ))}
                     </div>
                   </div>
                   <button className=" px-[21px] text-blue text-[15px] mt-[8px] font-[700] w-max flex gap-[8px] mb-[10px]  items-center">
                     View All Upcoming Cars <Rightarrow />
                   </button>
                 </div>
                 </div>
                 <div className="  bg-[white]   relative flex flex-col  pt-[18px]   rounded-xl  border border-[rgba(36,39,44,0.1)]  ">
                 <h3 className="  text-[23px]  px-[21px]  leading-[33.2px] font-[500] ">
                  Latest Cars
                 </h3>
        <div className=" w-full flex flex-col  pt-[29.5px] pb-[10px]  rounded-xl ">
                   <div
                     className="w-full rounded-lg px-[21px]   overflow-x-scroll gap-[20px] "
                     style={{ scrollbarWidth: "none" }}
                   >
                     <div className=" w-max flex  gap-[20px]">
                     {Array(6)
                  .fill()
                  .map((item, key) => (
                    <BrandCarRelevantCars
                      CarModels={Model}
                      used={false}
                      buttonText={"Check December Offers"}
                      electric={true}
                      facelift={(key>2)?true:false}
                      upcoming={false}
                      latest={true}
                    />
                  ))}
                     </div>
                   </div>
                   <button className=" px-[21px]  text-blue text-[15px] mt-[8px] font-[700] w-max flex gap-[8px] mb-[10px]  items-center">
                     View All Latest Cars <Rightarrow />
                   </button>
                 </div>
                 </div>
                  <div className="  bg-[white]    relative flex flex-col  pt-[18px]   rounded-xl  border border-[rgba(36,39,44,0.1)]  ">
                           <h3 className="  text-[23px] px-[21px]  leading-[33.2px] font-[500] ">
                             Trusted used cars by Budget
                           </h3>
                           <div className="  mt-[16.59px] px-[21px] w-full overflow-x-scroll" style={{scrollbarWidth:'none'}}>
                             <Menu menuItems={MenuList} setitem={setpriceRange} item={priceRange} />
                           </div>
                           <div className=" w-full flex flex-col  pt-[29.5px] pb-[10px]  rounded-xl ">
                             <div
                               className="w-full rounded-lg px-[21px]  overflow-x-scroll gap-[20px] "
                               style={{ scrollbarWidth: "none" }}
                             >
                               <div className=" w-max flex  gap-[20px]">
                                 {Array(5)
                                   .fill()
                                   .map((item, key) => (
                                     <BrandCarRelevantCars
                                       CarModels={Model}
                                       used={false}
                                       usedbybudget={true}
                                       
                                     />
                                   ))}
                               </div>
                             </div>
                             
                           </div>
                         </div>
                         <div className="  bg-[white]    relative flex flex-col  pt-[18px]   rounded-xl  border border-[rgba(36,39,44,0.1)]  ">
          <h3 className="  text-[23px] px-[20px]  leading-[33.2px] font-[500] ">
            
            Popular Brands
          </h3>
         
          <div className=" w-full flex flex-col  pt-[29.5px] pb-[10px]  rounded-xl ">
                             <div
                               className="w-full rounded-lg   px-[20px] overflow-x-scroll gap-[20px] "
                               style={{ scrollbarWidth: "none" }}
                             >
                               <div className=" w-max flex  gap-[20px]">
            {brandoffers.brands.map((brand, index) => {
              return (
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
              );
            })}
          </div>
          </div>
          </div>
          <button className=" px-[20px] text-blue text-[15px] mt-[20px] font-[700] w-max flex gap-[8px] mb-[10px]  items-center">
            View All  Brands <Rightarrow />
          </button>
        </div>
        <div className="  bg-[white]    relative flex flex-col  pt-[18px]   rounded-xl border border-[rgba(36,39,44,0.1)]    ">
          <h3 className=" text-[23px] px-[20px] font-[600] leading-[38.8px] text-[#24272c] ">
            Car Visual Stories
          </h3>
          <div className=' w-full overflow-x-scroll px-[10px]' style={{scrollbarWidth:'none'}}>
          <div className="  flex mt-[20px] w-max ">
            {EVTrending.Trending.map((trending, index) =>
               (
                <div
                  key={index}
                  className=" px-[10px] "
                >
                    <div className=' w-[232px] h-[350px] rounded-[8px] flex items-end   bg-no-repeat bg-cover bg-center aspect-[9/16]  ' style={{backgroundImage:`url(${trending.thumbnail})`}}>
                      
                         <p className=' bg-gradient-to-b pb-[18px] text-[white] rounded-b-[8px]  text-[15px] leading-[22.5px] font-[400] from-[rgba(0,0,0,0.1)] to-60%  to-[rgba(0,0,0,1)] h-max w-full px-[15px]'>
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
          <button className=" px-[20px] text-blue text-[15px] mt-[20px] font-[700] w-max flex gap-[8px] mb-[10px]  items-center">
            View All Visual Stories <Rightarrow />
          </button>


         
         
        </div>
        <div className="  bg-[white]    relative flex flex-col  pt-[18px]   rounded-xl  border border-[rgba(36,39,44,0.1)]  ">
          <h3 className="  text-[23px] px-[21px]  leading-[33.2px] font-[500] ">
         Compare to buy the Right Car
          </h3>
          
          <div className=" w-full flex flex-col   pt-[6px] pb-[10px]  rounded-xl ">
            <div
              className="w-full rounded-lg px-[21px]  overflow-x-scroll gap-[20px] "
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
            <button className="px-[21px] text-blue text-[15px] mt-[8px] font-[700] w-max flex gap-[8px] mb-[10px]  items-center">
              View All Cars Comparison <Rightarrow />
            </button>
          </div>
        </div>
        <PopularBrandsSection10/>
        <PopularBrandsSection11/>
        <PopularBrandsSection12/>
        <ContactUs/>
           
        </div>
        </div>
      
      
   
  )
}

export default Popularbrands
