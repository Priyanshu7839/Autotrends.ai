import CustomerImage from "../../assets/Images/CustomerImage.png";
import {
  FetchCustomerSales,
  FetchCustomerSalesHeader,
} from "../../utils/APICalls";
import React, { useEffect, useRef, useState } from "react";
import { FaPhoneAlt, FaRegHandshake, FaWhatsapp } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";
import { IoIosArrowDown, IoIosCall } from "react-icons/io";
import { MdOutlineEmail, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiArrowDownLine, RiCalendarScheduleLine } from "react-icons/ri";
import { TbClockShield } from "react-icons/tb";
import { useSelector } from "react-redux";

const CustomerPreviewWindow = ({
  customerDetailsShow,
  setCustomerDetailsShow,
  customerDetails,
}) => {
  const [ButtonSwitch, setButtonSwitch] = useState({
    firstButton: false,
    secondButton: false,
    thirdButton: false,
    fourthButton: false,
  });

  return (
    customerDetails && (
      <div
        className={`absolute top-0 left-0 w-full h-full p-[1rem] bg-[white] flex gap-[.5rem] z-[999] ${
          customerDetailsShow ? "" : "hidden"
        }`}
      >
        <div
          className="w-[300px] h-full bg-[white] border-[1px] border-[#cfcfd7] rounded-[10px] flex flex-col justify-between gap-[1rem] overflow-y-scroll py-[2rem]"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="w-full p-[1rem] flex flex-col gap-[.5rem] items-center justify-center">
            <div className="w-[120px] h-[120px] rounded-full bg-[white] overflow-hidden flex items-end justify-center">
              <img src={CustomerImage} alt="" className="w-[100px]" />
            </div>
            <h1 className="text-[1.25rem] font-2 text-center">
              {customerDetails["Registration Name"]}
            </h1>
            <h1 className="font-2-book flex items-center justify-center gap-[.5rem]">
              <ImLocation className="text-[#0b85ff] text-[1.15rem]" />{" "}
              {customerDetails?.["City"]},{customerDetails?.["State"]}
            </h1>
            <p className="font-2-book flex items-center justify-center gap-[.5rem]">
              {" "}
              <FaPhoneAlt className="text-[#0b85ff]" />{" "}
              {customerDetails?.["Contact Num1"]}
            </p>
          </div>

          <div className="w-full px-[1rem] flex flex-col gap-[.5rem] ">
            <label htmlFor="" className="font-2 text-[#43A047] ">
              Policy Details
            </label>
            <div className="w-full border-[1px] border-[#cfcfd7] rounded-[8px] p-[1rem] flex flex-col gap-[.75rem] bg-[#E8F5E9]">
              <h1 className="font-2 text-[1.25rem]">
                {customerDetails?.["Policy issuance date"]}
              </h1>

              <div className="">
                <label htmlFor="" className="font-2-book text-[.875rem]">
                  Policy Number
                </label>
                <h1 className="font-2 text-[1rem] ">
                  {customerDetails?.["Policy number"]}
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full px-[1rem] flex flex-col gap-[.5rem] ">
            <label htmlFor="" className="font-2 text-[#FFA000]">
              Engagement Snapshot
            </label>
            <div className="w-full border-[1px] border-[#cfcfd7] rounded-[8px] px-[1rem] flex flex-col gap-[.75rem] ">
              <div className="flex flex-col gap-[.5rem] py-[.5rem]">
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="font-2-book text-[.875rem]">
                    Last whatsapp
                  </label>
                  <h1 className="font-2-book text-[.875rem] text-[#0b85ff]">
                    02-Sept-2025
                  </h1>
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="font-2-book text-[.875rem] ">
                    Last Telecall
                  </label>
                  <h1 className="font-2-book text-[.875rem] text-[#0b85ff]">
                    03-Sept-2025
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-[1rem] flex flex-col gap-[.5rem] ">
            <label htmlFor="" className="font-2 text-[#FFA000]">
              Purchase History
            </label>
            <div className="w-full border-[1px] border-[#cfcfd7] rounded-[8px] p-[1rem] flex flex-col gap-[.75rem]">
              <h1 className="font-2 text-[1.25rem]">
                {customerDetails?.["Model"]}
              </h1>

              <div className="">
                <label htmlFor="" className="font-2-book text-[.875rem]">
                  Variant
                </label>
                <h1 className="font-2-book text-[1.25rem]">
                  {customerDetails?.["Variant"]}
                </h1>
              </div>
              <div className="">
                <label htmlFor="" className="font-2-book text-[.875rem]">
                  Color
                </label>
                <h1 className="font-2-book text-[1rem]">
                  {customerDetails?.["Color"]}
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------ */}
        <div
          className="w-[515px] overflow-y-scroll flex flex-col gap-[.5rem]"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="w-full h-[185px] border-[1px] border-[#cfcfd7] rounded-[8px] p-[1rem] flex items-start justify-between gap-[.5rem]">
            <div className="flex flex-col   justify-between  h-full gap-[1rem]">
              <div>
                <h1 className="font-2 text-[1.25rem]">
                  {customerDetails?.["Model"]}
                </h1>
                <h1 className="font-2-book"> {customerDetails?.["Variant"]}</h1>
              </div>

              <div className="flex flex-col gap-[.5rem]">
                <h1 className="font-2-book">
                  Invoice Date - <span className="font-2">02/01/2023</span>
                </h1>
                <h1 className="font-2-book">
                  Delivery Date - <span className="font-2">02/01/2023</span>
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-between h-full gap-[1rem]  w-[50%]">
              <div>
                <h1 className="font-2">Financer</h1>
                <h2 className="font-2-book">
                  {customerDetails?.["DSA/Finullcier"]}
                </h2>
                <h3 className="font-2-book">
                  Amount - Rs.{customerDetails?.["Basic Amount"]}
                </h3>
              </div>
              <div>
                <h1 className="font-2">Insurance Company Name</h1>
                <h1 className="font-2-book">
                  {customerDetails?.["Insurance company name"]}
                </h1>
              </div>
            </div>
          </div>

          <div className="h-full border-[1px] border-[#cfcfd7] rounded-[8px] p-[1rem] flex flex-col items-start justify-center gap-[1rem]">
            <h1 className="font-2 text-[1.25rem] ">
              Most Recommended Car Based On User Profile
            </h1>
            <div className="w-full border-b-[1px] border-[#cfcfd7] pb-[1rem]">
              <div className="bg-[#E8F5E9] py-[.25rem] px-[1rem] rounded-[8px] flex flex-col gap-[.5rem]">
                <h2 className="font-2-book text-[1rem] flex items-center justify-between w-full ">
                  <span className="text-[#43A047] font-2"> Kia Seltos</span>{" "}
                  <h2 className="font-2-book text-[1rem] ">
                    Kia Seltos HTE(O) 1.5 Petrol MT
                  </h2>
                </h2>

                <h2 className="font-2-book w-full flex items-center justify-between">
                  <span className="flex items-center gap-[.5rem]">
                    Ex-Showroom Price{" "}
                    <div className="w-[8px] h-[8px] rounded-full bg-[#FFC107]"></div>
                  </span>{" "}
                  <span> Rs. 11,19,000</span>{" "}
                </h2>
              </div>
            </div>
            <div className="w-full  border-b-[1px] border-[#cfcfd7] pb-[1rem]">
              <div className="py-[.25rem] px-[1rem] rounded-[8px] flex flex-col gap-[.5rem]">
                <h2 className="font-2-book text-[1rem] flex items-center justify-between w-full">
                  <span className="text-[#43A047] font-2"> Kia Seltos</span>{" "}
                  <h2 className="font-2-book text-[1rem] ">
                    Kia Seltos HTK 1.5 Petrol MT
                  </h2>
                </h2>

                <h2 className="font-2-book w-full flex items-center justify-between">
                  <span className="flex items-center gap-[.5rem]">
                    Ex-Showroom Price{" "}
                    <div className="w-[8px] h-[8px] rounded-full bg-[#FFC107]"></div>
                  </span>{" "}
                  <span> Rs. 12,64,000</span>{" "}
                </h2>
              </div>
            </div>
            <div className="w-full">
              <div className="py-[.25rem] px-[1rem] rounded-[8px] flex flex-col gap-[.5rem]">
                <h2 className="font-2-book text-[1rem] flex items-center justify-between w-full">
                  <span className="text-[#43A047] font-2"> Kia Seltos</span>{" "}
                  <h2 className="font-2-book text-[1rem] ">
                    Kia Seltos HTE 1.5 Diesel MT
                  </h2>
                </h2>

                <h2 className="font-2-book w-full flex items-center justify-between">
                  <span className="flex items-center gap-[.5rem]">
                    Ex-Showroom Price{" "}
                    <div className="w-[8px] h-[8px] rounded-full bg-[#FFC107]"></div>
                  </span>{" "}
                  <span> Rs. 12,77,000</span>{" "}
                </h2>
              </div>
            </div>
          </div>

          <div className="h-full border-[1px] border-[#cfcfd7] rounded-[8px]  flex flex-col items-start justify-center gap-[1rem] ">
            <div className="w-full bg-[#fffde7] p-[1rem] rounded-[8px] ">
              {" "}
              <h1 className="font-2 text-[1.25rem] text-[#FFA000] bg-[#FFFDE7]">
                Offer Builder
              </h1>
            </div>
            <div className="w-full flex flex-col gap-[1rem] p-[1rem]">
              <div className="flex items-end gap-[1rem] w-full">
                <div className="flex flex-col items-start gap-[.25rem] w-full">
                  <label htmlFor="" className="text-[.875rem] font-2-book">
                    Model
                  </label>
                  <input
                    type="text"
                    className="text-[.875rem] rounded-[8px] border-[1px] border-[#cfcfd7] py-[.25rem] px-[1rem] w-full outline-none"
                  />
                </div>
                <div className="flex flex-col items-start gap-[.25rem] w-full">
                  <label htmlFor="" className="text-[.875rem] font-2-book">
                    Variant
                  </label>
                  <input
                    type="text"
                    className="text-[.875rem] rounded-[8px] border-[1px] border-[#cfcfd7] py-[.25rem] px-[1rem] w-full outline-none"
                  />
                </div>
              </div>
              <div className="flex items-end gap-[1rem] w-full">
                <div className="flex flex-col items-start gap-[.25rem] w-full">
                  <label htmlFor="" className="text-[.875rem] font-2-book">
                    Ex-Showroom Price
                  </label>
                  <input
                    type="text"
                    className="text-[.875rem] rounded-[8px] border-[1px] border-[#cfcfd7] py-[.25rem] px-[1rem] w-full outline-none"
                  />
                </div>
                <div className="flex flex-col items-start gap-[.25rem] w-full">
                  <label htmlFor="" className="text-[.875rem] font-2-book">
                    Discount
                  </label>
                  <input
                    type="text"
                    className="text-[.875rem] rounded-[8px] border-[1px] border-[#cfcfd7] py-[.25rem] px-[1rem] w-full outline-none"
                  />
                </div>
              </div>
              <div className="w-full py-[.25rem] rounded-[8px] bg-[#7575751a] font-2 text-[1rem] text-[#0b85ff] flex items-center justify-between px-[1rem] ">
                <h1>Offer Preview</h1>
                <h2>Rs. 1000000</h2>
              </div>

              <div className="font-2 flex items-center gap-[1rem]">
                <button className="w-full rounded-[8px] bg-[white] border-[1px] border-[#25d366] text-[1rem] py-[.5rem] px-[1rem]  flex items-center justify-center gap-[.5rem] text-[#25D366] hover:border-[#25d366] hover:text-[white] hover:bg-[#25d366]">
                  {" "}
                  <FaWhatsapp /> Whatsapp
                </button>
                <button className="w-full rounded-[8px] hover:bg-[#0b85ff] border-[1px] border-[#0b85ff] text-[1rem] py-[.5rem] px-[1rem] hover:text-[white] text-[#0b85ff] flex items-center justify-center gap-[.5rem]">
                  <MdOutlineEmail />
                  Send Email
                </button>
                <button className="w-full rounded-[8px] hover:bg-[#0b85ff] border-[1px] border-[#0b85ff] text-[1rem] py-[.5rem] px-[1rem] hover:text-[white] text-[#0b85ff] flex items-center justify-center gap-[.5rem]">
                  <IoIosCall />
                  Talk to RM
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------ */}
        <div className="w-full h-full flex flex-col gap-[.5rem]  flex-1">
          <div className="w-full border-[1px] border-[#cfcfd7] rounded-[8px] flex flex-col gap-[.5rem] h-[185px]">
            <div className="p-[1rem] bg-[#fffdef] rounded-[8px]">
              <h1 className="font-2 text-[#ffa000]">Service History</h1>
            </div>

            <div className="flex flex-col gap-[1rem] font-2-book p-[1rem] pt-0">
              <div className="flex items-center justify-between">
                First Service
                <span>05/06/2023</span>
              </div>
              <div className="flex items-center justify-between">
                Second Service
                <span>10/02/2024</span>
              </div>
              <div className="flex items-center justify-between">
                Third Service
                <span>23/12/2024</span>
              </div>
            </div>
          </div>
          <div className=" h-full w-full rounded-[8px] flex flex-col gap-[1rem]">
            <div className="flex flex-col gap-[1rem]  border-[1px] border-[#cfcfd7] rounded-[8px]">
              <div className="p-[1rem] bg-[#fffde7] rounded-[8px]">
                <h1 className="text-[1.25rem] font-2 text-[#ffa000]">
                  Action automations
                </h1>
              </div>

              <div className="flex flex-col gap-[.5rem] p-[1rem] pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start gap-[.5rem] font-2-book">
                    <TbClockShield className="text-[#0b85ff] text-[1.25rem]" />
                    Policy Reminder
                  </div>
                  <button
                    className={`w-[40px] h-[20px] rounded-full border-[1px]  ${
                      ButtonSwitch.firstButton
                        ? "bg-[#0b85ff] border-[#0b85ff]"
                        : "bg-[#0b85ff2e] border-[#0b85ff66]"
                    }`}
                    onClick={() => {
                      setButtonSwitch({
                        ...ButtonSwitch,
                        firstButton: !ButtonSwitch.firstButton,
                      });
                    }}
                  >
                    <div
                      className={`w-[18px] h-[18px] rounded-full bg-[white] transition-all duration-150 ${
                        ButtonSwitch.firstButton
                          ? "ml-[20px]"
                          : "ml-[0px] border-[1px] border-[#0b85ff66]"
                      }`}
                    ></div>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start gap-[.5rem] font-2-book">
                    <RiCalendarScheduleLine className="text-[#0b85ff] text-[1.25rem]" />
                    Schedule Reminder
                  </div>
                  <button
                    className={`w-[40px] h-[20px] rounded-full border-[1px]  ${
                      ButtonSwitch.secondButton
                        ? "bg-[#0b85ff] border-[#0b85ff]"
                        : "bg-[#0b85ff2e] border-[#0b85ff66]"
                    }`}
                    onClick={() => {
                      setButtonSwitch({
                        ...ButtonSwitch,
                        secondButton: !ButtonSwitch.secondButton,
                      });
                    }}
                  >
                    <div
                      className={`w-[18px] h-[18px] rounded-full bg-[white] transition-all duration-150 ${
                        ButtonSwitch.secondButton
                          ? "ml-[20px]"
                          : "ml-[0px] border-[1px] border-[#0b85ff66]"
                      }`}
                    ></div>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start gap-[.5rem] font-2-book">
                    <MdOutlineEmail className="text-[#0b85ff] text-[1.25rem]" />
                    Email
                  </div>
                  <button
                    className={`w-[40px] h-[20px] rounded-full border-[1px]  ${
                      ButtonSwitch.thirdButton
                        ? "bg-[#0b85ff] border-[#0b85ff]"
                        : "bg-[#0b85ff2e] border-[#0b85ff66]"
                    }`}
                    onClick={() => {
                      setButtonSwitch({
                        ...ButtonSwitch,
                        thirdButton: !ButtonSwitch.thirdButton,
                      });
                    }}
                  >
                    <div
                      className={`w-[18px] h-[18px] rounded-full bg-[white] transition-all duration-150 ${
                        ButtonSwitch.thirdButton
                          ? "ml-[20px]"
                          : "ml-[0px] border-[1px] border-[#0b85ff66]"
                      }`}
                    ></div>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start gap-[.5rem] font-2-book">
                    <FaRegHandshake className="text-[#0b85ff] text-[1.25rem]" />
                    Talk to RM
                  </div>

                  <button
                    className={`w-[40px] h-[20px] rounded-full border-[1px]  ${
                      ButtonSwitch.fourthButton
                        ? "bg-[#0b85ff] border-[#0b85ff]"
                        : "bg-[#0b85ff2e] border-[#0b85ff66]"
                    }`}
                    onClick={() => {
                      setButtonSwitch({
                        ...ButtonSwitch,
                        fourthButton: !ButtonSwitch.fourthButton,
                      });
                    }}
                  >
                    <div
                      className={`w-[18px] h-[18px] rounded-full bg-[white] transition-all duration-150 ${
                        ButtonSwitch.fourthButton
                          ? "ml-[20px]"
                          : "ml-[0px] border-[1px] border-[#0b85ff66]"
                      }`}
                    ></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="border-[1px] border-[#cfcfd7] rounded-[8px]  flex flex-col gap-[1rem]">
              <div className="p-[1rem] rounded-[8px] bg-[#e8f5e9]">
                <h1 className="full flex items-center justify-between font-2 text-[#43A047]">
                  Offer Preview <FaArrowRightLong />
                </h1>
              </div>

              <p className="font-2-book text-[.875rem] p-[1rem] pt-0">
                Hi {customerDetails["Registration Name"]?.split(" ")[0]}!
                exclusive Offer for Kia seltos HTK at an discount price fo 30000
                just for you
              </p>
            </div>
            <button className="w-full py-[.5rem] px-[1rem] text-cetner bg-[white] border-[1px] border-[#25D366] text-[#25D366] font-2 rounded-[8px] hover:text-[white] hover:bg-[#25d366] flex items-center justify-center gap-[.5rem]">
              <FaWhatsapp className="mt-[-1px]" />
              Send Offer
            </button>
            <button className="w-full py-[.5rem] px-[1rem] text-cener border-[1px] border-[#0b85ff] font-2 rounded-[8px] text-[#0b85ff]">
              Schedule Follow Up
            </button>
            <button
              onClick={() => {
                setCustomerDetailsShow(false);
              }}
              className="w-full py-[.5rem] px-[1rem] text-cener border-[1px] border-[#0b85ff] font-2 rounded-[8px] text-[#0b85ff]"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    )
  );
};

