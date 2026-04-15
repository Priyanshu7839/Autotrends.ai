import React from "react";
import { GoStarFill } from "react-icons/go";
import { useScreenResizeValue } from "../../ScreenSizeFunction";
import { useSelector } from "react-redux";

const BrandCarVideosHeader = ({
  prop,
  videos = true,
  variants = false,
  category,
  text,
}) => {
  const breakpoint = useScreenResizeValue();
  const [liked, setLiked] = React.useState(false);
  const {
    name,
    image,
    MinPrice,
    MaxPrice,
    features,
    rating,
    reviews,
    electric,
    facelift,
    priceRange
  } = prop;

  const details = useSelector((state) => state.CarDetails);


  return (
    <div
      className={`bg-[#FFFFFF] w-[100%] ${
        breakpoint <= 1050 ? " px-[20px] flex-col" : "flex-row items-center"
      } flex  justify-center drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)] `}
    >
      {breakpoint <= 768 && (
        <h3 className="text-[21px] font-semibold leading-[21px]">
          {name} {text}
        </h3>
      )}
      <div
        className={` py-[1rem] flex ${breakpoint <= 768 ? "" : "gap-[20px]"} 
                 ${
                   breakpoint <= 1440
                     ? breakpoint <= 768
                       ? "w-full"
                       : "w-[84%]"
                     : "w-[1200px]"
                 }`}
      >
        {((variants && breakpoint >= 1050) || !variants) && (
          <div
            className={`  bg-center bg-cover  bg-no-repeat ${
              breakpoint <= 768 ? "w-[50%] h-[100px]" : "w-[30%] h-[160px]"
            }   rounded-xl `}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        )}
        <div className=" w-full flex flex-col gap-[12px] px-[20px] rounded-b-xl rounded-r-xl  py-[13px]">
          {breakpoint > 768 && (
            <p className="text-[21px] font-semibold leading-[21px] text-[#24272c]">
              {name} {category !== 'User Reviews' && category}
            </p>
          )}
          {variants && (
            <p
              className={` ${
                breakpoint <= 1050 ? "w-full" : "w-[80%]"
              } text-[rgba(36,39,44,0.7)] text-[13px]`}
            >
              {details?.variantTableHighlight?.description}
            </p>
          )}
          <div className="flex w-full gap-[20px]">
            {variants && breakpoint < 1050 && (
              <div
                className={`  bg-center bg-cover aspect-video  bg-no-repeat ${
                  breakpoint <= 1050 ? "w-[50%] h-[150px]" : "w-[30%] h-[160px]"
                }   rounded-xl `}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            )}
            <div className=" flex flex-col gap-[10px]">
              <p
                className={` ${
                  breakpoint > 768
                    ? "text-[16px] leading-[24px]"
                    : " text-[13px] leading-[20px]"
                } flex items-center gap-[8px] `}
              >
                <span className=" font-bold">{rating}</span>
                <span className="block">
                  <GoStarFill
                    className={` ${
                      breakpoint <= 768
                        ? " w-[16px] h-[16px]"
                        : " w-[20px] h-[20px]"
                    } text-blue`}
                  />
                </span>
                <span className=" text-[#24272c] text-opacity-50">
                  {reviews} Reviews
                </span>
              </p>
              <p
                className={` ${
                  breakpoint <= 768
                    ? " text-[14px] leading-[17px]"
                    : " text-[17px] leading-[24px]"
                } font-bold `}
              >
                Rs. {priceRange}<sup>*</sup>{" "}
              </p>
              <p
                className={` underline underline-offset-2 ${
                  breakpoint <= 768
                    ? " text-[13px] leading-[20px]"
                    : "text-[15px] leading-[22.5px]"
                } text-[rgba(36,39,44,0.7)]`}
              >
                {details?.emi?.emiText}
              </p>
            </div>
          </div>

          {breakpoint > 1050 && (
            <>
              <div className=" w-[35%] ">
                <button className="bg-blue w-full text-[white] font-medium py-2 px-6 rounded-xl hover:bg-blue-600">
                  View Live offers
                </button>
              </div>
              <div className=" w-full flex items-center border-t-2 border-[rgba(36,39,44,0.3)] border-dashed py-[10px] px-[5px] justify-between">
                <p className="text-[#24272c] text-[13px] leading-[19.5px]">
                  <sup>*</sup>Ex-showroom Price in New Delhi
                </p>
                <p className=" text-[rgba(36,39,44,0.7)] text-[11px] leading-[16.5px] flex gap-[6px] items-center">
                  <i
                    class={`${
                      !liked
                        ? 'icon-heart-empty before:content-["\\f08a"]'
                        : 'icon-heart before:content-["\\f004"] before:text-[#0085ff]  '
                    } `}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  ></i>
                  Shortlist
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      {breakpoint <= 1050 && (
        <div className=" flex flex-col gap-[10px]">
          <div className=" w-full ">
            <button
              className={`${
                breakpoint > 480 ? "w-[70%]" : "w-full"
              } bg-blue  text-[white] font-medium py-2 px-6 rounded-xl hover:bg-blue-600`}
            >
              Check Live Offers
            </button>
          </div>
          <div className=" w-full flex items-center border-t-2 border-[rgba(36,39,44,0.3)] border-dashed py-[10px] px-[5px] justify-between">
            <p className="text-[#24272c] text-[13px] leading-[19.5px]">
              <sup>*</sup>Ex-showroom Price in New Delhi
            </p>
            <p className=" text-[rgba(36,39,44,0.7)] text-[11px] leading-[16.5px] flex gap-[6px] items-center">
              <i
                class={`${
                  !liked
                    ? 'icon-heart-empty before:content-["\\f08a"]'
                    : 'icon-heart before:content-["\\f004"] before:text-[#0085ff]  '
                } `}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></i>
              Shortlist
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandCarVideosHeader;
