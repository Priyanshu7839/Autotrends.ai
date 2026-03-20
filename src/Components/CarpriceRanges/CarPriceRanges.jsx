import * as React from "react";
import { PriceRangeButton } from "./PriceRangeButton"

 function CarPriceRanges({text}) {

     const priceRanges = [
        { range: "Cars Under 4 Lakh" },
        { range: "Cars Under 6 Lakh" },
        { range: "Cars Under 7 Lakh" },
        { range: "Cars Under 10 Lakh" },
        { range: "10 Lakh - 15 Lakh" },
        { range: "15 Lakh - 20 Lakh" },
        { range: "20 Lakh - 35 Lakh" },
        { range: "35 Lakh - 50 Lakh" },
        { range: "50 Lakh - 1 Crore" },
        { range: "Above 1 Crore" }
      ];


  return (
    <div className="flex flex-col pb-3 font-medium rounded-2xl bg-[#f0f0f0]  shadow-[0px_1px_2px_rgba(247,93,52,0.3)] text-zinc-800">
      <div className="pt-4 pb-2 pl-5 w-full text-xl leading-tight max-md:max-w-full">
        {text}
      </div>
      <div className="flex overflow-hidden flex-col px-4 pb-2.5 mt-4 w-full text-sm leading-none text-center max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-2.5 w-full max-md:max-w-full">
          {priceRanges.map((item, index) => (
            <PriceRangeButton key={index} range={item.range} />
          ))}
        </div>
       
      </div>
    </div>
  );
}

export default CarPriceRanges