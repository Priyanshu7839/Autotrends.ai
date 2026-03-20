import * as React from "react";
import { QuestionInput } from "./QuestionInput";
import { UserStats } from "./UserStats";
import { TipsSection } from "./TipsSection";
import { useScreenResizeValue } from "../../../ScreenSizeFunction";

function EVSection18() {

    const breakpoint=useScreenResizeValue();

  return (
    <div className=" w-full flex flex-col mt-[70px] bg-[#f1f3f6] rounded-2xl ">
      <div className={`${breakpoint<=412?' flex flex-col px-[20px] pt-[30px] pb-[30px] w-full ':"flex overflow-hidden flex-col items-end px-[90px] pt-16 pb-[90px] w-full h-max "}`}>
        <div className={` ${breakpoint<=412?' flex flex-col gap-[20px]   ':"flex  items-center justify-between w-full max-w-[1052px] text-zinc-800 max-md:max-w-full"}`}>
          <div className={`self-stretch  my-auto ${breakpoint<=412?' text-[32px] leadin-[40px]':' text-[48px] leading-[57px]'} font-semibold  min-w-[240px] max-md:w-full`}>
            Join our Community to
            <br />
            help others
          </div>
          <UserStats />
        </div>
        <QuestionInput />
        <TipsSection />
      </div>
    </div>
  );
}

export default EVSection18;