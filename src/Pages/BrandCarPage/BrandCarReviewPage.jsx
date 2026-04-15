import React,{useState} from 'react'
import { ReviewsList,MoreOptions,ExploreAlternativeImages,AreYouConfused,BrandCarVariantComparison,BrandCarVideosHeader,Menu,Accordion } from '../../components'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import MoreOptionsToConsiderData from '../../MockData/MoreOptionsToConsiderData'
import { grill,headlight,green_star,kia1 } from '../../assets/Images'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import { useSelector } from 'react-redux'



const BrandCarReviewPage = () => {
  const details = useSelector((state) => state.CarDetails);

    const Model = [
              {
                image: details?.overView?.image,
                name: details?.userReviews?.viewAllTextTitle,
                MinPrice: '10.3',
                MaxPrice: '17.65',
                features: ["Diesel / Petrol", "17 to 20.7 kmpl", "Manual/Automatic", "1482 cc - 1497 cc", "113.42 - 157.81 bhp", "3 Star Safety"],
                facelift: true,
                electric: false,
                moreimages: [grill, headlight],
                rating:details?.userReviews?.overAllRating,
                reviews: details?.userReviews?.reviewCount,
                priceRange:details?.overView?.priceRange
              }]
              console.log()

    
        
    const viewType = [ 
        ...new Set(details?.userReviews?.mapItems?.visibleItems?.map((v) => v.title)),'More'];

        const viewTypeMore = [ 
            ...new Set(details?.userReviews?.mapItems?.moreItems?.map((v) => v.title))];

    const [reviewPageNumber, setReviewPageNumber] = useState(1);
    const maxPageNumber = 10;
    let numberOfPage = Array(maxPageNumber);
    for (let i = 0; i < maxPageNumber; i++) {
        numberOfPage[i] = i + 1;
    }

    const [selectedReviewType, setSelectedReviewType] = useState("All");

    const breakpoint=useScreenResizeValue();

console.log(details.userReviews)


    return (
        <div className=' flex relative  justify-center'>

            <div className=' w-full flex flex-col items-center justify-center  mt-[32px]  '>
            <BrandCarVideosHeader prop={Model[0]} category={"User Reviews"}/>
                <div className={`${breakpoint<=1440?'w-[84%]':'w-[1200px]'}`}>
                    <div className={`
                        ${breakpoint <= 1250 ?"w-[100%]":'w-[76%]'}
                        `}>
                    <div className='    mt-[20px] px-[20px] py-[20px]   drop-shadow-[0px_1px_2px_rgba(36,39,44,0.1)] border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-[1rem] font-2'>
                    <h1 className={` font-medium
                        ${breakpoint>1250 && 'text-[24px]'}
                        ${breakpoint<=1250 && 'text-[20px]'}
                        `}>{details?.userReviews?.ratingTitle}</h1>
                    <div>
                        <div className={`flex justify-between 
                            ${breakpoint<=600 ? 'flex-col items-start gap-[1rem]':'items-center'}
                            `}>
                            <div className='flex flex-row gap-[15px] text-[13px] '>
                                <p className='flex gap-1 text-[26px] font-bold items-center'> {details?.userReviews?.overAllRating} <span><img src={green_star} alt="" className='h-[28px] w-[28px] ' /></span></p>
                                <div className='text-color-9-70 font-2-book'>
                                    <p>Based on</p>
                                    <p>{details?.userReviews?.reviewCount} User Reviews</p>
                                </div>
                            </div>
                            <div>
                                <button className="font-2-book text-[#0B66FA] border-[1px] border-[#0B66FA] text-[16px] font-medium px-[25px] py-[12px] w-[250px] rounded-md  " >{details?.userReviews?.writeReviewButtonText}</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='    mt-[20px] px-[20px] py-[20px] flex flex-col gap-2    drop-shadow-[0px_1px_2px_rgba(36,39,44,0.1)] border-[#24272C] border-[1px] rounded-[16px] border-opacity-10'>
                    <h1 className={`font-medium font-2
                        ${breakpoint>1250 && 'text-[24px]'}
                        ${breakpoint<=1250 && 'text-[20px]'}
                        `}>{details?.userReviews?.title}</h1>

                    <div className='flex flex-col gap-2 '>
                        <div className='flex flex-wrap gap-2 items-center  relative'>
                            {
                                viewType.map((view, index) => (
                                    <div key={index} onClick={() => setSelectedReviewType(view)} className={` cursor-pointer px-2 py-1 flex flex-col gap-4 rounded-md ${selectedReviewType === view ? "border border-[#007BE5] text-[#007BE5] bg-[#007BE5] bg-opacity-10 " : "  border-[#24272C] border-[1px]  border-opacity-10  text-[#24272C]"} `}>
                                        <p className={`  font-1 
                                            ${breakpoint>1250 && 'text-[13px]'}
                                            ${breakpoint<=1250 && 'text-[11px]'}
                                            `}>{view}</p>

                                    </div>
                                ))
                            }
                            {selectedReviewType === 'More' && 
                             <div
                             style={{scrollbarWidth:'none'}}
                             className={`p-[1rem] absolute top-[120%]  bg-[#fafafa] flex justify-between flex-wrap gap-[.5rem] h-[300px] overflow-y-scroll 
                             ${breakpoint>800 && 'left-[47%]'}
                             ${(breakpoint<=800 && breakpoint>700) && 'left-[40%]'}
                             ${breakpoint<=700 && 'left-[0%]'}
                             ${breakpoint>500 && 'w-[300px]'}
                             ${breakpoint<=500 && 'w-[250px]'}
                             `}>
                                  {
                                viewTypeMore.map((view, index) => (
                                    <div key={index} onClick={() => setSelectedReviewType(view)} className={`w-fit cursor-pointer px-2 py-1 flex flex-col gap-4 rounded-md ${selectedReviewType === view ? "border border-[#007BE5] text-[#007BE5] bg-[#007BE5] bg-opacity-10 " : "  border-[#24272C] border-[1px]  border-opacity-10  text-[#24272C]"} `}>
                                        <p className={`  font-1 
                                            ${breakpoint>1250 && 'text-[13px]'}
                                            ${breakpoint<=1250 && 'text-[11px]'}
                                            `}>{view}</p>

                                    </div>
                                ))
                            }
                              </div>}
                        </div>
                        <Menu menuItems={["Latest","Helpful","Critical"]}/>
                        <div className='flex flex-col gap-2 mt-[20px] '>


                            <ReviewsList width={100} />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList width={100} />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList width={100} />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList width={100} />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList width={100} />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList width={100} />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList width={100} />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList width={100} />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList width={100} />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList width={100} />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList width={100} />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList width={100} />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList width={100} />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList width={100} />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList width={100} />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList width={100} />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList width={100} />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList width={100} />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            <ReviewsList width={100} />
                            <div className='h-[1px] border-dashed border-[#24272C] border-[1px] border-opacity-10 border-width-[3px] '></div>
                            
                        </div>

                        {/* page numbers */}
                        {/* <div className='flex gap-2 mt-[10px] items-center'>
                        <div  onClick={() => setReviewPageNumber((reviewPageNumber+10)%11)} className={` cursor-pointer px-3 py-3 flex flex-col gap-4 rounded-md  drop-shadow-[0px_1px_2px_rgba(36,39,44,0.1)] border-[#24272C] border-[1px]  border-opacity-10  text-[#24272C] text-opacity-70 `}>
                                    <p className='text-[16px] font-semibold '><MdOutlineKeyboardArrowLeft className=' text-[16px] w-[16px] h-[16px] '/>
                                    </p>
                                </div>
                            {numberOfPage.map((el, index) =>
                            (
                                <div key={index} onClick={() => setReviewPageNumber(el)} className={`px-4 cursor-pointer py-2 flex flex-col gap-4 rounded-md ${reviewPageNumber === el ? "border-2  drop-shadow-[0px_1px_2px_rgba(36,39,44,0.1)] border-[#24272C] border-opacity-80 text-[#24272C]  " : " drop-shadow-[0px_1px_2px_rgba(36,39,44,0.1)] border-[#24272C] border-[1px]  border-opacity-10  text-[#24272C] text-opacity-70"} `}>
                                    <p className='text-[16px] font-semibold '>{el}</p>
                                </div>
                            ))
                            }
                            <div  onClick={() => setReviewPageNumber((reviewPageNumber+1)%11)} className={` cursor-pointer px-3 py-3 flex flex-col gap-4 rounded-md  drop-shadow-[0px_1px_2px_rgba(36,39,44,0.1)] border-[#24272C] border-[1px]  border-opacity-10  text-[#24272C] text-opacity-70 `}>
                                    <p className='text-[16px] font-semibold '><MdOutlineKeyboardArrowRight className=' text-[16px] w-[16px] h-[16px] text-[#24272C] text-opacity-70'/>
                                    </p>
                                </div>

                        </div> */}

                        {/* <div>
                            <p className='text-[14px] text-[#24272C]  font-[400]'>Page {reviewPageNumber} of {maxPageNumber} Pages</p>
                        </div> */}

                    </div>

                </div>
                        <div className='   mt-[20px]'>
                <BrandCarVariantComparison/>
                </div>
                                  
                <div className='    mt-[20px]'>
                    <MoreOptions data={MoreOptionsToConsiderData} />
                </div>

                <div className='    mt-[20px]'>
                    <ExploreAlternativeImages heading={"User reviews on Seltos alternatives"}/>
                </div>

                <div className='    mt-[20px] '>
                    <AreYouConfused/>
                </div>
                <div className='   mt-[20px] relative flex flex-col gap-[8px] pt-[18px] pb-[26.5px]  px-[31.22px] rounded-xl border border-[rgba(36,39,44,0.1)] shadow-md shadow-[rgba(36,39,44,0.1)]'>
                                  <h3 className=' text-[23px] leading-[33.2px] font-[500]'>Questions & Answers on {Model.name}</h3>
                                  <Menu menuItems={["Latest Questions","FAQs"]}/>
                                   <Accordion/>
                                 
                                </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default BrandCarReviewPage