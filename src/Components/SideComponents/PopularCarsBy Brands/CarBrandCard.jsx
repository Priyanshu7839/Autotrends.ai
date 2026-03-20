import * as React from "react";
import BrandGrid from "./BrandGrid";
import { Rightarrow } from "../../../assets/Images/SVG";
import { useScreenResizeValue } from "../../../ScreenSizeFunction";

function CarBrandCard({text}) {

  const breakpoint=useScreenResizeValue();

  return (
    <div className="flex flex-col pb-5 bg-white rounded-2xl w-full pt-[13px] mt-[20px] border  border-[rgba(36,39,44,0.1)] border-opacity-10  shadow-[0px_1px_2px_rgba(36,39,44,0.1)]">
      <h5 className="px-4  text-xl font-medium leading-snug text-[rgba(36,39,44)]">
        {text} by brand
      </h5>

      {breakpoint>412 &&<BrandGrid />}
      {breakpoint<=412 && <div className=" w-full overflow-x-scroll px-[20px] mt-[20px]" style={{scrollbarWidth:'none'}}>
        <BrandGrid/>
        </div>}
      <div className="flex gap-1 mt-3.5 ml-[16px] max-w-full w-max">
        <div 
          className="grow  flex gap-[8px] items-center text-sm font-semibold text-blue cursor-pointer "
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && console.log('View All clicked')}
          onClick={() => console.log('View All clicked')}
        >
          View All Car Brands 
          
          <Rightarrow/>
          
        </div>
        
      </div>
    </div>
  );
}

export default CarBrandCard;