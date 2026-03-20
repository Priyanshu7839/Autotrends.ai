import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import ComplaintSubmitted from '../../assets/Images/ComplaintSubmitted.png'
import { useNavigate } from "react-router";

const ContactUs = () => {
    const FieldsArray = ['Inventory','Leads','Finance','Insurance','Analytics','Billing','Strategy Tools','Others']
    const [Fields,setFields] = useState(FieldsArray[0])
    const [FieldsShow,setFieldsShow] = useState(false)

    const DealerData = useSelector((state)=>state.DealershipDetails);
    const DealerCodes  = DealerData?.DealerCode;
    const [SelectedDealerCode,setSelectedDealerCode] = useState(DealerCodes?.[0])
    const [DealerCodeShow,setDealerCodeShow] = useState(false)

    const ComplaintArray = ['New Feature Request','UI Improvement','Bug Report','Other']
    const [ComplaintType,setComplaintType] = useState(ComplaintArray[0])
    const [ComplaintShow,setComplaintShow] = useState(false);

    const UrgencyArray = ['High','Medium','Request a Callback'];
    const [Urgency,setUrgency] = useState(UrgencyArray[0])
    const [UrgencyShow,setUrgencyShow] = useState(false);



    const [ComplaintSubmittedPopup,setComplaintSubmittedPopup] = useState(false);


    const navigate = useNavigate();

  return (



    <div className="w-[calc(100vw-230px)] h-[100vh]  p-[1rem] font-roboto ">
      <div
        className={`w-full h-full border-[1px] border-[#cfcfd5] rounded-[20px] flex flex-col gap-[1rem] relative
            ${ComplaintSubmittedPopup?'p-0 overflow-hidden':'p-[1rem] oveflow-y-scroll'}
            `}
        style={{ scrollbarWidth: "none" }}
      >
        {/* -----------------Complaint Submitted Popup--------------------------------------------------------- */}
        <div className={`w-full h-full absolute bg-[rgba(0,0,0,0.8)] z-[99] flex items-center justify-center
            ${ComplaintSubmittedPopup?'absolute':'hidden'}
            `}>
                <div className="w-[500px] bg-[white] rounded-[12px] flex flex-col items-center justify-center gap-[1rem] px-[.5rem] py-[2rem] overflow-hidden">
                        <img src={ComplaintSubmitted} alt=""  className="w-[200px]"/>

                        <h1 className="text-[1.5rem] font-2 text-center">Request Submitted <br/> Successfully</h1>
                        <p className="w-[80%] text-[.95rem] font-2-book text-justify">Thankyou for reaching out to Autotrends Customer Suppport. Our Team will get back to you shortly.</p>
                        <p className="w-[80%] text-[.95rem] font-2-book text-justify">Meanwhile you can explore live dealer insights and trends on your dashboard</p>

                        <button 
                        onClick={()=>{
                            setComplaintSubmittedPopup(false)
                            navigate('/Dashboard/')}}
                        className="py-[.25rem] px-[1rem] bg-[#0b85ff] rounded-[8px] text-[white] font-2">Explore Dashboard</button>
                </div>
        </div>
        {/* -----------------Complaint Submitted Popup End----------------------------------------------------- */}





        <h1 className="text-[1.25rem] font-2">Contact Us</h1>
        <div className="p-[1rem] border-[1px] border-[#cfcfd7] w-full rounded-[12px] flex flex-col gap-[1rem]">
          <h1 className="font-2">User Details</h1>

          <div className="flex flex-col gap-[1rem]">
           {/* ------------------------------------------------------------------------------------------------ */}
            <div className="flex items-end gap-[1rem]">
              <div className="flex flex-col w-full">
                <label className="font-2-book text-[.875rem]" htmlFor="">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="py-[.25rem] px-[.5rem] border-[1px] border-[#cfcfd7] rounded-[8px] outline-none"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="font-2-book text-[.875rem]" htmlFor="">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="py-[.25rem] px-[.5rem] border-[1px] border-[#cfcfd7] rounded-[8px] outline-none"
                />
              </div>
            </div>
           {/* ------------------------------------------------------------------------------------------------ */}
            <div className="flex items-end gap-[1rem]">
              <div className="flex flex-col w-full">
                <label className="font-2-book text-[.875rem]" htmlFor="">
                Email
                </label>
                <input
                  type="text"
                  placeholder="email@example.com"
                  className="py-[.25rem] px-[.5rem] border-[1px] border-[#cfcfd7] rounded-[8px] outline-none "
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="font-2-book text-[.875rem]" htmlFor="">
                 Phone
                </label>
                <input
                  type="text"
                  placeholder="e.g.7993475748"
                  className="py-[.25rem] px-[.5rem] border-[1px] border-[#cfcfd7] rounded-[8px] outline-none"
                  
                />
              </div>
            </div>
           {/* ------------------------------------------------------------------------------------------------ */}
            <div className="flex items-end gap-[1rem]">
              <div className="flex flex-col w-full">
                <label className="font-2-book text-[.875rem]" htmlFor="">
                Select Field
                </label>
                <div
                  type="text"
                   onClick={()=>{setFieldsShow(!FieldsShow)}}
                  className={`py-[.25rem] px-[.5rem] border-[1px] border-[#cfcfd7] rounded-[8px]  outline-none flex items-center justify-between relative cursor-pointer ${FieldsShow ?'rounded-b-[0px]':''} `}
                >{Fields} <RiArrowDropDownLine className="text-[1.5rem]"/>
                
                
                 <div className={`absolute top-[100%] left-[-1px] bg-[white]  border-[#cfcfd7] z-20 border-t-0 overflow-hidden rounded-[8px] rounded-t-[0px]
                    ${FieldsShow ? 'border-[1px] w-[calc(100%+2px)]':'border-[0px] w-[0px]'}
                    `}
                   
                    >
                        {
                            FieldsArray.map((field,i)=>{
                                return(
                                    <div
                                    onClick={()=>{setFields(field)}}
                                    key={i} className="px-[1rem] py-[.25rem] hover:bg-[rgba(0,0,0,0.2)]">
                                        {field}
                                    </div>
                                )
                            })
                        }
                </div>
                </div>

                 
              </div>
              <div className="flex flex-col w-full relative">
                <label className="font-2-book text-[.875rem]" htmlFor="">
                 Select Dealer Code
                </label>
                <div
                  type="text"
                   onClick={()=>{setDealerCodeShow(!DealerCodeShow)}}
                  className={`py-[.25rem] px-[.5rem] border-[1px] border-[#cfcfd7] rounded-[8px]  outline-none flex items-center justify-between relative cursor-pointer ${DealerCodeShow ?'rounded-b-[0px]':''} `}
                >{SelectedDealerCode} <RiArrowDropDownLine className="text-[1.5rem]"/>
                
                
                 <div className={`absolute top-[100%] left-[-1px] bg-[white]  border-[#cfcfd7] z-20 border-t-0 overflow-hidden rounded-[8px] rounded-t-[0px]
                    ${DealerCodeShow ? 'border-[1px] w-[calc(100%+2px)]':'border-[0px] w-[0px]'}
                    `}
                   
                    >
                        {
                            DealerCodes?.map((code,i)=>{
                                return(
                                    <div
                                    onClick={()=>{setSelectedDealerCode(code)}}
                                    key={i} className="px-[1rem] py-[.25rem] hover:bg-[rgba(0,0,0,0.2)]">
                                        {code}
                                    </div>
                                )
                            })
                        }
                </div>
                </div>


              

              </div>
            </div>
           {/* ------------------------------------------------------------------------------------------------ */}
          </div>
        </div>
          {/* ====================================================================================================================== */}
        <div className="p-[1rem] border-[1px] border-[#cfcfd7] rounded-[12px] flex flex-col gap-[1rem]">
                <h1 className="font-2">Your Complaint Here</h1>
  <div className="flex flex-col gap-[1rem]">
                <div className="flex items-end gap-[1rem]">
              <div className="flex flex-col w-full">
                <label className="font-2-book text-[.875rem]" htmlFor="">
                Complaint Type
                </label>
                <div
                  type="text"
                   onClick={()=>{setComplaintShow(!ComplaintShow)}}
                  className={`py-[.25rem] px-[.5rem] border-[1px] border-[#cfcfd7] rounded-[8px]  outline-none flex items-center justify-between relative cursor-pointer ${ComplaintShow ?'rounded-b-[0px]':''} `}
                >{ComplaintType} <RiArrowDropDownLine className="text-[1.5rem]"/>
                
                
                 <div className={`absolute top-[100%] left-[-1px] bg-[white]  border-[#cfcfd7] z-20 border-t-0 overflow-hidden rounded-[8px] rounded-t-[0px]
                    ${ComplaintShow ? 'border-[1px] w-[calc(100%+2px)]':'border-[0px] w-[0px]'}
                    `}
                   
                    >
                        {
                            ComplaintArray.map((complaint,i)=>{
                                return(
                                    <div
                                    onClick={()=>{setComplaintType(complaint)}}
                                    key={i} className="px-[1rem] py-[.25rem] hover:bg-[rgba(0,0,0,0.2)]">
                                        {complaint}
                                    </div>
                                )
                            })
                        }
                </div>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label className="font-2-book text-[.875rem]" htmlFor="">
                Complaint Area
                </label>
                  <div
                  type="text"
                   onClick={()=>{setUrgencyShow(!UrgencyShow)}}
                  className={`py-[.25rem] px-[.5rem] border-[1px] border-[#cfcfd7] rounded-[8px]  outline-none flex items-center justify-between relative cursor-pointer ${UrgencyShow ?'rounded-b-[0px]':''} `}
                >{Urgency} <RiArrowDropDownLine className="text-[1.5rem]"/>
                
                
                 <div className={`absolute top-[100%] left-[-1px] bg-[white]  border-[#cfcfd7] z-20 border-t-0 overflow-hidden rounded-[8px] rounded-t-[0px]
                    ${UrgencyShow ? 'border-[1px] w-[calc(100%+2px)]':'border-[0px] w-[0px]'}
                    `}
                   
                    >
                        {
                            UrgencyArray.map((complaint,i)=>{
                                return(
                                    <div
                                    onClick={()=>{setUrgency(complaint)}}
                                    key={i} className="px-[1rem] py-[.25rem] hover:bg-[rgba(0,0,0,0.2)]">
                                        {complaint}
                                    </div>
                                )
                            })
                        }
                </div>
                </div>
              </div>
            </div>

              <div className="flex flex-col gap-[.5rem]">
                  <label className="font-2-book text-[.875rem]" htmlFor="">
                Enter your Complaint
                </label>
                <textarea name="" id="" rows='7'  className="py-[.25rem] px-[.5rem] border-[1px] border-[#cfcfd7] rounded-[8px] outline-none"></textarea>

              </div>
             
            </div>

        </div>
        {/* ====================================================================================================================== */}
        <div className="flex items-center gap-[1rem]">
            <button className="w-full py-[.35rem] px-[1rem] text-center bg-[#0b85ff] text-[white] font-2 rounded-[12px]">Cancel</button>
            <button className="w-full py-[.35rem] px-[1rem] text-center bg-[#0b85ff] text-[white] font-2 rounded-[12px]" 
            onClick={()=>{setComplaintSubmittedPopup(true)}}
            >Submit</button>
        </div>
        {/* ====================================================================================================================== */}
      </div>
    </div>
  );
};

export default ContactUs;
