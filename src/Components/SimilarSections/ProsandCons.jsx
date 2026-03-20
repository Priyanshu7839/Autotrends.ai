import React,{useState} from "react";
import { useScreenResizeValue } from "../../ScreenSizeFunction";
import { Thumbsdownsvg,Thumbsupsvg } from "../../assets/Images/SVG";

const Pros = () => {
  return (
    <div className="flex items-center justify-center gap-[20px]">
      <div className="px-[14px] py-[18px] rounded-[8px] text-[15px] bg-[#eafef3] text-[#6bad23]   flex flex-col gap-[13px] w-[50%]">
        <p className="flex gap-2 items-center text-opacity-100 text-color-9 text-[17px]  font-medium">
          <span>
            {" "}
            <Thumbsupsvg />
          </span>
          Things We Like
        </p>
        <li>
          <span className="text-color-9-70">
            Upmarket cabin experience with soft-touch elements and dual
            10.25-inch displays.
          </span>
        </li>
        <li>
          <span className="text-color-9-70">
            Some features from segments above, including panoramic sunroof, ADAS
            and dual-zone climate control.
          </span>
        </li>
        <li>
          <span className="text-color-9-70">
            Multiple engine options including a diesel with both manual and
            automatic options.
          </span>
        </li>
        <p className="text-[14px] text-color-9-70 underline">View More </p>
      </div>
      {/* ---------------------------------------------------------------------------------------------- */}
      <div className="px-[14px] py-[18px] rounded-[8px] text-[15px] bg-[#eafef3] text-[#6bad23]   flex flex-col gap-[13px] w-[50%]">
        <p className="flex gap-2 items-center text-opacity-100 text-color-9 text-[17px]  font-medium">
          <span>
            {" "}
            <Thumbsupsvg />
          </span>
          Things We Like
        </p>
        <li>
          <span className="text-color-9-70">
            Upmarket cabin experience with soft-touch elements and dual
            10.25-inch displays.
          </span>
        </li>
        <li>
          <span className="text-color-9-70">
            Some features from segments above, including panoramic sunroof, ADAS
            and dual-zone climate control.
          </span>
        </li>
        <li>
          <span className="text-color-9-70">
            Multiple engine options including a diesel with both manual and
            automatic options.
          </span>
        </li>
        <p className="text-[14px] text-color-9-70 underline">View More </p>
      </div>
    </div>
  );
}

const Cons = () => {
  return (
    <div className="flex items-center justify-center gap-[20px]">
      <div className="px-[14px] py-[18px] rounded-[8px] text-[15px] bg-[#FF1E3C]  bg-opacity-[3%] text-[#007FFF]  flex flex-col gap-[13px] w-[50%]">
        <p className="flex gap-2 items-center text-[#24272C] text-[17px]  font-[500]">
          <span>
            {" "}
            <Thumbsdownsvg />
          </span>
          Things We Don't Like
        </p>
        <li>
          <span className="text-color-9-70">
            Crash test is still pending, but is expected to be less than the 5
            stars of Kushaq and Taigun.
          </span>
        </li>
        <li>
          <span className="text-color-9-70">
            Shallow boot limits the practicality of the space.
          </span>
        </li>
      </div>
      <div className="px-[14px] py-[18px] rounded-[8px] text-[15px] bg-[#FF1E3C]  bg-opacity-[3%] text-[#007FFF]  flex flex-col gap-[13px] w-[50%]">
        <p className="flex gap-2 items-center text-[#24272C] text-[17px]  font-[500]">
          <span>
            {" "}
            <Thumbsdownsvg />
          </span>
          Things We Don't Like
        </p>
        <li>
          <span className="text-color-9-70">
            Crash test is still pending, but is expected to be less than the 5
            stars of Kushaq and Taigun.
          </span>
        </li>
        <li>
          <span className="text-color-9-70">
            Shallow boot limits the practicality of the space.
          </span>
        </li>
      </div>
    </div>
  );
}

const ProsandCons = ({ className }) => {
  const breakpoint = useScreenResizeValue();
  const prosandconsHeading = ["Pros","Cons"];
  const [ProsandconsHeading, SetProsandconsHeading] = useState("Pros");

  return (

      <div
        className={`flex items-center justify-center bg-[#FAFAFA] w-[100%]  ${className}`}
      >
        <div
          className={`${
            breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]"
          } flex flex-col gap-[8px]  py-[20px]  drop-shadow-[0px_1px_2px_rgba(36,39,44,0.1)] border-[#24272C1a] border-[1px] rounded-[16px] font-1
    
    `}
        >
          <div className="w-full flex flex-col gap-[20px] font-1">
            <div className="flex flex-col gap-[10px]">
              <h1 className="font-medium text-[1.4375rem] text-color-9 px-[24px]">
                Pros & Cons
              </h1>
              <div className="relative flex px-[24px] py-[10px] items-center justify-start gap-[36px] border-b-[1px] border-[rgba(36,39,44,0.15)] ">
                {prosandconsHeading.map((heading, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col cursor-pointer relative"
                      onClick={() => {
                        SetProsandconsHeading(heading);
                      }}
                    >
                      <h1
                        className={`${
                          ProsandconsHeading === heading
                            ? "font-medium text-[.875rem] text-color-9"
                            : "text-color-9-70 text-[.875rem] "
                        }`}
                      >
                        {heading}
                      </h1>
                      <span
                        className={` h-[3px] bg-[#0b66fa] absolute bottom-[-10px]  ${
                          ProsandconsHeading === heading ? "w-full" : "w-0"
                        } transition-all duration-200`}
                      ></span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="px-[20px]">
             {ProsandconsHeading === 'Pros' && <Pros/>}
             {ProsandconsHeading === 'Cons' && <Cons/>}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default ProsandCons;
