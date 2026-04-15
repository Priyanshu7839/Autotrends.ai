import React from 'react'



const BrandCarNewsCard = ({prop}) => {

    const {image,title,description,author,date}=prop;
    

  return (
    <div className=' w-full h-[213px] flex flex-wrap rounded-[8px] border border-[rgba(36,39,44,0.1)]   '>
        <div className=' bg-cover bg-no-repeat bg-center w-[312.66px] h-full rounded-l-[8px] ' style={{backgroundImage:`url(${image})`}}>
        </div>
        <div className=' w-[calc(100%-312.66px)] flex justify-between flex-col px-[16px] pt-[16px] pb-[17px]' >
           <div className=' flex flex-col gap-[7.2px]'>
            <h3 className='text-[17px] leading-[23.8px] text-[#24272c] font-medium'>{title}</h3>
            <p className=' text-[13px] leading-[19.5px] font-[400] text-[#24272c] text-opacity-70'>
                {description}
            </p>
           </div>
           <div className=' flex gap-[12px] text-[#24272c] text-opacity-70'>
            <div className='w-[36px] h-[36px] rounded-full bg-[#ecebeb]  text-[20px] leading-[30px] font-[400] flex justify-center items-center'>
               {author.charAt(0)}
            </div>
            <div className=' flex flex-col gap-[8px]'>
                <p>{author}</p>
                <p>{date}</p>
            </div>

           </div>
        </div>
      
    </div>
  )
}

export default BrandCarNewsCard
