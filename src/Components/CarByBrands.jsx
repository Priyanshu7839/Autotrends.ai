import React from 'react'
import CarByBrandsData from "../MockData/CarByBrandsData"

const CarByBrands = ({heading}) => {
    return (
        <div className='flex flex-col gap-[20px] relative  py-[15px]'>
            <div className='bg-[#F2F3F7] h-full w-[50%] absolute z-[-10] top-0 left-[25%] '></div>
            <h1 className='mt-[15px] text-[20px] font-semibold text-center'>{heading}</h1>
            <div className=' gap-[20px] grid grid-cols-6'>
                {
                    CarByBrandsData.map((carBrand, index) => {
                        return (
                            <div key={carBrand.id} className='col-span-1 flex flex-col gap-2 justify-center items-center shadow-sm drop-shadow-md rounded-[10px] bg-[white] py-[16px]'>
                                <img src={carBrand.brandImage} alt="" className='' />
                                <p className='text-[14px] font-regular'>{carBrand.brandName}</p>
                            </div>
                        )
                    })
                }
            </div>
            <h1 className='text-[16px] font-medium underline text-center'>View All Brands</h1>
        </div>
    )
}

export default CarByBrands