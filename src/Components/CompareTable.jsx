import React from 'react'
import compareData from "../MockData/compareData"
import star from "../Asset/greenstar.png"
const CompareTable = () => {
    return (
        <div className='overflow-auto no-scrollbar'>
            <table class="table-auto ">
                <thead >
                    <tr className='flex gap-1'>

                        {compareData.map((singleData, index) => (<th className='w-[162px]   bg-[#FFFFFF]'><div key={index} className='flex flex-col gap-1'>
                            <img src={singleData.image} alt="" className='w-[150px] h-[100px] rounded-xl ' />
                            <p className='text-[#24272C] font-medium text-[14px] text-start'>{singleData.name}</p>
                            <p className='text-[#24272C] font-semibold text-[15px] text-start'>{singleData.price}</p>
                        </div></th>))}

                    </tr>
                </thead>
                <tbody >
                    <tr className='bg-[#D9D9D9] bg-opacity-20 flex gap-1'>
                        {
                            compareData.map((singleData, i) => (<td className='text-[#24272C] font-semibold w-[162px] '>
                                {i === 0 ? "Rating" : ""}
                            </td>))
                        }

                    </tr>
                    <tr className='flex gap-1'>
                        {
                            compareData.map((singleData, i) => (<td className='w-[162px] bg-[#FFFFFF]'>
                                <div className="flex gap-1 text-[14px] items-center "> {}
                                    <p className=''>{singleData.rating}</p>
                                    <img src={star} alt="" className='w-[13px] h-[13px] ' />
                                    <p>{singleData.reviews} {" "}Reviews</p>
                                </div>
                            </td>))
                        }
                    </tr>

                    <tr className='bg-[#D9D9D9] bg-opacity-20 flex gap-1'>
                        {
                            compareData.map((singleData, i) => (<td className='text-[#24272C] font-semibold w-[162px]'>
                                {i === 0 ? "Transmission" : ""}
                            </td>))
                        }

                    </tr>
                    <tr className='flex gap-1'>
                        {
                            compareData.map((singleData, i) => (<td className='w-[162px] bg-[#FFFFFF]'>
                                <div className="flex gap-1 text-[14px] items-center "> {}
                                    <p className=''>{singleData.transmission}</p>
                                </div>
                            </td>))
                        }
                    </tr>

                    <tr className='bg-[#D9D9D9] bg-opacity-20 flex gap-1'>
                        {
                            compareData.map((singleData, i) => (<td className='text-[#24272C] font-semibold w-[162px]'>
                                {i === 0 ? "Engine" : ""}
                            </td>))
                        }

                    </tr>
                    <tr className='flex gap-1'>
                        {
                            compareData.map((singleData, i) => (<td className='w-[162px] bg-[#FFFFFF]'>
                                <div className="flex gap-1 text-[14px] items-center "> {}
                                    <p className=''>{singleData.engine}</p>
                                </div>
                            </td>))
                        }
                    </tr>

                    <tr className='bg-[#D9D9D9] bg-opacity-20 flex gap-1'>
                        {
                            compareData.map((singleData, i) => (<td className='text-[#24272C] font-semibold w-[162px]'>
                                {i === 0 ? "Fuel Type" : ""}
                            </td>))
                        }

                    </tr>
                    <tr className='flex gap-1'>
                        {
                            compareData.map((singleData, i) => (<td className='w-[162px] bg-[#FFFFFF]'>
                                <div className="flex gap-1 text-[14px] items-center "> {}
                                    <p className=''>{singleData.fuelType}</p>
                                </div>
                            </td>))
                        }
                    </tr>

                    <tr className='bg-[#D9D9D9] bg-opacity-20 flex gap-1'>
                        {
                            compareData.map((singleData, i) => (<td className='text-[#24272C] font-semibold w-[162px]'>
                                {i === 0 ? "Power" : ""}
                            </td>))
                        }

                    </tr>
                    <tr className='flex gap-1'>
                        {
                            compareData.map((singleData, i) => (<td className='w-[162px] bg-[#FFFFFF]'>
                                <div className="flex gap-1 text-[14px] items-center "> {}
                                    <p className=''>{singleData.power}</p>
                                </div>
                            </td>))
                        }
                    </tr>
                    
                    <tr className='bg-[#D9D9D9] bg-opacity-20 flex gap-1'>
                        {
                            compareData.map((singleData, i) => (<td className='text-[#24272C] font-semibold w-[162px]'>
                                {i === 0 ? "Mileage" : ""}
                            </td>))
                        }

                    </tr>
                    <tr className='flex gap-1'>
                        {
                            compareData.map((singleData, i) => (<td className='w-[162px] bg-[#FFFFFF]'>
                                <div className="flex gap-1 text-[14px] items-center "> {}
                                    <p className=''>{singleData.mileage}</p>
                                </div>
                            </td>))
                        }
                    </tr>

                    <tr className='bg-[#D9D9D9] bg-opacity-20 flex gap-1'>
                        {
                            compareData.map((singleData, i) => (<td className='text-[#24272C] font-semibold w-[162px]'>
                                {i === 0 ? "Boot Space" : ""}
                            </td>))
                        }

                    </tr>
                    <tr className='flex gap-1'>
                        {
                            compareData.map((singleData, i) => (<td className='w-[162px] bg-[#FFFFFF]'>
                                <div className="flex gap-1 text-[14px] items-center "> {}
                                    <p className=''>{singleData.bootSpace}</p>
                                </div>
                            </td>))
                        }
                    </tr>
                    
                    <tr className='bg-[#D9D9D9] bg-opacity-20 flex gap-1'>
                        {
                            compareData.map((singleData, i) => (<td className='text-[#24272C] font-semibold w-[162px]'>
                                {i === 0 ? "Air Bags" : ""}
                            </td>))
                        }

                    </tr>
                    <tr className='flex gap-1'>
                        {
                            compareData.map((singleData, i) => (<td className='w-[162px] bg-[#FFFFFF]'>
                                <div className="flex gap-1 text-[14px] items-center "> {}
                                    <p className=''>{singleData.airbag}</p>
                                </div>
                            </td>))
                        }
                    </tr>

                    
                    <tr className='flex gap-1'>
                        {
                            compareData.map((singleData, i) => (<td className='w-[162px] bg-[#FFFFFF]'>
                                <div className="flex gap-1 text-[14px] items-center "> {}
                                    <p className=''>{singleData.currentlyViewing}</p>
                                </div>
                            </td>))
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CompareTable