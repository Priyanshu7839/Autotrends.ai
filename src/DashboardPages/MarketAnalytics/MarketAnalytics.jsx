import { use } from "react";
import {
  CarSoldRTO,
  CountryErrorPopup,
  MarketShare,
  MonthlyAnalysisIndia,
  MonthlyAnalysisRTO,
} from "../../DashboardComponents";
import BrandNames from "../../Data/BrandNamesSegmentWise.json";
import Countries from "../../Data/Countries.json";
// import PanIndiaData from "../../Data/PanIndiaData.json";
import RTOs from "../../Data/Rtos.json";
import States from "../../Data/States.json";
import { setRto, setState } from "../../Store/DealerLocationSlice";
import Bronze from "../../assets/Images/Bronze.png";
import Gold from "../../assets/Images/Gold.png";
import Silver from "../../assets/Images/Silver.png";
import down from "../../assets/Images/downtrend.png";
import up from "../../assets/Images/up.png";
import {
  FetchIndiaData,
  FetchRTOData,
  FetchStateData,
} from "../../utils/APICalls";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Filler,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import ReactCountryFlag from "react-country-flag";
import { BiLineChart } from "react-icons/bi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import {
  FaCity,
  FaCarAlt,
  FaCarSide,
  FaChartBar,
  FaInfoCircle,
} from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import { MdAutoGraph, MdModeEdit } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Filler
);

