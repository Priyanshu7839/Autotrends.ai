import React,{useState} from 'react'
import FuelTypeRTOData from '../../Data/FuelTypeRTOData.json'
import { FaCity } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Doughnut } from 'react-chartjs-2';

const FuelMarketShareRTO = ({selectedRTO,className}) => {

  const colors = [
    "#A5D6A7",
    "#29B6F6",
    "#1E88E5",
    "#26A69A",
    "#66BB6A",
  
  ];
    const [FuelMarketShareRTOYearView, setFuelMarketShareRTOYearview] = useState(false);
    const [FuelMarketShareRTOYear, setFuelMarketShareRTOYear] = useState("2025");
  
   const FuelRTOtotalcarsold2 = (FuelTypeRTOData[selectedRTO] || []).reduce(
  (sum, b) => sum + (b[FuelMarketShareRTOYear] || 0),
  0
);
  
   const data4 = {
  labels: FuelTypeRTOData?.[selectedRTO]?.map((data) => data.fuel) || [],
  datasets: [
    {
      data:
        FuelTypeRTOData?.[selectedRTO]?.map((data) =>
          (
            (parseFloat(data[FuelMarketShareRTOYear] || 0) / FuelRTOtotalcarsold2) *
            100
          ).toFixed(2)
        ) || [],
      backgroundColor: colors,
      borderWidth: 4, // or any value to create visible gap
      borderColor: "#fff", // usually white or background color
      borderRadius: 10,
    },
  ],
};
  
    const options4 = {
      responsive: true,
      maintainAspectRatio: false,
  
      plugins: {
        legend: {
          display: false,
          position: "bottom",
          labels: {
            usePointStyle: true,
            boxWidth: 12,
            padding: 20,
          },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.label}: ${ctx.raw}%`,
          },
        },
      },
    };
  return (
     <div className={`border-[1px] border-[#cfcfd5] rounded-[24px] p-[1rem] flex flex-col justify-between gap-[.5rem] ${className}`}>
           <div className="flex items-center justify-between">
             <h1 className="text-[1rem] font-medium flex flex-col items-start gap-[.5rem]">
               {" "}
             <span className='flex items-center gap-[.5rem]'>  <FaCity /> Fuel Share In </span>
               <span className="capitalize">{selectedRTO?.split(" ")?.[0]}</span>
             </h1>
             <button
               className={`text-[#0b85ff] text-[.875rem] flex items-center justify-between gap-[.25rem] cursor-pointer relative px-[.5rem] py-[.25rem] border-[1px] border-[#0b85ff] rounded-[10px] ${
                 FuelMarketShareRTOYearView && "rounded-b-[0px] border-b-[0px] "
               }`}
               onClick={() => {
                 setFuelMarketShareRTOYearview(!FuelMarketShareRTOYearView);
               }}
             >
               {FuelMarketShareRTOYear}{" "}
               <RiArrowDropDownLine className="text-[1.25rem] font-normal" />
               <div
                 className={`absolute top-[100%]   left-[-1px] rounded-[10px] bg-[white] z-[10] bg-white  border-[#0b85ff] overflow-y-scroll transition-all duration-200 ${
                   FuelMarketShareRTOYearView
                     ? "w-[72.185px] h-[100px] border-[1px] border-t-[0px] rounded-t-[0px]"
                     : "h-[0px] w-[0px]"
                 }`}
                 style={{ scrollbarWidth: "none" }}
               >
                {(FuelTypeRTOData?.[selectedRTO]?.[0] 
  ? Object.keys(FuelTypeRTOData[selectedRTO][0]) 
      .filter((k) => k !== "fuel" && k !== "total")
  : []
).map((year, i) => (
  <h1
    key={i}
    className="py-[.25rem] px-[.5rem]"
    onClick={() => setFuelMarketShareRTOYear(year)}
  >
    {year}
  </h1>
))}

               </div>
             </button>
           </div>
           <div className="w-full  h-[200px]">
            {FuelTypeRTOData[selectedRTO] ? <Doughnut data={data4} options={options4} /> :<h1 className='font-2 text-[.875rem]'>No Fuel Segment Data for this RTO</h1>}
           </div>
   
           <div className=" flex flex-wrap gap-x-[1rem] gap-y-[.5rem] items-center justify-between">
           {FuelTypeRTOData?.[selectedRTO]?.map((item, i) => {
  if (!item) return null; // skip if item is undefined/null

  const fuel = item?.fuel || "N/A"; // fallback fuel type
  const value = parseFloat(
    (
      ((item?.[FuelMarketShareRTOYear] || 0) / (FuelRTOtotalcarsold2 || 1)) *
      100
    ).toFixed(2)
  ); // fallback 0 and prevent division by 0

  return (
    <div
      key={i}
      className="flex items-center justify-between gap-[.5rem] w-[100%]"
    >
      <div className="flex items-center gap-[.25rem]">
        <span
          className="w-[15px] h-[4px] rounded-full flex-shrink-0"
          style={{ background: colors?.[i] || "#ccc" }} // fallback color
        ></span>
        <h1 className="text-[.75rem] font-medium">{fuel}</h1>
      </div>
      <h1 className="text-[.75rem] font-medium w-[60px] flex items-center justify-end">
        {isNaN(value) ? "0.00" : value} %
      </h1>
    </div>
  );
})}
           </div>
         </div>
  )
}

export default FuelMarketShareRTO