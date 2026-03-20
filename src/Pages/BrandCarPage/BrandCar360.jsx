import React, { useState } from "react";
import { SeltosDesignData, MoreOptionsToConsiderData } from "../../MockData";
import {
  BrandCarInteriorAndExterior,
  MoreOptions,
  AreYouConfused,
  BrandCarVideosHeader,
  Accordion,
  Menu,
  ExploreAlternativeImages,
  ColorVariations,
  BrandCarVariantComparison,
  BrandCarVirtualExperience,
} from "../../components";
import { kia1, grill, headlight } from "../../assets/Images";
import { useScreenResizeValue } from "../../ScreenSizeFunction";
import { useSelector } from "react-redux";

const BrandModel360 = () => {
  const [item, setitem] = useState("Latest Questions");

  const details = useSelector((state) => state.CarDetails);


  const Model = [
    {
      image: details?.overView?.image,
      name: details?.overView?.name,
      MinPrice: "9.95",
      MaxPrice: "17.65",
      features: [
        "Diesel / Petrol",
        "17 to 20.7 kmpl",
        "Manual/Automatic",
        "1482 cc - 1497 cc",
        "113.42 - 157.81 bhp",
        "3 Star Safety",
      ],
      facelift: true,
      electric: false,
      moreimages: [grill, headlight],
      rating:details?.userReviews?.overAllRating,
      reviews: details?.userReviews?.reviewCount,
      priceRange:details?.overView?.priceRange
    },
  ];

  const breakpoint = useScreenResizeValue();

  return (
    <div className=" pt-[20px] ">
      <BrandCarVideosHeader prop={Model[0]} text={"360 View"} />
      <div
        className="w-full flex justify-center"
      >
        <div
          className={` ${breakpoint<=1440?breakpoint<=768?"w-full":'w-[84%]':'w-[1200px]'} flex flex-col  gap-[20px]  mt-[32px]`}
        >
          <BrandCarInteriorAndExterior />

          <BrandCarVirtualExperience />

          <MoreOptions data={SeltosDesignData} />

          <ColorVariations />

          <BrandCarVariantComparison />

          <div className=" w-full ">
            <ExploreAlternativeImages
              heading={"Explore 360 View of Seltos alternatives"}
              userReview={false}
            />
          </div>

          <div className=" w-full ">
            <MoreOptions  />
          </div>
          <div className=" relative flex flex-col w-full gap-[8px] pt-[18px] pb-[26.5px]  px-[31.22px] rounded-xl border border-[rgba(36,39,44,0.1)] shadow-sm shadow-[rgba(36,39,44,0.1)]">
            <h3 className=" text-[23px] leading-[33.2px] font-[500] font-2">
              Questions & Answers on {Model.name}
            </h3>
            <Menu
              menuItems={["Latest Questions", "FAQs"]}
              item={item}
              setitem={setitem}
            />
            <Accordion />
          </div>

          <div className="  w-full  ">
            <AreYouConfused />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandModel360;