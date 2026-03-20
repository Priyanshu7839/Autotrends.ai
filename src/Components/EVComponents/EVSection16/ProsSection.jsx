import React from 'react';
import { FeatureCard } from './';
import { Like } from '../../../assets/Images/SVG';
import { zero_emissions,feature_low_running_cost,cheaper_to_maintain,feature_performnace_exp,lack_of_EV,high_battery_cost,long_charge_time, high_purchase_cost } from '../../../assets/Images';
export function ProsSection() {
  const prosData = [
    {
      title: "Zero emissions",
      image:zero_emissions,
      description: "As EVs don't feature an internal combustion engine, they have zero tail-pipe emissions, making them a little more environment-friendly."
    },
    {
      title: "Low running costs",
      image:feature_low_running_cost,
      description: "Compared to fuel prices, electricity is more affordable, reducing the daily running costs of an electric vehicle."
    },
    {
      title: "Cheaper to maintain",
      image:cheaper_to_maintain,
      description: "Fewer mechanical components leads to reduced expenses during services, thereby bringing down the overall costs of maintenance."
    },
    {
      title: "High on performance",
      image: feature_performnace_exp,
      description: "Having an electric powertrain, the instantaneous acceleration makes them easy and fun to drive to cater to the enthusiast in you."
    }
  ];

  return (
    <div className="flex flex-col px-2.5 pb-3 max-w-full min-h-[1px] w-[417px]">
      <div className="flex gap-5 justify-between py-1.5 w-full">
        <div className="text-2xl font-medium leading-snug text-zinc-800 text-opacity-90">
          Pros
        </div>
        <Like/>
      </div>
      <div className="flex flex-col mt-5 w-full">
        {prosData.map((item, index) => (
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