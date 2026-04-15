import React from 'react';

export function FeatureCard({ title, description,image, className = "" }) {
 
  return (
    <div className={`flex relative gap-[12px]  pt-6 pr-[21px] pb-6 pl-[18px] w-full bg-[white] rounded-xl border  border-[rgba(36,39,44,0.1)]  max-md:px-5 ${className}`}>
        <img src={image} alt="pros image" className=' w-[36px] h-[36px]' />
        <div className=' flex flex-col '>
        <div className="w-full text-base font-medium leading-snug text-zinc-800 text-opacity-90">
        {title}
      </div>
      <div className="pb-px w-full text-[13px] leading-[19.5px] text-[rgba(36,39,44,0.5)] ">
        {description}
      </div>
        </div>
      
    </div>
  );
}