const MarketAnalytics = () => {
  const dealershipDetails = useSelector((state) => state.DealershipDetails);
  const DealerLocation = useSelector((state) => state.DealerLocation);

  const dispatch = useDispatch();

  //* /////////////////////////////////State And RTO Updates////////////////////////////////////////////////////////////
  const RTO = RTOs?.[DealerLocation?.state]?.map((item) => item.name); //? Here I am Fetching the Rto using state and putting the array in the RTO Variable

  
  const DealershipState = States.filter((item) =>
    item
      .toLowerCase()
      .includes(dealershipDetails?.dealership_state.toLowerCase())
  );
  useEffect(() => {
    dispatch(setState(DealershipState));
    dispatch(setRto(RTO?.filter((item)=>item.toLowerCase().includes(dealershipDetails?.city?.toLowerCase()))||RTO?.[0]));
  }, []);



  //<---------------------------------- State Select------------------------------------------------------------------>
  const [showStates, setShowStates] = useState(false);
  //<---------------------------------------------------------------------------------------------------------------->

  // -----------------------------------Rto Select------------------------------------------------------------------->
  const [showRTO, setShowRTO] = useState(false);
  useEffect(() => {
    dispatch(setRto(RTO?.filter((item)=>item.toLowerCase().includes(dealershipDetails?.city?.toLowerCase()))?.[0]||RTO?.[0]));
  }, [DealerLocation?.state]); //? when a state changes it will change it to the first rto of that state
  //<----------------------------------------------------------------------------------------------------------------->
  // * /////////////////////////RTO Filter////////////////////////////////////////////////

  const [RTOFilter, setRTOFilter] = useState("");
  const [StateFilter, setStateFilter] = useState("");

  // * ///////////////////////////////////////////////////////////////////////////////////
  //* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [StatesYearlyData, setStatesYearlyData] = useState([]);
  const [RTOData, setRTOData] = useState([]);
  const [PanIndiaData, setPanIndiaData] = useState([]);
  // * ////////////////////////////////////VAHAN PORTAL DATA FETCH////////////////////////////////////////////////////////////


  useEffect(() => {
    const FetchVahanPortal = async () => {
      if (DealerLocation?.state === "") {
        return;
      }
      toast.promise(
        (async () => {
          const result = await FetchStateData(DealerLocation?.state);
          setStatesYearlyData(result.data.data);
        })(),
        {
          loading: "Loading State Data",
          success: "State Data Loaded",
          error: "Error Loading State Data",
          position: "bottom-center",
        }
      );
    };

    FetchVahanPortal();
  }, [DealerLocation.state]);

  useEffect(() => {
    const FetchVahanPortal1 = async () => {
      if (DealerLocation?.rto === "") {
        return;
      }
      if (DealerLocation?.state === "") {
        return;
      }

      toast.promise(
        (async () => {
          const result = await FetchRTOData(
            DealerLocation?.state,
            DealerLocation?.rto
          );
          setRTOData(result.data.data);
        })(),
        {
          loading: "Loading RTO Data",
          success: "RTO Data Loaded",
          error: "Error Loading RTO Data",
          position: "bottom-center",
        }
      );
    };
    FetchVahanPortal1();
  }, [DealerLocation?.state, DealerLocation?.rto]);

  useEffect(() => {
    const FetchVahanPortal3 = async () => {
      toast.promise(
        (async () => {
          const result = await FetchIndiaData();

          setPanIndiaData(
            BrandNames.map((brandName) =>
              result.data.data?.find((obj) => obj.brand === brandName)
            )?.filter(Boolean)
          );
        })(),
        {
          loading: "Loading Country Data",
          success: "Country Data Loaded",
          error: "Error Loading Country Data",
          position: "bottom-center",
        }
      );
    };
    FetchVahanPortal3();
  }, []);
  //* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const panindiatotalcarsold2025 = PanIndiaData?.reduce(
    (sum, b) => sum + (b[`${new Date().getFullYear()}`] || 0),
    0
  );

  const Statetotalcarsold2025 = BrandNames.map((brandName) =>
    StatesYearlyData?.find((obj) => obj.brand === brandName)
  )
    ?.filter(Boolean)
    ?.reduce((sum, b) => sum + (b[`${new Date().getFullYear()}`] || 0), 0);

  const dealershipBrand =
    BrandNames.map((brandName) =>
      StatesYearlyData?.find((obj) => obj.brand === brandName)
    )
      ?.filter(Boolean)
      ?.find((item) =>
        item.brand
          ?.toLowerCase()
          .includes(dealershipDetails?.dealership_brand?.toLowerCase() ?? "")
      )?.brand ?? "Unknown";

  const DealershipbrandStateCarSold =
    BrandNames.map((brandName) =>
      StatesYearlyData?.find((obj) => obj.brand === brandName)
    )
      ?.filter(Boolean)
      ?.find((item) =>
        item.brand
          ?.toLowerCase()
          .includes(dealershipDetails?.dealership_brand?.toLowerCase() ?? "")
      )?.[new Date().getFullYear()] ?? 0;

  const DealershipbrandIndiaCarSold =
    PanIndiaData?.find((item) =>
      item.brand
        ?.toLowerCase()
        .includes(dealershipDetails?.dealership_brand?.toLowerCase() ?? "")
    )?.[new Date().getFullYear()] ?? 0;

  const DealershipBrandIndiaMarketShare = parseFloat(
    (DealershipbrandIndiaCarSold / panindiatotalcarsold2025) * 100
  ).toFixed(2);

  const DealershipBrandStateMarketShare = parseFloat(
    (DealershipbrandStateCarSold / Statetotalcarsold2025) * 100
  ).toFixed(2);

  const top3Brands =
    PanIndiaData?.length > 0
      ? [...PanIndiaData]
          .sort((a, b) => (b[`${new Date().getFullYear()}`] || 0) - (a[`${new Date().getFullYear()}`] || 0))
          .slice(0, 3)
      : [];

  const allMonths = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const currentMonthIndex = new Date().getMonth();

  const monthsuptoprev = allMonths.slice(0, currentMonthIndex);
  const monthsuptonow = allMonths.slice(0, currentMonthIndex + 1);

  //* /////////////////////////////////OEM Insights//////////////////////////////////////////////////////////////////////////

  const [DescsortedIndiaOEMStatsArray,setDescsortedIndiaOEMStatsArray] = useState([]);
  const [AscsortedIndiaOEMStatsArray,setAscsortedIndiaOEMStatsArray] = useState([]);
  
  const [DescsortedRTOOEMStatsArray,setDescsortedRTOOEMStatsArray] = useState([]);
  const [AscsortedRTOOEMStatsArray,setAscsortedRTOOEMStatsArray] = useState([]);
  

 useEffect(()=>{
   const IndiaOEMStatsArray =
    PanIndiaData?.map((item) => {
      const monthly2024 = item.monthly.find((m) => m.year === `${new Date().getFullYear() - 1}`) || {};
      const monthly2025 = item.monthly.find((m) => m.year === `${new Date().getFullYear()}`) || {};

      const sum = (obj) =>
        monthsuptoprev.reduce((acc, mon) => acc + (obj[mon] ?? 0), 0);

      const sum2024 = sum(monthly2024);
      const sum2025 = sum(monthly2025);

      const diff = sum2024 === 0 ? 0 : ((sum2025 - sum2024) / sum2024) * 100;

      return {
        brand: item.brand,
        diff: parseFloat(diff.toFixed(2)),
      };
    }) || [];


  // Sort descending
 setDescsortedIndiaOEMStatsArray( [...IndiaOEMStatsArray].sort(
    (a, b) => b.diff - a.diff
  ))

  // Sort ascending
 setAscsortedIndiaOEMStatsArray([...IndiaOEMStatsArray].sort(
    (a, b) => a.diff - b.diff
  ))
 },[PanIndiaData])

 useEffect(()=>{
   const RTOOEMStatsArray =
    RTOData?.map((item) => {
      const monthly2024 = item.monthly.find((m) => m.year === `${new Date().getFullYear() - 1}`) || {};
      const monthly2025 = item.monthly.find((m) => m.year === `${new Date().getFullYear()}`) || {};

      const sum = (obj) =>
        monthsuptoprev.reduce((acc, mon) => acc + (obj[mon] ?? 0), 0);

      const sum2024 = sum(monthly2024);
      const sum2025 = sum(monthly2025);

      const diff = sum2024 === 0 ? 0 : ((sum2025 - sum2024) / sum2024) * 100;

      return {
        brand: item.brand,
        diff: parseFloat(diff.toFixed(2)),
      };
    }) || [];


  // Sort descending
 setDescsortedRTOOEMStatsArray( [...RTOOEMStatsArray].sort(
    (a, b) => b.diff - a.diff
  ))

  // Sort ascending
 setAscsortedRTOOEMStatsArray([...RTOOEMStatsArray].sort(
    (a, b) => a.diff - b.diff
  ))
 },[RTOData])

  //* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const headers = [
    {
      name: "Total Cars Registered",
      count: Statetotalcarsold2025,
      changes: `${panindiatotalcarsold2025} in India`,
      // image: up,
    },
    {
      name: `${dealershipDetails?.dealership_brand} Cars Registered`,
      count: DealershipbrandStateCarSold,
      changes: `${DealershipbrandIndiaCarSold} in India`,
      // image: down,
    },
    {
      name: `${dealershipDetails?.dealership_brand} Market share`,
      count: `${DealershipBrandStateMarketShare} %`,
      changes: `${DealershipBrandIndiaMarketShare}% in India`,
      // image: up,
    },
  ];

  const [selectedBrands, setselectedBrands] = useState([
    "Maruti Suzuki India Ltd",
    "Mahindra & Mahindra Limited",
    "Kia India Private Limited",
    "Hyundai Motor India Ltd",
  ]);
  const [selectedBrandsView, setSelectedBrandsView] = useState(false);

  const colors = [
    "#00c853", // original green
    "#0b85ff", // original blue
    "#8b0000", // dark red
    "#a67c00", // dark mustard
    "#002b4d", // navy blue
    "#2e7d32", // dark muted green
    "#1565c0", // deep soft blue
    "#bf360c", // dark burnt orange
    "#7f0000", // dark maroon
    "#006064", // deep teal
    "#3e2723", // deep coffee brown
    "#512da8", // dark muted purple
    "#880e4f", // dark pink
    "#558b2f", // forest green
    "#303f9f", // twilight blue
    "#6a1b9a", // grape purple
    "#00796b", // dark teal
    "#ef6c00", // warm burnt orange
    "#455a64", // dark blue gray
    "#5d4037", // dark brown
    "#0277bd", // dark sky blue
    "#c62828", // brick red
    "#1976d2", // navy blue
    "#388e3c", // dark garden green
    "#b28900", // warm mustard
  ];

  //<---------------------------------------------------------------------------------------->

  const [showCountries, setShowCountries] = useState(false);
  const [showCountryError, setShowCountryError] = useState(false);

  //<-----------------------For Cars Sold In India------------------------------------------->

  // ---------------------------------------------------------------------------------------->
  // ---------------------------For Top Brands 5 Years Graph--------------------------------->

  const labels = monthsuptonow

    console.log(PanIndiaData?.filter((data) => selectedBrands.includes(data.brand))?.[0]?.["monthly"]?.filter((y)=>y.year===`${new Date().getFullYear()}`)?.[0]?.["JAN"])


  const datasets =
    PanIndiaData?.filter((data) => selectedBrands.includes(data.brand))?.map(
      (data, index) => {
        const years = Object.keys(data).filter(
          (k) => k !== "brand" && k !== "monthly"
        );
        const col = colors[index] || "rgba(0,0,0,0.5)";
        return {
          label: data.brand,
          data: monthsuptonow?.map((month)=>data?.["monthly"]?.filter((y)=>y.year=== `${new Date().getFullYear()}`)?.[0]?.[month]),
          backgroundColor: "rgba(0, 0, 255, 0.1)",
          borderColor: col,
          borderRadius: 0,
          tension: 0.4,
          borderWidth: 1.5,
          pointRadius: 3,
          yAxisID: "y",
        };
      }
    ) || [];
  

  const data7 = { labels, datasets };

  const options2 = {
    responsive: true, // Make the chart responsive to screen size
    maintainAspectRatio: false, // Allow the chart to resize according to the container
    plugins: {
      legend: {
        display: false, // Position of the legend ('top', 'bottom', 'left', 'right')
      },
      tooltip: {
        enabled: true, // Show tooltips when hovering over bars
        titleColor: "#ffffff",
      },
      filler: {
        propagate: true,
      },
    },
    interaction: {
      intersect: false,
    },
    stacked: false,
    scales: {
      x: {
        beginAtZero: true, // Start the x-axis at zero
        grid: {
          display: false, // Disable grid lines on the x-axis
        },
        ticks: {
          display: true, // Remove x-axis labels
          color: "#ffffff",
        },
      },
      y: {
        type: "linear",
        position: "left",
        beginAtZero: true, // Start the y-axis at zero
        grid: {
          display: false,
          borderDash: [4, 4],
        },
        ticks: {
          display: true, // Remove x-axis labels
          color: "#ffffff",
        },
      },
    },
  };

  //<---------------------------------------------------------------------------------------->
  const [selectedBrandStateMonthly, setselectedBrandStateMonthly] =
    useState(dealershipBrand);

  const [selectedBrandStateMonthlyView, setselectedBrandStateMonthlyView] =
    useState(false);

  const data9 = {
    labels: monthsuptonow,
    datasets: BrandNames.map((brandName) =>
      StatesYearlyData?.find((obj) => obj.brand === brandName)
    )
      ?.filter(Boolean)
      ?.filter((data) => data.brand === selectedBrandStateMonthly)
      ?.flatMap((data, index) =>
        (data?.["monthly"] || [])?.map((dat, i) => {
          const col = colors[i];
          const Months = Object.keys(dat || {})?.filter((k) => k !== "year");

          return {
            label: dat.year,
            data: Months.map((month) => dat?.[month]),
            backgroundColor: "rgba(0, 0, 255, 0.1)",
            borderColor: col,
            borderRadius: 0,
            tension: 0.4,
            borderWidth: 1.5,
            pointRadius: 3,
          };
        })
      ),
  };
  //--------------------------------------------Monthly Data analysis in india------------------>

  return (
    <div className="w-[calc(100vw-230px)] h-[100vh]  p-[1rem] font-roboto ">
      <div
        className={`w-full h-full  flex flex-col gap-[1rem] border-[1px] border-[#cfcfd5] rounded-[16px] bg-white   ${
          showCountryError
            ? "p-[0] relative overflow-hidden"
            : "p-[1.25rem] overflow-y-scroll"
        }`}
        style={{ scrollbarWidth: "none" }}
      >
        {/* ----------------------------------------------- */}
        <CountryErrorPopup
          showCountryError={showCountryError}
          setShowCountryError={setShowCountryError}
        />
        {/* ----------------------------------------------- */}

        <div className="flex flex-col gap-[1rem] p-[1rem] border-[1px] border-[#cfcfd5] rounded-[16px] bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A] backdrop-blur-[48px] shadow-[0px_8_px_32px_rgba(2,133,255,0.078)] hover:shadow-[0_12px_40px_rgba(2,133,255,0.12)] transition-shadow duration-[0.3s]">


 <div className="flex items-center justify-between rounded-[12px] ">
          <h1 className="font-medium text-[1.65rem] tracking-wide flex items-center gap-[1rem] text-white">
            <MdAutoGraph className="" />
            Market Analytics
          </h1>

          <div className="flex items-center justify-center gap-[.5rem]">
            <div
              className={`px-[1rem] py-[.25rem] rounded-[8px] border-[1px] border-[#ffffff4d] text-[white] flex items-center justify-center gap-[.1rem] relative cursor-pointer ${
                showCountries && "border-b-[0px] rounded-b-[0px]"
              }`}
              onClick={() => {
                setShowCountries(!showCountries);
              }}
            >
              <ReactCountryFlag
                countryCode="IN"
                svg
                className="mt-[1px] mr-[5px]"
              />
              India
              <RiArrowDropDownLine className="text-[1.25rem] mt-[2px]" />
              <div
                className={`absolute top-[100%] left-[50%] translate-x-[-50%]  rounded-[8px] rounded-t-[0px] border-t-[0px] bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A] backdrop-blur-[48px]  overflow-y-scroll transition-all duration-150 z-[30] w-[calc(100%+2px)] border-[#ffffff4d] ${
                  showCountries ? "h-[500px] border-[1px]" : "h-[0px] "
                }`}
                style={{ scrollbarWidth: "none" }}
              >
                {Countries.map((Country, i) => {
                  return (
                    <h1
                      key={i}
                      onClick={() => {
                        setShowCountryError(true);
                      }}
                      className={`px-[1rem] py-[.5rem]  hover:bg-[rgba(0,0,0,0.1)] cursor-default text-white text-[.875rem] flex items-center`}
                    >
                      <ReactCountryFlag
                        countryCode={Country.code}
                        svg
                        className="mt-[1px] mr-[5px]"
                      />

                      {Country.name}
                    </h1>
                  );
                })}
              </div>
            </div>
            <div
              className={`px-[1rem] py-[.25rem] rounded-[8px] border-[1px] border-[#ffffff4d] text-[#fff] flex items-center justify-center gap-[.1rem] relative cursor-pointer capitalize
                ${showStates && "border-b-[0px] rounded-b-[0px]"}
                `}
              onClick={() => {
                setShowStates(!showStates);
              }}
            >
              {DealerLocation?.state}
              <RiArrowDropDownLine className="text-[1.25rem] mt-[2px]" />
              <div
                className={`absolute  top-[100%] left-[-1px]  border-[#ffffff4d]  rounded-[8px]   overflow-y-scroll transition-[height] duration-150 z-10 bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A] backdrop-blur-[48px] ${
                  showStates
                    ? "border-[1px] w-[calc(100%+2px)] h-[300px] border-t-[0px] rounded-t-[0px]"
                    : "w-[0px] h-[0px] border-[0px]"
                }`}
                style={{ scrollbarWidth: "none" }}
              >
                 <input
                  type="text"
                  value={StateFilter}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  onChange={(e) => {
                    setStateFilter(e.target.value);
                  }}
                  // placeholder="Enter RTO"
                  className=" w-full px-[1rem] py-[.25rem] border-y-[1px] border-[#ffffff4d] outline-none"
                />
                {States?.filter((state)=>state.toLowerCase().includes(StateFilter.toLocaleLowerCase()))?.map((State, i) => {
                  return (
                    <h1
                      key={i}
                      onClick={() => {
                        dispatch(setState(State));
                      }}
                      className={`capitalize px-[1rem] py-[.5rem]  hover:bg-[rgba(0,0,0,0.1)] cursor-default text-white text-[.875rem] flex items-center `}
                    >
                      {State}
                    </h1>
                  );
                })}
              </div>
            </div>
            <div
              className={`px-[1rem] py-[.25rem] rounded-[8px] border-[1px] border-[#ffffff4d] text-[#ffffff] flex items-center justify-start gap-[.1rem] relative cursor-pointer capitalize w-[175px] whitespace-nowrap
                ${
                  showRTO
                    ? "border-b-[0px] rounded-b-[0px] overflow-y-visible"
                    : "overflow-x-scroll"
                }
                `}
              style={{ scrollbarWidth: "none" }}
              onClick={() => {
                setShowRTO(!showRTO);
              }}
            >
              {DealerLocation?.rto?.split("(")?.[0]}
              <RiArrowDropDownLine className="text-[1.25rem] mt-[2px]" />
              <div
                className={`absolute  top-[100%] left-[-1px]  border-[#ffffff4d]  rounded-[8px]   overflow-y-scroll transition-[height] duration-150 z-10 bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A] backdrop-blur-[48px] ${
                  showRTO
                    ? "border-[1px] w-[calc(100%+2px)] h-[300px] border-t-[0px] rounded-t-[0px]"
                    : "w-[0px] h-[0px] border-[0px]"
                }`}
                style={{ scrollbarWidth: "none" }}
              >
                 <input
                  type="text"
                  value={RTOFilter}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  onChange={(e) => {
                    setRTOFilter(e.target.value);
                  }}
                  // placeholder="Enter RTO"
                  className=" w-full px-[1rem] py-[.25rem] border-y-[1px] border-[#ffffff4d] outline-none"
                />
                {RTO &&
                  RTO?.map((rto, i) => {
                    return (
                      <h1
                        key={i}
                        onClick={() => {
                          dispatch(setRto(rto));
                        }}
                        className={`capitalize px-[1rem] py-[.5rem]  hover:bg-[rgba(0,0,0,0.1)] cursor-default text-white text-[.875rem] flex items-center `}
                      >
                        {rto?.replace(/\(\s*\d{1,2}-[A-Z]{3}-\d{4}\s*\)/, '').trim()}
                      </h1>
                    );
                  })}
                {!RTO && (
                  <div className="text-center text-[.875rem]">
                    No RTOs Available
                  </div>
                )}
              </div>
            </div>
            <div className="px-[1rem] py-[.25rem] rounded-[8px] border-[1px] border-[#ffffff4d] text-[#ffffff] flex items-center justify-center gap-[.1rem]">
              {dealershipDetails?.dealership_name}
            </div>
          </div>
        </div>

        <div className="w-full flex items-stretch justify-between gap-[1rem]">
          <div className="w-[76%] flex flex-col gap-[1rem]">
            <div className=" flex items-center justify-between">
              {headers.map((head, i) => {
                return (
                  <div
                    key={i}
                    className={`p-[1rem] flex items-center justify-between gap-[.5rem] border-[1px] border-[#ffffff4d] rounded-[12px] w-[31.78%] relative bg-[#FFFFFF26] backdrop-blur-sm shadow-lg text-white`}
                  >
                    <div className="flex flex-col gap-[.5rem]">
                      <h1 className="text-[.875rem] font-medium">
                        {head.name}
                      </h1>
                      <h1 className="text-[2rem] font-bold">{head.count}</h1>
                      <h1 className="text-[.75rem]  text-white/70">
                        {head.changes}
                      </h1>
                    </div>
                    <img src={head.image} alt="" className="w-[40px]" />

                    <h1 className="font-2 text-[.875rem]  absolute top-4 right-5 text-white/70">
                      YTD
                    </h1>
                  </div>
                );
              })}
            </div>

            <div className=" h-[350px] border-[1px] border-[#ffffff4d] rounded-[12px] p-[1rem] flex flex-col gap-[1rem] bg-[#FFFFFF26] backdrop-blur-sm shadow-lg">
              <div className="flex items-center justify-between text-white">
                <h1 className="font-1 font-medium text-[1rem] flex items-center gap-[.5rem]">
                  <BiLineChart />
                  Sales Graph for Top Brands in India
                </h1>
                <div className="flex items-center justify-center gap-[1rem] relative">
                  {PanIndiaData?.filter((data) =>
                    selectedBrands.includes(data.brand)
                  )?.map((brand, index) => {
                    const color = colors[index];
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-center gap-[.5rem]"
                      >
                        <span
                          className="w-[15px] h-[2px]  rounded-full"
                          style={{ background: `${color}` }}
                        ></span>{" "}
                        <h1 className="text-[.75rem] font-medium ">
                          {/* {brand.split(" ")[0]} */}
                          {brand.brand.split(" ")[0]}
                        </h1>
                      </div>
                    );
                  })}

                  <button
                    className={`px-[.5rem] py-[.25rem]  border-[1px] border-[#0b85ff] text-[#0b85ff] bg-[white] rounded-[8px] text-[.75rem] cursor-pointer flex items-center justify-center gap-[.25rem] font-medium relative  ${
                      selectedBrandsView && "border-b-[0px] rounded-b-[0px]"
                    }`}
                    onClick={() => {
                      setSelectedBrandsView(!selectedBrandsView);
                    }}
                  >
                    Select Brands
                    <RiArrowDropDownLine className="text-[1.25rem] mt-[2px]" />
                    <div
                      className={` absolute overflow-y-scroll  bg-[white] z-[10] rounded-[8px]  border-[#0b85ff] top-[100%] left-[-1px] transition-[height] duration-200 ${
                        selectedBrandsView
                          ? "w-[calc(100%+2px)] h-[300px] border-t-[0px] rounded-t-[0px] border-[1px]"
                          : "h-[0px] w-[0px] border-[0px]"
                      }`}
                      style={{ scrollbarWidth: "none" }}
                    >
                      {PanIndiaData?.map((data, i) => {
                        const isChecked = selectedBrands.includes(data.brand);
                        return (
                          <h1
                            key={i}
                            className={`text-[.875rem] px-[.5rem] py-[.5rem] flex item-center gap-[.5rem] 
                            `}
                          >
                            <span className=" flex items-center">
                              <label className="inline-flex items-center space-x-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  className="peer hidden"
                                  checked={isChecked}
                                  onChange={(e) => {
                                    const checked = e.target.checked;
                                    if (checked) {
                                      if (selectedBrands.length < 5) {
                                        setselectedBrands([
                                          ...selectedBrands,
                                          data.brand,
                                        ]);
                                      }
                                    } else {
                                      setselectedBrands(
                                        selectedBrands.filter(
                                          (b) => b !== data.brand
                                        )
                                      );
                                    }
                                  }}
                                />
                                <span
                                  className={`w-4 h-4 flex-shrink-0 rounded border-[1px]  flex items-center justify-center peer-checked:bg-white-600 ${
                                    isChecked
                                      ? "border-[#0b85ff]"
                                      : "border-[#cfcfd7]"
                                  }`}
                                >
                                  <svg
                                    className={` w-3 h-3 text-white ${
                                      isChecked ? "block" : "hidden"
                                    }`}
                                    fill="none"
                                    stroke="#0b85ff"
                                    strokeWidth="3"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                </span>
                                <span className="text-[.75rem]">
                                  {" "}
                                  {data.brand.split(" ")[0]}
                                </span>
                              </label>
                            </span>
                          </h1>
                        );
                      })}
                    </div>
                  </button>
                </div>
              </div>

              <div className="h-full w-full">
                <Line data={data7} options={options2} />
              </div>
            </div>
          </div>
          <div className="w-[24%]  flex flex-col justify-between gap-[.5rem]">
            <div
              className={`p-[1rem] h-full w-full flex items-center justify-between   border-[1px] border-[#ffffff4d] rounded-[12px] bg-[#FFFFFF26] backdrop-blur-sm shadow-lg  `}
            >
              <div className="flex flex-col h-full gap-[.5rem] justify-between">
                <h1 className="text-[.875rem] font-medium text-white">
                  National Market Leader
                </h1>
                <h1 className="text-[1.5rem] font-bold text-[white]">
                  {top3Brands[0]?.brand.split(" ")[0]}
                </h1>
                <h1 className="text-[.75rem] text-white/70">
                  {BrandNames.map((brandName) =>
                    StatesYearlyData?.find((obj) => obj.brand === brandName)
                  )
                    ?.filter(Boolean)
                    ?.find(
                      (item) => item.brand === top3Brands?.[0]?.brand
                    )?.[new Date().getFullYear()] ?? 0}{" "}
                  cars, {top3Brands?.[0]?.[new Date().getFullYear()] ?? 0} in India
                </h1>
              </div>
              <img src={Gold} alt="" className="w-[60px] h-[80px] mr-[10px]" />
            </div>
            <div
              className={`p-[1rem]  h-full w-full flex items-center  gap-[.5rem] border-[1px] border-[#ffffff4d] rounded-[12px] bg-[#FFFFFF26] backdrop-blur-sm shadow-lg justify-between`}
            >
              <div className="flex flex-col gap-[.5rem] justify-between h-full">
                <h1 className="text-[.875rem] font-medium text-white">
                  2<sup>nd</sup> Position
                </h1>
                <h1 className="text-[1.5rem] font-bold text-white ">
                  {top3Brands?.[1]?.brand.split(" ")[0]}
                </h1>
                <h1 className="text-[.75rem] text-white/70">
                  {BrandNames.map((brandName) =>
                    StatesYearlyData?.find((obj) => obj.brand === brandName)
                  )
                    ?.filter(Boolean)
                    ?.find(
                      (item) => item.brand === top3Brands?.[1]?.brand
                    )?.[new Date().getFullYear()] ?? 0}{" "}
                  cars, {top3Brands?.[1]?.[new Date().getFullYear()] ?? 0} in India
                </h1>
              </div>
              <img
                src={Silver}
                alt=""
                className="w-[60px] h-[80px] mr-[10px]"
              />
            </div>
            <div
              className={`p-[1rem]  h-full w-full flex  items-center gap-[.5rem] border-[1px] border-[#ffffff4d] rounded-[12px] justify-between bg-[#FFFFFF26] backdrop-blur-sm shadow-lg`}
            >
              <div className="flex flex-col gap-[.5rem] justify-between h-full">
                <h1 className="text-[.875rem] font-medium text-white">
                  3<sup>rd</sup> Postion
                </h1>
                <h1 className="text-[1.5rem] font-bold text-white">
                  {top3Brands?.[2]?.brand.split(" ")[0]}
                </h1>
                <h1 className="text-[.75rem] text-white/70">
                  {BrandNames.map((brandName) =>
                    StatesYearlyData?.find((obj) => obj.brand === brandName)
                  )
                    ?.filter(Boolean)
                    ?.find(
                      (item) => item.brand === top3Brands?.[2]?.brand
                    )?.[new Date().getFullYear()] ?? 0}{" "}
                  cars, {top3Brands?.[2]?.[new Date().getFullYear()] ?? 0} in India
                </h1>
              </div>
              <img
                src={Bronze}
                alt=""
                className="w-[60px] h-[80px] mr-[10px]"
              />
            </div>
          </div>
        </div>
        </div>

       

        <div className="w-full border-[1px] border-[#cfcfd5] rounded-[12px] p-[1rem] flex flex-col  gap-[.5rem]">
          <h1 className="text-[1rem] font-medium"> OEMs Insights</h1>
          <div className="flex flex-col gap-[1rem]">
           {/* // * //////////////////////////////Stats For RTO Insights//////////////////////////  */}
             <div className="flex gap-[1rem] w-full">
            <div className="w-[49%] border-[1px] border-[#cfcfd5] rounded-[10px] p-[1rem] flex flex-col gap-[1rem]">
              <div className="flex items-center justify-between relative group">
                {" "}
                <h1 className="font-medium flex items-center gap-[.5rem]">
                  Fastest Growing OEMs in {DealerLocation?.rto?.split(" ")?.[0]}{" "}
                  <FaInfoCircle className="text-[#6e6d6d]  " />
                  <p className="px-[1rem] py-[.5rem] bg-[white] rounded-[10px] absolute border-[1px] top-[110%] font-2-book  group-hover:block hidden">
                    Year {`${new Date().getFullYear() - 1}`} {allMonths[currentMonthIndex-1]} vs Year {`${new Date().getFullYear()}`} {allMonths[currentMonthIndex-1]}
                  </p>
                </h1>
                <img src={up} alt="" className="w-[20px] mr-[8px]" />
              </div>
              <div className="w-full flex flex-col gap-[.5rem]">
                <div className="w-full flex items-center justify-between gap-[4rem] text-[.875rem]">
                  <h1>
                    {DescsortedRTOOEMStatsArray?.[0]?.brand.split(" ")[0]}
                  </h1>
                  <h1 className="text-[green] font-medium">
                    +{DescsortedRTOOEMStatsArray?.[0]?.diff}%
                  </h1>
                </div>
                <div className="w-full flex items-center justify-between gap-[4rem] text-[.875rem]">
                  <h1>
                    {DescsortedRTOOEMStatsArray?.[1]?.brand.split(" ")[0]}
                  </h1>
                  <h1 className="text-[green] font-medium">
                    +{DescsortedRTOOEMStatsArray?.[1]?.diff}%
                  </h1>
                </div>
                <div className="w-full flex items-center justify-between gap-[4rem] text-[.875rem]">
                  <h1>
                    {DescsortedRTOOEMStatsArray?.[2]?.brand.split(" ")[0]}
                  </h1>
                  <h1 className="text-[green] font-medium">
                    +{DescsortedRTOOEMStatsArray?.[2]?.diff}%
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-[49%] border-[1px] border-[#cfcfd5] rounded-[10px] p-[1rem] flex flex-col gap-[1rem]">
              <div className="flex items-center justify-between relative group">
                {" "}
                <h1 className="font-medium flex items-center gap-[.5rem]">
                  Declining OEMs  in {DealerLocation?.rto?.split(" ")?.[0]} <FaInfoCircle className="text-[#6e6d6d]  " />
                  <p className="px-[1rem] py-[.5rem] bg-[white] rounded-[10px] absolute border-[1px] top-[110%] font-2-book  group-hover:block hidden">
                    Year {`${new Date().getFullYear() - 1}`} {allMonths[currentMonthIndex-1]} vs Year {`${new Date().getFullYear()}`} {allMonths[currentMonthIndex-1]}
                  </p>
                </h1>
                <img src={down} alt="" className="w-[20px] mr-[7px]" />
              </div>
              <div className="w-full flex flex-col gap-[.5rem]">
                <div className="w-full flex items-center justify-between gap-[4rem] text-[.875rem]">
                  <h1>
                    {AscsortedRTOOEMStatsArray?.[0]?.brand.split(" ")[0]}
                  </h1>
                  <h1 className="text-[red] font-medium">
                    {AscsortedRTOOEMStatsArray?.[0]?.diff}%
                  </h1>
                </div>
                <div className="w-full flex items-center justify-between gap-[4rem] text-[.875rem]">
                  <h1>
                    {AscsortedRTOOEMStatsArray?.[1]?.brand.split(" ")[0]}
                  </h1>
                  <h1 className="text-[red] font-medium">
                    {AscsortedRTOOEMStatsArray?.[1]?.diff}%
                  </h1>
                </div>
                <div className="w-full flex items-center justify-between gap-[4rem] text-[.875rem]">
                  <h1>
                    {AscsortedRTOOEMStatsArray?.[2]?.brand.split(" ")[0]}
                  </h1>
                  <h1 className="text-[red] font-medium">
                    {AscsortedRTOOEMStatsArray?.[2]?.diff}%
                  </h1>
                </div>
              </div>
            </div>
          
          </div>
           {/* // * //////////////////////////////Stats For India Insights//////////////////////////  */}
            <div className="flex gap-[1rem] w-full">
            <div className="w-[49%] border-[1px] border-[#cfcfd5] rounded-[10px] p-[1rem] flex flex-col gap-[1rem]">
              <div className="flex items-center justify-between relative group">
                {" "}
                <h1 className="font-medium flex items-center gap-[.5rem]">
                  Fastest Growing OEMs in India{" "}
                  <FaInfoCircle className="text-[#6e6d6d]  " />
                  <p className="px-[1rem] py-[.5rem] bg-[white] rounded-[10px] absolute border-[1px] top-[110%] font-2-book  group-hover:block hidden">
                    Year {`${new Date().getFullYear() - 1}`} {allMonths[currentMonthIndex-1]} vs Year {`${new Date().getFullYear()}`} {allMonths[currentMonthIndex-1]}
                  </p>
                </h1>
                <img src={up} alt="" className="w-[20px] mr-[8px]" />
              </div>
              <div className="w-full flex flex-col gap-[.5rem]">
                <div className="w-full flex items-center justify-between gap-[4rem] text-[.875rem]">
                  <h1>
                    {DescsortedIndiaOEMStatsArray?.[0]?.brand.split(" ")[0]}
                  </h1>
                  <h1 className="text-[green] font-medium">
                    +{DescsortedIndiaOEMStatsArray?.[0]?.diff}%
                  </h1>
                </div>
                <div className="w-full flex items-center justify-between gap-[4rem] text-[.875rem]">
                  <h1>
                    {DescsortedIndiaOEMStatsArray?.[1]?.brand.split(" ")[0]}
                  </h1>
                  <h1 className="text-[green] font-medium">
                    +{DescsortedIndiaOEMStatsArray?.[1]?.diff}%
                  </h1>
                </div>
                <div className="w-full flex items-center justify-between gap-[4rem] text-[.875rem]">
                  <h1>
                    {DescsortedIndiaOEMStatsArray?.[2]?.brand.split(" ")[0]}
                  </h1>
                  <h1 className="text-[green] font-medium">
                    +{DescsortedIndiaOEMStatsArray?.[2]?.diff}%
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-[49%] border-[1px] border-[#cfcfd5] rounded-[10px] p-[1rem] flex flex-col gap-[1rem]">
              <div className="flex items-center justify-between relative group">
                {" "}
                <h1 className="font-medium flex items-center gap-[.5rem]">
                  Declining OEMs in India <FaInfoCircle className="text-[#6e6d6d]  " />
                  <p className="px-[1rem] py-[.5rem] bg-[white] rounded-[10px] absolute border-[1px] top-[110%] font-2-book  group-hover:block hidden">
                    Year {`${new Date().getFullYear() - 1}`} {allMonths[currentMonthIndex-1]} vs Year {`${new Date().getFullYear()}`} {allMonths[currentMonthIndex-1]}
                  </p>
                </h1>
                <img src={down} alt="" className="w-[20px] mr-[7px]" />
              </div>
              <div className="w-full flex flex-col gap-[.5rem]">
                <div className="w-full flex items-center justify-between gap-[4rem] text-[.875rem]">
                  <h1>
                    {AscsortedIndiaOEMStatsArray?.[0]?.brand.split(" ")[0]}
                  </h1>
                  <h1 className="text-[red] font-medium">
                    {AscsortedIndiaOEMStatsArray?.[0]?.diff}%
                  </h1>
                </div>
                <div className="w-full flex items-center justify-between gap-[4rem] text-[.875rem]">
                  <h1>
                    {AscsortedIndiaOEMStatsArray?.[1]?.brand.split(" ")[0]}
                  </h1>
                  <h1 className="text-[red] font-medium">
                    {AscsortedIndiaOEMStatsArray?.[1]?.diff}%
                  </h1>
                </div>
                <div className="w-full flex items-center justify-between gap-[4rem] text-[.875rem]">
                  <h1>
                    {AscsortedIndiaOEMStatsArray?.[2]?.brand.split(" ")[0]}
                  </h1>
                  <h1 className="text-[red] font-medium">
                    {AscsortedIndiaOEMStatsArray?.[2]?.diff}%
                  </h1>
                </div>
              </div>
            </div>
           
          </div>
         
          </div>
        </div>

        <MarketShare
          StatesYearlyData={StatesYearlyData}
          RTOData={RTOData}
          selectedRTO={DealerLocation?.rto}
          selectedState={DealerLocation?.state}
          PanIndiaData={PanIndiaData}
        />
        <CarSoldRTO
          StatesYearlyData={StatesYearlyData}
          RTOData={RTOData}
          selectedRTO={DealerLocation?.rto}
          selectedState={DealerLocation?.state}
          PanIndiaData={PanIndiaData}
        />

        <MonthlyAnalysisIndia  PanIndiaData={PanIndiaData}/>
        <div className="w-full flex items-stretch justify-between gap-[1rem]">
          <div className="w-[100%] border-[1px] border-[#cfcfd5] rounded-[12px] p-[1rem] flex flex-col gap-[1rem]">
            <div className="flex items-center justify-between">
              <h1 className="font-1 font-medium text-[1rem] flex items-center gap-[.5rem]">
                <FaChartBar />
                Monthly Analysis For {
                  selectedBrandStateMonthly?.split(" ")[0]
                }{" "}
                in {DealerLocation?.state}
              </h1>

              <div className="flex items-center gap-[1rem]">
                <div className="flex items-center justify-center gap-[.5rem]">
                  <span
                    className="w-[15px] h-[2px]  rounded-full"
                    style={{ background: `${colors[0]}` }}
                  ></span>{" "}
                  <h1 className="text-[.75rem] font-medium ">{`${new Date().getFullYear() - 2}`}</h1>
                </div>
                <div className="flex items-center justify-center gap-[.5rem]">
                  <span
                    className="w-[15px] h-[2px]  rounded-full"
                    style={{ background: `${colors[1]}` }}
                  ></span>{" "}
                  <h1 className="text-[.75rem] font-medium ">{`${new Date().getFullYear() - 1}`}</h1>
                </div>
                <div className="flex items-center justify-center gap-[.5rem]">
                  <span
                    className="w-[15px] h-[2px]  rounded-full"
                    style={{ background: `${colors[1]}` }}
                  ></span>{" "}
                  <h1 className="text-[.75rem] font-medium ">{`${new Date().getFullYear()}`}</h1>
                </div>
              </div>
              <button
                className={`text-[#0b85ff] text-[.875rem] flex items-center justify-between gap-[.25rem] cursor-pointer relative px-[.5rem] py-[.25rem] border-[1px] border-[#0b85ff] rounded-[8px]  ${
                  selectedBrandStateMonthlyView && "rounded-b-[0px] border-b-0"
                }`}
                onClick={() => {
                  setselectedBrandStateMonthlyView(
                    !selectedBrandStateMonthlyView
                  );
                }}
              >
                {selectedBrandStateMonthly?.split(" ")[0]}{" "}
                <RiArrowDropDownLine className="text-[1.25rem] font-normal" />
                <div
                  className={`absolute top-[100%] left-[-1px]  border-t-0 rounded-[10px] rounded-t-[0px] border-[#0b85ff] 
                  transition-[height] duration-200 overflow-y-scroll bg-[white] z-10
                  ${
                    selectedBrandStateMonthlyView
                      ? "h-[200px] w-[calc(100%+2px)] border-[1px]"
                      : "w-[0px] h-[0px] border-0"
                  }
                  `}
                  style={{ scrollbarWidth: "none" }}
                >
                  {BrandNames.map((brandName) =>
                    StatesYearlyData?.find((obj) => obj.brand === brandName)
                  )
                    ?.filter(Boolean)
                    ?.map((item, i) => {
                      return (
                        <h1
                          key={i}
                          className={` py-[.25rem] 
                        `}
                          onClick={() => {
                            setselectedBrandStateMonthly(item.brand);
                          }}
                        >
                          {item.brand.split(" ")[0]}
                        </h1>
                      );
                    })}
                </div>
              </button>
            </div>

            <div className="flex items-center justify-start  w-full h-[300px]">
              {/* <Bar data={data} options={options} /> */}

              {StatesYearlyData &&
              StatesYearlyData &&
              Object.keys(
                BrandNames.map((brandName) =>
                  StatesYearlyData?.find((obj) => obj.brand === brandName)
                )?.filter(Boolean)
              )?.filter((k) => k === "monthly").length === 0 ? (
                <h1 className="text-center w-full  text-[.875rem]">
                  As of Now We dont have the monthly comparison for the{" "}
                  {DealerLocation?.state}. We are working on it
                </h1>
              ) : (
                <Line data={data9} options={options2} />
              )}
            </div>
          </div>
        </div>
        <MonthlyAnalysisRTO
          RTOData={RTOData}
          selectedRTO={DealerLocation?.rto}
        />
      </div>
    </div>
  );
};

export default MarketAnalytics;
