import React from 'react'

const BrandCarHighlights = (highlights) => {


  return (
    <div className=' w-full rounded-xl px-[10px] border-[1px] border-[rgba(36,39,44,0.1)]'>
        <table className=' w-full   '>
          
           {highlights && highlights.highlights &&(
  <tbody className="text-[#24272c] text-opacity-50">
    {Object.entries(highlights.highlights).map(([key, value],index) => (
      <tr key={key}>
        <td className={`border-[rgba(36,39,44,0.1)] border-t-[1.5px] border-b-[1.5px] border-r-[1.5px] pl-[10px] py-[10px]
         
          `}>
          {key}
        </td>
        <td className="border-[rgba(36,39,44,0.1)] border-t-[1.5px] border-b-[1.5px] border-l-[1.5px] pl-[10px] py-[10px]">
          {value}
        </td>
      </tr>
    ))}
  </tbody>
)}
            

        </table>
      
    </div>
  )
}

export default BrandCarHighlights
