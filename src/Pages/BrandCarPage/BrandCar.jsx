import React, { useState } from "react";
import {
  colours_palette,
  view360,
  images_palette,
  likes,
  shareIcon,
  starIcon,
  half_star,
  tagIcon,
  engine,
  torque,
  torque_type,
  mileage,
  power,
  seating_capacity,
  thumbsdown,
  thumbsup,
  roadTestKiaSeltos,
  videourlImg,
  arrow_icon_trends,
  edit,
} from "../../assets/Images/index.js";
import {
  Rightarrow,
  ReadMoreicon,
  ReadLessicon,
  EngineIcon,
  PowerIcon,
  TorqueIcon,
  MileageIcon,
  ThumbsUpIcon,
  ThumbsDownIcon,
} from "../../assets/Images/SVG.jsx";
import {
  TrendingCars,
  SimilarCars,
  Brochure,
  CarPriceInIndia,
  AreYouConfused,
  ColorVariations,
  UserReviews,
  BrandCarVirtualExperience,
  Menu,
  Helpful,
  Accordion,
  CalculateEmi,
  CompareTable,
} from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Link, useNavigate } from "react-router";
import { kia1, grill, headlight } from "../../assets/Images/index.js";
import MoreOptions from "../../Components/BrandCar/MoreOptions.jsx";
import { useScreenResizeValue } from "../../ScreenSizeFunction.js";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import { FaCheck } from "react-icons/fa6";

