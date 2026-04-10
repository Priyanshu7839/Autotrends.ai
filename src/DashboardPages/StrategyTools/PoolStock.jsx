import { AlertCircle, Bot, CheckCircle, CheckCircle2, Clock, FileChartColumn, TrendingUp, Upload, XCircle } from 'lucide-react'
import React,{useEffect, useRef, useState} from 'react'
import { UploadCard } from "./Components/UploadCard";
import {KPICard} from './Components/KPICard'
import { poolStockRecords, asmUpload, dealerUpload } from "./data/poolStockData";
import { PoolstockMatchedData } from '../../utils/APICalls';



const PoolStock = () => {

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
 

    useEffect(()=>{
        const MatchedData = async() =>{
          const response = await PoolstockMatchedData(1,1)
          console.log(response)
          setMatchedStock(response?.data)
        } 

        MatchedData()
    },[])


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
            <UploadCard title="OEM Upload (ASM)" upload={asmUpload} type="asm" />
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
          <h1 className="text-[1.25rem] font-2">Inventory Stock</h1>
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