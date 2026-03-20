import * as React from "react";

function SelectField({ label, ariaLabel,ind }) {
  return (
    <div className={`flex min-w-[220px] w-[33%]    shrink  bg-[white]  basis-0 min-h-[72px] ${ind===0?'rounded-bl-[8px]':(ind===2)?'rounded-r-[8px]':''}`}>
      <div className="flex relative  w-full">
       
        <select
          id={`select-${label}`}
          className="flex overflow-hidden z-0 flex-col justify-center px-4 py-7 w-full  rounded-lg min-h-[72px]"
          aria-label={ariaLabel}
        >
          <option value="">{(ind===0)?label==="budget"?"Select Budget":"Select Model":"All Vehicles Types"}</option>
        </select>
        
      </div>
    </div>
  );
}

export default SelectField;
