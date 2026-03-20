import React from 'react';
import rightArrow from "../../Asset/NewCarLoan/green-right-direction-svg.svg"
import newCarEligibility from "../../Asset/NewCarLoan/newcar-eligibility.webp.png"
const LoanEligibility = () => {
  return (
    <div className="relative flex gap-[16px] items-center bg-[#F5F8FE] rounded-[24px] md:rounded-[60px] shadow-md py-8 w-full">
      {/* Background Image Element */}
      <div className="max-md:hidden min-w-[30%] absolute bottom-3 -left-4 bg-cover bg-center  ">
        <img src={newCarEligibility} alt="" className='min-w-full h-[525px]' />
      </div>
      <div className="relative z-10 md:ml-[34%] px-[16px] py-[20px]">
        <h2 className="text-[28px] md:text-[36px] font-semibold mb-3 text-[#24272C] text-left">
          New Car Loan <span className="text-[#46BE88]">Eligibility</span>
        </h2>
        <p className="mb-8 text-[#24272C] text-left text-[12px] md:text-[18px]">
          You are eligible to avail a car loan if you meet the below criteria
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Salaried Individuals */}
          <div>
            <h3 className="text-[18px] md:text-[22px] font-semibold mb-4 text-[#24272C]">
              For Salaried Individuals
            </h3>
            <ul className="text-[#3D4159] space-y-2">
              <li className="flex items-baseline gap-[12px] text-[14px]">
                <img src={rightArrow} alt="" />
                Individuals who are at least 21 years old at the time of loan
                application and no older than 60 at the conclusion of the loan term.
              </li>
              <li className="flex items-baseline gap-[12px] text-[14px]">
                <img src={rightArrow} alt="" />
                Individuals who have worked for at least two years, including at least one year with their present employer
              </li>
              <li className="flex items-baseline gap-[12px] text-[14px]">
                <img src={rightArrow} alt="" />
                Those with an annual income of at least ₹3,00,000 including the income of their spouse or co-applicant
              </li>
            </ul>
          </div>

          {/* Self Employed Individuals */}
          <div>
            <h3 className="text-[18px] md:text-[22px] font-semibold mb-4 text-[#24272C]">
              For Self Employed Individuals
            </h3>
            <ul className="text-[#3D4159] space-y-2">
              <li className="flex items-baseline gap-[12px] text-[14px]">
                <img src={rightArrow} alt="" />
                Individuals who are at least 21 years old at the time of
                application and no older than 65 at the conclusion of the
                loan term are eligible.
              </li>
              <li className="flex items-baseline gap-[12px] text-[14px]">
                <img src={rightArrow} alt="" />
                Those who have been in operation for at least two years
              </li>
              <li className="flex items-baseline gap-[12px] text-[14px]">
                <img src={rightArrow} alt="" />
                Individual should earn at least ₹3,00,000 per annum
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanEligibility;