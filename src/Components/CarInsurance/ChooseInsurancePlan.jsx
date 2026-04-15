import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import dropDownMark from "../../Asset/CarInsuranceImages/drop-down-mark.svg"; // Ensure the path is correct

const ChooseInsurancePlan = () => {
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
      <h2 className="text-[20px] font-bold text-[#1A237E] mb-2">
        Choose an insurance plan
      </h2>
      <p className="text-[14px] text-[#24272C] py-1">
        After getting the insurance quotes, it is time to choose an insurance
        policy. And for that, you need to evaluate your budget against the
        insurance cost for your new car.
      </p>

      {/* What is the insurance cost for a new car? */}
      <div className="mt-4">
        <h3 className="text-[18px] font-bold text-[#24272C] mb-1">
          What is the insurance cost for a new car?
        </h3>
        <p className="text-[14px] text-[#24272C] py-1">
          As we had discussed already, the insurance coverage and the
          applicable cost are determined based on the type of car and car
          insurance coverage required.
        </p>
        <p className="text-[14px] text-[#24272C] py-1">
          While the mandatory third-party car insurance coverage cost is
          pre-determined by IRDAI, the comprehensive and stand-alone car
          insurance cost is based on individual insurance providers’ policy
          features and conditions.
        </p>
        <p className="text-[14px] text-[#24272C] py-1">
          The price range can vary based on the market value of your car, for
          example, ₹10 lakhs, ₹12 lakhs, ₹25 lakhs, etc.
        </p>
      </div>

      {/* Third-party insurance premium */}
      <div className="w-full mt-[10px] rounded-lg flex flex-col">
        <div
          className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
          onClick={() => setQuestion(question === 1 ? 0 : 1)}
        >
          <p className="text-[16px] text-[#1A237E]">
            Third-party insurance premium
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
              {/* Table */}
              <table className="w-full">
                <thead className='border-t border-b-[2px] border-[#DEE2E6]'>
                  <tr className=' text-[#212529] font-bold'>
                    <th className="text-left py-[12px] px-[12px]">Engine Cubic Capacity (CC)</th>
                    <th className="text-left py-[12px] px-[12px]">Premium notified by IRDAI</th>
                  </tr>
                </thead>
                <tbody className=''>
                  <tr className=' border-b border-[#DEE2E6]'>
                    <td className='py-[12px] px-[12px]'>Less than 1000</td>
                    <td className='py-[12px] px-[12px]'>Rs. 2094</td>
                  </tr>
                  <tr className=' border-b border-[#DEE2E6] py-[12px] leading-[24px]'>
                    <td className='py-[12px] px-[12px]'>Between 1000 and 1500</td>
                    <td className='py-[12px] px-[12px]'>Rs. 3416</td>
                  </tr>
                  <tr className=' py-[12px] leading-[24px]'>
                    <td className='py-[12px] px-[12px]'>More than 1500</td>
                    <td className='py-[12px] px-[12px]'>Rs. 7897</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Comprehensive car insurance premium */}
      <div className="w-full mt-[10px] rounded-lg flex flex-col">
        <div
          className={`flex w-full justify-between items-center font-bold px-2 py-2 cursor-pointer`}
          onClick={() => setQuestion(question === 2 ? 0 : 2)}
        >
          <p className="text-[16px] text-[#1A237E]">
            Comprehensive car insurance premium
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
              {/* Add content for Comprehensive Car Insurance here */}
              <p>Content for Comprehensive Car Insurance goes here.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* What is the policy tenure for your car insurance plan? */}
      <div className="mt-4">
        <h3 className="text-[18px] font-bold text-[#24272C] mb-1">
          What is the policy tenure for your car insurance plan?
        </h3>
        <p className="text-[14px] text-[#24272C] py-1">
          Generally, a car insurance plan is purchased for one policy year and
          renewed at the end of the year with the revised pricing based on the
          depreciation and claims history.
        </p>
        <p className="text-[14px] text-[#24272C] py-1">
          However, for a new car, the Supreme Court has made it mandatory to
          purchase it with a 3-year third-party insurance cover.
        </p>
        <p className="text-[14px] text-[#24272C] py-1">
          Further, you can enhance the coverage by purchasing a comprehensive
          car insurance plan with a one-year policy tenure or a long-term
          policy with 3 or 5 years based on your insurer's policy conditions.
          If you choose the long-term policy with 3 or 5 years, you can make
          the premium payment as a lump sum.
        </p>
      </div>
    </div>
  );
};

export default ChooseInsurancePlan;