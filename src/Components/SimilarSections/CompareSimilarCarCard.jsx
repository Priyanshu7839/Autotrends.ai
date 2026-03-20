import React from 'react'

const VersusSymbol = ({ className }) => {
    return (
      <div
        className={`w-[50px] h-[50px] border-[#0F62EB] border-[1px] rounded-full bg-[#E4E4E4] flex items-center justify-center ${className}`}
      >
        <div className="w-[35px] h-[35px] bg-[#0B66FA] font-1 font-bold text-[1.25rem] flex items-center justify-center text-color-1 rounded-full">
          Vs
        </div>
      </div>
    );
  };


const CompareSimilarCarCard = ({title,img1,img2,name1,name2,model1,model2,priceRange1,priceRange2}) => {
  return img1&&(
    <div className='flex flex-col w-fit border-[1px] border-[#24272c1a] rounded-[8px] overflow-hidden' >
        <VersusSymbol className='absolute left-[50%] translate-x-[-50%] top-[35%]'/>
        <div className='flex font-1 w-fit '>
            <div>
                <div className='w-[195px] h-[130px] '>
                    <img src={img1} alt="" />
                </div>
                <div className='flex flex-col p-[1rem]'>
                    <p className='text-[.875rem] text-color-21'>{name1}</p>
                    <h1 className='text-color-9 font-medium text-[1rem] '>{model1}</h1>
                    <p className='text-color-9 text-[.875rem] ] '>INR {priceRange1} <sup>*</sup> </p>
                </div>
            </div>
            <div>
                <div className='w-[195px] h-[130px] '>
                    <img src={img2} alt="" />
                </div>
                <div className='flex flex-col p-[1rem] pl-0'>
                    <p className='text-[.875rem] text-color-21'>{name2}</p>
                    <h1 className='text-color-9 font-medium text-[1rem] whitespace-nowrap'>{model2}</h1>
                    <p className='text-color-9 text-[.875rem] '>INR {priceRange2} <sup>*</sup></p>
                </div>
            </div>
        </div>
        <div className='pt-0 p-[1rem]'>
            <button className='flex items-center justify-center text-color-7 border-[1px] border-[#0b66fa] rounded-[8px] py-[.5rem] px-[1rem] w-full font-medium text-[1rem]'>
               {title}
            </button>
        </div>
    </div>
  )
}

export default CompareSimilarCarCard