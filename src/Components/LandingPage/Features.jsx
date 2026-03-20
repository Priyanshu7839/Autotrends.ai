import React, { useState } from "react";
import {
  CompareDealsSvg,
  BestEmiOptionsSvg,
  InsuranceAssistanceSvg,
  AiPoweredInsightsSvg,
  ElectricCarIcon,
  LatestCarIcon,
  PopularCarLogo,
  UpcomingCarIcon,
  FireDealsIcon,
} from "../../assets/Images/SVG";
import { useScreenResizeValue } from "../../ScreenSizeFunction";


const Features = () => {

  
   
  

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const featuresParts = [
    {
      Icon: FireDealsIcon ,
      title: "Deals",
      desc: "Save on ex-showroom prices by comparing offers from multiple dealers.",
    },
    {
      Icon: BestEmiOptionsSvg ,
      title: "Best EMI",
      desc: "Find and compare flexible EMI plans that fit your budget.",
    },
    {
      Icon: InsuranceAssistanceSvg ,
      title: "Insurance ",
      desc: "Get expert help to choose the best insurance for your vehicle.",
    },
    {
      Icon: ElectricCarIcon ,
      title: "Electric",
      desc: "Understand car price trends with advanced AI analysis.",
    },
    {
      Icon: LatestCarIcon ,
      title: "Latest",
      desc: "Understand car price trends with advanced AI analysis.",
    },
    {
      Icon: PopularCarLogo ,
      title: "Popular",
      desc: "Understand car price trends with advanced AI analysis.",
    },
    {
      Icon: UpcomingCarIcon ,
      title: "Upcoming",
      desc: "Understand car price trends with advanced AI analysis.",
    },
  ];

  const breakpoint = useScreenResizeValue();

 

  return (
    <div className="flex items-center justify-center bg-[#FFFFFF]">
      <div
        className={`${breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]"} 
        ${breakpoint<=420 && 'mt-[110px]'}
    flex gap-[2rem]  py-[20px]  flex-col font-1 overflow-hidden 
  `}
      >

      
        <div
          className=" w-full overflow-x-scroll px-[24px] "
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex w-max items-center justify-center gap-[1rem]">
            <h1 className="text-color-8 font-2">Browse:</h1>
            {featuresParts.map((part, index) => {
              return (
                <a
                  href={`#${part.title}`}
                  key={index}
                  className={`cursor-pointer py-[.5rem] w-max px-[1rem] rounded-[10px] border-[1px]  bg-[#e7e7e7] flex-1 text-center flex  items-center justify-center gap-[1rem] text-color-8 font-2 hover:text-[#0085ff] hover:border-[#0085ff] 
                        ${index === 0 ? "border-[#0085ff]" : "border-[#c1c7cd]"}
                        `}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span>
                   <part.Icon fill={hoveredIndex === index ?'#0085ff':'#171717'}/>
                  </span>
                  <span
                    className={` w-max ${
                      breakpoint <= 400 ? "text-[12px]" : ""
                    } ${index === 0 && "text-[#0085ff]"}`}
                  >
                    {part.title}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
