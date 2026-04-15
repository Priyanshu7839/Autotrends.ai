import React from 'react'

const ComparisonSection3_Subsection1 = () => {
  return (
   <div className='flex flex-col gap-[20px]'>
    {
        Array(4).fill().map((_,index)=>{
            return(
                <div className='border-[1px] border-[#24272c1a]  rounded-[16px] overflow-hidden drop-shadow-[0_1px_2px_#24272c1a]'>
                    <table className="table-auto w-full text-center px-[12px] " >
                        <thead className="bg-[#FFFFFF]">
                            <tr className="font-1 font-bold text-sm text-color-9-50">
                                {["Fuel Type", "Transmission", "ARAI Mileage"].map((heading) => (
                                    <th key={heading} className="py-[17px]">{heading}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {Array(4)
                                .fill({
                                    fuel: "Diesel",
                                    transmission: "Manual",
                                    mileage: "20.7 kmpl",
                                   
                                })
                                .map((row, index) => (
                                    <tr
                                        key={index}
                                        className={`font-1 text-sm text-color-9-70 
                                    ${index % 2 === 0 ? 'bg-[#FAFAFA]' : 'bg-[#FFFFFF]'}
                              `}
                                    >
                                        {Object.values(row).map((value, i) => (
                                            <td key={i} className={`px-[1rem] py-[17px] ${i === 0 && 'border-r-[1px] border-[#24272c1a] w-[15%] '}`}>{value}</td>
                                        ))}
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            )
        })
    }
   </div>
  )
}

export default ComparisonSection3_Subsection1