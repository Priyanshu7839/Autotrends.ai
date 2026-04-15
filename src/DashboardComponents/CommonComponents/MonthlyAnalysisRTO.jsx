import PanIndiaData from "../../Data/PanIndiaData.json";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { FaChartBar } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const MonthlyAnalysisRTO = ({RTOData,selectedRTO,selectedState}) => {



  
  const colors = [
   "#4caf50",// muted green
    "#00c853",
    "#0b85ff",
    "#ff4c4c",
    "#ffc107",
    "#004080", 
    "#2196f3", // soft blue
    "#ff7043", // mellow orange
    "#d32f2f", // soft red
    "#0288d1", // blue cyan
    "#6d4c41", // coffee brown
    "#9575cd", // soft purple
    "#f06292", // pink but not too neon
    "#aed581", // light green
    "#7986cb", // dusty blue
    "#ba68c8", // light purple
    "#4db6ac", // teal
    "#ffb74d", // light orange
    "#90a4ae", // blue gray
    "#a1887f", // earthy brown
    "#81d4fa", // sky blue
    "#e57373", // faded red
    "#64b5f6", // cool blue
    "#81c784", // garden green
    "#f0b400", // warm mustard
  ];
  const dealershipDetails = useSelector((state) => state.DealershipDetails);



  const dealershipBrand = PanIndiaData?.filter((item) =>
    item.brand
      .toLowerCase()
      .includes(dealershipDetails?.dealership_brand.toLowerCase())
  )[0].brand;
  const [selectedBrandRTOMonthly, setselectedBrandRTOMonthly] =
    useState(dealershipBrand);

  const [selectedBrandRTOMonthlyView, setselectedBrandRTOMonthlyView] =
    useState(false);

  

  const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const currentMonthIndex = new Date().getMonth();
  const currentYear = new Date().getFullYear();





  


  
  

 const data10 = {
  labels: allMonths || [],

  datasets:
    RTOData
      ?.filter((data) => data?.brand === selectedBrandRTOMonthly) // filter array
      ?.flatMap((data) =>
        (data?.monthly || []).map((dat, i) => {
          console.log(dat)
          const col = colors?.[i] || "blue"; // fallback color
          const months = Object.keys(dat || {}).filter((k) => k !== "year");
          console.log(months)
   const isCurrentYear = Number(dat.year) === Number(currentYear);
   const prevYear = Number(dat.year) === Number(currentYear - 1)
       

        return {
          label: dat.year,
          data: months.map((month, index) => {
            const value = dat?.[month];
           
            if(!(isCurrentYear || prevYear)) return;

            if (!isCurrentYear) return value;

            // 👉 current year logic
            return index <= currentMonthIndex ? value : null;
          }),
          backgroundColor: "rgba(0, 0, 255, 0.1)",
          borderColor: col,
          borderRadius: 0,
          tension: 0.4,
          borderWidth: 1.5,
          pointRadius: 3,
        };
        })
      ) || [], 
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

  return (
    <div className="w-full h-full flex items-stretch justify-between gap-[1rem] relative   bg-transparent ">
        
      <div className="w-[100%] border-[1px] border-[#cfcfd5] rounded-[12px] p-[1rem] flex flex-col gap-[1rem] shadow-lg glass-card">
        <div className="flex items-center justify-between">
          <h1 className="font-1 font-medium text-[1rem] flex items-center gap-[.5rem]">
            <FaChartBar />
            Monthly Analysis For {selectedBrandRTOMonthly?.split(" ")[0]} in {" "}
            {selectedRTO?.split(" ")?.[0]}
          </h1>

          <div className="flex items-center gap-[1rem]">
            <div className="flex items-center justify-center gap-[.5rem]">
              <span
                className="w-[15px] h-[2px]  rounded-full"
                style={{ background: `${colors?.[1]}` }}
              ></span>{" "}
              <h1 className="text-[.75rem] font-medium ">{new Date().getFullYear() - 1}</h1>
            </div>
            <div className="flex items-center justify-center gap-[.5rem]">
              <span
                className="w-[15px] h-[2px]  rounded-full"
                style={{ background: `${colors?.[2]}` }}
              ></span>{" "}
              <h1 className="text-[.75rem] font-medium ">{new Date().getFullYear()}</h1>
            </div>
          </div>
          <button
            className={`text-[#0b85ff] text-[.875rem] flex items-center justify-between gap-[.25rem] cursor-pointer relative px-[.5rem] py-[.25rem] border-[1px] border-[#0b85ff] rounded-[8px]  ${
              selectedBrandRTOMonthlyView && "rounded-b-[0px] border-b-0"
            }`}
            onClick={() => {
              setselectedBrandRTOMonthlyView(!selectedBrandRTOMonthlyView);
            }}
          >
            {selectedBrandRTOMonthly?.split(" ")[0]}{" "}
            <RiArrowDropDownLine className="text-[1.25rem] font-normal" />
            <div
              className={`absolute top-[100%] left-[-1px]  border-t-0 rounded-[8px] rounded-t-[0px] border-[#0b85ff] 
                     transition-[height] duration-200 overflow-y-scroll bg-[white] z-10
                     ${
                       selectedBrandRTOMonthlyView
                         ? "h-[200px] w-[calc(100%+2px)] border-[1px]"
                         : "w-[0px] h-[0px] border-0"
                     }
                     `}
              style={{ scrollbarWidth: "none" }}
            >
              {RTOData?.map((item, i) => {
                return (
                  <h1
                    key={i}
                    className={` py-[.25rem] 
                           `}
                    onClick={() => {
                      setselectedBrandRTOMonthly(item.brand);
                    }}
                  >
                    {item.brand.split(" ")[0]}
                  </h1>
                );
              })}
            </div>
          </button>
        </div>

        

        <div className="flex items-center justify-start  w-full h-[300px]">
          <Line data={data10} options={options2} />
        </div>
      </div>
    </div>
  );
}

export default MonthlyAnalysisRTO