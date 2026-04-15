import { useScreenResizeValue } from "../../../ScreenSizeFunction";
import React, { useState, useEffect, useRef } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { fetchallcardetails, HomePageApiCall } from "../../../Context/ApiCall";
import { SearchAPICall } from "../../../Context/ApiCall";
import { SearchIcon } from "../../../assets/Images/SVG";
import HeaderBannerImage1 from "../../../assets/VolvoImages/HeaderBannerImage1.jpg";
import HeaderBannerImage2 from "../../../assets/VolvoImages/HeaderBannerImage2.jpg";
import HeaderBannerImage3 from "../../../assets/VolvoImages/HeaderBannerImage3.jpg";
import HeaderMobileImage1 from "../../../assets/VolvoImages/HeaderMobileImage1.jpg";
import HeaderMobileImage2 from "../../../assets/VolvoImages/HeaderMobileImage2.jpg";
import HeaderMobileImage3 from "../../../assets/VolvoImages/HeaderMobileImage3.jpg";
import parse from "html-react-parser";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import { setCarDetailsSlice } from "../../../Store/CarDetailsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Header = () => {
  const breakpoint = useScreenResizeValue();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [HeaderBannerImages, SetHeaderBannerImages] = useState([]);
  /////////////////////////////////////////////////////////////////////////
  const selectBudgetOptions = [
    "1-5 Lakh",
    "5-10 Lakh",
    "10-15 Lakh",
    "15-20 Lakh",
    "20-35 Lakh",
  ];
  const [selectedBudget, setselectedBudget] = useState("Select Budget");
  const [showBudgetOptions, setshowBudgetOptions] = useState(false);
  /////////////////////////////////////////////////////////////////////////
  const selectVehicleType = [
    "Hatchback",
    "Sedan",
    "SUV",
    "MUV",
    "Luxury",
    "Super Luxury",
    "Convertible",
    "Hybrid",
    "Coupe",
    "Pickup Truck",
    "Minivan",
    "Wagon",
  ];
  const [selectedVehicle, setselectedVehicle] = useState("Vehicle Type");
  const [showselectedVehicle, setshowselectedVehicle] = useState(false);
  /////////////////////////////////////////////////////////////////////////

  const selectBrandOptions = [
    "Hyundai",
    "Honda",
    "Tata",
    "Renault",
    "Toyota",
    "MG",
    "Kia",
    "Maruti",
    "Mahindra",
    "Skoda",
    "Jeep",
    "Nissan",
    "BMW",
    "Mercedes",
    "Land Rover",
    "VolksWagen",
    "Renault",
    "Audi",
    "BYD",
    "Citroen",
    "Volvo",
    "Nissan",
    "Porsche",
    "Lexus",
    "Lamborghini",
    "Rolls-Royce",
    "Jaguar",
    "Mini",
    "Ferrari",
    "Force Motors",
    "Maserati",
    "Isuzu",
    "Aston Martin",
    "McLaren",
    "Bentley",
    "Tesla",
    "Lotus",
    "VinFast",
    "OLA",
    "Fisker",
    "Leap Motors",
    "Pravaig",
  ];
  const [selectedBrand, setselectedBrand] = useState("Select Brand");
  const [showBrandOptions, setshowBrandOptions] = useState(false);

  /////////////////////////////////////////////////////////////////////////
  const [ModelOptions, setModelOptions] = useState([]);
  const [selectedModel, setSelectedModel] = useState("Select Model");
  const [showModelOptions, setshowModelOptions] = useState(false);
    
const BrandSlug = false
const ModelSlug = false

