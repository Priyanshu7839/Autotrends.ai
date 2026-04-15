import { FaInfoCircle } from "react-icons/fa";
import AddPurchaseAgeing from "../../assets/Images/AddPurchaseAgeing.png";
import DanImage from "../../assets/Images/DANImage.png";
import NormalScenario from "../../assets/Images/NormalScenario.png";
import TallyAgeing from "../../assets/Images/TallyAgeing.png";
import {
  GetDealerCodes,
  StrategyToolsInventoryDataFetch,
} from "../../utils/APICalls";
import React, { useEffect, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useSelector } from "react-redux";

const Strategytools = () => {
  const now = new Date();
  const currentMonthDays = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  ).getDate();
  const DealerData = useSelector((state) => state.DealershipDetails);

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

  const [currentStock, setcurrentStock] = useState("0");
  const [BBNDStock, setBBNDStock] = useState("0");

  useEffect(() => {
    const StockUnits = async () => {
      const units = await StrategyToolsInventoryDataFetch(DealerData?.id,'ALL','ALL','ALL','ALL')
    setcurrentStock(units?.mainUnits)
    setBBNDStock(units?.bbndUnits)
    };
    StockUnits();
  }, [dealerCodes]);

  const [BBNDCalculatorData, setBBNDCalculatorData] = useState({
    AverageSales: "",
    DailySales: "",
    NormalInventoryAge: "0",
    Purchase: "",
    Sales: "",
    StockWothouBBND: currentStock,
    AgeWithoutBBND: "0",
    TallySales: "",
    StockWithTally: "",
    AgeingWithTally: "0",
    StockWithBBND: "0",
    AgeingWithBBND: "0",
  });

  useEffect(() => {
    if (BBNDCalculatorData.AverageSales !== "") {
      setBBNDCalculatorData((prev) => ({
        ...prev,
        DailySales: (Math.floor((prev.AverageSales / currentMonthDays)*10))/10,
      }));
    } else {
      setBBNDCalculatorData((prev) => ({
        ...prev,
        DailySales: "",
      }));
    }

    if (BBNDCalculatorData.DailySales !== "") {
      setBBNDCalculatorData((prev) => ({
        ...prev,
        NormalInventoryAge: parseFloat(currentStock / prev.DailySales).toFixed(
          2
        ),
      }));
    }

    if (BBNDCalculatorData.AverageSales !== "") {
      setBBNDCalculatorData((prev) => ({
        ...prev,
        StockWothouBBND:
          Number(currentStock) +
          (prev.Purchase !== "" ? parseInt(prev.Purchase) : 0),
      }));
    }

    if (BBNDCalculatorData.Sales !== "") {
      if (BBNDCalculatorData.Purchase === "") {
        setBBNDCalculatorData((prev) => ({
          ...prev,
          StockWothouBBND: currentStock - parseInt(prev.Sales),
        }));
      } else {
        setBBNDCalculatorData((prev) => ({
          ...prev,
          StockWothouBBND:
            currentStock + parseInt(prev.Purchase) - parseInt(prev.Sales),
        }));
      }
    }
    if (BBNDCalculatorData.StockWothouBBND !== "") {
      setBBNDCalculatorData((prev) => ({
        ...prev,
        StockWithTally: prev.StockWothouBBND,
      }));
    }

    if (BBNDCalculatorData.TallySales !== "") {
      setBBNDCalculatorData((prev) => ({
        ...prev,
        StockWithTally:
          Number(prev.StockWothouBBND || 0) - (parseInt(prev.TallySales) || 0),
      }));
    }

    if (BBNDCalculatorData.AverageSales !== "") {
      setBBNDCalculatorData((prev) => ({
        ...prev,
        AgeWithoutBBND: parseFloat(
          prev.StockWothouBBND / prev.DailySales
        ).toFixed(2),
      }));
    }
    if (BBNDCalculatorData.AverageSales === "") {
      setBBNDCalculatorData((prev) => ({
        ...prev,
        AgeWithoutBBND: "0",
      }));
    }
    if (
      BBNDCalculatorData.StockWithTally !== "" &&
      BBNDCalculatorData.DailySales !== ""
    ) {
      setBBNDCalculatorData((prev) => ({
        ...prev,
        AgeingWithTally: parseFloat(prev.StockWithTally / prev.DailySales).toFixed(2),
        StockWithBBND: parseInt(prev.StockWithTally) + parseInt(BBNDStock),
      }));
    }

    if (
      BBNDCalculatorData.DailySales !== "" &&
      BBNDCalculatorData.StockWithBBND !== "0"
    ) {
      setBBNDCalculatorData((prev) => ({
        ...prev,
        AgeingWithBBND: parseFloat(prev.StockWithBBND / prev.DailySales).toFixed(2),
      }));
    }
  }, [
    BBNDCalculatorData.AverageSales,
    BBNDCalculatorData.Purchase,
    BBNDCalculatorData.Sales,
    BBNDCalculatorData.TallySales,
    BBNDCalculatorData.StockWothouBBND,
    BBNDCalculatorData.StockWithTally,
    BBNDCalculatorData.StockWithBBND,
  ]);

  const StrategyToolsTabs = [
    "Stock Ageing Calculator",
    "Stock Order Analysis",
    "Finance Simulator",
    "Incentive Simulator",
    "Current Stock Analysis"
  ];
  const [selectedTab, setSelectedTab] = useState(StrategyToolsTabs[0]);

  const ImpactStudyChart = [
    {
      heading:'Inventory Stuck',
      value:'--',
      explanation:"what amount of Inventory is stuck"
    },
    {
      heading:'Next Sales Loss',
      value:'--',
      explanation:"Next month sale gets effected"
    },
    {
      heading:'Fund Gap',
      value:'--',
      explanation:"Fund gap is also KDEP gets effected this effects companies future expansion"
    },
    {
      heading:'OEM Overbill',
      value:'--',
      explanation:"OEM does not get to see the stock so he bills you more the next month"
    },
    {
      heading:'GST Mismatch',
      value:'--',
      explanation:" GST issue since Tally and DBMS data does not match incase of GST audit by the government this may become a big problem"
    },
    {
      heading:'Excel Risk',
      value:'--',
      explanation:"Since the stock is out of your software you are dependent on excel manual, mistakes and malpractices can also happen"
    },
    {
      heading:'Warranty Void',
      value:'--',
      explanation:"Warranty issues sine the vehicle is already billed in DBMS"
    },
    {
      heading:'Scheme Missed',
      value:'--',
      explanation:"Warranty issues sine the vehicle is already billed in DBMS"
    },
    {
      heading:'Customer Error',
      value:'--',
      explanation:"Name and number issue the vehicle is billed in the name of Pankaj but sold to Raghav this creates a issue and customer wrong information"
    },
    {
      heading:'KEC Skew',
      value:'--',
      explanation:"KEC figures in DBMS gets effected so we are not able to tabulate the true sales of a sales person "
    },
    {
      heading:'Exchange Block',
      value:'--',
      explanation:"Inter dealer exchange becomes difficult since the vehicle is already billed"
    },
  ]

  return (
    <div className="w-[calc(100vw-230px)] h-[100vh]  p-[1rem] font-roboto ">
      <div
        className={`w-full h-full border-[1px] border-[#cfcfd5] rounded-[20px] p-[1rem] flex flex-col gap-[2rem]  relative overflow-y-scroll
       
          `}
        style={{ scrollbarWidth: "none" }}
      >
        <h1 className="px-[1rem] text-[2rem] font-2 w-full flex items-center  gap-[2rem]">
          Decision Intelligence{" "}
        </h1>
        <div className="w-full h-full">
          <div className="w-full min-h-full  p-[1rem] border-[1px] border-[#cfcfd7] rounded-[12px]  rounded-tr-[0px] flex flex-col gap-[1rem] relative">
            <div
              className={`w-fit flex absolute bg-[white] right-[-1px] font-2-book
              ${
                selectedTab === StrategyToolsTabs[0]
                  ? "top-[-3.9%]"
                  : "top-[-4.6%]"
              }
              `}
            >
              {StrategyToolsTabs.map((tab, i) => {
                return (
                  <div
                  key={i}
                    onClick={() => {
                      setSelectedTab(tab);
                    }}
                    className={`py-[.25rem] px-[1rem] border-[1px] border-[#cfcfd7] rounded-[8px] border-b-[0px] rounded-b-[0px] cursor-pointer
                             ${
                               StrategyToolsTabs.length - 1 !== i &&
                               "border-r-[0px]"
                             }
                             ${
                               selectedTab === tab
                                 ? "bg-[#0b85ff] text-[white]"
                                 : "bg-[white] text-[#0b85ff]"
                             }`}
                  >
                    {tab}
                  </div>
                );
              })}
            </div>

            {selectedTab === "Stock Ageing Calculator" ? (
              <div className="flex flex-col gap-[1rem] w-full h-full">
                <div className="w-full flex items-center gap-[1rem]">
                  <div className="w-full h-[254px] bg-[white] flex items-center justify-center">
                    <img
                      src={DanImage}
                      alt=""
                      className="w-[260px] h-full aspect-square"
                    />
                  </div>
                  <div className="w-full h-[254px] flex flex-col items-center justify-center gap-[1rem]">
                    <div className="flex  items-end gap-[1rem] w-full">
                      <div className="w-full">
                        <label htmlFor="" className="text-[.875rem] font-2">
                          Average Sales
                        </label>
                        <input
                          value={BBNDCalculatorData.AverageSales}
                          onChange={(e) => {
                            setBBNDCalculatorData({
                              ...BBNDCalculatorData,
                              AverageSales: e.target.value,
                            });
                          }}
                          type="text"
                          className="py-[.25rem] text-[.875rem] px-[.5rem] w-full border-[1px] border-[#cfcfd7] rounded-[8px] outline-none"
                        />
                      </div>

                      <div className="w-full">
                        <label htmlFor="" className="text-[.875rem] font-2">
                          Additional Purchase From Today
                        </label>
                        <input
                          type="text"
                          value={BBNDCalculatorData.Purchase}
                          onChange={(e) => {
                            setBBNDCalculatorData({
                              ...BBNDCalculatorData,
                              Purchase: e.target.value,
                            });
                          }}
                          className="py-[.25rem] text-[.875rem] px-[.5rem] w-full border-[1px] border-[#cfcfd7] rounded-[8px] outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex  items-end gap-[1rem] w-full">
                      <div className="w-full">
                        <label htmlFor="" className="text-[.875rem] font-2">
                          Additional Sales From Today
                        </label>
                        <input
                          type="text"
                          value={BBNDCalculatorData.Sales}
                          onChange={(e) => {
                            setBBNDCalculatorData({
                              ...BBNDCalculatorData,
                              Sales: e.target.value,
                            });
                          }}
                          className="py-[.25rem] text-[.875rem] px-[.5rem] w-full border-[1px] border-[#cfcfd7] rounded-[8px] outline-none"
                        />
                      </div>
                      <div className="w-full">
                        <label htmlFor="" className="text-[.875rem] font-2">
                          Tally Sales
                        </label>
                        <input
                          type="text"
                          value={BBNDCalculatorData.TallySales}
                          onChange={(e) => {
                            setBBNDCalculatorData({
                              ...BBNDCalculatorData,
                              TallySales: e.target.value,
                            });
                          }}
                          className="py-[.25rem] text-[.875rem] px-[.5rem] w-full border-[1px] border-[#cfcfd7] rounded-[8px] outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex  items-end gap-[1rem] w-full">
                      <div className="w-full flex flex-col gap-[.5rem]">
                        <label htmlFor="" className="text-[.875rem] font-2">
                          Daily Sales
                        </label>
                        <h1 className="font-2 text-[#0b85ff]">
                          {BBNDCalculatorData.DailySales
                            ? BBNDCalculatorData.DailySales
                            : "0"}
                        </h1>
                      </div>
                      <div className="w-full flex flex-col gap-[.5rem]">
                        <label htmlFor="" className="text-[.875rem] font-2">
                          Current Inventory Stock
                        </label>
                        <h1 className="font-2 text-[#0b85ff]">
                          {currentStock}
                        </h1>
                      </div>
                      <div className="w-full flex flex-col gap-[.5rem]">
                        <label htmlFor="" className="text-[.875rem] font-2">
                          BBND Stock Units
                        </label>
                        <h1 className="font-2 text-[#0b85ff]">{BBNDStock}</h1>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-[1rem]">
                  <div className="border-[1px] border-[#cfcfc7] p-[1rem] rounded-[12px] w-full flex flex-col gap-[1rem]">
                    <h1 className="font-2 text-[1rem]">Normal Ageing</h1>

                    <div className="flex flex-col gap-[.75rem]">
                      <div className="flex items-center justify-between w-full">
                        <h1 className="font-2-book">Current stock</h1>
                        <h1 className="font-2 text-[#0b85ff]">
                          {currentStock ? currentStock : "0"}
                        </h1>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <h1 className="font-2-book">Normal Inventory Age</h1>
                        <h1 className="font-2 text-[#0b85ff]">
                          {BBNDCalculatorData.NormalInventoryAge}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="border-[1px] border-[#cfcfc7] p-[1rem] rounded-[12px] w-full flex flex-col gap-[1rem]">
                    <h1 className="font-2 text-[1rem]">
                      Ageing After Purchase/Sales
                    </h1>

                    <div className="flex flex-col gap-[.75rem]">
                      <div className="flex items-center justify-between w-full">
                        <h1 className="font-2-book">
                          Stock After Purchase/Sales
                        </h1>
                        <h1 className="font-2 text-[#0b85ff]">
                          {BBNDCalculatorData.StockWothouBBND}
                        </h1>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <h1 className="font-2-book">Inventory Age</h1>
                        <h1 className="font-2 text-[#0b85ff]">
                          {BBNDCalculatorData.AgeWithoutBBND}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="border-[1px] border-[#cfcfc7] p-[1rem] rounded-[12px] w-full flex flex-col gap-[1rem]">
                    <h1 className="font-2 text-[1rem]">
                      Ageing After Tally Sales
                    </h1>

                    <div className="flex flex-col gap-[.75rem]">
                      <div className="flex items-center justify-between w-full">
                        <h1 className="font-2-book">Stock with Tally Sales</h1>
                        <h1 className="font-2 text-[#0b85ff]">
                          {BBNDCalculatorData.StockWithTally}
                        </h1>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <h1 className="font-2-book">
                          Ageing (Tally Sales)
                        </h1>
                        <h1 className="font-2 text-[#0b85ff]">
                          {BBNDCalculatorData.AgeingWithTally}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="border-[1px] border-[#cfcfc7] p-[1rem] rounded-[12px] w-full flex flex-col gap-[1rem]">
                    <h1 className="font-2 text-[1rem]">
                      Ageing After BBND Stock
                    </h1>

                    <div className="flex flex-col gap-[.75rem]">
                      <div className="flex items-center justify-between w-full">
                        <h1 className="font-2-book">Stock (With BBND)</h1>
                        <h1 className="font-2 text-[#0b85ff]">
                          {BBNDCalculatorData.StockWithBBND}
                        </h1>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <h1 className="font-2-book">
                          Ageing (With BBND)
                        </h1>
                        <h1 className="font-2 text-[#0b85ff]">
                          {BBNDCalculatorData.AgeingWithBBND}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <button className="w-[calc(25%-1rem)] text-[1rem] py-[.5rem] px-[1rem] rounded-[8px] bg-[#0b85ff] font-2 text-[white]">
                    DAN Impact Report
                  </button>
                </div>
                <div className="p-[1rem] border-[1px] border-[#cfcfd7] rounded-[12px] flex flex-col gap-[.75rem]">
                  <div className="flex items-center justify-between">
                    <h1 className="font-2 text-[1.25rem] text-[#0b85ff]">
                      Dan's Insights
                    </h1>

                    <button className="py-[.25rem] px-[1rem] text-[.875rem] font-2 text-[black] rounded-[8px] bg-[#FFE6CC]">
                      Overstock Risk
                    </button>
                  </div>

                  <p className="font-2-book text-[.875rem]">
                    With Avg. Sales 55/month and Current Stock {currentStock}{" "}
                    adding 5 Purchases and planning 6 sales gives{" "}
                    {parseInt(currentStock) + parseInt(6) + parseInt(5)} Your
                    Inventory Ages rises from 44 to 48 days
                    <p>
                      Delay Purchases by 10 Units to keep DOS {"<"} 45 days{" "}
                    </p>
                  </p>
                </div>
                <div className="p-[1rem] border-[1px] border-[#cfcfd7] rounded-[12px] flex items-start gap-[1.5rem] ">
                  <div className="w-full flex flex-col gap-[.75rem]">
                    <h1 className="text-[1rem] font-2">Impact Study</h1>
                       <div className="flex flex-wrap font-2-book w-full items-center justify-between gap-[.5rem]">
                        {
                          ImpactStudyChart.map((item,i)=>{
                            return(
                               <div className="w-[30%] flex items-center justify-between">
                                 <div className="flex items-center justify-center gap-[.5rem]">
                                    <FaInfoCircle className="text-[.875rem] mb-[3px] text-[#747373]" />
                                    {/* <p className={`absolute bg-[white] p-[1rem] ${item.name}`}>{item.explanation}</p> */}

                                 <h1 key={i} className=" whitespace-nowrap ">
                                  {
                                    item.heading
                                  }

                                </h1>
                                 </div>

                                <h1>{item.value}</h1>
                               </div>
                            )
                          })
                        }
                        </div>     
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <h1 className="font-2 text-[#0b85ff] text-[2rem]">
                  Coming Soon...
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategytools;
