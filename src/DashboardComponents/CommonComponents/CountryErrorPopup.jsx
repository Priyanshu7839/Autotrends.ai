import React from 'react'
import CountryRestricted from '../../assets/Images/CountryRestricted.png'

const CountryErrorPopup = ({ showCountryError, setShowCountryError }) => {
  return (
     <div
      className={`absolute w-full h-full bg-[rgba(0,0,0,0.7)] items-center justify-center z-[999]
    ${showCountryError ? "flex" : "hidden"}
    `}
    >
        <div className="w-[520px] bg-[white] h-[280px] rounded-[8px]  p-[3rem] py-[3rem] flex items-start justify-start relative border-[1px] border-[#cfcfd7]">
                                  <div className="flex flex-col gap-[1rem]">
                                    <div>
                                     <h1 className=" text-[2.5rem] font-2">Country Switching </h1>
                                   <h1 className=" text-[2.5rem] font-2 text-[#0b85ff] leading-10">Restricted </h1>
                                   </div>
                                  <div className="flex items-center justify-between ">
                                    <p className="font-2-book w-[100%]">Available to Autotrends Premium only,<br/> by invitation</p>
     
                                  </div>

                                  <div className='w-full flex items-center   justify-center'>
                                    <button 
                                    onClick={()=>{setShowCountryError(false)}}
                                    className='w-fit py-[.25rem] px-[.5rem] border-[1px] border-[#0b85ff] rounded-[8px] text-[.875rem] bg-[#0b85ff] text-[white] font-2 ml-[3rem]' >
                                      Cancel
                                    </button>
                                    
                                  </div>
                                  </div>
                                   <img src={CountryRestricted} alt="" className="w-[230px] absolute bottom-[-8%] right-1"/>
     
                                  <div className="px-[.5rem] py-[.15rem] rounded-[8px] border-[3px] border-[#0b85ff]  font-2 w-fit absolute top-[10%] right-10 rotate-[10deg] text-[.875rem] font-bold">
                                   Premium
                                  </div>
                             </div>
    </div>
  )
}

export default CountryErrorPopup