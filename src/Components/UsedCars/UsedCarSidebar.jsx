import { div } from "framer-motion/client";
import React, { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import MultiRangeSlider from "../MultiRangeSlider/MultiRangeSlider";

const UsedCarSidebar = () => {
  const [activeFilter, setActiveFilter] = useState("0");
  const [ExpandAllFilter,setExpandAllFilter] = useState(false);

  const SidebarButtons = [
    {
      name: "Budget",
      filters: [
        {
          name: "Under 2 Lakhs",
          quantity: "2",
        },
        {
          name: "2-3 Lakhs",
          quantity: "2",
        },
        {
          name: "3-5 Lakhs",
          quantity: "2",
        },
        {
          name: "5-8 Lakhs",
          quantity: "2",
        },
        {
          name: "8-10 Lakhs",
          quantity: "2",
        },
        {
          name: "Above 10 Lakhs",
          quantity: "2",
        },
      ],
    },
    {
      name: "Brand + Model",
    },
    {
      name: "Model Year",
    },
    {
      name: "Kilometer Driven",
    },
    {
      name: "Fuel Type",
      filters: [
        {
          name: "Petrol",
          quantity: "11",
        },
        {
          name: "Diesel",
          quantity: "7",
        },
      ],
    },
    {
      name: "Body Type ",
      filters: [
        {
          name: "Sedan",
          quantity: "4",
        },
        {
          name: "Hatchback",
          quantity: 1,
        },
        {
          name: "MUV",
          quantity: "1",
        },
        {
          name: "SUV",
          quantity: "1",
        },
      ],
    },
    {
      name: "Transmission",
      filters: [
        {
          name: "Manual",
          quantity: "6",
        },
        {
          name: "Automatic",
          quantity: "1",
        },
      ],
    },
    {
      name: "Ownership",
      filters: [
        {
          name: "First Owner",
          quantity: "3",
        },
        {
          name: "Third Owner or More",
          quantity: "3",
        },
      ],
    },
    {
      name: "Seats",
      filters: [
        {
          name: "5 Seater",
          quantity: "5",
        },
        {
          name: "7 Seater",
          quantity: "2",
        },
      ],
    },
    {
      name: "RTO",
      filters: [
        {
          name: "Uttar Pradesh",
          quantity: "7",
        },
      ],
    },
    {
      name: "Color",
      filters: [
        {
          name: "White",
          quantity: "1",
        },
      ],
    },
  ];


  return (
    <div className="flex flex-col gap-[10px]">
         <div
              className="flex items-center justify-between cursor-pointer py-[13px] px-[25px] border-[1px] border-[#24272c1a]  rounded-[16px] bg-[#FFFFFF] font-4 font-semibold text-[1rem] text-color-9"
              onClick={()=>{
                setExpandAllFilter(!ExpandAllFilter)
                if(!ExpandAllFilter){
                  setActiveFilter('0')
                }
              
              }}
             
            >
             {ExpandAllFilter ? 
             (<h1>Collapse All Filters</h1>):
             (<h1>Expand All Filters</h1>) 
             }
            
              
            </div>
      {SidebarButtons.map((item, index) => {
        return (
          <div
            key={index}
            className="cursor-pointer py-[13px] px-[25px] border-[1px] border-[#24272c1a]  rounded-[16px] bg-[#FFFFFF] font-4 font-semibold text-[1rem] text-color-9
                    flex flex-col gap-[1rem]
                    "
          >
            <div
              className="flex items-center justify-between"
              onClick={() => {
               
                  if(activeFilter===item.name){
                    setActiveFilter('0');
                  }
                  else{
                    setActiveFilter(item.name)
                  }
                
              }}
            >
              {item.name}
              
                <h1 className="text-[.8125rem]">
                  <FaPlus />
                </h1>

              
            </div>
                {
                  ((activeFilter===item.name && activeFilter!=='0')|| ExpandAllFilter) && 
                 item.filters?.map((filter,i)=>{
                  return(
                    <div className="flex items-center justify-between text-[.875rem] text-color-9-70 " key={i}>
                      <div className="flex items-center justify-center gap-[.5rem] ">
                        <input type="checkbox" name="" id="" />
                        <h1>{filter.name}</h1>
                      </div>
                      <p>{filter.quantity}</p>
                    </div>
                  )
                 })
                }
           
          </div>
        );
      })}
    </div>
  );
};

export default UsedCarSidebar;
