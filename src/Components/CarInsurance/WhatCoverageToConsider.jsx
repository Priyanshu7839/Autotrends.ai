import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import dropDownMark from "../../Asset/CarInsuranceImages/drop-down-mark.svg"
const WhatCoverageToConsider = () => {
  const [question, setQuestion] = useState(1);

  const easing = [0.42, 0, 0.58, 1]; // Custom easeInOut
  const animationDuration = 0.3;

  const questionVariants = {
    hidden: { y: '-40%', opacity: 0 },
    visible: {
      y: '-5%',
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
    <div className="w-full mb-4">
      <h1 className="text-[18px] font-bold text-[#24272C] font-sans mb-2">
        What coverage to consider?
      </h1>
      <p className="text-[14px] text-[#24272C] py-1">
        Coverage involves understanding who and what is protected in case of
        unforeseen circumstances involving you and your car.
      </p>
      <p className="text-[14px] text-[#24272C] py-1">
        There are several types of coverage one can consider:
      </p>
      <div>
        <div
          className=" m-0 h-full w-full relative"
          style={{ scrollbarWidth: 'thin' }}
        >
          <div className=" w-full flex flex-col gap-6 h-max">
            {/* Question 1 */}
            <div className="w-full font-plus-jakarta-sans mt-[16px] relative h-max  rounded-lg flex flex-col">
              <div
                className={`flex w-full justify-between font-bold px-2 relative z-30 rounded-lg cursor-pointer `}
                onClick={() => setQuestion(question === 1 ? 0 : 1)} // Toggle open/close
              >
                <p className='text-[14px] text-[#1A237E]'>
                Third-party car insurance
                </p>
                <img src={dropDownMark} alt=""
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
                    className="text-[14px] text-black px-2 py-1"
                  >
                    This is compulsory car insurance coverage as per the regulations.<span className='text-[#007BFF]'>Third-party coverage</span> covers the damages your vehicle might cause to another person or their vehicle. However, it doesn't provide coverage for you, the policyholder, or your own car, offering only minimum third-party protection.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Question 2 */}
            <div className="w-full font-plus-jakarta-sans mt-[16px] relative h-max  rounded-lg flex flex-col">
              <div
                className={`flex w-full justify-between font-bold px-2 relative z-30 rounded-lg cursor-pointer `}
                onClick={() => setQuestion(question === 2 ? 0 : 2)} // Toggle open/close
              >
                <p className='text-[14px] text-[#1A237E]'>
                Comprehensive car insurance
                </p>
                <img src={dropDownMark} alt=""
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
                    className="text-[14px] text-black  px-2 py-1"
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, itaque est mollitia rerum illum ipsam iusto inventore. Repellat voluptates reiciendis omnis architecto, neque consequatur culpa sed. Repudiandae rerum perspiciatis molestias.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
      <p className="text-[14px] text-[#24272C] py-1 mt-[10px]">
        Once you have looked at what type of coverage you need, you would want
        to understand what else to look at before taking the next step.
      </p>
    </div>
  );
};

export default WhatCoverageToConsider;