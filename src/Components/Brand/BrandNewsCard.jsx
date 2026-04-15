import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar, Pagination, Navigation, A11y } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useScreenResizeValue } from "../../ScreenSizeFunction";


const   BrandNewsCard = ({ CarNews, horizontal = false,vertical=false }) => {
  const breakpoint = useScreenResizeValue();
  const swiperRef = useRef(null);
  console.log(CarNews)

  useEffect(() => {
    // Ensure navigation buttons exist before initializing Swiper
    setTimeout(() => {
      if (swiperRef.current) {
        swiperRef.current.navigation.init();
        swiperRef.current.navigation.update();
      }
    }, 100);
  }, []);

  return (
    <div className="py-[8px] w-full relative">
      <Swiper
        className="relative z-0 w-full"
        ref={swiperRef}
        spaceBetween={10}
        
        slidesPerView={horizontal?1:breakpoint<=480?1:breakpoint<=768?1.8:2.2}
        modules={[Autoplay, Scrollbar, Pagination, Navigation, A11y]}
       
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={800}
        
       
        
        navigation={{
          nextEl: ".custom-button-next",
          prevEl: ".custom-button-prev",
        }}
       
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {CarNews&& 
        CarNews.map((item, key) => (
          <SwiperSlide key={key}>
            <div
              className={`flex border-[#24272c1a] bg-[white] rounded-[8px] border drop-shadow-[0px_1px_2px_rgba(36,39,44,0.05)] ${
                horizontal
                  ? "w-full h-[196px]"
                  : breakpoint <= 480
                  ? "w-[310px] h-[376px] flex-col"
                  : "w-[360px] h-[376px] flex-col"
              }`}
            >
              <div
                className={`${
                  horizontal
                    ? "h-full rounded-l-[8px] w-[60%]"
                    : "h-[60%] w-full rounded-t-xl"
                } flex flex-col gap-[4px]`}
                style={{
                  backgroundImage: `url(${item.coverImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div
                className={`w-full pt-[16px] pb-[17.5px] flex flex-col px-[16px] ${
                  horizontal ? "pr-[100px] gap-[8px]" : ""
                }`}
              >
                <div className="flex flex-col w-full gap-[7.25px] h-[90px] overflow-hidden font-1">
                  <p className="text-[15px] w-full text-color-9 font-medium max-h-[68px] overflow-ellipsis">
                    {item.title}
                  </p>
                  <p className="text-[13px] font-normal w-full text-color-9-70">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center font-medium text-color-9-70 gap-[6.75px] text-[11px]">
                  <p>By {item.source}</p>
                  <p>{item.date}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Always Render Buttons but Hide with CSS When Needed */}
      <div
        className={`custom-button-prev absolute cursor-pointer top-[40%] left-[-2%] z-[100] rounded-full drop-shadow-[0px_4px_12px_rgba(36,39,44)] bg-[white] w-[36px] h-[36px] flex justify-center items-center ${
          breakpoint <= 412 ? "hidden" : ""
        }`}
      >
        <IoIosArrowBack className="text-[#24272c] w-[10px] h-[10px]" />
      </div>

      <div
        className={`custom-button-next absolute cursor-pointer top-[40%] right-[-2%] z-[100] rounded-full drop-shadow-[0px_4px_12px_rgba(36,39,44)] bg-[white] w-[36px] h-[36px] flex justify-center items-center ${
          breakpoint <= 412 ? "hidden" : ""
        }`}
      >
        <IoIosArrowForward className="text-[#24272c] w-[10px] h-[10px]" />
      </div>
    </div>
  );
};

export default BrandNewsCard;