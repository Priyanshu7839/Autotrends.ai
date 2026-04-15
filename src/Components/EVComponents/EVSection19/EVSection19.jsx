import React, { useState } from 'react'
import { faqs } from '../../../MockData'
import { Minus, PlusIcon, Rightarrow } from '../../../assets/Images/SVG';
import { evfaqsimage } from '../../../assets/Images';
import { useScreenResizeValue } from '../../../ScreenSizeFunction';

const EVSection19 = () => {


        
        const [openIndex,setOpenIndex]=useState(-1);
        const breakpoint=useScreenResizeValue();
    
        const toggleAccordion = (index) => {
          setOpenIndex(openIndex === index? -1 : index);
        };

  return (
    <div className=' w-full flex mt-[100px] '>
         
            <div className={`${breakpoint<=412?' flex flex-col w-full':'flex  w-full'} `} >
                <div className={` ${breakpoint<=412?' w-full flex flex-col px-[20px] gap-[10px] ':' w-[70%] flex flex-col  px-[20px]'}`}>
                <h3 className=" text-[32px] font-[600] leading-[38.8px] text-[#24272c] ">
         FAQs on Electric Cars
            </h3>
            {breakpoint<=412 && <div className=' w-full  flex justify-center items-center'>
                    <img src="https://stimg.cardekho.com/pwa/img/ev/FAQ-banne-mobi.svg" alt="" className=' w-full ' />
                </div>}
             <div className=" w-full ">
                                 
                                  <div className=" w-full flex flex-col">
                                    {faqs.map((item, index) => (index<5&&
                                      <div
                                        key={index}
                                        className={`rounded-lg overflow-hidden py-[19px] flex gap-[16px] ${(index!==faqs.length-1)?'border-b-[2px] border-[rgba(36,39,44,0.1)]':''}`}
                                      >
                                        
                                        <div className=' w-full flex flex-col'>
                                        <button
                                          onClick={() => toggleAccordion(index)}
                                          className={`w-full flex justify-between items-center  bg-gray-100 hover:bg-gray-200 text-left `}
                                        >
                                           
                                            
                                          <div className=" flex gap-2">
                                           
                                            <span className="font-medium">{'Q ) '}{item}</span>
                                          </div>
                                            
                                             
                                        
                                          {openIndex===index &&<Minus/>}
                                          {
                                            openIndex!== index && <PlusIcon />
                                          }
                                        </button>
                                        {openIndex === index && (
                                          <div className="py-[4px]  text-[#6f6f6f]  bg-white text-gray-600 ">
                                           
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
                {breakpoint>412 && <div className=' w-[30%] px-[20px] flex items-center'>
                    <img src={evfaqsimage} alt="" />
                </div>}

            </div>
      
    </div>
  )
}

export default EVSection19
