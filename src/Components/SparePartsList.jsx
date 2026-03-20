import React, { useState, useRef, useEffect } from 'react';

const SparePartsList = () => {
    const [activeSection, setActiveSection] = useState('Engine Parts');
    const scrollDivRef = useRef(null);

    useEffect(() => {
        const activeElement = document.getElementById(`${activeSection}-scrolledItem`);
        if (activeElement) {
            handleClick(activeSection, activeElement)
        }
    }, []);

    const handleClick = (section, liElement) => {
        setActiveSection(section);
        const targetElement = document.getElementById(section);
        if (targetElement && scrollDivRef.current) {
            scrollDivRef.current.scrollTo({
                top: targetElement.offsetTop - scrollDivRef.current.offsetTop,
                behavior: 'smooth',
            });
        }
        const allLi = liElement.parentElement.querySelectorAll('li');
        allLi.forEach((li) => {
            li.classList.remove('active');
            li.firstElementChild.classList.remove('bg-[#24272C]')
            li.firstElementChild.classList.remove('text-[white]')
            li.firstElementChild.classList.remove('rounded-md')
            li.firstElementChild.firstElementChild?.remove()
        })
        liElement.classList.add('active')
        liElement.firstElementChild.classList.add('bg-[#24272C]')
        liElement.firstElementChild.classList.add('text-[white]')
        liElement.firstElementChild.classList.add('rounded-md')
        const span = document.createElement('span');
        span.className = "absolute right-[-11px] top-1/2 mt-[-22px] border-b-[22px]  border-t-[22px] border-l-[23px] border-l-gray-800 border-r-transparent border-t-transparent border-b-transparent content-['']"
        liElement.firstElementChild.appendChild(span)
    };

    const handleNavLinkClick = (e, section, liElement) => {
        e.preventDefault();
        handleClick(section, liElement);
    };

    return (
        <div  className="clearfix shadow-md relative flex flex-col  md:px-[20px] py-[20px]   border-[#24272C] border-[1px] rounded-[16px] border-opacity-10">
            <h1 className='text-[24px] font-semibold'>Kia Seltos spare parts price list</h1>
            <div className="flex flex-row-reverse mt-[8px]">
                <div
                    id="scrollDiv"
                    ref={scrollDivRef}
                    className="px-[15px] relative md:float-right w-full md:w-[calc(100%-254px)] max-h-[750px] overflow-auto no-scrollbar max-md:mt-4 mb-4 md:max-h-[800px]"
                    data-gsc-scroll="true"
                    style={{ maxHeight: '300px' }}
                >
                    <div className=''>
                        <h3 id="Engine Parts" data-attribute="scrolledItems" className=" text-[15px] relative border-b border-[#24272C] my-5  md:my-8  ">
                            <span className="absolute top-[-11px] left-[20px] md:left-[38px] bg-[white] text-[#24272C] px-1 font-semibold">Engine Parts</span>
                        </h3>
                        <table id="1" data-track-section="Engine Parts" className=" md:pl-[44px] text-[15px] text-[#24272C] w-full  inline-block ">
                            <tbody className="w-full inline-block text-[12px] md:text-[15px]">
                                <tr className="w-full inline-block pt-2  md:pt-0 max-md:flex">
                                    <td className=" text-[#24272C] block w-full  md:w-[270px] md:inline-block md:pr-10">Spark Plug</td>
                                    <td data-responsivecelltwo="true" className="block w-full md:w-[300px] md:inline-block md:pl-10 "><span>₹ 4,684</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h3 id="Oil & Lubricants" data-attribute="scrolledItems" className=" text-[15px] relative border-b border-[#24272C] my-5  md:my-8  ">
                            <span className="absolute top-[-11px] left-[20px] md:left-[38px] bg-[white] text-[#24272C] px-1 font-semibold">Oil & Lubricants</span>
                        </h3>
                        <table id="2" data-track-section="Oil & Lubricants" className="md:pl-[44px] text-[15px] text-[#24272C] w-full  inline-block ">
                            <tbody className="w-full inline-block text-[12px] md:text-[15px]">
                                <tr className="w-full inline-block pt-2  md:pt-0 max-md:flex">
                                    <td className=" text-[#24272C] block w-full  md:w-[270px] md:inline-block md:pr-10">Engine Oil</td>
                                    <td data-responsivecelltwo="true" className="block w-full md:w-[300px] md:inline-block md:pl-10 "><span>₹ 1,353</span></td>
                                </tr>
                                <tr className="w-full inline-block pt-2  md:pt-0 max-md:flex">
                                    <td className=" text-[#24272C] block w-full  md:w-[270px] md:inline-block md:pr-10">Coolant</td>
                                    <td data-responsivecelltwo="true" className="block w-full md:w-[300px] md:inline-block md:pl-10 "><span>₹ 546</span></td>
                                </tr>
                                <tr className="w-full inline-block pt-2 md:pt-0 max-md:flex">
                                    <td className=" text-[#24272C] block w-full  md:w-[270px] md:inline-block md:pr-10">Brake Oil</td>
                                    <td data-responsivecelltwo="true" className="block w-full md:w-[300px] md:inline-block md:pl-10 "><span>₹ 474</span></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    <div>
                        <h3 id="Service Parts" data-attribute="scrolledItems" className=" text-[15px] relative border-b border-[#24272C] my-5  md:my-8  ">
                            <span className="absolute top-[-11px] left-[20px] md:left-[38px] bg-[white] text-[#24272C] px-1 font-semibold">Service Parts</span>
                        </h3>
                        <table data-track-section="Service Parts" id="3" className="md:pl-[44px] text-[15px] text-[#24272C] w-full  inline-block ">
                            <tbody className="w-full inline-block text-[12px] md:text-[15px]">
                                <tr className="w-full inline-block pt-2 md:pt-0 max-md:flex">
                                    <td className=" text-[#24272C] block w-full  md:w-[270px] md:inline-block md:pr-10">Oil Filter</td>
                                    <td data-responsivecelltwo="true" className="block w-full md:w-[300px] md:inline-block md:pl-10 "><span>₹ 172</span></td>
                                </tr>
                                <tr className="w-full inline-block pt-2 md:pt-0 max-md:flex">
                                    <td className=" text-[#24272C] block w-full  md:w-[270px] md:inline-block md:pr-10">Engine Oil</td>
                                    <td data-responsivecelltwo="true" className="block w-full md:w-[300px] md:inline-block md:pl-10 "><span>₹ 1,353</span></td>
                                </tr>
                                <tr className="w-full inline-block pt-2 md:pt-0 max-md:flex">
                                    <td className=" text-[#24272C] block w-full  md:w-[270px] md:inline-block md:pr-10">Coolant</td>
                                    <td data-responsivecelltwo="true" className="block w-full md:w-[300px] md:inline-block md:pl-10 "><span>₹ 546</span></td>
                                </tr>
                                <tr className="w-full inline-block pt-2 md:pt-0 max-md:flex ">
                                    <td className=" text-[#24272C] block w-full  md:w-[270px] md:inline-block md:pr-10">Brake Oil</td>
                                    <td data-responsivecelltwo="true" className="block w-full md:w-[300px] md:inline-block md:pl-10 "><span>₹ 474</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-3 rounded-md relative left-[2px]  top-0 bg-[gray-100] h-[calc(100%-125px)] w-[40%]  rounded-bl-xl md:w-[254px] md:h-[calc(100%-73px)] ">
                    <ul>
                        <li id="Engine Parts-scrolledItem" className=" border-t border-[#24272C] md:border-t md:pt-0 first:border-t-0 last:border-b-0">
                            <a href="" onClick={(e) => handleNavLinkClick(e, 'Engine Parts', e.currentTarget.parentElement)} title="Engine Parts" rel="noopener" className="block p-3 relative w-full text-[12px] md:text-[15px] md:pl-4 ">Engine Parts</a>
                        </li>
                        <li id="Oil & Lubricants-scrolledItem" className=" border-t border-[#24272C] md:border-t md:pt-0 first:border-t-0 last:border-b-0">
                            <a href="" onClick={(e) => handleNavLinkClick(e, 'Oil & Lubricants', e.currentTarget.parentElement)} title="Oil & Lubricants" rel="noopener" className="block p-3 relative w-full text-[12px] md:text-[15px] md:pl-4 ">Oil & Lubricants</a>
                        </li>
                        <li id="Service Parts-scrolledItem" className=" border-t border-[#24272C] md:border-t md:pt-0 first:border-t-0 last:border-b-0 ">
                            <a href="" onClick={(e) => handleNavLinkClick(e, 'Service Parts', e.currentTarget.parentElement)} title="Service Parts" rel="noopener" className="block p-3 relative w-full text-[12px] md:text-[15px] md:pl-4">Service Parts</a>
                        </li>
                    </ul>     
                </div>
            </div>
        </div>
    );
};

export default SparePartsList;