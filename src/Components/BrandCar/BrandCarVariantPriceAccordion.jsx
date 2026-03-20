import React, { useState } from "react";
import {BrandCarVariantPriceDetailCard} from '../../components/index'
import { DownArrow } from "../../assets/Images/SVG";
import { useScreenResizeValue } from "../../ScreenSizeFunction";
import { useSelector } from "react-redux";

export default function BrandCarVariantPriceAccordion({prop,index}) {
    const {name,petrol,diesel,basemodel,price,roadtax,insurance} = prop;
  const [openIndex, setOpenIndex] = useState(null);
  const breakpoint=useScreenResizeValue();
  
    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

  const details = useSelector((state)=>state.CarDetails)


  return (
    <div className="border-b bg-[white]   border-[rgba(36,39,44,0.1)]">
      {/* Accordion Header */}
      <div
        className={`flex justify-between ${breakpoint<=412?'w-[85%]':'w-[100%]'} items-center cursor-pointer py-4`}
        onClick={(e)=>toggleAccordion(index)}
      >
        <div className="flex flex-[1.5] items-center  space-x-2">
          <span
            className={`transform transition-transform ${
              openIndex===index ? "rotate-180" : ""
            }`}
          >
             <DownArrow/>
          </span>
          <span className={` ${breakpoint<=412?'text-[13px]':'text-[16px]'} font-2 flex items-center gap-[8px] text-[#24272c] font-medium text-gray-800`}>
          <span className=" leading-[24px]">
          {prop?.name}
            </span>
            <span className=" text-[12px] text-[rgba(36,39,44,0.5)] flex gap-[8px] leading-[18px]">
              <p>
              {`${(openIndex!==index)?(petrol)?'(Petrol)':(diesel)?'(Diesel)':'':'' }`}</p>
              <p>
              {`${(openIndex!==index)?(basemodel)?'(Base Model)':'':''}`}
                </p>
                </span>
          </span>
        </div>
        {(openIndex!==index)&&<span className={`${breakpoint<=412?'text-[15px]':'text-[16px]'} flex-1  font-2 text-gray-800`}>

        Rs.{prop?.price_orp}<sup>*</sup></span>}
        {(openIndex!==index)&&<span className={`${breakpoint<=412?'text-[15px]':'text-[16px]'} flex-1 text-color-7 font-2 text-gray-800`}>

        Get Best Live Deal</span>}


      </div>

      {/* Accordion Content */}
      {(openIndex==index) && (
        <BrandCarVariantPriceDetailCard variant={prop} />
      )}
    </div>
  );
}