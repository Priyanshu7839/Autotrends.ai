import React from 'react'

const LocationCards = ({city}) => {
  return (
    <div  className={`  text-[#24272c] px-[10px] py-[17px] gap-[5px] bg-[white] flex flex-col border border-[rgba(36,39,44,0.1)] items-center rounded-xl hover:shadow-[0px_1px_3px_rgba(36,39,44,0.1),0px_10px_8px_rgba(140,142,146,0.1)]  `}>
                  <img src={city.image} alt="" className=' w-full h-[90px]'   />
                  <div className=' w-full flex flex-col items-center'>
                   <p className=' text-[12px] leading-[21px] text-[rgba(36,39,44,0.5)]'>Used Cars in</p>
                   <p className=' text-[16px] leading-[21px]'>{city.name.charAt(0).toUpperCase()+city.name.slice(1)}</p>
                  </div>
                  </div>
  )
}

export default LocationCards
