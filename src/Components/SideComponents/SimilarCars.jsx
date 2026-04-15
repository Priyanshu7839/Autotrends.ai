import React from 'react'
import { KiaCarens,KiaCarnival,KiaSeltos,KiaSonet } from '../../assets/Images'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import { useSelector } from 'react-redux';

const SimilarCars = () => {

      const breakpoint=useScreenResizeValue();
       const details = useSelector((state) => state.CarDetails);


    return (
        <div className='  w-full  drop-shadow-[0_1px_2px_rgba(36,44,39,0.1)] border-[#24272C] border-[1px] rounded-[16px] border-opacity-10  py-[15px]   '>
            <div><h1 className={` px-[15px] text-[#24272C] font-medium pb-[8px] font-2
                                     ${breakpoint>1250 && 'text-[20px]'}
                                     ${breakpoint<=1250 && 'text-[18px]'}
              `}>{details?.similarElectricCars?.title}</h1></div>
                          {breakpoint>1050 && 
                          <div className="pt-[16px] px-[15px] flex flex-col gap-[16px]">
                            {details?.similarElectricCars?.items.map((items,index) => (
                                <div className="flex gap-2" key={index}>
                                  <div>
                                    <img
                                      src={items.image}
                                      alt=""
                                      className="w-[88px] h-[59px] rounded-lg object-cover"
                                    />
                                  </div>
                                  <div className={` text-[#24272C]
                                     ${breakpoint>1250 && 'text-[14px]'}
                                     ${breakpoint<=1250 && 'text-[12px]'}
                                    `}>
                                    <p>{details?.similarElectricCars?.modelName}</p>
                                    <p className="font-semibold">
                                      <span>Rs.</span>{details?.similarElectricCars?.priceRange}
                                    </p>
                                  </div>
                                </div>
                              ))}
                          </div>}
                          {
                            breakpoint<=1050 &&
                            <div className=" w-full overflow-x-scroll px-[15px] " style={{scrollbarWidth:'none'}}>
                                  <div className="pt-[16px] w-max flex  gap-[16px]">
                            {Array(4)
                              .fill("")
                              .map(() => (
                                <div className="flex flex-col gap-2">
                                  <div>
                                    <img
                                      src={KiaSonet}
                                      alt=""
                                      className="w-[280px] h-[180px] aspect-video rounded-lg "
                                    />
                                  </div>
                                  <div className="text-[14px] px-[10px] text-[#24272C]">
                                    <p>Kia Sonet</p>
                                    <p className="font-semibold">
                                      <span>Rs.</span>13.58 - 25.61 Lakh
                                    </p>
                                  </div>
                                </div>
                              ))}
                          </div>
                    
                            </div>
                    
                          }
        </div>
    )
}

export default SimilarCars