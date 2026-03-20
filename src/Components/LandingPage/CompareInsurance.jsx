import { useScreenResizeValue } from "../../ScreenSizeFunction";
import { CompareInsuranceImg, AIPriceCheck } from "../../assets/Images";
import CheckImage3 from "../../assets/Images/CheckImage3.jpg";
import React from "react";
import { useNavigate } from "react-router";

const CompareInsurance = () => {
  const Navigate = useNavigate();
  const breakpoint = useScreenResizeValue();
  return (
    <div className="flex items-center justify-center bg-[#FFFFFF] relative">
      <div
        className={`${breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]"} 
                                  flex      font-1 overflow-hidden
                                  ${
                                    breakpoint <= 768
                                      ? "flex-col-reverse gap-0"
                                      : "gap-[20px]"
                                  }`}
      >
        <div
          className={`${
            breakpoint <= 768
              ? "w-full h-max min-h-[250px]"
              : "w-[50%] min-h-[30rem]"
          } bg-[#e4f5fe]  p-[2rem] border-[1px] border-[#23242c1a] ${
            breakpoint <= 768 ? "rounded-b-[16px]" : "rounded-[16px]"
          }  py-[20px]`}
        >
          <div className="flex h-full flex-col gap-[1rem] items-center justify-center">
            <h1
              className={`font-semibold  text-color-8 text-center
                                            ${
                                              breakpoint > 1200 &&
                                              "text-[2.5rem] leading-[2.5rem]"
                                            }
                                            ${
                                              breakpoint <= 1200 &&
                                              breakpoint > 768 &&
                                              "text-[2rem] leading-[2rem]"
                                            }
                                            ${
                                              breakpoint <= 768 &&
                                              breakpoint > 480 &&
                                              "text-[1.5rem] leading-[1.5rem]"
                                            } 
                                            ${
                                              breakpoint <= 480 &&
                                              "text-[1.25rem] leading-[1.25rem]"
                                            }
                                  `}
            >
              Get the Best Insurance for Your New Ride!
            </h1>
            <p
              className={`text-color-8  font-medium
                                          ${breakpoint > 1200 && "text-[1rem]"}
                                          ${
                                            breakpoint <= 1200 &&
                                            breakpoint > 768 &&
                                            "text-[.875rem]"
                                          }
                                          ${
                                            breakpoint <= 768 &&
                                            breakpoint > 480 &&
                                            "text-[.75rem]"
                                          } 
                                          ${
                                            breakpoint <= 480 &&
                                            "text-[.625rem]"
                                          }
                                  `}
            >
              {" "}
              Let’s See if We Can Help You
            </p>
            <button
              onClick={() => {
                Navigate("/AIPricing");
              }}
              className={`text-center py-[.5rem] px-[2rem] font-semibold text-color-1 rounded-[12px] bg-[#0B66FA] relative z-10
                                        ${
                                          breakpoint > 1200 &&
                                          "text-[1.11625rem]"
                                        }
                                        ${
                                          breakpoint <= 1200 &&
                                          breakpoint > 768 &&
                                          "text-[.99125rem]"
                                        }
                                        ${
                                          breakpoint <= 768 &&
                                          breakpoint > 480 &&
                                          "text-[.86625rem]"
                                        } 
                                        ${
                                          breakpoint <= 480 &&
                                          "text-[.74125rem]"
                                        }
                                      `}
            >
              Compare Insurance
            </button>
          </div>
        </div>

        <div
          className={`${
            breakpoint <= 768 ? "w-full h-auto aspect-video" : "w-[50%]"
          } border-[1px] border-[#23242c1a]  ${
            breakpoint <= 768 ? "rounded-t-[16px]" : "rounded-[16px]"
          }  overflow-hidden`}
        >
          <img
            src={CheckImage3}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CompareInsurance;
