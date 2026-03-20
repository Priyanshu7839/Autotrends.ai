import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import dropDownMark from "../../Asset/CarInsuranceImages/drop-down-mark.svg"; // Ensure the path is correct

const GatherInformation = () => {
  const [question, setQuestion] = useState(0);

  const easing = [0.42, 0, 0.58, 1];
  const animationDuration = 0.3;

  const questionVariants = {
    hidden: { y: '-40%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: animationDuration,
        ease: easing,
      },
    },
    exit: {
      y: '-40%',
      opacity: 0,
      transition: {
        duration: animationDuration,
        ease: easing,
      },
    },
  };

  return (
    <div className="w-full mb-4 px-[20px]">
      <h2 className="text-[20px] font-bold text-[#005BAA] mb-2">
        Gather Information
      </h2>
      <p className="text-[14px] text-[#24272C] py-1">
        After doing the primary research and comparison, gather information on
        how insurance is calculated for a new car and what you need to insure
        your new car. It will help you get prepared financially and otherwise.
      </p>

      {/* How is insurance calculated on a new car? */}
      <h3 className="text-[18px] font-bold text-[#24272C] mt-4 mb-2">
        How is insurance calculated on a new car?
      </h3>
      <p className="text-[14px] text-[#24272C] py-1">
        The car insurance premium and the coverage are determined based on
        certain factors. Here are some of the most important factors.
      </p>

      {/* Insured Declared Value (IDV) */}
      <div className="w-full mt-[10px] rounded-lg flex flex-col">
        <div
          className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
          onClick={() => setQuestion(question === 1 ? 0 : 1)}
        >
          <p className="text-[16px] text-[#1A237E]">
            Insured Declared Value (IDV)
          </p>
          <img
            src={dropDownMark}
            alt=""
            className={`w-[14px] h-[8px] transition-transform duration-300 ${
              question === 1 ? 'rotate-180' : ''
            }`}
          />
        </div>
        <AnimatePresence>
          {question === 1 && (
            <motion.div
              variants={questionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-[14px] text-[#24272C] px-2 py-1"
            >
              <p>
                IDV refers to the current market value of your car and is
                determined considering the depreciation at that point in time.
                It is the maximum possible amount for which you can raise a
                claim in case of total loss.
              </p>
              <p>
                Further, the IDV is also based on the state and locality from
                where you purchase your new car.
              </p>
              <p>The IDV can be calculated as follows:</p>
              <p>
                IDV = (Market price of the car - depreciation) + (Cost of
                additional accessories not part of the market price -
                depreciation applicable to the accessories)
              </p>
              <p>
                When you purchase car insurance, you should ensure that the IDV
                is exact, adequate for your financial needs, and affordable.
              </p>
              <p>
                A higher IDV means a higher premium. On the other hand, a lower
                IDV, although it means a lower premium, can be insufficient
                coverage.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Engine Capacity */}
      <div className="w-full mt-[10px] rounded-lg flex flex-col">
        <div
          className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
          onClick={() => setQuestion(question === 2 ? 0 : 2)}
        >
          <p className="text-[16px] text-[#1A237E]">Engine Capacity</p>
          <img
            src={dropDownMark}
            alt=""
            className={`w-[14px] h-[8px] transition-transform duration-300 ${
              question === 2 ? 'rotate-180' : ''
            }`}
          />
        </div>
        <AnimatePresence>
          {question === 2 && (
            <motion.div
              variants={questionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-[14px] text-[#24272C] px-2 py-1"
            >
              {/* Add content for Engine Capacity here */}
              <p>Content for Engine Capacity goes here.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Type of coverage and add-ons chosen */}
      <div className="w-full mt-[10px] rounded-lg flex flex-col">
        <div
          className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
          onClick={() => setQuestion(question === 3 ? 0 : 3)}
        >
          <p className="text-[16px] text-[#1A237E]">
            Type of coverage and add-ons chosen
          </p>
          <img
            src={dropDownMark}
            alt=""
            className={`w-[14px] h-[8px] transition-transform duration-300 ${
              question === 3 ? 'rotate-180' : ''
            }`}
          />
        </div>
        <AnimatePresence>
          {question === 3 && (
            <motion.div
              variants={questionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-[14px] text-[#24272C] px-2 py-1"
            >
              {/* Add content for Type of coverage and add-ons chosen here */}
              <p>Content for Type of coverage and add-ons chosen goes here.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Third-party liability cover */}
      <div className="w-full mt-[10px] rounded-lg flex flex-col">
        <div
          className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
          onClick={() => setQuestion(question === 4 ? 0 : 4)}
        >
          <p className="text-[16px] text-[#1A237E]">
            Third-party liability cover
          </p>
          <img
            src={dropDownMark}
            alt=""
            className={`w-[14px] h-[8px] transition-transform duration-300 ${
              question === 4 ? 'rotate-180' : ''
            }`}
          />
        </div>
        <AnimatePresence>
          {question === 4 && (
            <motion.div
              variants={questionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-[14px] text-[#24272C] px-2 py-1"
            >
              {/* Add content for Third-party liability cover here */}
              <p>Content for Third-party liability cover goes here.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* New car insurance requirements */}
      <h3 className="text-[18px] font-bold text-[#24272C] mt-4 mb-2">
        New car insurance requirements
      </h3>

      {/* Personal details */}
      <div className="w-full mt-[10px] rounded-lg flex flex-col">
        <div
          className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
          onClick={() => setQuestion(question === 5 ? 0 : 5)}
        >
          <p className="text-[16px] text-[#1A237E]">Personal details</p>
          <img
            src={dropDownMark}
            alt=""
            className={`w-[14px] h-[8px] transition-transform duration-300 ${
              question === 5 ? 'rotate-180' : ''
            }`}
          />
        </div>
        <AnimatePresence>
          {question === 5 && (
            <motion.div
              variants={questionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-[14px] text-[#24272C] px-2 py-1"
            >
              <p>
                You will have to provide your personal details, including proof
                of identity, proof of residence, date of birth, driving
                license, driving history, and bank account information.
              </p>
              <p>
                Some important and valid documents are the Aadhaar card,
                passport, ration card, and PAN card.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Vehicle details */}
      <div className="w-full mt-[10px] rounded-lg flex flex-col">
        <div
          className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
          onClick={() => setQuestion(question === 6 ? 0 : 6)}
        >
          <p className="text-[16px] text-[#1A237E]">Vehicle details</p>
          <img
            src={dropDownMark}
            alt=""
            className={`w-[14px] h-[8px] transition-transform duration-300 ${
              question === 6 ? 'rotate-180' : ''
            }`}
          />
        </div>
        <AnimatePresence>
          {question === 6 && (
            <motion.div
              variants={questionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-[14px] text-[#24272C] px-2 py-1"
            >
              {/* Add content for Vehicle details here */}
              <p>Content for Vehicle details goes here.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GatherInformation;