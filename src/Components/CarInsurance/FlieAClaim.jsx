import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import dropDownMark from "../../Asset/CarInsuranceImages/drop-down-mark.svg"; 

const FileAClaim = () => {
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
    <div className="w-full px-[20px]">
      <h2 className="text-[20px] font-bold text-[#005BAA] mb-2">
        File A Claim
      </h2>
      <p className="text-[14px] text-[#24272C] py-1">
        The primary and main purpose of purchasing a car insurance policy for
        your new car is to benefit from the claim settlements in the event of
        an accident that causes damages to your new car. Let us understand when
        and how you can file a car insurance claim.
      </p>

      <div className="mt-4">
        <h3 className="text-[18px] font-bold text-[#24272C] mb-1">
          When can I file a car insurance claim?
        </h3>
        <p className="text-[14px] text-[#24272C] py-1">
          The timelines for filing a car insurance claim differ between the
          insurance providers and their policy conditions. However, in most
          cases, you must file a claim within 7 days of the incident, provided
          the policy is active.
        </p>
      </div>

      <div className="mt-4">
        <h3 className="text-[18px] font-bold text-[#24272C] mb-1">
          How can I file a car insurance claim?
        </h3>
        <p className="text-[14px] text-[#24272C] py-1">
          It is extremely daunting and worrisome to file a claim for the car
          insurance benefits for your new car due to an accident. However,
          taking timely actions can save you from financial inconsistency.
        </p>
        <p className="text-[14px] text-[#24272C] py-1">
          Here are a few steps to help you with the claim process:
        </p>
      </div>

      {/* Initiate the claim */}
      <div className="w-full mt-[10px] rounded-lg flex flex-col">
        <div
          className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
          onClick={() => setQuestion(question === 1 ? 0 : 1)}
        >
          <p className="text-[16px] text-[#1A237E]">Initiate the claim</p>
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
              Register your {" "}
              <a
                href="#" // Replace with the actual link if available
                className="text-[#007BFF]"
              >
                claim online
              </a>{" "}
              offline by providing the car insurance policy number, your
              personal details, further details regarding the accident, and FIR
              (if applicable). Upon successfully registering your claim, you
              will receive an acknowledgement or claim intimation number for
              accessing further processes.
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Inspection of the damages */}
      <div className="w-full mt-[10px] rounded-lg flex flex-col">
        <div
          className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
          onClick={() => setQuestion(question === 2 ? 0 : 2)}
        >
          <p className="text-[16px] text-[#1A237E]">
            Inspection of the damages
          </p>
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
              {/* Add content for Inspection of the damages here */}
              <p>Content for Inspection of the damages goes here.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Get your car repaired and benefit from the claim settlement */}
      <div className="w-full mt-[10px] rounded-lg flex flex-col">
        <div
          className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
          onClick={() => setQuestion(question === 3 ? 0 : 3)}
        >
          <p className="text-[16px] text-[#1A237E]">
            Get your car repaired and benefit from the claim settlement
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
              {/* Add content for Get your car repaired here */}
              <p>
                Content for Get your car repaired and benefit from the claim
                settlement goes here.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FileAClaim;