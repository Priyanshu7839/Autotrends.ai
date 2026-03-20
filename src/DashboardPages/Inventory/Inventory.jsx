import {
  AverageSalesFetch,
  AverageSalesUpload,
  CarDetails,
  CarNames,
  GetAllStock,
  GetDealerCodes,
  InventoryDataFetch,
  InventoryList,
  InventoryListOrderDealer,
  UpdateStock,
  UploadXL,
} from "../../Utils/APICalls";
import { CircleX, LoaderCircle } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { FiDownload, FiUpload } from "react-icons/fi";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { LuArrowUpDown } from "react-icons/lu";
import {
  MdFilterListOff,
  MdKeyboardArrowDown,
  MdNavigateNext,
} from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const Inventory = () => {
  const DealerData = useSelector((state) => state.DealershipDetails);

  const dispatch = useDispatch();

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

  //* ///////////////////////////////////////////Filter////////////////////////////////////////////////////////////////////

  const [FilterName, setFilterName] = useState(null);
  const [FilterValue, setFilterValue] = useState(null);


  //* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Clear old refs on rerender
  rowRefs.current = [];

  const [carModels, setCarModels] = useState([]);
  const [carVariants, setcarVariants] = useState([]);
  const [colors, setcolors] = useState([]);

  const [AverageSalesUI, setAverageSalesUi] = useState(null);
  const GetAverageSales = async () => {
    try {
      const response = await AverageSalesFetch(DealerData?.id);

      setAverageSalesUi(response?.data?.Data?.[0]?.["Average Sales"]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const CarName = async () => {
      const result = await CarNames();
      setCarModels(result?.data?.DATA?.carModels);
    };
    CarName();

    GetAverageSales(DealerData?.id);
  }, []);

  const GetCarDetails = async (model) => {
    const result = await CarDetails(
      model.brandSlug,
      model.slug,
      model.modelUrl
    );
    setcarVariants(result?.variantTable?.variantList);
    setcolors(result?.galleryColorSection?.items);
  };

  const InsuranceOptions = [
    "ICICI Lombard General Insurance",
    "Bajaj Allianz General Insurance",
    "HDFC ERGO General Insurance",
    "TATA AIG General Insurance",
    "Reliance General Insurance",
    "New India Assurance (Government-owned)",
    "United India Insurance Company (Government-owned)",
    "Oriental Insurance Company (Government-owned)",
    "National Insurance Company (Government-owned)",
    "SBI General Insurance",
    "Cholamandalam MS General Insurance",
    "Bharti AXA General Insurance (now merged with ICICI Lombard)",
    "Kotak Mahindra General Insurance",
    "Edelweiss General Insurance",
    "Go Digit General Insurance",
    "ACKO General Insurance (Digital-first)",
    "Liberty General Insurance",
    "Future Generali General Insurance",
    "Zuno General Insurance (formerly Edelweiss General)",
    "Raheja QBE General Insurance",
  ];

  const ExpectedDelivery = [
    "Same Day Delivery",
    "Delivery Within 15 Days",
    "Delivery After 15 Days",
  ];

  const [SelectedDelivery, setSelectedDelivery] = useState("Select");
  const [showDeliveryForm, setShowDeliveryForm] = useState(false);

  const [selectedCarModel, setSelectedCarModels] = useState("Choose Model");
  const [showModelOptions, setShowModelOptions] = useState(false);

  const [selectedCarVariant, setSelectedCarVariant] =
    useState("Choose Variant");
  const [showVariantOptions, setShowVariantOptions] = useState(false);

  const [selectedColor, setSelectedColor] = useState("Choose Color");
  const [showColorOptions, setShowColorOptions] = useState(false);

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [showyearOptions, setShowYearOptions] = useState(false);

  const [selectedInsurance, setSelectedInsurance] = useState("Select");
  const [showInsuranceForm, setShowInsuranceForm] = useState(false);

  const [ExShowroom, setExshowroom] = useState("");

  const [prices, setPrices] = useState({
    DealerData: "14",
    car_id: "",
    variant_id: "",
    stock: "",
    rto: "",
    accessories: "",
    tcs: "",
    insurance: "",
    fasttag: "",
    warranty: "",
    miscelleneous: "",
    qty: "",
    color_code: "",
  });

  const resetState = () => {
    setcarVariants([]);
    setSelectedDelivery("Select");
    setSelectedYear(new Date().getFullYear());
    setSelectedCarModels("Choose Model");
    setSelectedCarVariant("Choose Variant");
    setSelectedColor("Choose Color");
    setSelectedInsurance("Select");
    setExshowroom("");
    setPrices({
      DealerData: "14",
      car_id: "",
      variant_id: "",
      stock: "",
      rto: "",
      accessories: "",
      tcs: "",
      insurance: "",
      fasttag: "",
      warranty: "",
      miscelleneous: "",
      qty: "",
      color_code: "",
    });
    setPageNumber("1");
    setError({});
  };

  const [showForm, setShowForm] = useState(false);
  const [pageNumber, setPageNumber] = useState("1");
  const [Error, setError] = useState({});
  const [updating, setupdating] = useState(false);

  const validator = (model, variant, color, stock) => {
    const error = {};

    if (model === "Choose Model") {
      error.model = true;
    }

    if (variant === "Choose Variant") {
      error.variant = true;
    }

    if (color === "Choose Color") {
      error.color = true;
    }

    if (stock === "") {
      error.stock = true;
    }

    setError(error);
    return error;
  };

  const SubmitPage1 = () => {
    setError({});
    const error = validator(
      selectedCarModel,
      selectedCarVariant,
      selectedColor,
      prices.stock
    );

    if (Object.keys(error).length === 0) {
      setPageNumber("2");
    }
  };

  const handleFinalSubmit = async () => {
    setupdating(true);
    const bid =
      parseInt(ExShowroom) +
      parseInt(prices.accessories || 0) +
      parseInt(prices.fasttag || 0) +
      parseInt(prices.insurance || 0) +
      parseInt(prices.miscelleneous || 0) +
      parseInt(prices.rto || 0) +
      parseInt(prices.tcs || 0) +
      parseInt(prices.warranty || 0);
    try {
      const result = await UpdateStock(
        prices.DealerData,
        prices.car_id,
        prices.variant_id,
        selectedYear,
        selectedColor,
        prices.color_code,
        prices.stock,
        prices.accessories,
        prices.tcs,
        prices.insurance,
        selectedInsurance,
        prices.fasttag,
        prices.warranty,
        prices.miscelleneous,
        prices.rto,
        SelectedDelivery,
        prices.qty,
        bid
      );

      if (result.data.msg === "Inventory Updated") {
        setShowForm(false);
        resetState();
      }
    } catch (error) {
      console.log(`${error}`);
    }

    setupdating(false);
  };

  const [dealerCodes, setDealerCodes] = useState([]);

  useEffect(() => {
    const FetchDealerCodes = async () => {
      try {
        const response = await GetDealerCodes(DealerData?.id);
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
  const [InventoryItems, setInventoryItems] = useState([]);

 

  const [InventoryData, SetInventoryData] = useState({
    CapitalStuck: "",
    totalStock: "",
    uniqueModels: "",
    uniqueVariants: "",
    ageBuckets: "",
    lastUpdateDate: "",
    ages: "",
    stockStatus:[]
  });


  const [stockStatusFilter,setStockStatusFilter] = useState('ALL')
  const [modelFilter,setModelFilter] = useState('ALL')
  const [variantFilter,setVariantFilter] = useState('ALL')


  useEffect(() => {
    const FetchInventoryData = async () => {


      const response = await InventoryDataFetch(
        DealerData?.id,
        selectedDealerCode,
        stockStatusFilter,
        modelFilter,
        variantFilter
      
      );


      console.log(response.stockStatus)
      SetInventoryData({
        ...InventoryData,
        CapitalStuck: response.capitalStuck,
        totalStock: response.totalCars,
        uniqueModels: response.uniqueModels,
        uniqueVariants: response.uniqueVariants,
        ageBuckets: response.ageBuckets,
        lastUpdateDate: response.lastUpdateDate,
        ages: response.ages,
        stockStatus:response.stockStatus
      });
    };

    FetchInventoryData();
  }, [selectedDealerCode,stockStatusFilter,modelFilter,variantFilter]);



  useEffect(() => {
    const GetAllStocks = async () => {
      const response = await GetAllStock(DealerData?.id, selectedDealerCode,stockStatusFilter,modelFilter,variantFilter);

      setInventoryItems(response?.data?.stock);
    };

    GetAllStocks();
  }, [selectedDealerCode,stockStatusFilter,modelFilter,variantFilter]);

   const agesObj = InventoryData?.ages ?? {};

const labels = Object.keys(agesObj);
const values = Object.values(agesObj);

const data = {
  labels,
  datasets: [
    {
      label: "Count",
      data: values,
      backgroundColor: "#0b85ff",
      borderColor: "#0b85ff",
      borderWidth: 1,
      borderRadius: 10,
    },
  ],
};
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  

  return (
    <div className="w-[calc(100vw-230px)] h-[100vh]  p-[1rem] font-roboto ">
      <div
        className={`w-full h-full border-[1px] border-[#cfcfd5] rounded-[20px] p-[1rem] flex flex-col gap-[1rem]  relative
        overflow-y-scroll
          `}
        style={{ scrollbarWidth: "none" }}
      >
        {/* -----------------------------Loader----------------------------------------- */}
        {/* {loading && (
          <div className="w-full flex absolute top-0 left-0 z-10 h-full bg-[rgba(0,0,0,0.7)]  items-center justify-center">
            <div className="w-[400px] h-[200px] rounded-[10px] bg-[white] p-[1rem] flex flex-col items-start justify-between">
              <h1 className="flex items-center justify-start gap-[.5rem] text-[1.25rem] font-medium font-2 mb-[10px] ">
                <LoaderCircle className="rotating" />
                Loading Your Data...
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
                  Getting Your Own Tailored Inventory...
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
        )} */}
        {/* -----------------------------Loader----------------------------------------- */}

        <div className="w-full   flex flex-col gap-[1rem]">
          <div className="flex flex-col gap-[1rem] p-[1rem] border-[1px] border-[1px] border-[#cfcfd5] rounded-[16px] bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A] ">
            <div className="flex  items-start justify-between">
              <h1 className="text-[1.5rem] font-2 text-[#ffffff]">
                Normal Inventory
              </h1>
              <div className="flex flex-col gap-[.5rem] justify-end items-end">
                <div className="flex items-center justify-center gap-[1rem]">
                  <button
                    onClick={() => {
                      setselectedDealerCodeShow(!selectedDealerCodeShow);
                    }}
                    className={`py-[.25rem] px-[1rem] border-[#FFFFFF4D] border-[1px] text-[white] font-medium text-[.875rem] rounded-[6px] cursor-pointer flex items-center justify-center gap-[.5rem] hover:bg-[#0b85ff] hover:text-[white] relative
            ${
              selectedDealerCodeShow
                ? "border-b-[0px] rounded-b-[0px] bg-[#0b85ff] text-[white]"
                : "text-[#0b85ff]"
            }
            `}
                  >
                    Dealer Code - {selectedDealerCode}
                    <MdKeyboardArrowDown />
                    <div
                      className={` border-[#0b85ff] rounded-[6px] absolute top-[100%] z-10 left-[-1px] outline-none focus:none text-[black] font-1 font-normal px-[1rem] py-[.25rem] w-[calc(100%+2px)] flex-col gap-[.5rem] bg-[white]
                ${
                  selectedDealerCodeShow
                    ? "flex border-[1px] border-t-[0px] rounded-t-[0px]"
                    : "hidden"
                }
                `}
                    >
                      {Array.isArray(dealerCodes) &&
                        dealerCodes?.length !== 0 &&
                        dealerCodes?.map((code, i) => (
                          <h1
                            onClick={() => {
                              setselectedDealerCode(code);
                            }}
                            key={i}
                          >
                            {code}
                          </h1>
                        ))}
                    </div>
                  </button>

                  <button
                    className={`py-[.25rem] px-[1rem] border-[#ffffff4d] border-[1px]  font-medium text-[.875rem] rounded-[6px] cursor-pointer flex items-center justify-center gap-[.5rem] hover:bg-[#0b85ff] hover:text-[white] relative  text-[white]
              
                `}
                    onClick={() => {
                      setStockStatusFilter('ALL')
                    }}
                  >
                    <MdFilterListOff />
                    Reset Filters
                  </button>

                  <button
                    className="py-[.25rem] px-[1rem] border-[#ffffff4d] border-[1px] text-[white] font-medium text-[.875rem] rounded-[6px] cursor-pointer flex items-center justify-center gap-[.5rem] hover:bg-[#0b85ff] hover:text-[white] relative"
                    onClick={() => {
                      window.location.href =
                        `https://autotrends-backend.onrender.com/exceldownloads/DownloadInventory/${DealerData?.id}`;
                    }}
                  >
                    <FiDownload />
                    Download Excel
                    {/* <input
                accept=".xlsx,xls"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  e.target.value = "";
                }}
                type="file"
                name=""
                id=""
                className="w-full h-full outline-none border-none absolute top-0 left-0 opacity-0"
              /> */}
                  </button>
                </div>
                <span className="text-[.75rem] font-1 text-[#ffffff]">
                  Last Updated :{" "}
                  {InventoryData?.lastUpdateDate
                    ? new Date(InventoryData.lastUpdateDate).toLocaleString(
                        "en-IN",
                        {
                          dateStyle: "medium",
                          timeStyle: "short",
                        }
                      )
                    : "-"}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-[.5rem]  w-full text-white">
            <div className="flex items-center justify-center gap-[.5rem] w-full">
                <div className="px-[.75rem] py-[.5rem] border-[1px] border-[#ffffff4d] rounded-[8px] h-[74px] w-full bg-[#FFFFFF26] backdrop-blur-sm shadow-lg">
                <h1 className="font-2-book text-[1.15rem] text-center">
                  <h1 className="font-2">Capital Stuck</h1>
                  <h1 className="font-2-book">
                    ₹{" "}
                    {Math.round(InventoryData?.CapitalStuck).toLocaleString(
                      "en-IN"
                    )}
                  </h1>
                </h1>
              </div>
              <div className="px-[.75rem] py-[.5rem] border-[1px] border-[#ffffff4d] rounded-[8px] h-[74px] w-full bg-[#FFFFFF26] backdrop-blur-sm shadow-lg">
                <h1 className="font-2-book text-[1.15rem] text-center">
                  <h1 className="font-2"> Total Units </h1>
                  <h1 className="font-2-book">{InventoryData?.totalStock}</h1>
                </h1>
              </div>

              <div className="px-[.75rem] py-[.5rem] border-[1px] border-[#ffffff4d] rounded-[8px] h-[74px] w-full bg-[#FFFFFF26] backdrop-blur-sm shadow-lg">
                <h1 className="font-2-book text-[1.15rem] text-center">
                  <h1 className="font-2"> Models</h1>
                  <h1 className="font-2-book">
                    {InventoryData?.uniqueModels?.length}
                  </h1>
                </h1>
              </div>
              <div className="px-[.75rem] py-[.5rem] border-[1px] border-[#ffffff4d] rounded-[8px] h-[74px] w-full bg-[#FFFFFF26] backdrop-blur-sm shadow-lg">
                <h1 className="font-2-book text-[1.15rem] text-center">
                  <h1 className="font-2">Variants</h1>
                  <h1 className="font-2-book">
                    {InventoryData?.uniqueVariants?.length}
                  </h1>
                </h1>
              </div>
            </div>
             <div className="grid grid-cols-4 items-center justify-center gap-[.5rem] w-full ">
              {
              InventoryData?.stockStatus?.map((item)=>{
                return(
                   <div
                   onClick={()=>{
                    if(stockStatusFilter === 'ALL'){
                      setStockStatusFilter(item?.["Stock Status"])
                    }
                    else{
                      setStockStatusFilter('ALL')
                    }
                   }}
                   className={`px-[.75rem] py-[.5rem] border-[1px] border-[#ffffff4d] rounded-[8px] h-[88px]  backdrop-blur-sm shadow-lg flex flex-col items-center justify-center cursor-pointer *:
                   ${stockStatusFilter === item?.["Stock Status"]?'bg-[#FFFFFF70]':'bg-[#FFFFFF26]'}
                   `}>
                <h1 className="font-2-book text-[1.15rem] text-center capitalize">
                  <h1 className="font-2">{item?.["Stock Status"]}</h1>
                  <h1 className="font-2-book">
                    {item.count}
                  </h1>
                </h1>
              </div>
                )
              })
             }
             </div>
            </div>
          </div>
         

          <div className="flex items-center justify-between gap-[1rem]">
            <div
              className="py-[.5rem] w-full px-[1rem] border-[1px] border-[#cfcfd7] rounded-[8px] flex flex-col gap-[.5rem] justify-between h-[254px] overflow-y-scroll"
              style={{ scrollbarWidth: "none" }}
            >
              <h1 className="font-2 text-[1.15rem]">Models</h1>

              <div className="flex flex-col h-full justify-start gap-[1rem]">
                {InventoryData?.uniqueModels?.length !== 0 &&
                  InventoryData?.uniqueModels?.map((model, i) => {
                   
                    return (
                      <div
                        key={i}
                        className={`flex items-center justify-between gap-[3rem]  px-[1rem] pr-[.5rem] py-[.25rem] rounded-[8px] border-[1px] border-[#0b85ff66] cursor-pointer ${
                          modelFilter === model.Model
                            ? "bg-[#0b85ff33]"
                            : "hover:bg-[#0b85ff1a]"
                        }`}
                        onClick={() => {
                          if (
                            modelFilter === model.Model
                          ) {
                            setModelFilter('ALL')
                          } else {
                          setModelFilter(model.Model)
                          }
                        }}
                      >
                        <h1 className="text-[.85rem] font-2-book">
                          {model?.Model}
                        </h1>
                        <h1 className="text-[.85rem] font-2-book bg-[#0b85ff66] w-[30px] text-center rounded-[6px]">
                          {model?.count}
                        </h1>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div
              className="py-[.5rem] w-full px-[1rem] border-[1px] border-[#cfcfd7] rounded-[8px] flex flex-col gap-[.5rem] h-[254px] overflow-y-scroll"
              style={{ scrollbarWidth: "none" }}
            >
              <div className="flex items-center justify-between">
                <h1 className="font-2 text-[1.15rem]">Variants</h1>

                <div className="flex items-center justify-between gap-[1rem]">
                  <h1 className="font-2-book text-[.85rem]">Total</h1>
                  <h1 className="font-2-book text-[.85rem]">Allocated</h1>
                  <h1 className="font-2-book text-[.85rem]">Free</h1>
                </div>
              </div>
              <div className="flex flex-col gap-[1rem] items-between justify-between">
                {InventoryData?.uniqueVariants?.length !== 0 &&
                  InventoryData?.uniqueVariants?.map((variant, i) => {
                    return (
                      <div
                        key={i}
                        onClick={() => {
                          variantFilter === variant?.Variant
                            ? setVariantFilter('ALL')
                            : setVariantFilter(variant?.Variant);
                        }}
                        className={`flex items-center justify-between gap-[3rem] px-[1rem] pr-[.5rem] py-[.25rem] rounded-[8px] border-[1px] border-[#FFE6CC] cursor-pointer ${
                          variantFilter === variant?.Variant
                            ? "bg-[#ffe6cc66]"
                            : "hover:bg-[rgba(0,0,0,0.1)]"
                        }`}
                      >
                        <h1 className="text-[.85rem] font-2-book">
                          {variant?.Variant}
                        </h1>
                        <div className="flex items-center justify-between gap-[1.5rem]">
                          <h1
                            className={`text-[.85rem] font-2-book  w-[30px] text-center rounded-[6px] bg-[#FFE6CC]
                                 
                                  `}
                          >
                            {variant?.count}
                          </h1>
                          <h1
                            className={`text-[.85rem] font-2-book  w-[30px] text-center rounded-[6px] bg-[#FFE6CC]
                                 
                                  `}
                          >
                            {variant?.allocated}
                          </h1>
                          <h1
                            className={`text-[.85rem] font-2-book  w-[30px] text-center rounded-[6px] bg-[#FFE6CC]
                                 
                                  `}
                          >
                            {variant?.free}
                          </h1>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-[.5rem]">
            <div
              className="py-[.5rem] h-full w-full  px-[1rem] border-[1px] border-[#cfcfd7] rounded-[8px] flex flex-col justify-between gap-[.5rem] font-2-book text-[.85rem] overflow-y-scroll"
              style={{ scrollbarWidth: "none" }}
            >
              <h1 className="font-2 text-[1.15rem]">Ageing By Models</h1>

              <div className="flex justify-between gap-[1rem] h-full">
                <div className="flex flex-col justify-between gap-[1rem]">
                  <h1 className="font-2">Model/Days</h1>
                  <div className="flex flex-col justify-start h-full gap-[.75rem]">
                    {InventoryData?.ageBuckets?.length !== 0 &&
                      InventoryData?.ageBuckets?.map((age, i) => {
                        return <h1 key={i}>{age?.Model}</h1>;
                      })}
                  </div>
                </div>

                <div className="flex flex-col justify-between h-full gap-[1rem]  w-[80%] ">
                  <div className="flex items-center justify-between gap-[.5rem] font-2 w-full text-center ">
                   

                    <h1 className=" w-[80px] bg-[#cfcfd766] rounded-[8px]">
                      0-15
                    </h1>
                    <h1 className=" w-[80px] bg-[#cfcfd766] rounded-[8px]">
                      16-30
                    </h1>
                    <h1 className=" w-[80px] bg-[#cfcfd766] rounded-[8px]">
                      31-45
                    </h1>
                    <h1 className=" w-[80px] bg-[#cfcfd766] rounded-[8px]">
                      46-60
                    </h1>

                    <h1 className=" w-[80px] bg-[#cfcfd766] rounded-[8px]">
                      61-75
                    </h1>
                    <h1 className=" w-[80px] bg-[#cfcfd766] rounded-[8px]">
                      75+
                    </h1>
                  </div>

                  <div className="flex flex-col items-center justify-between h-full gap-[.75rem] w-full">
                    {InventoryData?.ageBuckets?.length !== 0 &&
                      InventoryData?.ageBuckets?.map((age, i) => {
                        return (
                          <div className="flex items-center justify-between w-full gap-[.5rem] ">
                            {Object.values(age).map((value, i) => {
                              return (
                                i !== 0 && (
                                  <div
                                    className={`w-[80px] text-center rounded-[6px] 
                                  ${i === 1 && "bg-[#E0FFDD]"}
                                  ${i === 2 && "bg-[#CCFFFF]"}
                                  ${i === 3 && "bg-[#FFE6CC]"}
                                  ${i === 4 && "bg-[#FFE6CC]"}
                                  ${i === 5 && "bg-[#FFCCCC]"}
                                  ${i === 6 && "bg-[#FFB3B3]"}
                                  `}
                                  >
                                    {value}
                                  </div>
                                )
                              );
                            })}
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-[.5rem] w-full">
            <div className="py-[.5rem] px-[1rem] rounded-[8px] w-[800px] h-[300px] border-[1px] border-[#cfcfd7]">
              <Bar data={data} options={options} />
            </div>
            <div className="h-full w-[300px] border-[1px] border-[#cfcfd7] rounded-[8px] p-[1rem] relative flex items-end justify-end">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Minima, modi illum ex blanditiis, non iste dolorem
                necessitatibus voluptas id incidunt delectus saepe odit sed
                natus laboriosam eaque facilis labore quae? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Architecto, iste.
              </p>

              <div className="w-full h-full absolute rounded-[8px]  top-0 left-0 bg-[white]/20 backdrop-blur-sm flex items-center justify-center">
                <button className="py-[.5rem] px-[1rem] text-[white] bg-[#0b85ff] font-2 border-[1px] border-[#0b85ff] rounded-[8px] text-[.85rem]">
                  Coming Soon
                </button>
                <h1 className="font-2 text-[1.15rem] absolute top-3 left-0 w-full px-[1rem] flex items-center justify-start gap-[.5rem]">
                  <span>AI Insights</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18px"
                    height="24px"
                  >
                    <path d="M10.764 2.002l1.749 4.022c.506.506.958.958 1.464 1.464l4.022 1.749c0 .728 0 .799 0 1.527l-4.022 1.749c-.506.506-.958.958-1.464 1.464l-1.749 4.022c-.728 0-.799 0-1.527 0l-1.749-4.022c-.506-.506-.958-.958-1.464-1.464l-4.022-1.749c0-.728 0-.799 0-1.527l4.022-1.749c.506-.506.958-.958 1.464-1.464l1.749-4.022C9.964 2.002 10.036 2.002 10.764 2.002zM18.38 14.031l.796 1.83c.333.333.63.63.963.963l1.83.796c0 .362 0 .398 0 .76l-1.83.796c-.333.333-.63.63-.963.963l-.796 1.83c-.362 0-.398 0-.76 0l-.796-1.83c-.333-.333-.63-.63-.963-.963l-1.83-.796c0-.362 0-.398 0-.76l1.83-.796c.333-.333.63-.63.963-.963l.796-1.83C17.982 14.031 18.018 14.031 18.38 14.031z" />
                  </svg>
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------------------------------------------- */}

        {/* --------------------------------------------------------------------------------------------------------------------- */}

        <div className="w-full py-[.5rem] px-[1rem] border-[1px] border-[#cfcfd7] rounded-[8px] flex flex-col gap-[1rem]">
          <h1 className="text-[1.25rem] font-2">Inventory Stock</h1>
          <div
            className="w-full p-[.5rem] px-[1rem] border-[1px] border-[#cfcfd7] bg-[#0b85ff] text-[white] rounded-[8px] font-2 text-[.875rem] flex items-center justify-between overflow-x-scroll"
            ref={headerRef}
            style={{ scrollbarWidth: "none" }}
            onScroll={(e) => syncScroll("header", e.target.scrollLeft)}
          >
            <h1 className="text-center min-w-[100px] ">Model</h1>
            <h1 className="text-center min-w-[250px] ">Variant</h1>
            <h1 className="text-center min-w-[90px]  ">Dealer Code</h1>
            <h1 className="text-center min-w-[200px] ">Stock Status</h1>
            <h1 className="text-center min-w-[50px]  ">Age</h1>
            <h1 className="text-center min-w-[200px] ">VIN Number</h1>
            <h1 className="text-center min-w-[250px] ">Cust Name</h1>
            <h1 className="text-center min-w-[250px] ">Entry Date</h1>
            <h1 className="text-center min-w-[250px] ">Exterior Color</h1>
            <h1 className="text-center min-w-[250px] ">Interior Color</h1>
          </div>

          {InventoryItems?.map((item, i) => {
            return (
              <div
                className="w-full p-[.5rem] px-[1rem] border-[1px] border-[#cfcfd7] bg-[white] rounded-[8px] font-2-book text-[.875rem] flex items-center justify-between overflow-x-scroll"
                ref={(el) => (rowRefs.current[i] = el)}
                style={{ scrollbarWidth: "none" }}
                onScroll={(e) => syncScroll(i, e.target.scrollLeft)}
              >
                <h1 className="text-center  min-w-[100px]">
                  {item?.["Model"]}
                </h1>
                <h1 className="text-center  min-w-[250px]">{item?.Variant}</h1>
                <h1 className="text-center  min-w-[90px]">
                  {item?.["Order Dealer"]}
                </h1>
                 <h1 className="text-center  min-w-[200px]">
                  {item?.["Stock Status"]}
                </h1>
                <h1 className="text-center  min-w-[50px]">
                  {item?.["Stock Age"]}
                </h1>
                <h1 className="text-center  min-w-[200px] ">
                  {item?.["Vin Number"]}
                </h1>
                <h1 className="text-center  min-w-[250px]">
                  {item?.["Cust Name"]}
                </h1>
                <h1 className="text-center min-w-[250px]">
                  {new Date(
                    new Date(item?.created_at).getTime()
                  ).toLocaleString()}
                </h1>
               
                <h1 className="text-center  min-w-[250px]">
                  {item?.["Exterior Color Name"]}
                </h1>
                <h1 className="text-center  min-w-[250px]">
                  {item?.["Interior Color Desc"]}
                </h1>
              </div>
            );
          })}
        </div>
        {/* ------------------------------------------Form-------------------------------- */}
        <div
          className={`absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.4)] z-[20] items-center justify-center ${
            showForm ? "flex" : "hidden"
          }`}
        >
          <div
            className={`w-[80%]  bg-[white] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-[20] rounded-[10px] border-[1px] border-[#cfcfd5]
            p-[2rem] flex flex-col gap-[1rem] `}
          >
            {pageNumber === "1" && (
              <div className="flex flex-col gap-[1rem]">
                <div className="flex items-center justify-between">
                  <h1 className="text-[1rem] font-medium">Update Inventory</h1>
                  <div
                    onClick={() => {
                      setShowForm(false);
                      resetState();
                    }}
                    className="cursor-pointer"
                  >
                    <CircleX />
                  </div>
                </div>
                <div className="flex items justify-between gap-[1rem]">
                  <div className="w-full">
                    <label htmlFor="" className="text-[.8rem] font-medium">
                      Enter Model
                    </label>
                    <div
                      className={`w-full rounded-[10px] py-[.5rem] px-[1rem] border-[1px] relative cursor-pointer flex items-center justify-between
                        ${Error.model ? "border-red-500" : "border-[#cfcfd5]"}
                        `}
                      onClick={() => {
                        setShowModelOptions(!showModelOptions);
                      }}
                    >
                      {selectedCarModel}

                      <RiArrowDropDownLine className="text-[1.5rem]" />

                      <div
                        className={`w-full absolute top-[100%] left-0 bg-[white]  border-[#c7c7d5] rounded-[10px] overflow-y-scroll z-[20]
                    ${
                      showModelOptions
                        ? "h-[200px] border-[1px]"
                        : "h-[0px] border-[0px]"
                    } transition-height duration-150
                    `}
                        style={{ scrollbarWidth: "none" }}
                      >
                        {carModels &&
                          carModels.map((model, i) => {
                            return (
                              <h1
                                key={i}
                                className={`text-[.875rem] px-[1rem] py-[.5rem] hover:bg-[rgba(0,0,0,0.1)]  border-[#cfcfd5] cursor-pointer ${
                                  i === carModels.length - 1
                                    ? "border-b-[0px]"
                                    : "border-b-[1px]"
                                }`}
                                onClick={() => {
                                  setShowModelOptions(false);
                                  setSelectedCarModels(model.dcbdto.modelName);
                                  setPrices({ ...prices, car_id: model.id });
                                  setSelectedCarVariant("Choose Variant");
                                  setSelectedColor("Choose Color");
                                  GetCarDetails(model);
                                }}
                              >
                                {model.dcbdto.modelName}
                              </h1>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <label htmlFor="" className="text-[.8rem] font-medium">
                      Enter Model Year
                    </label>
                    <div
                      className="w-full rounded-[10px] py-[.5rem] px-[1rem] border-[1px] border-[#cfcfd5] relative cursor-pointer flex items-center justify-between"
                      onClick={() => {
                        setShowYearOptions(!showyearOptions);
                      }}
                    >
                      {selectedYear}
                      <RiArrowDropDownLine className="text-[1.5rem]" />

                      <div
                        className={`w-full max-h-[200px] absolute top-[100%] left-0 bg-[white]  border-[#c7c7d5] rounded-[10px] overflow-y-scroll z-[20]
                    ${
                      showyearOptions
                        ? "h-fit border-[1px]"
                        : "h-[0px] border-[0px]"
                    } transition-height duration-150
                    `}
                        style={{ scrollbarWidth: "none" }}
                      >
                        {Array.from(
                          { length: new Date().getFullYear() - 2010 + 1 },
                          (_, i) => 2010 + i
                        ).map((year, i) => {
                          return (
                            <h1
                              key={i}
                              className={`text-[.875rem] px-[1rem] py-[.5rem] hover:bg-[rgba(0,0,0,0.1)]  border-[#cfcfd5] cursor-pointer ${
                                i ===
                                Array.from(
                                  {
                                    length: new Date().getFullYear() - 2010 + 1,
                                  },
                                  (_, i) => 2010 + i
                                ).length -
                                  1
                                  ? "border-b-[0px]"
                                  : "border-b-[1px]"
                              }`}
                              onClick={() => {
                                setShowYearOptions(false);
                                setSelectedYear(year);
                              }}
                            >
                              {year}
                            </h1>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="" className="text-[.8rem] font-medium">
                    Choose Variant
                  </label>
                  <div
                    className={`w-full rounded-[10px] py-[.5rem] px-[1rem] border-[1px] border-[#cfcfd5] relative cursor-pointer flex items-center justify-between
                      ${Error.variant ? "border-red-500" : "border-[#cfcfd5]"}
                      `}
                    onClick={() => {
                      setShowVariantOptions(!showVariantOptions);
                    }}
                  >
                    {selectedCarVariant}
                    <RiArrowDropDownLine className="text-[1.5rem]" />

                    <div
                      className={`w-full max-h-[200px] absolute top-[100%] left-0 bg-[white]  border-[#c7c7d5] rounded-[10px] overflow-y-scroll z-[20]
                    ${
                      showVariantOptions && carVariants.length > 0
                        ? "h-fit border-[1px]"
                        : "h-[0px] border-[0px]"
                    } transition-height duration-150
                    `}
                      style={{ scrollbarWidth: "none" }}
                    >
                      {carVariants &&
                        carVariants.map((variant, i) => {
                          return (
                            <h1
                              key={i}
                              className={`text-[.875rem] px-[1rem] py-[.5rem] hover:bg-[rgba(0,0,0,0.1)]  border-[#cfcfd5] cursor-pointer ${
                                i === carVariants.length - 1
                                  ? "border-b-[0px]"
                                  : "border-b-[1px]"
                              }`}
                              onClick={() => {
                                setShowVariantOptions(false);
                                setSelectedCarVariant(variant.name);
                                setExshowroom(variant.exShowRoomPrice);
                                setPrices({
                                  ...prices,
                                  variant_id: variant.centralId,
                                });
                              }}
                            >
                              {variant.name}
                            </h1>
                          );
                        })}
                    </div>
                  </div>
                </div>

                <div className="flex items-end justify-between gap-[.5rem]">
                  <div className="w-full">
                    <label htmlFor="" className="text-[.8rem] font-medium">
                      Choose Color
                    </label>
                    <div
                      className={`w-full rounded-[10px] py-[.5rem] px-[1rem] border-[1px] border-[#cfcfd5] relative cursor-pointer flex items-center justify-between
                        ${Error.color ? "border-red-500" : "border-[#cfcfd5]"}
                        `}
                      onClick={() => {
                        setShowColorOptions(!showColorOptions);
                      }}
                    >
                      {selectedColor}
                      <RiArrowDropDownLine className="text-[1.5rem]" />

                      <div
                        className={`w-full max-h-[200px] absolute top-[100%] left-0 bg-[white]  border-[#c7c7d5] rounded-[10px] overflow-y-scroll z-[20]
                    ${
                      showColorOptions && colors.length > 0
                        ? "h-fit border-[1px]"
                        : "h-[0px] border-[0px]"
                    } transition-height duration-150
                    `}
                        style={{ scrollbarWidth: "none" }}
                      >
                        {colors &&
                          colors.map((color, i) => {
                            return (
                              <h1
                                key={i}
                                className={`text-[.875rem] px-[1rem] py-[.5rem] hover:bg-[rgba(0,0,0,0.1)]  border-[#cfcfd5] cursor-pointer ${
                                  i === colors.length - 1
                                    ? "border-b-[0px]"
                                    : "border-b-[1px]"
                                }`}
                                onClick={() => {
                                  setShowColorOptions(false);
                                  setSelectedColor(color.name);
                                  setPrices({
                                    ...prices,
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

                  <div className="w-full">
                    <label htmlFor="" className="text-[.8rem] font-medium">
                      Enter Stock Number
                    </label>
                    <input
                      type="text"
                      className={`w-full rounded-[10px] py-[.5rem] px-[1rem] border-[1px] border-[#cfcfd5] relative cursor-pointer outline-none
                        ${Error.stock ? "border-red-500" : "border-[#cfcfd5]"}
                        `}
                      placeholder="P530312"
                      value={prices.stock}
                      onChange={(e) => {
                        setPrices({ ...prices, stock: e.target.value });
                      }}
                    />
                  </div>
                  <div className="w-full">
                    <button
                      className="py-[.5rem] px-[1rem] border-[1px] border-[#0b85ff] bg-[#0b85ff] w-full rounded-[10px] text-[white] flex items-center justify-center gap-[1rem]"
                      onClick={() => {
                        SubmitPage1();
                      }}
                    >
                      Next <MdNavigateNext className="text-[1.5rem]" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {pageNumber === "2" && (
              <div className="flex flex-col gap-[1rem]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[1rem]">
                    <IoArrowBackCircleSharp
                      className=" cursor-pointer text-[1.5rem]"
                      onClick={() => {
                        setPageNumber("1");
                      }}
                    />
                    <h1 className="text-[1rem] font-medium ">Prices Section</h1>
                  </div>
                  <div
                    onClick={() => {
                      setShowForm(false);
                      resetState();
                    }}
                    className="cursor-pointer"
                  >
                    <CircleX />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-[.5rem]">
                  <div className="w-full">
                    <label htmlFor="" className="text-[.8rem] font-medium">
                      Ex-Showroom Price
                    </label>
                    <div
                      type="text"
                      className="w-full rounded-[10px] py-[.5rem] px-[1rem] border-[1px] border-[#cfcfd5] relative cursor-pointer outline-none font-bold"
                    >
                      Rs.{ExShowroom}
                    </div>
                  </div>
                  <div className="w-full">
                    <label htmlFor="" className="text-[.8rem] font-medium">
                      Accessories Charges
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-[10px] py-[.5rem] px-[1rem] border-[1px] border-[#cfcfd5] relative cursor-pointer outline-none"
                      placeholder="e.g. Rs.50,000"
                      value={prices.accessories}
                      onChange={(e) => {
                        setPrices({ ...prices, accessories: e.target.value });
                      }}
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="" className="text-[.8rem] font-medium">
                      TCS Charges
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-[10px] py-[.5rem] px-[1rem] border-[1px] border-[#cfcfd5] relative cursor-pointer outline-none"
                      placeholder="e.g. Rs.10,00,000"
                      value={prices.tcs}
                      onChange={(e) => {
                        setPrices({ ...prices, tcs: e.target.value });
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-[.5rem]">
                  <div className="w-full flex-1">
                    <label htmlFor="" className="text-[.8rem] font-medium">
                      Insurance Price
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-[10px] py-[.5rem] px-[1rem] border-[1px] border-[#cfcfd5] relative cursor-pointer outline-none"
                      placeholder="e.g. Rs.48,000"
                      value={prices.insurance}
                      onChange={(e) => {
                        setPrices({ ...prices, insurance: e.target.value });
                      }}
                    />
                  </div>

                  <div className="w-full flex-2">
                    <label htmlFor="" className="text-[.8rem] font-medium">
                      Insurance Agent
                    </label>
                    <div
                      className="w-full rounded-[10px] py-[.5rem] px-[1rem] border-[1px] border-[#cfcfd5] relative cursor-pointer flex items-center justify-between"
                      onClick={() => {
                        setShowInsuranceForm(!showInsuranceForm);
                      }}
                    >
                      {selectedInsurance}
                      <RiArrowDropDownLine className="text-[1.5rem]" />

                      <div
                        className={`w-full max-h-[200px] absolute top-[100%] left-0 bg-[white]  border-[#c7c7d5] rounded-[10px] overflow-y-scroll z-[20]
                    ${
                      showInsuranceForm
                        ? "h-fit border-[1px]"
                        : "h-[0px] border-[0px]"
                    } transition-height duration-150
                    `}
                        style={{ scrollbarWidth: "none" }}
                      >
                        {InsuranceOptions.map((ins, i) => {
                          return (
                            <h1
                              key={i}
                              className={`text-[.875rem] px-[1rem] py-[.5rem] hover:bg-[rgba(0,0,0,0.1)]  border-[#cfcfd5] cursor-pointer ${
                                i === InsuranceOptions.length - 1
                                  ? "border-b-[0px]"
                                  : "border-b-[1px]"
                              }`}
                              onClick={() => {
                                setShowInsuranceForm(false);
                                setSelectedInsurance(ins);
                              }}
                            >
                              {ins}
                            </h1>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-[.5rem]">
                  <div className="w-full">
                    <label htmlFor="" className="text-[.8rem] font-medium">
                      FastTag Charges
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-[10px] py-[.5rem] px-[1rem] border-[1px] border-[#cfcfd5] relative cursor-pointer outline-none"
                      placeholder="e.g. Rs.500"
                      value={prices.fasttag}
                      onChange={(e) => {
                        setPrices({ ...prices, fasttag: e.target.value });
                      }}
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="" className="text-[.8rem] font-medium">
                      Extended Warranty
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-[10px] py-[.5rem] px-[1rem] border-[1px] border-[#cfcfd5] relative cursor-pointer outline-none"
                      placeholder="e.g. Rs.25000"
                      value={prices.warranty}
                      onChange={(e) => {
                        setPrices({ ...prices, warranty: e.target.value });
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-[.5rem]">
                  <div className="w-full">
                    <label htmlFor="" className="text-[.8rem] font-medium">
                      Miscellaneous Charges
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-[10px] py-[.5rem] px-[1rem] border-[1px] border-[#cfcfd5] relative cursor-pointer outline-none"
                      placeholder="e.g. Rs.15,000"
                      value={prices.miscelleneous}
                      onChange={(e) => {
                        setPrices({
                          ...prices,
                          miscelleneous: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="" className="text-[.8rem] font-medium">
                      RTO Price
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-[10px] py-[.5rem] px-[1rem] border-[1px] border-[#cfcfd5] relative cursor-pointer outline-none"
                      placeholder="e.g. Rs.85,000"
                      value={prices.rto}
                      onChange={(e) => {
                        setPrices({ ...prices, rto: e.target.value });
                      }}
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="" className="text-[.8rem] font-medium">
                      Expected Delivery
                    </label>
                    <div
                      className="w-full rounded-[10px] py-[.5rem] px-[1rem] border-[1px] border-[#cfcfd5] relative cursor-pointer flex items-center justify-between"
                      onClick={() => {
                        setShowDeliveryForm(!showDeliveryForm);
                      }}
                    >
                      {SelectedDelivery}
                      <RiArrowDropDownLine className="text-[1.5rem]" />

                      <div
                        className={`w-full max-h-[200px] absolute top-[100%] left-0 bg-[white]  border-[#c7c7d5] rounded-[10px] overflow-y-scroll z-[20]
                    ${
                      showDeliveryForm
                        ? "h-fit border-[1px]"
                        : "h-[0px] border-[0px]"
                    } transition-height duration-150
                    `}
                        style={{ scrollbarWidth: "none" }}
                      >
                        {ExpectedDelivery.map((del, i) => {
                          return (
                            <h1
                              key={i}
                              className={`text-[.875rem] px-[1rem] py-[.5rem] hover:bg-[rgba(0,0,0,0.1)]  border-[#cfcfd5] cursor-pointer ${
                                i === ExpectedDelivery.length - 1
                                  ? "border-b-[0px]"
                                  : "border-b-[1px]"
                              }`}
                              onClick={() => {
                                setShowDeliveryForm(false);
                                setSelectedDelivery(del);
                              }}
                            >
                              {del}
                            </h1>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-end justify-between gap-[.5rem]">
                  <div className="w-full flex items-center gap-[1rem]">
                    <div className="w-full flex-2">
                      <label htmlFor="" className="text-[.8rem] font-medium">
                        Autotrends Bid Price
                      </label>
                      <div className="w-full rounded-[10px] py-[.5rem] px-[1rem] border-[1px] border-[#cfcfd5] relative cursor-pointer outline-none">
                        {parseInt(ExShowroom) +
                          parseInt(prices.accessories || 0) +
                          parseInt(prices.fasttag || 0) +
                          parseInt(prices.insurance || 0) +
                          parseInt(prices.miscelleneous || 0) +
                          parseInt(prices.rto || 0) +
                          parseInt(prices.tcs || 0) +
                          parseInt(prices.warranty || 0)}
                      </div>
                    </div>
                    <div className="w-full flex-1">
                      <label htmlFor="" className="text-[.8rem] font-medium">
                        Qty Available
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-[10px] py-[.5rem] px-[1rem] border-[1px] border-[#cfcfd5] relative cursor-pointer outline-none"
                        placeholder="e.g. 2"
                        value={prices.qty}
                        onChange={(e) => {
                          setPrices({ ...prices, qty: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                  <div></div>
                  <div className="w-full">
                    <button
                      onClick={handleFinalSubmit}
                      className="w-full py-[.5rem] rounded-[10px] bg-[#0b85ff] border-[1px] border-[#0b85ff] text-[white]"
                    >
                      {updating ? "Updating..." : "Update Stock"}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* ------------------------------------------FormEnd---------------------------- */}
      </div>
    </div>
  );
};

export default Inventory;
