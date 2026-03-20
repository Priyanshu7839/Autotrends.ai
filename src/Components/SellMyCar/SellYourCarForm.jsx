import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const SellYourCarForm = () => {
    return (
        <div className="px-[10px] flex flex-col gap-1 justify-center py-[40px] w-full md:w-[80%] rounded-[20px] bg-[#FFFFFF] shadow-md drop-shadow-md">
            <div className="relative z-10 pb-6 md:pb-0  max-md:px-[10px] ">
                <h2
                    className="text-[20px] md:text-[30px] text-[#333846] font-bold pt-2 md:pt-0 text-left md:text-center "
                    id="entercarregno"
                >
                    Enter your car registration
                </h2>
                <div className=" mt-[20px]  ">
                    <div className='flex gap-4 max-md:flex-col justify-center max-md:items-center'>
                        <div className=" ">
                            <TextField id="filled-basic" label="Enter your car no. (DL03-CW-3121)" variant="filled" className='border-none w-[350px] rounded-md' />
                            <p className=" text-[rgba(36, 39, 44, 0.7)] text-sm md:text-sm mt-2 md:mt-0 leading-4  md:leading-4  px-1 md:px-0"  >
                                Just here to check price?
                                <a
                                    href="/used-car-valuation.htm"
                                    className="text-[#007fff]  underline ml-1"
                                >
                                    Check Price
                                </a>
                            </p>
                        </div>
                        <div
                            id="sellYourCar"
                            title="Sell Your Car"
                            className=" text-white font-medium  text-base max-md:w-full  px-[55px]  rounded-md  md:rounded-lg cursor-pointer text-center bg-[#0B66FA]  h-[54px] leading-[49px] shadow-[0px_8px_8px_0px_rgba(243, 70, 83, 0.2)]"
                        >
                            Sell My Car
                        </div>

                    </div>

                </div>
                <div className="mt-4 md:mt-12 flex justify-center items-center">
                    <div className='border border-[#D3E4EF] h-[1px] w-[48%]'></div>
                    <span
                        className="text-[18px] md:text-[28px] font-bold inline-block  bg-white px-2 md:px-3  text-[#90bbd7]"
                    >or</span>
                    <div className='border border-[#D3E4EF] h-[1px] w-[48%]'></div>
                </div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
                <h2 className="text-[20px] md:text-[30px] text-[#333846] font-bold text-center mt-4 md:mt-5">
                    Let's select your car brand
                </h2>
                <div className="mt-2 md:mt-3">
                    <ul className="flex flex-wrap gap-2 max-md:gap-[6px] max-md:justify-center ">
                        <li title="Maruti" className=" w-[23%] md:w-[96px] h-[80px] md:h-[96px]   px-[6px]    my-2  cursor-pointer border-none rounded-md bg-[white] shadow-md flex flex-col justify-center items-center  ">
                            <div className=" w-[70px] md:w-[80px]  h-[36px] flex justify-center items-center ">
                                <img
                                    alt="Sell Maruti car online - Cardekho.com"
                                    decoding="async"
                                    className="imgBrand imageTransition active max-h-[32px]  object-contain "
                                    title="Maruti"
                                    src="https://img.gaadicdn.com/images/mycar/Maruti_logo.png"
                                    loading="eager"
                                    fetchPriority="low"
                                    data-lazy="true"
                                />
                            </div>
                            <span className="text-sm  font-normal text-[#333846]   text-center block " >Maruti</span>
                        </li>
                        <li title="Hyundai" className=" w-[23%] md:w-[96px] h-[80px] md:h-[96px]   px-[6px]    my-2  cursor-pointer border-none  rounded-md bg-[white] shadow-md flex flex-col justify-center items-center ">
                            <div className=" w-[70px] md:w-[80px]  h-[36px] flex justify-center items-center  ">
                                <img
                                    alt="Sell Hyundai car online - Cardekho.com"
                                    decoding="async"
                                    className="imgBrand imageTransition active max-h-[32px]  object-contain "
                                    title="Hyundai"
                                    src="https://img.gaadicdn.com/images/mycar/Hyundai.png"
                                    loading="eager"
                                    fetchPriority="low"
                                    data-lazy="true"
                                />
                            </div>
                            <span className="text-sm  font-normal text-[#333846]  text-center block" >Hyundai</span>
                        </li>
                        <li title="Honda" className=" w-[23%] md:w-[96px] h-[80px] md:h-[96px]   px-[6px]    my-2  cursor-pointer border-none  rounded-md bg-[white] shadow-md flex flex-col justify-center items-center " >
                            <div className=" w-[70px] md:w-[80px]  h-[36px] flex justify-center items-center  ">
                                <img
                                    alt="Sell Honda car online - Cardekho.com"
                                    decoding="async"
                                    className="imgBrand imageTransition active max-h-[32px]  object-contain "
                                    title="Honda"
                                    src="https://img.gaadicdn.com/images/mycar/Honda.png"
                                    loading="eager"
                                    fetchPriority="low"
                                    data-lazy="true"
                                />
                            </div>
                            <span className="text-sm  font-normal text-[#333846]  text-center block" >Honda</span>
                        </li>
                        <li title="Toyota" className=" w-[23%] md:w-[96px] h-[80px] md:h-[96px]   px-[6px]    my-2  cursor-pointer border-none  rounded-md bg-[white] shadow-md flex flex-col justify-center items-center " >
                            <div className=" w-[70px] md:w-[80px]  h-[36px] flex justify-center items-center  ">
                                <img
                                    alt="Sell Toyota car online - Cardekho.com"
                                    decoding="async"
                                    className="imgBrand imageTransition active max-h-[32px]  object-contain "
                                    title="Toyota"
                                    src="https://img.gaadicdn.com/images/mycar/car_Toyota.png"
                                    loading="eager"
                                    fetchPriority="low"
                                    data-lazy="true"
                                />
                            </div>
                            <span className="text-sm  font-normal text-[#333846]  text-center block" >Toyota</span>
                        </li>
                        <li title="Mahindra" className=" w-[23%] md:w-[96px] h-[80px] md:h-[96px]   px-[6px]    my-2  cursor-pointer border-none  rounded-md bg-[white] shadow-md flex flex-col justify-center items-center ">
                            <div className=" w-[70px] md:w-[80px]  h-[36px] flex justify-center items-center  ">
                                <img
                                    alt="Sell Mahindra car online - Cardekho.com"
                                    decoding="async"
                                    className="imgBrand imageTransition active max-h-[32px]  object-contain "
                                    title="Mahindra"
                                    src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mahindra.jpg"
                                    loading="eager"
                                    fetchPriority="low"
                                    data-lazy="true"
                                />
                            </div>
                            <span className="text-sm  font-normal text-[#333846]  text-center block" >Mahindra</span>
                        </li>
                        <li title="Tata" className=" w-[23%] md:w-[96px] h-[80px] md:h-[96px]   px-[6px]    my-2  cursor-pointer border-none  rounded-md bg-[white] shadow-md flex flex-col justify-center items-center " >
                            <div className=" w-[70px] md:w-[80px]  h-[36px] flex justify-center items-center  ">
                                <img
                                    alt="Sell Tata car online - Cardekho.com"
                                    decoding="async"
                                    className="imgBrand imageTransition active max-h-[32px]  object-contain "
                                    title="Tata"
                                    src="https://img.gaadicdn.com/images/mycar/TATA.png"
                                    loading="eager"
                                    fetchPriority="low"
                                    data-lazy="true"
                                />
                            </div>
                            <span className="text-sm  font-normal text-[#333846]  text-center block" >Tata</span>
                        </li>
                        <li title="Ford" className=" w-[23%] md:w-[96px] h-[80px] md:h-[96px]   px-[6px]    my-2  cursor-pointer border-none  rounded-md bg-[white] shadow-md flex flex-col justify-center items-center ">
                            <div className=" w-[70px] md:w-[80px]  h-[36px] flex justify-center items-center  ">
                                <img
                                    alt="Sell Ford  car online - Cardekho.com"
                                    decoding="async"
                                    className="imgBrand imageTransition active max-h-[32px]  object-contain "
                                    title="Ford "
                                    src="https://img.gaadicdn.com/images/mycar/Ford.png"
                                    loading="eager"
                                    fetchPriority="low"
                                    data-lazy="true"
                                />
                            </div>
                            <span className="text-sm  font-normal text-[#333846]  text-center block" >Ford </span>
                        </li>
                        <li className="  w-[23%] md:w-[96px] text-center my-2 md:h-[96px]  cursor-pointer   md:mr-0   rounded-md bg-[white] shadow-md flex flex-col justify-center items-center flex justify-center items-center  ">
                            <span className="text-[#007fff]" >View all brands</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SellYourCarForm;