import React, { useEffect, useState } from 'react'
import LendingPartnersData from '../../MockData/NewCarLoan/LendingPartnersData'
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';
const LendingPartners = ({bg=true,cardBg=false}) => {
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(6);

  const [screenWidth,setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    if(screenWidth<420 ){
      setMaxIndex(4);
    }else{
      setMaxIndex(6);
    }
  },[screenWidth,setScreenWidth])
  return (
    <div className={`w-full ${bg?"bg-[#EBF8FF]":""} px-[10px] md:px-[150px] py-[40px] md:py-[80px] `}>
      <div className='flex justify-between'>
        <h2 className="text-[28px] md:text-[36px] font-semibold mb-5 md:mb-8 ">
          Lending  <span className="text-[#57BE88] ">Partners</span>
        </h2>
        <div className='flex gap-2 '>
          <button onClick={() => {minIndex>0?(setMinIndex(minIndex-1)):(setMinIndex(0)); minIndex>0?(setMaxIndex(maxIndex-1)):(setMaxIndex(maxIndex))}} className={`font-bold rounded-full h-[30px] w-[30px] md:h-[46px] md:w-[46px]  ${minIndex===0?"bg-[#DDDDDD]":"bg-[#59BD88]"} flex justify-center items-center`}>{<IoMdArrowBack size={20} className='text-[white]'/>}</button>
          <button onClick={() => {maxIndex<(LendingPartnersData.length-1)?(setMaxIndex(maxIndex+1)):(setMaxIndex(maxIndex)); maxIndex<(LendingPartnersData.length-1)?(setMinIndex(minIndex+1)):(setMinIndex(minIndex))}} className={`font-bold rounded-full h-[30px] w-[30px] md:h-[46px] md:w-[46px] ${maxIndex===(LendingPartnersData.length-1)?"bg-[#DDDDDD]":"bg-[#59BD88]"} flex justify-center items-center`}>{<IoMdArrowForward size={20} className='text-[white]' />}</button>
        </div>
      </div>
      <div className='flex gap-2 md:gap-3'>
        {
          LendingPartnersData.map((partner, index) => {
            return (
              index>=minIndex && index<maxIndex && <div key={partner.id} className={`w-[90px] md:w-[175px] h-[45px] md:h-[90px] flex justify-center items-center ${cardBg?"bg-[#F5F8FE]":"bg-[white]"} rounded-[12px] md:rounded-[20px] overflow-clip`}>
                <img src={partner.image} alt="" className=' mix-blend-multiply max-md:w-[80px] ' />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default LendingPartners