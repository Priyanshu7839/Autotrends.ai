import * as React from "react";
import { WiTime9 } from "react-icons/wi";
function OfferCard({ title, description, daysLeft, image, mainAlt }) {
  return (
    <div className="flex flex-col px-5 pt-5 pb-9 mx-auto w-full bg-white rounded-2xl border border-solid border-[rgba(36,39,44)] border-opacity-10 shadow-[0px_1px_2px_rgba(36,39,44,0.1)] max-md:px-5 max-md:mt-5 max-md:max-w-full">
      <div className="flex gap-2.5">
        <div className="flex flex-col grow shrink-0 basis-0 w-fit">
          <div className="pb-px text-lg font-medium leading-6 text-zinc-800">{title}</div>
          <div className="pb-px mt-1.5 text-base leading-7 min-h-[53px] text-[rgba(36,39,44)] text-opacity-70">{description}</div>
          <div className="flex gap-2 items-start pt-1.5 pb-3 w-full">
            <div className="flex items-start w-3">
            <WiTime9 className=" text-[rgba(36,39,44,0.7)] w-[18px] h-[18px]"/>
            </div>
            <div className="text-xs leading-5 text-[rgba(36,39,44)] text-opacity-50">{daysLeft} Days Left</div>
          </div>
        </div>
        <div className="flex    rounded-lg h-max  min-h-[1px]">
        <img
                loading="lazy"
                src={image}
                alt={mainAlt || ""}
                className="object-cover w-[150px] rounded-[10px] "
              />
         
        </div>
      </div>
      <button className="overflow-hidden  py-px text-base font-medium leading-10 text-center text-blue bg-white rounded-lg border border-blue border-solid max-md:px-5">
        View Complete Offers
      </button>
    </div>
  );
}

export default OfferCard;