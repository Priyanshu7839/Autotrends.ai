import * as React from "react";

function TabButton({ label,category,setcategory}) {
  return (
    <button
      className={`pr-px pl-6 rounded-t-[8px] min-h-[36px] w-[106px] text-[white] max-md:pl-5 ${
        (category===label)? "bg-blue font-[500] py-[6px]" : "bg-[#6f6f6f]"
      }`}
      type="button"
      role="tab"
      onClick={(e)=>setcategory(label)}
      
      tabIndex={0}
    >
      {label==="budget"?"By Budget":"By Model"}
    </button>
  );
}

export default TabButton;