const [advancedSearchResult,setadvancedSearchResult] = useState(null);


  useEffect(() => {
    const AdvancedSearch = async () => {
      let brand;
      if (selectedBrand !== "Select Brand") {
        brand = selectedBrand;
        if (selectedModel !== "Select Model") {
          brand = selectedBrand + " " + selectedModel;
        }
      }

      if (selectedBrand !== "Select Brand") {
        const result = await SearchAPICall(brand, { SetSearchResults });
        if (result && selectedModel === "Select Model") {
          const models = result
            .filter((item) => item.type === "Model")
            .map((item) => {
              return item.name.replace(/<b>.*?<\/b>\s*/g, "").trim();
            });
          setModelOptions(models);
        }

        if(result) {
          setadvancedSearchResult(result)
        }
      }
    };

    AdvancedSearch();
  }, [selectedBrand, selectedModel]);

  /////////////////////////////////////////////////////////////////////////

  const headerCardOptions = ["New", "Used"];
  const [headerCardCarType, setheaderCardCarType] = useState("New Car");
  const [showHeaderCardSelected, setshowHeaderCardSelected] = useState(false);
  ////////////////////////////////////////////////////////////////////////////

  const budgetBrandOptions = ["By Brand", "Budget"];
  const [selectedBudgetBrandOptions, setselectedBudgetBrandOptions] =
    useState("By Brand");
  const [showBudgetBrandOptions, setshowBudgetBrandOptions] = useState(false);

  useEffect(() => {
    HomePageApiCall({ SetHeaderBannerImages });
  }, []);

  const [SearchInput, SetSearchInput] = useState("");
  const timeoutRef = useRef(null); //

  const [SearchResults, SetSearchResults] = useState([]);
  const [ShowSearchResults, SetShowSearchResults] = useState(false);

  const searchdivRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchdivRef.current &&
        !searchdivRef.current.contains(event.target)
      ) {
        SetShowSearchResults(false);
      }
    };

    if (ShowSearchResults) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ShowSearchResults]);

  const handleChange = (e) => {
    const value = e.target.value;
    SetSearchInput(value);
    SetShowSearchResults(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      SearchAPICall(value, { SetSearchResults });
    }, 500);
  };

  return (
    <div className="flex items-center justify-center bg-[#FFFFFF] relative font-1">
      <div className={`z-0 header_carousel max-w-screen w-screen`}>
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          className="max-h-[550px] "
        >
          {/* {HeaderBannerImages.length > 0 &&
            HeaderBannerImages.map((img, index) => {
              return (
                <SwiperSlide className="relative z-10  " key={index}>
                  <div className="bg-[#ff6] h-[550px]">
                    <img src={img} alt="" className="object-cover h-full" />
                  </div>
                </SwiperSlide>
              );
            })} */}

          {breakpoint <= 500 && (
            <>
              <SwiperSlide className="relative z-10  ">
                <div className=" h-[550px] w-full bg-blue">
                  <img
                    src="https://www.mahindraelectricsuv.com/on/demandware.static/-/Library-Sites-eSUVSharedLibrary/default/dw76f2a276/MBE6/batman-edition/banner/Frame_2147225035_1.jpg"
                    alt=""
                    className=" object-cover h-full w-full"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative z-10  ">
                <div className=" h-[550px] w-full bg-blue">
                  <img
                    src={HeaderMobileImage2}
                    alt=""
                    className="object-cover h-full w-full"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative z-10  ">
                <div className=" h-[550px] w-full bg-blue">
                  <img
                    src={HeaderMobileImage3}
                    alt=""
                    className="object-cover h-full w-full"
                  />
                </div>
              </SwiperSlide>
            </>
          )}
          {breakpoint > 500 && (
            <>
              <SwiperSlide className="relative z-10  ">
                <div className=" h-[550px] w-full bg-blue">
                  <img
                    src="https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Creta/Highlights/home/cretakingknighthome-pc.jpg"
                    alt=""
                    className="object-cover h-full w-full"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="relative z-10  ">
                <div className=" h-[550px] w-full bg-blue">
                  <img
                    src="https://www.mahindra.com/sites/default/files/2025-01/Mahindra_BE-6%26-XEV-9-Banner-Global-Premiere-Banner_REVISED.webp"
                    alt=""
                    className=" object-cover h-full w-full"
                  />
                </div>
              </SwiperSlide>
            
              <SwiperSlide className="relative z-10  ">
                <div className=" h-[550px] w-full bg-blue">
                  <img
                    src="https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/i20/Highlights/knight/i20knighthome-pc.jpg"
                    alt=""
                    className="object-cover h-full w-full"
                  />
                </div>
              </SwiperSlide>
            </>
          )}
        </Swiper>
      </div>
      <div
        className={`${
          breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]"
        } flex items-center justify-center 
       absolute   

       ${breakpoint > 1250 && "top-[75%]"}
       ${breakpoint <= 1250 && breakpoint > 1100 && "top-[75%]"}
       ${breakpoint <= 1100 && breakpoint > 900 && "top-[67%]"}
       ${breakpoint <= 900 && breakpoint > 420 && "top-[55%]"}
       ${breakpoint <= 420 && "top-[90%]"}
       
    `}
      >
        <div
          className={`relative  z-10 bg-[#ffffff] flex items-center justify-center gap-[1rem]  rounded-[10px]  border-[1px] border-[#24272c1a] 
          ${breakpoint <= 1100 ? "flex-col" : ""} 
                              ${
                                breakpoint <= 1100
                                  ? breakpoint <= 450
                                    ? "w-[100%] p-[1rem]"
                                    : "w-[100%] px-[1rem] py-[2.5rem]  "
                                  : "w-[85%] px-[1.5rem] py-[2rem]  "
                              }
                              `}
        >
          <div className="rounded-full bg-[#fff] shadow-md  absolute p-[.25rem] top-[-25px] translate-y-[10%] ">
            <button
              className={`rounded-full bg-[#000] text-color-1 text-center py-[.25rem] px-[1rem] text-[.875rem] 
              
                ${breakpoint <= 450 ? "w-[100px]" : "w-[200px]"}
                `}
            >
              Buy
            </button>
          </div>

          {/* ------------------------------------------------------------------------------------------------ */}
          <div
            className={` flex gap-[1rem] flex-wrap ${
              breakpoint <= 1100 ? "w-full" : "w-[75%]"
            } `}
          >
            <div
              className={`px-[.5rem] relative py-[.5rem] bg-transparent border-b-[1px] border-[#24272c1a]  font-2-book  text-color-9-70 cursor-pointer   ${
                breakpoint <= 900 ? "w-[45%]" : "flex-1"
              }`}
              onClick={() => {
                setshowHeaderCardSelected(!showHeaderCardSelected);
                setshowBudgetBrandOptions(false);
                setshowBrandOptions(false);
                setshowselectedVehicle(false);
              }}
            >
              <div className={`flex items-center  justify-between gap-[1rem] text-[.875rem]
                  ${breakpoint<=400 ?'text-[.825rem]':'text-[.875rem]'}
                `}>
                {headerCardCarType}
                {/* <span className="text-color-9-70"><IoIosArrowDown/></span> */}
              </div>

              {/* <div style={{scrollbarWidth:'none'}}
              className={`absolute w-full left-0 top-[100%] bg-[#ffffff] rounded-[5px]  overflow-hidden transition-all duration-150 z-[400]  ${
                 showHeaderCardSelected ? "h-fit overflow-scroll border-[1px] border-[#24272c1a]" : "h-0 overflow-hidden"
              }`}
            >
              {headerCardOptions.map((opt, index) => {
                return (
                  <h1
                    key={index}
                    onClick={() => {
                      setheaderCardCarType(opt);
                    }}
                    className="px-[1rem] py-[.5rem] font-2-book  text-color-9-70 hover:bg-[rgba(0,0,0,0.1)] cursor-pointer"
                  >
                    {opt}
                  </h1>
                );
              })}
            </div> */}
            </div>
            {/* ------------------------------------------------------------------------------------------------ */}

            <div
              className={`px-[.5rem] relative py-[.5rem] bg-transparent border-b-[1px] border-[#24272c1a]  font-2-book  text-color-9-70 cursor-pointer   ${
                breakpoint <= 900 ? "w-[45%]" : "flex-1"
              }`}
              onClick={() => {
                setshowBudgetBrandOptions(!showBudgetBrandOptions);
                setshowHeaderCardSelected(false);
                setshowBrandOptions(false);
                setshowselectedVehicle(false);
              }}
            >
              <div className={`flex items-center justify-between gap-[1rem] 
                 ${breakpoint<=400 ?'text-[.825rem]':'text-[.875rem]'}
                `}>
                {selectedBudgetBrandOptions}
                {/* <span className="text-color-9-70"><IoIosArrowDown/></span> */}
              </div>

              {/* <div style={{scrollbarWidth:'none'}}
              className={`absolute w-full left-0 top-[100%] bg-[#ffffff] rounded-[5px]  overflow-hidden transition-all duration-150 z-[400] ${
                 showBudgetBrandOptions ? "h-fit overflow-scroll border-[1px] border-[#24272c1a]" : "h-0 overflow-hidden"
              }`}
            >
              {budgetBrandOptions.map((opt, index) => {
                return (
                  <h1
                    key={index}
                    onClick={() => {
                      setselectedBudgetBrandOptions(opt);
                    }}
                    className="px-[1rem] py-[.5rem] font-2-book  text-color-9-70 hover:bg-[rgba(0,0,0,0.1)] cursor-pointer"
                  >
                    {opt}
                  </h1>
                );
              })}
            </div> */}
            </div>
            {/* ------------------------------------------------------------------------------------------------ */}
            <div
              className={`px-[.5rem] relative py-[.5rem] bg-transparent border-b-[1px] border-[#24272c1a]  font-2-book  text-color-9-70 cursor-pointer   ${
                breakpoint <= 900 ? "w-[45%]" : "flex-1"
              } `}
              onClick={() => {
                setshowBrandOptions(!showBrandOptions);
                setshowselectedVehicle(false);
                setshowHeaderCardSelected(false);
                setshowBudgetBrandOptions(false);
              }}
            >
              <div className={`flex items-center justify-between gap-[1rem]
                 ${breakpoint<=400 ?'text-[.825rem]':'text-[.875rem]'}
                `}>
                {selectedBrand}
                <span className="text-color-9-70">
                  <IoIosArrowDown />
                </span>
              </div>

              <div
                style={{ scrollbarWidth: "none" }}
                className={`absolute w-full left-0 top-[100%] bg-[#ffffff] rounded-[5px]  overflow-hidden transition-all duration-150 z-[400] ${
                  showBrandOptions
                    ? "h-[200px] overflow-scroll border-[1px] border-[#24272c1a]"
                    : "h-0 overflow-hidden"
                }`}
              >
                {selectBrandOptions.map((opt, index) => {
                  return (
                    <h1
                      key={index}
                      onClick={() => {
                        setselectedBrand(opt);
                      }}
                      className="px-[1rem] py-[.5rem] font-2-book  text-color-9-70 hover:bg-[rgba(0,0,0,0.1)] cursor-pointer"
                    >
                      {opt}
                    </h1>
                  );
                })}
              </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------ */}
            <div
              className={`px-[.5rem] relative py-[.5rem] bg-transparent border-b-[1px] border-[#24272c1a]  font-2-book  text-color-9-70 cursor-pointer   ${
                breakpoint <= 900 ? "w-[45%]" : "flex-1"
              }`}
              onClick={() => {
                setshowselectedVehicle(!showselectedVehicle);
                setshowBrandOptions(false);
                setshowHeaderCardSelected(false);
                setshowBudgetBrandOptions(false);
              }}
            >
              <div className={`flex items-center justify-between gap-[1rem] 
                ${breakpoint<=400 ?'text-[.825rem]':'text-[.875rem]'}
                `}>
                {selectedModel}
                <span className="text-color-9-70">
                  <IoIosArrowDown />
                </span>
              </div>

              {selectedBrand !== "Select Brand" && (
                <div
                  style={{ scrollbarWidth: "none" }}
                  className={`absolute w-full left-0 top-[100%] bg-[#ffffff] rounded-[5px]  overflow-hidden transition-all duration-150 z-[400] ${
                    showselectedVehicle
                      ? "h-[200px] overflow-scroll border-[1px] border-[#24272c1a]"
                      : "h-0 overflow-hidden"
                  }`}
                >
                  {ModelOptions.map((opt, index) => {
                    return (
                      <h1
                        key={index}
                        onClick={() => {
                          setSelectedModel(opt);
                        }}
                        className="px-[1rem] py-[.5rem] font-2-book  text-color-9-70 hover:bg-[rgba(0,0,0,0.1)] cursor-pointer"
                      >
                        {opt}
                      </h1>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* <div ref={searchdivRef} className="flex flex-col relative  w-full">
                 <div
                   className={`text-[#ababab]  flex h-max  bg-[#FFFFFF] border-[#C1C7CD]  border-[1px] 
                      
                   ${breakpoint <=650 &&'w-full'}
                   ${(SearchResults.length>0 && ShowSearchResults) ?'rounded-t-[8px]':'rounded-[8px]'}
       
                   `}
                 >
                   <div className={` flex w-full px-[16px] py-[8px] items-center 
                     ${breakpoint>750&&'min-w-[380px]'}
                     ${(breakpoint<=750&&  breakpoint>650) &&'min-w-[300px]'}
                     ${breakpoint <=650 &&'w-full'}
       
       
                     `}>
                     <SearchIcon/>
                     <input
                       type="text"
                       placeholder="Search for..."
                       className=" outline-none  rounded-tl-[8px] rounded-bl-[8px] w-full px-2 bg-[#FFFFFF] text-[.8125rem] focus:outline-none 
                       placeholder:text-[#ABABAB] text-color-8 font-2-book
                       "
                       value={SearchInput}
                       onChange={handleChange}
       
                     />
                    {SearchInput &&  <IoIosCloseCircle className="text-[1rem] text-color-8 cursor-pointer"
                    onClick={()=>{SetSearchInput("") 
                             SetShowSearchResults(false)
       
                    }}
                    />}
                   </div>
                 
       
                 </div>
                  {(SearchResults.length>0 && ShowSearchResults) && 
                   <div className={`bg-[#ffffff] opacity-100 z-[1000]  absolute w-full top-[100%] border-[1px] border-[#c1cdc7]
                   ${(SearchResults.length>0 && ShowSearchResults) ?'rounded-b-[8px] border-t-[0px]':'rounded-[8px]'}
                   `}>
                     {SearchResults.map((res,index)=>{
            
                         return(
                           <h1
                         key={index}
                           className="px-[2rem] cursor-pointer py-[.25rem] hover:bg-[rgba(0,0,0,0.1)] text-[1rem] text-color-8 font-2-book"
                           onClick={()=>{
                             if(res.type==='oem'){
                               navigate(`/brand/${res.key}`)
                               SetShowSearchResults(false)
                             }
                             if(res.type==='Model'){
                               fetchallcardetails(res.url,BrandSlug,ModelSlug,{dispatch,navigate,setCarDetailsSlice,SetShowSearchResults})
                               
                             }
                           }}
       
                         >
                           {parse(res.name)}
                         </h1>
                         )
                     })}
                   </div>}
                   </div> */}
          {/* ------------------------------------------------------------------------------------------------ */}
          <button
            onClick={()=>{
              if(advancedSearchResult){
                fetchallcardetails(advancedSearchResult[0]?.url,BrandSlug,ModelSlug,{dispatch,navigate,setCarDetailsSlice,SetShowSearchResults})
                window.scrollTo(0,0)
              }
            }}

            className={`rounded-full font-1 ${
              breakpoint <= 400 ? "text-[14px]" : ""
            } font-bold text-color-1 bg-[#0b66fa] px-[2rem] py-[.5rem] flex-1
                            ${breakpoint > 1200 && "text-[1rem]"}
                            ${
                              breakpoint <= 1200 &&
                              breakpoint > 768 &&
                              "text-[.875rem]"
                            }
                            ${
                              breakpoint <= 768 &&
                              breakpoint > 480 &&
                              "text-[.75rem]"
                            } 
                            ${breakpoint <= 480 && "text-[.625rem]"}
                            ${
                              breakpoint <= 1100
                                ? breakpoint <= 900
                                  ? breakpoint <= 400
                                    ? "w-[100%]"
                                    : "w-[80%]"
                                  : "w-[50%]"
                                : "w-[max]"
                            }
                            `}
          >
            Search
          </button>
          {/* ------------------------------------------------------------------------------------------------ */}
        </div>
      </div>
    </div>
  );
};

export default Header;
