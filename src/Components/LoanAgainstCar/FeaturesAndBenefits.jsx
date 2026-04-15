import React, { useState, useEffect } from 'react';
import flexibleLoan from "../../Asset/LoanAgainstCar/flexible-loan.svg"
import lowROI from "../../Asset/LoanAgainstCar/low-roi.svg"
import multipleLenders from "../../Asset/LoanAgainstCar/multiple-lenfer.svg"
import quickProcessing from "../../Asset/LoanAgainstCar/quickprocessing-svg.svg"

import circleSVG from "../../Asset/NewCarLoan/Component 1.png"
import LoanCalculator from './LoanCalculator';
const BenefitsAndFeatures = () => {
    const [loanAmount, setLoanAmount] = useState(50000);
    const [tenureInMonths, setTenureInMonths] = useState(12);
    const [interestRate, setInterestRate] = useState(10);
    const [emi, setEmi] = useState(0);
    const [payableAmount, setPayableAmount] = useState(0);

    useEffect(() => {
        calculateEmi();
    }, [loanAmount, tenureInMonths, interestRate]);

    const calculateEmi = () => {
        const monthlyInterestRate = interestRate / 1200;
        const emiValue =
            loanAmount *
            monthlyInterestRate *
            (Math.pow(1 + monthlyInterestRate, tenureInMonths) /
                (Math.pow(1 + monthlyInterestRate, tenureInMonths) - 1));

        const payableAmountValue = (emiValue * tenureInMonths).toFixed(0);
        setPayableAmount(parseFloat(payableAmountValue));
        setEmi(parseFloat(emiValue.toFixed(0)));
    };

    const calculateInterestAmount = () => {
        return payableAmount - loanAmount
    }
    const handleLoanAmountChange = (e) => {
        setLoanAmount(parseInt(e.target.value, 10));
    };

    const handleTenureChange = (e) => {
        setTenureInMonths(parseInt(e.target.value, 10));
    };

    const handleInterestRateChange = (e) => {
        setInterestRate(parseInt(e.target.value, 10));
    };


    return (
        <div className="bg-white py-10 md:px-[160px] relative z-[0]">
            <div className='bg-[#EBF8FF] w-full h-[250px] absolute top-0 left-0  z-[-10] '></div>
            <div className='bg-[#EBF8FF] w-full h-[400px] absolute -bottom-[200px] left-0 z-[-10] '></div>

            <div className=" flex flex-col gap-[30px] mx-auto md:px-4  ">
                <h2 className="text-[28px] md:text-[35px] font-semibold mb-4 md:mb-8 text-center ">
                    Features and <span className="text-[#57BE88] ">Benefits</span>
                </h2>

                <div className="flex md:gap-6 gap-[10px]  max-md:flex-wrap justify-center w-full ">
                    {/* Feature Card 1 */}
                    <div className="w-[180px] md:w-[268px] max-md:h-[230px] bg-[white] rounded-[20px] p-[16px] md:p-[20px] shadow-md border-[1px] border-[#DFE7FF] flex flex-col max-md:gap-4 items-center">
                        <div className=" mb-4 rounded-full bg-[white] flex justify-center items-center">
                            <img src={quickProcessing} alt="" className='w-[148px] md:w-[184px] h-[74px] md:h-[92px]' />
                        </div>

                        <h3 className="text-[16px] md:text-[21px] font-semibold text-center mb-2 text-[#24272C]">
                            Quick Processing
                        </h3>
                        <p className="text-center text-[10px] md:text-[14px] text-[#24272C]">
                            Loans that can be processed in
                            less than 2 days.
                        </p>
                    </div>


                    {/* Feature Card 2 */}


                    <div className="w-[180px] md:w-[268px] max-md:h-[230px] bg-[white] rounded-[20px] p-[16px] md:p-[20px] shadow-md border-[1px] border-[#DFE7FF] flex flex-col max-md:gap-4 items-center">
                        <div className=" mb-4 rounded-full bg-[white] flex justify-center items-center">
                            <img src={lowROI} alt="" className='w-[148px] md:w-[184px] h-[74px] md:h-[92px]' />
                        </div>

                        <h3 className="text-[16px] md:text-[21px] font-semibold text-center mb-2 text-[#24272C]">
                            Lower ROI than
                            Personal loans
                        </h3>
                        <p className="text-center text-[10px] md:text-[14px] text-[#24272C]">
                            ROI on loan against used car is
                            less than ROI on personal loans.
                        </p>
                    </div>




                    {/* Feature Card 3 */}
                    <div className="w-[180px] md:w-[268px] max-md:h-[230px] bg-[white] rounded-[20px] p-[16px] md:p-[20px] shadow-md border-[1px] border-[#DFE7FF] flex flex-col max-md:gap-4 items-center">
                        <div className=" mb-4 rounded-full bg-[white] flex justify-center items-center">
                            <img src={flexibleLoan} alt="" className='w-[148px] md:w-[184px] h-[74px] md:h-[92px]' />
                        </div>

                        <h3 className="text-[16px] md:text-[21px] font-semibold text-center mb-2 text-[#24272C]">
                            Flexible Loan Tenure

                        </h3>
                        <p className="text-center text-[10px] md:text-[14px] text-[#24272C]">
                            Flexible Loan repayment tenure
                            that can be negotiated.
                        </p>
                    </div>


                    {/* Feature Card 4 */}

                    <div className="w-[180px] md:w-[268px] max-md:h-[230px] bg-[white] rounded-[20px] p-[16px] md:p-[20px] shadow-md border-[1px] border-[#DFE7FF] flex flex-col max-md:gap-4 items-center">
                        <div className=" mb-4 rounded-full bg-[white] flex justify-center items-center">
                            <img src={multipleLenders} alt="" className='w-[148px] md:w-[184px] h-[74px] md:h-[92px]' />
                        </div>

                        <h3 className="text-[16px] md:text-[21px] font-semibold text-center mb-2 text-[#24272C]">
                            Multiple Lenders

                        </h3>
                        <p className="text-center text-[10px] md:text-[14px] text-[#24272C]">
                            Get best offers from multiple
                            lenders
                        </p>
                    </div>

                </div>


                {/* Loan Calculator Section */}
                <LoanCalculator />


            </div>
        </div>
    );
};

export default BenefitsAndFeatures;