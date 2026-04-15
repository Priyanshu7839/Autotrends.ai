import React from 'react';

const faqData = [
    {
        id: 1,
        question: 'How to get a new car loan?',
        answer:
            'Getting a car loan involves checking your credit score, comparing interest rates, submitting the application along with the necessary documents to the lender.',
    },
    {
        id: 2,
        question: 'What is the highest loan amount I can get with a new car loan?',
        answer:
            'The loan amount you can get typically depends on your credit score, income and the type of vehicle. Lenders generally finance around 80% of the vehicle value.',
    },
    {
        id: 3,
        question: 'Why apply for a new car loan through Rupyy ?',
        answer:
            'Rupyy provides you with best car loan options, easy application process, multiple offers, dedicated customer support and many more.',
    },
    {
        id: 4,
        question: 'How does a fixed rate car loan differ from a floating rate car loan?',
        answer:
            'In a fixed rate car loan, the interest rate remains constant for entire tenure. Whereas in a floating car loan, interest rates vary depending on the market rates.',
    },
    {
        id: 5,
        question: 'Is the rate of interest negotiable?',
        answer:
            'Interest rates are typically decided by the lenders. However you can negotiate depending on your profile and other factors.',
    },
];

const FAQs = () => {
    return (
        <div className=" py-8">
            <h2 className="text-[28px] md:text-[36px] font-semibold mb-8 ">
                Frequently  <span className="text-[#57BE88] ">Asked Questions</span></h2>
            <div className="space-y-[20px] md:space-y-[32px] min-w-full text-[14px] md:text-[16px] ">
                {faqData.map((faq) => (
                    <details key={faq.id} className="bg-[#F5F8FE] rounded-lg shadow-sm overflow-hidden min-w-full">
                        <summary className="p-4 cursor-pointer flex items-center justify-between">
                            <span className="text-[14px] md:text-[18px] text-[#333846] font-medium">{faq.question}</span>
                            <span className="text-[#333846] font-bold">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="#333846"
                                    className="w-5 h-5"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </span>
                        </summary>
                        <div className="p-4 bg-[white] text-gray-700">{faq.answer}</div>
                    </details>
                ))}
            </div>
            <div className="text-center mt-6">
                <button className="bg-[white] font-semibold shadow-sm text-[#57BE88] border border-[#EEEEEE] py-3 px-[80px] md:px-[120px] rounded-[50px] ">
                    View more{" >"}
                </button>
            </div>
        </div>
    );
};

export default FAQs;