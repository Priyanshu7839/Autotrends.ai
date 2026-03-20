import { IoArrowForward } from "react-icons/io5";
import { QuotationsList } from "../../Utils/APICalls";
import MetaIcon from "../../assets/Images/MetaIcon.png";
import React, { useEffect, useState, useRef } from "react";
import { OldDataLeads } from "..";
import { FaWhatsapp } from "react-icons/fa";
import OldDataLeadsIMG from '../../assets/Images/OldDataLeads.PNG'
import AllDataLeads from '../../assets/Images/AllDataLeads.PNG'

const Leads = () => {
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

  // Clear old refs on rerender
  rowRefs.current = [];

  const [LeadsArray, setLeadsArray] = useState([]);

  useEffect(() => {
    const Lead = async () => {
      const result = await QuotationsList();
      setLeadsArray(result.data.msg);
    };
    Lead();
  }, []);

  const LeadsOptionsArray = [
    "Area Specific",
    "Dealer Specific",
    "Big Deals Lead",
  ];
  const [LeadsOptionsSelected, setLeadsOptionsSelected] = useState(
    LeadsOptionsArray[0]
  );
  const [LeadsOptionsShow, setLeadsOptionsShow] = useState(false);


  const [OldDataLeadsShow,setOldDataLeadsShow] = useState(false);

  const LeadsHeaders = [
    {
      count: "1682",
      name: "All Leads",
      icon: AllDataLeads,
    },
    {
      count: "30",
       name: "Old Data Leads",
      icon: OldDataLeadsIMG,
      click:(()=>{setOldDataLeadsShow(true)})
    },
    {
      count: "43",
      name: "Whatsapp Leads",
      icon2: <FaWhatsapp  className="text-[2.5rem] text-[#25d366]"/>
    },
    {
      count: "14",
      name: "Meta Leads",
      icon: MetaIcon,
    }
  ];




  return (
    <div className="w-[calc(100vw-230px)] h-[100vh]  p-[1rem] font-roboto ">
      <div
        className={`w-full h-full border-[1px] border-[#cfcfd5] rounded-[20px]  flex flex-col gap-[1rem] relative
          ${OldDataLeadsShow?'p-[0rem] overflow-hidden':'p-[1rem] overflow-y-scroll'}
          `}
        style={{ scrollbarWidth: "none" }}
      >

        <OldDataLeads OldDataLeadsShow={OldDataLeadsShow} setOldDataLeadsShow={setOldDataLeadsShow}/>
       

        <h1 className="text-[1.25rem] font-2">Leads</h1>

        <div className="w-full  flex  gap-[1rem] flex-wrap">
          {LeadsHeaders.map((head, i) => {
            return (
              <div
                key={i}
                className="p-[1rem] border-[1px] border-[#cfcfd7] rounded-[8px] flex flex-col gap-[1rem] h-fit w-[23.9%]"
              >
               <div className="flex items-center justify-between gap-[1rem]">
                 <div className="flex flex-col">
                  <h1 className="text-[2rem] font-2">{head.count}</h1>
                  <p className="text-[.875rem] font-2-book">{head.name}</p>
                </div>

                <img src={head.icon} alt="" className="w-[50px]" />
                {head.icon2}
               </div>

               <button className="text-[#0b85ff] font-2 flex items-center gap-[1rem]"
               onClick={head.click}
               >View <IoArrowForward/></button>
              </div>
            );
          })}
        </div>

          <div className="flex flex-col gap-[1rem]">

            <div className="flex items-center justify-between">
              <h1 className="font-2 text-[1.25rem]">Leads Data</h1>
            </div>

             <div
            className="py-[.5rem] px-[1rem] bg-[#0b85ff] text-[white] rounded-[10px] font-2 flex items-center justify-start gap-[1rem] overflow-x-scroll relative"
            ref={headerRef}
            style={{ scrollbarWidth: "none" }}
            onScroll={(e) => syncScroll("header", e.target.scrollLeft)}
          >
            <h1 className="min-w-[200px]">Name</h1>
            <h1 className="min-w-[150px]">Contact No.</h1>
            <h1 className='min-w-[150px]  text-center'>Action</h1>
            <h1 className="min-w-[100px] text-center">Model</h1>
            <h1 className="min-w-[250px]">Variant</h1>
            <h1 className="min-w-[250px]">Color</h1>
            <h1 className="min-w-[150px]">Pan No.</h1>
            <h1 className="min-w-[150px]">Customer ID</h1>
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
            <h1 className="min-w-[200px]">Policy No</h1>
            <h1 className="min-w-[150px]">Policy Issue Date</h1>
            <h1 className="min-w-[150px]">KMI Invoice Price</h1>

          
          </div>

          </div>

      </div>
    </div>
  );
};

export default Leads;
