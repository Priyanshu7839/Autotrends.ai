
import React from 'react';
import { ev_new_good_and_bad_things } from '../../../assets/Images';

export function CarImage() {
  return (
    <div className="flex pt-[64px] px-2.5 max-w-full min-h-[1px] w-[417px]">
       <img src={ev_new_good_and_bad_things} alt="" className='w-full h-auto' />
    </div>
  );
}