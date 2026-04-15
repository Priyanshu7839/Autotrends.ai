import React from 'react'


const BrandCarImages = ({CarModels}) => {
  return (
    <div className='w-full overflow-x-scroll ' style={{scrollbarWidth:'none'}} >
    <div className=' w-max  flex gap-[20px] pb-[10px] ' >
   {CarModels&&
      CarModels.map((item,key)=>{
       return (<div className='font-1 flex flex-col w-[265px] h-max border-[1px] rounded-xl border-[rgba(36,39,44,0.1)]  ' key={key}>
           <div className=' w-full h-[290px] rounded-t-xl flex flex-col  '>
            <div className=' w-full bg-cover h-[190px] rounded-t-xl bg-center bg-no-repeat' style={{backgroundImage:`url(${item.coverImage})`}}></div>
            <div className=' w-full flex'>
                <div className=' w-[50%] h-[100px] bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${item.image1})`}}></div>
                <div className=' w-[50%] h-[100px] bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${item.image2})`}}></div>
            </div>
           </div>
           <div className=' w-full py-[8px] gap-[8px] flex flex-col px-[16px]'>
               <p className=' text-[17px] leading-[25.5px] text-[#24272c]'>{item.name}</p>
               <div className=' w-full flex justify-center mt-[18px] mb-[18px]'>
        <div className='cursor-pointer w-[90%] rounded-xl border-[1px] text-blue border-blue flex justify-center text-[16px]  leading-[43px]'>
          {item.ctaTitle}
        </div>

       </div>
               </div>
       </div>)
       })

   }
 
</div>

</div>
  )
}

export default BrandCarImages
