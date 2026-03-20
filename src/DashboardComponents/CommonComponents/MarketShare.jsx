import BrandNames from "../../Data/BrandNamesSegmentWise.json";
// import PanIndiaData from "../../Data/PanIndiaData.json";
import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { RiArrowDropDownLine } from "react-icons/ri";

const MarketShare = ({
  StatesYearlyData,
  RTOData,
  selectedRTO,
  selectedState,
  PanIndiaData
}) => {
  const colors = [
    "#0277BD",
    "#00695C",
    "#00838F",
    "#1565C0",
    "#2E7D32",
    "#558B2F",
    "#9E9D24",
    "#C0CA33",
    "#7CB342",
    "#00897B",
    "#00897B",
    "#039BE5",
    "#1E88E5",
    "#FFC107",
    "#FF9800",
    "#FF5722",
    "#795548",
    "#795548",
    "#9E9E9E",
    "#607D8B",
    "#78909C",
  ];

  const [MarketShareRTOYearViewVersus, setMarketShareRTOYearviewVersus] =
    useState(false);
  const [MarketShareRTOYearVersus, setMarketShareRTOYearVersus] =
    useState("2026");

  const [SelectedMonthShow, SetSelectedMonthShow] = useState(false);
  const currentMonthName = new Date().toLocaleString("default", {
    month: "long",
  }).toUpperCase();

  const [selectedMonth, setSelectedMonth] = useState(
    currentMonthName?.slice(0, 3)
  );

  const [showMonthlyData, setShowMonthlyData] = useState(true);
  const monthsData = BrandNames.map((brandName) =>
      RTOData?.find((obj) => obj.brand === brandName)
    )?.filter(Boolean)
      ?.map((data) =>
        data?.monthly?.find((m) => m.year === MarketShareRTOYearVersus)
      )
      .filter(Boolean)?.[0] || {};

      

  const months = monthsData
    ? Object.keys(monthsData).filter((key) => key !== "year")
    : [];

  const RTOtotalcarsold2Versus = BrandNames
  .map((brandName) =>
    RTOData?.find((obj) => obj.brand === brandName)
  )
  ?.filter(Boolean)?.reduce(
    (sum, b) => sum + (b[MarketShareRTOYearVersus] || 0),
    0
  );

  const RTOtotalcarsoldMonthly =
    BrandNames?.map((brandName) =>
      RTOData?.find((obj) => obj?.brand === brandName)
    )
      ?.filter(Boolean)
      ?.map((data) =>
        data?.monthly?.find((m) => m?.year === MarketShareRTOYearVersus)
      )
      ?.filter(Boolean)
      ?.map((item) => item?.[selectedMonth] || 0)
      ?.reduce((acc, val) => acc + val, 0) || 0;

  const RTOdata4Versus = {
    labels: BrandNames?.map((brandName) =>
      RTOData?.find((obj) => obj.brand === brandName)
    )
      ?.filter(Boolean)
      ?.map((data) => data.brand.split(" ")[0]),
    datasets: [
      {
        data: BrandNames?.map((brandName) =>
          RTOData?.find((obj) => obj.brand === brandName)
        )
          ?.filter(Boolean)
          ?.map((data) =>
            (
              parseFloat(
                data[MarketShareRTOYearVersus] / RTOtotalcarsold2Versus
              ) * 100
            ).toFixed(2)
          ),
        backgroundColor: colors,
       
        borderColor: "#fff",
        borderRadius: 10,
      },
    ],
  };

  const monthlyDataRTO = (
    BrandNames?.map((brandName) => {
      const brandData = RTOData?.find((obj) => obj?.brand === brandName);
      if (!brandData) return null;

      const monthly = brandData?.monthly?.find(
        (m) => m?.year === MarketShareRTOYearVersus
      );
      if (!monthly) return null;

      const monthValue = monthly?.[selectedMonth] || 0;
      const total = RTOtotalcarsoldMonthly || 1; // prevent division by 0

      return {
        brand: brandData.brand || "Unknown",
        percentage: parseFloat(((monthValue / total) * 100).toFixed(2)),
      };
    }) || []
  ).filter(Boolean);

  const RTOdata4VersusMonthly = {
    labels:
      BrandNames?.map((brandName) => {
        const brandData = RTOData?.find((obj) => obj?.brand === brandName);
        return brandData?.brand?.split(" ")[0] || "Unknown";
      }) || [],

    datasets: [
      {
        data:
          BrandNames?.map((brandName) => {
            const brandData = RTOData?.find((obj) => obj?.brand === brandName);
            const monthly = brandData?.monthly?.find(
              (m) => m?.year === MarketShareRTOYearVersus
            );
            const monthValue = monthly?.[selectedMonth] || 0;
            const total = RTOtotalcarsoldMonthly || 1; // prevent division by 0

            return parseFloat(((monthValue / total) * 100).toFixed(2));
          }) || [],

        backgroundColor: colors || [],
        borderColor: "#fff",
        borderRadius: 10,
      },
    ],
  };

  //<-----------------------MarketShare In India------------------------------------------->

  const panindiatotalcarsold = PanIndiaData?.reduce(
    (sum, b) => sum + (b[MarketShareRTOYearVersus] || 0),
    0
  );

  const IndiatotalcarsoldMonthly = BrandNames?.map((brandName) =>
    PanIndiaData.find((obj) => obj.brand === brandName)
  )
    ?.filter(Boolean)
    ?.map((data) =>
      data["monthly"]?.find((m) => m.year === MarketShareRTOYearVersus)
    )
    ?.filter(Boolean)
    ?.map((item) => item[selectedMonth])
    ?.reduce((acc, item) => acc + (item || 0), 0);

  const Indiadata4VersusMonthly = {
    labels: BrandNames?.map((brandName) =>
      PanIndiaData?.find((obj) => obj.brand === brandName)
    )
      ?.filter(Boolean)
      ?.map((data) => data.brand.split(" ")[0]),

    datasets: [
      {
        data: BrandNames?.map((brandName) =>
          PanIndiaData?.find((obj) => obj.brand === brandName)
        )
          ?.filter(Boolean)
          ?.map((data) =>
            data["monthly"]?.find((m) => m.year === MarketShareRTOYearVersus)
          )
          ?.filter(Boolean)
          ?.map((item) =>
            parseFloat(
              (item[selectedMonth] / IndiatotalcarsoldMonthly) * 100
            ).toFixed(2)
          ),

        backgroundColor: colors,
        borderColor: "#fff",
        borderRadius: 10,
      },
    ],
  };

  const monthlyDataIndia = BrandNames?.map((brandName) =>
    PanIndiaData?.find((obj) => obj.brand === brandName)
  )
    ?.filter(Boolean)
    ?.map((data) => {
      const monthly = data?.["monthly"]?.find(
        (m) => m.year === MarketShareRTOYearVersus
      );

      if (!monthly) return null; // safeguard if year not found

      return {
        brand: data.brand,
        percentage: parseFloat(
          (monthly[selectedMonth] / IndiatotalcarsoldMonthly) * 100
        ).toFixed(2),
      };
    })
    ?.filter(Boolean);

  const data5 = {
    labels: BrandNames?.map((brandName) =>
      PanIndiaData?.find((obj) => obj.brand === brandName)
    )
      ?.filter(Boolean)
      ?.map((data) => data.brand.split(" ")[0]),
    datasets: [
      {
        data: BrandNames?.map((brandName) =>
          PanIndiaData?.find((obj) => obj.brand === brandName)
        )
          ?.filter(Boolean)
          ?.map((data) =>
            parseFloat(
              (data[MarketShareRTOYearVersus] / panindiatotalcarsold) * 100
            ).toFixed(2)
          ),
        backgroundColor: colors,
        borderColor: "#fff",
        borderRadius: 10,
      },
    ],
  };

  const options3 = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxWidth: 12,
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.label}: ${ctx.raw}%`,
        },
      },
    },
  };

  //<------------------------------Market Share In State------------------------------------->
  const Statetotalcarsold2 = BrandNames
  .map((brandName) =>
    StatesYearlyData?.find((obj) => obj.brand === brandName)
  )
  ?.filter(Boolean)?.reduce(
    (sum, b) => sum + (b[MarketShareRTOYearVersus] || 0),
    0
  );

  const StatetotalcarsoldMonthly = (BrandNames || [])
    .map((brandName) => {
      const stateData = BrandNames
  .map((brandName) =>
    StatesYearlyData?.find((obj) => obj.brand === brandName)
  )
  ?.filter(Boolean) || [];
      return stateData?.find((obj) => obj?.brand === brandName) || null;
    })
    .filter(Boolean)
    .map((data) => {
      const monthly = Array.isArray(data?.monthly) ? data.monthly : [];
      return monthly?.find((m) => m?.year === MarketShareRTOYearVersus) || null;
    })
    .filter(Boolean)
    .map((item) => item?.[selectedMonth] ?? 0) // fallback to 0 if month missing
    .reduce((acc, item) => acc + (item || 0), 0);

  const Statedata4VersusMonthly = {
    labels: BrandNames?.map((brandName) =>
      StatesYearlyData?.find((obj) => obj.brand === brandName)
    )
      ?.filter(Boolean)
      ?.map((data) => data.brand.split(" ")[0]),

    datasets: [
      {
        data: (BrandNames || []).map((brandName) => {
          const stateData = BrandNames
  .map((brandName) =>
    StatesYearlyData?.find((obj) => obj.brand === brandName)
  )
  ?.filter(Boolean) || [];
          const brandData = stateData.find((obj) => obj?.brand === brandName);

          if (!brandData || !Array.isArray(brandData.monthly)) return 0;

          const yearData = brandData.monthly.find(
            (m) => m?.year === MarketShareRTOYearVersus
          );

          const value = yearData?.[selectedMonth] ?? 0;
          const total = StatetotalcarsoldMonthly || 1; // avoid division by 0

          return parseFloat(((value / total) * 100).toFixed(2));
        }),

        backgroundColor: colors,
        borderColor: "#fff",
        borderRadius: 10,
      },
    ],
  };

  const monthlyDataState = (BrandNames || [])
    .map((brandName) => {
      const stateData = BrandNames
  .map((brandName) =>
    StatesYearlyData?.find((obj) => obj.brand === brandName)
  )
  ?.filter(Boolean) || [];
      const brandData = stateData?.find((obj) => obj?.brand === brandName);

      if (!brandData || !Array.isArray(brandData.monthly)) return null;

      const monthly = brandData?.monthly?.find(
        (m) => m?.year === MarketShareRTOYearVersus
      );

      if (!monthly) return null;

      const value = monthly?.[selectedMonth] ?? 0;
      const total = StatetotalcarsoldMonthly || 1; // avoid division by 0

      return {
        brand: brandData.brand || brandName, // fallback to brandName if missing
        percentage: parseFloat(((value / total) * 100).toFixed(2)),
      };
    })
    .filter(Boolean);
  const data4 = {
    labels: BrandNames?.map((brandName) =>
      StatesYearlyData?.find((obj) => obj.brand === brandName)
    )
      ?.filter(Boolean)
      ?.map((data) => data.brand.split(" ")[0]),
    datasets: [
      {
        data: BrandNames?.map((brandName) =>
          StatesYearlyData?.find((obj) => obj.brand === brandName)
        )
          ?.filter(Boolean)
          ?.map((data) =>
            (
              parseFloat(data[MarketShareRTOYearVersus] / Statetotalcarsold2) *
              100
            ).toFixed(2)
          ),
        backgroundColor: colors,
        borderColor: "#fff", // usually white or background color,
        borderRadius: 10,
      },
    ],
  };

  return (
    <div className="w-full flex items-center justify-between gap-[1rem] border-[1px] border-[#cfcfd7] rounded-[12px] flex-col py-[1rem] px-[1rem]  glass-card">
      <div className="w-full flex items-center justify-between ">
        <h1 className="text-[1rem] font-2 flex gap-[1rem]">
          Market Shares{" "}
          <span className="text-color-9-70">
            {selectedMonth !== "Select" ? "MTD" : "YTD"}
          </span>
        </h1>
        <div className="flex items-center justify-center gap-[.5rem]">
          <button
            className={`text-[#0b85ff] text-[.875rem] flex items-center justify-between gap-[.25rem] cursor-pointer relative px-[.5rem] py-[.25rem] border-[1px] border-[#0b85ff] rounded-[8px] ${
              MarketShareRTOYearViewVersus && "rounded-b-[0px] border-b-[0px] "
            }`}
            onClick={() => {
              setMarketShareRTOYearviewVersus(!MarketShareRTOYearViewVersus);
            }}
          >
            {MarketShareRTOYearVersus}{" "}
            <RiArrowDropDownLine className="text-[1.25rem] font-normal" />
            <div
              className={`absolute top-[100%]   left-[-1px] rounded-[8px] bg-[white] z-[10] bg-white  border-[#0b85ff] overflow-y-scroll transition-all duration-200 ${
                MarketShareRTOYearViewVersus
                  ? "w-[72.185px] h-[100px] border-[1px] border-t-[0px] rounded-t-[0px]"
                  : "h-[0px] w-[0px]"
              }`}
              style={{ scrollbarWidth: "none" }}
            >
              {BrandNames
  .map((brandName) =>
    RTOData?.find((obj) => obj.brand === brandName)
  )
  ?.filter(Boolean)?.[0] &&
                Object.keys(BrandNames
  .map((brandName) =>
    RTOData?.find((obj) => obj.brand === brandName)
  )
  ?.filter(Boolean)[0])
                  ?.filter((k) => k !== "brand" && k !== "monthly")
                  ?.map((year, i) => {
                    return (
                      <h1
                        key={i}
                        className={`py-[.25rem] px-[.5rem] `}
                        onClick={() => {
                          setMarketShareRTOYearVersus(year);
                          setShowMonthlyData(false);
                          setSelectedMonth("Select");
                        }}
                      >
                        {year}
                      </h1>
                    );
                  })}
            </div>
          </button>{" "}
          {months.length !== 0 && (
            <button
              className={`text-[#0b85ff] text-[.875rem] flex items-center justify-between gap-[.25rem] cursor-pointer relative px-[.5rem] py-[.25rem] border-[1px] border-[#0b85ff] rounded-[8px] ${
                SelectedMonthShow && "rounded-b-[0px] border-b-[0px] "
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

      <div className="w-full  flex items-center justify-between gap-[.5rem] overflow-hidden">
        <div className="w-[32%] bg-[#F5F5F5] border-[1px] border-[#cfcfd7] h-full rounded-[10px] p-[1rem] flex flex-col items-center justify-start gap-[.5rem] ">
          <div className="flex w-full flex-col items-start gap-[.5rem] justify-center ">
            <h1 className="text-[1rem] font-medium flex items-center gap-[.5rem]">
              <span className="capitalize">{selectedRTO?.split(" ")?.[0]}</span>
            </h1>

            <div className="w-full  h-[250px]">
              <Doughnut
                data={showMonthlyData ? RTOdata4VersusMonthly : RTOdata4Versus}
                options={options3}
              />
            </div>
          </div>

          <div className=" flex flex-wrap gap-x-[1rem] gap-y-[.5rem] items-center justify-between">
            {showMonthlyData &&
              selectedMonth !== "Select" &&
              monthlyDataRTO
                ?.sort(
                  (a, b) => parseFloat(b.percentage) - parseFloat(a.percentage)
                )
                ?.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-[.5rem]  w-[47%] "
                    >
                      <div className="flex items-center gap-[.25rem]">
                        <span
                          className={`w-[15px] h-[4px]  rounded-full flex-shrink-0`}
                          style={{ background: `${colors[i]}` }}
                        ></span>{" "}
                        <h1 className="text-[.6rem] font-medium ">
                          {" "}
                          {item.brand.split(" ")[0]}{" "}
                        </h1>
                      </div>
                      <h1 className="text-[.6rem] font-medium   w-[45px] flex items-center justify-end">
                        {" "}
                        {parseFloat(item["percentage"]).toFixed(2)}%
                      </h1>
                    </div>
                  );
                })}

            {!showMonthlyData &&
              BrandNames?.map((brandName) =>
                RTOData?.find((obj) => obj.brand === brandName)
              )
                ?.filter(Boolean)
                ?.map((item) => {
                  const percentage =
                    (item[MarketShareRTOYearVersus] / RTOtotalcarsold2Versus) *
                    100;
                  return { ...item, percentage }; // attach percentage for sorting
                })
                ?.sort((a, b) => b.percentage - a.percentage)
                ?.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-[.5rem]  w-[47%] "
                    >
                      <div className="flex items-center gap-[.25rem]">
                        <span
                          className={`w-[15px] h-[4px]  rounded-full flex-shrink-0`}
                          style={{ background: `${colors[i]}` }}
                        ></span>{" "}
                        <h1 className="text-[.6rem] font-medium ">
                          {" "}
                          {item.brand.split(" ")[0]}{" "}
                        </h1>
                      </div>
                      <h1 className="text-[.6rem] font-medium   w-[45px] flex items-center justify-end">
                        {" "}
                        {parseFloat(
                          (
                            (item[MarketShareRTOYearVersus] /
                              RTOtotalcarsold2Versus) *
                            100
                          ).toFixed(2)
                        )}{" "}
                        %
                      </h1>
                    </div>
                  );
                })}
          </div>
        </div>

        <div className="w-[32%] bg-[#F5F5F5] border-[1px] border-[#cfcfd7] h-full rounded-[10px] p-[1rem] flex flex-col items-center justify-start gap-[.5rem]">
          <div className="flex flex-col w-full items-start justify-center gap-[.5rem]">
            <h1 className="text-[1rem] font-medium flex items-center gap-[.5rem]">
              <span className="capitalize">{selectedState}</span>
            </h1>
            <div className="w-full  h-[250px]">
              <Doughnut
                data={showMonthlyData ? Statedata4VersusMonthly : data4}
                options={options3}
              />
            </div>
          </div>

          <div className=" flex flex-wrap gap-x-[1rem] gap-y-[.5rem] items-center justify-between">
            {showMonthlyData &&
              selectedMonth !== "Select" &&
              monthlyDataState?.sort(
                  (a, b) => parseFloat(b.percentage) - parseFloat(a.percentage)
                )?.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-[.5rem]  w-[47%] "
                  >
                    <div className="flex items-center gap-[.25rem]">
                      <span
                        className={`w-[15px] h-[4px]  rounded-full flex-shrink-0`}
                        style={{ background: `${colors[i]}` }}
                      ></span>{" "}
                      <h1 className="text-[.6rem] font-medium ">
                        {" "}
                        {item.brand.split(" ")[0]}{" "}
                      </h1>
                    </div>
                    <h1 className="text-[.6rem] font-medium   w-[45px] flex items-center justify-end">
                      {" "}
                      {parseFloat(item["percentage"]).toFixed(2)}%
                    </h1>
                  </div>
                );
              })}

            {!showMonthlyData &&
              BrandNames?.map((brandName) =>
                StatesYearlyData?.find((obj) => obj.brand === brandName)
              )
                .filter(Boolean)
                ?.map((item) => {
                  const percentage =
                    (item[MarketShareRTOYearVersus] / Statetotalcarsold2) * 100;
                  return { ...item, percentage }; // attach percentage for sorting
                })
                ?.sort((a, b) => b.percentage - a.percentage)
                .map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-[.5rem]  w-[47%] "
                    >
                      <div className="flex items-center gap-[.25rem]">
                        <span
                          className={`w-[15px] h-[4px]  rounded-full flex-shrink-0`}
                          style={{ background: `${colors[i]}` }}
                        ></span>{" "}
                        <h1 className="text-[.6rem] font-medium ">
                          {" "}
                          {item.brand.split(" ")[0]}{" "}
                        </h1>
                      </div>
                      <h1 className="text-[.6rem] font-medium   w-[45px] flex items-center justify-end">
                        {" "}
                        {parseFloat(
                          (
                            (item[MarketShareRTOYearVersus] /
                              Statetotalcarsold2) *
                            100
                          ).toFixed(2)
                        )}{" "}
                        %
                      </h1>
                    </div>
                  );
                })}
          </div>
        </div>

        <div className="w-[32%] bg-[#F5F5F5] border-[1px] border-[#cfcfd7] h-full rounded-[10px] p-[1rem] flex flex-col items-center justify-start gap-[.5rem]">
          <div className="w-full flex flex-col items-start justify-center gap-[.5rem] ">
            <h1 className="text-[1rem] font-medium flex items-center gap-[.5rem] text-center w-full">
              India
            </h1>

            <div className="w-full flex  h-[250px] ">
              <Doughnut
                data={showMonthlyData ? Indiadata4VersusMonthly : data5}
                options={options3}
              />
            </div>
          </div>

          <div className=" flex flex-wrap gap-x-[1rem] gap-y-[.5rem] items-center justify-between">
            {showMonthlyData &&
              selectedMonth !== "Select" &&
              monthlyDataIndia?.sort(
                  (a, b) => parseFloat(b.percentage) - parseFloat(a.percentage)
                )?.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-[.5rem]  w-[47%] "
                  >
                    <div className="flex items-center gap-[.25rem]">
                      <span
                        className={`w-[15px] h-[4px]  rounded-full flex-shrink-0`}
                        style={{ background: `${colors[i]}` }}
                      ></span>{" "}
                      <h1 className="text-[.6rem] font-medium ">
                        {" "}
                        {item.brand.split(" ")[0]}{" "}
                      </h1>
                    </div>
                    <h1 className="text-[.6rem] font-medium   w-[45px] flex items-center justify-end">
                      {" "}
                      {parseFloat(item["percentage"]).toFixed(2)}%
                    </h1>
                  </div>
                );
              })}

            {!showMonthlyData &&
              BrandNames.map((brandName) =>
                PanIndiaData.find((obj) => obj.brand === brandName)
              )
                .filter(Boolean)
                ?.map((item) => {
                  const percentage =
                    (item[MarketShareRTOYearVersus] / panindiatotalcarsold) * 100;
                  return { ...item, percentage }; // attach percentage for sorting
                })
                ?.sort((a, b) => b.percentage - a.percentage)
                .map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-[.5rem]  w-[47%]"
                    >
                      <div className="flex items-center gap-[.25rem]">
                        <span
                          className={`w-[15px] h-[4px]  rounded-full flex-shrink-0`}
                          style={{ background: `${colors[i]}` }}
                        ></span>{" "}
                        <h1 className="text-[.6rem] font-medium ">
                          {" "}
                          {item.brand.split(" ")[0]}{" "}
                        </h1>
                      </div>
                      <h1 className="text-[.6rem] font-medium  w-[50px] flex items-center justify-end">
                        {" "}
                        {parseFloat(
                          (
                            (item[MarketShareRTOYearVersus] /
                              panindiatotalcarsold) *
                            100
                          ).toFixed(2)
                        )}{" "}
                        %
                      </h1>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketShare;
