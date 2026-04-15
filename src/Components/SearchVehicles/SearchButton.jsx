import * as React from "react";

function SearchButton() {
  return (
    <div className="flex flex-col flex-1 shrink px-2.5 pt-3 font-bold leading-10 rounded-r-[8px] text-center  whitespace-nowrap bg-[white] rounded-none basis-0 min-h-[72px]">
      <button
        type="submit"
        className="py-px pr-20 pl-20 w-full bg-blue text-[white] rounded-lg max-w-[233px] min-h-[48px] max-md:px-5"
        aria-label="Search vehicles"
      >
        Search
      </button>
    </div>
  );
}

export default SearchButton;