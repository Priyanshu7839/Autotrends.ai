import React from "react";
import { CarNews } from "../../MockData";
import {BrandNewsCard} from '../../components'
import { useScreenResizeValue } from "../../ScreenSizeFunction";

const SpecificationSection2_Subsection7 = () => {
 
   const breakpoint = useScreenResizeValue();

  return (
    <div className=" w-full relative flex flex-col gap-[8px] pt-[18px] pb-[20px]  px-[21.22px] rounded-[16px] border-[1px] border-[#24272c1a]  drop-shadow-[0_1px_2px_rgba(36,39,44,0.1)]">
      <h3 className={` font-medium font-1 text-color-9
         ${breakpoint>1250 && 'text-[23px]'}
         ${breakpoint<=1250 && 'text-[20px]'}
        `}>
        Must read articles before buying Kia Seltos
      </h3>

      <BrandNewsCard CarNews={CarNews} vertical={false} horizontal={true} />
    </div>
  );
};

export default SpecificationSection2_Subsection7;
