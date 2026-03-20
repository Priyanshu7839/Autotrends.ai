import React from 'react'

const BrandCarAlternativesCompare = ({CarModels,price=true,variant=false}) => {
    const userReview=false;
  return (
    <div className=' w-[285px] h-[350px] pb-2 flex flex-col gap-2 justify-center shadow-sm shadow-[rgba(36,39,44,0.1)] border-[#24272C] border-opacity-10  border rounded-xl '>
                                <div className='flex w-full h-[60%] rounded-t-xl  ' style={{backgroundImage: `url(${CarModels[1].image})`,backgroundSize:'cover',backgroundPosition:'center'}} >
                                    
                                </div>
                                <div className='flex flex-col gap-[0.25px] pb-[10px] px-[15px] font-semibold  '>
                                    <p className='px-[2px] text-[17px] text-[#24272C] '>Hyundai Creta</p>
                                    <p className='px-[2px] text-[17px] text-[#24272C]  '><span className='text-[15px]'>Rs</span>11 - 20.30 Lakh<sup>*</sup></p>
                                    {userReview && <p className='text-[14px] flex  items-baseline gap-1 '><span className='font-bold'>4.5</span><img src={star} alt="" className='w-[14px] h-[14px] ' />315 User reviews</p>
                                    }
                                    <div className='w-full mt-[16px] '>
                                        <button className="w-full text-[#0B66FA] border-[1px] border-[#0B66FA] text-[16px] font-bold px-auto py-[12px] rounded-md " >{(price)?'Hyundai Creta Images':(variant)?'Seltos vs Creta':''}</button>
                                    </div>
    
                                    {(price)&&<button className=' mt-[15px] flex gap-1  text-[14px] text-[#0085FF] font-semibold items-center justify-center'>
                                        Seltos Vs Creta
                                    </button>}
    
                                </div>
    
                            </div>
  )
}

export default BrandCarAlternativesCompare
