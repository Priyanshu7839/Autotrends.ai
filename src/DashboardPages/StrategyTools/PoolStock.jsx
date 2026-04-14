import { AlertCircle, Bot, CheckCircle, CheckCircle2, Clock, FileChartColumn, TrendingUp, Upload, XCircle } from 'lucide-react'
import React,{useEffect, useRef, useState} from 'react'
import { UploadCard } from "./Components/UploadCard";
import {KPICard} from './Components/KPICard'
import { poolStockRecords, dealerUpload } from "./data/poolStockData";
import { GetDealerCodes, GetLastUpdatedDates, GetuniqueDealerCodes, PoolstockMatchedData } from '../../utils/APICalls';
import { useSelector } from 'react-redux';
import { RiArrowDropDownLine } from 'react-icons/ri';



const PoolStock = () => {

  const dealershipDetails = useSelector((state) => state.DealershipDetails);


  const [asmUpload,setasmUpload] = useState({
    name: 'Divyajeet Kumar',
    uploadTime: '2026-03-28 09:45 AM',
    fileName: 'ASM_North_Zone_Mar2026.xlsx',
    totalRecords: 1247,
    status: 'uploaded'
  })

   const [dealerUpload,setdealerUpload] = useState({
    name: 'Shivam Aggrawal',
    uploadTime: '2026-03-28 10:15 AM',
    fileName: 'Dealer_Network_Stock_Mar2026.xlsx',
    totalRecords: 1198,
    status: 'uploaded'
  })

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
  

    const totalMatched = poolStockRecords.filter(r => r.matchStatus === 'full').length;
  const unmatched = poolStockRecords.filter(r => r.matchStatus === 'partial' || r.matchStatus === 'missing').length;
  const missingInDealer = poolStockRecords.filter(r => r.matchStatus === 'missing' && r.oemData && !r.dealerData).length;
  const missingInOEM = poolStockRecords.filter(r => r.matchStatus === 'missing' && !r.oemData && r.dealerData).length;
  const matchAccuracy = ((totalMatched / poolStockRecords.length) * 100).toFixed(1);

  const [MatchedStock,setMatchedStock] = useState([])
  const [dealerCodes,setdealerCodes] = useState([])
  const [codeButtonShow,setCodeButtonShow] = useState(false)
    const [selectedDealerCode,setSelectedDealerCode] = useState('ALL')


    useEffect(()=>{
          const dealercodefetch = async() => {
               if(dealershipDetails?.role === 'ASM') {
                const dealer_codes = await GetuniqueDealerCodes()
                setdealerCodes(dealer_codes?.data?.data)
               }
               else{
                const dealer_codes = await GetDealerCodes(dealershipDetails?.id)
              setdealerCodes(["ALL",...dealer_codes?.data?.msg?.map((item)=>item.dealer_code)])
               } 

             
              
              
            
          }

          dealercodefetch()
    },[])

    useEffect(()=>{
        const MatchedData = async() =>{
          const response = await PoolstockMatchedData(dealershipDetails?.id,1,selectedDealerCode)
          console.log(response)
         
          setMatchedStock(response?.data?.filter((item)=>
            item.i > 0
          ))


          const timedata = await GetLastUpdatedDates(dealershipDetails?.id) 
          console.log(timedata)


          setasmUpload({...asmUpload , uploadTime:new Date(timedata?.poolstocklastupdate).toLocaleString('en-IN',{
            timeStyle:'short',
            dateStyle:'medium'
          })})


          setdealerUpload({...dealerUpload,uploadTime:new Date(timedata?.vnalastupdate).toLocaleString('en-IN',{
            timeStyle:'short',
            dateStyle:'medium'
          })})



         
        } 
        MatchedData()
    },[selectedDealerCode])





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
                  Match and reconcile OEM and dealer inventory uploads in real time
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
            <UploadCard title="ASM Upload (Poolstock)" upload={asmUpload} type="asm" />
            <UploadCard title="Dealer Upload (VNA)" upload={dealerUpload} type="dealer" />
          </div>
        </div>


          <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-[#0285FF] rounded-full"></div>
            <h2 className="text-xl text-gray-900" style={{ fontWeight: 600 }}>
              Matching Summary
            </h2>
          </div>
          <div className="grid grid-cols-6 gap-4">
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
            <KPICard
              title="Last Sync"
              value="10:15 AM"
              icon={Clock}
              color="#0285FF"
            /> */}
          </div>
        </div>

           <div className="w-full py-[.5rem] px-[1rem] border-[1px] border-[#cfcfd7] rounded-[8px] flex flex-col gap-[1rem]">
        <div className='flex items-center justify-between gap-2'>
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
            <h1 className="text-center min-w-[250px] ">Available Trim Quota[Ro]</h1>
           
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
                <h1 className="text-center  min-w-[250px]">
                  {item?.Trim}
                  </h1>
                <h1 className="text-center  min-w-[250px]">
                  {item?.["Colour"]}
                </h1>
                 <h1 className="text-center  min-w-[100px] ">
                  {item?.["VNA"]}
                </h1>
                <h1 className="text-center  min-w-[100px]">
                  {item?.["h"]}
                </h1>
                 <h1 className="text-center  min-w-[250px]">
                  {item?.["i"]}
                </h1>
               
              </div>
            );
          })}
        </div>
        </div>
    </div>
  )
}

export default PoolStock