import { useScreenResizeValue } from "../ScreenSizeFunction";
import { setformOpen } from "../Store/GlobalSigninSlice";
import React, { useState } from "react";
import { RiCloseCircleFill, RiArrowDropDownLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { IoChevronForwardSharp,IoChevronBackSharp } from "react-icons/io5";

const AskAutotrendsAi = ({ className }) => {
  const breakpoint = useScreenResizeValue();
  const [pageNumber, setPageNumber] = useState("1");
  const dispatch = useDispatch();

  const [optionsPopup, setoptionsPopup] = useState(null);

  const OccupationArray = ["Salaried", "Self-Employed"];
  const [OccupationOptions, setOccupationOptions] = useState(
    OccupationArray[0]
  );

  const GenderArray = ["Male", "Female", "Others"];
  const [GenderOptions, setGenderOptions] = useState(GenderArray[0]);

  const BuyerTypeArray = [
    "First Time Buyer",
    "Exchange Buyer",
    "Addtional Car Buyer",
  ];
  const [BuyerTypeOptions, setBuyerTypeOptions] = useState(BuyerTypeArray[0]);

  const FamilyCountArray = ["1-2", "3-5", "5-7", "7+"];
  const [FamilyCountOptions, setFamilyCountOptions] = useState(
    FamilyCountArray[0]
  );

  const AnnualHouselholdIncomeArray = [
    "2.5-5Lacs",
    "5-10Lacs",
    "10+Lacs",
    "15+Lacs",
    "20+Lacs",
  ];
  const [AnnualHouselholdIncomeOptions, setAnnualHouselholdIncomeOptions] =
    useState(AnnualHouselholdIncomeArray[0]);

  const TopmostCarPriorityArray = [
    "Features",
    "Performance",
    "Looks",
    "Value For Money",
  ];
  const [TopmostCarPriorityOptions, setTopmostCarPriorityOptions] = useState(
    TopmostCarPriorityArray[0]
  );

  const CarFinalizeDateArray = [
    "<= 15Days(Hot)",
    "16-30Days (Warm)",
    "30+Days (Cold)",
  ];
  const [CarFinalizeDateOptions, setCarFinalizeDateOptions] = useState(
    CarFinalizeDateArray[0]
  );

  const ModeOfPurchaseArray = [
    "Cash",
    "Self Arranged Finance",
    "Company Finance",
  ];
  const [ModeOfPurchaseOptions, setModeOfPurchaseOptions] = useState(
    ModeOfPurchaseArray[0]
  );

  const KMDriveArray = ["500-1000", "1000-1500", "1500-2000", "2000+"];
  const [KMDriveOptions, setKMDriveOptions] = useState(KMDriveArray[0]);

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={` bg-[#fff]   flex relative
        ${
          breakpoint <= 750
            ? "h-full w-full"
            : "h-[520px] w-[720px] rounded-[12px]"
        }
        `}
      >
        {pageNumber === "1" && (
          <div className="w-full h-full flex flex-col gap-[1rem] items-center justify-center font-1 relative">
            <div
              className="absolute top-[20px] right-[20px] cursor-pointer "
              onClick={() => {
                dispatch(setformOpen(false));
              }}
            >
              <RiCloseCircleFill className="text-[1.25rem]" />
            </div>

            <h1 className="text-center text-[1.5rem] font-medium capitalize">
              Get Started With Autotrends AI
              <br /> to get a car that suits your requirements
            </h1>
            <button
              className="py-[.5rem] px-[1rem] bg-[#0b85ff] rounded-[10px] text-color-1 font-medium"
              onClick={() => {
                setPageNumber("2");
              }}
            >
              Get Started
            </button>
          </div>
        )}

        {pageNumber === "2" && (
          <div className="py-[1rem] px-[2rem] font-1 flex flex-col gap-[1rem] w-full h-full">
            <h1 className="font-medium">Lets Know About You</h1>
            <div className="flex flex-col gap-[.25rem] ">
              <label
                htmlFor=""
                className={` ${
                  breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                }`}
              >
                Email
              </label>
              <input
                type="text"
                className={`py-[.5rem] px-[1rem] font-2-book border-[1px] rounded-[10px]  outline-none  ${
                  breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                }`}
                placeholder="email@example.com"
              />
            </div>
            <div
              className={`flex gap-[.25rem] 
              ${breakpoint <= 600 && "flex-col"}
              `}
            >
              <div className="flex gap-[.25rem]  flex-[1.5]">
                <div className="flex flex-col gap-[.25rem] w-full flex-1">
                  <label
                    htmlFor=""
                    className={` ${
                      breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                    }`}
                  >
                    Occupation
                  </label>

                  <div
                    className="py-[.5rem] px-[1rem] border-[1px] rounded-[10px] text-color-9 font-2-book relative cursor-pointer flex-1  z-[999]"
                    onClick={() => {
                      if (optionsPopup === "occupation") {
                        setoptionsPopup(null);
                      } else {
                        setoptionsPopup("occupation");
                      }
                    }}
                  >
                    <div
                      className={`flex items-center justify-between  ${
                        breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                      }`}
                    >
                      {OccupationOptions}
                      <RiArrowDropDownLine className="text-[1.25rem]" />
                    </div>
                    {optionsPopup === "occupation" && (
                      <div className="w-full absolute  left-0 top-[100%]   border-[1px] rounded-[10px] text-color-9 bg-[#fff] z-[999]">
                        {OccupationArray.map((item, i) => {
                          return (
                            <h1
                              key={i}
                              onClick={(event) => {
                                event.stopPropagation();
                                setOccupationOptions(item);
                                setoptionsPopup(null);
                              }}
                              className={`py-[.5rem] cursor-pointer px-[1rem] bg-white
                                  ${
                                    i !== OccupationArray.length - 1 &&
                                    "border-b-[1px]"
                                  }
                                  ${breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"}
                                  `}
                            >
                              {item}
                            </h1>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-[.25rem] w-full flex-1">
                  <label
                    htmlFor=""
                    className={` ${
                      breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                    }`}
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    className={`py-[.5rem] px-[1rem] font-2-book border-[1px] rounded-[10px]  outline-none w-full  ${
                      breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                    }`}
                    placeholder="21"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[.25rem]  flex-1">
                <label
                  htmlFor=""
                  className={` ${
                    breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                  }`}
                >
                  Gender
                </label>
                <div
                  className="py-[.5rem] px-[1rem] border-[1px] rounded-[10px] text-color-9 font-2-book relative cursor-pointer "
                  onClick={() => {
                    if (optionsPopup === "gender") {
                      setoptionsPopup(null);
                    } else {
                      setoptionsPopup("gender");
                    }
                  }}
                >
                  <div
                    className={`flex items-center justify-between  ${
                      breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                    }`}
                  >
                    {GenderOptions}
                    <RiArrowDropDownLine className="text-[1.25rem]" />
                  </div>
                  {optionsPopup === "gender" && (
                    <div className="w-full absolute  left-0 top-[100%]   border-[1px] rounded-[10px] text-color-9 bg-[#fff] z-[999]">
                      {GenderArray.map((item, i) => {
                        return (
                          <h1
                            key={i}
                            onClick={(event) => {
                              event.stopPropagation();
                              setGenderOptions(item);
                              setoptionsPopup(null);
                            }}
                            className={`py-[.5rem] cursor-pointer px-[1rem] bg-white
                                  ${
                                    i !== GenderArray.length - 1 &&
                                    "border-b-[1px]"
                                  }
                                  ${breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"}
                                  `}
                          >
                            {item}
                          </h1>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[.25rem] ">
              <label
                htmlFor=""
                className={` ${
                  breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                }`}
              >
                Address
              </label>
              <input
                type="text"
                className={`py-[.5rem] px-[1rem] font-2-book border-[1px] rounded-[10px]  outline-none  ${
                  breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                }`}
                placeholder="Veerangana Nagar"
              />
            </div>
            <div
              className={`flex gap-[.25rem] w-full 
              ${breakpoint <= 700 && "flex-col"}
              `}
            >
              <div className="flex gap-[.25rem] w-full ">
                <div className="flex flex-col gap-[.25rem] w-full">
                  <label
                    htmlFor=""
                    className={` ${
                      breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                    }`}
                  >
                    State
                  </label>
                  <input
                    type="text"
                    className={`py-[.5rem] px-[1rem] font-2-book border-[1px] rounded-[10px]  outline-none  ${
                      breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                    } w-full`}
                    placeholder="U.P."
                  />
                </div>
                <div className="flex flex-col gap-[.25rem] w-full">
                  <label
                    htmlFor=""
                    className={` ${
                      breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                    }`}
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className={`py-[.5rem] px-[1rem] font-2-book border-[1px] rounded-[10px]  outline-none  ${
                      breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                    } w-full`}
                    placeholder="Jhansi"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[.25rem] w-full">
                <label
                  htmlFor=""
                  className={` ${
                    breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                  }`}
                >
                  Pin Code
                </label>
                <input
                  type="text"
                  className={`py-[.5rem] px-[1rem] font-2-book border-[1px] rounded-[10px]  outline-none  ${
                    breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                  }`}
                  placeholder="284128"
                />
              </div>
            </div>
            <div
              className={`flex 
            ${breakpoint <= 600 ? "flex-col gap-[1rem]":"gap-[.25rem]"}
              `}
            >
              <div className="flex gap-[.25rem] flex-[1.5]">
                <div className="flex flex-col gap-[.25rem] flex-1">
                  <label
                    htmlFor=""
                    className={`
                  ${breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"}
                  `}
                  >
                    Type Of Buyer
                  </label>
                  <div
                    className="py-[.5rem] px-[1rem] border-[1px] rounded-[10px] text-color-9 font-2-book relative cursor-pointer z-[999]"
                    onClick={() => {
                      if (optionsPopup === "buyertype") {
                        setoptionsPopup(null);
                      } else {
                        setoptionsPopup("buyertype");
                      }
                    }}
                  >
                    <div
                      className={`flex items-center justify-between ${
                        breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                      }`}
                    >
                      {BuyerTypeOptions}
                      <RiArrowDropDownLine className="text-[1.25rem]" />
                    </div>
                    {optionsPopup === "buyertype" && (
                      <div className="w-full absolute  left-0 top-[100%]   border-[1px] rounded-[10px] text-color-9 bg-[#fff]">
                        {BuyerTypeArray.map((item, i) => {
                          return (
                            <h1
                              key={i}
                              onClick={(event) => {
                                event.stopPropagation();
                                setBuyerTypeOptions(item);
                                setoptionsPopup(null);
                              }}
                              className={`py-[.5rem] cursor-pointer px-[1rem] bg-white
                                ${breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"}
                                  ${
                                    i !== BuyerTypeArray.length - 1 &&
                                    "border-b-[1px]"
                                  }
                                  ${breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"}
                                  `}
                            >
                              {item}
                            </h1>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-[.25rem] flex-1">
                  <label
                    htmlFor=""
                    className={` ${
                      breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                    }`}
                  >
                    Total Family Members
                  </label>
                  <div
                    className="py-[.5rem] px-[1rem] border-[1px] rounded-[10px] text-color-9 font-2-book relative cursor-pointer flex-1 z-[999]"
                    onClick={() => {
                      if (optionsPopup === "family") {
                        setoptionsPopup(null);
                      } else {
                        setoptionsPopup("family");
                      }
                    }}
                  >
                    <div
                      className={`flex items-center justify-between  ${
                        breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                      }`}
                    >
                      {FamilyCountOptions}
                      <RiArrowDropDownLine className="text-[1.25rem]" />
                    </div>
                    {optionsPopup === "family" && (
                      <div className="w-full absolute  left-0 top-[100%]   border-[1px] rounded-[10px] text-color-9 bg-[#fff]">
                        {FamilyCountArray.map((item, i) => {
                          return (
                            <h1
                              key={i}
                              onClick={(event) => {
                                event.stopPropagation();
                                setFamilyCountOptions(item);
                                setoptionsPopup(null);
                              }}
                              className={`py-[.5rem] cursor-pointer px-[1rem] bg-white
                                  ${
                                    i !== FamilyCountArray.length - 1 &&
                                    "border-b-[1px]"
                                  }
                                  ${breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"}
                                  `}
                            >
                              {item}
                            </h1>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[.25rem] ">
                <label
                  htmlFor=""
                  className={` ${
                    breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                  }`}
                >
                  Annual Household Income
                </label>
                <div
                  className="py-[.5rem] px-[1rem] border-[1px] rounded-[10px] text-color-9 font-2-book relative cursor-pointer flex-1"
                  onClick={() => {
                    if (optionsPopup === "annualincome") {
                      setoptionsPopup(null);
                    } else {
                      setoptionsPopup("annualincome");
                    }
                  }}
                >
                  <div
                    className={`flex items-center justify-between  ${
                      breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                    }`}
                  >
                    {AnnualHouselholdIncomeOptions}
                    <RiArrowDropDownLine className="text-[1.25rem]" />
                  </div>
                 
                    <div className={`w-full absolute transition-all duration-100  left-0 top-[100%]    text-color-9 bg-[#fff] z-[999] overflow-y-scroll ${optionsPopup==="annualincome"?'h-[130px] border-[1px] rounded-[10px]':'h-[0px]'}`}>
                      {AnnualHouselholdIncomeArray.map((item, i) => {
                        return (
                          <h1
                            key={i}
                            onClick={(event) => {
                              event.stopPropagation();
                              setAnnualHouselholdIncomeOptions(item);
                              setoptionsPopup(null);
                            }}
                            className={`py-[.5rem] cursor-pointer px-[1rem] bg-white
                                  ${
                                    i !==
                                      AnnualHouselholdIncomeArray.length - 1 &&
                                    "border-b-[1px]"
                                  }
                                  ${breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"}
                                  `}
                          >
                            {item}
                          </h1>
                        );
                      })}
                    </div>
                 
                </div>
              </div>
            </div>
            <div className="flex gap-[.25rem] items-center justify-between text-color-1 font-medium">
              <button
                className="flex items-center justify-center gap-[1rem] w-full py-[.5rem] px-[1rem] bg-[#0b85ff] rounded-[10px]"
                onClick={() => {
                  setPageNumber("1");
                }}
              >
                <IoChevronBackSharp/>
                Previous
             
              </button>
              <button
                className="w-full py-[.5rem] px-[1rem] bg-[#0b85ff] rounded-[10px] flex items-center justify-center gap-[1rem]"
                onClick={() => {
                  setPageNumber("3");
                }}
              >
                Next
                   <IoChevronForwardSharp/>
              </button>
            </div>
          </div>
        )}
        {pageNumber === "3" && (
          <div className="p-[1rem] font-1 flex flex-col gap-[1rem] w-full">
            <h1 className="font-medium">
              Lets Get to Know About your type in cars
            </h1>
            <div className="flex flex-col gap-[.25rem] ">
              <label
                htmlFor=""
                className={` ${
                  breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                }`}
              >
                Your Topmost priority in a car
              </label>
              <div
                className="py-[.5rem] px-[1rem] border-[1px] rounded-[10px] text-color-9 font-2-book relative cursor-pointer flex-1 "
                onClick={() => {
                  if (optionsPopup === "toppriority") {
                    setoptionsPopup(null);
                  } else {
                    setoptionsPopup("toppriority");
                  }
                }}
              >
                <div
                  className={`flex items-center justify-between  ${
                    breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                  }`}
                >
                  {TopmostCarPriorityOptions}
                  <RiArrowDropDownLine className="text-[1.25rem]" />
                </div>
                {optionsPopup === "toppriority" && (
                  <div className="w-full absolute  left-0 top-[100%]   border-[1px] rounded-[10px] text-color-9 bg-[#fff] z-[999]">
                    {TopmostCarPriorityArray.map((item, i) => {
                      return (
                        <h1
                          key={i}
                          onClick={(event) => {
                            event.stopPropagation();
                            setTopmostCarPriorityOptions(item);
                            setoptionsPopup(null);
                          }}
                          className={`py-[.5rem] cursor-pointer px-[1rem] bg-white
                                  ${
                                    i !== TopmostCarPriorityArray.length - 1 &&
                                    "border-b-[1px]"
                                  }
                                  ${breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"}
                                  `}
                        >
                          {item}
                        </h1>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div
              className={`flex w-full 
              ${breakpoint <= 600 ? "flex-col gap-[.5rem]" : "gap-[.25rem]"}
              `}
            >
              <div className="flex flex-col gap-[.25rem] flex-1">
                <label
                  htmlFor=""
                  className={` ${
                    breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                  }`}
                >
                  When do you expect to finalize a car
                </label>
                <div
                  className="py-[.5rem] px-[1rem] border-[1px] rounded-[10px] text-color-9 font-2-book relative cursor-pointer flex-1 "
                  onClick={() => {
                    if (optionsPopup === "carfinalize") {
                      setoptionsPopup(null);
                    } else {
                      setoptionsPopup("carfinalize");
                    }
                  }}
                >
                  <div
                    className={`flex items-center justify-between  ${
                      breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                    }`}
                  >
                    {CarFinalizeDateOptions}
                    <RiArrowDropDownLine className="text-[1.25rem]" />
                  </div>
                  {optionsPopup === "carfinalize" && (
                    <div className="w-full absolute  left-0 top-[100%]   border-[1px] rounded-[10px] text-color-9 bg-[#fff] z-[999]">
                      {CarFinalizeDateArray.map((item, i) => {
                        return (
                          <h1
                            key={i}
                            onClick={(event) => {
                              event.stopPropagation();
                              setCarFinalizeDateOptions(item);
                              setoptionsPopup(null);
                            }}
                            className={`py-[.5rem] cursor-pointer px-[1rem] bg-white
                                  ${
                                    i !== CarFinalizeDateArray.length - 1 &&
                                    "border-b-[1px]"
                                  }
                                  ${breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"}
                                  `}
                          >
                            {item}
                          </h1>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-[.25rem] flex-1">
                <label
                  htmlFor=""
                  className={` ${
                    breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                  }`}
                >
                  How Many Kilometers You Drive
                </label>
                <div
                  className="py-[.5rem] px-[1rem] border-[1px] rounded-[10px] text-color-9 font-2-book relative cursor-pointer flex-1 "
                  onClick={() => {
                    if (optionsPopup === "kmdrive") {
                      setoptionsPopup(null);
                    } else {
                      setoptionsPopup("kmdrive");
                    }
                  }}
                >
                  <div
                    className={`flex items-center justify-between  ${
                      breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                    }`}
                  >
                    {KMDriveOptions}
                    <RiArrowDropDownLine className="text-[1.25rem]" />
                  </div>
                  {optionsPopup === "kmdrive" && (
                    <div className="w-full absolute  left-0 top-[100%]   border-[1px] rounded-[10px] text-color-9 bg-[#fff] z-[999]">
                      {KMDriveArray.map((item, i) => {
                        return (
                          <h1
                            key={i}
                            onClick={(event) => {
                              event.stopPropagation();
                              setKMDriveOptions(item);
                              setoptionsPopup(null);
                            }}
                            className={`py-[.5rem] cursor-pointer px-[1rem] bg-white
                                  ${
                                    i !== KMDriveArray.length - 1 &&
                                    "border-b-[1px]"
                                  }
                                  ${breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"}
                                  `}
                          >
                            {item}
                          </h1>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[.25rem] ">
              <label
                htmlFor=""
                className={` ${
                  breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                }`}
              >
                Your mode of purchase
              </label>
              <div
                className="py-[.5rem] px-[1rem] border-[1px] rounded-[10px] text-color-9 font-2-book relative cursor-pointer flex-1 "
                onClick={() => {
                  if (optionsPopup === "modeofpurchase") {
                    setoptionsPopup(null);
                  } else {
                    setoptionsPopup("modeofpurchase");
                  }
                }}
              >
                <div
                  className={`flex items-center justify-between  ${
                    breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                  }`}
                >
                  {ModeOfPurchaseOptions}
                  <RiArrowDropDownLine className="text-[1.25rem]" />
                </div>
                {optionsPopup === "modeofpurchase" && (
                  <div className="w-full absolute  left-0 top-[100%]   border-[1px] rounded-[10px] text-color-9 bg-[#fff] z-[999]">
                    {ModeOfPurchaseArray.map((item, i) => {
                      return (
                        <h1
                          key={i}
                          onClick={(event) => {
                            event.stopPropagation();
                            setModeOfPurchaseOptions(item);
                            setoptionsPopup(null);
                          }}
                          className={`py-[.5rem] cursor-pointer px-[1rem] bg-white
                                  ${
                                    i !== ModeOfPurchaseArray.length - 1 &&
                                    "border-b-[1px]"
                                  }
                                  ${breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"}
                                  `}
                        >
                          {item}
                        </h1>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-[.25rem] ">
              <label
                htmlFor=""
                className={` ${
                  breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                }`}
              >
                Car Variant
              </label>
              <input
                type="text"
                className={`py-[.5rem] px-[1rem] font-2-book border-[1px] rounded-[10px]  outline-none w-full  ${
                  breakpoint <= 600 ? "text-[.8rem]" : "text-[.875rem]"
                }`}
                placeholder="Base"
              />
            </div>

            <div className="flex gap-[.25rem] ">
              <div className="flex flex-col gap-[.25rem] flex-1 ">
                <label htmlFor="" className={` ${breakpoint<=600 ?'text-[.8rem]':'text-[.875rem]'}`}>
                  Quoted Price
                </label>
                <input
                  type="text"
                  className={`py-[.5rem] px-[1rem] font-2-book border-[1px] rounded-[10px]  outline-none w-full  ${breakpoint<=600 ?'text-[.8rem]':'text-[.875rem]'}`}
                  placeholder="10,00,000 Lacs"
                />
              </div>
              <div className="flex flex-col gap-[.25rem] flex-1">
                <label htmlFor="" className={` ${breakpoint<=600 ?'text-[.8rem]':'text-[.875rem]'}`}>
                  Expected Price
                </label>
                <input
                  type="text"
                  className={`py-[.5rem] px-[1rem] font-2-book border-[1px] rounded-[10px]  outline-none w-full  ${breakpoint<=600 ?'text-[.8rem]':'text-[.875rem]'}`}
                  placeholder="9,99,999 Lacs"
                />
              </div>
            </div>
            <div className="flex gap-[.5rem] text-color-1 font-medium">
              <button
                className="flex items-center justify-center gap-[1rem] w-full py-[.5rem] px-[1rem] bg-[#0b85ff] rounded-[10px]"
                onClick={() => {
                  setPageNumber("2");
                }}
              >
                <IoChevronBackSharp/>
                Previous
              </button>
              <button
                className="text-center w-full py-[.5rem] px-[1rem] bg-[#0b85ff] rounded-[10px]"
                onClick={() => {
                  setPageNumber("3");
                }}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AskAutotrendsAi;
