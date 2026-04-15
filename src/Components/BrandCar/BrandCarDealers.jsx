import React from 'react'
import { dealers } from '../../MockData/CarsModels'
import { IoMdCall } from "react-icons/io";
const BrandCarDealers = () => {
  return (
    <div className=' w-full overflow-x-scroll mt-[14px]' style={{scrollbarWidth:'none'}}>
        <div className=' w-max flex gap-[10px]'>
            {
                dealers.map((dealer,index)=>{
                    return <div key={index} className=' text-[#24272c] flex flex-col gap-[34px] w-[278px] p-[17px] h-max rounded-xl border border-[rgba(36,39,44,0.1)]'>
                        <div className=' flex flex-col gap-[4px]'>
                            <p className=' text-[15px] leading-[22.5px] font-[500] '>{dealer.name}</p>
                            <p className=' text-[13px] leading-[18px] text-[rgba(36,39,44,0.7)]'>{ dealer.address}</p>
                            </div> 
                            <div className=' flex justify-between font-[600]'>
                                <button className='px-[12px] text-blue text-[14px] leading-[39px] rounded-xl border-2 border-blue '>
                                    Contact Dealer

                                </button>
                                <button className=' flex items-center  gap-[8px] px-[12px] text-[14px] leading-[39px] rounded-xl border-2 border-[rgba(36,39,44,0.1)] '>
                                   <IoMdCall class/> Call Dealer

                                </button>
                            </div>

                    </div>
                })
            }

        </div>
      
    </div>
  )
}

export default BrandCarDealers
