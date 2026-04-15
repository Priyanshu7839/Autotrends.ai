import React, { useEffect, useState } from 'react';

import { DownArrow,Rightarrow } from '../../assets/Images/SVG';
import { useScreenResizeValue } from '../../ScreenSizeFunction';

const BrandCarOwnershipCost = ({Model}) => {
    const [kmDrivenPerDay, setKmDrivenPerDay] = useState(10);
    const [w,setw]=useState(0);

    const breakpoint=useScreenResizeValue();

    useEffect(() => {
        
        const calculateWidth = () => {
            const newWidth = Math.round((kmDrivenPerDay-10)*100/190);
          setw(newWidth);
        };
    
        calculateWidth();
      }, [kmDrivenPerDay]);
   
      useEffect(() => {
        console.log('Width updated:', w);
      }, [w]);

    const handleKmDrivenChange = (event) => {
      setKmDrivenPerDay(event.target.value);
     
    };
  
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
    <div className="bg-[white] flex  py-[8px] justify-between items-center  w-full">
      <div className={`flex flex-col  ${breakpoint<=412?'w-full':'w-[40%]'}`}>
      <div className=" flex flex-col gap-[12.5px]">
        <label htmlFor="engineType" className="block text-[15px] leading-[23px] font-medium text-gray-700">
          Select Engine Type
        </label>
        <div className=' relative w-full'>
        <select id="engineType" style={{ whiteSpace:'' }} className="mt-1 font-medium text-[15px] text-[rgba(36,29,44)] h-[50px] pl-[10px] relative border border-[rgba(36,39,44,0.1)] bg-opacity-0 bg-[white] z-10 appearance-none  block w-full  rounded-xl  focus:ring-indigo-500 focus:border-indigo-500">
          <option value="diesel-manual " className=' font-medium text-[15px] text-[rgba(36,29,44)] w-[50px] flex flex-col'>
            
            Diesel(Manual){'\n'}1493 cc
                
          </option>
          {/* Add other engine options here */}
        </select>
        <DownArrow style={"absolute top-[50%] right-[15px]"}/>
        </div>
       
      </div>
      <div className=" flex mt-[15.5px]  flex-col">
       <div className='flex gap-[12.5px] flex-col w-full '>
       <label htmlFor="kmDriven" className=" w-full flex justify-between items-center text-sm font-medium text-gray-700">
          <p>
          Km Driven Per Day
          </p>
          <div className="flex border border-[rgba(36,39,44,0.1)] px-[8px] py-[10px] rounded-lg items-center ml-2">
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
            className="w-[90%] appearance-none bg-opacity-0 bg-[white] h-1 relative z-10  cursor-pointer     rounded-lg  "
          />
          <div className=' w-[90%] relative mt-[-17px]'>
          <div className=' w-full h-[2px] rounded-xl top-[-2.5px] bg-[rgba(36,39,44,0.1)] absolute'></div>
          <div className={` bg-blue h-[2px] rounded-xl absolute top-[-2.5px] z-10 `} style={{width:`${w}%`}}></div>

          </div>
  
            <div className=" text-[rgba(36,39,44,0.5)] flex justify-between w-full mt-2">
                <span>10 Kms</span>
                <span>200 Kms</span>
          
        </div>
      </div>
       </div>
      <div className=" flex flex-col border border-[rgba(36,39,44,0.1)] rounded-xl pl-[13px] py-[10px]  mt-[16.75px] gap-1">
        <p className="text-[12px] leading-[18px] text-[rgba(36,39,44)] font-semibold">Your Monthly Fuel Cost</p>
        <p className="text-[20px] leading-[23px] text-[rgba(36,39,44)] font-bold">Rs. {calculateFuelCost()}*</p>
      </div>
      <button className=' text-blue text-[15px] font-[700] flex gap-[8px] mb-[10px] mt-[12px] items-center'>
           View
            {/* {Model.name.split(" ")[1]}  */} Mileage <Rightarrow/>
                      </button>
    </div>

      </div>
      {breakpoint>412 && <div className=' w-[45%] h-max'>
        <img src={'https://stimg.cardekho.com/pwa/img/ownership-vector.png'} alt="" />
      </div>}
      
    </div>
  );
  
}

export default BrandCarOwnershipCost