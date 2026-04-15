import React, { useEffect, useState, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { useScreenResizeValue } from "../../ScreenSizeFunction";

const LocationSearch = ({
  className,
  selectedLocation,
  setselectedLocation,
  setshowLocationSearch,
  latlon,
  setlatlon
}) => {
  const [inputValue, SetInputValue] = useState("");
  const [LocationData, setLocationData] = useState("");
  const [LocationOptions, setLocationOptions] = useState(false);
  const timeoutRef = useRef(null); //

  const fetchLocations = async (inputValue) => {
    if (!inputValue) return;
    try {
      const { data } = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${inputValue}`
      );

      if (data) {
        setLocationData(data);
      }
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    SetInputValue(value);

    // Clear previous timeout
    // Clear previous timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Set new timeout
    timeoutRef.current = setTimeout(() => {
      fetchLocations(value);
      setLocationOptions(true);
    }, 500); // 3-second delay
  };
  const breakpoint = useScreenResizeValue();

  return (
    <div
      className={` bg-[#ffffff] drop-shadow-md rounded-[8px] flex flex-col gap-[1rem]  items-center justify-center  ${className}
      ${breakpoint>1000 && 'px-[4rem]'}
      ${(breakpoint<=1000 && breakpoint>700) && 'px-[3rem]'}
      ${(breakpoint<=700 && breakpoint>480) && 'px-[2rem]'}
      ${(breakpoint<=480 && breakpoint>0) && 'px-[1rem]'}
      ${(breakpoint<=700 && breakpoint>0) ? 'py-[2rem]':'py-[3rem]'}
      ${breakpoint>950 &&'w-[50%]'}
      ${breakpoint<=950 &&'w-[80%]'}
      `}
    >
      <RxCross2
        className="absolute top-[10%] right-[5%] cursor-pointer"
        onClick={() => {
          setshowLocationSearch(false);
        }}
      />
      <h1 className={`font-2-book text-color-8
        ${breakpoint>700 && 'text-[1.25rem]'}
        ${(breakpoint<=700 && breakpoint>480) && 'text-[1rem]'}
        ${breakpoint<=480 && 'text-[.875rem]'}
        `}>
       Enter your city to get customized offers
      </h1>
      <div className="w-full">
        <input
          type="text"
          placeholder="Jhansi"
          className={`w-full  px-[1rem] py-[.25rem] outline-none border-[1px] border-[#C1C7CD]  ${
            LocationOptions&&LocationData ? "border-b-[0px] rounded-t-[8px]" : "rounded-[8px]"
          }`}
          onChange={handleChange}
          value={inputValue}
        />

        {LocationData && LocationOptions && (
          <div className="w-full rounded-b-[8px]  py-[.5rem] outline-none border-[1px] border-[#C1C7CD]">
            {LocationData &&
              LocationData.map((loc) => {
                
                return (
                  <h1
                    key={loc.place_id}
                    onClick={() => {
                      setselectedLocation(loc.name);
                      setlatlon({
                        lat:loc.lat,
                        lon:loc.lon
                      })
                      setLocationOptions(false);
                      setshowLocationSearch(false)
                    }}
                    className="px-[1rem] cursor-pointer py-[.25rem] hover:bg-[rgba(0,0,0,0.1)]"
                  >
                    {loc.display_name}
                  </h1>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationSearch;
