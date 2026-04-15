import {
  AlertCircle,
  Bot,
  CheckCircle,
  CheckCircle2,
  Clock,
  FileChartColumn,
  TrendingUp,
  Upload,
  XCircle,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { UploadCard } from "./Components/UploadCard";
import { KPICard } from "./Components/KPICard";
import { poolStockRecords, dealerUpload } from "./data/poolStockData";
import {
  getColour,
  GetDealerCodes,
  getDealerships,
  GetLastUpdatedDates,
  getModels,
  getpoolstock,
  getpoolstockColour,
  getpoolstockModel,
  getpoolstockVariant,
  GetuniqueDealerCodes,
  getVariants,
  getvna,
  PoolstockMatchedData,
} from "../../utils/APICalls";
import { useSelector } from "react-redux";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Card } from "./Components/ui/card";

const PoolStock = () => {
  const dealershipDetails = useSelector((state) => state.DealershipDetails);

  const [asmUpload, setasmUpload] = useState({
    name: "Divyajeet Kumar",
    uploadTime: "2026-03-28 09:45 AM",
    fileName: "ASM_North_Zone_Mar2026.xlsx",
    totalRecords: 1247,
    status: "uploaded",
  });

  const [dealerUpload, setdealerUpload] = useState({
    name: "Shivam Aggrawal",
    uploadTime: "2026-03-28 10:15 AM",
    fileName: "Dealer_Network_Stock_Mar2026.xlsx",
    totalRecords: 1198,
    status: "uploaded",
  });

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

  const totalMatched = poolStockRecords.filter(
    (r) => r.matchStatus === "full",
  ).length;
  const unmatched = poolStockRecords.filter(
    (r) => r.matchStatus === "partial" || r.matchStatus === "missing",
  ).length;
  const missingInDealer = poolStockRecords.filter(
    (r) => r.matchStatus === "missing" && r.oemData && !r.dealerData,
  ).length;
  const missingInOEM = poolStockRecords.filter(
    (r) => r.matchStatus === "missing" && !r.oemData && r.dealerData,
  ).length;
  const matchAccuracy = (
    (totalMatched / poolStockRecords.length) *
    100
  ).toFixed(1);

  const [MatchedStock, setMatchedStock] = useState([]);
  const [dealerCodes, setdealerCodes] = useState([]);
  const [codeButtonShow, setCodeButtonShow] = useState(false);
  const [selectedDealerCode, setSelectedDealerCode] = useState("ALL");

  const [poolstock, setpoolstock] = useState([]);
  const [vna, setvna] = useState([]);
  const [models, setModels] = useState([]);
  const [variants, setVariants] = useState([]);
  const [Colour,setColurs] = useState([])
  const [modelFilter, setModelFilter] = useState("ALL");
  const [variantFilter, setVariantFilter] = useState("ALL");
  const [colourFilter,setColourFilter] = useState('ALL')

  const [matchedmodels, setmatchedModels] = useState([]);
  const [matchedvariants, setmatchedVariants] = useState([]);
  const [matchedColour,setmatchedColurs] = useState([])
  const [matchedmodelFilter, setmatchedModelFilter] = useState("ALL");
  const [matchedvariantFilter, setmatchedVariantFilter] = useState("ALL");
  const [matchedcolourFilter,setmatchedColourFilter] = useState('ALL')

   const [poolstockmodels, setpoolstockModels] = useState([]);
  const [poolstockvariants, setpoolstockVariants] = useState([]);
  const [poolstockColour,setpoolstockColurs] = useState([])
  const [poolstockmodelFilter, setpoolstockModelFilter] = useState("ALL");
  const [poolstockvariantFilter, setpoolstockVariantFilter] = useState("ALL");
  const [poolstockcolourFilter,setpoolstockColourFilter] = useState('ALL')





  const [dealerships,setDealerships] = useState([])
  const [dealershipIdAsm,setdealershipIdAsm] = useState('')
  const [dealershipButtonShow,setDealershipButtonShow] = useState(false)
  const [selectedDealershipName,setSelectedDealershipName] = useState('')

  useEffect(()=>{
    const fetchDealerships = async() => {
     if(dealershipDetails?.role === 'ASM'){ const response = await getDealerships()
      setDealerships(response?.data?.data)
      setSelectedDealershipName(response?.data?.data?.[0]?.dealership_name)
      setdealershipIdAsm(response?.data?.data?.[0]?.pk_id)
}
        const poolstock = await getpoolstock();
      setpoolstock(poolstock?.data?.data);
    }

    
      fetchDealerships()
    

   
  },[])

  useEffect(() => {
    const dealercodefetch = async () => {
      if (dealershipDetails?.role === "ASM") {
        const dealer_codes = await GetDealerCodes(dealershipIdAsm);

        setdealerCodes([
          "ALL",
          ...dealer_codes?.data?.msg?.map((item) => item.dealer_code),
        ]);
      } else {
        const dealer_codes = await GetDealerCodes(dealershipDetails?.id);
        setdealerCodes([
          "ALL",
          ...dealer_codes?.data?.msg?.map((item) => item.dealer_code),
        ]);
      }

     
    };
    dealercodefetch();
  }, [dealershipIdAsm]);

  useEffect(() => {
    const MatchedData = async () => {

      let response;


if(dealershipDetails?.role === 'ASM'){
  
       response = await PoolstockMatchedData(
        dealershipIdAsm,
        1,
        selectedDealerCode,
      );
}
else{

       response = await PoolstockMatchedData(
        dealershipDetails?.id,
        1,
        selectedDealerCode,
      );
}
      setMatchedStock(response?.data?.filter((item) => item.i > 0));

      const matchedStock = response?.data?.filter((item) => item.i > 0);

      const modelCounts = matchedStock.reduce((acc, item) => {
        const model = item.Trim?.trim().split(" ")[0];
        if (!model) return acc;

        acc[model] = (acc[model] || 0) + 1;
        return acc;
      }, {});

      const result = Object.entries(modelCounts).map(([model, count]) => ({
        model,
        count,
      }));

      setmatchedModels(result);

      const variantCounts = matchedStock.reduce((acc, item) => {
        const variant = item.Trim;
        if (!variant) return acc;

        acc[variant] = (acc[variant] || 0) + 1;
        return acc;
      }, {});

      const result1 = Object.entries(variantCounts).map(([Trim, count]) => ({
        Trim,
        count,
      }));

      setmatchedVariants(result1);

      const colourCounts = matchedStock.reduce((acc, item) => {
        const colour = item.Colour;
        if (!colour) return acc;

        acc[colour] = (acc[colour] || 0) + 1;
        return acc;
      }, {});

      const result2 = Object.entries(colourCounts).map(([Colour, count]) => ({
        Colour,
        count,
      }));

      setmatchedColurs(result2)
 

      let vna

     if(dealershipDetails?.role === 'ASM') {
        vna = await getvna(dealershipIdAsm, selectedDealerCode);
     }
     else{
        vna = await getvna(dealershipDetails?.id, selectedDealerCode);
     }
      setvna(vna?.data?.data);

      let models 

      if(dealershipDetails?.role === 'ASM'){
         models = await getModels(dealershipIdAsm, selectedDealerCode);
      }
      else{
         models = await getModels(dealershipDetails?.id, selectedDealerCode);
      }
      
      setModels(models?.data?.data);

      let variants

      if(dealershipDetails?.role === 'ASM'){
         variants = await getVariants(
        dealershipIdAsm,
        selectedDealerCode,
      );
      }
      else{
         variants = await getVariants(
        dealershipDetails?.id,
        selectedDealerCode,
      );
      }
      
      setVariants(variants?.data?.data);

      let colours

      if(dealershipDetails?.role === 'ASM'){
       colours = await getColour(dealershipIdAsm,selectedDealerCode)

      }
      else{
       colours = await getColour(dealershipDetails?.id,selectedDealerCode)

      }


      setColurs(colours?.data?.data)

      const poolstockmodels = await getpoolstockModel()
      setpoolstockModels(poolstockmodels?.data?.data)

      const poolstockvariant = await getpoolstockVariant()
      setpoolstockVariants(poolstockvariant?.data?.data)

      const poolstockColour = await getpoolstockColour()
      setpoolstockColurs(poolstockColour?.data?.data)



      const timedata = await GetLastUpdatedDates(dealershipDetails?.id);

      setasmUpload({
        ...asmUpload,
        uploadTime: new Date(timedata?.poolstocklastupdate).toLocaleString(
          "en-IN",
          {
            timeStyle: "short",
            dateStyle: "medium",
          },
        ),
      });

      setdealerUpload({
        ...dealerUpload,
        uploadTime: new Date(timedata?.vnalastupdate).toLocaleString("en-IN", {
          timeStyle: "short",
          dateStyle: "medium",
        }),
      });
    };
    MatchedData();
  }, [selectedDealerCode,dealershipIdAsm]);

  const [selectedList, setSelectedList] = useState("Matched");

  return (
    <div className="w-[calc(100vw-230px)] h-[100vh]  p-[1rem] font-roboto ">
      <div
        className={`w-full h-full border-[1px] border-[#cfcfd5] rounded-[20px] flex flex-col gap-[1rem] relative px-[2rem] overflow-y-scroll py-[1rem]
          
            `}
        style={{ scrollbarWidth: "none" }}
      >
        <div className=" rounded-2xl sm:rounded-3xl p-6 backdrop-blur-xl border border-white/20 shadow-xl   bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 ">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl 
                      flex items-center justify-center bg-[#FFFFFF26] backdrop-blur-sm shadow-lg p-4 border border-[#FFFFFF4D]"
              >
                <FileChartColumn
                  className="w-6 h-6 sm:w-7 sm:h-7 text-[white]"
                  strokeWidth={2}
                />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[white] tracking-tight font-bold">
                  Pool Stock
                </h1>
                <p className="text-sm sm:text-base text-white mt-1">
                  Match and reconcile OEM and dealer inventory uploads in real
                  time
                </p>
              </div>
            </div>

            {/* DAN Advantage Badge */}
            <div
              className="hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-full 
                    bg-[#FFFFFF26] backdrop-blur-sm shadow-lg p-4 border border-[#FFFFFF4D]"
            >
              <Bot className="w-4.5 h-4.5 text-[#fff]" strokeWidth={2} />
              <span className="text-sm font-semibold text-[#fff]">
                DAN Powered
              </span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-[#0285FF] rounded-full"></div>
            <h2 className="text-xl text-gray-900" style={{ fontWeight: 600 }}>
              Upload Tracker
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <UploadCard
              title="ASM Upload (Poolstock)"
              upload={asmUpload}
              type="asm"
            />
            <UploadCard
              title="Dealer Upload (VNA)"
              upload={dealerUpload}
              type="dealer"
            />
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-[#0285FF] rounded-full"></div>
            <h2 className="text-xl text-gray-900" style={{ fontWeight: 600 }}>
              Matching Summary
            </h2>
          </div>
          <div className="flex items-center justify-between gap-2">
            <KPICard
              title="Total Units Matched"
              value={MatchedStock?.length}
              icon={CheckCircle}
              color="#10B981"
            />
            {/* <KPICard
              title="Unmatched Units"
              value={unmatched}
              icon={AlertCircle}
              color="#F59E0B"
            />
            <KPICard
              title="Missing in Dealer"
              value={missingInDealer}
              icon={XCircle}
              color="#EF4444"
            />
            <KPICard
              title="Missing in OEM"
              value={missingInOEM}
              icon={XCircle}
              color="#EF4444"
            />
            <KPICard
              title="Match Accuracy"
              value={`${matchAccuracy}%`}
              icon={TrendingUp}
              color="#0285FF"
            />
           */}

            <div className="flex w-full  h-full justify-start gap-[1rem]">
                {(selectedList === "Matched"
                  ? matchedmodels
                  : selectedList === "VNA" ? models : selectedList === 'Poolstock' && poolstockmodels 
                )?.length !== 0 &&
                  (selectedList === "Matched"
                    ? matchedmodels
                    : selectedList === "VNA" ? models : selectedList === 'Poolstock' && poolstockmodels 
                  )?.map((model, i) => {
                    return (
                     
                        <Card 

                         key={i}
                        onClick={() => {
                          if(selectedList==='VNA'){
                            if (modelFilter === model.model) {
                            setModelFilter("ALL");
                          } else {
                            setModelFilter(model.model);
                          }
                        }
                        if(selectedList==='Matched'){
                            if (matchedmodelFilter === model.model) {
                            setmatchedModelFilter("ALL");
                          } else {
                            setmatchedModelFilter(model.model);
                          }
                        }
                        }}
                        className={`p-5  bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#0285FF]/30 relative overflow-hidden group
                        ${
                          modelFilter === model.model || matchedmodelFilter === model.model
                            ? "bg-[#0b85ff33]"
                            : "hover:bg-[#0b85ff1a]"
                        }
                        `}>
                           
                             <div className="relative flex items-start justify-between">
                               <div className="space-y-1">
                                 <p className="text-sm text-gray-500">{model?.model}</p>
                                 <p className="text-2xl text-gray-900" style={{ fontWeight: 600 }}>
                                   {model?.count}
                                 </p>
                               </div>
                               
                             </div>
                           </Card>
                    

          
                    );
                  })}
              </div>
          </div>
        </div>

     <div className="flex items-center justify-between gap-2">
         <div className="flex item-center gap-2 border border-[#cfcfd7] rounded-[8px] px-2 py-1 w-fit">
          {["Matched", "VNA", "Poolstock"].map((item, i) => {
            return (
              <span
                onClick={() => {
                  setSelectedList(item);
                }}
                key={i}
                className={`px-2 py-1 cursor-pointer rounded-md ${selectedList === item ? "bg-[#0b85ff] text-white font-medium" : "text-[#000]"}`}
              >
                {item}
              </span>
            );
          })}
        </div>
        {dealershipDetails?.role==='ASM' && <button
                className={`text-[#0b85ff] text-[.875rem] flex items-center justify-between gap-[.25rem] cursor-pointer relative px-[.5rem] py-[.25rem] border-[1px] border-[#0b85ff] rounded-[8px] z-[999]  ${
                  dealershipButtonShow && "rounded-b-[0px] border-b-0"
                }`}
                onClick={() => {
                  setDealershipButtonShow(!dealershipButtonShow);
                }}
              >
                {selectedDealershipName}
                <RiArrowDropDownLine className="text-[1.25rem] font-normal" />
                <div
                  className={`absolute top-[100%] left-[-1px]  border-t-0 rounded-[8px] rounded-t-[0px] border-[#0b85ff] 
                                   transition-height duration-200 overflow-y-scroll bg-[white] z-[999]
                                   ${
                                     dealershipButtonShow
                                       ? "h-auto w-[calc(100%+2px)] border-[1px]"
                                       : "w-[0px] h-[0px] border-0"
                                   }
                                   `}
                  style={{ scrollbarWidth: "none" }}
                >
                 
                  {dealerships?.map((item, i) => {
                    return (
                      <h1
                        key={i}
                        className={` py-[.25rem] 
                                         `}
                        onClick={() => {
                          setdealershipIdAsm(item?.pk_id);
                          setSelectedDealershipName(item?.dealership_name)
                        }}
                      >
                        {item?.dealership_name}
                      </h1>
                    );
                  })}
                </div>
              </button>}
     </div>

       
          <div className="flex items-center justify-between gap-[1rem]">
            
            <div
              className="py-[.5rem] w-full px-[1rem] border-[1px] border-[#cfcfd7] rounded-[8px] flex flex-col gap-[.5rem] h-[254px] overflow-y-scroll"
              style={{ scrollbarWidth: "none" }}
            >
              <div className="flex items-center justify-between">
                <h1 className="font-2 text-[1.15rem]">Variants</h1>

                <div className="flex items-center justify-between gap-[1rem]">
                  <h1 className="font-2-book text-[.85rem]">Total</h1>
                </div>
              </div>
              <div className="flex flex-col gap-[1rem] items-between justify-between">
                {(selectedList === "Matched"
                  ? matchedvariants
                  : selectedList === "VNA" ?variants :selectedList==='Poolstock' && poolstockvariants
                )?.length !== 0 &&
                  (selectedList === "Matched"
                    ? matchedvariants
                    : selectedList === "VNA" ? variants :selectedList==='Poolstock' && poolstockvariants
                  )?.map((variant, i) => {
                    return (
                      <div
                        key={i}
                        onClick={() => {
                          variantFilter === variant?.Trim
                            ? setVariantFilter("ALL")
                            : setVariantFilter(variant?.Trim);
                        }}
                        className={`flex items-center justify-between gap-[3rem] px-[1rem] pr-[.5rem] py-[.25rem] rounded-[8px] border-[1px] border-[#FFE6CC] cursor-pointer ${
                          variantFilter === variant?.Trim
                            ? "bg-[#ffe6cc66]"
                            : "hover:bg-[rgba(0,0,0,0.1)]"
                        }`}
                      >
                        <h1 className="text-[.85rem] font-2-book">
                          {variant?.Trim}
                        </h1>
                        <div className="flex items-center justify-between gap-[1.5rem]">
                          <h1
                            className={`text-[.85rem] font-2-book  w-[30px] text-center rounded-[6px] bg-[#FFE6CC]
                                 
                                  `}
                          >
                            {variant?.count}
                          </h1>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div
              className="py-[.5rem] w-full px-[1rem] border-[1px] border-[#cfcfd7] rounded-[8px] flex flex-col gap-[.5rem] justify-between h-[254px] overflow-y-scroll"
              style={{ scrollbarWidth: "none" }}
            >
              <h1 className="font-2 text-[1.15rem]">Colours</h1>

              <div className="flex flex-col h-full justify-start gap-[1rem]">
                {(selectedList === "Matched"
                  ? matchedColour
                  : selectedList === "VNA" ? Colour : selectedList === 'Poolstock' && poolstockColour 
                )?.length !== 0 &&
                  (selectedList === "Matched"
                    ? matchedColour
                    : selectedList === "VNA" ? Colour : selectedList === 'Poolstock' && poolstockColour 
                  )?.map((color, i) => {
                    return (
                      <div
                        key={i}
                        className={`flex items-center justify-between gap-[3rem]  px-[1rem] pr-[.5rem] py-[.25rem] rounded-[8px] border-[1px] border-[#0b85ff66] cursor-pointer ${
                          colourFilter === color.Colour || matchedcolourFilter === color.Colour
                            ? "bg-[#0b85ff33]"
                            : "hover:bg-[#0b85ff1a]"
                        }`}
                        onClick={() => {
                          if(selectedList==='VNA'){
                            if (colourFilter === color.Colour) {
                            setColourFilter("ALL");
                          } else {
                            setColourFilter(color.Colour);
                          }
                        }
                        if(selectedList==='Matched'){
                            if (matchedcolourFilter === color.Colour) {
                            setmatchedColourFilter("ALL");
                          } else {
                            setmatchedColourFilter(color.Colour);
                          }
                        }
                        }}
                      >
                        <h1 className="text-[.85rem] font-2-book">
                          {color?.Colour}
                        </h1>
                        <h1 className="text-[.85rem] font-2-book bg-[#0b85ff66] w-[30px] text-center rounded-[6px]">
                          {color?.count}
                        </h1>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        

        {selectedList === "Matched" && (
          <div className="w-full py-[.5rem] px-[1rem] border-[1px] border-[#cfcfd7] rounded-[8px] flex flex-col gap-[1rem]">
            <div className="flex items-center justify-between gap-2">
              <h1 className="text-[1.25rem] font-2">Matched VNA Stock</h1>

              <button
                className={`text-[#0b85ff] text-[.875rem] flex items-center justify-between gap-[.25rem] cursor-pointer relative px-[.5rem] py-[.25rem] border-[1px] border-[#0b85ff] rounded-[8px] z-[999]  ${
                  codeButtonShow && "rounded-b-[0px] border-b-0"
                }`}
                onClick={() => {
                  setCodeButtonShow(!codeButtonShow);
                }}
              >
                {selectedDealerCode}
                <RiArrowDropDownLine className="text-[1.25rem] font-normal" />
                <div
                  className={`absolute top-[100%] left-[-1px]  border-t-0 rounded-[8px] rounded-t-[0px] border-[#0b85ff] 
                                   transition-height duration-200 overflow-y-scroll bg-[white] z-10
                                   ${
                                     codeButtonShow
                                       ? "h-auto w-[calc(100%+2px)] border-[1px]"
                                       : "w-[0px] h-[0px] border-0"
                                   }
                                   `}
                  style={{ scrollbarWidth: "none" }}
                >
                  {dealerCodes?.map((item, i) => {
                    return (
                      <h1
                        key={i}
                        className={` py-[.25rem] 
                                         `}
                        onClick={() => {
                          setSelectedDealerCode(item);
                        }}
                      >
                        {item}
                      </h1>
                    );
                  })}
                </div>
              </button>
            </div>
            <div
              className="w-full p-[.5rem] px-[1rem] border-[1px] border-[#cfcfd7] bg-[#0b85ff] text-[white] rounded-[8px] font-2 text-[.875rem] flex items-center justify-between overflow-x-scroll"
              ref={headerRef}
              style={{ scrollbarWidth: "none" }}
              onScroll={(e) => syncScroll("header", e.target.scrollLeft)}
            >
              <h1 className="text-center min-w-[100px] ">Code</h1>
              <h1 className="text-center min-w-[250px] ">Item</h1>
              <h1 className="text-center min-w-[250px] ">Color</h1>
              <h1 className="text-center min-w-[100px] ">VNA</h1>
              <h1 className="text-center min-w-[100px] ">All India</h1>
              <h1 className="text-center min-w-[250px] ">
                Available Trim Quota[Ro]
              </h1>
            </div>

            {MatchedStock?.map((item, i) => {
              return (
                <div
                  className="w-full p-[.5rem] px-[1rem] border-[1px] border-[#cfcfd7] bg-[white] rounded-[8px] font-2-book text-[.875rem] flex items-center justify-between overflow-x-scroll"
                  ref={(el) => (rowRefs.current[i] = el)}
                  style={{ scrollbarWidth: "none" }}
                  onScroll={(e) => syncScroll(i, e.target.scrollLeft)}
                >
                  <h1 className="text-center  min-w-[100px]">
                    {item?.["Code"]}
                  </h1>
                  <h1 className="text-center  min-w-[250px]">{item?.Trim}</h1>
                  <h1 className="text-center  min-w-[250px]">
                    {item?.["Colour"]}
                  </h1>
                  <h1 className="text-center  min-w-[100px] ">
                    {item?.["VNA"]}
                  </h1>
                  <h1 className="text-center  min-w-[100px]">{item?.["h"]}</h1>
                  <h1 className="text-center  min-w-[250px]">{item?.["i"]}</h1>
                </div>
              );
            })}
          </div>
        )}

        {selectedList === "VNA" && (
          <div className="w-full py-[.5rem] px-[1rem] border-[1px] border-[#cfcfd7] rounded-[8px] flex flex-col gap-[1rem]">
            <div className="flex items-center justify-between gap-2">
              <h1 className="text-[1.25rem] font-2">VNA</h1>

              <button
                className={`text-[#0b85ff] text-[.875rem] flex items-center justify-between gap-[.25rem] cursor-pointer relative px-[.5rem] py-[.25rem] border-[1px] border-[#0b85ff] rounded-[8px] z-[999]  ${
                  codeButtonShow && "rounded-b-[0px] border-b-0"
                }`}
                onClick={() => {
                  setCodeButtonShow(!codeButtonShow);
                }}
              >
                {selectedDealerCode}
                <RiArrowDropDownLine className="text-[1.25rem] font-normal" />
                <div
                  className={`absolute top-[100%] left-[-1px]  border-t-0 rounded-[8px] rounded-t-[0px] border-[#0b85ff] 
                                   transition-height duration-200 overflow-y-scroll bg-[white] z-10
                                   ${
                                     codeButtonShow
                                       ? "h-auto w-[calc(100%+2px)] border-[1px]"
                                       : "w-[0px] h-[0px] border-0"
                                   }
                                   `}
                  style={{ scrollbarWidth: "none" }}
                >
                  {dealerCodes?.map((item, i) => {
                    return (
                      <h1
                        key={i}
                        className={` py-[.25rem] 
                                         `}
                        onClick={() => {
                          setSelectedDealerCode(item);
                        }}
                      >
                        {item}
                      </h1>
                    );
                  })}
                </div>
              </button>
            </div>
            <div
              className="w-full p-[.5rem] px-[1rem] border-[1px] border-[#cfcfd7] bg-[#0b85ff] text-[white] rounded-[8px] font-2 text-[.875rem] flex items-center justify-between overflow-x-scroll"
              ref={headerRef}
              style={{ scrollbarWidth: "none" }}
              onScroll={(e) => syncScroll("header", e.target.scrollLeft)}
            >
              <h1 className="text-center min-w-[100px] ">Code</h1>
              <h1 className="text-center min-w-[250px] ">Variant</h1>
              <h1 className="text-center min-w-[250px] ">Color</h1>
              <h1 className="text-center min-w-[100px] ">Vna</h1>
            </div>

            {vna?.map((item, i) => {
              return (
                <div
                  className="w-full p-[.5rem] px-[1rem] border-[1px] border-[#cfcfd7] bg-[white] rounded-[8px] font-2-book text-[.875rem] flex items-center justify-between overflow-x-scroll"
                  ref={(el) => (rowRefs.current[i] = el)}
                  style={{ scrollbarWidth: "none" }}
                  onScroll={(e) => syncScroll(i, e.target.scrollLeft)}
                >
                  <h1 className="text-center  min-w-[100px]">
                    {item?.["Code"]}
                  </h1>
                  <h1 className="text-center  min-w-[250px]">
                    {item?.["Trim"]}
                  </h1>
                  <h1 className="text-center  min-w-[250px]">
                    {item?.["Colour"]}
                  </h1>

                  <h1 className="text-center  min-w-[100px]">
                    {item?.["VNA"]}
                  </h1>
                </div>
              );
            })}
          </div>
        )}

        {selectedList === "Poolstock" && (
          <div className="w-full py-[.5rem] px-[1rem] border-[1px] border-[#cfcfd7] rounded-[8px] flex flex-col gap-[1rem]">
            <div className="flex items-center justify-between gap-2">
              <h1 className="text-[1.25rem] font-2">Poolstock</h1>
            </div>
            <div
              className="w-full p-[.5rem] px-[1rem] border-[1px] border-[#cfcfd7] bg-[#0b85ff] text-[white] rounded-[8px] font-2 text-[.875rem] flex items-center justify-between overflow-x-scroll"
              ref={headerRef}
              style={{ scrollbarWidth: "none" }}
              onScroll={(e) => syncScroll("header", e.target.scrollLeft)}
            >
              <h1 className="text-center min-w-[100px] ">Model</h1>
              <h1 className="text-center min-w-[250px] ">Variant</h1>
              <h1 className="text-center min-w-[250px] ">Ext Color</h1>
              <h1 className="text-center min-w-[200px] ">Int Color</h1>
              <h1 className="text-center min-w-[100px] ">All India</h1>
              <h1 className="text-center min-w-[100px] ">RSY</h1>
              <h1 className="text-center min-w-[100px] ">Region</h1>
              <h1 className="text-center min-w-[100px] ">Total</h1>
            </div>

            {poolstock?.map((item, i) => {
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
                  <h1 className="text-center  min-w-[250px]">
                    {item?.["Variant Description"]}
                  </h1>
                  <h1 className="text-center  min-w-[250px]">
                    {item?.["Ext Color"]}
                  </h1>
                  <h1 className="text-center  min-w-[200px] ">
                    {item?.["Int Color"]}
                  </h1>
                  <h1 className="text-center  min-w-[100px]">
                    {item?.["All India"]}
                  </h1>
                  <h1 className="text-center  min-w-[100px]">
                    {item?.["RSY"]}
                  </h1>
                  <h1 className="text-center  min-w-[100px]">
                    {item?.["Region"]}
                  </h1>
                  <h1 className="text-center  min-w-[100px]">
                    {item?.["Total"]}
                  </h1>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default PoolStock;
