import * as React from "react";
import { useScreenResizeValue } from "../../../ScreenSizeFunction";

export function QuestionInput() {

  const breakpoint=useScreenResizeValue();

  return (
    <form className={`flex   h-max items-start mt-[40px]  ${breakpoint<=412?'text-[15px] gap-[10px]':'text-xl gap-8'} font-semibold w-full  max-md:max-w-full`}>
     
      <input
        type="text"
        id="questionInput"
        className={` flex overflow-hidden grow shrink justify-center items-start px-8 py-6 bg-white rounded-xl min-h-[67px] min-w-[240px] text-zinc-800 text-opacity-40 w-[60%] max-md:px-5 max-md:w-[60%]`}
        placeholder="Write your question here"
        aria-label="Question input field"
      />
      <button
        type="submit"
        className={` h-full grow shrink px-14 py-5 leading-tight text-center text-[white] rounded-lg bg-[#bcbdbe] max-w-[1052px] min-h-[67px]  w-max max-md:px-5`}
      >
       { breakpoint<=412?'Ask Now':'Ask A Question'}
      </button>
    </form>
  );
}