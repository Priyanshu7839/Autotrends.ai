import  React ,{useState} from "react";

import { variants } from "../../MockData/variant";

import { Rightarrow } from "../../assets/Images/SVG";
import {BrandCarVariantCard,Menu} from '../../components/index'
import { useScreenResizeValue } from "../../ScreenSizeFunction";

export default  function BrandCarVariantComparison() {

  const [vehiclecategory,setVehicleCategory]=useState('Petrol');
  const breakpoint = useScreenResizeValue();

  return (
    <div className="flex flex-col self-stretch  py-5 bg-[white] rounded-2xl border border-solid shadow-sm border-[rgba(36,39,44,0.1)] border-opacity-10 w-full ">
      <h1 className={`pb-px w-full  px-[20px] font-medium leading-8 text-zinc-800 max-md:max-w-full
        ${breakpoint>1250 && 'text-[24px]'}
        ${breakpoint<=1250 && 'text-[20px]'}
        `}>
        Compare Variants of Kia Seltos
      </h1>
      <div className="flex flex-col  mt-2 w-full max-md:max-w-full">
        <div className=" w-full px-[20px]">
        <Menu menuItems={["Petrol","Diesel"]} item={vehiclecategory} setitem={setVehicleCategory}/>

        </div>
        <div className="flex flex-col max-md:max-w-full">
          <div className="flex relative flex-col w-full overflow-x-scroll px-[20px] max-md:max-w-full" style={{scrollbarWidth:'none'}}>
            <div className="flex z-0 gap-[20px]  items-start w-max  ">
              {variants.map((variant, index) => (
                <BrandCarVariantCard key={index} variant={variant} />
              ))}
            </div>
            <div className="flex absolute top-2/4 z-0 w-12 h-12 -translate-y-2/4 fill-white min-h-[48px] right-[-27px] translate-x-[0%]" />
          </div>
        </div>
      </div>
      <button className={`flex gap-1 px-[20px] mt-[9px] w-max 
         ${breakpoint>1250 && 'text-[.875rem]'}
        ${breakpoint<=1250 && 'text-[.75rem]'}
        `}>
        <span className="grow   font-semibold leading-5 text-blue">
          View All
        </span>
        <span className=" font-semibold leading-5 text-blue">
          Seltos Variants
        </span>
        <span className="flex items-start">
        
            <Rightarrow/>   
          
        </span>
      </button>
    </div>
  );
}