import React from 'react'
import { Overlay } from '../../assets/Images/SVG'
import { useScreenResizeValue } from '../../ScreenSizeFunction'

const BrandCarVideosCard = ({videos,isvideopage=false}) => {
  const breakpoint= useScreenResizeValue();

  return (
    <div className='w-full overflow-x-scroll  py-[20px] ' style={{scrollbarWidth:'none'}}  >
         <div className={`   flex gap-[20px] ${(isvideopage)?'flex-wrap w-full':'w-max'}  `}>
        {
            videos.map((item,key)=>{
            return <div className={` flex flex-col  border rounded-xl border-[rgba(36,39,44,0.1)]  drop-shadow-[0px_1px_2px_rgba(36,39,44,0.05)] ${(isvideopage)?breakpoint<=480?'w-[330px]':'w-[48%]': breakpoint<=412?'w-[320px]':'w-[415px]'} `} key={key}>
                
                <iframe  src="https://www.youtube.com/embed/ai8UCP2hoqw"  title="Kia Carnival 2024 Review: Everything You Need In A Car!" frameborder="0" allow=" auotoplay:false"  className=' rounded-t-xl w-full h-[250px]'  ></iframe>
                <div className=' w-full py-[16px] gap-[8px] flex flex-col px-[16px]'>
                    <p className=' text-[17px] leading-[25.5px] text-[#24272c]'>{item.title}</p>
                    <p className='  text-[13px] leading-[19.5px] items-center text-[#24272c] text-opacity-70 flex  gap-[7px]'>
                        <span>{item.time} month ago</span>
                       <Overlay/>
                <span>{Math.floor((item.views)/1000)}K views</span>
                    </p>
                    </div>
            </div>
            })

        }
      
    </div>

    </div>
   
  )
}

export default BrandCarVideosCard