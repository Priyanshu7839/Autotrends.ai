import React, { useState } from 'react'
import Menu from '../GeneralComponents/Menu';
import { Rightarrow } from '../../assets/Images/SVG';
import { CarNews } from '../../MockData';
import { useScreenResizeValue } from '../../ScreenSizeFunction';

const PopularBrandsSection12 = () => {


    const [category,setcategory]=useState("Expert Reviews");

    const breakpoint=useScreenResizeValue();

  return (
    <div className=' w-full relative flex flex-col gap-[8px] pt-[18px]   rounded-xl border border-[rgba(36,39,44,0.1)] shadow-md shadow-[rgba(36,39,44,0.1)]'>
          <h3 className=' text-[23px] px-[21px] leading-[33.2px] font-[500]'>Know More to Choose Better</h3>
          <div className=' w-full pl-[21px]'>
          <Menu menuItems={["Expert Reviews","Videos","Featured Stories"]} item={category} setitem={setcategory}/>
          </div>
           
         <div className={` ${breakpoint<=412?' w-full overflow-x-scroll px-[21px]':' w-full px-[10px] grid grid-cols-2 gap-x-[20px] gap-y-[20px]'}`} style={{scrollbarWidth:'none'}}>
                     {breakpoint>412 &&
                       CarNews.map((item,index)=>{
                           return  <div key={index}   className={` ${breakpoint<=412?'flex-col h-max':'h-[197px]'} flex w-full   border-[rgba(36,39,44,0.1)] bg-[white]  border  drop-shadow-[0px_1px_2px_rgba(36,39,44,0.05)]     rounded-xl `} >
                                      <div className={`  ${breakpoint<=412?' w-full h-[200px] rounded-xl':'w-[40%] rounded-l-xl'}          `} style={{backgroundImage:`url(${item.thumbnail})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
                                       
                                      </div>
                                      <div className={` w-[60%] px-[20px] pt-[16px] pb-[11px]  flex flex-col justify-between  `}>
                                       <div className=' flex flex-col w-full gap-[10px] h-max   overflow-hidden '>
                                       <p className=' text-[15px] leading-[22.5px] w-full  text-[#24272c] font-[500]  overflow-ellipsis line-clamp-2'>{item.title}</p>
                                       <p className=' text-[14px] font-[400] leading-[19.5px] w-full  text-[#24272c] overflow-ellipsis text-opacity-50 line-clamp-3  '>{item.description} </p>
                                      
                           
                                       </div>
                                       <div className=' flex items-start font-medium text-[#24272c] leading-[16.5px] text-opacity-50 gap-[12px] text-[13px]'>
                                          <div className=' w-[36px] text-[#24272c] text-opacity-70 text-[20px] leading-[30px] h-[36px] rounded-full bg-[#fafafa] flex justify-center items-center'>
                                             {
                                                item.source.charAt(0).toUpperCase()
                                             }
                                          </div>
                                          <div className=' flex flex-col  gap-[8px]'>
                                            <p className=' text-[13px] leading-[18px] text-[#24272c]'>
                                                {item.source}
                                            </p>
                                            <p className=' text-[11px] leading-[16.5px] text-[#24272c] text-opacity-70'>
                                                {item.date}
                                            </p>
                                          </div>
                                       </div>
                                         
                                          </div>
                                  </div>
                       })
                     }
                     {breakpoint<=412 &&
                     <div className=' w-max flex gap-[20px] '>
                        {
                          CarNews.map((item,index)=>{
                            return  <div key={index}   className={` ${breakpoint<=412?'flex-col h-max w-[320px]':'h-[197px]  w-full'} flex   border-[rgba(36,39,44,0.1)] bg-[white]  border  drop-shadow-[0px_1px_2px_rgba(36,39,44,0.05)]     rounded-xl `} >
                                       <div className={`  ${breakpoint<=412?' w-full h-[200px] rounded-xl':'w-[40%] rounded-l-xl'}          `} style={{backgroundImage:`url(${item.thumbnail})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
                                        
                                       </div>
                                       <div className={` w-full px-[20px] pt-[16px] pb-[11px]  flex flex-col justify-between  `}>
                                        <div className=' flex flex-col w-full gap-[10px] h-max   overflow-hidden '>
                                        <p className=' text-[15px] leading-[22.5px] w-full  text-[#24272c] font-[500]  overflow-ellipsis line-clamp-2'>{item.title}</p>
                                        <p className=' text-[14px] font-[400] leading-[19.5px] w-full  text-[#24272c] overflow-ellipsis text-opacity-50 line-clamp-3  '>{item.description} </p>
                                       
                            
                                        </div>
                                        <div className=' flex items-start font-medium text-[#24272c]  mt-[20px] leading-[16.5px] text-opacity-50 gap-[12px] text-[13px]'>
                                           <div className=' w-[36px] text-[#24272c] text-opacity-70 text-[20px] leading-[30px] h-[36px] rounded-full bg-[#fafafa] flex justify-center items-center'>
                                              {
                                                 item.source.charAt(0).toUpperCase()
                                              }
                                           </div>
                                           <div className=' flex flex-col  gap-[8px]'>
                                             <p className=' text-[13px] leading-[18px] text-[#24272c]'>
                                                 {item.source}
                                             </p>
                                             <p className=' text-[11px] leading-[16.5px] text-[#24272c] text-opacity-70'>
                                                 {item.date}
                                             </p>
                                           </div>
                                        </div>
                                          
                                           </div>
                                   </div>
                        })
                        }
                     </div>
                         
                    }
                     
        
               </div>
                    <button className=' px-[21px] text-blue text-[15px] font-[700] flex gap-[8px] mb-[10px] mt-[10px] items-center'>
            View All {category} <Rightarrow/>
                      </button>
         
        </div>
  )
}

export default PopularBrandsSection12
