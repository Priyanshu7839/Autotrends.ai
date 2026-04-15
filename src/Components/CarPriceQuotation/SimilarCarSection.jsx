import React from 'react'
    import { AudiImg, DealershipImg } from '../../assets/Images'
    import { FaStar } from 'react-icons/fa'
    import { useScreenResizeValue } from '../../ScreenSizeFunction'

const SimilarCarSection = () => {

    const similarCars = ['1', '2', '3', '4']

    const breakpoint = useScreenResizeValue();

    return (
        <div className='p-[4rem] flex flex-col gap-[1rem]'>

            <h1 className={`font-1 font-extrabold text-color-8
                ${breakpoint>1200 && 'text-[2rem]'}
                ${(breakpoint <=1200 && breakpoint>768) && 'text-[1.375rem]'}
                ${(breakpoint<=768 && breakpoint>480) && 'text-[1.125rem]'} 
                ${(breakpoint<=480) && 'text-[.875rem]'}
                `}>Treat Yourself A New Toyota C-HR</h1>
            <p className={`font-roboto font-regular text-color-8 text-[.984rem]
                ${breakpoint>1200 && 'text-[.984rem]'}
                ${(breakpoint <=1200 && breakpoint>768) && 'text-[.859rem]'}
                ${(breakpoint<=768 && breakpoint>480) && 'text-[.734rem]'} 
                ${(breakpoint<=480) && 'text-[.609rem]'}
                `}>The Toyota C-HR may look like a spaceship, but it’s certainly more economical than one. The efficient hybrid engine makes it cheap to run, and it’s loaded with safety tech as well. You can have a C-HR with as much as £2,000 deposit contribution and 2.9% APR.</p>


            <div className={`flex gap-[1rem] items-center justify-center
                ${breakpoint<=1200 && 'flex-wrap'}
                `}>
                {similarCars.map((cars, index) => {
                    return(
                        <div key={index} className={`font-1  p-[1rem] flex flex-col gap-[.5rem] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.12)] 
                        ${breakpoint>1200 && 'w-fit'}
                        ${(breakpoint<=1200 && breakpoint>700) && 'w-[270px]'}
                        ${(breakpoint<=700 && breakpoint>0) && 'w-full'}
                        `}>
                        <div className='w-fit'>
                            <img src={AudiImg} alt="" className='w-[90%]' />
                        </div>
                        <div className='flex items-center gap-[1rem] w-fit'>
                            <img src={DealershipImg} alt="" />
                            <div>
                                <h1 className={`text-color-5 font-bold
                                    ${breakpoint>1200 && 'text-[.875rem]'}
                                    ${(breakpoint <=1200 && breakpoint>768) && 'text-[.75rem]'}
                                    ${(breakpoint<=768 && breakpoint>480) && 'text-[.625rem]'} 
                                    ${(breakpoint<=480) && 'text-[.5rem]'}
                                    `}>Audi</h1>
                                <h2 className={`text-color-8 font-bold
                                    ${breakpoint>1200 && 'text-[1rem]'}
                                    ${(breakpoint <=1200 && breakpoint>768) && 'text-[.875rem]'}
                                    ${(breakpoint<=768 && breakpoint>480) && 'text-[.75rem]'} 
                                    ${(breakpoint<=480) && 'text-[.625rem]'}
                                    `}>A3 Sportback (2016-2020)</h2>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-start gap-[.25rem]'>
                            <a href="" className={`text-color-7 uppercase font-2 underline
                                ${breakpoint>1200 && 'text-[.75rem]'}
                                ${(breakpoint <=1200 && breakpoint>768) && 'text-[.625rem]'}
                                ${(breakpoint<=768 && breakpoint>0) && 'text-[.5rem]'} 
                                `}>Jai Pitambara Automobiles</a>
                            <div className='flex items-center justify-start gap-[.25rem] font-regular text-[.6675rem] text-color-8'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                4/10
                            </div>
                            <p className={` text-color-8
                                ${breakpoint>1200 && 'text-[.875rem]'}
                                ${(breakpoint <=1200 && breakpoint>768) && 'text-[.75rem]'}
                                ${(breakpoint<=768 && breakpoint>480) && 'text-[.625rem]'} 
                                ${(breakpoint<=480) && 'text-[.5rem]'}
                                `}>Ex-Showroom Quoted Price</p>
                            <h1 className={`font-bold text-color-8
                                ${breakpoint>1200 && 'text-[1.5rem]'}
                                ${(breakpoint <=1200 && breakpoint>768) && 'text-[1.375rem]'}
                                ${(breakpoint<=768 && breakpoint>480) && 'text-[1.25rem]'} 
                                ${(breakpoint<=480) && 'text-[1.125rem]'}
                                `} >£9,950</h1>
                        </div>
                        <button className={`p-[.5rem] bg-[#0B66FA] flex items-center justify-center font-bold rounded-[5px] text-color-1
                            ${breakpoint>1200 && 'text-[.875rem]'}
                            ${(breakpoint <=1200 && breakpoint>768) && 'text-[.75rem]'}
                            ${(breakpoint<=768 && breakpoint>480) && 'text-[.625rem]'} 
                            ${(breakpoint<=480) && 'text-[.5rem]'}
                            `}>
                            Lock Deal Now !
                        </button>
                    </div>
                    )
                })}
            </div>

        </div>
    )
}

export default SimilarCarSection