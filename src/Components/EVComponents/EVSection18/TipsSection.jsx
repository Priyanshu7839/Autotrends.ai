import * as React from "react";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

export function TipsSection() {
  return (
    <div className="flex  items-start mt-[20px] max-w-full w-[1052px] ">
      <div className="flex flex-col items-start pr-5 w-[74px]">
        <div className="flex gap-1 py-1 w-full max-w-[54px]">
          <div className="flex overflow-hidden flex-1 items-center min-h-[16px]">
            <div className="flex overflow-hidden flex-col justify-center items-center px-px min-h-[16px] w-[18px]">
              <MdOutlineTipsAndUpdates className=" w-[16px] h-[16px] text-blue"/>
            </div>
          </div>
          <div className="text-base font-semibold leading-loose text-blue">
            Tips
          </div>
        </div>
      </div>
      <div className="flex flex-col min-w-[240px] w-[604px] max-md:max-w-full">
        <div className="w-full text-base font-semibold leading-loose text-zinc-800 max-md:max-w-full">
          Ask us anything about EV
        </div>
        <div className="w-full text-xs text-[rgba(36,39,44)] text-opacity-70 max-md:max-w-full">
          For example: Best electric car, Can we charge electric cars at home, What is the range of tata Nexon EV max, etc...
        </div>
      </div>
    </div>
  );
}