import  React from "react";
import { Overlay } from "../../assets/Images/SVG";

export default function BrandCarVariantCard({ variant }) {

  return (
    <div className="flex flex-1 shrink text-[rgba(36,39,44,0.7)] justify-center items-start  pt-4 pb-0.5 basis-0 min-h-[1px] min-w-[240px] w-[280px]">
      <div className="flex flex-col flex-1 shrink pt-6 pb-px w-full bg-white rounded-lg border border-solid shadow-sm shadow-[rgba(36,39,44,0.1)] basis-0 border-[rgba(36,39,44,0.1)] border-opacity-10 min-h-[400px] min-w-[240px]">
        <div className="flex flex-col px-1.5 w-full">
          <div className="mx-[10px] text-base font-medium leading-6 text-blue capitalize max-md:mx-2.5">
            {variant.name}
          </div>
          <div className="flex gap-5 self-start mt-1.5 ml-[10px] font-medium max-md:ml-2.5">
            <div className="flex  text-[#24272c] items-center gap-1 leading-6 whitespace-nowrap ">
              <div className=" ">Rs.</div>
              <div className="text-lg">{variant.price}</div>
              <div className="self-start text-sm">*</div>
            </div>
            <div className="flex gap-1  items-center self-start mt-2 text-xs leading-5 text-zinc-800 text-opacity-70">
              <div className="grow">EMI: </div>
              <div className="text-xs ">Rs.</div>
              <div>{variant.emi}</div>
            </div>
          </div>
          <div className="flex gap-3.5 items-center mx-[10px] mt-6 text-xs leading-4 text-zinc-800 text-opacity-70 max-md:mx-2.5">
            <div className="self-stretch my-auto">{variant.mileage}</div>
            <Overlay/>
            <div className="self-stretch my-auto">{variant.transmission}</div>
          </div>
          <div className="flex flex-col items-start relative  mt-4 text-sm leading-5 text-[#ffa236] max-md:pr-5">
            <div className="  ml-[20px] px-1 py-1 bg-[white] relative z-10">{variant.additionalText}</div>
            <div className=" w-full h-[1px] rounded-xl bg-[rgba(36,39,44,0.2)] absolute top-[50%]"></div>
          </div>
          <div className="flex overflow-hidden flex-col mt-3.5 gap-[6px] pb-[10px] text-[13px] leading-[29.9px] text-zinc-800 text-opacity-70 max-md:mx-1.5">
            {variant.features.map((feature, index) => (
              <div key={index} className="overflow-hidden pl-[10px]  w-full">
                {feature}
              </div>
            ))}
          </div>
        </div>
        <div className="flex relative z-10 flex-col pt-3.5 pr-36 pb-3.5 pl-5 mt-0 border-t border-solid border-[rgba(36,39,44,0.3)] border-t-opacity-10 max-md:pr-5">
          <button className="z-0 text-sm font-medium leading-5 w-max text-blue text-left">
            Get On-Road Price
          </button>
          <div className="flex absolute top-3 right-5 z-0 flex-col justify-center pt-px text-xs leading-5 whitespace-nowrap text-zinc-800 text-opacity-50 w-[76px]">
            <label className="flex relative items-start pb-0.5 pl-7 w-full max-md:pl-5">
              <input 
                type="checkbox"
                className="absolute left-0 bottom-px z-10  h-[18px] w-[18px]" 
               
                
              />
              <span className="z-0 my-auto">Compare</span>
              <div className="flex absolute left-0 bottom-px z-0 shrink-0 self-start bg-white rounded-sm border border-solid border-[rgba(36,39,44,0.3)] border-opacity-50 h-[18px] w-[18px]" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}