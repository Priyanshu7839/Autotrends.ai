import React from 'react'

const CarImages = ({props}) => {
    const {name,image:{i1,i2,i3}}=props;

  return (
    <div className='  h-max w-[280px] flex flex-col rounded-[8px]'>
        <div className=' w-full flex flex-col rounded-[8px] gap-[4px]'>
            <div className=' w-full rounded-[8px] h-[196px] bg-cover bg-center bg-no-repeat ' style={{backgroundImage:`url(${i1})`}}></div>
            <div className=' w-full flex gap-[4px] h-[97px]'>
                <div className=' w-[50%] rounded-[8px] h-full bg-cover bg-center bg-no-repeat ' style={{backgroundImage:`url(${i2})`}}></div>
                <div className=' w-[50%] rounded-[8px] h-full bg-cover bg-center bg-no-repeat ' style={{backgroundImage:`url(${i3})`}}></div>
            </div>
        </div>
        <div className=' pt-[15px]  flex flex-col gap-[10px] '>
            <p className=' text-[15px] leading-[22.5px] font-[700] text-[#24272c]'>{name}</p>
            <button className=' mt-[16px] flex gap-1 text-[14px] border-2 py-[10px] border-blue rounded-xl text-[#0085FF] font-semibold items-center justify-center'>
              View {name} Images
                                        
                                    </button>
        </div>
      
    </div>
  )
}

export default CarImages
