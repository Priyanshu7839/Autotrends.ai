import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import dropDownMark from "../../Asset/CarInsuranceImages/drop-down-mark.svg"; 

const CarInsuranceTerms = () => {
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
    <div className="w-full">
      <h2 className="text-[20px] font-bold text-[#24272C] mb-2">
        Understanding Car Insurance Terms - Glossary
      </h2>
      <p className="text-[14px] text-[#24272C] py-1">
        When purchasing a car insurance plan for your new car, knowing the
        related terms is essential. Here are a few terms that you need to know.
      </p>

      <div className="w-full">
        {/* Question 1: Coverage */}
        <div className="w-full mt-[10px] rounded-lg flex flex-col">
          <div
            className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
            onClick={() => setQuestion(question === 1 ? 0 : 1)}
          >
            <p className="text-[16px] text-[#1A237E]">Coverage</p>
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
                Coverage refers to the financial protection offered for the car,
                considering all the risk factors. It is based on the type of
                car insurance plan and the add-on covers chosen, inclusions and
                exclusions of the policy.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Question 2: Premium */}
        <div className="w-full mt-[10px] rounded-lg flex flex-col">
          <div
            className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
            onClick={() => setQuestion(question === 2 ? 0 : 2)}
          >
            <p className="text-[16px] text-[#1A237E]">Premium</p>
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
                {/* Add Content for Premium here. Example: */}
                <p>
                  The premium is the amount you pay to the insurance company for
                  the coverage.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Question 3: IDV */}
        <div className="w-full mt-[10px] rounded-lg flex flex-col">
          <div
            className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
            onClick={() => setQuestion(question === 3 ? 0 : 3)}
          >
            <p className="text-[16px] text-[#1A237E]">IDV</p>
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
                {/* Add Content for IDV here. Example: */}
                <p>IDV stands for Insured Declared Value.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Question 4: Zero Depreciation */}
        <div className="w-full mt-[10px] rounded-lg flex flex-col">
          <div
            className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
            onClick={() => setQuestion(question === 4 ? 0 : 4)}
          >
            <p className="text-[16px] text-[#1A237E]">Zero Depreciation</p>
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
                {/* Add Content for Zero Depreciation here. Example: */}
                <p>
                  Zero Depreciation cover ensures you get the full claim amount
                  without any deduction for depreciation.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Question 5: No Claim Bonus */}
        <div className="w-full mt-[10px] rounded-lg flex flex-col">
          <div
            className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
            onClick={() => setQuestion(question === 5 ? 0 : 5)}
          >
            <p className="text-[16px] text-[#1A237E]">No Claim Bonus</p>
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
                {/* Add Content for No Claim Bonus here. Example: */}
                <p>
                  No Claim Bonus (NCB) is a discount you get for not making any
                  claims during the policy period.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Question 6: Personal Accident Insurance */}
        <div className="w-full mt-[10px] rounded-lg flex flex-col">
          <div
            className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
            onClick={() => setQuestion(question === 6 ? 0 : 6)}
          >
            <p className="text-[16px] text-[#1A237E]">Personal Accident Insurance</p>
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
                {/* Add Content for Personal Accident Insurance here. Example: */}
                <p>
                  Personal Accident Insurance provides coverage for accidental
                  injuries or death.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Question 7: Own Damage Cover */}
        <div className="w-full mt-[10px] rounded-lg flex flex-col">
          <div
            className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
            onClick={() => setQuestion(question === 7 ? 0 : 7)}
          >
            <p className="text-[16px] text-[#1A237E]">Own Damage Cover</p>
            <img
              src={dropDownMark}
              alt=""
              className={`w-[14px] h-[8px] transition-transform duration-300 ${
                question === 7 ? 'rotate-180' : ''
              }`}
            />
          </div>
          <AnimatePresence>
            {question === 7 && (
              <motion.div
                variants={questionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-[14px] text-[#24272C] px-2 py-1"
              >
                {/* Add Content for Own Damage Cover here. Example: */}
                <p>Own Damage Cover protects your car from damages.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Question 8: Consumables */}
        <div className="w-full mt-[10px] rounded-lg flex flex-col">
          <div
            className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
            onClick={() => setQuestion(question === 8 ? 0 : 8)}
          >
            <p className="text-[16px] text-[#1A237E]">Consumables</p>
            <img
              src={dropDownMark}
              alt=""
              className={`w-[14px] h-[8px] transition-transform duration-300 ${
                question === 8 ? 'rotate-180' : ''
              }`}
            />
          </div>
          <AnimatePresence>
            {question === 8 && (
              <motion.div
                variants={questionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-[14px] text-[#24272C] px-2 py-1"
              >
                {/* Add Content for Consumables here. Example: */}
                <p>Consumables refer to items like engine oil, nuts & bolts.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Question 9: Cashless claims */}
        <div className="w-full mt-[10px] rounded-lg flex flex-col">
          <div
            className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
            onClick={() => setQuestion(question === 9 ? 0 : 9)}
          >
            <p className="text-[16px] text-[#1A237E]">Cashless claims</p>
            <img
              src={dropDownMark}
              alt=""
              className={`w-[14px] h-[8px] transition-transform duration-300 ${
                question === 9 ? 'rotate-180' : ''
              }`}
            />
          </div>
          <AnimatePresence>
            {question === 9 && (
              <motion.div
                variants={questionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-[14px] text-[#24272C] px-2 py-1"
              >
                {/* Add Content for Cashless claims here. Example: */}
                <p>
                  Cashless claims allow you to get your car repaired without
                  paying upfront.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Question 10: Reimbursement claims */}
        <div className="w-full mt-[10px] rounded-lg flex flex-col">
          <div
            className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
            onClick={() => setQuestion(question === 10 ? 0 : 10)}
          >
            <p className="text-[16px] text-[#1A237E]">Reimbursement claims</p>
            <img
              src={dropDownMark}
              alt=""
              className={`w-[14px] h-[8px] transition-transform duration-300 ${
                question === 10 ? 'rotate-180' : ''
              }`}
            />
          </div>
          <AnimatePresence>
            {question === 10 && (
              <motion.div
                variants={questionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-[14px] text-[#24272C] px-2 py-1"
              >
                {/* Add Content for Reimbursement claims here. Example: */}
                <p>
                  Reimbursement claims require you to pay for the repairs
                  first and then get reimbursed.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CarInsuranceTerms;