const Customer = () => {
  const headerRef = useRef(null);
  const rowRefs = useRef([]);

  const syncScroll = (source, scrollLeft) => {
    if (source !== "header" && headerRef.current) {
      headerRef.current.scrollLeft = scrollLeft;
    }
    rowRefs.current.forEach((ref, index) => {
      if (ref && source !== index) {
        ref.scrollLeft = scrollLeft;
      }
    });
  };
  rowRefs.current = [];

  const dealershipDetails = useSelector((state) => state.DealershipDetails);

  const [customerDetailsShow, setCustomerDetailsShow] = useState(false);
  const [customerDetails, setCustomerDetails] = useState(null);

  const [modelFilter, setModelFilter] = useState([]);
  const [modelFilterShow, setModelFilterShow] = useState(false);
  const [selectedModelFilter, setSelectedModelFilter] = useState("Model");

  const [variantFilter, setVariantFilter] = useState([]);
  const [variantFilterShow, setVariantFilterShow] = useState(false);
  const [selectedVariantFilter, setSelectedVariantFilter] = useState("Variant");

  useEffect(() => {
    const customerHeadersFetch = async () => {
      try {
        const result = await FetchCustomerSalesHeader(dealershipDetails?.id);
        setModelFilter(
          result.data.filters
            .filter((data) => data.type === "Model")
            .map((model) => model.value)
        );
        setVariantFilter(
          result.data.filters
            .filter((data) => data.type === "Variant")
            .map((model) => model.value)
        );
      } catch (error) {
        console.log(error);
      }
    };

    customerHeadersFetch();
  }, []);

  const years = ["2025", "2024", "2023", "2022", "2021"];
  const [yearShow, setyearShow] = useState(false);
  const [selectedYear, setSelectedYear] = useState(years[0]);

  const months = [
    {
      name: "Jan",
      value: "01",
    },
    {
      name: "Feb",
      value: "02",
    },
    {
      name: "Mar",
      value: "03",
    },
    {
      name: "Apr",
      value: "04",
    },
    {
      name: "May",
      value: "05",
    },
    {
      name: "Jun",
      value: "06",
    },
    {
      name: "Jul",
      value: "07",
    },
    {
      name: "Aug",
      value: "08",
    },
    {
      name: "Sep",
      value: "09",
    },
    {
      name: "Oct",
      value: "10",
    },
    {
      name: "Nov",
      value: "11",
    },
    {
      name: "Dec",
      value: "12",
    },
  ];
  const [monthShow, setmonthShow] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(months[0].value);

  const [CustomerData, setCustomerData] = useState(false);

  useEffect(() => {
    const CustomerSalesFetch = async () => {
      try {
        const result = await FetchCustomerSales(
          dealershipDetails?.id,
          selectedModelFilter !== "Model" ? selectedModelFilter : null,
          selectedVariantFilter !== "Variant" ? selectedVariantFilter : null,
          selectedYear,
          selectedMonth
        );

        setCustomerData(result.data.Sales);
      } catch (error) {
        console.error(error);
      }
    };

    CustomerSalesFetch();
  }, [
    selectedYear,
    selectedMonth,
    selectedModelFilter,
    selectedVariantFilter,
    dealershipDetails?.id,
  ]);

  return (
    <div className="w-[calc(100vw-230px)] h-[100vh]  p-[1rem] font-roboto ">
      <div
        className={`w-full h-full border-[1px] border-[#cfcfd5] rounded-[20px] flex flex-col gap-[1rem]  relative ${
          customerDetailsShow ? "p-[0rem] " : "p-[1rem] overflow-y-scroll"
        }`}
        style={{ scrollbarWidth: "none" }}
      >
        <CustomerPreviewWindow
          customerDetailsShow={customerDetailsShow}
          setCustomerDetailsShow={setCustomerDetailsShow}
          customerDetails={customerDetails}
        />

        <div className="w-full p-[1rem] border-[1px] border-[#cfcfd7] rounded-[14px] flex flex-col gap-[1rem]">
          <div className="w-full flex items-center justify-between">
            <h1 className="font-2 text-[1.25rem]">Customers</h1>
            <div className="flex items-center gap-[.5rem]">
              <button
                onClick={() => {
                  setyearShow(!yearShow);
                }}
                className={`py-[.15rem] px-[1rem] border-[1px] border-[#0b85ff] text-[#0b85ff] rounded-[10px] relative flex items-center gap-[.5rem]
              ${yearShow ? "border-b-[0px] rounded-b-[0px]" : ""}
              `}
              >
                {selectedYear} <MdOutlineKeyboardArrowDown />
                <div
                  className={`absolute w-[calc(100%+2px)] flex flex-col bg-[white] z-[20] border-[1px] border-t-[0px] border-[#0b85ff] left-[-1px] top-[100%] rounded-b-[10px] ${
                    yearShow ? "" : "hidden"
                  }`}
                >
                  {years.map((year, i) => {
                    return (
                      <h1
                        key={i}
                        onClick={() => {
                          setSelectedYear(year);
                        }}
                        className="py-[.15rem] px-[1rem] hover:bg-[rgba(0,0,0,0.1)] text-[.95rem]"
                      >
                        {year}
                      </h1>
                    );
                  })}
                </div>
              </button>
              <button
                onClick={() => {
                  setmonthShow(!monthShow);
                }}
                className={`py-[.15rem] px-[1rem] border-[1px] border-[#0b85ff] text-[#0b85ff] rounded-[10px] relative flex items-center gap-[.5rem]
              ${monthShow ? "border-b-[0px] rounded-b-[0px]" : ""}
              `}
              >
                {selectedMonth}
                <MdOutlineKeyboardArrowDown />

                <div
                  className={`absolute w-[calc(100%+2px)] flex flex-col bg-[white] z-[20] border-[1px] border-t-[0px] border-[#0b85ff] left-[-1px] top-[100%] rounded-b-[10px] ${
                    monthShow ? "" : "hidden"
                  }`}
                >
                  {months.map((month, i) => {
                    return (
                      <h1
                        key={i}
                        onClick={() => {
                          setSelectedMonth(month.value);
                        }}
                        className="py-[.15rem] px-[1rem] hover:bg-[rgba(0,0,0,0.1)] text-[.95rem]"
                      >
                        {month.name}
                      </h1>
                    );
                  })}
                </div>
              </button>
              <button
                onClick={() => {
                  setModelFilterShow(!modelFilterShow);
                }}
                className={`py-[.15rem] px-[1rem] border-[1px] border-[#0b85ff] text-[#0b85ff] rounded-[10px] relative flex items-center gap-[.5rem]
              ${modelFilterShow ? "border-b-[0px] rounded-b-[0px]" : ""}
              `}
              >
                {selectedModelFilter}
                <MdOutlineKeyboardArrowDown />

                <div
                  className={`absolute w-[calc(100%+2px)] flex flex-col bg-[white] z-[20] border-[1px] border-t-[0px] border-[#0b85ff] left-[-1px] top-[100%] rounded-b-[10px] ${
                    modelFilterShow ? "" : "hidden"
                  }`}
                >
                  {modelFilter &&
                    modelFilter.map((filter, i) => {
                      return (
                        <h1
                          onClick={() => {
                            setSelectedModelFilter(filter);
                          }}
                          key={i}
                          className="py-[.15rem] px-[1rem] hover:bg-[rgba(0,0,0,0.1)] text-[.95rem]"
                        >
                          {filter}
                        </h1>
                      );
                    })}
                </div>
              </button>
              <button
                onClick={() => {
                  setVariantFilterShow(!variantFilterShow);
                }}
                className={`py-[.15rem] px-[1rem] border-[1px] border-[#0b85ff] text-[#0b85ff] rounded-[10px] relative flex items-center gap-[.5rem] w-[150px] justify-center whitespace-nowrap 
              ${variantFilterShow ? "border-b-[0px] rounded-b-[0px]" : ""}
              `}
              >
                {selectedModelFilter === "Variant"
                  ? selectedVariantFilter
                  : selectedVariantFilter?.split(" ").slice(0, 2).join(" ")}
                <MdOutlineKeyboardArrowDown />

                <div
                  className={`absolute w-[calc(100%+2px)] flex flex-col bg-[white] z-[20] border-[1px] border-t-[0px] border-[#0b85ff] left-[-1px] top-[100%] rounded-b-[10px] h-[300px] overflow-y-scroll whitespace-normal ${
                    variantFilterShow ? "" : "hidden"
                  }`}
                  style={{ scrollbarWidth: "none" }}
                >
                  {variantFilter &&
                    variantFilter.map((filter, i) => {
                      return (
                        <h1
                          onClick={() => {
                            setSelectedVariantFilter(filter);
                          }}
                          key={i}
                          className={`py-[.5rem] px-[1rem] hover:bg-[rgba(0,0,0,0.1)] text-[.95rem] border-b-[.5px] border-[#0b85ff] `}
                        >
                          {filter}
                        </h1>
                      );
                    })}
                </div>
              </button>
            </div>
          </div>

          <div
            className="py-[.5rem] px-[1rem] bg-[#0b85ff] text-[white] rounded-[10px] font-2 flex items-center justify-start gap-[1rem] overflow-x-scroll"
            ref={headerRef}
            style={{ scrollbarWidth: "none" }}
            onScroll={(e) => syncScroll("header", e.target.scrollLeft)}
          >
            <h1 className="min-w-[200px]">Name</h1>
            <h1 className="min-w-[150px]">Contact No.</h1>
            <h1 className="min-w-[150px]">Pan No.</h1>
            <h1 className="min-w-[150px]">Customer ID</h1>
            <h1 className="min-w-[100px] text-center">Model</h1>
            <h1 className="min-w-[250px]">Variant</h1>
            <h1 className="min-w-[250px]">Color</h1>
            <h1 className="min-w-[200px]">Vin Number</h1>
            <h1 className="min-w-[100px]">Dealer code</h1>
            <h1 className="min-w-[150px]">Invoice Date</h1>
            <h1 className="min-w-[150px]">Delivery Date</h1>
            <h1 className="min-w-[150px]">Invoice No</h1>
            <h1 className="min-w-[150px]">Mode Of Purchase</h1>
            <h1 className="min-w-[200px]">Financer</h1>
            <h1 className="min-w-[150px]">Basic Amount</h1>
            <h1 className="min-w-[150px]">Insurance In House</h1>
            <h1 className="min-w-[200px]">Consultant Name</h1>
            <h1 className="min-w-[150px]">Address</h1>
            <h1 className="min-w-[150px]">City</h1>
            <h1 className="min-w-[150px]">State</h1>
            <h1 className="min-w-[150px]">Pin No.</h1>
            <h1 className="min-w-[150px]">Source</h1>
            <h1 className="min-w-[150px]">Sub Source</h1>
            <h1 className="min-w-[400px]">Insurance Company Name</h1>
            <h1 className="min-w-[150px]">Policy Status</h1>
            <h1 className="min-w-[150px]">Policy No</h1>
            <h1 className="min-w-[150px]">Policy Issue Date</h1>
            <h1 className="min-w-[150px]">KMI Invoice Price</h1>
          </div>

          {CustomerData &&
            CustomerData.map((customer, i) => {
              return (
                <div
                  key={i}
                  ref={(el) => (rowRefs.current[i] = el)}
                  style={{ scrollbarWidth: "none" }}
                  onScroll={(e) => syncScroll(i, e.target.scrollLeft)}
                  onClick={() => {
                    setCustomerDetailsShow(true);
                    setCustomerDetails(customer);
                  }}
                  className="py-[.5rem] px-[1rem] bg-[white] border-[1px] border-[#cfcfd7] text-[.875rem] rounded-[10px] font-2-book flex items-center justify-start gap-[1rem] overflow-x-scroll cursor-pointer hover:border-[#0b85ff] hover:text-[#0b85ff]"
                >
                  <h1
                    className="min-w-[200px] overflow-x-scroll whitespace-nowrap"
                    style={{ scrollbarWidth: "none" }}
                  >
                    {" "}
                    {customer?.stock_data?.["Registration Name"]}
                  </h1>
                  <h1 className="min-w-[150px]">
                    {customer?.stock_data?.["Contact Num1"]}
                  </h1>
                  <h1 className="min-w-[150px]">
                    {customer?.stock_data?.["PAN No"]}
                  </h1>
                  <h1 className="min-w-[150px]">
                    {customer?.stock_data?.["CustomerID"]}
                  </h1>
                  <h1 className="min-w-[100px] text-[black] flex items-center justify-center">
                    <h1 className=" p-[.5rem] px-[1rem] bg-[#efefef] rounded-[12px] w-full text-center text-[.75rem] font-2">
                      {customer?.stock_data?.["Model"]}
                    </h1>
                  </h1>
                  <h1 className="min-w-[250px]">
                    {customer?.stock_data?.["Variant"]}
                  </h1>
                  <h1 className="min-w-[250px]">
                    {customer?.stock_data?.["Color"]}
                  </h1>
                  <h1 className="min-w-[200px]">
                    {customer?.stock_data?.["Vin Number"]}
                  </h1>
                  <h1 className="min-w-[100px]">
                    {customer?.stock_data?.["Dealer Code"]}
                  </h1>
                  <h1 className="min-w-[150px]">
                    {customer?.stock_data?.["Invoice Date"]}
                  </h1>
                  <h1 className="min-w-[150px]">
                    {customer?.stock_data?.["Delivery Date"]}
                  </h1>
                  <h1 className="min-w-[150px]">
                    {customer?.stock_data?.["Invoice No"]}
                  </h1>
                  <h1 className="min-w-[150px]">
                    {customer?.stock_data?.["Mode of Purchase"]}
                  </h1>
                  <h1
                    className="min-w-[200px] overflow-x-scroll whitespace-nowrap"
                    style={{ scrollbarWidth: "none" }}
                  >
                    {customer?.stock_data?.["DSA/Financier"]}
                  </h1>
                  <h1 className="min-w-[150px]">
                    {customer?.stock_data?.["Basic Amount"]}
                  </h1>
                  <h1 className="min-w-[150px]">
                    {customer?.stock_data?.["Insurance In house (Y/N)"]}
                  </h1>
                  <h1
                    className="min-w-[200px] overflow-x-scroll whitespace-nowrap"
                    style={{ scrollbarWidth: "none" }}
                  >
                    {customer?.stock_data?.["Consultant Name"]}
                  </h1>
                  <h1
                    className="min-w-[150px] overflow-x-scroll whitespace-nowrap"
                    style={{ scrollbarWidth: "none" }}
                  >
                    {customer?.stock_data?.["Address"]}
                  </h1>
                  <h1 className="min-w-[150px]">
                    {customer?.stock_data?.["City"]}
                  </h1>
                  <h1 className="min-w-[150px]">
                    {customer?.stock_data?.["State"]}
                  </h1>
                  <h1 className="min-w-[150px]">
                    {customer?.stock_data?.["Pin No."]}
                  </h1>
                  <h1 className="min-w-[150px]">
                    {customer?.stock_data?.["Source"]}
                  </h1>
                  <h1 className="min-w-[150px]">
                    {customer?.stock_data?.["Sub-source"]}
                  </h1>
                  <h1 className="min-w-[400px]">
                    {customer?.stock_data?.["Insurance company name"]}
                  </h1>
                  <h1 className="min-w-[150px]">
                    {customer?.stock_data?.["Policy status"]}
                  </h1>
                  <h1 className="min-w-[150px]">
                    {customer?.stock_data?.["Policy number"]}
                  </h1>
                  <h1 className="min-w-[150px]">
                    {customer?.stock_data?.["Policy issuance date"]}
                  </h1>
                  <h1 className="min-w-[150px]">
                    {customer?.stock_data?.["KMI Invoice Price"]}
                  </h1>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Customer;
