import React, { useRef,useState } from 'react'

const BrandCarShortsCard = () => {
   
  return (
    <div className='w-full px-[21px] h-max overflow-x-scroll' style={{scrollbarWidth: 'none'}}>
            <div className=' w-max flex gap-[20px]'>
                {
                    [1,1,1].map((item,key)=>{
                        return <iframe  src={`https://www.youtube.com/embed/iEXO9gzddKY?mute=0&autoplay=0&rel=0&loop=1&playlist=iEXO9gzddKY&controls=1&enablejsapi=1&origin=https%3A%2F%2Fwww.cardekho.com&widgetid=3`} className='w-[209px] h-[401px]  rounded-xl' controls  >

                        </iframe>
                    }
                )
                }
            </div>
    </div>
  )
}

export default BrandCarShortsCard