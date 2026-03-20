import {
  AverageSalesFetch,
  AverageSalesUpload,
  CarDetails,
  CarNames,
  GetAllBBNDStock,
  GetAllStock,
  GetDealerCodes,
  InventoryListOrderDealer,
  MasterInventoryDataFetch,
  MasterInventoryList,
  MasterInventoryListOrderDealer,
  UpdateStock,
  
} from "../../Utils/APICalls";
import {  LoaderCircle } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { MdFilterListOff, MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const MasterInventory = () => {
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
 
 
     const [FilterName,setFilterName] = useState(null);
     const [FilterValue,setFilterValue] = useState(null);
  const [BbndMainFilter,setBbndMainFilter] = useState(null);

 
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


    const [File, setFile] = useState(null);
    const [MasterInventoryItems, setMasterInventoryItems] = useState([]);
  const [lastUpdate,setLastUpdate] = useState('');
  const [bbndUnits,setbbndUnits] = useState('')
  const [mainUnits,setmainUnits] = useState('')
  const [InventoryItems, setInventoryItems] = useState([]);
  const [BBNDInventoryItems,setBBNDInventoryItems] = useState([]);


  const [loadPercent, setLoadPercent] = useState(0);
  const intervalRef = useRef(null);

  const [loading, setLoading] = useState(true);


  

  



 


  





 

 

 
const dateObj = new Date(lastUpdate);



const formattedtime = dateObj.toLocaleString("en-IN", {
  timeZone: "Asia/Kolkata",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

  

   


  //New api////////////////////////////////////////////////////////////////
  const [MasterInventoryData, SetMasterInventoryData] = useState({
      CapitalStuck: "",
      totalStock: "",
      mainUnits:'',
      bbndUnits:'',
      uniqueModels: "",
      uniqueVariants: "",
      ageBuckets: "",
      lastUpdateDate: "",
      ages: "",
      stockStatus:[],
      mainDate:'',
      bbndDate:''
    });
      const [stockStatusFilter,setStockStatusFilter] = useState('ALL')
         const [modelFilter,setModelFilter] = useState('ALL')
            const [variantFilter,setVariantFilter] = useState('ALL')

  
    useEffect(() => {
      const FetchMasterInventoryData = async () => {
        const response = await MasterInventoryDataFetch(
          DealerData?.id,
          selectedDealerCode,
          stockStatusFilter,
          modelFilter,variantFilter
        );

        SetMasterInventoryData({
          ...MasterInventoryData,
          totalStock: response.totalCars,
          mainUnits: response.mainUnits,
          bbndUnits: response.bbndUnits,
          uniqueModels: response.uniqueModels,
          uniqueVariants: response.uniqueVariants,
          ageBuckets: response.ageBuckets,
          ages: response.ages,
          stockStatus:response.stockStatus,
          mainDate:response.lastUpdateDatemain,
          bbndDate:response.lastUpdateDatebbnd
        });
      };
  
      FetchMasterInventoryData();
    }, [selectedDealerCode,stockStatusFilter,modelFilter,variantFilter]);

    

    
  
  
  
    useEffect(() => {
      const GetAllStocks = async () => {
        const response = await GetAllStock(DealerData?.id, selectedDealerCode,stockStatusFilter,modelFilter,variantFilter);
  
        console.log(response?.data?.stock);
        setInventoryItems(response?.data?.stock);
      };
  
      GetAllStocks();
    }, [selectedDealerCode,stockStatusFilter,modelFilter,variantFilter]);
    useEffect(() => {
      const GetAllStocks = async () => {
        const response = await GetAllBBNDStock(DealerData?.id, selectedDealerCode,stockStatusFilter,modelFilter,variantFilter);
  
        console.log(response?.data?.stock);
        setBBNDInventoryItems(response?.data?.stock);
      };
  
      GetAllStocks();
    }, [selectedDealerCode,stockStatusFilter,modelFilter,variantFilter]);


  const agesObj = MasterInventoryData?.ages ?? {};

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

        <div className="flex flex-col gap-2 items-center justify-between p-[1rem] border-[1px] border-[1px] border-[#cfcfd5] rounded-[16px] bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A]">
         <div className="flex items-center justify-between w-full">
           <h1 className="text-[1.25rem] font-2 text-white">Master Inventory</h1>
          <div className="flex items-center justify-center gap-[1rem]">
            <button
              onClick={() => {
                setselectedDealerCodeShow(!selectedDealerCodeShow);
              }}
              className={`py-[.25rem] px-[1rem] border-[#FFFFFF4D] border-[1px] text-[#fff] font-medium text-[.875rem] rounded-[6px] cursor-pointer flex items-center justify-center gap-[.5rem] hover:bg-[#0b85ff] hover:text-[white] relative
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
                className={` border-[#FFFFFF4D] rounded-[6px] absolute top-[100%] z-10 left-[-1px] outline-none focus:none text-[black] font-1 font-normal px-[1rem] py-[.25rem] w-[calc(100%+2px)] flex-col gap-[.5rem] bg-[white]
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
                          className={`py-[.25rem] px-[1rem] border-[#FFFFFF4D]  border-[1px]  font-medium text-[.875rem] rounded-[6px] cursor-pointer flex items-center justify-center gap-[.5rem] hover:bg-[#0b85ff] hover:text-[white] relative  text-[white]
                          
                            `}
                          onClick={() => {
                            setStockStatusFilter('ALL')
                          }}
                        >
                          <MdFilterListOff />
                          Reset Filters
                          
                        </button>

            
          </div>
         </div>

           <h1 className="text-[1.25rem] font-2 flex w-full items-center justify-end">
          
           <div className="flex flex-row items-end gap-[.5rem]">
             <span className="text-[.75rem] font-2-book py-[.25rem] px-[.5rem] rounded-[8px] border-[1px] text-white border-[#FFFFFF4D]">
              Last Updated Main: {MasterInventoryData.mainDate
                    ? new Date(MasterInventoryData.mainDate).toLocaleString(
                        "en-IN",
                        {
                          dateStyle: "medium",
                          timeStyle: "short",
                        }
                      )
                    : "-"}
            </span>
             <span className="text-[.75rem] font-2-book py-[.25rem] px-[.5rem] rounded-[8px] border-[1px] text-white border-[#FFFFFF4D]">
             BBND: {MasterInventoryData.bbndDate
                    ? new Date(MasterInventoryData.bbndDate).toLocaleString(
                        "en-IN",
                        {
                          dateStyle: "medium",
                          timeStyle: "short",
                        }
                      )
                    : "-"}
            </span>
           </div>
          </h1>

          <div className="flex flex-wrap items-center justify-start gap-[.5rem] ">
            <div className="flex items-center justify-center gap-[.5rem] w-full text-white">
               
              <div className="px-[.75rem] py-[.5rem] border-[1px] border-[#ffffff4d] rounded-[8px] h-[74px] w-full bg-[#FFFFFF26] backdrop-blur-sm shadow-lg">
                <h1 className="font-2-book text-[1.15rem] text-center">
                  <h1 className="font-2"> Total Units </h1>
                  <h1 className="font-2-book">{MasterInventoryData?.totalStock}</h1>
                </h1>
              </div>
              <div className="px-[.75rem] py-[.5rem] border-[1px] border-[#ffffff4d] rounded-[8px] h-[74px] w-full bg-[#FFFFFF26] backdrop-blur-sm shadow-lg">
                <h1 className="font-2-book text-[1.15rem] text-center">
                  <h1 className="font-2"> Main Units </h1>
                  <h1 className="font-2-book">{MasterInventoryData?.mainUnits}</h1>
                </h1>
              </div>
              <div className="px-[.75rem] py-[.5rem] border-[1px] border-[#ffffff4d] rounded-[8px] h-[74px] w-full bg-[#FFFFFF26] backdrop-blur-sm shadow-lg">
                <h1 className="font-2-book text-[1.15rem] text-center">
                  <h1 className="font-2"> BBND Units </h1>
                  <h1 className="font-2-book">{MasterInventoryData?.bbndUnits}</h1>
                </h1>
              </div>

              <div className="px-[.75rem] py-[.5rem] border-[1px] border-[#ffffff4d] rounded-[8px] h-[74px] w-full bg-[#FFFFFF26] backdrop-blur-sm shadow-lg">
                <h1 className="font-2-book text-[1.15rem] text-center">
                  <h1 className="font-2"> Models</h1>
                  <h1 className="font-2-book">
                    {MasterInventoryData?.uniqueModels?.length}
                  </h1>
                </h1>
              </div>
              <div className="px-[.75rem] py-[.5rem] border-[1px] border-[#ffffff4d] rounded-[8px] h-[74px] w-full bg-[#FFFFFF26] backdrop-blur-sm shadow-lg">
                <h1 className="font-2-book text-[1.15rem] text-center">
                  <h1 className="font-2">Variants</h1>
                  <h1 className="font-2-book">
                    {MasterInventoryData?.uniqueVariants?.length}
                  </h1>
                </h1>
              </div>
            </div>
          <div className="grid grid-cols-4 items-center justify-center gap-[.5rem] w-full  text-white">
              {
              MasterInventoryData?.stockStatus?.map((item)=>{
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
                   className={`px-[.75rem] py-[.5rem] border-[1px] border-[#ffffff4d] rounded-[8px] h-[88px]  backdrop-blur-sm shadow-lg flex flex-col items-center justify-center
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

        <div className="w-full  rounded-[10px] flex flex-col gap-[1rem]">
                <div className="flex items-center justify-between gap-[1rem]">
            <div
              className="py-[.5rem] w-full px-[1rem] border-[1px] border-[#cfcfd7] rounded-[8px] flex flex-col gap-[.5rem] justify-between h-[254px] overflow-y-scroll"
              style={{ scrollbarWidth: "none" }}
            >
              <h1 className="font-2 text-[1.15rem]">Models</h1>

              <div className="flex flex-col h-full justify-start gap-[1rem]">
                {MasterInventoryData?.uniqueModels?.length !== 0 &&
                  MasterInventoryData?.uniqueModels?.map((model, i) => {
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
                {MasterInventoryData?.uniqueVariants?.length !== 0 &&
                  MasterInventoryData?.uniqueVariants?.map((variant, i) => {
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
                    {MasterInventoryData?.ageBuckets?.length !== 0 &&
                      MasterInventoryData?.ageBuckets?.map((age, i) => {
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
                    {MasterInventoryData?.ageBuckets?.length !== 0 &&
                      MasterInventoryData?.ageBuckets?.map((age, i) => {
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


         <div className="w-full py-[.5rem] px-[1rem] border-[1px] border-[#cfcfd7] rounded-[8px] flex flex-col gap-[1rem]">
          <h1 className="text-[1.25rem] font-2">BBND Stock</h1>
          <div
            className="w-full p-[.5rem] px-[1rem] border-[1px] border-[#cfcfd7] bg-[#0b85ff] text-[white] rounded-[8px] font-2 text-[.875rem] flex items-center justify-between overflow-x-scroll"
            ref={headerRef}
            style={{ scrollbarWidth: "none" }}
            onScroll={(e) => syncScroll("header", e.target.scrollLeft)}
          >
            <h1 className="text-center min-w-[100px] ">Model</h1>
            <h1 className="text-center min-w-[250px] ">Variant</h1>
            <h1 className="text-center min-w-[90px]  ">Dealer Code</h1>
            <h1 className="text-center min-w-[90px]  ">Age</h1>
            <h1 className="text-center min-w-[120px] ">Stock Status</h1>
            <h1 className="text-center min-w-[250px] ">Cust Name</h1>
            <h1 className="text-center min-w-[250px] ">VIN Number</h1>
            <h1 className="text-center min-w-[250px] ">Entry Date</h1>
            <h1 className="text-center min-w-[250px] ">Exterior Color</h1>
            <h1 className="text-center min-w-[250px] ">Interior Color</h1>
          </div>

          {BBNDInventoryItems?.map((item, i) => {
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
                <h1 className="text-center  min-w-[90px]">
                  {item?.["Stock Age"]}
                </h1>
                <h1 className="text-center  min-w-[120px]">
                  {item?.["Stock Status"]}
                </h1>
                 <h1 className="text-center  min-w-[250px]">
                  {item?.["Cust Name"]}
                </h1>
                <h1 className="text-center  min-w-[250px]">
                  {item?.["Vin Number"]}
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
     
      </div>
    </div>
  );
};

export default MasterInventory;
