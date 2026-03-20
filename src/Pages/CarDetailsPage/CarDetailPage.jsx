import React, { useState, useEffect } from "react";
import { useScreenResizeValue } from "../../ScreenSizeFunction";
import {
  SpecificationPage,
  MileagePage,
  BrandCarVideos,
  BrandCar360,
  BrandCarVariants,
  BrandCarReviewPage,
  BrandCarPrice,
  BrandCar,
  BrandCarImages,
  ComparisonPage,
} from "../index";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const CarDetailPage = () => {
  const breakpoint = useScreenResizeValue();
  const details = useSelector((state) => state.CarDetails);

  const name = details?.overView?.name;
  const brand = details?.overView?.brandName;
  const model = name.replace(brand, "").trim();

  const detailsButtons = [
    model,
    "Price",
    "Compare",
    "Images",
    "Specs",
    "User Reviews",
    "360 View",
    "Variants",
    "Videos",
    "Mileage",
    "More",
  ];
  const [detailsButtonsActive, setdetailsButtonsActive] = useState(model);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = `AutoTrends.AI : ${details.overView.name} Details`;
  }, []);

  const PagesCalled = [
    {
      name: `${model}`,
      comp: BrandCar,
      props:{setdetailsButtonsActive}
    },
    {
      name: "Price",
      comp: BrandCarPrice,
    },
    {
      name: "Compare",
      comp: ComparisonPage,
    },
    {
      name: "Images",
      comp: BrandCarImages,
    },
    {
      name: "Specs",
      comp: SpecificationPage,
    },
    {
      name: "User Reviews",
      comp: BrandCarReviewPage,
    },
    {
      name: "360 View",
      comp: BrandCar360 ,
    },
    {
      name: "Variants",
      comp: BrandCarVariants,
    },
    {
      name: "Videos",
      comp: BrandCarVideos,
    },
    {
      name: "Mileage",
      comp: MileagePage,
    },
  ];

  return (
    <div className="bg-[#FFFFFF]   w-[100vw]  h-max  flex  flex-col items-center justify-center">
      <div
        className={`py-[1rem]  flex items-center overflow-x-scroll justify-start gap-[.5rem]  
                         ${
                           breakpoint <= 1440
                             ? "w-[84%]  "
                             : "w-[1200px]"
                         } px-[10px] bg-[white] z-[100]`}
        style={{
          scrollbarWidth: "none",
          position: breakpoint <= 412 ? "-webkit-sticky" : "sticky",
          top: 0,
        }}
      >
        {detailsButtons.map((buttons, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setdetailsButtonsActive(buttons);
                window.scrollTo(0,0)
              }}
              className={` ${
                breakpoint <= 412 ? " text-[12px]" : "text-[.86125rem]"
              } inline-block whitespace-nowrap  w-max min-w-[6rem] min-h-[2rem] py-[4px] px-[.5rem] rounded-full ${
                detailsButtonsActive === buttons
                  ? "bg-[#ECF3FF] border-[2px] border-[#0B66FA] text-color-9"
                  : "border-[1px] border-[rgba(0,0,0,0.12)] bg-[#ffffff] text-color-9-70"
              } font-2-book   transition-all duration-100`}
            >
              {buttons}
            </button>
          );
        })}
      </div>
      {PagesCalled.map((page, index) => {
        const Component = page.comp
        return (
          <div
            key={index}
            className={`w-full  font-Roboto ${
              breakpoint <= 412 ? "" : "px-[20px]"
            }`}
          >
            {page.name === detailsButtonsActive && 
            <Component {...page.props}/>
            }
          </div>
        );
      })}
    </div>
  );
};

export default CarDetailPage;
