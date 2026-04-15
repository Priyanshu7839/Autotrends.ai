import React, { useState, useEffect } from 'react';
import flexibleLoanSVG from "../../Asset/NewCarLoan/flexible-loan-svg.svg"
import rateSVG from "../../Asset/NewCarLoan/interestRate-svg.svg"
import multipleLoanSVG from "../../Asset/NewCarLoan/multiple-loan-svg.svg"
import transparentProcessSVG from "../../Asset/NewCarLoan/transparent-process-svg.svg"
import circleSVG from "../../Asset/NewCarLoan/Component 1.png"
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
        <div className="bg-[white] py-10 md:px-[160px] relative z-[0]">
            <div className='bg-[#EBF8FF] w-full h-[250px] absolute top-0 left-0  z-[-10] '></div>
            <div className='bg-[#EBF8FF] w-full h-[250px] absolute -bottom-[90px] left-0 z-[-10] '></div>

            <div className=" flex flex-col gap-[30px] mx-auto md:px-4  ">
                <h2 className="text-[28px] md:text-[35px] font-semibold mb-4 md:mb-8 text-center ">
                    Features and <span className="text-[#57BE88] ">Benefits</span>
                </h2>

                <div className="flex md:gap-6 gap-[10px]  max-md:flex-wrap justify-center w-full ">
                    {/* Feature Card 1 */}
                    <div className="w-[180px] md:w-[268px] max-md:h-[230px] bg-[white] rounded-[20px] p-[16px] md:p-[20px] shadow-md border-[1px] border-[#DFE7FF] flex flex-col max-md:gap-4 items-center">
                        <div className=" mb-4 rounded-full bg-[white] flex justify-center items-center">
                            <img src={rateSVG} alt="" className='w-[148px] md:w-[184px] h-[74px] md:h-[92px]' />
                        </div>

                        <h3 className="text-[16px] md:text-[21px] font-semibold text-center mb-2 text-[#24272C]">
                            Attractive car loan interest rates
                        </h3>
                        <p className="text-center text-[10px]  md:text-[14px] text-[#24272C]">
                            Comparable EMIs with multiple offers.
                        </p>
                    </div>


                    {/* Feature Card 2 */}


                    <div className="w-[180px] md:w-[268px] max-md:h-[230px] bg-[white] rounded-[20px] p-[16px] md:p-[20px] shadow-md border-[1px] border-[#DFE7FF] flex flex-col max-md:gap-4 items-center">
                        <div className=" mb-4 rounded-full bg-[white] flex justify-center items-center">
                            <img src={flexibleLoanSVG} alt="" className='w-[148px] md:w-[184px] h-[74px] md:h-[92px]' />
                        </div>

                        <h3 className="text-[16px] md:text-[21px] font-semibold text-center mb-2 text-[#24272C]">
                            Flexible Loan Tenure
                        </h3>
                        <p className="text-center text-[10px]  md:text-[14px] text-[#24272C]">
                            Flexible Loan repayment tenure that can be negotiated.
                        </p>
                    </div>




                    {/* Feature Card 3 */}
                    <div className="w-[180px] md:w-[268px] max-md:h-[230px] bg-[white] rounded-[20px] p-[16px] md:p-[20px] shadow-md border-[1px] border-[#DFE7FF] flex flex-col max-md:gap-4 items-center">
                        <div className=" mb-4 rounded-full bg-[white] flex justify-center items-center">
                            <img src={multipleLoanSVG} alt="" className='w-[148px] md:w-[184px] h-[74px] md:h-[92px]' />
                        </div>

                        <h3 className="text-[16px] md:text-[21px] font-semibold text-center mb-2 text-[#24272C]">
                            Multiple loan Offers

                        </h3>
                        <p className="text-center text-[10px]  md:text-[14px] text-[#24272C]">
                            Multiple financers providing multiple offers leading to a range of
                            options for the customer.
                        </p>
                    </div>


                    {/* Feature Card 4 */}

                    <div className="w-[180px] md:w-[268px] max-md:h-[230px] bg-[white] rounded-[20px] p-[16px] md:p-[20px] shadow-md border-[1px] border-[#DFE7FF] flex flex-col max-md:gap-4 items-center">
                        <div className=" mb-4 rounded-full bg-[white] flex justify-center items-center">
                            <img src={transparentProcessSVG} alt="" className='w-[148px] md:w-[184px] h-[74px] md:h-[92px]' />
                        </div>

                        <h3 className="text-[16px] md:text-[21px] font-semibold text-center mb-2 text-[#24272C]">
                            Transparent Process

                        </h3>
                        <p className="text-center text-[10px]  md:text-[14px] text-[#24272C]">
                            All the terms & conditions are shown upfront and the customer is
                            informed at each step of the process.
                        </p>
                    </div>

                </div>


                {/* Loan Calculator Section */}
                <div className="bg-[#3D4159] text-[white] max-md:mx-[10px] py-[30px] rounded-[24px] shadow-md ">

                    <div className='flex flex-col md:flex-row gap-[10px] md:gap-[20px] items-center'>
                        <div className='md:w-[20%] '>
                            <div className=" flex items-center justify-center  relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] mx-auto mb-4">
                                <img src={circleSVG} alt="" />
                                <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center rounded-full">
                                    <p className="text-[12px] text-[white] text-center font-normal">
                                        EMI PER MONTH
                                        <br />
                                        <span className='text-[24px] md:text-[27px] font-semibold'>₹{emi}</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-4 md:w-[80%] '>
                            <div className="grid  md:grid-cols-3 gap-[26px] md:px-[20px] max-md:pt-[10px] md:border-l-[1px] border-t-[1px] border-[white] border-opacity-10 ">
                                {/* Loan Amount */}
                                <div className='col-span-1 flex flex-col gap-[20px]'>
                                    <div className='flex justify-between'>
                                        <label
                                            htmlFor="loanAmount"
                                            className="block mb-1 text-[12px] md:text-[14px] "
                                        >
                                            Loan Amount
                                        </label>
                                        <div className='bg-[white] rounded-md px-[16px] py-1'>
                                            <p className='text-[12px] md:text-[14px] text-[black]'>{loanAmount}</p>
                                        </div>

                                    </div>
                                    <div className='flex items-center  '>
                                        <input
                                            type="range"
                                            min={50000}
                                            max={2500000}
                                            step={50000}
                                            value={loanAmount}
                                            onChange={handleLoanAmountChange}
                                            className="w-full h-1 md:h-2 bg-[#898989] rounded-lg appearance-none  cursor-pointer accent-[white] "
                                        />

                                    </div>
                                    <div className='flex justify-between text-[#ADADAD]'>
                                        <span className=' text-[12px] md:text-[14px] text-opacity-70'>₹ {loanAmount / 1000}K</span>
                                        <span className='  text-[12px] md:text-[14px]'>₹ {loanAmount / 100000}L</span>
                                    </div>
                                </div>

                                {/* Tenure (Months) */}
                                <div className='col-span-1 flex flex-col gap-[20px]'>
                                    <div className='flex justify-between'>
                                        <label
                                            htmlFor="tenure"
                                            className="block mb-1 text-[12px] md:text-[14px] "
                                        >
                                            Tenure(Months)
                                        </label>
                                        <div className='bg-[white] rounded-md px-[16px] py-1'>
                                            <p className='text-[12px] md:text-[14px] text-[black]'>{tenureInMonths}</p>
                                        </div>
                                    </div>

                                    <div className='flex items-center'>
                                        <input
                                            type="range"
                                            min={12}
                                            max={60}
                                            value={tenureInMonths}
                                            onChange={handleTenureChange}
                                            className="w-full h-1 md:h-2 bg-[#898989] rounded-lg appearance-none cursor-pointer accent-[white]"
                                        />
                                    </div>
                                    <div className='flex justify-between text-[#ADADAD]'>
                                        <span className=' text-[12px] md:text-[14px]'>12</span>
                                        <span className='  text-[12px] md:text-[14px]'>60</span>
                                    </div>
                                </div>

                                {/* Interest Rate (P.A.) */}
                                <div className='col-span-1 flex flex-col gap-[20px]'>
                                    <div className='flex justify-between'>
                                        <label
                                            htmlFor="interestRate"
                                            className="block mb-1 text-[12px] md:text-[14px] "
                                        >
                                            Interest rate* (P.A.)
                                        </label>
                                        <div className='bg-[white] rounded-md px-[16px] py-1'>
                                            <p className='text-[12px] md:text-[14px] text-[black]'>{interestRate}</p>
                                        </div>

                                    </div>
                                    <div className='flex items-center '>
                                        <input
                                            type="range"
                                            min={10}
                                            max={30}
                                            value={interestRate}
                                            onChange={handleInterestRateChange}
                                            className="w-full h-1 md:h-2 bg-[#898989] rounded-lg appearance-none cursor-pointer accent-[white]"
                                        />
                                    </div>
                                    <div className='flex justify-between text-[#ADADAD]'>
                                        <span className=' text-[12px] md:text-[14px]'>10 %</span>
                                        <span className='  text-[12px] md:text-[14px]'>30 %</span>
                                    </div>
                                </div>
                            </div>

                            <div className='flex md:flex-row flex-col gap-2 md:gap-[100px] items-center md:px-[20px] py-[14px] md:bg-[#FFFFFF] bg-opacity-10'>
                                <div className="flex md:gap-[60px] text-[12px] md:text-[14px]">
                                    <div className="text-opacity-70">
                                        <p className=" mb-1">
                                            • Principal Loan Amt.
                                        </p>
                                        <p className="">₹{loanAmount}</p>
                                    </div>
                                    <div className="">
                                        <p className="mb-1">
                                            • Interest Amount
                                        </p>
                                        <p className="">₹{calculateInterestAmount()}</p>
                                    </div>
                                    <div className="">
                                        <p className=" mb-1">
                                            • Payable Amount
                                        </p>
                                        <p className="font-semibold text-[16px] md:text-[20px] ">₹{payableAmount}</p>
                                    </div>
                                </div>

                                <button
                                    className="bg-[#46BE88] text-[white] font-semibold leading-[35px] px-[44px] rounded-full"
                                    onClick={() => { }}
                                >
                                    Apply Loan
                                </button>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BenefitsAndFeatures;