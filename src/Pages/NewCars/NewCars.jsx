import React, { useState } from "react";
import { useScreenResizeValue } from "../../ScreenSizeFunction";
import { NewCarsHeader, Menu, BrandCarRelevantCars, BrandCarCompare, Accordion, ContactUs } from "../../components";
import { ReadMoreicon, Rightarrow } from "../../assets/Images/SVG";
import { AnimatePresence, motion } from "framer-motion";
import {
  grill,
  headlight,
  hondalogo,
  hyundai,
  jeep,
  kia1,
  kia_logo,
  mahindra,
  mainimg,
  marutilogo,
  mg,
  nissan,
  renault,
  skoda,
  tata,
  toyota,
} from "../../assets/Images";
import { brandoffers } from "../../MockData";

const NewCars = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [priceRange,setpriceRange]=useState("1-5 Lakhs");
  const [bodyType,setbodyType]=useState("SUV");
  const [timecategory,settimecategory]=useState("Current");


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

  const bodyTypes=["SUV","Hatchback","Sedan","MUV","Luxury"];

  const breakpoint = useScreenResizeValue();
  const priceList = [
    [100000, 500000],
    [500000, 1000000],
    [1000000, 1500000],
    [1500000, 2000000],
    [2000000, 3500000],
    [3500000, 5000000],
    [5000000, 10000000],
    [10000000],
  ];
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
  return (
    <div className=" w-full h-max min-h-[100vh] flex flex-col items-center">
      { breakpoint>412 && <NewCarsHeader image={mainimg} />}
      <div
        className={`${
          breakpoint <= 1440 ? breakpoint<=412?'w-full ': "w-[84%]" : "w-[1200px]"
        } gap-[20px] pt-[33px] flex flex-col`}
      >
        <div
          className="w-full flex flex-col gap-[11.3px] rounded-xl border px-[21px]
     pt-[18px] pb-[21px]  shadow-md shadow-[rgba(36,39,44,0.1)] border-[rgba(36,39,44,0.1)]"
        >
          <div className=" flex items-baseline gap-[9.68px]">
            <h3 className=" text-[27px] font-[500] leading-[38.8px] text-[#24272c] ">
              New cars in 2024
            </h3>
          </div>

          <p className="text-[15px] text-[rgba(36,39,44,0.7)] leading-[24px]">
            CarDekho brings a complete range of new cars in 2024 in India with
            prices. You can search cars by applying filters such as by price, by
            bodytype, by brand, by seating capacity & more. Also, stay updated
            with upcoming cars, electric cars in India, compare cars in your
            price range and stay tuned to the latest car news.
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
        <div className="  bg-[white]    relative flex flex-col  pt-[18px]   rounded-xl  border border-[rgba(36,39,44,0.1)]  ">
          <h3 className="  text-[23px] px-[20px]  leading-[33.2px] font-[500] ">
            
            Search new cars by brand
          </h3>
          <div className=" px-[20px] w-full  mt-[16.59px]">
            <Menu menuItems={["Current", "Upcoming", "Expired"]} setitem={settimecategory} item={timecategory} />
          </div>
        { breakpoint>412 && <div className="  flex mt-[20px]  px-[20px] flex-wrap gap-[20px]">
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
          </div>}
          {
            breakpoint<=412 && <div className=" w-full overflow-x-scroll px-[20px] mt-[20px]" style={{scrollbarWidth:'none'}}>
              <div className=" flex gap-[20px] w-max">
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
          }
          <button className=" px-[20px] text-blue text-[15px] mt-[20px] font-[700] w-max flex gap-[8px] mb-[10px]  items-center">
            View All {timecategory} Brands <Rightarrow />
          </button>
        </div>
        <div className="  bg-[white]    relative flex flex-col  pt-[18px]   rounded-xl  border border-[rgba(36,39,44,0.1)]  ">
          <h3 className=" px-[20px]  text-[23px]  leading-[33.2px] font-[500] ">
            {" "}
            Search new cars by Price
          </h3>
          <div className=" px-[20px] w-full overflow-x-scroll  mt-[16.59px] " style={{scrollbarWidth:'none'}}>
            <Menu menuItems={MenuList} setitem={setpriceRange} item={priceRange} />
          </div>
          <div className=" w-full flex flex-col  pt-[29.5px] pb-[10px]  rounded-xl ">
            <div
              className="w-full rounded-lg   overflow-x-scroll px-[20px] gap-[20px] "
              style={{ scrollbarWidth: "none" }}
            >
              <div className=" w-max flex  gap-[20px]">
                {Array(5)
                  .fill()
                  .map((item, key) => (
                    <BrandCarRelevantCars
                      CarModels={Model}
                      used={false}
                      buttonText={"Get On Road Price"}
                    />
                  ))}
              </div>
            </div>
            <button className=" px-[20px] text-blue text-[15px] mt-[8px] font-[700] w-max flex gap-[8px] mb-[10px]  items-center">
              View All  <Rightarrow />
            </button>
          </div>
        </div>
        <div className="  bg-[white]    relative flex flex-col  pt-[18px]   rounded-xl  border border-[rgba(36,39,44,0.1)]  ">
          <h3 className="  text-[23px] px-[20px] leading-[33.2px] font-[500] ">
            Find Offers on top Brands
          </h3>

          {breakpoint>412 && <div className="  flex mt-[20px] px-[20px] flex-wrap gap-[20px]">
            {brandoffers.brands.map((brand, index) =>
              index <= 5 ? (
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
                  <p className=" text-[10px] leading-[15px] text-[rgba(36,39,44,0.3)] font-[400]">
                    {brand.offers} Offers available
                  </p>
                </div>
              ) : (
                <></>
              )
            )}
          </div>}
          {
            breakpoint<=412 && <div className=" w-full px-[20px] overflow-x-scroll mt-[20px]" style={{scrollbarWidth:'none'}}>
              <div className=" flex gap-[20px] w-max">
              {brandoffers.brands.map((brand, index) =>
              index <= 5 ? (
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
                  <p className=" text-[10px] leading-[15px] text-[rgba(36,39,44,0.3)] font-[400]">
                    {brand.offers} Offers available
                  </p>
                </div>
              ) : (
                <></>
              )
            )}
              </div>

            </div>
          }
          <details
            className={`w-full  top-0 left-0 ${
              collapsed ? "" : "pb-[30px]"
            } relative`}
          >
            <summary
              className={`list-none w-full mt-[20px] mb-[10px] h-max  bg-[white] ${
                collapsed ? "" : "absolute z-10 bottom-[5px]"
              }`}
            >
              <div
                className="flex gap-[6px]  w-max px-[20px] text-[#0085ff] text-[14px] font-[600] items-center cursor-pointer"
                onClick={() => setCollapsed((prev) => !prev)}
              >
                View {collapsed ? "All" : "Less"} Brands{" "}
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
                <motion.div
                  className="text-[rgba(36,39,44,0.7)] px-[20px] mt-[20px] h-max flex-wrap flex gap-[20px]   relative z-0 w-full text-[15px] leading-[24px] cursor-text"
                  initial={{
                    height: 0,
                    display: "hidden",
                    paddingBottom: "0px",
                    opacity: 0,
                  }}
                  animate={{
                    height: "max-content",
                    paddingBottom: "10px",
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
                  {brandoffers.brands.map((brand, index) =>
                    index > 5 ? (
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
                        <p className=" text-[10px] leading-[15px] text-[rgba(36,39,44,0.3)] font-[400]">
                          {brand.offers} Offers available
                        </p>
                      </div>
                    ) : (
                      <></>
                    )
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </details>
        </div>
        <div className="  bg-[white]    relative flex flex-col  pt-[18px]   rounded-xl  border border-[rgba(36,39,44,0.1)]  ">
          <h3 className="  text-[23px]  px-[21px] leading-[33.2px] font-[500] ">
            Find Right Cars by body type
          </h3>
          <div className="  px-[21px] mt-[16.59px] w-full overflow-x-scroll" style={{scrollbarWidth:'none'}}>
            <Menu menuItems={bodyTypes} setitem={setbodyType} item={bodyType  } />
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
                      buttonText={"View All Offers"}
                      newVariant={(key>1)?true:false}
                    />
                  ))}
              </div>
            </div>
            <button className=" text-blue text-[15px] px-[21px] mt-[8px] font-[700] w-max flex gap-[8px] mb-[10px]  items-center">
              View All {bodyType} Cars <Rightarrow />
            </button>
          </div>
        </div>
        <div className="  bg-[white]    relative flex flex-col  pt-[18px]   rounded-xl  border border-[rgba(36,39,44,0.1)]  ">
          <h3 className="  text-[23px] px-[21px] leading-[33.2px] font-[500] ">
           Latest Cars
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
                    <BrandCarRelevantCars
                      CarModels={Model}
                      used={false}
                      buttonText={"View Year End Offers"}
                      electric={true}
                      facelift={(key>2)?true:false}
                  
                    />
                  ))}
              </div>
            </div>
            <button className=" text-blue px-[21px] text-[15px] mt-[8px] font-[700] w-max flex gap-[8px] mb-[10px]  items-center">
              View All Latest Cars <Rightarrow />
            </button>
          </div>
        </div>
        <div className="  bg-[white]    relative flex flex-col  pt-[18px]   rounded-xl  border border-[rgba(36,39,44,0.1)]  ">
          <h3 className="  text-[23px] px-[21px] leading-[33.2px] font-[500] ">
          Upcoming Cars
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
            <button className=" text-blue text-[15px] px-[21px] mt-[8px] font-[700] w-max flex gap-[8px] mb-[10px]  items-center">
              View All Upcoming Cars <Rightarrow />
            </button>
          </div>
        </div>
        <div className="  bg-[white]   relative flex flex-col  pt-[18px]   rounded-xl  border border-[rgba(36,39,44,0.1)]  ">
          <h3 className="  text-[23px]  px-[21px] leading-[33.2px] font-[500] ">
          Popular New Car Comparisons
          </h3>
          
          <div className=" w-full flex flex-col   pt-[6px] pb-[10px]  rounded-xl ">
            <div
              className="w-full rounded-lg  px-[21px]  overflow-x-scroll gap-[20px] "
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
            <button className=" text-blue text-[15px] px-[21px] mt-[8px] font-[700] w-max flex gap-[8px] mb-[10px]  items-center">
              View All Upcoming Cars <Rightarrow />
            </button>
          </div>
        </div>
        <div className="  bg-[white]    relative flex flex-col  pt-[18px]   rounded-xl  border border-[rgba(36,39,44,0.1)]  ">
          <h3 className="  text-[23px]  px-[21px] leading-[33.2px] font-[500] ">
         Frequently Asked Questions on New Cars
          </h3>
          <Accordion/>
          
          
         
        </div>
        <ContactUs/>

        

      </div>
    </div>
  );
};

export default NewCars;
