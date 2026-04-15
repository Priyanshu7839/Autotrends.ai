import {
  getCarPrice,
  SubmitcarQuotation,
  SubmitPan,
} from "../../Context/ApiCall";
import { useScreenResizeValue } from "../../ScreenSizeFunction";
import { AutotrendsLogo, DealershipImg } from "../../assets/Images";
import { HeartIconSvg } from "../../assets/Images/SVG";
import parse from "html-react-parser";
import React, { useEffect, useState, useRef } from "react";
import { IoArrowDownSharp, IoCloseCircle, IoStar } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Loader from "../../Components/Loader";
import { LocationSearch } from "../../components";
import confetti from "canvas-confetti";
import { LoaderCircle } from "lucide-react";
import { RiArrowDropDownLine, RiCloseFill } from "react-icons/ri";
import { Autoplay } from "swiper/modules";

const DealFromErpPage = () => {
  const breakpoint = useScreenResizeValue();
  const details = useSelector((state) => state.CarDetails);
  const userDetails = useSelector((state) => state.UserDetails);

  const navigate = useNavigate();

  const { id } = useParams();
  const selectedCar = details?.variantTable?.variantList?.find(
    (car) => car.centralId === Number(id)
  );

  const [loadPercent, setLoadPercent] = useState(0);
  const intervalRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [ErpDeal, SetErpDeal] = useState(null);

  useEffect(() => {
    const GetPrice = async () => {
      setLoading(true);
      setLoadPercent(0);
      intervalRef.current = setInterval(() => {
        setLoadPercent((prev) => {
          // Cap fake progress at 90% until data arrives
          if (prev < 90) return prev + 1;
          return prev;
        });
      }, 200);
      intervalRef.current = setInterval(() => {
        setLoadPercent((prev) => {
          if (prev < 97) return prev + 1;
          return prev;
        });
      }, 2000);
      try {
        const response = await getCarPrice(
          details.overView.id,
          selectedCar.centralId,
          details?.overView?.brandName,
          userDetails?.lat,
          userDetails?.lon
        );
        if (response?.data?.results) {
          SetErpDeal(response?.data?.results);

          clearInterval(intervalRef.current);
          setLoadPercent(100);
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch", err);
        clearInterval(intervalRef.current);
      }
    };

    GetPrice();
  }, [userDetails]);

  const [brandDealPopup, setBrandDealPopup] = useState(false);
  const [PanVerifyPopup, setPanVerifyPopup] = useState(false);
  const [popupData, setPopupData] = useState(null);
  const [dealLocked, setdealLocked] = useState(false);

  const showConfetti = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
        zIndex: 999999,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  const [selectedColor, setSelectedColor] = useState("Select");
  const [showcoloroptions, setshowcoloroptions] = useState(false);

  const [latlon, setlatlon] = useState({ lat: "", lon: "" });
  const [selectedLocation, setSelectedLocation] = useState("Select");
  const [showLocationSearch, setshowLocationSearch] = useState(true);

  const [Error, setError] = useState({});

  useEffect(() => {
    if (selectedLocation) {
      setshowLocationSearch(false);
    }
  }, [selectedLocation]);

  const [quotationData, setQuotationData] = useState({
    price: "",
    dealership: "",
    color_code: "",
  });

  const [panNumber, setpanNumber] = useState("");

  const validator = (quotationData, color, location) => {
    const error = {};

    if (quotationData.price === "") {
      error.price = true;
    }
    if (quotationData.dealership === "") {
      error.dealership = true;
    }
    if (color === "Select") {
      error.color = true;
    }
    if (location === "Select") {
      error.location = true;
    }

    setError(error);
    return error;
  };

  const validator2 = (pan) => {
    const error = {};
    if (pan === "") {
      error.pan = true;
    }
    setError(error);
    return error;
  };

  const handleFormSubmit = async () => {
    setError({});
    const error = validator(quotationData, selectedColor, selectedLocation);

    if (Object.keys(error).length === 0) {
      setPanVerifyPopup(true);
    }
  };
  const resetState = () => {
    setQuotationData({
      price: "",
      dealership: "",
    });
    setSelectedColor("Select");
    setSelectedLocation("Select");
    setpanNumber("");
  };

  const handlePanSubmit = async () => {
    setError({});
    const error = validator2(panNumber);
    if (Object.keys(error).length === 0) {
      const response = await SubmitPan(panNumber, userDetails.uid);
      if (response.data.msg === "pan Submitted") {
        const result = await SubmitcarQuotation(
          userDetails.uid,
          latlon.lat,
          latlon.lon,
          selectedLocation,
          quotationData.price,
          quotationData.dealership,
          selectedColor,
          details.overView.id,
          selectedCar.centralId,
          quotationData.color_code
        );

        if (result.data.msg === "Quotation Submitted") {
          setPanVerifyPopup(false);
          resetState();
        }
      }
    }
  };


  let sortedEntries = [];
  if(ErpDeal){
     sortedEntries = Object.entries(ErpDeal).sort((a, b) => {
    const priceA = a[1]?.data?.[0]?.autotrends_bid_price ?? Infinity;
    const priceB = b[1]?.data?.[0]?.autotrends_bid_price ?? Infinity;
    return priceA - priceB;
    
  });}
  let prices = []
  if(sortedEntries.length>0){
    prices = sortedEntries.map(
    ([, cars]) => cars?.data?.[0]?.autotrends_bid_price
  );
  }

  


  const lowestPrice = prices?.[0];
  let highestPrice = 0;
  let SecondHighestPrice = 0;

  if(prices.length===2 && prices.length ===3){
    highestPrice = prices[1]
  }

  if(prices.length>=4){
    highestPrice = prices[prices.length-1]
    SecondHighestPrice = prices[prices.length-2]
  }






  // ------------------------------------------------------------------------------>

  return (
    <div className=" w-full bg-[white]  h-max flex items-center justify-center relative">
      <div
        className={` ${
          breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]"
        }  h-max py-[2rem] flex flex-col gap-[1rem] relative`}
      >
        {showLocationSearch && (
          <LocationSearch
            className="absolute left-[50%] translate-x-[-50%] top-[10%]"
            selectedLocation={selectedLocation}
            setshowLocationSearch={setshowLocationSearch}
            setselectedLocation={setSelectedLocation}
            latlon={latlon}
            setlatlon={setlatlon}
          />
        )}
        <div
          className={`  flex items-start gap-[1rem] 
                ${breakpoint <= 1050 && "flex-col"}
                `}
        >
          <img
            src={details?.overView?.image}
            alt=""
            className={`h-[335px]  rounded-[12px] object-cover
                  ${breakpoint <= 1050 ? "w-full" : "w-[500px]"}
                  `}
          />

          <div className="flex flex-col items-start gap-[8px] w-full font-1 ">
            <h1
              className={`font-medium  text-color-9
                                              ${
                                                breakpoint > 1250 &&
                                                "text-[27px]"
                                              }
                                              ${
                                                breakpoint <= 1250 &&
                                                "text-[20px]"
                                              }
                                              `}
            >
              {selectedCar?.carVariantId}
            </h1>
            <p
              className={` text-color-9-70 line-clamp-2
                                              ${
                                                breakpoint > 1250 &&
                                                "text-[15px]"
                                              }
                                              ${
                                                breakpoint <= 1250 &&
                                                "text-[13px]"
                                              }
                                              ${
                                                breakpoint <= 700
                                                  ? "w-[100%]"
                                                  : "w-[70%]"
                                              }
                                              `}
            >
              {parse(details.schema ? details.schema[0].Description : "")}
            </p>
            <p
              className={` text-color-8 line-clamp-2
                                              ${
                                                breakpoint > 1250 &&
                                                "text-[15px]"
                                              }
                                              ${
                                                breakpoint <= 1250 &&
                                                "text-[13px]"
                                              }
                                              ${
                                                breakpoint <= 700
                                                  ? "w-[100%]"
                                                  : "w-[70%]"
                                              }
                                              `}
            >
              {selectedCar?.subText}
            </p>

            <h1 className="font-2">Enter Your Quotation</h1>
            <div
              className={`rounded-[12px] flex flex-col gap-[.5rem] p-[1rem]  border h-full
                                            ${breakpoint > 1050 && "w-[65%]"}
                                            ${
                                              breakpoint <= 1050 &&
                                              breakpoint > 650 &&
                                              "w-[70%]"
                                            }
                                            ${
                                              breakpoint <= 650 &&
                                              breakpoint > 550 &&
                                              "w-[80%]"
                                            }
                                            ${breakpoint <= 550 && "w-[100%]"}
                                            `}
            >
              <div className="flex gap-[.25rem]">
                <div className="flex flex-col gap-[.25rem] w-[49%]">
                  <label htmlFor="" className="text-[.875rem]">
                    Your Price
                  </label>
                  <input
                    type="text"
                    className={`py-[.5rem] px-[1rem] font-2-book border-[1px] rounded-[10px]  outline-none ${
                      Error.price && "border-[#ff0303]"
                    }`}
                    placeholder="e.g.1400000"
                    value={quotationData.price}
                    onChange={(e) => {
                      setQuotationData({
                        ...quotationData,
                        price: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-[.25rem] w-[49%]">
                  <label htmlFor="" className="text-[.875rem]">
                    Deal City
                  </label>

                  <div
                    onClick={() => {
                      setshowLocationSearch(true);
                    }}
                    className={`py-[.5rem] px-[1rem] font-2-book border-[1px] rounded-[10px] cursor-pointer
                  ${Error.location && "border-[#ff0303]"}
                  `}
                  >
                    {selectedLocation}
                  </div>
                </div>
              </div>
              <div className="flex items-end gap-[.25rem]">
                <div className="flex flex-col gap-[.25rem] flex-[1.5]">
                  <label htmlFor="" className="text-[.875rem]">
                    Where you are Getting it
                  </label>
                  <input
                    type="text"
                    placeholder="e.g.Jai Pitambara Dealership"
                    className={`w-full py-[.5rem] px-[1rem] border-[1px] rounded-[10px] font-2-book text-[.875rem] outline-none ${
                      Error.dealership && "border-[#ff0303]"
                    }`}
                    value={quotationData.dealership}
                    onChange={(e) => {
                      setQuotationData({
                        ...quotationData,
                        dealership: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-[.25rem] flex-1">
                  <label htmlFor="" className="text-[.875rem]">
                    Color
                  </label>
                  <div
                    className={`px-[1rem] py-[.5rem] border-[1px] rounded-[10px] font-2-book text-[.875rem] flex items-center justify-between relative cursor-pointer ${
                      Error.color && "border-[#ff0303]"
                    }`}
                    onClick={() => {
                      setshowcoloroptions(!showcoloroptions);
                    }}
                  >
                    {selectedColor.split(" ")[0]}
                    <RiArrowDropDownLine className="text-[1.25rem]" />

                    <div
                      className={`w-fit absolute left-0 top-[100%] border-[1px] rounded-[10px] font-2-book text-[.875rem] h-[200px] bg-[#fff] z-[999] overflow-y-scroll flex-col 
                  ${showcoloroptions ? "flex" : "hidden"}
                  `}
                      style={{ scrollbarWidth: "none" }}
                    >
                      {details?.galleryColorSection?.items.map((color, i) => {
                        return (
                          <h1
                            key={i}
                            className="px-[1rem] py-[.5rem] cursor-pointer hover:bg-[rgba(0,0,0,0.1)] border-b-[1px]"
                            onClick={() => {
                              setSelectedColor(color.name);
                              setQuotationData({
                                ...quotationData,
                                color_code: color.hexCode,
                              });
                            }}
                          >
                            {color.name}
                          </h1>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    handleFormSubmit();
                  }}
                  className="py-[.5rem] px-[1rem] border-[1px] rounded-[10px] font-2-book text-[.875rem] outline-none bg-[#0b85ff] border-[#0b85ff] text-color-1"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------------------------------------------------------- */}
        {/* -------------------------Pan verification Popup------------------------------------------------------- */}
        <div
          className={`w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 z-[9999]  items-center justify-center
                          ${PanVerifyPopup ? "flex" : "hidden"}
                `}
        >
          <div className="w-[300px]  bg-[#fff] p-[1rem] rounded-[12px] flex flex-col gap-[1rem]">
            <div className="flex items-center justify-between">
              <h1 className="font-2 text-[1rem]">Please verify Your Pan</h1>
              <IoCloseCircle
                className="cursor-pointer"
                onClick={() => {
                  setPanVerifyPopup(false);
                }}
              />
            </div>

            <div>
              <label htmlFor="" className="text-[.875rem] font-2">
                Pan Number
              </label>
              <input
                type="text"
                className={`w-full py-[.5rem] px-[1rem] border-[1px] rounded-[10px] font-2-book text-[.875rem] outline-none
                  ${Error.pan && "border-[#ff0303]"}
                  `}
                onChange={(e) => {
                  setpanNumber(e.target.value);
                }}
                value={panNumber}
              />
            </div>

            <button
              className="w-full py-[.5rem] text-color-1 bg-[#0085ff] rounded-[10px] font-2 outline-none"
              onClick={() => {
                handlePanSubmit();
              }}
            >
              Verify
            </button>
          </div>
        </div>
        {/* -------------------------Pan verification Popup------------------------------------------------------- */}

        <div
          className={`
      flex gap-[20px]   p-[20px] border-[1px] border-[#23242c1a]   rounded-[16px] flex-col font-1
    `}
        >
          <div className="flex flex-col gap-[.25rem]">
            {/* <h1 className='font-2 text-[2.5rem]'>Deals From Autotrends</h1> */}
            {!loading && ErpDeal && (
              <p className="font-2-book">
                Get Best Price with dealer onboarded on autotrends and get best
                deal for you
              </p>
            )}
          </div>

          {loading && (
            <div className="w-full flex items-center justify-center">
              <div className="w-[400px] h-[200px] rounded-[10px] bg-[white] p-[1rem] flex flex-col items-start justify-between">
                <h1 className="flex items-center justify-start gap-[.5rem] text-[1.25rem] font-medium font-2 mb-[10px]">
                  <LoaderCircle />
                  Fetching Deals...
                </h1>

                <div className="flex flex-col  w-full">
                  <div className="w-full flex flex-col items-end justify-center">
                    <div className="w-full h-[10px] rounded-full bg-[#cfcfd766]">
                      <div
                        className="h-full rounded-full bg-[#0b85ff] transition-all duration-100"
                        style={{ width: `${loadPercent}%` }}
                      ></div>
                    </div>
                    <h1 className="font-2-book text-color-9-70">
                      {loadPercent}%
                    </h1>
                  </div>

                  <h2 className="font-2-book text-[.875rem] text-color-9-70">
                    Getting Best Autotrends Deals for you...
                  </h2>
                </div>
                <div className="w-full flex items-center justify-end">
                  <button
                    className="px-[1rem] py-[.25rem] border-[1px] border-[#cfcfd7] text-[#0b85ff] rounded-[8px]"
                    onClick={() => {
                      setLoadPercent(0);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {!loading && ErpDeal && (
            <div className="w-[100%]  ">
              <Swiper
                modules={[Autoplay]}
                autoplay={true}
                allowTouchMove={true}
                spaceBetween={0}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  500: {
                    slidesPerView: 1,
                  },
                  700: {
                    slidesPerView: 1.5,
                  },
                  850: {
                    slidesPerView: 1.8,
                  },
                  950: {
                    slidesPerView: 2,
                  },
                  1050: {
                    slidesPerView: 2.2,
                  },
                  1150: {
                    slidesPerView: 2.5,
                  },
                  1300: {
                    slidesPerView: 2.8,
                  },

                  1400: {
                    slidesPerView: 3,
                  },
                }}
              >
                {ErpDeal &&
                  Object.entries(ErpDeal)
                    .sort((a, b) => {
                      const priceA =
                        a[1]?.data?.[0]?.autotrendsbidprice ?? Infinity;
                      const priceB =
                        b[1]?.data?.[0]?.autotrendsbidprice ?? Infinity;
                      return priceA - priceB;
                    })
                    .map(([dealershipId, cars]) => {
                      return (
                        <SwiperSlide>
                          <div
                            className={` rounded-[12px]  border-[1px]  border-[#000000] border-opacity-[12%] 
                    ${breakpoint <= 500 ? "w-[270px]" : "w-[340px]"}
                    `}
                          >
                            <div className="p-[1rem] w-full flex flex-col items-start gap-[.5rem] ">
                              <p
                                className={`font-2 text-[#0b66fa] capitalize whitespace-nowrap
                      ${breakpoint <= 500 ? "text-[14px]" : "text-[18px]"}
                      `}
                              >
                                {cars.name}
                              </p>
                              <div className="flex w-full  items-center justify-between ">
                                {/* <img src={DealershipImg} alt="" /> */}
                                <div>
                                  {/* <h1 className="font-2 text-[14px] text-[#000000] text-opacity-[62%]">
                          {details?.overView?.brandName}
                        </h1> */}
                                  <p className="font-2 text-[16px] text-[#000000] text-opacity-[87%]">
                                    {details?.overView?.name}
                                  </p>
                                </div>
                              </div>

                              <div>
                                <p className="font-2-book text-[#000000] text-opacity-[87%] text-[12px]">
                                  Ex-Showroom Price
                                </p>
                                <h1 className="font-2 text-[1.25rem] text-[#000000] text-opacity-[87%]">
                                  Rs.{selectedCar?.exShowRoomPrice}
                                </h1>
                              </div>

                              <div className={`  
                              ${cars.data[0]?.autotrends_bid_price === lowestPrice && 'text-[#02844e]'}
                              ${cars.data[0]?.autotrends_bid_price === highestPrice && 'text-[red]'}
                              ${cars.data[0]?.autotrends_bid_price === SecondHighestPrice && 'text-[red]'}
                              ${(cars.data[0]?.autotrends_bid_price !== SecondHighestPrice && cars.data[0]?.autotrends_bid_price !== highestPrice && cars.data[0]?.autotrends_bid_price !== lowestPrice ) && 'text-[#FBC02D]'}
                              
                              `}>
                                <p className="font-2-book text-[12px]">
                                  Autotrends Dealer Discounted onRoad Price
                                </p>

                                <h1 className="font-2 text-[1.25rem]">
                                  Rs.{cars.data[0]?.autotrends_bid_price}
                                </h1>
                              </div>

                              <div className="w-full flex flex-col items-center justify-center gap-[.5rem]">
                                <button
                                  onClick={() => {
                                    setBrandDealPopup(true);
                                    setPopupData(cars.data[0]);
                                  }}
                                  className="px-[1rem] py-[.5rem] w-full bg-[#0b66fa] text-[#ffffff] font-2 text-[16px] rounded-[5px]"
                                >
                                  Lock Deal Now !
                                </button>
                                <p className="font-1 font-medium text-[14px] text-[#02844e]">
                                  {cars.data[0]?.delivery_date}
                                </p>
                                <p className="font-1 text-[12px] text-[#a4a4a4]">
                                  Terms & Condition Apply
                                </p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
              </Swiper>

              {/* ---------------------------------------------LockDeal Popup------------------------------------------------------ */}
              <div
                className={`fixed top-[0vh] left-0 h-[100vh] w-[100vw] bg-[rgba(0,0,0,.8)] z-[9999]  items-center justify-center  ${
                  brandDealPopup ? "flex" : "hidden"
                }`}
              >
                <div
                  className={` w-[375px] bg-[#fff] rounded-[15px] overflow-hidden ${
                    dealLocked && "hidden"
                  }`}
                >
                  <img src={details?.overView?.image} alt="" />
                  <div className="p-[15px] flex flex-col items-start gap-[1rem] ">
                    <h1 className="font-2 flex items-center justify-between w-full">
                      {details?.overView?.name}{" "}
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          setBrandDealPopup(false);
                        }}
                      >
                        <RiCloseFill />
                      </div>
                    </h1>

                    <div className="w-full flex flex-col gap-[.5rem] font-2-book ">
                      <div className="flex items-center justify-between">
                        <h2>Ex-showroom Price </h2>
                        <h2>Rs.{selectedCar?.exShowRoomPrice}</h2>
                      </div>
                      {popupData && (
                        <>
                          {popupData.accessories_charges &&
                            popupData.accessories_charges !== "0.00" && (
                              <div className="flex items-center justify-between">
                                <h2>Accessories Charges</h2>
                                <h2>Rs.{popupData.accessories_charges}</h2>
                              </div>
                            )}
                          {popupData?.extended_warranty_charges &&
                            popupData?.extended_warranty_charges !== "0.00" && (
                              <div className="flex items-center justify-between">
                                <h2>Extended Warranty Charges </h2>
                                <h2>
                                  Rs.{popupData?.extended_warranty_charges}
                                </h2>
                              </div>
                            )}
                          {popupData.fasttag_charges &&
                            popupData.fasttag_charges !== "0.00" && (
                              <div className="flex items-center justify-between">
                                <h2>Fasttag Charges </h2>
                                <h2>Rs.{popupData.fasttag_charges}</h2>
                              </div>
                            )}
                          {popupData.insurance_charges &&
                            popupData.insurance_charges !== "0.00" && (
                              <div className="flex items-center justify-between">
                                <h2>Insurance Price </h2>
                                <h2>Rs.{popupData.insurance_charges}</h2>
                              </div>
                            )}
                          {popupData.rto_price &&
                            popupData.rto_price !== "0.00" && (
                              <div className="flex items-center justify-between">
                                <h2>RTO Price </h2>
                                <h2>Rs.{popupData.rto_price}</h2>
                              </div>
                            )}
                          {popupData.tcs_charges &&
                            popupData.tcs_charges !== "0.00" && (
                              <div className="flex items-center justify-between">
                                <h2>TCS Charges </h2>
                                <h2>Rs.{popupData.tcs_charges}</h2>
                              </div>
                            )}
                          {popupData.miscellaneous_charges &&
                            popupData.miscellaneous_charges !== "0.00" && (
                              <div className="flex items-center justify-between">
                                <h2>Miscellaneous Charges </h2>
                                <h2>Rs.{popupData.miscellaneous_charges}</h2>
                              </div>
                            )}
                        </>
                      )}

                      {popupData && (
                        <div className="flex items-center justify-between py-[.5rem] border-dashed border-y-[1px] ">
                          <h2>On Road Price </h2>

                          <h2>Rs. {popupData.autotrends_bid_price}</h2>
                        </div>
                      )}

                      <button
                        onClick={() => {
                          showConfetti();
                          setdealLocked(true);
                        }}
                        className="w-full bg-[#0b85ff] py-[.5rem] text-color-1 rounded-[10px]"
                      >
                        Lock the Deal
                      </button>
                    </div>
                  </div>
                </div>
                {/* ----------------------------------------------------------------------------------------------------------------- */}

                <div
                  className={`w-[400px] h-[250px] bg-[white] rounded-[12px] p-[1rem]  flex-col items-start justify-between ${
                    dealLocked ? "flex" : "hidden"
                  }`}
                >
                  <h1 className="text-[1.25rem] font-medium">
                    Congratulations!
                  </h1>
                  <p className="text-[.875rem] font-medium">
                    Your deal has been successfully locked. Our customer success
                    team will reach out to you shortly to guide you through the
                    next steps.
                  </p>
                  <p className="font-medium text-[.875rem] text-[#0b85ff]">
                    Thank you for choosing us — we're excited to serve you!
                  </p>

                  <button
                    className="w-full px-[1rem] py-[.5rem] rounded-[8px] bg-[#0b85ff] text-center text-[white] text-[.9rem] font-medium"
                    onClick={() => {
                      setBrandDealPopup(false);
                      setdealLocked(false);
                      navigate("/");
                    }}
                  >
                    Done
                  </button>
                </div>
                {/* ----------------------------------------------------------------------------------------------------------------- */}
              </div>
              {/* ---------------------------------------------LockDeal Popup------------------------------------------------------ */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DealFromErpPage;
