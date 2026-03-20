import React from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi2';

const SellCarsByPopularBrands = () => {
  const carBrands = [
    "Sell Used Maruti car",
    "Sell Used Hyundai car",
    "Sell Used Honda car",
    "Sell Used Toyota car",
    "Sell Used Mahindra car",
    "Sell Used Tata car",
    "Sell Used Ford car",
  ];

  return (
    <div className="w-full  shadow-[2px_0px_4px_rgba(0,0,0,0.15)] drop-shadow-md bg-[white] p-4 md:p-8 rounded-[20px] max-w-[940px]">
      {/* Title */}
      <h2 className="text-[24px] md:text-[28px] font-bold text-[#333846] mb-4  md:text-center">
        Sell Cars By Popular Brands
      </h2>

      {/* List of Brands */}
      <ul className="space-y-2">
        {carBrands.map((brand, index) => (
          <li key={index} className="flex items-center justify-between  px-2  py-3  hover:bg-gray-50 rounded-md">

            <p className="text-[14px] md:text-[18px] text-[#24272C]">{brand}</p>

            <HiOutlineChevronRight className="text-lg md:text-2xl text-[#24272C]" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellCarsByPopularBrands;