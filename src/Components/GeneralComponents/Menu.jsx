import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { useScreenResizeValue } from '../../ScreenSizeFunction';

const Menu = ({ menuItems, list = false, setitem, item }) => {

const breakpoint = useScreenResizeValue();
  return (<div className={`flex w-full min-w-max gap-[20px]  pt-[10px] px-[10px]   text-[#24272C] text-opacity-70 border-b border-[rgba(36,39,44,0.1)] 
    ${breakpoint>1250 && 'text-[14px]'}
    ${breakpoint<=1250 && 'text-[12px]'}
  `}>
    {menuItems.map((element, index) => {
      return <li key={index} className={`${(list) ? '' : 'list-none'} ${(item === element) ? 'font-bold  text-[#24272C]  opacity-100' : ''} cursor-pointer`} onClick={() => setitem(element)} >
        {element.charAt(0).toUpperCase() + element.slice(1)}
        <AnimatePresence>
          {(item === element) && <motion.div className='  mx-auto mt-[8px] h-[4px]  bg-blue' initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 0.1, delay: 0 }} exit={{ width: 0, }}> </motion.div>}

        </AnimatePresence>
      </li>
    })
    }

  </div>
  )
}

export default Menu