const BrandCar = ({setdetailsButtonsActive}) => {
  const [collapsed, setCollapsed] = useState(true);

  const [item, setitem] = useState("Latest Questions");

  const details = useSelector((state) => state.CarDetails);
  const [descriptionFullShow, setdescriptionFullShow] = useState("0");

  const MileageVariantsHeading = [
    "All",
    ...new Set(details?.variantTable?.variantList?.map((v) => v.fuelName)),
  ];
  const [MileageVariantHeading, SetMileageVariantHeading] = useState("All");
  const [vehicleType, setVehicleType] = useState("All");

  const FeaturesHeadingsArray = [
    "Key Features",
    "Top Features",
    "StandOut Features",
  ];
  const [FeaturesHeading, SetFeaturesHeading] = useState("Key Features");

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

  const navigate = useNavigate();
  const breakpoint = useScreenResizeValue();
  const dispatch = useDispatch();

  const qna = details?.qna?.items[1]?.items;
  const faq = details?.qna?.items[0]?.items;

  const iconMap = {
    Engine: <EngineIcon />,
    Power: <PowerIcon />,
    Torque: <TorqueIcon />,
    Transmission: <MileageIcon />,
    Mileage: <MileageIcon />,
    Fuel: <MileageIcon />,
  };

  const selectedCar = details?.variantTable?.variantList
  console.log(selectedCar)
 

  return (
    <div className=" w-full flex justify-center">
      <div
        className={`${
          breakpoint <= 1440
            ? breakpoint <= 500
              ? "w-[92%]"
              : "w-[84%]"
            : "w-[1200px]"
        }   mt-[32px] `}
      >
        {/* Basic Details and Price */}
        <div className={`w-full flex   ${breakpoint<=1050 ?'flex-col mb-[20px] gap-[1rem]':'h-[326px] gap-[32px]'}`}>
          <div
            className={`h-[326px] flex flex-col gap-4 ${breakpoint<=1050?'w-[100%]':'w-[38%]'}`}
            onClick={() => {
              setdetailsButtonsActive("Images")
            }}
          >
            <img
              src={details?.overView?.image}
              alt=""
              className="w-[484px] h-[272px] object-cover rounded-md"
            />
            <div className=" flex gap-[35px] px-auto h-[54px] ml-[20px] ">
              <div className=" flex gap-2">
                <img
                  src={colours_palette}
                  alt=""
                  className="w-[24px] h-[24px] "
                />
                <p className="text-[14px] text-[#6F6F6F]">Colours</p>
              </div>
              <div className=" flex gap-2 ">
                <img
                  src={images_palette}
                  alt=""
                  className="w-[24px] h-[24px] "
                />
                <p className="text-[14px] text-[#6F6F6F]">Images</p>
              </div>
              <div className=" flex gap-2 ">
                <img src={view360} alt="" className="w-[24px] h-[24px] " />
                <p className="text-[14px] text-[#6F6F6F]">View</p>
              </div>
            </div>
          </div>
          <div className={` ${breakpoint<=1050 ?'w-[100%]':'w-[60%]'}`}>
            <div className={`flex flex-col gap-[8px]`}>
              <div className="flex justify-between">
                <h1 className={`text-[#24272C] font-[500] leading-[140%]
                  ${breakpoint>1250 && 'text-[28px]'}
                  ${breakpoint<=1250 && 'text-[20px]'}
                  `}>
                  {details?.overView?.name}{" "}
                  {/* <sub className="text-[13px] text-[#2176AE]  ">change car</sub> */}
                </h1>
                <div className="flex gap-[21px]">
                  <div className="flex justify-center items-center  h-[32px] w-[32px] rounded-full bg-[#E9E9E9]">
                    <img src={likes} alt="" className="h-[17px] w-[17px]" />
                  </div>
                  <div className="flex justify-center items-center h-[32px] w-[32px] rounded-full bg-[#E9E9E9] ">
                    <img src={shareIcon} alt="" className="h-[20px] w-[17px]" />
                  </div>
                </div>
              </div>

              <div className="mt-[8px] flex gap-2 items-baseline">
                <div className="flex gap-[4px]">
                  <img src={starIcon} alt="" className="h-[13px] w-[13px]" />
                  <img src={starIcon} alt="" className="h-[13px] w-[13px]" />
                  <img src={starIcon} alt="" className="h-[13px] w-[13px]" />
                  <img src={starIcon} alt="" className="h-[13px] w-[13px]" />
                  <img src={half_star} alt="" className="h-[13px] w-[13px]" />
                </div>
                <p className={` text-[#24272C] 
                   ${breakpoint>1250 && 'text-[14px]'}
                ${breakpoint<=1250 && 'text-[12px]'}
                  `}>
               
                  {details?.overView?.ratingDesc}
                </p>
                <p className="text-[12px] text-[#24272C] rounded-md  border-[1px] border-[#cfcfd5]  px-[9px] py-[4px] ">
                  {" "}
                  Rate & win ₹1000
                </p>
              </div>
              <div className="w-[74%]">
                <p className={`font-medium
                   ${breakpoint>1250 && 'text-[20px]'}
                   ${breakpoint<=1250 && 'text-[18px]'}
                  `}>
                  Rs. {details?.overView?.priceRange}
                  <sup>*</sup>
                  <span className={`pl-[8px]  text-[#2176AE]  
                     ${breakpoint>1250 && 'text-[14px]'}
                     ${breakpoint<=1250 && 'text-[12px]'}
                    `}>
                    Get On-Road Price
                  </span>
                </p>
                <p className="text-[#24272C] text-opacity-50 text-[13px] flex items-baseline ">
                  *Ex-showroom Price in{" "}
                  <span className="pl-[8px] text-[12px] text-[#2176AE] flex gap-1 items-baseline">
                    New Delhi{" "}
                    <img src={edit} alt="" className="h-[11px] w-[11px]" />
                  </span>
                </p>
                <p className={`text-[#24272C] text-opacity-70
                   ${breakpoint>1250 && 'text-[14px]'}
                ${breakpoint<=1250 && 'text-[12px]'}
                  `}>
                  <span
                    className={`${
                      !(descriptionFullShow === "1") && "line-clamp-2"
                    }`}
                  >
                    {parse(details.schema ? details.schema[0].Description : "")}
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      setdescriptionFullShow(
                        descriptionFullShow === "1" ? "0" : "1"
                      );
                    }}
                  >
                    Read {descriptionFullShow === "1" ? "Less" : "More"}
                  </span>
                </p>
              </div>
              <div>
                <button
                  className={`bg-[#2f9e44] text-[white] font-bold px-[50px] py-[12px] rounded-md 
                     ${breakpoint>1250 && 'text-[16px]'}
                     ${breakpoint<=1250 && 'text-[14px] w-full'}
                    `}
                  onClick={() => {
                   
                  if(selectedCar.length>0){

                       navigate(`/erp-deal/${selectedCar[0].centralId}`)
                       window.scrollTo(0,0)
                  }
                  }}
                >
                  Get Best live Deals
                </button>
              </div>
              <div>
                <p className="mt-[6px] text-[#24272C] text-opacity-70 text-[13px] flex gap-[8px] items-center">
                  <span className="">
                    <img src={tagIcon} alt="" className="w-[18px] h-[18px] " />
                  </span>
                  Don't miss out on the best Deal with Autotrends
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>

        {/* Car Specs section */}
        <div className={`flex gap-3 ${breakpoint <= 1250 && 'flex-col'}`}>
          <div className={`drop-shadow-[0px_1px_2px_rgba(36,39,44,0.1)] border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 px-[20px] py-[20px] flex flex-col gap-[8px] ${breakpoint<=1250?"w-[100%]":"w-[76%]"}`}>
            <div>
              <h1 className={`font-medium text-color-9
                 ${breakpoint>1250 && 'text-[23px]'}
                ${breakpoint<=1250 && 'text-[20px]'}
                `}>
                {details?.overView?.name} Specs & Features
              </h1>
            </div>
            <div className={`relative flex  py-[10px] items-center justify-start  border-b-[1px] border-[rgba(36,39,44,0.15)] 
              ${(breakpoint<=500 && breakpoint >412) ? 'gap-[12px]':'gap-[36px]'}
              `}>
              
              {FeaturesHeadingsArray.map((heading, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col cursor-pointer relative"
                    onClick={() => {
                      SetFeaturesHeading(heading);
                    }}
                  >
                    <h1
                      className={` whitespace-nowrap 
                         ${breakpoint>1250 && 'text-[.875rem]'}
                         ${breakpoint<=1250 && 'text-[.75rem]'}
                        ${ 
                        FeaturesHeading === heading
                          ? "font-medium  text-color-9"
                          : "text-color-9-70  "
                      }`}
                    >
                      {heading}
                    </h1>
                    <span
                      className={` h-[3px] bg-[#0b66fa] absolute bottom-[-10px]  ${
                        FeaturesHeading === heading ? "w-full" : "w-0"
                      } transition-all duration-200`}
                    ></span>
                  </div>
                );
              })}
            </div>

            <div className={` gap-4 gap-y-3 py-[15px] 
              ${breakpoint<700 ?"grid-cols-1":"grid-cols-2"}
              `}>
          
              {FeaturesHeading === 'Key Features' && 
              details?.quickOverview?.keyAndFeatureList[0]?.list.map(
                (feat, index) => {
                    const IconComponent = iconMap[feat.name];
                  return (
                    <div key={index} className={` col-span-1  flex justify-between py-[10px] 
                       ${breakpoint>1250 && 'text-[15px]'}
                       ${breakpoint<=1250 && 'text-[13px]'}
                    `}>
                      <p className="text-[#24272C] text-opacity-70 flex items-center gap-[12px]">
                        <span>
                        {IconComponent||null}
                        </span>{" "}
                       {feat.name}
                      </p>
                      <p className="font-[500] text-[#24272C] ">
                        {feat.iconvalue}
                      </p>
                    </div>
                  );
                }
              )}
              {FeaturesHeading === 'Top Features' && 
              details?.quickOverview?.keyAndFeatureList[1]?.list.map(
                (feat, index) => {
                  return (
                    <div key={index}  className={` col-span-1  flex justify-between py-[10px] 
                     ${breakpoint>1250 && 'text-[15px]'}
                ${breakpoint<=1250 && 'text-[13px]'}
                    `}>
                      <p className="text-[#24272C] text-opacity-70 flex items-center gap-[12px]">
                       
                       {feat.value}
                      </p>
                      <p className={`font-[500] text-[#0085ff] 
                         ${breakpoint>1250 && 'text-[1.25rem] '}
                         ${breakpoint<=1250 && 'text-[1rem] '}
                        `}>
                        {feat.isCheckIcon&& 
                            <FaCheck/>}
                      </p>
                    </div>
                  );
                }
              )}
              {FeaturesHeading === 'StandOut Features' && 
              details?.quickOverview?.keyAndFeatureList[1]?.list.map(
                (feat) => {
              
                  return (
                     <div key={feat.id} className='px-[18px] py-[20px] w-full  drop-shadow-[0px_1px_2px_rgba(36,39,44,0.1)] border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-4'>
                                <h1 className='text-[24px] font-medium font-1 text-color-9'>{details?.filterWidgetContent?.title}</h1>
                                <div className=' '>
                                    <Swiper
                                      
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: true,
                                        }}
                                        breakpoints={{
                                            '@0.00': {
                                                slidesPerView: 1.2,
                                                spaceBetween: 10,
                                            },
                                            '@0.75': {
                                                slidesPerView: 2,
                                                spaceBetween: 10,
                                            },
                                            '@1.00': {
                                                slidesPerView: 3,
                                                spaceBetween: 10,
                                            },
                                            '@1.50': {
                                                slidesPerView: 3,
                                                spaceBetween: 10,
                                            },
                                        }}
                                        modules={[FreeMode, Pagination, Autoplay]}
                                        className="w-full h-full"
                                    >
                                        {
                                            details?.filterWidgetContent?.list.map((image, index) => (
                                                <SwiperSlide key={index}>
                                                    <div className=' flex flex-col  justify-center'>
                                                        <div className='flex  items-center'>
                                                            <img src={image.imageUrl} alt="" className='h-[195px] w-[294px] rounded-xl' />
                                                        </div>
                                                        <p className=' py-[10px] font-medium text-[.8125rem] text-color-9'>{image.standOutFeaturesWithoutTag}</p>
                    
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                    
                                </div>
                    
                    
                            </div>
                  );
                }
              )}
            </div>
            <p className={` cursor-pointer flex gap-1 text-[#0085FF] font-medium items-center
                ${breakpoint>1250 && 'text-[.875rem]'}
                ${breakpoint<=1250 && 'text-[.75rem]'}
              `}>
              View All Specs and Features <Rightarrow />
            </p>
          </div>
          <div className={` h-[250px] ${breakpoint<=1250 ?'w-[100%]':'w-[23%]'} `}>
            <CalculateEmi />
          </div>
        </div>

        {/* Updates */}
        <div className={`mt-[20px] drop-shadow-[0px_1px_2px_rgba(36,39,44,0.1)] border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 px-[20px] py-[20px] flex flex-col gap-[8px] ${breakpoint<=1250?"w-[100%]":"w-[76%]"}`}>
          <h1 className={`font-[500]
              ${breakpoint>1250 && 'text-[24px]'}
                ${breakpoint<=1250 && 'text-[20px]'}
            `}>
            {details?.overView?.name} latest updates
          </h1>
          <p className={` text-[#24272C] text-opacity-70
              ${breakpoint>1250 && 'text-[15px]'}
                ${breakpoint<=1250 && 'text-[13px]'}
            `}>
            What is the latest update on the {details?.overView?.name}?
          </p>
          <p
            className={` text-[#24272C] text-opacity-70 ${
              !(descriptionFullShow === "2") && "line-clamp-2"
            }
              ${breakpoint>1250 && 'text-[15px]'}
                ${breakpoint<=1250 && 'text-[13px]'}
            `}
          >
            {parse(details.pageTitle ? details.pageTitle?.description : "")}
          </p>
          <div
            className={`flex gap-[6px] w-max text-[#0085ff] font-[600] items-center cursor-pointer
                ${breakpoint>1250 && 'text-[14px]'}
                ${breakpoint<=1250 && 'text-[12px]'}
              `}
            onClick={() =>
              setdescriptionFullShow(descriptionFullShow === "2" ? "0" : "2")
            }
          >
            Read {!(descriptionFullShow === "2") ? "More" : "Less"}{" "}
            <span>
              {!(descriptionFullShow === "2") ? (
                <ReadMoreicon bg="#0085ff" w={16} h={16} />
              ) : (
                <ReadLessicon bg="#0085ff" w={16} h={16} />
              )}
            </span>
          </div>
        </div>

        {/* price */}

        <div className={`mt-[22px] flex gap-3 ${breakpoint<=1250&&'flex-col'}`}>
          <div className={`drop-shadow-[0px_1px_2px_rgba(36,39,44,0.1)] bg-[white]  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10  pt-[25px] flex flex-col gap-[8px] ${breakpoint<=1250?"w-[100%]":"w-[76%]"} `}>
            <div className="px-[20px] flex flex-col gap-[10px] ">
              <h1 className={`font-[500]
                  ${breakpoint>1250 && 'text-[24px]'}
                ${breakpoint<=1250 && 'text-[20px]'}
                `}>
                {details?.overView?.name} Price
              </h1>
              <p className={`text-[#24272C] text-opacity-70 
                  ${breakpoint>1250 && 'text-[15px]'}
                ${breakpoint<=1250 && 'text-[13px]'}
                `}>
                {details?.variantTableHighlight?.description}
              </p>

              <div className="relative flex  py-[10px] items-center justify-start gap-[36px] border-b-[1px] border-[rgba(36,39,44,0.15)] ">
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
            </div>

            <div className={`flex  bg-[white] 
              ${breakpoint<=1000 && 'flex-col gap-[1rem]'}
              `}>
              <div className={`w-[33%] px-[20px] flex gap-4 
                  ${breakpoint>1250 && 'text-[14px]'}
                ${breakpoint<=1250 && 'text-[12px]'}
                ${breakpoint>1000 && 'border-r-[#24272C] border-r-[1px]  border-opacity-40'}
                `}>
                <div className="flex items-center gap-2 ">
                  <input
                    type="radio"
                    checked={vehicleType === "All"}
                    onChange={(e) => setVehicleType("All")}
                  ></input>{" "}
                  <label htmlFor="id1">All</label>
                </div>
                <div className="flex items-center gap-2">
                  {" "}
                  <input
                    type="radio"
                    checked={vehicleType === "automatic"}
                    onChange={(e) => setVehicleType("automatic")}
                  ></input>
                  <label htmlFor="id2">Automatic</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={vehicleType === "manual"}
                    onChange={(e) => setVehicleType("manual")}
                  ></input>
                  <label htmlFor="id3">Manual</label>
                </div>
              </div>
              {/* <div className={`w-[100%] flex flex-wrap bg-[white] gap-3  font-[500] text-[#24272C] 
                  ${breakpoint>1250 && 'text-[14px]'}
                ${breakpoint<=1250 && 'text-[12px]'}
                ${breakpoint<=1000 ?'px-[12px]':'ml-[60px]'}
                `}>
                <div className="py-[8px] px-[12px] border-[#24272C] border rounded-md border-opacity-10">
                  <select>
                    <option value="Series" selected>
                      Series
                    </option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
                <div className="py-[8px] px-[12px] border-[#24272C] border rounded-md border-opacity-10">
                  <select>
                    <option value="Price" selected>
                      Price
                    </option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
                <div className="py-[8px] px-[12px] border-[#24272C] border rounded-md border-opacity-10">
                  <select>
                    <option value="Features" selected>
                      Features
                    </option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
                <div className="py-[8px] px-[12px] border-[#24272C] border-[1px] rounded-md border-opacity-10">
                  <select>
                    <option value="Colours" selected>
                      Colours
                    </option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div> */}
            </div>

            <div className={`bg-[#FAFAFA]   px-[15px] 
              text-[12px]
              ${breakpoint<=900 ?'flex justify-between items-center ':'grid grid-cols-10'}
              `}>
              <div className=" py-[12px]  leading-[18px] text-[#24272C] text-opacity-70 font-[400] col-span-3">
                Variant
              </div>
              <div className=" py-[12px]  leading-[18px] text-[#24272C] text-opacity-70 font-[400] col-span-2">
                Ex-Showroom Price
              </div>
             {breakpoint>900 &&
             
             <div className=" py-[12px]  leading-[18px] text-[#24272C] text-opacity-70 font-[400] grid grid-cols-subgrid col-span-5 ">
                <div className="flex justify-center col-span-2 col-start-4 pl-[25px] ">
                  Compare
                </div>
              </div>}
            </div>
            {details?.variantTable?.variantList?.map((variant) => {
              if (
                variant.subText
                  .toLowerCase()
                  .includes(
                    MileageVariantHeading !== "All"
                      ? MileageVariantHeading.toLowerCase()
                      : ""
                  ) &&
                variant.subText
                  .toLowerCase()
                  .includes(
                    vehicleType !== "All" ? vehicleType.toLowerCase() : ""
                  )
              ) {
                return (
                  <div
                    key={variant.centralId}
                    className={`py-[24px]   items-center border-b-[1px] border-b-[#24272C] border-opacity-10
                      ${breakpoint<=900 ?'px-[20px] flex flex-col justify-between':' pl-[20px]'}
                      `}
                  >
                   <div className={` 
                    ${breakpoint>900 ?"grid grid-cols-10 items-center":'flex justify-between items-center w-full'}
                    `}>
                        <div className="col-span-3 flex flex-col gap-[6px] w-[75%] ">
                            <p className={` text-[#24272C] font-[500]
                              ${breakpoint>1250 && 'text-[18px]'}
                              ${breakpoint<=1250 && 'text-[16px]'}
                              `}>
                              {variant.name}
                              <p className="text-[12px] text-[#24272C] text-opacity-70 ">
                                {variant.tag && variant.tag}
                              </p>
                            </p>

                            <div>
                              <p className="text-[12px] w-[70%] text-[#24272C] text-opacity-70 ">
                                {variant.subText}
                              </p>
                              <p className="text-[12px] text-[#24272C] ">
                                {variant.waitingPeriod}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-2 ">
                            <p className={`text-[16px] font-[500]
                              ${breakpoint>1250 && 'text-[16px]'}
                              ${breakpoint<=1250 && 'text-[14px]'}
                              `}>
                              {variant.price}
                              <sup>*</sup>
                            </p>
                            <p className={` text-[#0B66FA]  font-[500]
                              ${breakpoint>1250 && 'text-[15px]'}
                              ${breakpoint<=1250 && 'text-[13px]'}
                              `}>
                              Get On-Road Price
                            </p>
                          </div>
                        {breakpoint>900 &&
                          <div className="col-span-3">
                            <button className={` text-[#0B66FA] border-[1px] border-[#0B66FA] font-bold px-[30px] py-[12px] rounded-md
                              ${breakpoint>1250 && 'text-[14px]'}
                              ${breakpoint<=1250 && 'text-[12px]'}
                              `}>
                             <Link
                             onClick={()=>{
                              navigate(`/erp-deal/${variant.centralId}`)
                              window.scrollTo(0,0)
                            }}
                             >
                             Get Best Live Deal
                             </Link>
                            </button>
                          </div>}
                          {breakpoint>900 &&
                            <div className="col-span-2 flex items-center justify-center">
                            <input type="checkbox" className="h-[18px] w-[18px] " />
                          </div>}
                   </div>
                 {breakpoint<=900 &&
                   <div className="flex items-center justify-between w-full">
                            <button className={` text-[#0B66FA] font-bold py-[12px] rounded-md
                              ${breakpoint>1250 && 'text-[14px]'}
                              ${breakpoint<=1250 && 'text-[12px]'}
                              `}>
                              View Complete Offers
                            </button>
                            <div className="flex items-center justify-center gap-[.5rem]">
                            <input type="checkbox" className="h-[15px] w-[15px] " />
                            
                            <h1 className="text-color-9-70 text-[.875rem] ">Compare</h1>
                          </div>

                   </div>}
                  </div>
                );
              }
            })}

           
          </div>

          <div className={` flex flex-col gap-[16px] ${breakpoint<=1250?"w-[100%]":"w-[23%]"} `}>
            <div>
              <Brochure
                CarName={"Kia Seltos"}
                BrochureLink={"/brochure-kia-seltos"}
              />
            </div>

            <div>
              <CarPriceInIndia />
            </div>

            <div>
              <TrendingCars />
            </div>
          </div>
        </div>

        {/* Comparision Section Backend Data Source */}

        <div className={`flex gap-3 mt-[20px] items-center ${breakpoint<=1250&&'flex-col'}`}>
          <div className={`px-[20px] py-[25px] drop-shadow-[0px_1px_2px_rgba(36,39,44,0.1)] border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-4 ${breakpoint<=1250?"w-[100%]":"w-[76%]"}`}>
            <h1 className={` text-[#24272C] font-medium pb-[8px] capitalize
              ${breakpoint>1250 && 'text-[20px]'}
              ${breakpoint<=1250 && 'text-[18px]'}
              `}>
              {details?.overView?.name} comparison with similar cars
            </h1>
            <div className="border-b-[1px] border-b-[#24272C] border-opacity-40 pb-[8px] ">
              <CompareTable />
            </div>
            {/* <div className=" py-[8px] flex gap-3">
              <img src={videourlImg} alt="" className="w-[80px] h-[56px] " />
              <h1 className={`text-[16px] text-[#24272C] font-medium
                ${breakpoint>1250 && 'text-[16px]'}
                ${breakpoint<=1250 && 'text-[14px]'}
                `}>
                Hyundai Creta 2024 vs Kia Seltos Comparison Review in Hindi |
                AutoTrends |
              </h1>
            </div> */}
            {/* <div className="bg-[#] bg-opacity-10 flex gap-1 items-center rounded-xl py-[4px] px-[10px] ">
              <img
                src={arrow_icon_trends}
                alt=""
                className="w-[18px] h-[11px] "
              />
              <p className={`text-[#24272C] text-opacity-70
                ${breakpoint>1250 && 'text-[14px]'}
                ${breakpoint<=1250 && 'text-[12px]'}
                `}>
                Check out the car comparison video!
              </p>
            </div> */}
          </div>

          <div className={` ${breakpoint<=1250?"w-[100%]":"w-[23%]"}`}>
            <SimilarCars data={"data"} />
          </div>
        </div>

        <div className={`mt-[20px] px-[20px] py-[20px]  drop-shadow-[0px_1px_2px_rgba(36,39,44,0.1)] border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 ${breakpoint<=1250?"w-[100%]":"w-[76%]"}`}>
          <h1 className={` font-[500]
             ${breakpoint>1250 && 'text-[24px]'}
             ${breakpoint<=1250 && 'text-[20px]'}
            `}>
            Pros & Cons of {details?.overView?.name}
          </h1>
          <div className={`flex gap-[20px] mt-[14px] 
            ${breakpoint<=850 && 'flex-col'}
            `}>
            <div className="flex-1 px-[14px] py-[18px] rounded-[8px] text-[15px] bg-[#E4f5fe]  text-[#0085ff] text-opacity-70 flex flex-col gap-[13px] ">
              <p className={`flex gap-2 items-center text-opacity-100 text-[#24272C]  font-[500]
                 ${breakpoint>1250 && 'text-[18px]'}
                 ${breakpoint<=1250 && 'text-[16px]'}
                `}>
                <span>
                  {" "}
                <ThumbsUpIcon/>
                </span>
                Things We Like
              </p>
              {details?.expertReview?.items?.pros?.items.map((pros) => {
                return (
                  <li>
                    <span className={`text-[#24272C] 
                       ${breakpoint>1250 && 'text-[1rem]'}
                                     ${breakpoint<=1250 && 'text-[.875rem]'}
                      `} key={pros.id}>
                      {pros.pros}
                    </span>
                  </li>
                );
              })}

              <p className="text-[13px] text-[#24272C] underline">View More </p>
            </div>
            <div className="flex-1 px-[14px] py-[18px] rounded-[8px] text-[15px] bg-[#000]  bg-opacity-[3%] text-[#24272C] text-opacity-70 flex flex-col gap-[13px] ">
              <p className={`flex gap-2 items-center text-opacity-100 text-[#24272C]  font-[500]
                 ${breakpoint>1250 && 'text-[18px]'}
                 ${breakpoint<=1250 && 'text-[16px]'}
                `}>
                <span>
                  {" "}
                  <ThumbsDownIcon/>
                </span>
                Things We Don't Like
              </p>
              {details?.expertReview?.items?.cons?.items.map((cons) => {
                return (
                  <li>
                    <span className={`text-[#24272C] 
                       ${breakpoint>1250 && 'text-[1rem]'}
                       ${breakpoint<=1250 && 'text-[.875rem]'}
                      `} key={cons.id}>
                      {cons.cons}
                    </span>
                  </li>
                );
              })}
            </div>
          </div>
        </div>

        {/* User reviews */}
        <div className={`mt-[20px] ${breakpoint<=1250?"w-[100%]":"w-[76%]"}`}>
          <UserReviews />
        </div>

        {/* Mileage  */}
        <div className={`mt-[20px] px-[20px] py-[20px]  drop-shadow-[0px_1px_2px_rgba(36,39,44,0.1)] border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-4 ${breakpoint<=1250?"w-[100%]":"w-[76%]"}`}>
          <h1 className={` font-[500]
             ${breakpoint>1250 && 'text-[24px]'}
             ${breakpoint<=1250 && 'text-[20px]'}
            `}>
            {details?.overView?.name} Mileage
          </h1>
          <div>
            <p className={`text-[#24272C] text-opacity-70 font-[500]
               ${breakpoint>1250 && 'text-[14px]'}
               ${breakpoint<=1250 && 'text-[12px]'}
              `}>
              {details?.mileageTable?.description}
            </p>
          </div>

          <div className="w-full border-[1px] border-[rgba(36,39,44,0.1)] rounded-[16px]  pt-[20px] pb-[10px] px-[2rem]">
            <table className="table-auto w-full text-center">
              <thead className="bg-[#FAFAFA]">
                <tr className={`font-1 font-bold text-color-9-50
                   ${breakpoint>1250 && 'text-[.875rem]'}
                   ${breakpoint<=1250 && 'text-[.75rem]'}
                  `}>
                  {details?.mileageTable?.heading?.map((heading) => (
                    <th key={heading} className="py-2">
                      {heading.text}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white w-full">
                {details?.mileageTable?.childs?.map((mileage, index) => {
                  return (
                    <tr
                      key={index}
                      className={`w-full  font-1 text-color-9-70 
                        ${breakpoint>1250 && 'text-[.875rem]'}
                        ${breakpoint<=1250 && 'text-[.75rem]'}
                        ${
                        index < details?.mileageTable?.childs?.length - 1
                          ? "border-b-2 border-[rgba(36,39,44,0.1)]"
                          : ""
                      }`}
                    >
                      {mileage.map((mile, i) => {
                        return (
                          <td key={i} className={`px-[1rem] py-[.5rem]`}>
                            {mile.text}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className={` cursor-pointer flex gap-1 text-[#0085FF] font-[500] items-center
            ${breakpoint>1250 && 'text-[1rem]'}
            ${breakpoint<=1250 && 'text-[.875rem]'}
            `}>
            Check Kia Seltos Mileage Details
            <Rightarrow />
          </p>
        </div>

        {/* Colour Variations */}
        <div className={`mt-[20px] ${breakpoint<=1250?"w-[100%]":"w-[76%]"} `}>
          <ColorVariations />
        </div>

        {/* Kia Seltos IMages */}
        <div className={`mt-[20px]  px-[20px] py-[20px]  shadow-inner border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-4 ${breakpoint<=1250?"w-[100%]":"w-[76%]"}`}>
          <h1 className={` font-[500]
            ${breakpoint>1250 && 'text-[24px]'}
            ${breakpoint<=1250 && 'text-[20px]'}
            `}>
            {details?.overView?.name} Images
          </h1>
          <p className={`text-[#24272C] text-opacity-70 font-[500]
            ${breakpoint>1250 && 'text-[14px]'}
            ${breakpoint<=1250 && 'text-[12px]'}
            `}>
            {details?.gallerySection?.description}
          </p>
          <div className=" ">
            <Swiper
              // spaceBetween={25}
              loop={true}
              // freeMode={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              breakpoints={{
                0:{
                 slidesPerView:1.5,
                 spaceBetween:12
                },
                 750: {
                     slidesPerView: 2,
                     spaceBetween: 12,
                 },
                 1050: {
                     slidesPerView: 2.5,
                     spaceBetween: 12,
                 },
                 1345: {
                     slidesPerView: 3,
                     spaceBetween: 12,
                 },
             }}
            spaceBetween={10}
              modules={[FreeMode, Pagination, Autoplay]}
              className="w-full h-full"
            >
              {details?.gallerySection?.items[0]?.items.map((image, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="">
                      <div>
                        <img
                          src={image.image}
                          alt=""
                          className="h-[195px] w-[290px] rounded-xl"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <p className={`flex gap-1 cursor-pointer text-[#0085FF] font-[500] items-center
            ${breakpoint>1250 && 'text-[16px]'}
            ${breakpoint<=1250 && 'text-[14px]'}
            `}>
            View All Seltos Images
            <Rightarrow />
          </p>
        </div>

        {/* Virtual Experience */}
        <div className={` mt-[20px] ${breakpoint<=1250?"w-[100%]":"w-[76%]"}`}>
          <BrandCarVirtualExperience />
        </div>

        {/* Road Test */}
        <div className={`mt-[20px]  px-[20px] py-[20px]  drop-shadow-[0_1px_2px_rgba(36,39,44,0.1)] border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-3 ${breakpoint<=1250?"w-[100%]":"w-[76%]"}`}>
          <h1 className={` font-[500]
            ${breakpoint>1250 && 'text-[24px]'}
            ${breakpoint<=1250 && 'text-[20px]'}
            `}>{"Kia Seltos"} Road Test</h1>
          <div className="drop-shadow-[0_1px_2px_rgba(36,39,44,0.1)] border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 overflow-clip">
            <div className="flex gap-4">
              <div className="">
                <img
                  src={roadTestKiaSeltos}
                  alt="road test"
                  className="h-[195px] w-[305px] scale-y-105"
                />
              </div>
              <div className="py-[20px] flex flex-col gap-2">
                <p className={`text-[#24272C]  font-[500]
                  ${breakpoint>1250 && 'text-[15px]'}
                  ${breakpoint<=1250 && 'text-[13px]'}
                  `}>
                  Kia Seltos 6000 Km Update: Alibaug In The Summer
                </p>
                <p className={` text-[#24272C] text-opacity-70 font-[500]
                  ${breakpoint>1250 && 'text-[14px]'}
                  ${breakpoint<=1250 && 'text-[12px]'}
                  `}>
                  Our long-term Kia Seltos visits Alibaug on its first road
                  trip.
                </p>
                <p className="text-[12px] text-[#24272C] text-opacity-70 font-[500] flex gap-3">
                  By Nabeel{" "}
                  <span className="list-outside">
                    <li>Apr 30, 2024</li>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <p className=" flex gap-1 cursor-pointer text-[#0085FF] font-[500] items-center">
            View All Kia Seltos Road Test
            <Rightarrow />
          </p>
        </div>

        {/* More Images */}
        <div className={` mt-[20px] ${breakpoint<=1250?"w-[100%]":"w-[76%]"}`}>
          <MoreOptions />
        </div>

        {/* Ask Ques */}
        <div className={` mt-[20px] ${breakpoint<=1250?"w-[100%]":"w-[76%]"}`}>
          <AreYouConfused />
        </div>
        <div className={` ${breakpoint<=1250?"w-[100%]":"w-[76%]"} mt-[20px] relative flex flex-col gap-[8px] pt-[18px] pb-[26.5px]  px-[31.22px] rounded-xl border-[1px] border-[rgba(36,39,44,0.1)] drop-shadow-[0_1px_2px_rgba(36,39,44,0.1)]`}>
          <h3 className={` leading-[33.2px] font-[500]
             ${breakpoint>1250 && 'text-[23px]'}
                  ${breakpoint<=1250 && 'text-[20px]'}
            `}>
            {" "}
            {Model.name} Questions & Answers
          </h3>
          <Menu
            menuItems={["Latest Questions", "FAQs"]}
            item={item}
            setitem={setitem}
          />
          {item === "Latest Questions" && <Accordion qna={qna} />}
          {item === "FAQs" && <Accordion faq={faq} />}
        </div>
        <div className={` mt-[20px] ${breakpoint<=1250?"w-[100%]":"w-[76%]"}`}>
          <Helpful />
        </div>
      </div>
    </div>
  );
};

export default BrandCar;
