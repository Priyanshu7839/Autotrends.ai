import React from 'react'
import LoanInformationData from '../../MockData/NewCarLoan/LoanInformationData'

const LoanInformation = () => {
    return (
        <div>
            <h2 className="text-[28px] md:text-[36px] font-semibold mb-8 text-center">
                <span className="text-[#57BE88] ">Things to know while availing </span>a new car loan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4  max-md:place-items-center gap-[24px]">
                {LoanInformationData.map((item) => (
                    <div key={item.id} className="bg-[#EBF8FF] max-md:w-[60%] rounded-[20px] flex flex-col gap-[20px] md:gap-[40px] px-[16px] pt-[32px] pb-[16px] items-center">
                        <img src={item.image} alt={item.topic} className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]" />
                        <div className='bg-[white] h-full rounded-[20px] flex flex-col gap-1 items-center px-[10px] py-[10px] md:px-[21px] md:py-[24px] '>
                            <h3 className="text-[18px] md:text-[24px] font-medium text-center">{item.topic}</h3>
                            <p className="text-[10px] md:text-[14px] text-gray-700 text-center">{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LoanInformation