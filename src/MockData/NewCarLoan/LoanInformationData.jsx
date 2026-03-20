import creditScoreIcon from "../../Asset/NewCarLoan/loanInformationData/credit-score-svg.svg"
import interestRateIcon from "../../Asset/NewCarLoan/loanInformationData/interest-rate.svg"
import emiRepaymentsIcon from "../../Asset/NewCarLoan/loanInformationData/emi-repayment.svg"
import loanTenureIcon from "../../Asset/NewCarLoan/loanInformationData/loan-repayment.svg"
import processingFeeIcon from "../../Asset/NewCarLoan/loanInformationData/processing-fee.svg"
import preclosureIcon from "../../Asset/NewCarLoan/loanInformationData/preclosure.svg"
import downPaymentIcon from "../../Asset/NewCarLoan/loanInformationData/down-payment.svg"
import debtToIncomeIcon from "../../Asset/NewCarLoan/loanInformationData/debt-to-income-ratio.svg"


const LoanInformationData = [
  {
    id: 1,
    topic: "Credit score",
    content:
      "A credit score ranges between 300 to 850 and represents a person's creditworthiness. The minimum credit score that banks generally require is 750. This helps with best interest rates of car loan and easy loan approval. However it doesn't mean that you'll not be able to avail a loan below this.",
      image:creditScoreIcon,
  },
  {
    id: 2,
    topic: "Interest rate",
    content:
      "There are 2 types of car loan interest rates that banks offer. Fixed and Floating. The fixed rate cannot be changed, even if the RBI announces a rate reduction. A variable interest rate, on the other hand, varies with the market and is generally less expensive than the former. A high credit score, and steady source of income help in getting a low interest rate.",
      image:interestRateIcon,
  },
    {
    id: 3,
    topic: "EMI Repayments",
    content:
      "The Equated Monthly Instalment (or EMI) is made up of the principal and interest portions of the loan. As a result, the EMI equals the principal plus the interest paid on the car loan. The EMI is typically fixed for the duration of your loan.",
      image: emiRepaymentsIcon,
  },
    {
    id: 4,
    topic: "Loan repayment tenure",
    content:
      "Period beginning with the loan disbursement and ending with the last EMI payment or loan closure is called the Loan Repayment tenure. While a longer repayment tenure means a lower EMI but it also means more amount of interest. Maximum tenure for car loan repayment that most lenders offer is that of 7-8 years.",
      image: loanTenureIcon
  },
  {
    id: 5,
    topic: "Processing fee",
    content:
      "A car loan processing fee is a one-time payment that borrowers must make in order for their loan to be processed. This is typically not included in the loan and must be paid individually.",
      image: processingFeeIcon,
  },
  {
    id: 6,
    topic: "Preclosure/Foreclosure",
    content:
      "When only a part of the car loan is prepaid by the borrower, it is known as prepayment. While, when the borrower prepays the entire car loan before the end of repayment tenure, it is called as foreclosure. Not all lenders allow foreclosure. There is a fee that they charge for the same and it differs from bank to bank.",
       image: preclosureIcon,
  },
    {
    id: 7,
    topic: "Downpayment",
    content:
      "The up-front cash that is paid by the customer as a part of the total price. Although 100% financing options are available but they come with conditions. Hence, it is always advisable to pay some amount upfront as it also has numerous benefits.",
        image: downPaymentIcon,
  },
  {
    id: 8,
    topic: "Debt-to-income ratio",
    content:
      "Lenders generally assess the income and other expenses that you have and then determine if the new car loan and its EMIs are within your budget. The lender will use your debt-to-income (DTI) ratio to assess your ability to take out and repay a new loan.",
      image: debtToIncomeIcon,
  },
];


export default LoanInformationData;