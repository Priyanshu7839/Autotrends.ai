import * as React from "react";
import { useScreenResizeValue } from "../../../ScreenSizeFunction";

export function UserStats() {

 

  return (
    <div className=" flex items-center h-max    min-w-[240px] w-max">
      <div className=" pr-[25px] h-max  text-7xl font-semibold  whitespace-nowrap  max-md:text-4xl">
        2.5Cr+
      </div>
      <div className="flex flex-col  h-max  text-xl font-medium leading-none w-max">
        <div>Monthly</div>
        <div className="w-full">Users are on</div>
        <div className="w-full">CarDekho Platform</div>
      </div>
    </div>
  );
}