import {
  CarSoldRTO,
  CountryErrorPopup,
  FuelMarketShareRTO,
  MarketShare,
  MonthlyAnalysisIndia,
  MonthlyAnalysisRTO,
} from "../../DashboardComponents";
import BrandNames from "../../Data/BrandNamesSegmentWise.json";
import Countries from "../../Data/Countries.json";
import RTOs from "../../Data/Rtos.json";
import States from "../../Data/States.json";
import { setRto, setState } from "../../Store/DealerLocationSlice";
import { setDealershipdetails } from "../../Store/DealershipDetailsSlice";
import { setappKey } from "../../Store/GlobalSigninSlice";
import HyundaiLogoDealershipChange from "../../assets/Images/HyundaiLogoDealershipChange.png";
import Inventoryaging from "../../assets/Images/Inventoryaging.png";
import KiaLogoDealershipChange from "../../assets/Images/KiaLogoDealershipChange.png";
import MahindraLogoDealershipChange from "../../assets/Images/MahindraLogoDealershipChange.png";
import bbndInventory from "../../assets/Images/bbndInventory.png";
import down from "../../assets/Images/downtrend.png";
import Faststar from "../../assets/Images/faststar.png";
import SnowSnails from "../../assets/Images/snowsnails.png";
import up from "../../assets/Images/up.png";
import {
  AverageSalesFetch,
  AverageSalesUpload,
  FastStarsFetch,
  FetchIndiaData,
  FetchRTOData,
  FetchStateData,
  GetBBNDStockUnits,
  GetDealerCodes,
  GetDealershipDetails,
  GetOwnedDealerships,
  InventoryUnitsFetch,
  SlowSnailsFetch,
  StrategyToolsInventoryDataFetch,
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
import { Building2, Car, Hash, MapPin, Package, Snail, Star } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { CiCircleInfo } from "react-icons/ci";
import { FaInfoCircle } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { RiArrowDropDownLine, RiCloseFill } from "react-icons/ri";
import { SlSpeedometer } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { AnimatedGradient } from "../LandingPage/components/background/AnimatedGradient";
import { FloatingParticles } from "../LandingPage/components/background/FloatingParticles";

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

const FastStarsPopup = ({
  className,
  FastStars,
  setFastStarsShow,
  FastStarsShow,
}) => {
  const headerRef = useRef(null);
  const rowRefs = useRef([]);

  const syncScroll = (source, scrollLeft) => {
    if (source !== "header" && headerRef.current) {
      headerRef.current.scrollLeft = scrollLeft;
    }
    rowRefs.current.forEach((ref, index) => {
      if (ref && source !== index) {
        ref.scrollLeft = scrollLeft;
      }
    });
  };

  // Clear old refs on rerender
  rowRefs.current = [];

  const CapitalStuck = (FastStars?.data?.data || []).reduce((acc, item) => {
    const basicPrice = item?.["Basic Price"] || 0;
   
    return acc + Number(basicPrice);
  }, 0);

  

  const capitalStuckRatio = parseFloat(
    (CapitalStuck / FastStars?.data?.totalCapitalStuck) * 100
  ).toFixed(2);

  return (
    <div
      className={`w-full h-full z-[99] bg-[rgba(0,0,0,0.8)]  items-center justify-center ${className} ${
        FastStarsShow ? "flex" : "hidden"
      }`}
    >

      <div className="h-[70%] w-[80%] bg-[white] shadow-md border-[1px] border-[#cfcfd7] rounded-[12px] p-[1rem] flex flex-col gap-[1rem]">
        <h1 className="text-[1.5rem] font-2 w-full flex items-center justify-between">
          <span className="flex items-center justify-center gap-[.5rem]">
            <div className="bg-[#0b85ff] px-[.5rem] py-[.5rem] rounded-[8px]">
              <img src={Faststar} alt="" className="w-[50px]" />
            </div>
            <h1 className="">Fast Stars</h1>
          </span>
          <RiCloseFill
            className="cursor-pointer"
            onClick={() => {
              setFastStarsShow(false);
            }}
          />
        </h1>
        <div className="flex items-center gap-[1rem]">
          <div className="px-[.75rem] py-[.5rem] border-[1px] border-[#cfcfd7b3] rounded-[8px]  w-full ">
            <h1 className=" text-[1.15rem] text-center">
              <h1 className="font-2-book"> Total Units </h1>
              <h1 className="font-2 text-[#0b85ff]">
                {FastStars?.data?.FastStarsCount || 0}
              </h1>
            </h1>
          </div>
          <div className="px-[.75rem] py-[.5rem] border-[1px] border-[#cfcfd7b3] rounded-[8px]  w-full">
            <h1 className=" text-[1.15rem] text-center">
              <h1 className="font-2-book"> Capital Stuck </h1>
              <h1 className="font-2 text-[#43A047]">
                ₹ {CapitalStuck.toLocaleString("en-IN")}
              </h1>
            </h1>
          </div>
          <div className="px-[.75rem] py-[.5rem] border-[1px] border-[#cfcfd7b3] rounded-[8px]  w-full">
            <h1 className=" text-[1.15rem] text-center">
              <h1 className="font-2-book"> % Total capital </h1>
              <h1 className="font-2 text-[#0b85ff]">{capitalStuckRatio} %</h1>
            </h1>
          </div>
          <div className="px-[.75rem] py-[.5rem] border-[1px] border-[#cfcfd7b3] rounded-[8px]  w-full ">
            <h1 className="text-[1.15rem] text-center">
              <h1 className="font-2-book"> Inventory Days </h1>
              <h1 className="font-2 text-[#43A047]">{"<"} 15</h1>
            </h1>
          </div>
        </div>
        <div className="p-[1rem] bg-[#FAFAFA] border-[1px] border-[#cfcfd7] rounded-[8px] flex flex-col gap-[1rem] h-[70%]  ">
          <div
            ref={headerRef}
            onScroll={(e) => syncScroll("header", e.target.scrollLeft)}
            className="flex flex-shrink-0 items-center gap-[1rem] py-[.5rem] px-[1rem] overflow-x-scroll bg-[#0b85ff] text-[.875rem] font-2 rounded-[6px] border-[1px] border-[#0b85ff] text-[white]"
            style={{ scrollbarWidth: "none" }}
          >
            <h1 className="min-w-[150px] text-center">Dealer Code</h1>
            <h1 className="min-w-[150px] text-center">Model</h1>
            <h1 className="min-w-[250px] text-center">Variant</h1>
            <h1 className="min-w-[150px] text-center">Stock Age</h1>
            <h1 className="min-w-[200px] text-center">Exterior Color</h1>
            <h1 className="min-w-[150px] text-center">Interior Color</h1>
            <h1 className="min-w-[150px] text-center">VIN Number</h1>
            <h1 className="min-w-[150px] text-center">Basic Price</h1>
          </div>

          <div
            className="flex flex-col  gap-[1rem]  h-full overflow-y-scroll "
            style={{ scrollbarWidth: "none" }}
          >
            {FastStars &&
              FastStars?.data?.data?.map((item, i) => {
                return (
                  <div
                    key={i}
                    ref={(el) => (rowRefs.current[i] = el)}
                    style={{ scrollbarWidth: "none" }}
                    onScroll={(e) => syncScroll(i, e.target.scrollLeft)}
                    className="flex items-center gap-[1rem] flex-shrink-0 py-[.5rem] px-[1rem] overflow-x-scroll bg-[white] text-[.875rem] font-2-book border-[1px] border-[#cfcfd7] rounded-[6px] text-color-8 hover:text-[#0b85ff] hover:border-[#0b85ff] drop-shadow-sm hover:scale-105 transition-all duration-300"
                  >
                    <h1 className="min-w-[150px] text-center">
                      {item?.dealer_code}
                    </h1>
                    <h1 className="min-w-[150px] text-center">
                      {item?.Model}
                    </h1>
                    <h1 className="min-w-[250px] text-center">
                      {item?.Variant}
                    </h1>
                    <h1 className="min-w-[150px] text-center">
                      {item?.["Stock Age"]}
                    </h1>
                    <h1 className="min-w-[200px] text-center">
                      {item?.["Exterior Color Name"]}
                    </h1>
                    <h1 className="min-w-[150px] text-center">
                      {item?.["Interior Color Desc"]}
                    </h1>
                    <h1 className="min-w-[150px] text-center">
                      {item?.["Vin Number"]}
                    </h1>
                    <h1 className="min-w-[150px] text-center">
                      ₹ {item?.["Basic Price"]}
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

const SlowSnailsPopup = ({
  className,
  SlowSnails,
  setSlowSnailsShow,
  SlowSnailsShow,
}) => {
  const headerRef = useRef(null);
  const rowRefs = useRef([]);

  const syncScroll = (source, scrollLeft) => {
    if (source !== "header" && headerRef.current) {
      headerRef.current.scrollLeft = scrollLeft;
    }
    rowRefs.current.forEach((ref, index) => {
      if (ref && source !== index) {
        ref.scrollLeft = scrollLeft;
      }
    });
  };

  // Clear old refs on rerender
  rowRefs.current = [];

  const CapitalStuck = (SlowSnails?.data?.data || [])?.reduce((acc, item) => {
    const basicPrice = item?.["Basic Price"] || 0;
    return acc + Number(basicPrice);
  }, 0);
  const capitalStuckRatio = parseFloat(
    (CapitalStuck / SlowSnails?.data?.totalCapitalStuck) * 100
  ).toFixed(2);

  return (
    <div
      className={`w-full h-full z-[99] bg-[rgba(0,0,0,0.8)]  items-center justify-center ${className} ${
        SlowSnailsShow ? "flex" : "hidden"
      }`}
    >
      <div className="h-[70%] w-[80%] bg-[white] shadow-md border-[1px] border-[#cfcfd7] rounded-[20px] p-[1rem] flex flex-col gap-[1rem]">
        <h1 className="text-[1.5rem] font-2 w-full flex items-center justify-between">
          <span className="flex items-center justify-center gap-[.5rem]">
            <img src={SnowSnails} alt="" className="w-[50px]" />
            <h1 className="mt-[8px]">Slow Snails</h1>
          </span>
          <RiCloseFill
            className="cursor-pointer"
            onClick={() => {
              setSlowSnailsShow(false);
            }}
          />
        </h1>
        <div className="flex items-center gap-[1rem]">
          <div className="px-[.75rem] py-[.5rem] border-[1px] border-[#cfcfd7b3] rounded-[8px] hover:text-[#0b85ff] hover:border-[#0b85ff]">
            <h1 className="font-2-book text-[1.15rem] text-center">
              <h1 className="font-1 font-medium"> Total Units </h1>
              <h1 className="font-2-book">
                {SlowSnails?.data?.SlowSnailsCount || 0}
              </h1>
            </h1>
          </div>
          <div className="px-[.75rem] py-[.5rem] border-[1px] border-[#cfcfd7b3] rounded-[8px] hover:text-[#0b85ff] hover:border-[#0b85ff]">
            <h1 className="font-2-book text-[1.15rem] text-center">
              <h1 className="font-2"> Capital Stuck </h1>
              <h1 className="font-2-book">
                ₹ {CapitalStuck.toLocaleString("en-IN")}
              </h1>
            </h1>
          </div>
          <div className="px-[.75rem] py-[.5rem] border-[1px] border-[#cfcfd7b3] rounded-[8px] hover:text-[#0b85ff] hover:border-[#0b85ff] ">
            <h1 className="font-2-book text-[1.15rem] text-center">
              <h1 className="font-2"> % Total capital </h1>
              <h1 className="font-2-book">{capitalStuckRatio} %</h1>
            </h1>
          </div>
          <div className="px-[.75rem] py-[.5rem] border-[1px] border-[#cfcfd7b3] rounded-[8px] hover:text-[#0b85ff] hover:border-[#0b85ff]">
            <h1 className="font-2-book text-[1.15rem] text-center">
              <h1 className="font-2"> Inventory Days </h1>
              <h1 className="font-2-book">{">"} 75</h1>
            </h1>
          </div>
        </div>
        <div className="p-[1rem] border-[1px] border-[#cfcfd7] rounded-[12px] flex flex-col gap-[1rem] h-[70%] ">
          <div
            ref={headerRef}
            onScroll={(e) => syncScroll("header", e.target.scrollLeft)}
            className="flex flex-shrink-0 items-center gap-[1rem] py-[.5rem] px-[1rem] overflow-x-scroll bg-[#0b85ff] text-[white] text-[.875rem] font-2 rounded-[8px]"
            style={{ scrollbarWidth: "none" }}
          >
            <h1 className="min-w-[150px] text-center">Dealer Code</h1>
            <h1 className="min-w-[150px] text-center">Model</h1>
            <h1 className="min-w-[200px] text-center">Variant</h1>
            <h1 className="min-w-[150px] text-center">Stock Age</h1>
            <h1 className="min-w-[200px] text-center">Exterior Color</h1>
            <h1 className="min-w-[150px] text-center">Interior Color</h1>
            <h1 className="min-w-[150px] text-center">VIN Number</h1>
            <h1 className="min-w-[150px] text-center">Basic Price</h1>
          </div>

          <div
            className="flex flex-col  gap-[1rem]  h-full overflow-y-scroll"
            style={{ scrollbarWidth: "none" }}
          >
            {SlowSnails &&
              SlowSnails?.data?.data?.map((item, i) => {
                return (
                  <div
                    key={i}
                    ref={(el) => (rowRefs.current[i] = el)}
                    style={{ scrollbarWidth: "none" }}
                    onScroll={(e) => syncScroll(i, e.target.scrollLeft)}
                    className="flex items-center gap-[1rem] flex-shrink-0 py-[.5rem] px-[1rem] overflow-x-scroll bg-[white] text-[.875rem] font-2-book border-[1px] border-[#cfcfd7] rounded-[8px] text-[#757575] hover:border-[#0b85ff]"
                  >
                    <h1 className="min-w-[150px] text-center">
                      {item?.["Order Dealer"]}
                    </h1>
                    <h1 className="min-w-[150px] text-center">
                      {item?.Model}
                    </h1>
                    <h1 className="min-w-[200px] text-center">
                      {item?.Variant}
                    </h1>
                    <h1 className="min-w-[150px] text-center">
                      {item?.["Stock Age"]}
                    </h1>
                    <h1 className="min-w-[200px] text-center">
                      {item?.["Exterior Color Name"]}
                    </h1>
                    <h1 className="min-w-[150px] text-center">
                      {item?.["Interior Color Desc"]}
                    </h1>
                    <h1 className="min-w-[150px] text-center">
                      {item?.["Vin Number"]}
                    </h1>
                    <h1 className="min-w-[150px] text-center">
                      ₹ {item?.["Basic Price"]}
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

const ChangeDealerShipsPopup = ({
  changeDealershipPopupShow,
  setchangeDealershipPopupShow,
  OwnedDealerships,
}) => {
  const dispatch = useDispatch();
  const dealershipDetails = useSelector((state) => state.DealershipDetails);
  const handleDealershipChange = async (id) => {
    toast.promise(
      (async () => {
        const response = await GetDealershipDetails(id);
        const dealer = response.data.msg;
        dispatch(
          setDealershipdetails({
            id: dealer?.pk_id,
            dealership_name: dealer?.dealership_name,
            dealership_brand: dealer?.dealership_brand,
            contact: dealer?.contact,
            city: dealer?.city,
            dealership_state: dealer?.dealership_state,
            accessToken: "",
            lat: dealer.lat,
            lon: dealer.lon,
          })
        );
        dispatch(setappKey(Date.now()));
      })(),
      {
        loading: "Changing Dealership...",
        success: "Dealership Changed Successfully",
        error: "Error Changing Dealership",
      }
    );

    setchangeDealershipPopupShow(false);
  };

  const BrandLogoMap = {
    Kia: KiaLogoDealershipChange,
    Hyundai: HyundaiLogoDealershipChange,
    Mahindra: MahindraLogoDealershipChange,
  };

  // * Handle Escape Click Event //////////////////////////////////////////////////////
  useEffect(() => {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setchangeDealershipPopupShow(false);
      }
    });
  });
  //* ////////////////////////////////////////////////////////////////////////////////

  return (
    <div
      className={`w-full h-full absolute top-0 left-0  bg-[rgba(178,211,244,0.2)] backdrop-blur-[6px] z-10  items-center justify-center
    ${changeDealershipPopupShow ? "flex" : "hidden"}
    `}
    >
      <div
        className="w-[700px] h-[350px] rounded-[20px] border-[1px] border-[#cfcfd7] bg-[rgba(255,255,255,0.8)]  backdrop-blur-[20px] flex items-center justify-center gap-[2rem] p-[1.5rem] overflow-x-scroll flex-col"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex items-center justify-center gap-[1rem]">
          {OwnedDealerships?.map((dealership, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  handleDealershipChange(dealership?.dealership_id);
                }}
                className={`w-[150px] flex-shrink-0 h-[150px] rounded-full border-[white] bg-[white] border-[2px] hover:w-[200px] hover:h-[200px] transition-all duration-300 flex flex-col items-center justify-center cursor-pointer drop-shadow-[0px_10px_10px_rgba(11,133,255,0.5)]
                     ${
                       dealershipDetails?.dealership_name ===
                         dealership?.dealership_name && "w-[150px] h-[150px]"
                     }
                     `}
              >
                {/* <h1 className="font-2 text-[white]">
                {dealership.dealership_name}
              </h1> */}
                <img src={BrandLogoMap[dealership?.dealership_brand]} alt="" />
              </div>
            );
          })}
        </div>

        <h2 className="font-2 text-[white] text-[1rem] text-color-9-70 font-2">
          Switch Dealerships
        </h2>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const dispatch = useDispatch();

  const dealershipDetails = useSelector((state) => state.DealershipDetails);
  const DealerLocation = useSelector((state) => state.DealerLocation);

  //* /////////////////////////////////State And RTO Updates////////////////////////////////////////////////////////////

  const [RTO, setRTO] = useState([]);

  useEffect(() => {
    const DealershipState = States.filter((item) =>
      item
        .toLowerCase()
        .includes(dealershipDetails?.dealership_state.toLowerCase())
    );

    dispatch(setState(DealershipState?.[0]));
   
    

    setRTO(RTOs?.[DealershipState?.[0]]?.map((item) => item.name)); //? Here I am Fetching the Rto using state and putting the array in the RTO Variable
    dispatch(
      setRto(
        RTOs?.[DealershipState?.[0]]?.filter((item) =>
          item.name
            .toLowerCase()
            .includes(dealershipDetails?.city?.toLowerCase())
        )?.[0]?.["name"]
      )
    );
  }, []);
  

  useEffect(() => {
    setRTO(RTOs?.[DealerLocation?.state]?.map((item) => item.name));
  }, [DealerLocation?.state]);

  //<----------------------------------State------------------------------------------------------------------>
  const [showStates, setShowStates] = useState(false);
  //<---------------------------------------------------------------------------------------------------------------->

  // -----------------------------------Rto------------------------------------------------------------------->
  const [showRTO, setShowRTO] = useState(false);
  useEffect(() => {
    const filteredRTO = RTOs?.[DealerLocation?.state]?.find((item) =>
      item.name.toLowerCase().includes(dealershipDetails?.city?.toLowerCase())
    );

    if (filteredRTO) {
      dispatch(setRto(filteredRTO.name));
    } else {
      // fallback to first
      dispatch(setRto(RTOs?.[DealerLocation?.state]?.[0]?.name));
    }
  }, [DealerLocation?.state, dealershipDetails?.city, RTOs]);
  // * /////////////////////////RTO Filter////////////////////////////////////////////////

  const [RTOFilter, setRTOFilter] = useState("");
  const [StateFilter, setStateFilter] = useState("");

  // * ///////////////////////////////////////////////////////////////////////////////////
  //<----------------------------------------------------------------------------------------------------------------->
  //* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [StatesYearlyData, setStatesYearlyData] = useState([]);
  const [RTOData, setRTOData] = useState([]);
  const [PanIndiaData, setPanIndiaData] = useState([]); // * ////////////////////////////////////VAHAN PORTAL DATA FETCH////////////////////////////////////////////////////////////

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
      if (DealerLocation?.state === "") {
        return;
      }
      if (DealerLocation?.rto === "") {
        return;
      }

      toast.promise(
        (async () => {
          const result = await FetchRTOData(
            DealerLocation?.state,
            DealerLocation?.rto
          );
          setRTOData(result.data.data);
          console.log(result.data);
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
          // console.log(result);

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
    const interval = setInterval(FetchVahanPortal3, 10 * 60 * 1000);
  }, []);


  
  //* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // ---------------------------------------Country Error------------------------------------------------------->
  const [showCountries, setShowCountries] = useState(false);
  const [showCountryError, setShowCountryError] = useState(false);
  // ----------------------------------------------------------------------------------------------------------->

  const [headers,setHeaders] = useState([
    {
      name: "Total Cars",
      count: "---",
      changes: "- Cars Sold",
      image: up,
    },
    {
      name: "Incoming Leads",
      count: "--",
      changes: "- More than Last Week",
      image: up,
    },
    {
      name: "Active Leads",
      count: "--",
      changes: "- less than Last Week",
      image: down,
    },
    {
      name: "Failed Leads",
      count: "--",
      changes: "- Less than Last week",
      image: up,
    },
  ]);

  const [dealerCodes, setDealerCodes] = useState([]);

  useEffect(() => {
    const FetchDealerCodes = async () => {
      try {
        const response = await GetDealerCodes(dealershipDetails?.id);
        const dealerCodes = response.data.msg.map((item) => item.dealer_code);
        setDealerCodes(["ALL", ...dealerCodes]);
      } catch (error) {
        console.log(error);
      }
    };
    FetchDealerCodes();
  }, []);

  const [selectedDealerCode, setselectedDealerCode] = useState("ALL");
  const [selectedDealerCodeShow, setselectedDealerCodeShow] = useState(null);

  const [InventoryAge, setInventoryAge] = useState("");
  const [FastStars, setFastStars] = useState([]);
  const [SlowSnails, setSlowSnails] = useState([]);
  const [FastStarsShow, setFastStarsShow] = useState(false);
  const [SlowSnailsShow, setSlowSnailsShow] = useState(false);
  const [BbndUnits, setBbndUnits] = useState("");
  const [MainUnits,setMainUnits] = useState("")

  useEffect(() => {
    const InventoryUnits = async () => {
      try {
        const response = await StrategyToolsInventoryDataFetch(
          dealershipDetails?.id,'ALL','ALL','ALL','ALL');

          //for inventory aging
        const response1 = await AverageSalesFetch(dealershipDetails?.id);
         const now = new Date();
        const currentMonthDays = new Date(
          now.getFullYear(),
          now.getMonth() + 1,
          0
        ).getDate();

        const dailySales = parseFloat(
          response1?.data?.Data?.[0]["Average Sales"] / currentMonthDays
        ).toFixed(2);

        const age = parseFloat(response?.mainUnits / dailySales).toFixed(2);
        setInventoryAge(age);
        ////////////////////////////////////////////////////////////////////////////


       setHeaders((prev) => {
  
  return prev.map((item) => {
    if (item.name === "Total Cars") {
     
      return { ...item, count: Number(response?.mainUnits) + Number(response?.bbndUnits) };
    }
    return item;
  });
});
        
setBbndUnits(response?.bbndUnits)
setMainUnits(response?.mainUnits)
       

        const faststars = await FastStarsFetch(
          dealershipDetails?.id,
          dealerCodes
        );
        setFastStars(faststars);

        const slowSnails = await SlowSnailsFetch(
          dealershipDetails?.id,
          dealerCodes
        );
        setSlowSnails(slowSnails);

        
      } catch (error) {
        console.log(error);
      }
    };

    InventoryUnits();
  }, [dealerCodes, selectedDealerCode]);

  const today = new Date();

  // Get last month date
  const lastMonthDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);

  // Get last month name (short format, e.g., "Aug")
  const lastMonthName = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(lastMonthDate);

  const Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    <div
      className="flex items-center justify-center gap-[.25rem] group cursor-pointer relative"
      key="total"
    >
      Total <IoMdInformationCircle />
      <div className="bg-[white] w-[200px] border-[1px] border-[#cfcfd7] p-[.5rem] rounded-[8px] absolute top-[110%] right-0 opacity-0 group-hover:opacity-100 text-[black] z-[99] hover:opacity-0">
        The Total is calcuted by taking data upto last month i.e.{" "}
        {lastMonthName}
      </div>
    </div>,
  ];

  //* /////////////////////////TIV DATA DESTRUCTURING////////////////////////////////////////////////////////////

  const currentMonthIndex = new Date().getMonth();
  const [TIV2024, setTIV2024] = useState([]);
  const [TIV2025, setTIV2025] = useState([]);
  const [TIV2024Total, setTIV2024Total] = useState("");
  const [TIV2025Total, setTIV2025Total] = useState("");
  const [diffValueArray, setdiffValueArray] = useState([]);
  const [diffArray, setdiffArray] = useState([]);
  const [Brand2024, setBrand2024] = useState([]);
  const [Brand2025, setBrand2025] = useState([]);
  const [Brand2024Total, setBrand2024Total] = useState("");
  const [Brand2025Total, setBrand2025Total] = useState("");
  const [BrandDiff, SetBrandDiff] = useState([]);
  const [BrandDiffValue, setBrandDiffValue] = useState([]);

  const [TIVBrand, setTIVBrand] = useState(dealershipDetails?.dealership_brand);
  const [TIVBrandShow, setTIVBrandShow] = useState(false);

  const [TIVButtonShow,setTIVButtonShow] = useState(false);
  const [TIVButtonShow2,setTIVButtonShow2] = useState(false);
  const [selectedTIVYear,setselectedTIVYear] = useState(new Date().getFullYear()-1)
  const [selectedTIVYear2,setselectedTIVYear2] = useState(new Date().getFullYear())


 

  useEffect(() => {
    // ? Setting for TIV 2024

    const Tiv2024 = BrandNames.map((brandName) =>
      RTOData?.find((obj) => obj.brand === brandName)
    )
      ?.filter(Boolean)
      ?.map((item) => item?.monthly)
      ?.flat()
      ?.filter((item) => item?.year === `${selectedTIVYear}`)
      ?.reduce((acc, item) => {
        Object.entries(item)?.forEach(([key, value]) => {
          if (key !== "year") {
            acc[key] = (acc[key] || 0) + Number(value || 0);
          }
        });
        return acc;
      }, {});
    setTIV2024(Tiv2024);
    console.log(currentMonthIndex)

   

    
    // ? Setting for TIV 2025

    const Tiv2025 = BrandNames.map((brandName) =>
      RTOData?.find((obj) => obj.brand === brandName)
    )
      ?.filter(Boolean)
      ?.map((item) => item?.monthly)
      ?.flat()
      ?.filter((item) => item.year === `${selectedTIVYear2}`)
      ?.reduce((acc, item) => {
        Object.entries(item)?.forEach(([key, value]) => {
          if (key !== "year") {
            acc[key] = (acc[key] || 0) + Number(value || 0);
          }
        });
        return acc;
      }, {});

    setTIV2025(Tiv2025);

   

    // ? Setting for Difference TIV

    const [base, compare] =
  selectedTIVYear2 > selectedTIVYear ? [Tiv2024, Tiv2025] : [Tiv2025, Tiv2024];


setdiffArray(
  Object.keys({ ...Tiv2024, ...Tiv2025 }).reduce((acc, month) => {
    acc[month] = Number(
      ((((compare[month] || 0) - (base[month] || 0)) / (base[month] || 1)) * 100).toFixed(2)
    );
    return acc;
  }, {})
);

    setdiffValueArray(
      Object.keys({ ...Tiv2024, ...Tiv2025 })?.reduce((acc, month) => {
        acc[month] = (compare[month] || 0) - (base[month] || 0);
        return acc;
      }, {})
    );

    // ? Setting for Brand 2024

    const BRAND2024 = BrandNames.map((brandName) =>
      RTOData?.find((obj) => obj.brand === brandName)
    )
      ?.filter(Boolean)
      ?.filter((item) => item?.brand?.includes(TIVBrand))?.[0]
      ?.["monthly"]?.filter((item) => item?.year === `${selectedTIVYear}`)?.[0];

    const { year: year2024, ...Brand2024rest } = BRAND2024 || {};

    setBrand2024(Brand2024rest);

   

    // ? Setting for Brand 2025

    const BRAND2025 = BrandNames.map((brandName) =>
      RTOData?.find((obj) => obj.brand === brandName)
    )
      ?.filter(Boolean)
      ?.filter((item) => item?.brand?.includes(TIVBrand))?.[0]
      ?.["monthly"]?.filter((item) => item?.year === `${selectedTIVYear2}`)?.[0];

    const { year: year2025, ...Brand2025rest } = BRAND2025 || {};

    setBrand2025(Brand2025rest);

   

    // ? Setting for Brand difference

     if(selectedTIVYear2===(new Date().getFullYear()) || selectedTIVYear===(new Date().getFullYear())){


      const Tiv2024total = Object.values(Tiv2024 ?? {})
      .slice(0, currentMonthIndex)
      .reduce((acc, value) => acc + value, 0);
    setTIV2024Total(Tiv2024total);

     const brand2025total = Object.values(Brand2025rest ?? {})
       .slice(0, currentMonthIndex)
      .reduce((acc, value) => acc + value, 0);
    setBrand2025Total(brand2025total);

     const brand2024total = Object.values(Brand2024rest ?? {})
       .slice(0, currentMonthIndex)
      .reduce((acc, value) => acc + value, 0);
    setBrand2024Total(brand2024total);

     const Tiv2025total = Object.values(Tiv2025 ?? {})
      .slice(0, currentMonthIndex)
      .reduce((acc, value) => acc + value, 0);
    setTIV2025Total(Tiv2025total);


    }else{
      const Tiv2024total = Object.values(Tiv2024 ?? {})
      .reduce((acc, value) => acc + value, 0);
    setTIV2024Total(Tiv2024total);

     const brand2025total = Object.values(Brand2025rest ?? {})
      .reduce((acc, value) => acc + value, 0);
    setBrand2025Total(brand2025total);

     const brand2024total = Object.values(Brand2024rest ?? {})
      .reduce((acc, value) => acc + value, 0);
    setBrand2024Total(brand2024total);

     const Tiv2025total = Object.values(Tiv2025 ?? {})
      .reduce((acc, value) => acc + value, 0);
    setTIV2025Total(Tiv2025total);



    }

     const [base1, compare1] =
  selectedTIVYear2 > selectedTIVYear ? [Brand2024rest, Brand2025rest] : [Brand2025rest, Brand2024rest];

    SetBrandDiff(
      Object.keys({ ...Brand2024rest, ...Brand2025rest }).reduce(
        (acc, month) => {
          const val2024 = parseFloat(base1[month] || 0);
          const val2025 = parseFloat(compare1[month] || 0);

          acc[month] = (((val2025 - val2024) / (val2024 || 1)) * 100).toFixed(
            2
          );

          return acc;
        },
        {}
      )
    );

    setBrandDiffValue(
      Object.keys({ ...Brand2024rest, ...Brand2025rest }).reduce(
        (acc, month) => {
          const val2024 = parseFloat(base1[month] || 0);
          const val2025 = parseFloat(compare1[month] || 0);

          acc[month] = val2025 - val2024;

          return acc;
        },
        {}
      )
    );

  

    
  }, [RTOData, TIVBrand,selectedTIVYear,selectedTIVYear2]);
  

  // * ///////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [showSalesVelcoityCalculator, setshowSalesVelcoityCalculator] =
    useState(false);

  const [SalesVelocityCalculatorData, SetSalesVelocityCalculatorData] =
    useState({
      AverageSales: "",
      DailySales: "",
      InventoryAge: "",
    });

  const now = new Date();
  const currentMonthDays = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  ).getDate();

  const CheckAgeing = async () => {
    if (SalesVelocityCalculatorData.AverageSales !== "") {
      const response = await AverageSalesUpload(
        SalesVelocityCalculatorData.AverageSales,
        dealershipDetails?.id
      );
      if (response.data.msg === "done") {
        SetSalesVelocityCalculatorData((prev) => ({
          ...prev,
          DailySales: parseFloat(prev.AverageSales / currentMonthDays).toFixed(
            2
          ),
        }));
        SetSalesVelocityCalculatorData((prev) => ({
          ...prev,
          InventoryAge: parseFloat(
            MainUnits / prev.DailySales
          ).toFixed(2),
        }));

        setInventoryAge(parseFloat(
            MainUnits / parseFloat(SalesVelocityCalculatorData.AverageSales / currentMonthDays).toFixed(
            2
          )
          ).toFixed(2))
      }
    }
  };

  const [changeDealershipPopupShow, setchangeDealershipPopupShow] =
    useState(false);
  const [OwnedDealerships, setOwnedDealerships] = useState([]);
  useEffect(() => {
    const FetchOwnedDealerships = async () => {
      try {
        const response = await GetOwnedDealerships(dealershipDetails?.userID);

        setOwnedDealerships(response?.data?.msg);
      } catch (error) {
        console.log(error);
      }
    };
    FetchOwnedDealerships();
  }, []);




  return (
    <div className="w-[calc(100vw-230px)] h-[100vh]  p-[1rem] font-roboto relative">

   

      <div
        className={`w-full h-full   flex flex-col gap-[1rem] border-[1px] border-[#cfcfd5] rounded-[16px] bg-transparent
           ${
             showCountryError ||
             FastStarsShow ||
             SlowSnailsShow ||
             showSalesVelcoityCalculator ||
             changeDealershipPopupShow
               ? "p-[0] relative overflow-hidden"
               : "p-[1.25rem] overflow-y-scroll"
           }
          `}
        style={{ scrollbarWidth: "none" }}
      >
        {/* ----------------------------------------------- */}
        <CountryErrorPopup
          showCountryError={showCountryError}
          setShowCountryError={setShowCountryError}
        />

        <FastStarsPopup
          className="absolute"
          FastStars={FastStars}
          setFastStarsShow={setFastStarsShow}
          FastStarsShow={FastStarsShow}
        />
        <SlowSnailsPopup
          className="absolute"
          SlowSnails={SlowSnails}
          setSlowSnailsShow={setSlowSnailsShow}
          SlowSnailsShow={SlowSnailsShow}
        />

        <ChangeDealerShipsPopup
          changeDealershipPopupShow={changeDealershipPopupShow}
          setchangeDealershipPopupShow={setchangeDealershipPopupShow}
          OwnedDealerships={OwnedDealerships}
        />

       

     
        <div className="flex flex-col gap-[1rem] p-[1rem] border-[1px] border-[#cfcfd5] rounded-[16px] bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A] backdrop-blur-[48px] shadow-[0px_8_px_32px_rgba(2,133,255,0.078)] hover:shadow-[0_12px_40px_rgba(2,133,255,0.12)] transition-shadow duration-[0.3s]">
          <div className="py-[1rem]  flex items-center justify-between">
            <div className="flex items-center  gap-[.5rem]">
               <div className="w-10 h-10 bg-[#ffffff33] rounded-xl flex items-center justify-center animate-pulse">
              <Building2 className="w-5 h-5 text-[white]" />
            </div>
              <h1 className="text-[1.35rem] font-semibold text-[white]">
                Welcome,{dealershipDetails?.user_name}
              </h1>
            </div>

            <div className="flex items-center gap-[.5rem]">
              <div
                className={`px-[1rem] py-[.25rem] rounded-[8px] border-[1px] border-[#FFFFFF4D] text-[white] flex items-center justify-center gap-[.1rem] relative cursor-pointer ${
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
                  className={`absolute top-[100%] left-[50%] translate-x-[-50%]  rounded-[8px] rounded-t-[0px] border-t-[0px] bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A] backdrop-blur-[48px]  overflow-y-scroll transition-all duration-150 z-[30] w-[calc(100%+2px)] border-[#0b85ff]  ${
                    showCountries ? "h-[350px] border-[1px]" : "h-[0px] "
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
                className={`px-[1rem] py-[.25rem] rounded-[8px] border-[1px] border-[#FFFFFF4D] text-[white] flex items-center justify-center gap-[.1rem] relative cursor-pointer capitalize
                           ${showStates && "border-b-[0px] rounded-b-[0px]"}
                           `}
                onClick={() => {
                  setShowStates(!showStates);
                }}
              >
                {DealerLocation.state}
                <RiArrowDropDownLine className="text-[1.25rem] mt-[2px]" />
                <div
                  className={`absolute  top-[100%] left-[-1px]  border-[#ffffff4d]  rounded-[8px]  overflow-y-scroll transition-[height] duration-150 z-10 bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A]  ${
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
                    // placeholder="Enter State"
                    className=" w-full px-[1rem] py-[.25rem] border-y-[1px] border-[#ffffff4d] outline-none text-white "
                  />
                  {States?.filter((state) =>
                    state.toLowerCase().includes(StateFilter.toLowerCase())
                  ).map((State, i) => {
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
                className={`px-[1rem] py-[.25rem] rounded-[8px] border-[1px] border-[#FFFFFF4D] text-[white] flex items-center justify-start gap-[.1rem] relative cursor-pointer capitalize w-[175px] whitespace-nowrap 
                           ${
                             showRTO
                               ? "border-b-[0px] rounded-b-[0px]  overflow-y-visible"
                               : "overflow-x-scroll"
                           }
                           `}
                style={{ scrollbarWidth: "none" }}
                onClick={() => {
                  setShowRTO(!showRTO);
                }}
              >
                {DealerLocation?.rto
                  ?.replace(/\(\s*\d{1,2}-[A-Z]{3}-\d{4}\s*\)/, "")
                  .trim()}
                <RiArrowDropDownLine className="text-[1.25rem] mt-[2px]" />
                <div
                  className={`absolute  top-[100%] left-[-1px]  border-[#ffffff4d]  rounded-[8px]   overflow-y-scroll transition-[height] duration-150 z-10 bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A] ${
                    showRTO
                      ? "border-[1px] w-[calc(175px)] h-[300px] border-t-[0px] rounded-t-[0px]"
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
                    placeholder="Enter RTO"
                    className=" w-full px-[1rem] py-[.25rem] border-y-[1px] border-[#ffffff4d] outline-none"
                  />
                  {RTO &&
                    RTO?.filter((rto) =>
                      rto.toLowerCase().includes(RTOFilter.toLowerCase())
                    )?.map((rto, i) => {
                      return (
                        <div>
                          <h1
                            key={i}
                            onClick={() => {
                              dispatch(setRto(rto));
                            }}
                            className={`capitalize px-[1rem] py-[.5rem]  hover:bg-[rgba(0,0,0,0.1)] cursor-default text-white text-[.875rem] flex items-center `}
                          >
                            {rto
                              ?.replace(/\(\s*\d{1,2}-[A-Z]{3}-\d{4}\s*\)/, "")
                              .trim()}
                          </h1>
                        </div>
                      );
                    })}
                  {!RTO && (
                    <div className="text-center text-[.875rem]">
                      No RTOs Available
                    </div>
                  )}
                </div>
              </div>
              <div
                className={`px-[1rem] py-[.25rem] rounded-[8px] border-[1px] border-[#FFFFFF4D] text-[white] flex items-center justify-between gap-[.5rem] relative cursor-pointer capitalize w-[174px] whitespace-nowrap overflow-x-scroll
                       
                        `}
                style={{ scrollbarWidth: "none" }}
                onClick={() => {
                  dealershipDetails?.role === "Principal" &&
                    setchangeDealershipPopupShow(true);
                }}
              >
                {dealershipDetails?.dealership_name}
                {dealershipDetails?.role === "Principal" && (
                  <RiArrowDropDownLine className="text-[1.25rem] mt-[2px]" />
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <div className="flex items-center justify-between">
              {headers.map((head, i) => {
                return (
                  <div
                    key={i}
                    className={` flex  items-center justify-between gap-[1rem]   rounded-[12px] relative bg-[#FFFFFF26] backdrop-blur-sm shadow-lg p-4 border border-[#FFFFFF4D]   text-[white] ${
                      i === headers.length - 1 ? "w-[28%]" : "w-[22.5%]"
                    }`}
                  >
                    {i !== 0 && (
                      <span className="text-[.75rem] absolute top-[13%] font-medium right-2 text-[#ffffff77]">
                        Autotrends Leads
                      </span>
                    )}
                    <div className="flex flex-col gap-[.5rem] w-full ">
                      <h1 className="text-[.875rem] font-medium flex items-center justify-between w-full ">
                        <span>{head.name}</span>{" "}
                      </h1>
                      <h1 className="text-[2rem] font-bold text-[white]">
                        {head.count}
                      </h1>
                      <h1 className="text-[.75rem]  text-white">
                        {head.changes}
                      </h1>
                    </div>
                   
                    <h1 className="text-[2rem] font-bold text-[#0b85ff]">-</h1>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-between ">
              <div
                className={` absolute top-0 left-0 flex items-center justify-center w-full h-full backdrop-blur-[7px] bg-[rgba(11,133,255,0.05)]  z-[99] ${
                  !showSalesVelcoityCalculator ? "hidden" : ""
                }`}
              >
                <div className="border-[1px] w-[350px] bg-[white] border-[#cfcfd7] rounded-[12px] h-[340px]  px-[1rem] py-[1rem] flex flex-col justify-between gap-[.5rem] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] shadow-md z-[99]">
                  <h1 className="font-2 w-full flex items-center justify-between gap-[.5rem] text-[1.5rem]">
                    <h1 className="flex items-center justify-start gap-[.5rem]">
                      {" "}
                      Sales velocity <SlSpeedometer />
                    </h1>{" "}
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setshowSalesVelcoityCalculator(false);
                      }}
                    >
                      <RiCloseFill className="text-[1.2rem] cursor-pointer" />
                    </div>
                  </h1>

                  <div className="pb-[1rem] pt-[.5rem] border-y-[1px] border-[#cfcfd7]">
                    <label htmlFor="" className="text-[.875rem] font-2-book">
                      Monthly Average Sales
                    </label>
                    <input
                      type="text"
                      value={SalesVelocityCalculatorData.AverageSales}
                      onChange={(e) => {
                        SetSalesVelocityCalculatorData({
                          ...SalesVelocityCalculatorData,
                          AverageSales: e.target.value,
                        });
                      }}
                      className="py-[.25rem] px-[1rem] rounded-[8px] border-[1px] border-[#cfcfd7] w-full outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-[1rem]">
                    <h1 className="text-[.875rem] font-2 w-full flex items-center justify-between ">
                      Results{" "}
                      <button
                        onClick={() => {
                          CheckAgeing();
                        }}
                        className="text-[#0b85ff] "
                      >
                        Check
                      </button>
                    </h1>

                    <div className="flex flex-col w-full items-start justify-between gap-[.5rem]">
                      <div className="flex items-center justify-between w-full font-2-book border-[1px] border-[#0b85ff66]  py-[.25rem] px-[.5rem] rounded-[8px]">
                        <h1>Monthly Average Sales</h1>{" "}
                        <span className="font-2 text-center bg-[#0b85ff66] w-[60px]  px-[.25rem] text-[.85rem]  rounded-[8px]">
                          {SalesVelocityCalculatorData.AverageSales}
                        </span>
                      </div>
                      <div className="flex items-center justify-between w-full font-2-book border-[1px] border-[#0b85ff66] py-[.25rem] px-[.5rem] rounded-[8px]">
                        <h1>Daily Sales</h1>{" "}
                        <span className="font-2  text-center w-[60px] bg-[#0b85ff66]   px-[.25rem] text-[.85rem]  rounded-[8px]">
                          {SalesVelocityCalculatorData.DailySales}
                        </span>
                      </div>
                      <div className="flex items-center justify-between w-full font-2-book border-[1px] border-[#0b85ff66] py-[.25rem] px-[.5rem] rounded-[8px]">
                        <h1>Inventory Age</h1>{" "}
                        <span className="font-2 text-center w-[60px] bg-[#0b85ff66]  border- px-[.25rem] text-[.85rem]   rounded-[8px]">
                          {SalesVelocityCalculatorData.InventoryAge}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className=" h-full  rounded-[12px]  bg-[#FFFFFF26] backdrop-blur-sm  p-4 border border-[#FFFFFF4D] shadow-lg  text-[white] w-[22.5%] flex flex-col items-start   justify-between gap-[.5rem] relative "
                onClick={() => {
                  setshowSalesVelcoityCalculator(true);
                }}
              >
              

                <div className="w-full flex  items-start justify-between gap-[.5rem] cursor-pointer ">
                  <div className="flex flex-col gap-[.5rem] ">
                    <h1 className="text-[.875rem] font-medium">
                      Inventory Aging
                    </h1>
                     
                    <h3 className="text-[2rem] font-bold text-[#0b85ff]">
                      {" "}
                      {InventoryAge ? (
                        <span className="text-[1.75rem] text-[white]">
                          {InventoryAge}
                        </span>
                      ) : (
                        "--"
                      )}{" "}
                    </h3>
                      </div>
                     <div className="w-12 h-12 rounded-md bg-gradient-to-br from-amber-400/20 to-orange-400/20 border border-amber-300/30 flex items-center justify-center shadow-md shadow-amber-500/10">
                      <Car className="w-6 h-6 text-amber-300" strokeWidth={2} />
                    </div>
                </div>
                <h2 className="text-[1rem] text-color-9-70 font-medium group relative">
               
                  <FaInfoCircle className="text-[.875rem] text-[white]" />

                  <p className="font-2-book text-[.9rem] group-hover:block hidden absolute w-[200px] bg-[white] border-[1px] border-[#cfcfd7] px-[1rem] py-[.5rem]  rounded-[12px]">
                    Inventory Age Gets Updated Each Time you put your average
                    sales in the{" "}
                    <span className="text-[#0b85ff]">Sales velocity</span>{" "}
                    calculator in the inventory tab or just click on the this
                    tab
                  </p>
                </h2>
              </div>
              <div
                className="h-full  rounded-[12px]   w-[22.5%] flex flex-col items-start justify-between gap-[.5rem] relative bg-[#FFFFFF26] backdrop-blur-sm  p-4 border border-[#FFFFFF4D] shadow-lg  text-[white]"
                onClick={() => {
                  setFastStarsShow(true);
                }}
              >
             

                <div className="w-full flex items-start  justify-between gap-[.5rem] cursor-pointer">
                  <div className="flex flex-col gap-[.5rem]">
                    <h1 className="text-[.875rem] font-medium">Fast Stars</h1>
                    
                 
                    <h3 className="text-[2rem] font-bold text-[#0b85ff]">
                      {FastStars ? (
                        <span className="text-[1.75rem] text-[white]">
                          {FastStars?.data?.FastStarsCount}
                        </span>
                      ) : (
                        "--"
                      )}
                    </h3>
                      </div>
                     <div className="w-12 h-12 rounded-md bg-gradient-to-br from-emerald-400/20 to-green-400/20 border border-emerald-300/30 flex items-center justify-center shadow-md shadow-emerald-500/10">
                      <Star className="w-6 h-6 text-emerald-300" strokeWidth={2} />
                    </div>
                </div>
                <h2 className="text-[1rem] text-color-9-70 font-medium flex items-center gap-[.5rem] ">
                  <h2 className="text-[.875rem] text-color-9-70 font-medium group relative ">

                    <FaInfoCircle className="mt-[2px] text-[white]" />

                    <p className="font-2-book text-[.9rem] group-hover:block hidden absolute w-[200px] bg-[white] border-[1px] border-[#cfcfd7] px-[1rem] py-[.5rem] rounded-[12px]">
                      The Fast Star Consists of Cars that are below the age of{" "}
                      <span className="text-[#0b85ff]">15 days</span> in the
                      Inventory.
                    </p>
                  </h2>
                  <span className="text-[white]">
                    Top Selling Cars
                  </span>
                </h2>
              </div>
              <div
                className="h-full   rounded-[16px]   w-[22.5%] flex flex-col items-start justify-between gap-[.5rem] cursor-pointer relative bg-[#FFFFFF26] backdrop-blur-sm  p-4 border border-[#FFFFFF4D] shadow-lg  text-[white]"
                onClick={() => {
                  setSlowSnailsShow(true);
                }}
              >
              

                <div className="w-full flex items-start  justify-between gap-[.5rem]">
                  <div className="flex flex-col gap-[.5rem]">
                    <h1 className="text-[.875rem] font-medium">Slow Snails</h1>
                    
                    <h3 className="text-[2rem] font-bold text-[#0b85ff]">
                      {" "}
                      {SlowSnails ? (
                        <span className="text-[1.75rem] text-[white]">
                          {SlowSnails?.data?.SlowSnailsCount}
                        </span>
                      ) : (
                        "-"
                      )}
                    </h3>
                      </div>

                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-rose-400/20 backdrop-blur-sm border border-red-400/30 flex items-center justify-center mb-4 shadow-md shadow-red-500/10">
              <Snail className="w-6 h-6 text-red-400" strokeWidth={2} />
            </div>
                </div>
                <h2 className="text-[1rem] text-color-9-70 font-medium flex items-center gap-[.5rem]">
                  <h2 className="text-[.875rem] text-color-9-70 font-medium group relative">
                  
                    <FaInfoCircle className="mt-[2px] text-[white]" />

                    <p className="font-2-book text-[.9rem] group-hover:block hidden absolute w-[200px] bg-[white] border-[1px] border-[#cfcfd7] px-[1rem] py-[.5rem] rounded-[12px] z-10">
                      The Slow Snails Consists of Cars that are more than the
                      age of <span className="text-[#0b85ff]">75 days</span> in
                      the Inventory.
                    </p>
                  </h2>
                 <span className="text-[white]">Most Aged Model</span>
                </h2>
              </div>
              <div className="h-full  rounded-[16px]   w-[28%] flex flex-col items-start justify-between gap-[.5rem] relative bg-[#FFFFFF26] backdrop-blur-sm  p-4 border border-[#FFFFFF4D] shadow-lg  text-[white]">
               

                <div className=" w-full flex  justify-between gap-[.5rem]">
                  
                  <div className="flex  flex-col gap-[.5rem]">
                    <h1 className="text-[.875rem] font-medium ">
                      BBND Stock Units
                    </h1>

                    
                    <h3 className="text-[2rem] font-bold text-[#0b85ff] ">
                      {BbndUnits ? (
                        <span className="text-[1.75rem] text-[white]">
                          {BbndUnits}
                        </span>
                      ) : (
                        "-"
                      )}
                    </h3>
                      </div>
                     <div className="w-12 h-12 rounded-md bg-gradient-to-br from-purple-400/20 to-violet-400/20 border border-purple-300/30 flex items-center justify-center shadow-md shadow-purple-500/10">
                      <Package className="w-6 h-6 text-purple-300" strokeWidth={2} />
                    </div>
                </div>
                <h2 className="text-[1rem] text-color-9-70 font-medium group relative">
                  <FaInfoCircle className="mt-[2px] text-[white]" />
                  <p className="font-2-book text-[.9rem] group-hover:block hidden absolute w-[200px] bg-[white] border-[1px] border-[#cfcfd7] px-[1rem] py-[.5rem] rounded-[12px] z-10">
                    Build But Not Delivered Stock
                  </p>
                </h2>
              </div>
            </div>
          </div>
        </div> 

        {/* -------------------------------------------------- */}
        <div className="flex flex-col gap-[1rem]">
          <div className="w-full flex items-stretch justify-between gap-[1rem]">
            <div className="w-full ">
              <MonthlyAnalysisRTO
                RTOData={RTOData}
                selectedRTO={DealerLocation?.rto}
                selectedState={DealerLocation?.state}
              />
            </div>

            {/* <FuelMarketShareRTO
              selectedRTO={DealerLocation?.rto}
              className="w-[28%]"
            /> */}
          </div>

          <MonthlyAnalysisIndia PanIndiaData={PanIndiaData} />

          <div className="w-full flex flex-col gap-[1rem] p-[1rem] border-[1px] border-[#cfcfd7] rounded-[12px] bg-transparent glass-card">
            <h1 className="font-2 flex items-center justify-between w-full ">
              TIV Comparison{" "}
              {DealerLocation?.rto !== "" &&
                DealerLocation?.rto?.split(" ")?.[0]}
            <div className="flex items-center gap-2">
                 <button
                className={`text-[#0b85ff] text-[.875rem] flex items-center justify-between gap-[.25rem] cursor-pointer relative px-[.5rem] py-[.25rem] border-[1px] border-[#0b85ff] rounded-[8px] z-[999]  ${
                  TIVBrandShow && "rounded-b-[0px] border-b-0"
                }`}
                onClick={() => {
                  setTIVBrandShow(!TIVBrandShow);
                }}
              >
                {TIVBrand?.split(" ")[0]}{" "}
                <RiArrowDropDownLine className="text-[1.25rem] font-normal" />
                <div
                  className={`absolute top-[100%] left-[-1px]  border-t-0 rounded-[8px] rounded-t-[0px] border-[#0b85ff] 
                                   transition-[height] duration-200 overflow-y-scroll bg-[white] z-10
                                   ${
                                     TIVBrandShow
                                       ? "h-[200px] w-[calc(100%+2px)] border-[1px]"
                                       : "w-[0px] h-[0px] border-0"
                                   }
                                   `}
                  style={{ scrollbarWidth: "none" }}
                >
                  {BrandNames.map((brandName) =>
                    RTOData?.find((obj) => obj.brand === brandName)
                  )
                    ?.filter(Boolean)
                    ?.filter((item) => item.monthly.length >= 2)
                    ?.map((item, i) => {
                      return (
                        <h1
                          key={i}
                          className={` py-[.25rem] 
                                         `}
                          onClick={() => {
                            setTIVBrand(item.brand);
                          }}
                        >
                          {item.brand.split(" ")[0]}
                        </h1>
                      );
                    })}
                </div>
              </button>
                 <button
                className={`text-[#0b85ff] text-[.875rem] flex items-center justify-between gap-[.25rem] cursor-pointer relative px-[.5rem] py-[.25rem] border-[1px] border-[#0b85ff] rounded-[8px] z-[999]  ${
                  TIVButtonShow && "rounded-b-[0px] border-b-0"
                }`}
                onClick={() => {
                  setTIVButtonShow(!TIVButtonShow);
                }}
              >
                {selectedTIVYear}
                <RiArrowDropDownLine className="text-[1.25rem] font-normal" />
                <div
                  className={`absolute top-[100%] left-[-1px]  border-t-0 rounded-[8px] rounded-t-[0px] border-[#0b85ff] 
                                   transition-[height] duration-200 overflow-y-scroll bg-[white] z-10
                                   ${
                                     TIVButtonShow
                                       ? "h-[100px] w-[calc(100%+2px)] border-[1px]"
                                       : "w-[0px] h-[0px] border-0"
                                   }
                                   `}
                  style={{ scrollbarWidth: "none" }}
                >
                  {RTOData?.filter((item)=>item.brand.includes(TIVBrand))?.[0]?.monthly
                    ?.map((item, i) => {
                      return (
                        <h1
                          key={i}
                          className={` py-[.25rem] 
                                         `}
                          onClick={() => {
                            setselectedTIVYear(Number(item.year))
                          }}
                        >
                          {item.year}
                        </h1>
                      );
                    })}
                </div>
              </button>
                 <button
                className={`text-[#0b85ff] text-[.875rem] flex items-center justify-between gap-[.25rem] cursor-pointer relative px-[.5rem] py-[.25rem] border-[1px] border-[#0b85ff] rounded-[8px] z-[999]  ${
                  TIVButtonShow2 && "rounded-b-[0px] border-b-0"
                }`}
                onClick={() => {
                  setTIVButtonShow2(!TIVButtonShow2);
                }}
              >
                {selectedTIVYear2}
                <RiArrowDropDownLine className="text-[1.25rem] font-normal" />
                <div
                  className={`absolute top-[100%] left-[-1px]  border-t-0 rounded-[8px] rounded-t-[0px] border-[#0b85ff] 
                                   transition-[height] duration-200 overflow-y-scroll bg-[white] z-10
                                   ${
                                     TIVButtonShow2
                                       ? "h-[100px] w-[calc(100%+2px)] border-[1px]"
                                       : "w-[0px] h-[0px] border-0"
                                   }
                                   `}
                  style={{ scrollbarWidth: "none" }}
                >
                  {RTOData?.filter((item)=>item.brand.includes(TIVBrand))?.[0]?.monthly
                    ?.map((item, i) => {
                      return (
                        <h1
                          key={i}
                          className={` py-[.25rem] 
                                         `}
                          onClick={() => {
                            setselectedTIVYear2(Number(item.year))
                          }}
                        >
                          {item.year}
                        </h1>
                      );
                    })}
                </div>
              </button>
            </div>
            </h1>
            <div className="border-[1px] border-[#cfcfd7] rounded-[10px] overflow-hidden font-1">
              <table className="border-collapse table-auto w-full text-sm">
                <thead>
                  <tr className=" border-b-[1px] border-[#cfcfd7] bg-[#0b85ffeb] text-[white]">
                    <th className="font-1 font-medium text-[1rem] py-[.5rem] border-r-[1px]">
                      Months
                    </th>
                    {Months.map((month, i) => {
                      return (
                        <th
                          key={i}
                          className={`font-1 font-medium text-[1rem]
                          ${i !== Months.length - 1 && "border-r-[1px]"}
                          `}
                        >
                          <div
                            className={`w-full h-full px-[.5rem] py-[.5rem] `}
                          >
                            <h1
                              className={`rounded-[8px] px-[.25rem] ]
                          }`}
                            >
                              {month}
                            </h1>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {/*---------------------------------------------------------------------------------- */}
                  <tr className="border-b-[1px] border-[#cfcfd7] ">
                    <td className="text-center border-r-[1px] border-[#cfcfd7] py-[1rem] font-medium text-[#0b85ff]">
                      TIV {selectedTIVYear}
                    </td>
             

                       {selectedTIVYear===(new Date().getFullYear()) && Object.values(TIV2024)
                      ?.slice(0, currentMonthIndex + 1)
                      ?.map((tiv, i) => {
                        return (
                          <td key={i} className=" border-r-[1px] border-[#cfcfd7] text-center">
                            {tiv}
                          </td>
                        );
                      })}
                    {selectedTIVYear!==(new Date().getFullYear()) && Object.values(TIV2024)
                      ?.map((tiv, i) => {
                        return (
                          <td key={i} className=" border-r-[1px] border-[#cfcfd7] text-center">
                            {tiv}
                          </td>
                        );
                      })}

                    {selectedTIVYear===(new Date().getFullYear()) && Array(12 - (currentMonthIndex + 1))
                      .fill("-")
                      .map((item, i) => {
                        return (
                          <td key={i} className=" border-r-[1px] border-[#cfcfd7]  text-center">
                            <div
                              className={`w-full h-full px-[.5rem] py-[1rem]`}
                            >
                              <h1
                                className={`rounded-[8px] px-[.25rem] 
                          }`}
                              >
                                {item}
                              </h1>
                            </div>
                          </td>
                        );
                      })}
                    <td className="text-center">{TIV2024Total}</td>
                  </tr>
                  {/*---------------------------------------------------------------------------------- */}
                  <tr className="border-b-[1px] border-[#cfcfd7]">
                    <td className=" border-r-[1px] border-[#cfcfd7] text-center py-[1rem] font-medium text-[#0b85ff]">
                      TIV {selectedTIVYear2 }
                    </td>

                    {selectedTIVYear2===(new Date().getFullYear()) && Object.values(TIV2025)
                      ?.slice(0, currentMonthIndex + 1)
                      ?.map((tiv, i) => {
                        return (
                          <td key={i} className=" border-r-[1px] border-[#cfcfd7] text-center">
                            {tiv}
                          </td>
                        );
                      })}
                    {selectedTIVYear2!==(new Date().getFullYear()) && Object.values(TIV2025)
                      ?.map((tiv, i) => {
                        return (
                          <td key={i} className=" border-r-[1px] border-[#cfcfd7] text-center">
                            {tiv}
                          </td>
                        );
                      })}

                    {selectedTIVYear2===(new Date().getFullYear()) && Array(12 - (currentMonthIndex + 1))
                      .fill("-")
                      .map((item, i) => {
                        return (
                          <td key={i} className=" border-r-[1px] border-[#cfcfd7]  text-center">
                            <div
                              className={`w-full h-full px-[.5rem] py-[1rem]`}
                            >
                              <h1
                                className={`rounded-[8px] px-[.25rem] 
                          }`}
                              >
                                {item}
                              </h1>
                            </div>
                          </td>
                        );
                      })}

                    <td className="text-center">{TIV2025Total}</td>
                  </tr>
                  {/* --------------------------------------------------------------------------------------------------- */}
                  <tr className="border-b-[1px] border-[#cfcfd7]">
                    <td className=" border-r-[1px] border-[#cfcfd7] text-center py-[1rem] font-medium text-[#0b85ff]">
                      Value Change
                    </td>
                    {(selectedTIVYear2===(new Date().getFullYear()) || selectedTIVYear===(new Date().getFullYear())) && Object.values(diffValueArray)
                      ?.slice(0, currentMonthIndex + 1)
                      ?.map((Kia, i) => {
                        return (
                          <td key={i} className="border-r-[1px] border-[#cfcfd7]  text-center ">
                            <div
                              className={`w-full h-full px-[.5rem] py-[1rem]`}
                            >
                              <h1
                                className={`rounded-[8px] px-[.25rem] ${
                                  Kia > 0
                                    ? " text-[#43A047]"
                                    : " text-[#E53935]"
                                }`}
                              >
                                {Kia}
                              </h1>
                            </div>
                          </td>
                        );
                      })}
                    { (selectedTIVYear2!==(new Date().getFullYear()) && selectedTIVYear!==(new Date().getFullYear())) && Object.values(diffValueArray)
                    
                      ?.map((Kia, i) => {
                        return (
                          <td key={i} className="border-r-[1px] border-[#cfcfd7]  text-center ">
                            <div
                              className={`w-full h-full px-[.5rem] py-[1rem]`}
                            >
                              <h1
                                className={`rounded-[8px] px-[.25rem] ${
                                  Kia > 0
                                    ? " text-[#43A047]"
                                    : " text-[#E53935]"
                                }`}
                              >
                                {Kia}
                              </h1>
                            </div>
                          </td>
                        );
                      })}

                    {(selectedTIVYear2===(new Date().getFullYear()) || selectedTIVYear===(new Date().getFullYear())) && Array(12 - (currentMonthIndex + 1))
                      .fill("-")
                      .map((item, i) => {
                        return (
                          <td key={i} className="border-r-[1px] border-[#cfcfd7]  text-center ">
                            <div
                              className={`w-full h-full px-[.5rem] py-[1rem] `}
                            >
                              <h1
                                className={`rounded-[8px] px-[.25rem] ]
                          }`}
                              >
                                {item}
                              </h1>
                            </div>
                          </td>
                        );
                      })}
                    <td className="text-center">
                      <div className={`w-full h-full px-[.5rem] py-[1rem]`}>
                        <h1
                          className={`rounded-[8px] px-[.25rem] ${
                            TIV2025Total - TIV2024Total > 0
                              ? " text-[#43A047]"
                              : " text-[#E53935]"
                          }`}
                        >
                          {TIV2025Total - TIV2024Total}
                        </h1>
                      </div>
                    </td>
                  </tr>
                  {/* --------------------------------------------------------------------------------------------- */}
                  <tr className="border-b-[1px] border-[#cfcfd7]">
                    <td className=" border-r-[1px] border-[#cfcfd7] text-center py-[1rem] font-medium text-[#0b85ff]">
                      % Change
                    </td>

                    {(selectedTIVYear2===(new Date().getFullYear()) || selectedTIVYear===(new Date().getFullYear())) && Object.values(diffArray)
                      ?.slice(0, currentMonthIndex + 1)
                      ?.map((increase, i) => {
                        return (
                          <td key={i} className="border-r-[1px] border-[#cfcfd7] text-center">
                            <div
                              className={`w-full h-full px-[.5rem] py-[1rem]`}
                            >
                              <h1
                                className={`rounded-[8px] px-[.25rem] ${
                                  increase > 0
                                    ? "bg-[#E8F5E9] text-[#43A047]"
                                    : "bg-[#FFEBEE] text-[#E53935]"
                                }`}
                              >
                                {increase}
                              </h1>
                            </div>
                          </td>
                        );
                      })}
                    {(selectedTIVYear2!==(new Date().getFullYear()) && selectedTIVYear!==(new Date().getFullYear())) && Object.values(diffArray)
                      ?.map((increase, i) => {
                        return (
                          <td key={i} className="border-r-[1px] border-[#cfcfd7] text-center">
                            <div
                              className={`w-full h-full px-[.5rem] py-[1rem]`}
                            >
                              <h1
                                className={`rounded-[8px] px-[.25rem] ${
                                  increase > 0
                                    ? "bg-[#E8F5E9] text-[#43A047]"
                                    : "bg-[#FFEBEE] text-[#E53935]"
                                }`}
                              >
                                {increase}
                              </h1>
                            </div>
                          </td>
                        );
                      })}

                    {(selectedTIVYear2===(new Date().getFullYear()) || selectedTIVYear===(new Date().getFullYear())) && Array(12 - (currentMonthIndex + 1))
                      .fill("-")
                      .map((item, i) => {
                        return (
                          <td key={i} className="border-r-[1px] border-[#cfcfd7] border-[#cfcfd7] text-center">
                            <div
                              className={`w-full h-full px-[.5rem] py-[1rem]`}
                            >
                              <h1
                                className={`rounded-[8px] px-[.25rem] 
                          }`}
                              >
                                {item}
                              </h1>
                            </div>
                          </td>
                        );
                      })}
                    <td className="text-center">
                      <div
                        className={`w-full h-full px-[.5rem] py-[1rem] flex items-center justify-center`}
                      >
                        <h1
                          className={`rounded-[8px] px-[.5rem] w-fit ${
                            parseFloat(
                              ((TIV2025Total - TIV2024Total) / TIV2025Total) *
                                100
                            ).toFixed(2) > 0
                              ? "bg-[#E8F5E9] text-[#43A047]"
                              : "bg-[#FFEBEE] text-[#E53935]"
                          }`}
                        >
                          {parseFloat(
                            ((TIV2025Total - TIV2024Total) / TIV2025Total) * 100
                          ).toFixed(2)}
                        </h1>
                      </div>
                    </td>
                  </tr>
                  {/* -------------------------------------------------------------------------------------------------- */}
                  <tr className="border-b-[1px] border-[#cfcfd7]">
                    <td className=" border-r-[1px] border-[#cfcfd7] text-center py-[1rem] font-medium text-[#0b85ff]">
                      {" "}
                      {TIVBrand.split(" ")[0]} Share {selectedTIVYear}
                    </td>
                     {selectedTIVYear===(new Date().getFullYear()) && Object.values(Brand2024)
                      ?.slice(0, currentMonthIndex + 1)
                      ?.map((Kia, i) => {
                        return (
                          <td key={i} className="text-center border-r-[1px] border-[#cfcfd7]">
                            {Kia}
                          </td>
                        );
                      })}
                    {selectedTIVYear!==(new Date().getFullYear()) && Object.values(Brand2024)
                      ?.map((Kia, i) => {
                        return (
                          <td key={i} className="text-center border-r-[1px] border-[#cfcfd7]">
                            {Kia}
                          </td>
                        );
                      })}

                    {selectedTIVYear===(new Date().getFullYear()) && Array(12 - (currentMonthIndex + 1))
                      .fill("-")
                      .map((item, i) => {
                        return (
                          <td key={i} className="text-center border-r-[1px] border-[#cfcfd7]">
                            <div
                              className={`w-full h-full px-[.5rem] py-[1rem]`}
                            >
                              <h1
                                className={`rounded-[8px] px-[.25rem] 
                          }`}
                              >
                                {item}
                              </h1>
                            </div>
                          </td>
                        );
                      })}

                    <td className="text-center">{Brand2024Total}</td>
                  </tr>
                  {/* ----------------------------------------------------------------------------------------------------- */}
                  <tr className="border-b-[1px] border-[#cfcfd7]">
                    <td className=" border-r-[1px] border-[#cfcfd7]    text-center py-[1rem] font-medium text-[#0b85ff]">
                      {" "}
                      {TIVBrand.split(" ")[0]} Share {selectedTIVYear2}
                    </td>
                    {selectedTIVYear2===(new Date().getFullYear()) && Object.values(Brand2025)
                      ?.slice(0, currentMonthIndex + 1)
                      ?.map((Kia, i) => {
                        return (
                          <td key={i} className="text-center border-r-[1px] border-[#cfcfd7]">
                            {Kia}
                          </td>
                        );
                      })}
                    {selectedTIVYear2!==(new Date().getFullYear()) && Object.values(Brand2025)
                      ?.map((Kia, i) => {
                        return (
                          <td key={i} className="text-center border-r-[1px] border-[#cfcfd7]">
                            {Kia}
                          </td>
                        );
                      })}

                    {selectedTIVYear2===(new Date().getFullYear()) && Array(12 - (currentMonthIndex + 1))
                      .fill("-")
                      .map((item, i) => {
                        return (
                          <td key={i} className="text-center border-r-[1px] border-[#cfcfd7]">
                            <div
                              className={`w-full h-full px-[.5rem] py-[1rem]`}
                            >
                              <h1
                                className={`rounded-[8px] px-[.25rem] 
                          }`}
                              >
                                {item}
                              </h1>
                            </div>
                          </td>
                        );
                      })}
                    <td className="text-center ">{Brand2025Total}</td>
                  </tr>
                  {/* ------------------------------------------------------------------------------------------------------ */}
                  <tr className="border-b-[1px] border-[#cfcfd7]">
                    <td className=" border-r-[1px] border-[#cfcfd7] text-center py-[1rem] font-medium px-[.5rem] whitespace-nowrap text-[#0b85ff]">
                      {" "}
                      Value Change
                    </td>
                    {(selectedTIVYear2===(new Date().getFullYear()) || selectedTIVYear===(new Date().getFullYear())) && Object.values(BrandDiffValue)
                      ?.slice(0, currentMonthIndex + 1)
                      ?.map((Kia, i) => {
                        return (
                          <td key={i} className="text-center border-r-[1px] border-[#cfcfd7]">
                            <div
                              className={`w-full h-full px-[.5rem] py-[1rem]`}
                            >
                              <h1
                                className={`rounded-[8px] px-[.25rem] ${
                                  Kia > 0
                                    ? " text-[#43A047]"
                                    : " text-[#E53935]"
                                }`}
                              >
                                {Kia}
                              </h1>
                            </div>
                          </td>
                        );
                      })}
                    {(selectedTIVYear2!==(new Date().getFullYear()) && selectedTIVYear!==(new Date().getFullYear())) && Object.values(BrandDiffValue)
                      ?.map((Kia, i) => {
                        return (
                          <td key={i} className="text-center border-r-[1px] border-[#cfcfd7]">
                            <div
                              className={`w-full h-full px-[.5rem] py-[1rem]`}
                            >
                              <h1
                                className={`rounded-[8px] px-[.25rem] ${
                                  Kia > 0
                                    ? " text-[#43A047]"
                                    : " text-[#E53935]"
                                }`}
                              >
                                {Kia}
                              </h1>
                            </div>
                          </td>
                        );
                      })}

                    {(selectedTIVYear2===(new Date().getFullYear()) || selectedTIVYear===(new Date().getFullYear())) && Array(12 - (currentMonthIndex + 1))
                      .fill("-")
                      .map((item, i) => {
                        return (
                          <td key={i} className="text-center border-r-[1px] border-[#cfcfd7]">
                            <div
                              className={`w-full h-full px-[.5rem] py-[1rem]`}
                            >
                              <h1
                                className={`rounded-[8px] px-[.25rem] 
                          }`}
                              >
                                {item}
                              </h1>
                            </div>
                          </td>
                        );
                      })}
                    <td className="text-center">
                      <div className={`w-full h-full px-[.5rem] py-[1rem]`}>
                        <h1
                          className={`rounded-[8px] px-[.25rem] ${
                            Brand2025Total - Brand2024Total > 0
                              ? " text-[#43A047]"
                              : " text-[#E53935]"
                          }`}
                        >
                          {Brand2025Total - Brand2024Total}
                        </h1>
                      </div>
                    </td>
                  </tr>
                  {/* ----------------------------------------------------------------------------------------------------- */}
                  <tr className="">
                    <td className=" border-r-[1px] border-[#cfcfd7]  text-center py-[1rem] font-medium px-[.5rem] text-[#0b85ff]">
                      {" "}
                      % Change
                    </td>
                    { (selectedTIVYear2===(new Date().getFullYear()) || selectedTIVYear===(new Date().getFullYear())) && Object.values(BrandDiff)
                      ?.slice(0, currentMonthIndex + 1)
                      ?.map((Kia, i) => {
                        return (
                          <td
                            key={i}
                            className={`text-center border-r-[1px]  border-[#cfcfd7]  `}
                          >
                            <div
                              className={`w-full h-full px-[.5rem] py-[1rem]`}
                            >
                              <h1
                                className={`rounded-[8px] px-[.25rem] ${
                                  Kia > 0
                                    ? "bg-[#E8F5E9] text-[#43A047]"
                                    : "bg-[#FFEBEE] text-[#E53935]"
                                }`}
                              >
                                {Kia}
                              </h1>
                            </div>
                          </td>
                        );
                      })}
                    { (selectedTIVYear2!==(new Date().getFullYear()) && selectedTIVYear!==(new Date().getFullYear())) && Object.values(BrandDiff)
                      ?.map((Kia, i) => {
                        return (
                          <td
                            key={i}
                            className={`text-center border-r-[1px]  border-[#cfcfd7]  `}
                          >
                            <div
                              className={`w-full h-full px-[.5rem] py-[1rem]`}
                            >
                              <h1
                                className={`rounded-[8px] px-[.25rem] ${
                                  Kia > 0
                                    ? "bg-[#E8F5E9] text-[#43A047]"
                                    : "bg-[#FFEBEE] text-[#E53935]"
                                }`}
                              >
                                {Kia}
                              </h1>
                            </div>
                          </td>
                        );
                      })}

                    {(selectedTIVYear2===(new Date().getFullYear()) || selectedTIVYear===(new Date().getFullYear())) && Array(12 - (currentMonthIndex + 1))
                      .fill("-")
                      .map((item, i) => {
                        return (
                          <td key={i} className="text-center border-r-[1px] border-[#cfcfd7]">
                            <div
                              className={`w-full h-full px-[.5rem] py-[1rem]`}
                            >
                              <h1
                                className={`rounded-[8px] px-[.25rem] 
                          }`}
                              >
                                {item}
                              </h1>
                            </div>
                          </td>
                        );
                      })}
                    <td className=" text-center flex items-center justify-center py-[1rem]">
                      <div
                        className={`  w-fit px-[1rem] rounded-[8px]
                    ${
                      parseFloat(
                        ((Brand2025Total - Brand2024Total) / Brand2025Total) *
                          100
                      ).toFixed(2) > 0
                        ? "bg-[#E8F5E9] text-[#43A047]"
                        : "bg-[#FFEBEE] text-[#E53935]"
                    }
                    `}
                      >
                        {parseFloat(
                          ((Brand2025Total - Brand2024Total) / Brand2025Total) *
                            100
                        ).toFixed(2)}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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
            RTOData={RTOData}
            StatesYearlyData={StatesYearlyData}
            selectedRTO={DealerLocation?.rto}
            selectedState={DealerLocation?.state}
            PanIndiaData={PanIndiaData}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
