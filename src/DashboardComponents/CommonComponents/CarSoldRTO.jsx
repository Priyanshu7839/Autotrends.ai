import BrandNames from "../../Data/BrandNamesSegmentWise.json";
// import PanIndiaData from "../../Data/PanIndiaData.json";
import { FetchStateData } from "../../utils/APICalls";
// import RTOData from "../../Data/RTOData.json";
// import StatesYearlyData from "../../Data/StatesYearlyData.json";
import React, { useEffect, useState } from "react";
import { FaCarSide } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const CarSoldRTO = ({
  RTOData,
  StatesYearlyData,
  selectedRTO,
  selectedState,
  PanIndiaData,
}) => {
  const [CarsSoldRTOYearView, setCarsSoldRTOYearview] = useState(false);
  const [CarsSoldRTOYear, setCarsSoldRTOYear] = useState('2026');
  const [SelectedMonthShow, SetSelectedMonthShow] = useState(false);

  const currentMonthName = new Date()
    .toLocaleString("default", {
      month: "long",
    })
    .toUpperCase();

  const [selectedMonth, setSelectedMonth] = useState(
    currentMonthName?.slice(0, 3)
  );

  const [showMonthlyData, setShowMonthlyData] = useState(true);

  const monthsData = BrandNames?.map((brandName) =>
    RTOData?.find((obj) => obj.brand === brandName)
  )
    ?.filter(Boolean)
    ?.map((data) =>
      (Array.isArray(data["monthly"]) ? data["monthly"] : [])?.find(
        (m) => m.year === CarsSoldRTOYear
      )
    )
    .filter(Boolean)?.[0];

  const months = monthsData
    ? Object.keys(monthsData).filter((key) => key !== "year")
    : [];

  const RTOtotalcarsold = BrandNames.map((brandName) =>
    RTOData?.find((obj) => obj.brand === brandName)
  )
    ?.filter(Boolean)
    ?.reduce((sum, b) => sum + (b[CarsSoldRTOYear] || 0), 0);

  const RTOtotalcarsoldMonthly = (BrandNames || [])
    ?.map((brandName) => (RTOData || []).find((obj) => obj.brand === brandName))
    ?.filter(Boolean)
    ?.map((data) =>
      (Array.isArray(data?.monthly) ? data.monthly : [])?.find(
        (m) => m?.year === CarsSoldRTOYear
      )
    )
    ?.filter(Boolean)
    ?.map((item) => item?.[selectedMonth] || 0)
    ?.reduce((acc, item) => acc + item, 0);

  //<--------------------------Car sold In State--------------------------------------------->
  const Statetotalcarsold = BrandNames.map((brandName) =>
    StatesYearlyData?.find((obj) => obj.brand === brandName)
  )
    ?.filter(Boolean)
    ?.reduce((sum, b) => sum + (b[CarsSoldRTOYear] || 0), 0);

  const StatetotalcarsoldMonthly = (BrandNames || [])
    .map((brandName) => {
      const stateData = BrandNames.map((brandName) =>
        StatesYearlyData?.find((obj) => obj.brand === brandName)
      )?.filter(Boolean);
      const brandData = stateData?.find((obj) => obj?.brand === brandName);

      if (!brandData || !Array?.isArray(brandData.monthly)) return 0;

      const yearData = brandData.monthly?.find(
        (m) => m?.year === CarsSoldRTOYear
      );

      return yearData?.[selectedMonth] ?? 0; // fallback to 0 if month not found
    })
    .reduce((acc, value) => acc + (value || 0), 0);

  //<---------------------------------------------------------------------------------------->

  //<-----------------------For Cars Sold In India------------------------------------------->
  const panindiatotalcarsold2 = PanIndiaData?.reduce(
    (sum, b) => sum + (b[CarsSoldRTOYear] || 0),
    0
  );

  const IndiatotalcarsoldMonthly = (BrandNames || [])
    ?.map((brandName) => {
      const brandData = (PanIndiaData || [])?.find(
        (obj) => obj?.brand === brandName
      );

      if (!brandData || !Array.isArray(brandData.monthly)) return 0;

      const yearData = brandData.monthly?.find(
        (m) => m?.year === CarsSoldRTOYear
      );

      return yearData?.[selectedMonth] ?? 0; // fallback to 0
    })
    ?.reduce((acc, value) => acc + (value || 0), 0);

  // ---------------------------------------------------------------------------------------->

  return (
    <div className="flex flex-col gap-[1rem] bg-transparent">
      <div className="w-full border-[1px] border-[#cfcfd5] rounded-[12px] p-[1rem] flex flex-col gap-[1rem] glass-card">
        <div className="flex items-center justify-between">
          <h1 className="font-medium flex items-center gap-[.5rem]">
            <FaCarSide /> Brands Market Numbers{" "}
            <span className="text-color-9-70">
              {showMonthlyData ? "MTD" : "YTD"}
            </span>
          </h1>
          <div className="flex items-center justify-center gap-[.5rem]">
            <button
              className={` text-[#0b85ff] text-[.875rem] flex items-center justify-between gap-[.25rem] cursor-pointer relative px-[.5rem] py-[.25rem] border-[1px] border-[#0b85ff] rounded-[8px] ${
                CarsSoldRTOYearView && "border-b-[0px] rounded-b-[0px]"
              }`}
              onClick={() => {
                setCarsSoldRTOYearview(!CarsSoldRTOYearView);
              }}
            >
              {CarsSoldRTOYear}
              <RiArrowDropDownLine className="text-[1.25rem] font-normal" />

              <div
                className={`absolute top-[100%]   left-[-1px] rounded-[8px] bg-[white] z-[10] bg-white  border-[#0b85ff] overflow-y-scroll transition-all duration-200 ${
                  CarsSoldRTOYearView
                    ? "w-[calc(100%+2px)] h-[100px] border-[1px] border-t-[0px] rounded-t-[0px]"
                    : "h-[0px] w-[0px]"
                }`}
                style={{ scrollbarWidth: "none" }}
              >
                {BrandNames.map((brandName) =>
                  RTOData?.find((obj) => obj.brand === brandName)
                )?.filter(Boolean)?.[0] &&
                  Object.keys(
                    BrandNames.map((brandName) =>
                      RTOData?.find((obj) => obj.brand === brandName)
                    )?.filter(Boolean)?.[0]
                  )
                    ?.filter((k) => k !== "brand" && k !== "monthly")
                    ?.map((year, i) => {
                      return (
                        <h1
                          key={i}
                          className={`py-[.25rem] px-[.5rem] `}
                          onClick={() => {
                            setCarsSoldRTOYear(year);
                            setShowMonthlyData(false);
                          }}
                        >
                          {year}
                        </h1>
                      );
                    })}
              </div>
            </button>
            {months.length !== 0 && (
              <button
                className={` text-[#0b85ff] text-[.875rem] flex items-center justify-between gap-[.25rem] cursor-pointer relative px-[.5rem] py-[.25rem] border-[1px] border-[#0b85ff] rounded-[8px] ${
                  SelectedMonthShow && "border-b-[0px] rounded-b-[0px]"
                }`}
                onClick={() => {
                  SetSelectedMonthShow(!SelectedMonthShow);
                }}
              >
                {selectedMonth}
                <RiArrowDropDownLine className="text-[1.25rem] font-normal" />

                <div
                  className={`absolute top-[100%]   left-[-1px] rounded-[8px] bg-[white] z-[10] bg-white  border-[#0b85ff] overflow-y-scroll transition-all duration-200 ${
                    SelectedMonthShow
                      ? "w-[calc(100%+2px)] h-[100px] border-[1px] border-t-[0px] rounded-t-[0px]"
                      : "h-[0px] w-[0px]"
                  }`}
                  style={{ scrollbarWidth: "none" }}
                >
                  {months.map((month, i) => {
                    return (
                      <h1
                        key={i}
                        className={`py-[.25rem] px-[.5rem] `}
                        onClick={() => {
                          setSelectedMonth(month);
                          setShowMonthlyData(true);
                        }}
                      >
                        {month}
                      </h1>
                    );
                  })}
                </div>
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between gap-[.5rem] w-full text-[.875rem] font-medium">
          {/* <h1 className="w-[15%] ">Brand Name</h1> */}

          <div className="flex items-center gap-[1rem] justify-between w-full ">
            <span className="w-full flex items-center justify-between">
              Market Share {selectedRTO?.split(" ")[0]}{" "}
              <span>
                {showMonthlyData
                  ? RTOtotalcarsoldMonthly?.toLocaleString("en-IN")
                  : RTOtotalcarsold?.toLocaleString("en-IN")}
              </span>
            </span>
            <span className="w-full flex items-center justify-between">
              Market Share {selectedState}{" "}
              <span>
                {showMonthlyData
                  ? StatetotalcarsoldMonthly?.toLocaleString("en-IN")
                  : Statetotalcarsold?.toLocaleString("en-IN")}
              </span>
            </span>
            <span className="w-full flex items-center justify-between">
              Market Share India{" "}
              <span>
                {showMonthlyData
                  ? IndiatotalcarsoldMonthly?.toLocaleString("en-IN")
                  : panindiatotalcarsold2?.toLocaleString("en-IN")}
              </span>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-[.5rem] w-full text-[.75rem] ">
          <div className="w-full  h-full flex items-center gap-[1rem] justify-between">
            {/* //*  RTO Market Numbers ///////////////////////////////////////////// */}
            {/* //? Rto market numbers yearly////////////////////////////////////// */}
            <div className=" w-full h-full  flex flex-col items-center justify-between gap-[.5rem]">
              {!showMonthlyData && (
                <div className="flex h-full w-full items-center justify-between gap-[.5rem]">
                  <div className="flex w-full  flex-col h-full items-start justify-between">
                    {!showMonthlyData &&
                      BrandNames?.map((brandName) =>
                        RTOData?.filter(
                          (item) => item.monthly.length !== 0
                        )?.find((obj) => obj.brand === brandName)
                      )
                        ?.filter(Boolean)
                        ?.sort(
                          (a, b) =>
                            (b[CarsSoldRTOYear] || 0) -
                            (a[CarsSoldRTOYear] || 0) // descending order
                        )
                        ?.map((item, i) => {
                          return (
                            <h1 key={i} className="whitespace-nowrap flex gap-[.5rem]">
                              <span>{i+1}.</span>
                              {item.brand.split(" ")[0]}
                            </h1>
                          );
                        })}
                  </div>
                  <div className="flex flex-col h-full w-full items-center justify-between gap-[.5rem]">
                    {!showMonthlyData &&
                      BrandNames?.map((brandName) =>
                        RTOData?.filter(
                          (item) => item.monthly.length !== 0
                        )?.find((obj) => obj.brand === brandName)
                      )
                        ?.filter(Boolean)
                        ?.sort(
                          (a, b) =>
                            (b[CarsSoldRTOYear] || 0) -
                            (a[CarsSoldRTOYear] || 0) // descending order
                        )
                        ?.map((item, i) => {
                          return (
                            <div
                              key={i}
                              className="flex items-center justify-between gap-[.5rem] w-full text-[.875rem]"
                            >
                              <span className="w-full h-[20px] border-[.5px] border-opacity-30 border-[#0b85ff] rounded-[8px] overflow-hidden flex items-center justify-between text-[.65rem]">
                                <div
                                  className={` h-full rounded-[8px] bg-[#3092f5]`}
                                  style={{
                                    width: `${parseFloat(
                                      (item[CarsSoldRTOYear] /
                                        RTOtotalcarsold) *
                                        100
                                    ).toFixed(2)}%`,
                                  }}
                                ></div>
                                <h1 className="mr-[10px]">
                                  {item[CarsSoldRTOYear].toLocaleString(
                                    "en-IN"
                                  )}
                                </h1>
                              </span>
                            </div>
                          );
                        })}
                  </div>
                </div>
              )}
              {/* //? Rto market numbers monthly////////////////////////////////////// */}

              {showMonthlyData && (
                <div className="flex w-full h-full  items-center justify-between gap-[.5rem]">
                  <div className="w-full h-full flex flex-col items-start justify-between gap-[.5rem]">
                    {BrandNames?.map((brandName) => {
                      const obj = RTOData?.find((o) => o.brand === brandName);
                      if (!obj) return null;

                      const monthlyData = obj.monthly?.find(
                        (m) => m.year === CarsSoldRTOYear
                      );
                      if (!monthlyData) return null;

                      return {
                        brand: obj.brand,
                        ...monthlyData,
                      };
                    })
                      .filter(Boolean)
                      ?.sort(
                        (a, b) =>
                          (b[selectedMonth] || 0) - (a[selectedMonth] || 0) // descending order
                      )
                      .map((item, i) => {
                        return (
                          <h1 key={i} className="whitespace-nowrap flex gap-[.5rem]">
                             <span>{i+1}.</span>
                            {item.brand.split(" ")[0]}
                          </h1>
                        );
                      })}
                  </div>
                  <div className="w-full h-full flex flex-col items-start justify-between gap-[.5rem]">
                    {showMonthlyData &&
                      BrandNames?.map((brandName) =>
                        RTOData?.find((obj) => obj.brand === brandName)
                      )
                        .filter(Boolean)
                        ?.map((data) =>
                          data["monthly"]?.find(
                            (m) => m.year === CarsSoldRTOYear
                          )
                        )
                        ?.filter(Boolean)
                        ?.sort(
                          (a, b) =>
                            (b[selectedMonth] || 0) - (a[selectedMonth] || 0) // descending order
                        )
                        ?.map((item, i) => {
                          return (
                            <div
                              key={i}
                              className="flex items-center justify-between gap-[.5rem] w-full text-[.875rem]"
                            >
                              {/* <h2 className="w-[30%]">{item[CarsSoldRTOYear]}</h2> */}
                              <span className="w-full h-[20px] border-[.5px] border-opacity-30 border-[#0b85ff] rounded-[8px] overflow-hidden flex items-center justify-between text-[.65rem]">
                                <div
                                  className={` h-full rounded-[8px] bg-[#3092f5]`}
                                  style={{
                                    width: `${parseFloat(
                                      (item[selectedMonth] /
                                        RTOtotalcarsoldMonthly) *
                                        100
                                    ).toFixed(2)}%`,
                                  }}
                                ></div>
                                <h1 className="mr-[10px]">
                                  {item[selectedMonth]?.toLocaleString("en-IN")}
                                </h1>
                              </span>
                            </div>
                          );
                        })}
                  </div>
                </div>
              )}
            </div>

            {/* //* State Market Numbers ////////////////////////////////////////////////////////////////// */}

            <div className="w-full h-full  flex flex-col items-center justify-between gap-[.5rem]">
              {/*  //? state Market numbers yearly//////////////////////////// */}
              {!showMonthlyData && (
                <div className="flex w-full h-full  items-center justify-between gap-[.5rem]">
                  <div className="h-full w-full flex  flex-col items-start justify-between gap-[.5rem]">
                    {!showMonthlyData &&
                      BrandNames?.map((brandName) =>
                        StatesYearlyData?.find((obj) => obj.brand === brandName)
                      )
                        ?.filter(Boolean)
                        ?.sort(
                          (a, b) =>
                            (b[CarsSoldRTOYear] || 0) -
                            (a[CarsSoldRTOYear] || 0) // descending order
                        )
                        ?.map((item, i) => {
                          return (
                            <h1 key={i} className="whitespace-nowrap flex gap-[.5rem]">
                               <span>{i+1}.</span>
                              {item.brand.split(" ")[0]}
                            </h1>
                          );
                        })}
                  </div>
                  <div className="w-full h-full  flex flex-col items-start justify-between gap-[.5rem]">
                    {!showMonthlyData &&
                      BrandNames?.map((brandName) =>
                        StatesYearlyData?.find((obj) => obj.brand === brandName)
                      )
                        ?.filter(Boolean)
                        ?.sort(
                          (a, b) =>
                            (b[CarsSoldRTOYear] || 0) -
                            (a[CarsSoldRTOYear] || 0) // descending order
                        )
                        ?.map((item, i) => {
                          return (
                            <div
                              key={i}
                              className="flex items-center justify-between gap-[.5rem] w-full text-[.875rem]"
                            >
                              <span className="w-full h-[20px] border-[.5px] border-opacity-30 border-[#0b85ff] rounded-[8px] overflow-hidden flex items-center justify-between text-[.65rem]">
                                <div
                                  className={` h-full rounded-[8px] bg-[#3092f5]`}
                                  style={{
                                    width: `${parseFloat(
                                      (item[CarsSoldRTOYear] /
                                        Statetotalcarsold) *
                                        100
                                    ).toFixed(2)}%`,
                                  }}
                                ></div>
                                <h1 className="mr-[10px]">
                                  {item[CarsSoldRTOYear]?.toLocaleString(
                                    "en-IN"
                                  )}
                                </h1>
                              </span>
                            </div>
                          );
                        })}
                  </div>
                </div>
              )}
              {/*  //? state Market numbers monthly//////////////////////////// */}

              {showMonthlyData && (
                <div className="w-full h-full flex items-center justify-between gap-[.5rem]">
                  <div className="h-full w-full flex flex-col items-start justify-between gap-[.5rem]">
                    {BrandNames?.map((brandName) => {
                      const obj = StatesYearlyData?.find(
                        (o) => o.brand === brandName
                      );
                      if (!obj) return null;

                      const monthlyData = obj.monthly?.find(
                        (m) => m.year === CarsSoldRTOYear
                      );
                      if (!monthlyData) return null;

                      return {
                        brand: obj.brand,
                        ...monthlyData,
                      };
                    })
                      .filter(Boolean)
                      ?.sort(
                        (a, b) =>
                          (b[selectedMonth] || 0) - (a[selectedMonth] || 0) // descending order
                      )
                      .map((item, i) => {
                        return (
                          <h1 key={i} className="whitespace-nowrap flex gap-[.5rem]">
                             <span>{i+1}.</span>
                            {item.brand.split(" ")[0]}
                          </h1>
                        );
                      })}
                  </div>

                  <div className="w-full h-full flex flex-col items-start justify-between gap-[.5rem]">
                    {showMonthlyData &&
                      BrandNames?.map((brandName) =>
                        StatesYearlyData?.find((obj) => obj.brand === brandName)
                      )
                        .filter(Boolean)
                        ?.map((data) =>
                          data["monthly"]?.find(
                            (m) => m.year === CarsSoldRTOYear
                          )
                        )
                        ?.filter(Boolean)
                        ?.sort(
                          (a, b) =>
                            (b[selectedMonth] || 0) - (a[selectedMonth] || 0) // descending order
                        )
                        ?.map((item, i) => {
                          return (
                            <div
                              key={i}
                              className="flex items-center justify-between gap-[.5rem] w-full text-[.875rem]"
                            >
                              {/* <h2 className="w-[30%]">{item[CarsSoldRTOYear]}</h2> */}
                              <span className="w-full h-[20px] border-[.5px] border-opacity-30 border-[#0b85ff] rounded-[8px] overflow-hidden flex items-center justify-between text-[.65rem]">
                                <div
                                  className={` h-full rounded-[8px] bg-[#3092f5]`}
                                  style={{
                                    width: `${parseFloat(
                                      (item[selectedMonth] /
                                        StatetotalcarsoldMonthly) *
                                        100
                                    ).toFixed(2)}%`,
                                  }}
                                ></div>
                                <h1 className="mr-[10px]">
                                  {item[selectedMonth]?.toLocaleString("en-IN")}
                                </h1>
                              </span>
                            </div>
                          );
                        })}
                  </div>
                </div>
              )}
            </div>
            {/* //* India Market Numbers ////////////////////////////////////////////////////////////////// */}

            <div className="w-full h-full  flex flex-col items-center justify-between gap-[.5rem]">
              {/*  //? India Market numbers Yearly//////////////////////////// */}

              {!showMonthlyData && (
                <div className="flex w-full h-full items-center justify-between gap-[.5rem]">
                  <div className=" h-full w-full flex flex-col items-start justify-between gap-[.5rem]">
                    {!showMonthlyData &&
                      BrandNames?.map((brandName) =>
                        PanIndiaData?.find((obj) => obj.brand === brandName)
                      )
                        .filter(Boolean)
                        ?.sort(
                          (a, b) =>
                            (b[CarsSoldRTOYear] || 0) -
                            (a[CarsSoldRTOYear] || 0) // descending order
                        )
                        ?.map((item, i) => {
                          return (
                            <h1 key={i} className="whitespace-nowrap flex gap-[.5rem]">
                               <span>{i+1}.</span>
                              {item.brand.split(" ")[0]}
                            </h1>
                          );
                        })}
                  </div>
                  <div className="w-full h-full flex flex-col items-start justify-between gap-[.5rem]">
                    {!showMonthlyData &&
                      BrandNames?.map((brandName) =>
                        PanIndiaData?.find((obj) => obj.brand === brandName)
                      )
                        .filter(Boolean)
                        ?.sort(
                          (a, b) =>
                            (b[CarsSoldRTOYear] || 0) -
                            (a[CarsSoldRTOYear] || 0) // descending order
                        )
                        ?.map((item, i) => {
                          return (
                            <div
                              key={i}
                              className="flex flex-col items-center justify-between gap-[.5rem] w-full text-[.875rem]"
                            >
                              <span className="w-full h-[20px] border-[.5px] border-opacity-30 border-[#0b85ff] rounded-[8px] overflow-hidden flex items-center justify-between text-[.65rem]">
                                <div
                                  className={` h-full rounded-[8px] bg-[#3092f5]  `}
                                  style={{
                                    width: `${parseFloat(
                                      (
                                        (item[CarsSoldRTOYear] /
                                          panindiatotalcarsold2) *
                                        100
                                      ).toFixed(2)
                                    )}%`,
                                  }}
                                ></div>
                                <h1 className="mr-[10px]">
                                  {item[CarsSoldRTOYear]?.toLocaleString(
                                    "en-IN"
                                  )}
                                </h1>
                              </span>
                            </div>
                          );
                        })}
                  </div>
                </div>
              )}
              {/*  //? India Market numbers monthly//////////////////////////// */}

              {showMonthlyData && (
                <div className="flex w-full h-full items-center justify-between gap-[.5rem]">
                  <div className="h-full w-full flex flex-col items-start justify-between gap-[.5rem]">
                    {BrandNames?.map((brandName) => {
                      const obj = PanIndiaData?.find(
                        (o) => o.brand === brandName
                      );
                      if (!obj) return null;

                      const monthlyData = obj.monthly?.find(
                        (m) => m.year === CarsSoldRTOYear
                      );
                      if (!monthlyData) return null;

                      return {
                        brand: obj.brand,
                        ...monthlyData,
                      };
                    })
                      .filter(Boolean)
                      ?.sort(
                        (a, b) =>
                          (b[selectedMonth] || 0) - (a[selectedMonth] || 0) // descending order
                      )
                      .map((item, i) => {
                        return (
                          <h1 key={i} className="whitespace-nowrap flex gap-[.5rem]">
                             <span>{i+1}.</span>
                            {item.brand.split(" ")[0]}
                          </h1>
                        );
                      })}
                  </div>
                  <div className="flex flex-col h-full w-full items-start justify-between gap-[.5rem]">
                    {showMonthlyData &&
                      BrandNames?.map((brandName) =>
                        PanIndiaData?.find((obj) => obj.brand === brandName)
                      )
                        ?.filter(Boolean)
                        ?.map((data) =>
                          data["monthly"].find(
                            (m) => m.year === CarsSoldRTOYear
                          )
                        )
                        ?.filter(Boolean)
                        ?.sort(
                          (a, b) =>
                            (b[selectedMonth] || 0) - (a[selectedMonth] || 0) // descending order
                        )
                        ?.map((item, i) => {
                          return (
                            <div
                              key={i}
                              className="flex items-center justify-between gap-[.5rem] w-full text-[.875rem]"
                            >
                              {/* <h2 className="w-[30%]">{item[CarsSoldRTOYear]}</h2> */}
                              <span className="w-full h-[20px] border-[.5px] border-opacity-30 border-[#0b85ff] rounded-[8px] overflow-hidden flex items-center justify-between text-[.65rem]">
                                <div
                                  className={` h-full rounded-[8px] bg-[#3092f5]`}
                                  style={{
                                    width: `${parseFloat(
                                      (item[selectedMonth] /
                                        IndiatotalcarsoldMonthly) *
                                        100
                                    ).toFixed(2)}%`,
                                  }}
                                ></div>
                                <h1 className="mr-[10px]">
                                  {item[selectedMonth]?.toLocaleString("en-IN")}
                                </h1>
                              </span>
                            </div>
                          );
                        })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSoldRTO;
