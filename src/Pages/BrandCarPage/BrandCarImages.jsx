import React, { useState } from "react";
import {
  kia1,
  grill,
  headlight,
} from "../../assets/Images";
import {
  MoreOptionsToConsiderData,
  carvideos,
} from "../../MockData";
import {
  BrandCarVirtualExperience,
  CalculateEmi,
  TrendingCars,
  PopularSUV,
  SimilarCars,
  ColorVariations,
  AreYouConfused,
  ExploreAlternativeImages,
  BrandCarInteriorAndExterior,
  BrandCarVariantComparison,
  Menu,
  Accordion,
  BrandCarVideosCard,
  UserReviews,
} from "../../components";
import MoreOptions from "../../Components/BrandCar/MoreOptions";
import { useScreenResizeValue } from "../../ScreenSizeFunction";
import { Rightarrow } from "../../assets/Images/SVG";
import { useSelector } from "react-redux";

const BrandCarImages = () => {
  const Model = [
    {
      image: kia1,
      name: "Kia Seltos",
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
      rating: 4.5,
      reviews: 1200,
    },
  ];

      
   const viewType = ["All", "Exterior", "Interior", "360 View", "Colours"]; 
 
  const [selectedViewType, setSelectedViewType] = useState("All");

 
  const [selectedImageForView, setSelectedImageForView] = useState(0);

  const breakpoint = useScreenResizeValue();

  const details = useSelector((state) => state.CarDetails);
 const images = details?.gallerySection?.items[0]?.items

  const [item,setitem]=useState("Latest Questions")
 
      const qna = details?.qna?.items[1].items
      const faq = details?.qna?.items[0].items
  


  return (
    <div className=" flex w-full justify-center">
      <div
        className={`${
          breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]"
        }  mt-[32px]`}
      >
        <div className={`flex w-full gap-[20px] ${breakpoint<=1250 && 'flex-col'}`}>
          <div className={` flex flex-col gap-[20px] ${breakpoint <=1250 ?'w-[100%]':'w-[76%]'}`}>
            {/* View Sections  */}
            <div className=" drop-shadow-[0px_1px_2px_rgba(36,39,44,0.05)] border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 px-[20px] py-[20px] flex flex-col gap-[8px] ">
              {/* <div className="flex gap-2 items-center">
                {viewType.map((view, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedViewType(view)}
                    className={` cursor-pointer px-2 py-1 flex flex-col gap-4 rounded-[4px] ${
                      selectedViewType === view
                        ? "border  border-[#007BE5] text-blue bg-blue bg-opacity-10 "
                        : "    border-[#24272C] border  border-opacity-10  text-[#24272C]"
                    } `}
                  >
                    <p className="text-[12px] leading-[20.8px] font-[400] ">
                      {view}
                    </p>
                  </div>
                ))}
              </div> */}

              <div className="relative mt-[27px]">
                <img
                  src={images[selectedImageForView].image}
                  alt=""
                  className="h-[495px] w-[895px] object-cover rounded-lg "
                />
                {/* <div onClick={()=>{setSelectedImageForView((selectedImageForView+1)%imagesData.size)}} className='absolute right-0 top-[50%] rounded-full w-[24px] h-[24px] bg-[#24272C] bg-opacity-25 flex justify-center items-center'><FaArrowRight className='h-[18px] w-[18px] text-slate-600'/></div> */}
              </div>
              <div
                className="flex justify-center gap-[15px]  overflow-scroll "
                style={{ scrollbarWidth: "none" }}
              >
                {images.map((data, index) => (
                  <div className="flex  w-[90px] h-[65px]" key={index}>
                    <img
                      src={data.image}
                      alt=""
                      onClick={() => setSelectedImageForView(index)}
                      className="w-[85px] h-[60px] object-cover rounded-md "
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Seltos Interior and Exterior */}

            <div className="">
              <BrandCarInteriorAndExterior />
            </div>

            <div className="">
              <BrandCarVirtualExperience />
            </div>

            <div className="">
              <MoreOptions />
            </div>

            <div className="">
              <ColorVariations />
            </div>

            <BrandCarVariantComparison />

            <div className="      ">
              <ExploreAlternativeImages
                heading={"Explore 360 View of Seltos alternatives"}
                userReview={false}
              />
            </div>

            <div className="">
              <MoreOptions />
            </div>
            <div className=" w-full relative flex flex-col pt-[18px] pb-[11px]  px-[21px] rounded-xl border border-[rgba(36,39,44,0.1)] drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)] shadow-[rgba(36,39,44,0.1)]">
              <h3 className=" text-[23px] leading-[33.2px] font-[500]">
               {details?.overView?.name} Videos
              </h3>

              <BrandCarVideosCard videos={carvideos} />
              <button className=" text-blue text-[15px] font-[700] w-max flex gap-[8px] mb-[10px]  items-center">
                View All {Model[0].name.split(" ")[1]}
                Videos <Rightarrow />
              </button>
            </div>
            <UserReviews price={true} />
            <div className="       ">
              <AreYouConfused />
            </div>
            <div className={`mt-[20px] relative flex flex-col gap-[8px] pt-[18px] pb-[26.5px]  px-[31.22px] rounded-xl border-[1px] border-[rgba(36,39,44,0.1)] drop-shadow-[0_1px_2px_rgba(36,39,44,0.1)]
              ${breakpoint <=1250 ?'w-[100%]':'w-[76%]'}
              `}>
                                                             <h3 className=' text-[23px] leading-[33.2px] font-[500]'> {Model.name} Questions & Answers</h3>
                                                             <Menu menuItems={["Latest Questions","FAQs"]} item={item} setitem={setitem}/>
                                                            {
                                                               item === 'Latest Questions' &&
                                                               <Accordion qna={qna}/>
                                                            }
                                                            {
                                                               item === 'FAQs' &&
                                                               <Accordion faq={faq}/>
                                                            }
                                                            
                                                            
                                                           </div>
          </div>
          <div className={`flex flex-col gap-4  items-center ${breakpoint <=1250 ?'w-[100%]':'w-[23%]'}`}>
            <div className="w-full">
              {/* Calculate Emi */}
              <CalculateEmi />
            </div>
            <div className="w-full">
              {/* Trending Cars */}
              <TrendingCars />
            </div>
            <div className="w-full">
              {/* Popular Cars */}
              <PopularSUV />
            </div>
            <div className="w-full">
              {/* Similar Cars */}
              <SimilarCars />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCarImages;
