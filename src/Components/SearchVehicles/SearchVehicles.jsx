import  React,{useState} from "react";
import SearchButton from "./SearchButton";
import TabButton from "./TabButton";
import SelectField from "./SelectField";

const tabOptions = [
  { label: "budget", active: true },
  { label: "model", active: false }
];

const selectOptions = [
  { label: "Select Budget", ariaLabel: "Select your budget range" },
  { label: "All Vehicle Types", ariaLabel: "Select vehicle type" }
];

function SearchVehicle() {

    const [category,setcategory]=useState("budget");


  return (
    <form className="flex flex-col w-full  pt-11 min-h-[1px]" role="search">
      <div className="flex flex-wrap gap-1 items-end w-full text-xs leading-8 text-white uppercase max-md:max-w-full">
        {tabOptions.map((tab, index) => (
          <TabButton
            key={index}
            label={tab.label}
        
            category={category}
            setcategory={setcategory}
          />
        ))}
      </div>
      <div className="flex flex-col items-start pb-1.5 w-full text-base text-zinc-800 max-md:max-w-full">
        <div className="flex  items-start rounded-lg bg-white bg-opacity-0 max-w-[700px] shadow-[0px_8px_20px_rgba(36,39,44,0.15)] w-[700px] max-md:max-w-full">
          <div className="flex flex-wrap gap-[] w-max">
            {selectOptions.map((option, index) => (
              <SelectField
                key={index}
                ind={index}
                label={category}
                ariaLabel={option.ariaLabel}
              />
            ))}
            <SearchButton />
          </div>
        </div>
      </div>
    </form>
  );
}

export default SearchVehicle;