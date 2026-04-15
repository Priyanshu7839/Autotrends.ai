import * as React from "react";
import  Monthbtn  from "./Monthbtn";
import { useScreenResizeValue } from "../../ScreenSizeFunction";

function Monthranges() {

  const breakpoint=useScreenResizeValue();
  const months = [
    "December",
    "January 2025",
    "February 2025",
    "March 2025",
    "April 2025",
    "May 2025",
    "June 2025",
    "July 2025",
    "August 2025",
    "September 2025",
    "October 2025",
    "November 2025"
  ];

  return (
    <div className={` ${breakpoint<=412?"flex flex-col pb-3 font-medium rounded-2xl bg-[#f0f0f0] w-max shadow-[0px_1px_2px_rgba(247,93,52,0.3)] text-zinc-800":"flex flex-col pb-3 font-medium rounded-2xl bg-[#f0f0f0] max-w-[960px] shadow-[0px_1px_2px_rgba(247,93,52,0.3)] text-zinc-800"}`}>
     {breakpoint>412 && <div className="pt-4 pb-2 pl-5 w-full text-xl leading-tight max-md:max-w-full">
        Upcoming cars by Month
      </div>}
      <div className="flex overflow-hidden flex-col pr-16 pb-2.5 pl-4 mt-4 w-full text-sm leading-none text-center max-w-[940px] max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-2.5 w-full max-md:max-w-full">
          {months.map((month, index) => (
            <Monthbtn key={month} month={month} tabIndex={index} />
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default Monthranges;