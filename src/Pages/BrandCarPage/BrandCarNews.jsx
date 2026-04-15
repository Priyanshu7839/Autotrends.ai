import React, { useState } from 'react'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import { BrandCarNewsCard, PopularSUV, SimilarCars, TrendingCars,Pagination, Helpful } from '../../components';
import { news1, roadTestKiaSeltos } from '../../assets/Images';
import { Rightarrow } from '../../assets/Images/SVG';

const BrandCarNews = () => {

const [currentPage,setcurrentPage]=useState(1);
const totalPages=25;
const onPageChange=(page)=>{
setcurrentPage(page);
}

    const breakpoint=useScreenResizeValue();
    const news={
        image:news1,
        title:"Kia Syros vs Kia Sonet And Kia Seltos: Specifications Compared",
        description:"The Kia Syros offers more convenience features and extra boot space compared to the Sonet and Seltos",
        author:"Shreyash",
        date:"Dec 22, 2024"
    }


  return (
    <div className='w-full flex justify-center  '>
        <div className={`${breakpoint<=1440?'w-[84%]':'w-[1200px]'} pt-[31px]  flex justify-center  `}>

            <div className=' w-[76%] px-[10px] flex flex-col gap-[20px] '>
                {
                    Array(10).fill(news).map((item,index)=><BrandCarNewsCard key={index} prop={item}/>)
                }

                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
                <p className=' text-[13px] leading-[19.5px] text-[#24272c] font-[500]'>
                    Page {currentPage} of {totalPages} Pages
                </p>
                <div className='mt-[20px]  px-[20px] py-[20px]   border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-3'>
                                    <h1 className='text-[24px] font-[500]'>{"Kia Seltos"} Road Test</h1>
                                    <div className=' border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 overflow-clip'>
                                        <div className='flex gap-4'>
                                            <div className='h-[195px] w-[400px] bg-cover bg-center bg-no-repeat ' style={{backgroundImage:`url(${roadTestKiaSeltos})`}}>
                                               </div>
                                            <div className='py-[20px] px-[10px] flex flex-col gap-2'>
                                                <p className='text-[15px] text-[#24272C]  font-[500]'>2023 Kia Seltos Review: Setting The Benchmark?</p>
                                                <p className='text-[14px] text-[#24272C] text-opacity-70 font-[500]'>The facelifted Kia Seltos builds and improves on what was already an attractive package with
                                                even more tech and safety features</p>
                                                <p className='text-[12px] text-[#24272C] text-opacity-70 font-[500] flex gap-3'>By Ujjawal <span className='list-outside'><li >Jan 30, 2024</li></span></p>
                
                                            </div>
                                        </div>
                                    </div>
                                    <p className=' flex gap-1 cursor-pointer text-[#0085FF] font-[500] items-center'>
                                        View All Kia Seltos Road Test<Rightarrow/>
                                    </p>
                                </div>
                                <Helpful/>

            </div>
            <div className=' w-[24%] pt-[300px] flex flex-col gap-[30px] px-[10px]'>
                <TrendingCars/>
                <PopularSUV/>       
                <SimilarCars/>
            </div>

        </div>
      
    </div>
  )
}

export default BrandCarNews
