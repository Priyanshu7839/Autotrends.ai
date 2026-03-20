import {
  BBNDInventoryDataFetch,
  BBNDInventoryList,
  BBNDInventoryListOrderDealer,
  GetAllBBNDStock,
  GetAllDeletedBBNDStock,
  GetBBNDExcelCompared,
  GetDealerCodes,
  SendOTP,
  UploadBBndExcel,
  VerifyOTP,
} from "../../utils/APICalls";
import { LoaderCircle } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { Bar } from "react-chartjs-2";
import { FiDownload, FiUpload } from "react-icons/fi";
import { LuArrowUpDown } from "react-icons/lu";
import { MdFilterListOff, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiCloseFill, RiDropdownList } from "react-icons/ri";
import { useSelector } from "react-redux";
import { toast } from "sonner";

const BBNDInventory = () => {
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
  const headerRef1 = useRef(null);
  const rowRefs1 = useRef([]);

  const syncScroll1 = (source, scrollLeft) => {
    if (source !== "header" && headerRef1.current) {
      headerRef.current.scrollLeft = scrollLeft;
    }
    rowRefs1.current.forEach((ref, index) => {
      if (ref && source !== index) {
        ref.scrollLeft = scrollLeft;
      }
    });
  };

  // Clear old refs on rerender
  rowRefs1.current = [];

  // ---------------------Dealer codes--------------------------------------//
  const dealershipDetails = useSelector((state) => state.DealershipDetails);

  const [dealerCodes, setDealerCodes] = useState([]);

  useEffect(() => {
    const FetchDealerCodes = async () => {
      try {
        const response = await GetDealerCodes(dealershipDetails?.id);
        const dealerCodes = response?.data?.msg.map(
          (item) => item?.dealer_code
        );
        setDealerCodes(["ALL", ...dealerCodes]);
      } catch (error) {
        console.log(error);
      }
    };
    FetchDealerCodes();
  }, []);

  const [selectedDealerCode, setselectedDealerCode] = useState("ALL");
  const [selectedDealerCodeShow, setselectedDealerCodeShow] = useState(null);




  

  // ----------------------------Otp Verification----------------------------------//
  const [otpverificationboxshow, setotpverificationboxshow] = useState(false);

  const SendOtp = async (id) => {
    toast.promise(
      (async () => {
        const email = "shubh.khanna@jaipitambrakia.in";
        const response = await SendOTP(dealershipDetails?.id, email, id);
        if (response.data.msg !== "Email Sent") {
          toast.error("Error Sending OTP");
        }
        setotpverificationboxshow(true);
      })(),
      {
        loading: "Sending OTP...",
        success: "Woohoo,OTP Sent",
        error: "Error Sending OTP ",
      }
    );
  };

  const [otp, setotp] = useState("");
  const [verifying, setverifying] = useState(false);
  const verifyotp = async () => {
    setverifying(true);
    try {
      const response = await VerifyOTP(dealershipDetails?.id, otp);
      if (response.data.msg === "OTP Verified") {
        toast.success("OTP Verified", {
          action: {
            label: "✕",
            onClick: () => toast.dismiss(),
          },
        });
        setotpverificationboxshow(false);
      }
      if (response.data.msg === "otp incorrect") {
        toast.error("Incorrect OTP Entered", {
          action: {
            label: "✕",
            onClick: () => toast.dismiss(),
          },
        });
      }
      setotp("");
      setverifying(false);
    } catch (error) {
      console.log(error);
      setverifying(false);
      setotpverificationboxshow(false);
    }
  };

  // -------------------------Get inventory----------------------------------------//

  const [BBNDInventoryItems, setBBNDInventoryItems] = useState([]);
  const [BBNDDeletedItems, setBBNDDeletedItems] = useState([]);
  const [BBNDAlertShow, setBBNDAlertShow] = useState(true);

  const [lastUpdate, setLastUpdate] = useState("");
  const [loadPercent, setLoadPercent] = useState(0);
  const intervalRef = useRef(null);

  const [loading, setLoading] = useState(true);


  //* ///////////////////////////////////////////Filter////////////////////////////////////////////////////////////////////

  const [FilterName, setFilterName] = useState(null);
  const [FilterValue, setFilterValue] = useState(null);

  //* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 

 




  






  const [BBNDInventoryData, SetBBNDInventoryData] = useState({
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
    const FetchBBNDInventoryData = async () => {
      const response = await BBNDInventoryDataFetch(
        dealershipDetails?.id,
        selectedDealerCode,
        stockStatusFilter,
        modelFilter,variantFilter
      );


     
      SetBBNDInventoryData({
        ...BBNDInventoryData,
        totalStock: response.totalCars,
        uniqueModels: response.uniqueModels,
        uniqueVariants: response.uniqueVariants,
        ageBuckets: response.ageBuckets,
        lastUpdateDate: response.lastUpdateDate,
        ages: response.ages,
        stockStatus:response.stockStatus

      });
    };

    FetchBBNDInventoryData();
  }, [selectedDealerCode,stockStatusFilter,modelFilter,variantFilter]);

   useEffect(() => {
      const GetAllStocks = async () => {
        const response = await GetAllBBNDStock(dealershipDetails?.id, selectedDealerCode,stockStatusFilter,modelFilter,variantFilter);
  
        console.log(response?.data?.stock);
        setBBNDInventoryItems(response?.data?.stock);
      };
  
      GetAllStocks();
    }, [selectedDealerCode,stockStatusFilter,modelFilter,variantFilter]);
   useEffect(() => {
      const GetAllStocks = async () => {
        const response = await GetAllDeletedBBNDStock(dealershipDetails?.id, selectedDealerCode);
        setBBNDDeletedItems(response?.data?.stock);
      };
  
      GetAllStocks();
    }, [selectedDealerCode]);

     useEffect(() => {
    if (BBNDDeletedItems?.length !== 0 && !BBNDAlertShow) {
      toast.error("OTP Verification Needed In BBND", {
        duration: Infinity,

        position: "top-center",
        action: {
          label: "Close", // Optional manual close button
          onClick: () => {
            toast.dismiss();
            setBBNDAlertShow(true);
          },
        },
      });
    }
  }, [BBNDAlertShow, BBNDDeletedItems]);

   
  const agesObj = BBNDInventoryData?.ages?.[0] ?? {};
 

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
    <div className="w-[calc(100vw-230px)] h-[100vh]  p-[1rem] font-roboto relative">

       {/*// ! //////////////////////////BBND Alert///////////////////////////////////////////////////////////////// */}

        {BBNDDeletedItems?.length !== 0 && BBNDAlertShow && (
          <div className="w-full h-full flex items-center justify-center gap-[1rem] bg-[rgba(0,0,0,0.7)] absolute top-0 left-0 z-[99]">
            <div
              style={{ scrollbarWidth: "none" }}
              className="w-[80%] h-[80%] bg-[white] overflow-y-scroll border-[1px] border-[#cfcfd7] rounded-[8px]"
            >
              <div className="w-full py-[2.5rem] px-[2rem]  flex flex-col gap-[1rem] relative">
                <div className="w-full flex items-center justify-between gap-[1rem]">
                  <h1 className="text-[1.25rem] font-2 text-[red]">
                    ALERT OTP VERIFICATION REQUIRED
                  </h1>
                  <div
                    className="cursor-pointer absolute top-4 right-8 text-[1.5rem]" 
                    onClick={() => {
                      setBBNDAlertShow(false);
                    }}
                  >
                    <RiCloseFill />
                  </div>
                </div>

                <div
                  className="w-full p-[.5rem] px-[1rem]  bg-[#FFB3B3]/80 backdrop-blur-sm shadow-sm rounded-[8px] font-2 text-[.875rem] flex items-center justify-between overflow-x-scroll text-[#757575] text-[red]"
                  ref={headerRef}
                  style={{ scrollbarWidth: "none" }}
                  onScroll={(e) => syncScroll("header", e.target.scrollLeft)}
                >
                  <h1 className="text-center min-w-[100px] ">Model</h1>
                  <h1 className="text-center min-w-[250px] ">Variant</h1>
                  {/* <h1 className="text-center min-w-[90px]  ">Dealer Code</h1> */}
                  <h1 className="text-center min-w-[90px]  ">Stock Age</h1>
                  <h1 className="text-center min-w-[250px] ">VIN Number</h1>

                  <h1 className="text-center min-w-[250px] ">Customer Name</h1>
                  <h1 className="text-center min-w-[250px] ">Is Verfied</h1>
                  <h1 className="text-center min-w-[250px] ">
                    Verification Date
                  </h1>
                  <h1 className="text-center min-w-[250px] ">Entry Date</h1>
                </div>

                {BBNDDeletedItems?.map((item, i) => {
                  return (
                    <div
                      className="w-full p-[.5rem] px-[1rem] border-[1px] border-[#cfcfd7] bg-[white] rounded-[8px] font-2-book text-[.875rem] flex items-center justify-between overflow-x-scroll"
                      key={i}
                      ref={(el) => (rowRefs.current[i] = el)}
                      style={{ scrollbarWidth: "none" }}
                      onScroll={(e) => syncScroll(i, e.target.scrollLeft)}
                    >
                      <h1 className="text-center  min-w-[100px]">
                        {item?.["Model"]}
                      </h1>
                      <h1 className="text-center  min-w-[250px]">
                        {item?.["Variant"]}
                      </h1>

                      <h1 className="text-center  min-w-[90px]">
                        {item?.["Stock Age"]}
                      </h1>

                      <h1 className="text-center  min-w-[250px]">
                        {item?.["Vin Number"]}
                      </h1>
                      <h1 className="text-center  min-w-[250px]">
                        {item?.["Cust Name"]}
                      </h1>

                      <h1 className="text-center min-w-[250px]">
                        {item?.["otp_verified"] ? (
                          <button className="w-fit px-[1rem] py-[.25rem] bg-[#0b85ff] rounded-[8px] text-[white]">
                            Verified By Dealer
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="w-fit px-[1rem] py-[.25rem] bg-[red] rounded-[8px] text-[white]"
                            onClick={(e) => {
                              e.stopPropagation();
                              SendOtp(item.deleted_bbnd_inventory_id);
                            }}
                          >
                            OTP Verfifcation Pending
                          </button>
                        )}
                      </h1>

                      <h1 className="text-center  min-w-[250px]">
                        {item?.["OTP Verification Date"] !== null
                          ? item?.["OTP Verification Date"]
                          : "Not Verified"}
                      </h1>

                      <h1 className="text-center min-w-[250px]">
                        {new Date(
                          new Date(item.created_at).getTime()
                        ).toLocaleString()}
                      </h1>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {/*// ! ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div
        className={`w-full h-full border-[1px] border-[#cfcfd5] rounded-[20px] flex flex-col gap-[1rem] relative  p-[1rem] overflow-y-scroll
         
          
         
            `}
        style={{ scrollbarWidth: "none" }}
      >
        {/* -----------------------------Loader----------------------------------------- */}
        {/* {loading && (
          <div className="w-full flex absolute top-0 left-0 z-10 h-full bg-[rgba(0,0,0,0.7)]  items-center justify-center">
            <div className="w-[400px] h-[150px] rounded-[10px] bg-[white] p-[1rem] flex flex-col items-start justify-between">
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
            </div>
          </div>
        )} */}
        {/* -----------------------------Loader----------------------------------------- */}
       
       

        {/* ------------------------------------------------------------Otp Box--------------------------------------------------- */}
        <div
          className={`w-full h-full bg-[rgba(0,0,0,0.7)] fixed top-0 left-0  flex-col gap-[1rem] items-center justify-center px-[2rem] z-[9999] ${
            otpverificationboxshow ? "flex" : "hidden"
          }`}
        >
          <div className="w-[400px] h-[200px] rounded-[12px] bg-[white] border-[1px] border-[#cfcfd7] p-[1rem] flex flex-col gap-[1rem] justify-between">
            <div className="flex flex-col gap-[.25rem]">
              <h1 className="w-full flex items-center justify-between font-2 text-[1.25rem]">
                Verify OTP{" "}
                <RiCloseFill
                  onClick={(e) => {
                    e.stopPropagation();
                    setotpverificationboxshow(false);
                  }}
                  className="text-[1.5rem] cursor-pointer"
                />
              </h1>
              <p className="text-[.875rem] text-color-9-70">
                The Otp has been sent to the Dealer Pricipal
              </p>
            </div>

            <div>
              <input
                type="text"
                value={otp}
                onChange={(e) => {
                  setotp(e.target.value);
                }}
                className="outline-none py-[.25rem] px-[1rem] border-[1px] border-[#cfcfd7] rounded-[10px]"
              />
            </div>

            <div>
              <button
                onClick={verifyotp}
                className="bg-[#0b85ff] border-[1px] border-[#0b85ff] text-[.875rem] font-2-book py-[.25rem] px-[1rem] rounded-[10px] text-[white]"
              >
                {verifying ? "Verifying..." : "Verify"}
              </button>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------Otp Box End------------------------------------------------ */}

        <div className="flex flex-col gap-[1rem] p-[1rem] border-[1px] border-[1px] border-[#cfcfd5] rounded-[16px] bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A]">
          <div className="flex  items-start justify-between">
            <h1 className="text-[1.25rem] font-2 text-white">BBND Inventory</h1>
            <div className="flex flex-col items-end justify-center gap-[1rem]">
              <div className="flex items-center justify-center gap-[1rem]">
                <button
                  onClick={() => {
                    setselectedDealerCodeShow(!selectedDealerCodeShow);
                  }}
                  className={`py-[.25rem] px-[1rem] border-[#ffffff4d] border-[1px] text-[#0b85ff] font-medium text-[.875rem] rounded-[6px] cursor-pointer flex items-center justify-center gap-[.5rem] hover:bg-[#0b85ff] text-[white] relative
                     ${
                       selectedDealerCodeShow
                         ? "border-b-[0px] rounded-b-[0px] bg-[#0b85ff] text-[white]"
                         : "text-[#0b85ff]"
                     }
                     `}
                >
                  Dealer Code - {selectedDealerCode}
                  <MdOutlineKeyboardArrowDown />
                  <div
                    className={` border-[#ffffff4d] rounded-[6px] absolute top-[100%] z-10 left-[-1px] outline-none focus:none text-white font-1 font-normal px-[1rem] py-[.25rem] w-[calc(100%+2px)] flex-col gap-[.5rem] bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A]
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
               onClick={() => {
                      window.location.href =
                        `https://autotrends-backend.onrender.com/exceldownloads/DownloadBBNDInventory/${dealershipDetails?.id}`;
                    }}
                className="py-[.25rem] px-[1rem] border-[#ffffff4d] border-[1px] text-[#0b85ff] font-medium text-[.875rem] rounded-[6px] cursor-pointer flex items-center justify-center gap-[.5rem] hover:bg-[#0b85ff] text-[white] relative">
                  <FiDownload />
                  Download BBND Excel
                 
                </button>
                <button
                  className={`py-[.25rem] px-[1rem] border-[#ffffff4d] border-[1px]  font-medium text-[.875rem] rounded-[6px] cursor-pointer flex items-center justify-center gap-[.5rem] hover:bg-[#0b85ff] hover:text-[white] relative  text-[#ffffff]
                                      
                                        `}
                  onClick={() => {
                    setStockStatusFilter('ALL')
                  }}
                >
                  <MdFilterListOff />
                  Reset Filters
                </button>
              </div>
              <span className="text-[.75rem] font-2-book text-white">
                Last Updated:{" "}
                {BBNDInventoryData?.lastUpdateDate
                  ? new Date(BBNDInventoryData.lastUpdateDate).toLocaleString(
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
          <div className="flex flex-col items-center justify-start gap-[.5rem] text-white">
            <div className="flex items-center justify-start gap-[.5rem] text-white w-full">
              <div className="px-[.75rem] py-[.5rem] border-[1px] border-[#ffffff4d] rounded-[8px] h-[74px]  bg-[#FFFFFF26] backdrop-blur-sm shadow-lg w-full">
              <h1 className="font-2-book text-[1.15rem] text-center">
                <h1 className="font-2"> Total Units </h1>
                <h1 className="font-2-book">{BBNDInventoryData?.totalStock}</h1>
              </h1>
            </div>

            <div className="px-[.75rem] py-[.5rem] border-[1px] border-[#ffffff4d] rounded-[8px] h-[74px] bg-[#FFFFFF26] backdrop-blur-sm shadow-lg w-full">
              <h1 className="font-2-book text-[1.15rem] text-center">
                <h1 className="font-2"> Models</h1>
                <h1 className="font-2-book">
                  {BBNDInventoryData?.uniqueModels?.length}
                </h1>
              </h1>
            </div>
            <div className="px-[.75rem] py-[.5rem] border-[1px] border-[#ffffff4d] rounded-[8px] h-[74px] bg-[#FFFFFF26] backdrop-blur-sm shadow-lg w-full">
              <h1 className="font-2-book text-[1.15rem] text-center">
                <h1 className="font-2">Variants</h1>
                <h1 className="font-2-book">
                  {BBNDInventoryData?.uniqueVariants?.length}
                </h1>
              </h1>
            </div>
           
            <div className="px-[.75rem] py-[.5rem] border-[1px] border-[#ffffff4d] rounded-[8px] h-[74px] bg-[#FFFFFF26] backdrop-blur-sm shadow-lg w-full">
              <h1 className="font-2-book text-[1.15rem] text-center">
                <h1 className="font-2">Age{" > "}365Days</h1>
                <h1 className="font-2-book">0</h1>
              </h1>
            </div>
            </div>

            <div className="grid grid-cols-4 items-center justify-center gap-[.5rem] w-full ">
              {
              BBNDInventoryData?.stockStatus?.map((item)=>{
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

        <div className="w-full  flex flex-col gap-[1rem]">
          <div className="flex items-center justify-between gap-[1rem]">
            <div
              className="py-[.5rem] w-full px-[1rem] border-[1px] border-[#cfcfd7] rounded-[8px] flex flex-col gap-[.5rem] justify-between h-[254px] overflow-y-scroll"
              style={{ scrollbarWidth: "none" }}
            >
              <h1 className="font-2 text-[1.15rem]">Models</h1>

              <div className="flex flex-col h-full justify-start gap-[1rem]">
                {BBNDInventoryData?.uniqueModels?.length !== 0 &&
                  BBNDInventoryData?.uniqueModels?.map((model, i) => {
                    return (
                      <div
                        key={i}
                       onClick={()=>{
                        modelFilter === model.Model ? setModelFilter('ALL') : setModelFilter(model.Model)
                       }}
                        className={`flex items-center justify-between gap-[3rem]  px-[1rem] pr-[.5rem] py-[.25rem] rounded-[8px] border-[1px] border-[#0b85ff66] cursor-pointer ${
                          modelFilter === model.Model
                            ? "bg-[#0b85ff33]"
                            : "hover:bg-[#0b85ff1a]"
                        }`}
                      >
                        <h1 className="text-[.85rem] font-2-book">
                          {model.Model}
                        </h1>
                        <h1 className="text-[.85rem] font-2-book bg-[#0b85ff66] w-[30px] text-center rounded-[6px]">
                          {model.count}
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
                {BBNDInventoryData?.uniqueVariants?.length !== 0 &&
                  BBNDInventoryData?.uniqueVariants?.map((variant, i) => {
                    return (
                      <div
                        key={i}
                        onClick={() => {
                          variantFilter === variant.Variant
                            ? setVariantFilter('ALL')
                            : setVariantFilter(variant.Variant);
                        }}
                        className={`flex items-center justify-between gap-[3rem] px-[1rem] pr-[.5rem] py-[.25rem] rounded-[8px] border-[1px] border-[#FFE6CC] cursor-pointer ${
                          variantFilter === variant.Variant
                            ? "bg-[#ffe6cc66]"
                            : "hover:bg-[rgba(0,0,0,0.1)]"
                        }`}
                      >
                        <h1 className="text-[.85rem] font-2-book">
                          {variant.Variant}
                        </h1>
                        <div className="flex items-center justify-between gap-[1.5rem]">
                          <h1
                            className={`text-[.85rem] font-2-book  w-[30px] text-center rounded-[6px] bg-[#FFE6CC]
                                 
                                  `}
                          >
                            {variant.count}
                          </h1>
                          <h1
                            className={`text-[.85rem] font-2-book  w-[30px] text-center rounded-[6px] bg-[#FFE6CC]
                                 
                                  `}
                          >
                            {variant.allocated}
                          </h1>
                          <h1
                            className={`text-[.85rem] font-2-book  w-[30px] text-center rounded-[6px] bg-[#FFE6CC]
                                 
                                  `}
                          >
                            {variant.free}
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
                    {BBNDInventoryData?.ageBuckets?.length !== 0 &&
                      BBNDInventoryData?.ageBuckets?.map((age, i) => {
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
                    {BBNDInventoryData?.ageBuckets?.length !== 0 &&
                      BBNDInventoryData?.ageBuckets?.map((age, i) => {
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

      <div className="w-full py-[.5rem] px-[1rem] border-[1px] border-[#cfcfd7] rounded-[8px] flex flex-col gap-[1rem]">
          <h1 className="text-[1.25rem] font-2">Removed BBND Stock</h1>
          <div
            className="w-full p-[.5rem] px-[1rem] border-[1px] border-[#cfcfd7] bg-[#0b85ff] text-[white] rounded-[8px] font-2 text-[.875rem] flex items-center justify-between overflow-x-scroll"
            ref={headerRef}
            style={{ scrollbarWidth: "none" }}
            onScroll={(e) => syncScroll1("header", e.target.scrollLeft)}
          >
            <h1 className="text-center min-w-[100px] ">Model</h1>
            <h1 className="text-center min-w-[250px] ">Variant</h1>
            <h1 className="text-center min-w-[90px]  ">Dealer Code</h1>
            <h1 className="text-center min-w-[250px] ">VIN Number</h1>
            <h1 className="text-center min-w-[250px] ">Cust Name</h1>

            <h1 className="text-center min-w-[250px] ">Is Verified</h1>
            <h1 className="text-center min-w-[250px] ">Entry Date</h1>
            <h1 className="text-center min-w-[90px]  ">Age</h1>
            <h1 className="text-center min-w-[120px] ">Stock Status</h1>
          </div>

          {BBNDDeletedItems?.length === 0 ? (<div>
              <h1>All Items are Verified</h1>
          </div>):
          BBNDDeletedItems?.map((item, i) => {
            return (
              <div
                className="w-full p-[.5rem] px-[1rem] border-[1px] border-[#cfcfd7] bg-[white] rounded-[8px] font-2-book text-[.875rem] flex items-center justify-between overflow-x-scroll"
                ref={(el) => (rowRefs1.current[i] = el)}
                style={{ scrollbarWidth: "none" }}
                onScroll={(e) => syncScroll1(i, e.target.scrollLeft)}
              >
                <h1 className="text-center  min-w-[100px]">
                  {item?.["Model"]}
                </h1>
                <h1 className="text-center  min-w-[250px]">{item?.Variant}</h1>
                <h1 className="text-center  min-w-[90px]">
                  {item?.["Order Dealer"]}
                </h1>
                 <h1 className="text-center  min-w-[250px]">
                  {item?.["Vin Number"]}
                </h1>
                 <h1 className="text-center  min-w-[250px]">
                  {item?.["Cust Name"]}
                </h1>
              
                  <h1 className="text-center min-w-[250px]">
                        {item?.["otp_verified"] ? (
                          <button className="w-fit px-[1rem] py-[.25rem] bg-[#0b85ff] rounded-[8px] text-[white]">
                            Verified By Dealer
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="w-fit px-[1rem] py-[.25rem] bg-[red] rounded-[8px] text-[white]"
                            onClick={(e) => {
                              e.stopPropagation();
                              SendOtp(item.deleted_bbnd_inventory_id);
                            }}
                          >
                            OTP Verfifcation Pending
                          </button>
                        )}
                      </h1>
               
                <h1 className="text-center min-w-[250px]">
                  {new Date(
                    new Date(item?.created_at).getTime()
                  ).toLocaleString()}
                </h1>
              
           
                <h1 className="text-center  min-w-[90px]">
                  {item?.["Stock Age"]}
                </h1>
                  <h1 className="text-center  min-w-[120px]">
                  {item?.["Stock Status"]}
                </h1>

                      <h1 className="text-center  min-w-[250px]">
                        {item?.["OTP Verification Date"] !== null
                          ? item?.["OTP Verification Date"]
                          : "Not Verified"}
                      </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BBNDInventory;
