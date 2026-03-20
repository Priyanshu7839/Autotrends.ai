import React from 'react'
import hdfc from "../../Asset/LendingPartners/hdfc.svg";
import mahindraFinance from "../../Asset/LendingPartners/mahindraFinance.svg";
import unionBank from "../../Asset/LendingPartners/unionBank.svg";
import yesBank from "../../Asset/LendingPartners/yesBank.svg";
import bankOfIndia from "../../Asset/LendingPartners/bankOfIndia.svg";
import axisBank from "../../Asset/LendingPartners/axisBank.svg";
import canaraBank from "../../Asset/LendingPartners/canaraBank.svg";
import iciciBank from "../../Asset/LendingPartners/iciciBank.svg";
import bankOfBaroda from "../../Asset/LendingPartners/bankOfBaroda.svg";
import auSmallFinance from "../../Asset/LendingPartners/auSmallFinance.svg"
import hdbFinance from "../../Asset/LendingPartners/hdbFinanceBank.svg"

const LendingPartnersData = [
    {
        id: 1,
        lenderName: "HDFC Bank",
        interestRate: 9.35,
        processingFee: "5000-6000 approximately",
        image: hdfc , 
    },
    {
        id: 2,
        lenderName: "Mahindra Finance",
        interestRate: 12,
        processingFee: "1% of the loan amount + other charges",
        image: mahindraFinance,
    },
    {
        id: 3,
        lenderName: "Union Bank of India",
        interestRate: 8.80,
        processingFee: "1000+GST approximately",
        image: unionBank,
    },
      {
        id: 4,
        lenderName: "Yes Bank",
        interestRate: 9.60,
          processingFee: "1% of the loan amount + other charges",
        image: yesBank,
    },
    {
        id: 5,
        lenderName: "Bank of India",
        interestRate: 8.85,
          processingFee: "1000-5000 approximately",
        image: bankOfIndia,
    },
        {
        id: 6,
        lenderName: "AU small finance",
        interestRate: 11.50,
          processingFee: "1% of the loan amount + other charges",
        image: auSmallFinance,
    },
    {
        id: 7,
        lenderName: "Bank of Baroda",
        interestRate: 8.85,
        processingFee: "750+GST approximately",
          image:bankOfBaroda, 
    },
  {
        id: 8,
        lenderName: "Axis Bank",
        interestRate: 9.35,
        processingFee: "3500-12000 approximately",
        image: axisBank,
  },
    {
      id: 9,
      lenderName: "Canara Bank",
        interestRate: 8.70,
        processingFee: "Nil Processing fees",
          image: canaraBank,
  },
  {
    id: 10,
      lenderName: "HDB Financial Services",
      interestRate: 10.50,
      processingFee: "4000-6000 approximately",
      image:hdbFinance,
  },
      {
        id: 11,
        lenderName: "ICICI Bank",
          interestRate: 9.45,
          processingFee: "Upto 2% of loan amount + applicable GST",
        image: iciciBank,
    },
];

export default LendingPartnersData