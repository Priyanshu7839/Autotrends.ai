import InsuranceRestricted from "../../assets/Images/InsuranceRestricted.png";
import bajaj from "../../assets/Images/bajaj.png";
import hdfcergo from "../../assets/Images/hdfcergo.png";
import icicilombard from "../../assets/Images/icicilombard.png";
import reliance from "../../assets/Images/reliance.png";
import { Loader2 } from "../../components";
import { LoaderCircle } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import { FaHeartbeat } from "react-icons/fa";
import { FaHandHoldingHand } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const InsurancePartners = () => {
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
  const dealershipDetails = useSelector((state) => state.DealershipDetails);

  // Clear old refs on rerender
  rowRefs.current = [];

  const InsurancePartnersArray = [
    {
      provider: "ICICI Lombard",
      QuoteType: "Private car",
      BasePremium: "11,500",
      dis: "12%",
      finalPremium: "10,120",
      IDV: "6,20,000",
      NCB: "Yes",
      ClaimRatio: "96.3%",
      TP: "Included",
      validity: "3 Days",
      addon: "Zero Dep",
      icon: icicilombard,
    },
    {
      provider: "HDFC Ergo",
      QuoteType: "Commercial Taxi",
      BasePremium: "13,200",
      dis: "8%",
      finalPremium: "12,144",
      IDV: "6,50,000",
      NCB: "Yes",
      ClaimRatio: "94.7%",
      TP: "Included",
      validity: "3 Days",
      addon: "Zero Dep",
      icon: hdfcergo,
    },
    {
      provider: "Bajaj Alliance",
      QuoteType: "Private car",
      BasePremium: "12,000",
      dis: "10%",
      finalPremium: "10,800",
      IDV: "5,90,000",
      NCB: "Yes",
      ClaimRatio: "92.9%",
      TP: "Included",
      validity: "3 Days",
      addon: "Zero Dep",
      icon: bajaj,
    },
    {
      provider: "Reliance General",
      QuoteType: "Private car",
      BasePremium: "13,775",
      dis: "5%",
      finalPremium: "10,120",
      IDV: "7,10,000",
      NCB: "Yes",
      ClaimRatio: "91.5%",
      TP: "Included",
      validity: "3 Days",
      addon: "Zero Dep",
      icon: reliance,
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
        data: ["404", "561", "506", "526", "475"],
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

  const PoliciesSold = [
    {
      name: "ICICI Lombard",
      count: "1207",
      time: "14",
    },
    {
      name: "New India Assurance",
      count: "1165",
      time: "13",
    },
    {
      name: "HDFC ERGO",
      count: "790",
      time: "45",
    },
    {
      name: "Reliance General",
      count: "590",
      time: "40",
    },
    {
      name: "Tata AIG",
      count: "240",
      time: "30",
    },
  ];

  const InsuranceHeaders = [
    {
      name: `Insurance Value`,
      pseudoname: "no",
      value: "Rs. 11,01,72,607",
    },
    {
      name: "In-House Insurance Penetration",

      value: "96%",
    },
    {
      name: "Payout Through IRDA",
      pseudoname: ` no `,
      value: "Rs.2,09,73,849",
    },
    {
      name: "Additional Payout through Insurance Partners",

      value: "---",
    },
  ];

  const data10 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Payout",
        data: [
          "723100",
          "763200",
          "781800",
          "693800",
          "715300",
          "815100",
          "679300",
          "683300",
          "570200",
          "684600",
          "625400",
          "652400"
        ],
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

  const years = ["2021-25", "2025", "2024", "2023", "2022", "2021"];
  const [selectedyear, setselectedYear] = useState(years[0]);
  return (
    <div className="w-[calc(100vw-230px)] h-[100vh]  p-[1rem] font-roboto ">
      <div
        className={`w-full h-full  flex flex-col gap-[1rem] border-[1px] border-[#cfcfd5] rounded-[24px] bg-white 
          ${
            optimizeLoader
              ? "p-0 overflow-hidden relative"
              : "p-[1rem] overflow-y-scroll"
          }
          `}
        style={{ scrollbarWidth: "none" }}
      >
        <div
          className={`w-full h-full absolute bg-[rgba(0,0,0,0.7)] z-30 ${
            optimizeLoader ? "absolute" : "hidden"
          }`}
        >
          <div className="w-full h-full flex flex-col gap-[1rem] items-center justify-center">
            <div className="w-[400px] h-[200px] rounded-[10px] bg-[white] p-[1rem] flex flex-col items-start justify-between">
              <h1 className="flex items-center justify-start gap-[.5rem] text-[1.25rem] font-medium font-2 mb-[10px]">
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
                  Fetching Best Insurance Deals...
                </h2>
              </div>
              <div className="w-full flex items-center justify-end">
                <button
                  className="px-[1rem] py-[.25rem] border-[1px] border-[#cfcfd7] text-[#0b85ff] rounded-[8px]"
                  onClick={() => {
                    setOptimizeLoader(false);
                    setLoadPercent(0);
                    setStart(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between ">
          <h1 className="font-medium text-[2rem] tracking-wide flex items-center gap-[1rem]">
            <FaHandHoldingHand />
            Insurance Partners
          </h1>
        </div>

        {/* ------------------------------------------------------------------------------------------------------------------- */}

        <div className="p-[1rem] flex flex-col gap-[1rem] border-[1px] border-[#cfcfd7] rounded-[12px] relative rounded-tr-[0px]">
          <div className="w-fit flex absolute top-[-3%] bg-[white] right-[-1px] font-2-book">
            {years.map((year, i) => {
              return (
                <div
                  onClick={() => {
                    setselectedYear(year);
                  }}
                  className={`py-[.25rem] px-[1rem] border-[1px] border-[#cfcfd7] rounded-[8px] border-b-[0px] rounded-b-[0px] cursor-pointer
                             ${years.length - 1 !== i && "border-r-[0px]"}
                             ${
                               selectedyear === year
                                 ? "bg-[#0b85ff] text-[white]"
                                 : "bg-[white] text-[#0b85ff]"
                             }`}
                >
                  {year}
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-[1rem] h-full">
            <div className="w-full h-full flex items-center gap-[1rem] justify-center flex-wrap">
              {InsuranceHeaders.map((head, i) => {
                return (
                  <div
                    key={i}
                    className="w-[48%] flex flex-col gap-[.5rem] border-[1px] border-[#cfcfd7] p-[1rem] rounded-[10px]"
                  >
                    <div>
                      <p className="font-2-book text-[1rem] ">{head.name}</p>
                      <p className="text-[1rem] text-[white]">
                        {head?.pseudoname}
                      </p>
                    </div>
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
                <h1 className="font-2 text-[1.25rem] ">Policies Sold 4081</h1>
                <div className="w-full h-full">
                  <Bar data={data} options={options} />
                </div>
              <div className="absolute bottom-0 left-0 w-full h-[80%] z-[20] bg-[white/30] backdrop-blur-sm"></div>
              </div>

            </div>

            <div className="w-full h-full  flex flex-col  gap-[.25rem] ">
              <h1 className="font-2 text-[1.25rem] text-[#0b85ff]">
                Top 5 Insurance Partners
              </h1>
              <div className="w-full border-[1px] border-[#cfcfd7] rounded-[10px] py-[1rem] ">
                <div className="flex items-center justify-between font-2 border-b-[1px] border-[#cfcfd7] px-[1rem] pb-[1rem]">
                  <h1 className="w-[180px]">Partner</h1>
                  <h1 className=" w-[110px]  text-center">Average Time</h1>
                  <h1 className="w-[100px] text-center ">Policies Sold</h1>
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
                      <h1 className={`w-[110px]  text-center text-[white]`}>
                        <span
                          className={`px-[.5rem] py-[.25rem] rounded-[10px]
                                     ${pol.time <= 14 && "bg-[green]"} ${
                            pol.time > 14 && pol.time <= 30 && "bg-[#0b85ff]"
                          } ${pol.time >= 40 && "bg-[#EF5350]"}
                                     `}
                        >
                          {pol.time}d
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
            <div className="border-[1px] border-[#cfcfd7] rounded-[10px] relative overflow-hidden">
               <div className="absolute bottom-0 left-0 w-[88%] h-[82%] z-[20] bg-[white/30] backdrop-blur-sm"></div>
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
                Insurance Optimization
              </h1>
              <p className="text-[.875rem]">
                In depth analysis of Insurance structures can be conducted for
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
              Optimise My Insurance
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default InsurancePartners;
