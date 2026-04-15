import * as React from "react";
import OfferCard from "./OfferCard.jsx";
import { kia3 } from "../../assets/Images/index.js";

const offerData = [
  {
    title: "Skoda Kushaq",
    description: "Exclusive Year-End Saving of Skoda\nKusha...",
    daysLeft: 16,
    image:kia3,
    mainAlt: "Skoda Kushaq"
  },
  {
    title: "Skoda Slavia",
    description: "Exclusive Year-End Saving of Skoda\nSlavi...",
    daysLeft: 16,
    image:kia3,
    mainAlt: "Skoda Slavia"
  },
  {
    title: "Citroen Aircross",
    description: "Benefits on Citroen Aircross\nDiscount Up...",
    daysLeft: 16,
    image:kia3,
    mainAlt: "Citroen Aircross"
  },
  {
    title: "Citroen C3",
    description: "Benefits on Citroen C3 Discount\nUpto ₹ 1...",
    daysLeft: 16,
    image:kia3,
    mainAlt: "Citroen C3"
  },
  {
    title: "Toyota Glanza",
    description: "Benefits On Toyota Glanza Year-end\nBenef...",
    daysLeft: 16,
    image:kia3,
    mainAlt: "Toyota Glanza"
  },
  {
    title: "Toyota Rumion",
    description: "Benefits On Toyota Rumion Year-\nend Benef...",
    daysLeft: 16,
    image:kia3,
    mainAlt: "Toyota Rumion"
  }
];

function OfferList() {
  return (
    <div className="flex flex-col w-full  max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col px-2.5 pt-7 w-full max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {offerData.slice(0, 2).map((offer, index) => (
              <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <OfferCard {...offer} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {offerData.slice(2, 4).map((offer, index) => (
              <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <OfferCard {...offer} />
              </div>
            ))}
          </div>
        </div>
        <div className="z-10 mt-8 mb-0 max-md:mb-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {offerData.slice(4).map((offer, index) => (
              <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <OfferCard {...offer} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferList;