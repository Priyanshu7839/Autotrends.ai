import * as React from "react";

export function PriceRangeButton({ range }) {
  return (
    <button 
      className="p-3.5 bg-[white] rounded border border-solid border-blue border-opacity-30 min-w-[114px] shadow-[0px_2px_4px_rgba(254,219,169,0.5)]"
      tabIndex="0"
      aria-label={`View cars in price range ${range}`}
    >
      {range}
    </button>
  );
}