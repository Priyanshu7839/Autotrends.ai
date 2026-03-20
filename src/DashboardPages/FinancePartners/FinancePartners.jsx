import AxisBank from "../../assets/Images/AxisBank.png";
import BarodaBank from "../../assets/Images/BankOfBaroda.png";
import FinanceRestricted from "../../assets/Images/FinanceRestricted.png";
import HdfcBank from "../../assets/Images/HdfcBank.png";
import ICICIBank from "../../assets/Images/IciciBank.png";
import KotakBank from "../../assets/Images/KotakBank.png";
import SbiBank from "../../assets/Images/SbiBank.png";
import YesBank from "../../assets/Images/YesBank.png";
import { LoaderCircle } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import { FaHandHoldingUsd, FaHeartbeat } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SiHdfcbank, SiIcicibank } from "react-icons/si";
import { useSelector } from "react-redux";

const FinancePartners = () => {
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
  const dealershipDetails = useSelector((state) => state.DealershipDetails);

  rowRefs.current = [];

  const FinancePartnersArray = [
    {
      name: "HDFC Bank",
      interestRate: "8.5%",
      processingFee: "3000",
      LTV: "90%",
      minTenure: "2 Years",
      otherOffers: "Cashback Offers",
      icon: HdfcBank,
      approvalRate: "90%",
    },
    {
      name: "ICICI Bank",
      interestRate: "8.9%",
      processingFee: "5500",
      LTV: "60%",
      minTenure: "2 Years",
      otherOffers: "EMI Offers",
      icon: ICICIBank,
      approvalRate: "85%",
    },
    {
      name: "State Bank of India",
      interestRate: "9.8%",
      processingFee: "4000",
      LTV: "80%",
      minTenure: "2 Years",
      otherOffers: "Cashback Offers",
      icon: SbiBank,
      approvalRate: "82%",
    },
    {
      name: "Axis Bank",
      interestRate: "8.2%",
      processingFee: "4500",
      LTV: "70%",
      minTenure: "2 Years",
      otherOffers: "Cashback Offers",
      icon: AxisBank,
      approvalRate: "65%",
    },
    {
      name: "Kotak Mahindra Bank",
      interestRate: "8.8%",
      processingFee: "4600",
      LTV: "80%",
      minTenure: "2 Years",
      otherOffers: "Cashback Offers",
      icon: KotakBank,
      approvalRate: "90%",
    },
    {
      name: "Bank Of Baroda",
      interestRate: "9.9%",
      processingFee: "4800",
      LTV: "85%",
      minTenure: "2 Years",
      otherOffers: "Cashback Offers",
      icon: BarodaBank,
      approvalRate: "86%",
    },
    {
      name: "Yes Bank",
      interestRate: "9.3%",
      processingFee: "5000",
      LTV: "95%",
      minTenure: "2 Years",
      otherOffers: "Cashback Offers",
      icon: YesBank,
      approvalRate: "60%",
    },
  ];

  const [optimizeLoader, setOptimizeLoader] = useState(false);
  const [loadPercent, setLoadPercent] = useState(0);
  const [start, setStart] = useState(false);
  const intervalRef = useRef(null);

  const startLoading = () => {
    if (start) return; // Prevent double click
    setLoadPercent(0); // Reset if needed
    setStart(true);
  };

  useEffect(() => {
    if (start) {
      intervalRef.current = setInterval(() => {
        setLoadPercent((prev) => {
          if (prev < 100) {
            return prev + 1;
          } else {
            clearInterval(intervalRef.current);
            return prev;
          }
        });
      }, 100);
    }

    return () => clearInterval(intervalRef.current);
  }, [start]);

  const data = {
    labels: [2021, 2022, 2023, 2024, 2025],
    datasets: [
      {
        label: "Count",
        data: ["30", "40", "50", "60", "70"],
        backgroundColor: [
          "#0b85ff",
          " #0b85ff",
          "#0b85ff",
          "#0b85ff",
          "#0b85ff",
        ],
        borderColor: ["#0b85ff", " #0b85ff", "#0b85ff", "#0b85ff", "#0b85ff"],
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

  const OutstandingPayout = [
    {
      "Policy No.": "K3818",
      Customer: "Shubham",
      Partner: "ICICI Lombard",
      Premium: "32,000",
      Commission: "5500",
      "Issue Date": "10 Feb 2024",
      "Days Out": "Pending",
      Action: "Notify SM",
    },
    {
      "Policy No.": "K3818",
      Customer: "Shubham",
      Partner: "ICICI Lombard",
      Premium: "32,000",
      Commission: "5500",
      "Issue Date": "10 Feb 2024",
      "Days Out": "Pending",
      Action: "Notify SM",
    },
    {
      "Policy No.": "K3818",
      Customer: "Shubham",
      Partner: "ICICI Lombard",
      Premium: "32,000",
      Commission: "5500",
      "Issue Date": "10 Feb 2024",
      "Days Out": "Pending",
      Action: "Notify SM",
    },
    {
      "Policy No.": "K3818",
      Customer: "Shubham",
      Partner: "ICICI Lombard",
      Premium: "32,000",
      Commission: "5500",
      "Issue Date": "10 Feb 2024",
      "Days Out": "Pending",
      Action: "Notify SM",
    },
  ];

  const PoliciesSold = [
    {
      name: "HDFC Bank",
      count: "24%",
      time: "1.05",
    },
    {
      name: "SBI",
      count: "19%",
      time: "1",
    },
    {
      name: "PNB",
      count: "14%",
      time: "0.98",
    },
    {
      name: "ICICI",
      count: "12%",
      time: "1",
    },
    {
      name: "Kotak Mahindra",
      count: "11%",
      time: "1.1",
    },
  ];

  const InsuranceHeaders = [
    {
      name: "Loan Value",
      value: "Rs.1,77,51,19,452",
    },
    {
      name: "Finance Penetration",
      value: "80%",
    },
    {
      name: "Payout Earned",
      value: "Rs. 2,66,26,791",
    },
    {
      name: "Payout Pending",
      value: "---",
    },
  ];

  const data10 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Payout",
        data: ["10000", "13000", "11000", "14000", "12000", "13000", "12000"],
        backgroundColor: "rgba(0, 0, 255, 0.1)",
        borderColor: "#0b85ff",
        borderRadius: 0,
        tension: 0.4,
        borderWidth: 1.5,
        pointRadius: 3,
      },
    ],
  };

  const options2 = {
    responsive: true, // Make the chart responsive to screen size
    maintainAspectRatio: false, // Allow the chart to resize according to the container
    plugins: {
      legend: {
        display: false, // Position of the legend ('top', 'bottom', 'left', 'right')
      },
      tooltip: {
        enabled: true, // Show tooltips when hovering over bars
      },
      filler: {
        propagate: true,
      },
    },
    scales: {
      x: {
        beginAtZero: true, // Start the x-axis at zero
        grid: {
          display: false, // Disable grid lines on the x-axis
        },
        ticks: {
          display: true, // Remove x-axis labels
        },
      },
      y: {
        beginAtZero: true, // Start the y-axis at zero
        grid: {
          display: false,
          borderDash: [4, 4],
        },
        ticks: {
          display: true, // Remove x-axis labels
        },
      },
    },
  };

  const years = ['2021-25','2021','2022','2023','2024','2025']
  const [selectedyear,setselectedYear] = useState(years[0])

  return (
    <div className="w-[calc(100vw-230px)] h-[100vh]  p-[1rem] font-roboto ">
      <div
        className={`w-full h-full p-[1rem] flex flex-col gap-[1rem] border-[1px] border-[#cfcfd5] rounded-[24px] bg-white overflow-y-scroll 
           ${
             optimizeLoader
               ? "p-0 overflow-hidden relative"
               : "p-[1rem] overflow-y-scroll"
           }
           
          `}
        style={{ scrollbarWidth: "none" }}
      >
        {/* <div
          className={`w-full h-full absolute bg-[rgba(0,0,0,0.7)] z-30 ${
            optimizeLoader ? "absolute" : "hidden"
          }`}
        >

        
          <div className="w-full h-full flex flex-col gap-[1rem] items-center justify-center">
            <div className="w-[400px] h-[200px] rounded-[10px] bg-[white] p-[1rem] flex flex-col items-start justify-between">
              <h1 className="flex items-center justify-start gap-[.5rem] text-[1.25rem] font-medium font-2 mb-[10px]">
                <LoaderCircle className="rotating"/>
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
                  Fetching Best Finance Deals...
                </h2>
              </div>
              <div className="w-full flex items-center justify-end">
                <button
                  className="px-[1rem] py-[.25rem] border-[1px] border-[#cfcfd7] text-[#0b85ff] rounded-[8px]"
                  onClick={() => {
                    setOptimizeLoader(false);
                    setLoadPercent(0)
                    setStart(false)
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div> */}

        <div className="flex items-center justify-between">
          <h1 className="font-medium text-[2rem]  tracking-wide flex items-center gap-[1rem]">
            <FaHandHoldingUsd className="" />
            Finance Partners
          </h1>

          {/* <div className="flex items-center justify-center gap-[.5rem]">
            <div className="px-[1rem] py-[.25rem] rounded-[10px] border-[1px] border-[#0b85ff] text-[#0b85ff] flex items-center justify-center gap-[.5rem]">
              UttarPradesh
              <RiArrowDropDownLine className="text-[1.25rem] mt-[2px]" />
            </div>
            <div className="px-[1rem] py-[.25rem] rounded-[10px] border-[1px] border-[#0b85ff] text-[#0b85ff] flex items-center justify-center gap-[.5rem]">
              RTO
              <RiArrowDropDownLine className="text-[1.25rem] mt-[2px]" />
            </div>
            <div className="px-[1rem] py-[.25rem] rounded-[10px] border-[1px] border-[#0b85ff] text-[#0b85ff] flex items-center justify-center gap-[.5rem]">
              Loan Type
              <RiArrowDropDownLine className="text-[1.25rem] mt-[2px]" />
            </div>
            <div className="px-[1rem] py-[.25rem] rounded-[10px] border-[1px] border-[#0b85ff] text-[#0b85ff] flex items-center justify-center gap-[.5rem]">
              {dealershipDetails?.dealership_name}
            </div>
          </div> */}
        </div>
        {/* ------------------------------------------------------------------------------------------------------------------- */}
        {/* <div
          ref={headerRef}
          style={{ scrollbarWidth: "none" }}
          onScroll={(e) => syncScroll("header", e.target.scrollLeft)}
          className="w-auto  rounded-[10px] px-[1rem] py-[.75rem] flex items-center justify-between gap-[1rem] relative overflow-x-scroll pl-0 text-[.875rem] font-medium border-[1px] border-[#cfcfd7] bg-[#efefef]"
        >
          <h1 className="sticky left-0 min-w-[200px] bg-[#efefef] z-[10] pl-[1rem] ">
            Partner
          </h1>
          <h1 className=" sticky left-[150px] min-w-[120px] bg-[#efefef] z-[10]  ">
            Interest Rate
          </h1>
          <h1 className=" sticky left-[270px] min-w-[200px] bg-[#efefef] z-[10] ">
            Processing Fee
          </h1>
          <h1 className="flex-1 min-w-[150px]">Max LTV</h1>
          <h1 className="flex-1 min-w-[150px]">Loan Tenure</h1>
          <h1 className="flex-1 min-w-[150px]">Approval Rate</h1>
          <h1 className="flex-1 min-w-[150px]">Special Offers</h1>
        </div> */}
        {/* ------------------------------------------------------------------------------------------------------------------- */}
        {/* <div className="flex flex-col gap-[1rem] relative">

        <div className="h-full w-[83%] absolute z-[20] bg-[white50] backdrop-blur-md right-0 flex items-center justify-center">


 <div className="w-[520px] bg-[white] h-[280px] rounded-[8px]  p-[3rem] py-[3rem] flex items-start justify-start relative border-[1px] border-[#cfcfd7]">
                             <div className="flex flex-col gap-[1rem]">
                               <div>
                                <h1 className=" text-[2.5rem] font-2">Finance Partners </h1>
                              <h1 className=" text-[2.5rem] font-2 text-[#0b85ff] leading-10">Restricted </h1>
                              </div>
                             <div className="flex items-center justify-between ">
                               <p className="font-2-book w-[100%]">Available to Autotrends Premium only,<br/> by invitation</p>

                             </div>
                             </div>
                              <img src={FinanceRestricted} alt="" className="w-[200px] absolute bottom-5 right-6"/>

                             <div className="px-[.5rem] py-[.15rem] rounded-[8px] border-[3px] border-[#0b85ff]  font-2 w-fit absolute top-[15%] right-12 rotate-[10deg] text-[.875rem] font-bold">
                              Premium
                             </div>
                        </div>



        </div>


         {FinancePartnersArray
          .map((partner, i) => {
            return (
              <div
                key={i}
                ref={(el) => (rowRefs.current[i] = el)}
                style={{ scrollbarWidth: "none" }}
                onScroll={(e) => syncScroll(i, e.target.scrollLeft)}
                className="w-full bg-[white] rounded-[10px] px-[1rem] py-[.75rem] flex items-center justify-between gap-[1rem] relative overflow-x-scroll pl-0 text-[.8rem]
                    border-[1px] border-[#cfcfd5] 
                    "
              >
                <h1
                  className="flex-[2] sticky left-0 bg-[white] min-w-[200px] z-[10] pl-[1rem] overflow-x-scroll cursor-pointer whitespace-nowrap py-[.6rem] text-[#0b85ff] font-medium flex items-center justify-start gap-[.5rem]"
                  style={{ scrollbarWidth: "none" }}
                >
                  <img src={partner.icon} alt="" className="w-[20px]" />
                  {partner.name}
                </h1>
                <h1 className="flex-[2] sticky   min-w-[120px]  z-[10]  left-[150px] bg-[white] py-[.6rem]">
                 {partner.interestRate}
                </h1>
                <h1 className="flex-[2] sticky   min-w-[200px]  z-[10]  left-[270px] bg-[white] py-[.6rem]">
                  Rs {partner.processingFee}
                </h1>
                <h1 className="flex-1 min-w-[150px] text-[#28a745]">{partner.LTV}</h1>
                <h1 className="flex-1 min-w-[150px]">{partner.minTenure}</h1>
                <h1 className={`flex-1 min-w-[150px] ${partner.approvalRate>='70%' ?'text-[#28a745]':'text-[red]'}`}>{partner.approvalRate}</h1>
                <h1 className="flex-1 min-w-[150px]">{partner.otherOffers}</h1> 
              </div>
            );
          })}
       </div> */}
        {/* ------------------------------------------------------------------------------------------------------------------- */}

        {/* <div className="flex items-center justify-between p-[1rem] bg-[#0b85ff] rounded-[10px]">
          <div className="flex flex-col gap-[.5rem] w-[60%] text-[white]">
            <h1 className="text-[1.5rem] font-medium">
              Dealership Loan Optimization
            </h1>
            <p className="text-[.875rem]">
              In depth analysis of financing structures can be conducted for
              premium dealerships to identify and maximize potential savings
            </p>
          </div>
          <button className="px-[1rem] py-[.5rem] bg-white rounded-[10px] bg-[white] text-center text-[#0b85ff] font-medium"
          
           onClick={() => {
              setOptimizeLoader(true);
              startLoading()
            }}>
            Optimise My Finance
          </button>
        </div> */}
        {/* ------------------------------------------------------------------------------------------------------------------- */}



        <div className="p-[1rem] flex flex-col gap-[1rem] border-[1px] border-[#cfcfd7] rounded-[12px] relative rounded-tr-[0px]">

          <div className="w-fit flex absolute top-[-3%] bg-[white] right-[-1px] font-2-book">
                {
                  years.map((year,i)=>{
                    return(
                      <div
                      onClick={()=>{setselectedYear(year)}}
                      className={`py-[.25rem] px-[1rem] border-[1px] border-[#cfcfd7] rounded-[8px] border-b-[0px] rounded-b-[0px] cursor-pointer
                      ${years.length-1 !== i && 'border-r-[0px]'}
                      ${selectedyear === year ?'bg-[#0b85ff] text-[white]':'bg-[white] text-[#0b85ff]'}`}>
                        {year}
                      </div>
                    )
                  })
                }

          </div>

          <div className="flex items-center justify-center gap-[1rem]">
          <div className="w-full h-full flex items-center gap-[1rem] justify-center flex-wrap">
            {InsuranceHeaders.map((head, i) => {
              return (
                <div
                  key={i}
                  className="w-[48%] flex flex-col gap-[.5rem] border-[1px] border-[#cfcfd7] p-[1rem] rounded-[10px]"
                >
                  <p className="font-2-book text-[1rem] ">{head.name}</p>
                  <h1 className="font-2 text-[1.75rem]">{head.value}</h1>
                </div>
              );
            })}
          </div>
          <div className="w-full h-full rounded-[10px] flex flex-col gap-[1rem] border-[1px] border-[#cfcfd7] p-[1rem]">
            <h1 className="font-2 text-[1.25rem]">Payout Earned</h1>
            <div className="w-full h-full">
              <Line data={data10} options={options2} />
            </div>
          </div>
        </div>

        <div className="w-full h-fit  flex items-center justify-center  gap-[1rem] ">
          <div className="w-full h-full  flex flex-col gap-[.25rem] ">
            <h1 className="text-[#0b85ff] font-2 text-[1.25rem]"> Finance</h1>
            <div className="w-full h-full border-[1px] border-[#cfcfd7] rounded-[10px] p-[1rem] flex flex-col gap-[1rem] relative overflow-hidden">
              <h1 className="font-2 text-[1.25rem] ">
                In-House Finance Numbers 4081
              </h1>
              <div className="w-full h-full">
                <Bar data={data} options={options} />
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[80%] z-[20] bg-[white/30] backdrop-blur-sm"></div>

            </div>
          </div>

          <div className="w-full h-full  flex flex-col  gap-[.25rem] ">
            <h1 className="font-2 text-[1.25rem] text-[#0b85ff]">
              Top 5 Finance Partners
            </h1>
            <div className="w-full border-[1px] border-[#cfcfd7] rounded-[10px] py-[1rem] ">
              <div className="flex items-center justify-between font-2 border-b-[1px] border-[#cfcfd7] px-[1rem] pb-[1rem]">
                <h1 className="w-[180px]">Partner</h1>
                <h1 className=" w-[150px]  text-center">Payout Percentage</h1>
                <h1 className="w-[100px] text-center ">No Of Cases</h1>
              </div>

              {PoliciesSold.map((pol, i) => {
                return (
                  <div
                    className={`flex items-center justify-between font-2-book border-[#cfcfd7] px-[1rem] text-[.875rem] ${
                      i === PoliciesSold.length - 1
                        ? "pb-0 pt-[1rem] border-b-[0px]"
                        : "py-[1rem] border-b-[1px]"
                    }`}
                  >
                    <h1 className="w-[180px]">{pol.name}</h1>
                    <h1 className={`w-[150px]  text-center text-[white]`}>
                      <span
                        className={`px-[.5rem] py-[.25rem] rounded-[10px]
                              ${pol.time >= 1 && "bg-[green]"} ${
                          pol.time > 1 && pol.time <= 30 && "bg-[#0b85ff]"
                        } ${pol.time < 1 && "bg-[#FFCC80]"}
                              `}
                      >
                        {parseFloat(pol.time).toFixed(2)} %
                      </span>
                    </h1>
                    <h1 className="w-[100px] text-center ">{pol.count}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-[.25rem]">
          <h1 className="text-[1.25rem] font-2 text-[#0b85ff]">
            Outstanding Payout
          </h1>
          <div className="border-[1px] border-[#cfcfd7] rounded-[10px] overflow-hidden relative">
              <div className="absolute bottom-0 left-0 w-[87%] h-[82%] z-[20] bg-[white/30] backdrop-blur-sm"></div>

            <div className="flex items-center justify-between font-2 text-[#0b85ff]">
              <h1 className="border-r-[1px] border-b-[1px] border-[#cfcfd7] px-[1rem] py-[.75rem] w-full text-center">
                Policy No.
              </h1>
              <h1 className="border-r-[1px] border-b-[1px] border-[#cfcfd7] px-[1rem] py-[.75rem] w-full text-center">
                Customer
              </h1>
              <h1 className="border-r-[1px] border-b-[1px] border-[#cfcfd7] px-[1rem] py-[.75rem] w-full text-center">
                Partner
              </h1>
              <h1 className="border-r-[1px] border-b-[1px] border-[#cfcfd7] px-[1rem] py-[.75rem] w-full text-center">
                Premium
              </h1>
              <h1 className="border-r-[1px] border-b-[1px] border-[#cfcfd7] px-[1rem] py-[.75rem] w-full text-center">
                Commission
              </h1>
              <h1 className="border-r-[1px] border-b-[1px] border-[#cfcfd7] px-[1rem] py-[.75rem] w-full text-center">
                Issue Date
              </h1>
              <h1 className="border-r-[1px] border-b-[1px] border-[#cfcfd7] px-[1rem] py-[.75rem] w-full text-center">
                Days Out
              </h1>
              <h1 className="border-b-[1px]                border-[#cfcfd7] px-[1rem] py-[.75rem] w-full text-center">
                Action
              </h1>
            </div>
            {OutstandingPayout.map((pay, i) => {
              return (
                <div className="flex items-center justify-between font-2-book text-[.875rem]">
                  <h1
                    className={`border-r-[1px]  h-full border-[#cfcfd7] px-[1rem] py-[.75rem] w-full text-center ${
                      i === OutstandingPayout.length - 1
                        ? "border-b-[0px]"
                        : "border-b-[1px]"
                    }`}
                  >
                    <p className="py-[.25rem]">{pay["Policy No."]}</p>
                  </h1>
                  <h1
                    className={`border-r-[1px]  border-[#cfcfd7] px-[1rem] py-[.75rem] w-full text-center ${
                      i === OutstandingPayout.length - 1
                        ? "border-b-[0px]"
                        : "border-b-[1px]"
                    }`}
                  >
                    <p className="py-[.25rem]"> {pay["Customer"]}</p>
                  </h1>
                  <h1
                    className={`border-r-[1px]  border-[#cfcfd7] px-[1rem] py-[.75rem] w-full text-center ${
                      i === OutstandingPayout.length - 1
                        ? "border-b-[0px]"
                        : "border-b-[1px]"
                    }`}
                  >
                    <p className="py-[.25rem]">{pay["Partner"]}</p>
                  </h1>
                  <h1
                    className={`border-r-[1px]  border-[#cfcfd7] px-[1rem] py-[.75rem] w-full text-center ${
                      i === OutstandingPayout.length - 1
                        ? "border-b-[0px]"
                        : "border-b-[1px]"
                    }`}
                  >
                    <p className="py-[.25rem]">{pay["Premium"]}</p>
                  </h1>
                  <h1
                    className={`border-r-[1px]  border-[#cfcfd7] px-[1rem] py-[.75rem] w-full text-center ${
                      i === OutstandingPayout.length - 1
                        ? "border-b-[0px]"
                        : "border-b-[1px]"
                    }`}
                  >
                    <p className="py-[.25rem]">{pay["Commission"]}</p>
                  </h1>
                  <h1
                    className={`border-r-[1px]  border-[#cfcfd7] px-[1rem] py-[.75rem] w-full text-center ${
                      i === OutstandingPayout.length - 1
                        ? "border-b-[0px]"
                        : "border-b-[1px]"
                    }`}
                  >
                    <p className="py-[.25rem]">{pay["Issue Date"]}</p>
                  </h1>
                  <h1
                    className={`border-r-[1px]  border-[#cfcfd7] px-[1rem] py-[.75rem] w-full text-center ${
                      i === OutstandingPayout.length - 1
                        ? "border-b-[0px]"
                        : "border-b-[1px]"
                    }`}
                  >
                    <p className="py-[.25rem]">{pay["Days Out"]}</p>
                  </h1>
                  <h1
                    className={`border-b-[1px]  text-[red] cursor-pointer              border-[#cfcfd7] px-[1rem] py-[.75rem] w-full text-center
                                ${
                                  i === OutstandingPayout.length - 1
                                    ? "border-b-[0px]"
                                    : "border-b-[1px]"
                                }
                                `}
                  >
                    <button className="py-[.25rem] px-[.5rem] rounded-[8px] bg-[#0b85ff] text-[white]">
                      {pay["Action"]}
                    </button>
                  </h1>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between p-[1rem] bg-[#0b85ff] rounded-[10px]">
          <div className="flex flex-col gap-[.5rem] w-[60%] text-[white]">
            <h1 className="text-[1.5rem] font-medium">
              Dealership Loan Optimization
            </h1>
            <p className="text-[.875rem]">
              In depth analysis of financing structures can be conducted for
              premium dealerships to identify and maximize potential savings
            </p>
          </div>
          <button
            className="px-[1rem] py-[.5rem] bg-white rounded-[10px] bg-[white] text-center text-[#0b85ff] font-medium"
            onClick={() => {
              setOptimizeLoader(true);
              startLoading();
            }}
          >
            Optimise My Finance With DAN
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default FinancePartners;
