import * as React from "react";
import { brandoffers } from "../../../MockData";
import { useScreenResizeValue } from "../../../ScreenSizeFunction";


function BrandGrid() {

  const breakpoint=useScreenResizeValue();

  return (
    <div className={` ${breakpoint<=412?' w-max flex gap-[20px]':"grid w-full grid-cols-3  mt-[11px] "}`}>
      {brandoffers.brands.map((brand) => (
        <div
          key={brand.name}
          className="flex flex-col  gap-[5px] pt-[11px] pb-[17px] border border-[rgba(36,39,44,0.1)]  "
          role="button"
          tabIndex={0}
        >
            <img src={brand.image} alt="" className=" w-full h-[48px]" />
          <div className="text-sm font-medium w-full text-center text-gray-900">{brand.name}</div>
         
        </div>
      ))}
    </div>
  );
}

export default BrandGrid;