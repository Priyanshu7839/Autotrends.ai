import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import dropDownMark from "../../Asset/CarInsuranceImages/drop-down-mark.svg";

  
const AdditionalBenefits = () => {
    const [question, setQuestion] = useState(0); // Start with no question open

  const easing = [0.42, 0, 0.58, 1];
  const animationDuration = 0.3;

  const questionVariants = {
    hidden: { y: '-40%', opacity: 0 },
    visible: {
      y: 0, // Adjusted for better visual appearance - no initial -5%
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
        Add-ons - Additional Benefits
      </h2>
      <p className="text-[14px] text-[#24272C] py-1">
        The cover provided by your policy can be enhanced with some additional
        benefits based on your unique requirements. Add-ons are additional
        optional covers that you can buy with your comprehensive car insurance
        plan.
      </p>
      <p className="text-[14px] text-[#24272C] py-1">
        Here are some popular car insurance add-ons that you can buy:
      </p>

      <div className="w-full">
        {/* Question 1: Zero Depreciation */}
        <div className="w-full mt-[10px] rounded-lg flex flex-col">
          <div
            className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
            onClick={() => setQuestion(question === 1 ? 0 : 1)}
          >
            <p className="text-[16px] text-[#1A237E]"> 
              Zero Depreciation
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
                  <span className="text-[#1A237E]">Zero depreciation</span>,
                  nil depreciation, depreciation reimbursement, or
                  bumper-to-bumper (yes, all of it means the same thing) is one
                  of the most popular car insurance add-ons.
                </p>
                <p>
                  This add-on enables you to get the full value of your car's
                  parts when making a claim without any deductions for
                  depreciation. This means it boosts your insurance and gives
                  your vehicle better financial protection.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Question 2: NCB or No Claim Bonus Protection */}
        <div className="w-full mt-[10px] rounded-lg flex flex-col">
          <div
            className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
            onClick={() => setQuestion(question === 2 ? 0 : 2)}
          >
            <p className="text-[16px] text-[#1A237E]">
              NCB or No Claim Bonus Protection
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
                {/* Add Content for NCB here. For Example */}
                <p>
                  NCB protects your No Claim Bonus even if you make a claim
                  during the policy period.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Question 3: Roadside Assistance */}
        <div className="w-full mt-[10px] rounded-lg flex flex-col">
          <div
            className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
            onClick={() => setQuestion(question === 3 ? 0 : 3)}
          >
            <p className="text-[16px] text-[#1A237E]">
              Roadside Assistance
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
                {/* Add Content for Roadside Assistance here. For Example */}
                <p>
                  Roadside assistance provides help if your car breaks down.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <p className="text-[14px] text-[#24272C] py-1 mt-4">
        There are more add-ons one can consider. For instance, Tata AIG, a
        reputable car insurance provider known for policy options tailored to
        individual needs, offer 12 different add-on options such as Engine
        Secure, Tyre Secure, Daily Allowance, Emergency Transport and Hotel
        Expenses, etc. You can purchase them as bundle plans, including the
        add-ons you prefer, while availing of the benefits at a discounted
        rate.
      </p>
    </div>
  )
}

export default AdditionalBenefits