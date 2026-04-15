import * as React from "react";
import OfferList from "./OfferList.jsx";

function LatestOffers() {
  return (
    <div className="flex flex-col px-3 pt-5 pb-5 bg-white rounded-2xl border border-solid border-[rgba(36,39,44)] border-opacity-10 max-w-[940px] shadow-[0px 1px 2px rgba(36,39,44,0.1)]">
      <div className="pb-px w-full text-2xl font-medium leading-8 text-[#24272c] max-md:max-w-full">
        Latest offers in New Delhi
      </div>
      <OfferList />
    </div>
  );
}

export default LatestOffers;