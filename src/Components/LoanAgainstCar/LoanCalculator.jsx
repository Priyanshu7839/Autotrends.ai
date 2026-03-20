import React, { useState } from 'react';
import circle from "../../Asset/NewCarLoan/Component 1.png"

const LoanCalculator = () => {
    // Current Loan Details State
    const [emiAmount, setEmiAmount] = useState(20000);
    const [originalLoanAmount, setOriginalLoanAmount] = useState(600000);
    const [originalLoanTenure, setOriginalLoanTenure] = useState(18);
    const [emisPaid, setEmisPaid] = useState(12);

    // Required Loan Details State
    const [loanDuration, setLoanDuration] = useState(12);
    const [interestRate, setInterestRate] = useState(12);

    //Calculated Values
    const [totalLoanAmount, setTotalLoanAmount] = useState(312000);
    const [emiPerMonth, setEmiPerMonth] = useState(27721);

    // State for Loan Details
    const [loanAmount, setLoanAmount] = useState(50000);
    const [tenureInMonths, setTenureInMonths] = useState(12);


    const handleLoanAmountChange = (e) => {
        setLoanAmount(parseInt(e.target.value, 10));
    };

    const handleTenureChange = (e) => {
        setTenureInMonths(parseInt(e.target.value, 10));
    };
    const handleInterestRateChange = (e) => {
        setInterestRate(parseInt(e.target.value, 10));
    };

    const calculateInterestAmount = () => {
        return (loanAmount * (interestRate / 100) * (tenureInMonths / 12)).toFixed(0);
    }

    const calculatePayableAmount = () => {
        return parseInt(loanAmount) + parseInt(calculateInterestAmount())
    }
    const payableAmount = calculatePayableAmount()


    const handleSliderChange = (setter, value) => {
        setter(parseInt(value, 10));
    };


    return (
        <div className="bg-[#3D4159] text-[white] py-[30px] rounded-[24px] shadow-md ">
            <div className='flex md:flex-row flex-col gap-[20px] items-center'>
                <div className='md:w-[40%] w-full px-[15px] md:px-[30px] '>
                    {/* Left Section */}
                    <div className="flex flex-col gap-3">
                        {/* Loan Details Circle */}
                        <div className=" flex items-center justify-center  relative  w-[160px] h-[160px] md:w-[200px] md:h-[200px] mx-auto mb-0">
                            <img src={circle} alt="" />
                            <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center rounded-full">
                                <p className="text-[12px] text-[white] text-center font-normal">
                                    EMI PER MONTH
                                    <br />
                                    <span className='text-[27px] font-semibold'>₹{emiPerMonth}</span>
                                </p>
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div className="text-sm text-gray-300 mb-1">Total Loan Amount</div>
                            <div className="text-lg text-[white] mb-2">₹ {totalLoanAmount.toLocaleString('en-IN')}</div>

                        </div>

                        <div className='flex justify-between'>
                            <div className="text-sm text-gray-300 mb-1">Foreclosure Charges</div>
                            <div className="text-lg text-[white] mb-2">₹ 0</div>

                        </div>
                        <div className='border border-[white] h-[0px] border-opacity-20 w-full'></div>

                        <div className='flex justify-between font-medium'>

                            <div className="text-[15px] text-gray-300 mb-1">Cash In Hand</div>
                            <div className="text-[15px] text-[white] mb-4">₹ {totalLoanAmount.toLocaleString('en-IN')}</div>
                        </div>

                        <div>
                            <button className="bg-[#0B66FA] text-[white] font-bold py-2 px-4 rounded-[100px] focus:outline-none focus:shadow-outline w-full text-center">
                                Apply Now
                            </button>
                            <p className="text-[10px] md:text-[12px] text-gray-400 mt-2">Getting A Loan Against Your Car Is Quick, Easy And Hassle-Free</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-[60px] md:w-[60%] w-full '>
                    {/* Current and Required Loan Details */}
                    <div className="flex flex-col gap-[26px] px-[20px] md:border-l-[1px] md:border-white md:border-opacity-10 ">
                        <div className="col-span-1">
                            <h2 className="text-[22px] font-medium text-[white] mb-4">CURRENT LOAN DETAILS</h2>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-2">
                                <div className="mb-2 bg-[#F5F8FE] rounded-md px-[8px] py-1 md:py-[8px]">
                                    <div className="text-sm text-[#7B8AA2] ">EMI Amount of Current Loan</div>
                                    <div className="text-base text-[#282C32]">₹ {emiAmount.toLocaleString('en-IN')}</div>
                                </div>
                                <div className="mb-2 bg-[#F5F8FE] rounded-md px-[8px] py-1 md:py-[8px]">
                                    <div className="text-sm text-[#7B8AA2] ">Original Loan Amount of Current Loan</div>
                                    <div className="text-base text-[#282C32]">₹ {originalLoanAmount.toLocaleString('en-IN')}</div>
                                </div>
                            </div>
                            <div className="flex max-md:flex-col md:gap-4 gap-8 mt-4 items-center">
                                <div className="w-full md:w-1/2 flex flex-col gap-4">
                                    <div className='flex justify-between'>
                                        <div className="text-sm text-gray-300 mb-1">Original Loan Tenure</div>
                                        <div className="text-sm text-gray-300 mb-1">{"18"} Months</div>
                                    </div>
                                    <div className='flex items-center'>
                                        <input
                                            type="range"
                                            min={12}
                                            max={60}
                                            value={originalLoanTenure}
                                            onChange={(e) => handleSliderChange(setOriginalLoanTenure, e.target.value)}
                                            className="w-full h-2 bg-[#898989] rounded-lg appearance-none cursor-pointer accent-white"
                                        />
                                    </div>
                                    <div className='flex justify-between text-[#ADADAD]'>
                                        <span className=' text-[14px]'>12 Months</span>
                                        <span className='  text-[14px]'>60 Months</span>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col gap-4">
                                    <div className='flex justify-between'>
                                        <div className="text-sm text-gray-300 mb-1">Number of EMIs Paid</div>
                                        <div className="text-sm text-gray-300 mb-1">{"12"} Months</div>
                                    </div>

                                    <div className='flex items-center'>
                                        <input
                                            type="range"
                                            min={12}
                                            max={60}
                                            value={emisPaid}
                                            onChange={(e) => handleSliderChange(setEmisPaid, e.target.value)}
                                            className="w-full h-2 bg-[#898989] rounded-lg appearance-none cursor-pointer accent-white"
                                        />
                                    </div>
                                    <div className='flex justify-between text-[#ADADAD]'>
                                        <span className=' text-[14px]'>12 Months</span>
                                        <span className='  text-[14px]'>60 Months</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border border-white h-[0px] border-opacity-20 w-full'></div>

                        <div className="col-span-1">
                            {/* Required Loan Details */}
                            <h2 className="text-lg font-semibold text-[white] mb-2">REQUIRED LOAN DETAILS</h2>
                            <div className="flex max-md:flex-col gap-4 max-md:gap-8 items-center">
                                <div className="w-full md:w-1/2 flex flex-col gap-4">
                                    <div className='flex justify-between'>
                                        <div className="text-sm text-gray-300 mb-1">Duration of Loan</div>
                                        <div className="text-sm text-gray-300 mb-1">{"12"} Months</div>
                                    </div>

                                    <div className='flex items-center'>
                                        <input
                                            type="range"
                                            min={12}
                                            max={60}
                                            value={loanDuration}
                                            onChange={(e) => handleSliderChange(setLoanDuration, e.target.value)}
                                            className="w-full h-2 bg-[#898989] rounded-lg appearance-none cursor-pointer accent-white"
                                        />
                                    </div>
                                    <div className='flex justify-between text-[#ADADAD]'>
                                        <span className=' text-[14px]'>12 Months</span>
                                        <span className='  text-[14px]'>60 Months</span>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col gap-4">
                                    <div className='flex justify-between'>
                                        <div className="text-sm text-gray-300 mb-1">Interest Rate*</div>
                                        <div className="text-sm text-gray-300 mb-1">{"12"} %</div>
                                    </div>

                                    <div className='flex items-center'>
                                        <input
                                            type="range"
                                            min={10}
                                            max={25}
                                            value={interestRate}
                                            onChange={(e) => handleSliderChange(setInterestRate, e.target.value)}
                                            className="w-full h-2 bg-[#898989] rounded-lg appearance-none cursor-pointer accent-white"
                                        />
                                    </div>
                                    <div className='flex justify-between text-[#ADADAD]'>
                                        <span className=' text-[14px]'>12%</span>
                                        <span className='  text-[14px]'>25%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Loan Details */}


                </div>
            </div>
        </div>
    );
};

export default LoanCalculator;