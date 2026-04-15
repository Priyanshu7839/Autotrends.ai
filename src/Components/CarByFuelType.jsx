import React from 'react';
import CarByFuelTypeData from '../MockData/CarByFuelTypeData';

const CarByFuelType = ({heading}) => {
    return (
        <div className='flex flex-col gap-[20px]'>    
            <h1 className='mt-[25px] text-[20px] font-semibold'>{heading}</h1>
            <div className='flex gap-[20px]'>
                {
                    CarByFuelTypeData.map((fuelType,index)=>{
                        return (
                            <div key={fuelType.id} className='flex flex-col gap-4 justify-center items-center bg-[white] border-[#D3E4EF] border-[1px] rounded-[10px] px-[75px] py-[50px]'>
                                <img src={fuelType.image} alt="" className='h-[45px] w-[40px]' />
                                <p className='text-[14px] font-regular'>{fuelType.fuelType}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CarByFuelType