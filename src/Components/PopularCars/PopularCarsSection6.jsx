import React, { useState } from 'react'
import { faqs } from '../../MockData'
import { Minus, PlusIcon, Rightarrow } from '../../assets/Images/SVG';


const PopularCarsSection6 = () => {



  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className=' w-full flex   pt-[18px] border border-[rgba(36,39,44,0.1)]  rounded-[8px]'>


      <div className=' w-full  flex flex-col gap-[32px] px-[20px]'>
        <h3 className=" text-[28px] md:text-[32px] font-[600] md:leading-[38.8px] text-[#24272c] ">
          FAQs on Popular Cars
        </h3>
        <div className=" w-full ">

          <div className=" w-full flex flex-col">
            {faqs.map((item, index) => (index < 5 &&
              <div
                key={index}
                className={` overflow-hidden py-[19px] flex gap-[16px] ${(index !== faqs.length - 1) ? 'border-b-[2px] border-[rgba(36,39,44,0.1)]' : ''}`}
              >

                <div className=' w-full flex flex-col'>
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`w-full flex justify-between items-center  bg-gray-100 hover:bg-gray-200 text-left `}
                  >


                    <div className=" flex gap-2">

                      <span className="font-medium">{'Q)'}</span>
                      <span className=' font-medium'>{item}</span>
                    </div>



                    {openIndex === index && <Minus />}
                    {
                      openIndex !== index && <PlusIcon />
                    }
                  </button>
                  {openIndex === index && (
                    <div className="py-[4px]  text-[#6f6f6f]  bg-[white] text-gray-600 ">

                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam aspernatur velit nulla omnis dolore natus vel eum laborum fugit reprehenderit, eos, iusto accusantium consequuntur rem porro obcaecati assumenda corporis.

                    </div>
                  )}

                </div>


              </div>
            ))}
          </div>
          <button className=" text-blue text-[15px] mt-[8px] font-[700] w-max flex gap-[8px] mb-[10px]  items-center">
            Read More <Rightarrow />
          </button>
        </div>

      </div>



    </div>
  )
}

export default PopularCarsSection6
