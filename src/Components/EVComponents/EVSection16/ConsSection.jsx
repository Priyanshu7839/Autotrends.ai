import React from 'react';
import { FeatureCard } from './';
import { Dislike } from '../../../assets/Images/SVG';
import { lack_of_EV,high_battery_cost,high_purchase_cost,long_charge_time } from '../../../assets/Images';

export function ConsSection() {
  const consData = [
    {
      title: "Lack of EV infrastructure",
      image:lack_of_EV,
      description: "Undertaking unplanned long trips can cause range anxiety thanks to the lack of proper charging infrastructure."
    },
    {
      title: "High battery costs",
      image:high_battery_cost,
      description: "Replacing a lithium-ion battery, which is available with most electric cars, usually tends to be an expensive affair."
    },
    {
      title: "Long charge times",
      image:long_charge_time,
      description: "An EV, even with fast charging, takes a lot longer to juice up the battery than it would take to refuel your car."
    },
    {
      title: "Higher purchase costs",
      image:high_purchase_cost,
      description: "EVs tend to be more expensive than their ICE counterparts, majorly because of the price of their battery pack(s)."
    }
  ];

  return (
    <div className="flex  relative z-10 flex-col px-2.5 pb-3 max-w-full min-h-[1px] w-[417px]">
      <div className="flex gap-5 justify-between py-1.5 w-full">
        <div className="text-2xl font-medium leading-snug text-zinc-800 text-opacity-90">
          Cons
        </div>
        <Dislike/>
      </div>
      <div className="flex flex-col mt-5 w-full">
        {consData.map((item, index) => (
          <FeatureCard 
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            className={index > 0 ? "mt-3" : ""}
          />
        ))}
      </div>
    </div>
  );
}