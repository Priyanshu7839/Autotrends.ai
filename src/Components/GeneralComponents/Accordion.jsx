import React, { useState } from "react";
import { useScreenResizeValue } from "../../ScreenSizeFunction";


export default function Accordion({faq,qna}) {
  const [openIndex, setOpenIndex] = useState(null);
  const breakpoint= useScreenResizeValue();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" w-full">
     
      <div className=" w-full flex flex-col">
        {faq && 
        faq.map((fq) => (
          <div
            key={fq.id}
            className=" rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(fq.id)}
              className={`w-full flex justify-between gap-[20px] items-start p-4 bg-gray-100 hover:bg-gray-200 text-left ${(fq.id!==faq.length-1&&openIndex!==fq.id)?'border-b-[1px] border-[rgba(36,39,44,0.1)]':''}`}
            >
              <div className=" flex items-start justify-center gap-2">
                {/* <span className={`font-normal ${breakpoint<=412?'text-[15px]':'text-[17px]'} font-1 text-color-9`}>{'Q)'}</span> */}
                <span className={`font-normal text-[14px] font-1 text-color-9`}>{fq.question}</span>
              </div>
            
              <span
                className={`text-xl transition-transform ${
                  openIndex === fq.id ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>
            {openIndex === fq.id && (
              <div className={`py-[4px] text-[#6f6f6f] ${breakpoint<=412?'text-[13px]':'text-[15px]'}  px-[28px] bg-white text-gray-600 border-b-[1px] border-[rgba(36,39,44,0.1)]`}>
                {/* Replace this with actual FAQ content */}
               {fq.answer}
              </div>
            )}
          </div>
        ))}
        {qna && 
        qna.map((qa,index) => (
          <div
            key={index}
            className=" rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full flex justify-between gap-[20px] items-start p-4 bg-gray-100 hover:bg-gray-200 text-left ${(index!==qna.length-1&&openIndex!==index)?'border-b-[1px] border-[rgba(36,39,44,0.1)]':''}`}
            >
              <div className=" flex items-start justify-center gap-2">
                {/* <span className={`font-normal ${breakpoint<=412?'text-[15px]':'text-[17px]'} font-1 text-color-9`}>{'Q)'}</span> */}
                <span className={`font-normal text-[14px] font-1 text-color-9`}>{qa?.question?.title}</span>
              </div>
            
              <span
                className={`text-xl transition-transform ${
                  openIndex === index ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>
            {openIndex === index && (
              <div className={`py-[4px] text-[#6f6f6f] ${breakpoint<=412?'text-[13px]':'text-[15px]'}  px-[28px] bg-white text-gray-600 border-b-[1px] border-[rgba(36,39,44,0.1)]`}>
                {/* Replace this with actual FAQ content */}
               {qa?.answer[0]?.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}