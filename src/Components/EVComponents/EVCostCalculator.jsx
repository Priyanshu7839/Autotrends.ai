import React, { useEffect, useState } from 'react';

import { BgLine, DownArrow,Rightarrow } from '../../assets/Images/SVG';
import { MdOutlineArrowDropDown,MdElectricBolt } from "react-icons/md";
import { LuFlag } from "react-icons/lu";
import { co2, fuelStation } from '../../assets/Images';
import { useScreenResizeValue } from '../../ScreenSizeFunction';

const EVCostCalculator = ({Model}) => {
    const [kmDrivenPerDay, setKmDrivenPerDay] = useState(10);
    const [electricityPrice, setElectricityPrice]= useState(2);
    const [kmw,setkmw]=useState(0);
    const [pricew,setpricew]= useState(0);

    const breakpoint=useScreenResizeValue();
    useEffect(() => {
        
        const calculateKmWidth = () => {
            const newWidth = Math.round((kmDrivenPerDay-10)*100/190);
          setkmw(newWidth);
        };
        const calculatepricewidth=()=>{
            const newWidth = Math.round((electricityPrice-2)*100/22);
            setpricew(newWidth);
        }
        calculateKmWidth();
        calculatepricewidth();
    
       
      }, [kmDrivenPerDay,electricityPrice]);
   
      

    const handleKmDrivenChange = (event) => {
      setKmDrivenPerDay(event.target.value);
     
    };
    const handleElctricityPriceChange = (event) => {
        setElectricityPrice(event.target.value);
    }
  
    const calculateFuelCost = () => {
      // Assuming a fuel efficiency of 20 km/liter for the Diesel(Manual) 1493 cc engine
      const fuelEfficiency = 20;
      const dailyFuelConsumption = kmDrivenPerDay / fuelEfficiency;
      const monthlyFuelConsumption = dailyFuelConsumption * 30;
      const fuelPrice = 80; // Assuming a fuel price of Rs. 80 per liter
      const monthlyFuelCost = monthlyFuelConsumption * fuelPrice;
      return Math.round(monthlyFuelCost);
    };
   

  return (
    <div className="bg-[white] mt-[50px] flex  py-[8px]    w-full">
     {breakpoint>412&& 
     <div className=' flex flex-col w-[40%] px-[20px]'>
      <div className="flex relative flex-col h-max rounded-[8px] pt-[9px] pl-[17px] bg-[#f2f3f7] items-start w-full">
      <label htmlFor="carSelect" className=" text-[rgba(36,39,44,0.5)] leading-[15px] text-[10px] font-[400]">Select electric car</label>
      <select 
        id="carSelect"
        className="flex overflow-hidden  appearance-none outline-none border-none z-[10] pl-[4px] flex-col pb-[11.5px] w-full  text-[14px] font-[500] text-sm bg-opacity-0 bg-[white]  text-black bg-gray-100 rounded-lg h-max   "
        aria-label="Select electric car"
      >
        <option value="mahindra">Mahindra BE 6</option>
      </select>
      <MdOutlineArrowDropDown className=' absolute z-0 top-[45%] right-[16px]'/>
     
    </div>
      <div className=' text-[10px] leading-[15px] mt-[12px] text-[rgba(36,39,44,0.5)] '>
      Select EV vehicle as per your choice
      </div>
      <div className=" flex mt-[15.5px]  flex-col gap-[20px]">
       <div className='flex gap-[12.5px] flex-col w-full '>
       <label htmlFor="kmDriven" className=" w-full flex justify-between items-center text-sm font-medium text-gray-700">
          <p>
          Avg. Drive Per Day
          </p>
          <div className="flex border border-[rgba(36,39,44,0.1)] px-[16px] py-[10px] rounded-lg items-center ml-2">
            <span className="text-sm">{kmDrivenPerDay} Kms</span>
          </div>
        </label>
        <div className="flex relative flex-col items-center gap-[17.25px]  mt-2">
          <input
            type="range"
            min="10"
            max="200"
            step="1"
            value={kmDrivenPerDay}
            onChange={handleKmDrivenChange}
            className="w-[90%] appearance-none bg-opacity-0 bg-[white] h-1 relative z-20  cursor-pointer      rounded-lg  "
            
          />
          <div className=' w-[90%] relative mt-[-17px]'>
          <div className=' w-full h-[4px] rounded-xl top-[-2.5px] bg-[rgba(36,39,44,0.1)] absolute'></div>
          <div className={` bg-[#24272c] h-[4px] rounded-xl absolute top-[-2.5px] z-10 `} style={{width:`${kmw}%`}}></div>
          <div className={` w-[24px] h-[24px] rounded-full flex justify-center items-center bg-[#24272c] z-10 absolute top-[-15px]  `} style={{left:`${kmw-2}%`}}>
            <div className=' w-[16px] h-[16px] rounded-full bg-[white]'>

            </div>
          </div>

          </div>
  
            <div className=" text-[rgba(36,39,44,0.5)] text-[13px] leading-[22.8px] font-[400] flex justify-between w-full mt-2">
                <span>10 Km</span>
                <span>200 Km</span>
          
        </div>
      </div>
       </div>
       <div className='flex gap-[12.5px] flex-col w-full '>
       <label htmlFor="kmDriven" className=" w-full flex justify-between items-center text-sm font-medium text-gray-700">
          <p>
          Electricity Price
          </p>
          <div className="flex border border-[rgba(36,39,44,0.1)] px-[16px] py-[10px] rounded-lg items-center ml-2">
            <span className="text-sm">Rs. {electricityPrice}/unit</span>
          </div>
        </label>
        <div className="flex relative flex-col items-center gap-[17.25px]  mt-2">
          <input
            type="range"
            min="2"
            max="24"
            step="1"
            value={electricityPrice}
            onChange={handleElctricityPriceChange}
            className="w-[90%] appearance-none bg-opacity-0 bg-[white] h-1 relative z-20  cursor-pointer      rounded-lg  "
            
          />
          <div className=' w-[90%] relative mt-[-17px]'>
          <div className=' w-full h-[4px] rounded-xl top-[-2.5px] bg-[rgba(36,39,44,0.1)] absolute'></div>
          <div className={` bg-[#24272c] h-[4px] rounded-xl absolute top-[-2.5px] z-10 `} style={{width:`${pricew}%`}}></div>
          <div className={` w-[24px] h-[24px] rounded-full flex justify-center items-center bg-[#24272c] z-10 absolute top-[-15px]  `} style={{left:`${pricew-2}%`}}>
            <div className=' w-[16px] h-[16px] rounded-full bg-[white]'>

            </div>
          </div>

          </div>
  
            <div className=" text-[rgba(36,39,44,0.5)] text-[13px] leading-[22.8px] font-[400] flex justify-between w-full mt-2">
                <span>Rs. 2/unit</span>
                <span>Rs. 24/unit</span>
          
        </div>
      </div>
       </div>
       <div className=' flex gap-[10px] items-center w-full'>
        <input type="checkbox" name="vehicle ownership cost" id="vehicle ownership cost" className='w-[18px] h-[18px]' />
        <p className=' text-[13px] leading-[13px] font-[400] text-[#24272c]'>Do you want to check vehicle ownership cost?</p>
       </div>
      
    </div>

      </div>}
      {breakpoint>412&&<div className='relative flex flex-col w-[40%] px-[20px]'>
      <div className="flex relative flex-col h-max rounded-[8px] pt-[9px] pl-[17px] bg-[#f2f3f7] items-start w-full">
      <label htmlFor="carSelect" className=" text-[rgba(36,39,44,0.5)] leading-[15px] text-[10px] font-[400]">Select Petrol/Diesel car</label>
      <select 
        id="carSelect"
        className="flex overflow-hidden  appearance-none outline-none border-none z-[10] pl-[4px] flex-col pb-[11.5px] w-full  text-[14px] font-[500] text-sm bg-opacity-0 bg-[white]  text-black bg-gray-100 rounded-lg h-max   "
        aria-label="Select electric car"
      >
        <option value="mahindra">Hyundai Creta</option>
      </select>
      <MdOutlineArrowDropDown className=' absolute z-0 top-[45%] right-[16px]'/>
     
    </div>
      <div className=' text-[10px] leading-[15px] mt-[12px] text-[rgba(36,39,44,0.5)] '>
      Select similar ICE (petrol/diesel) car to compare
      </div>
      <div className=' w-full h-max mt-[30px] flex flex-col gap-[10px]'>
        <div className=' p-[21px] rounded-[10px] border border-[rgba(36,39,44,0.1)] flex flex-col '>
          <div className=' bg-[#93ff89] relative w-full text-[11px] z-10 rounded-[4px] leading-[15px] font-[500] text-[$24272c] py-[7px] px-[10px] flex gap-[8px] items-center '>
          <MdElectricBolt className=' w-[15px] h-[15px]'/>
          <p>73% savings on your fuel cost</p>
          <div className=' bg-[#93ff89] rotate-45 w-[15px] h-[15px] absolute z-[-1] bottom-[-8px] left-[15px]'></div>

          </div>
          <div className=' flex mt-[16px] justify-between w-full'>
            <div className=' relative flex flex-col gap-[3.5px]'>
              <p className=' text-[13px] z-[10] bg-opacity-0 bg-[white] leading-[23px] text-[#24272c] font-[500]'>
              Ev Running Cost
              </p>
              <div className=' absolute z-0 top-[5px] left-[-8px]'>
              <BgLine/>
              </div>
              <div className='text-[18px] leading-[30px] font-[500] text-[#24272c] '>
                Rs. 1.10/Km
              </div>
            
            </div>
            <div className=' relative flex flex-col gap-[3.5px]'>
              <p className=' text-[13px] z-[10] bg-opacity-0 bg-[white] leading-[23px] text-[#24272c] font-[500]'>
              ICE Running Cost
              </p>
              
              <div className='text-[18px] leading-[30px] font-[500] text-[#24272c] '>
                Rs. 4.13/Km
              </div>
            
            </div>
            <div className=' relative flex flex-col gap-[3.5px]'>
              <p className=' text-[13px] z-[10] bg-opacity-0 bg-[white] leading-[23px] text-[#24272c] font-[500]'>
              Saving Per Month
              </p>

              <div className='text-[18px] leading-[30px] font-[500] text-[#24272c] '>
                Rs. 5451
              </div>
            
            </div>
          </div>
          <div className=' flex gap-[6px] mt-[7px] text-[10px] leading-[15px]'>
           <LuFlag className=' w-[12px] h-[12px]'/>
           <p>
            <strong>Drive to Freedom</strong>
            In just 5 years, your EV's cost savings on fuel and maintenance could cover the entire vehicle cost
            </p>

          </div>
        </div>
        <div className='w-full rounded-[8px] py-[8px] px-[15px] flex gap-[13px] bg-[#f2f3f7]'>
          <img src={co2} alt="co2 icon" className=' w-[26px] aspect-square' />
          <p className='text-[12px] leading-[18px] text-[#24272c]'>
          Switch to EV and reduce CO2 emission by an estimated 2,692
          kg/year which is equivalent to planting 122 new trees.
          </p>

        </div>
        <ul className=' list-none text-[11px] leading-[16px] text-[rgba(36,39,44,0.4)]'>
          <li>*EV cost figures are indicative, basis Electric Vehicle’s mileage and electricity cost.</li>
          <li>*You also need to consider other charges like maintenance, service, equipments,
          vehicle cost, insurance and taxes</li>
        </ul>

      </div>
      <div className='w-[300px] absolute top-[25%] left-[83%]'>
        <img src={fuelStation} alt="fuel station image" />

      </div>

      </div>}
      {breakpoint<=412&&
      <div className='w-full  flex flex-col gap-[16px]'>
        <div className=' w-full flex flex-col gap-[20px]'>
        <div className="flex relative flex-col h-max rounded-[8px] pt-[9px] pl-[17px] bg-[#f2f3f7] items-start w-full">
      <label htmlFor="carSelect" className=" text-[rgba(36,39,44,0.5)] leading-[15px] text-[10px] font-[400]">Select electric car</label>
      <select 
        id="carSelect"
        className="flex overflow-hidden  appearance-none outline-none border-none z-[10] pl-[4px] flex-col pb-[11.5px] w-full  text-[14px] font-[500] text-sm bg-opacity-0 bg-[white]  text-black bg-gray-100 rounded-lg h-max   "
        aria-label="Select electric car"
      >
        <option value="mahindra">Mahindra BE 6</option>
      </select>
      <MdOutlineArrowDropDown className=' absolute z-0 top-[45%] right-[16px]'/>
     
    </div>
    <div className="flex relative flex-col h-max rounded-[8px] pt-[9px] pl-[17px] bg-[#f2f3f7] items-start w-full">
      <label htmlFor="carSelect" className=" text-[rgba(36,39,44,0.5)] leading-[15px] text-[10px] font-[400]">Select Petrol/Diesel car</label>
      <select 
        id="carSelect"
        className="flex overflow-hidden  appearance-none outline-none border-none z-[10] pl-[4px] flex-col pb-[11.5px] w-full  text-[14px] font-[500] text-sm bg-opacity-0 bg-[white]  text-black bg-gray-100 rounded-lg h-max   "
        aria-label="Select electric car"
      >
        <option value="mahindra">Hyundai Creta</option>
      </select>
      <MdOutlineArrowDropDown className=' absolute z-0 top-[45%] right-[16px]'/>
     
    </div>
        </div>
        <div className=" flex mt-[15.5px]  flex-col gap-[20px]">
       <div className='flex gap-[12.5px] flex-col w-full '>
       <label htmlFor="kmDriven" className=" w-full flex justify-between items-center text-sm font-medium text-gray-700">
          <p>
          Avg. Drive Per Day
          </p>
          <div className="flex border border-[rgba(36,39,44,0.1)] px-[16px] py-[10px] rounded-lg items-center ml-2">
            <span className="text-sm">{kmDrivenPerDay} Kms</span>
          </div>
        </label>
        <div className="flex relative flex-col items-center gap-[17.25px]  mt-2">
          <input
            type="range"
            min="10"
            max="200"
            step="1"
            value={kmDrivenPerDay}
            onChange={handleKmDrivenChange}
            className="w-[90%] appearance-none bg-opacity-0 bg-[white] h-1 relative z-20  cursor-pointer      rounded-lg  "
            
          />
          <div className=' w-[90%] relative mt-[-17px]'>
          <div className=' w-full h-[4px] rounded-xl top-[-2.5px] bg-[rgba(36,39,44,0.1)] absolute'></div>
          <div className={` bg-[#24272c] h-[4px] rounded-xl absolute top-[-2.5px] z-10 `} style={{width:`${kmw}%`}}></div>
          <div className={` w-[24px] h-[24px] rounded-full flex justify-center items-center bg-[#24272c] z-10 absolute top-[-15px]  `} style={{left:`${kmw-2}%`}}>
            <div className=' w-[16px] h-[16px] rounded-full bg-[white]'>

            </div>
          </div>

          </div>
  
            <div className=" text-[rgba(36,39,44,0.5)] text-[13px] leading-[22.8px] font-[400] flex justify-between w-full mt-2">
                <span>10 Km</span>
                <span>200 Km</span>
          
        </div>
      </div>
       </div>
       <div className='flex gap-[12.5px] flex-col w-full '>
       <label htmlFor="kmDriven" className=" w-full flex justify-between items-center text-sm font-medium text-gray-700">
          <p>
          Electricity Price
          </p>
          <div className="flex border border-[rgba(36,39,44,0.1)] px-[16px] py-[10px] rounded-lg items-center ml-2">
            <span className="text-sm">Rs. {electricityPrice}/unit</span>
          </div>
        </label>
        <div className="flex relative flex-col items-center gap-[17.25px]  mt-2">
          <input
            type="range"
            min="2"
            max="24"
            step="1"
            value={electricityPrice}
            onChange={handleElctricityPriceChange}
            className="w-[90%] appearance-none bg-opacity-0 bg-[white] h-1 relative z-20  cursor-pointer      rounded-lg  "
            
          />
          <div className=' w-[90%] relative mt-[-17px]'>
          <div className=' w-full h-[4px] rounded-xl top-[-2.5px] bg-[rgba(36,39,44,0.1)] absolute'></div>
          <div className={` bg-[#24272c] h-[4px] rounded-xl absolute top-[-2.5px] z-10 `} style={{width:`${pricew}%`}}></div>
          <div className={` w-[24px] h-[24px] rounded-full flex justify-center items-center bg-[#24272c] z-10 absolute top-[-15px]  `} style={{left:`${pricew-2}%`}}>
            <div className=' w-[16px] h-[16px] rounded-full bg-[white]'>

            </div>
          </div>

          </div>
  
            <div className=" text-[rgba(36,39,44,0.5)] text-[13px] leading-[22.8px] font-[400] flex justify-between w-full mt-2">
                <span>Rs. 2/unit</span>
                <span>Rs. 24/unit</span>
          
        </div>
      </div>
       </div>
       <div className=' flex gap-[10px] items-center w-full'>
        <input type="checkbox" name="vehicle ownership cost" id="vehicle ownership cost" className='w-[18px] h-[18px]' />
        <p className=' text-[13px] leading-[13px] font-[400] text-[#24272c]'>Do you want to check vehicle ownership cost?</p>
       </div>
      
    </div>
    <div className=' w-full h-max mt-[30px] flex flex-col gap-[10px]'>
        <div className=' p-[21px] rounded-[10px] border border-[rgba(36,39,44,0.1)] flex flex-col '>
          <div className=' bg-[#93ff89] relative w-full text-[11px] z-10 rounded-[4px] leading-[15px] font-[500] text-[$24272c] py-[7px] px-[10px] flex gap-[8px] items-center '>
          <MdElectricBolt className=' w-[15px] h-[15px]'/>
          <p>73% savings on your fuel cost</p>
          <div className=' bg-[#93ff89] rotate-45 w-[15px] h-[15px] absolute z-[-1] bottom-[-8px] left-[15px]'></div>

          </div>
          <div className=' flex mt-[16px] justify-between w-full'>
            <div className=' relative flex flex-col gap-[3.5px]'>
              <p className=' text-[13px] z-[10] bg-opacity-0 bg-[white] leading-[23px] text-[#24272c] font-[500]'>
              Ev Running Cost
              </p>
              <div className=' absolute z-0 top-[5px] left-[-8px]'>
              <BgLine/>
              </div>
              <div className='text-[18px] leading-[30px] font-[500] text-[#24272c] '>
                Rs. 1.10/Km
              </div>
            
            </div>
            <div className=' relative flex flex-col gap-[3.5px]'>
              <p className=' text-[13px] z-[10] bg-opacity-0 bg-[white] leading-[23px] text-[#24272c] font-[500]'>
              ICE Running Cost
              </p>
              
              <div className='text-[18px] leading-[30px] font-[500] text-[#24272c] '>
                Rs. 4.13/Km
              </div>
            
            </div>
            <div className=' relative flex flex-col gap-[3.5px]'>
              <p className=' text-[13px] z-[10] bg-opacity-0 bg-[white] leading-[23px] text-[#24272c] font-[500]'>
              Saving Per Month
              </p>

              <div className='text-[18px] leading-[30px] font-[500] text-[#24272c] '>
                Rs. 5451
              </div>
            
            </div>
          </div>
          <div className=' flex gap-[6px] mt-[7px] text-[10px] leading-[15px]'>
           <LuFlag className=' w-[12px] h-[12px]'/>
           <p>
            <strong>Drive to Freedom</strong>
            In just 5 years, your EV's cost savings on fuel and maintenance could cover the entire vehicle cost
            </p>

          </div>
        </div>
        <div className='w-full rounded-[8px] py-[8px] px-[15px] flex gap-[13px] bg-[#f2f3f7]'>
          <img src={co2} alt="co2 icon" className=' w-[26px] aspect-square' />
          <p className='text-[12px] leading-[18px] text-[#24272c]'>
          Switch to EV and reduce CO2 emission by an estimated 2,692
          kg/year which is equivalent to planting 122 new trees.
          </p>

        </div>
        <ul className=' list-none text-[11px] leading-[16px] text-[rgba(36,39,44,0.4)]'>
          <li>*EV cost figures are indicative, basis Electric Vehicle’s mileage and electricity cost.</li>
          <li>*You also need to consider other charges like maintenance, service, equipments,
          vehicle cost, insurance and taxes</li>
        </ul>

      </div>
        </div>}
     
      <style>
        {`
        input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: hidden; /* Removes the circle */
      appearance:none;
      width: 20px; /* Size of the invisible thumb */
    height: 20px;
    background: transparent; 
    border: none;
    visibility: hidden; 
  }
        `
}
      </style>
      
    </div>
  );
  
}

export default EVCostCalculator
