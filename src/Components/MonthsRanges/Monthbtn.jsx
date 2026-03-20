import * as React from "react";

function Monthbtn({ month, tabIndex }) {
  return (
    <button 
      className="px-6 py-3.5 whitespace-nowrap bg-[white] rounded border border-solid border-blue border-opacity-30 min-w-[114px] shadow-[0px_2px_4px_rgba(254,219,169,0.5)] max-md:px-5"
      tabIndex={tabIndex}
    >
      {month}
    </button>
  );
}

export default Monthbtn;