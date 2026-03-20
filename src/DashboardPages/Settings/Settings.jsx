import React,{useState} from 'react'
import ComplaintSubmitted from '../../assets/Images/ComplaintSubmitted.png'
import { useNavigate } from 'react-router';

const Settings = () => {

        const navigate = useNavigate()
        const [ComplaintSubmittedPopup,setComplaintSubmittedPopup] = useState(false);
  return (
    <div className="w-[calc(100vw-230px)] h-[100vh]  p-[1rem] font-roboto ">
      <div
        className={`w-full h-full border-[1px] border-[#cfcfd5] rounded-[20px] flex flex-col gap-[1rem] relative p-[1rem] overflow-y-scroll
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

                <h1 className='text-[1.25rem] font-2'>Settings</h1>

                <div className='border-[1px] border-[#cfcfd7] p-[1rem] rounded-[12px] flex flex-col gap-[1rem]'>
                    <h1 className='font-2'>Company Details</h1>

                    <div className='w-full flex flex-col gap-[1rem]'>
                        {/* -------------------------------------------------------------------------------- */}

                        <div className='flex items-end gap-[1rem] w-full'>
                            <div className='flex flex-col gap-[.25rem] w-full'>
                                <label htmlFor="" className='text-[.875rem] font-2-book'>Dealership Name</label>
                                <input type="text" className='w-full py-[.25rem] px-[.5rem] outline-none border-[1px] border-[#cfcfd7] rounded-[8px] ' />
                            </div>
                            
                        </div>
                        {/* -------------------------------------------------------------------------------- */}
                        <div className='flex items-end gap-[1rem] w-full'>
                            <div className='flex flex-col gap-[.25rem] w-full'>
                                <label htmlFor="" className='text-[.875rem] font-2-book'>Pricipal Dealer</label>
                                <input type="text" className='w-full py-[.25rem] px-[.5rem] outline-none border-[1px] border-[#cfcfd7] rounded-[8px] ' />
                            </div>
                            <div className='flex flex-col gap-[.25rem] w-full'>
                                <label htmlFor="" className='text-[.875rem] font-2-book'>Email</label>
                                <input type="text" className='w-full py-[.25rem] px-[.5rem] outline-none border-[1px] border-[#cfcfd7] rounded-[8px] ' />
                            </div>
                            <div className='flex flex-col gap-[.25rem] w-full'>
                                <label htmlFor="" className='text-[.875rem] font-2-book'>Phone No.</label>
                                <input type="text" className='w-full py-[.25rem] px-[.5rem] outline-none border-[1px] border-[#cfcfd7] rounded-[8px] ' />
                            </div>
                             <button className='w-[300px] py-[.25rem] px-[.5rem] border-[1px] border-[#0b85ff] bg-[#0b85ff] rounded-[8px] text-[white]'>Update</button>
                        </div>
                        {/* -------------------------------------------------------------------------------- */}
                        <div className='flex items-end gap-[1rem] w-full'>
                            <div className='flex flex-col gap-[.25rem] w-full'>
                                <label htmlFor="" className='text-[.875rem] font-2-book'>Manager Name</label>
                                <input type="text" className='w-full py-[.25rem] px-[.5rem] outline-none border-[1px] border-[#cfcfd7] rounded-[8px] ' />
                            </div>
                            <div className='flex flex-col gap-[.25rem] w-full'>
                                <label htmlFor="" className='text-[.875rem] font-2-book'>Manager Email</label>
                                <input type="text" className='w-full py-[.25rem] px-[.5rem] outline-none border-[1px] border-[#cfcfd7] rounded-[8px] ' />
                            </div>
                            <div className='flex flex-col gap-[.25rem] w-full'>
                                <label htmlFor="" className='text-[.875rem] font-2-book'>Manager Phone No</label>
                                <input type="text" className='w-full py-[.25rem] px-[.5rem] outline-none border-[1px] border-[#cfcfd7] rounded-[8px] ' />
                            </div>
                            <button className='w-[300px] py-[.25rem] px-[.5rem] border-[1px] border-[#0b85ff] bg-[#0b85ff] rounded-[8px] text-[white]'>Update</button>
                        </div>
                        {/* -------------------------------------------------------------------------------- */}
                        <div className='flex items-end gap-[1rem] w-full'>
                            <div className='flex flex-col gap-[.25rem] w-full'>
                                <label htmlFor="" className='text-[.875rem] font-2-book'>Sales Manager Name</label>
                                <input type="text" className='w-full py-[.25rem] px-[.5rem] outline-none border-[1px] border-[#cfcfd7] rounded-[8px] ' />
                            </div>
                            <div className='flex flex-col gap-[.25rem] w-full'>
                                <label htmlFor="" className='text-[.875rem] font-2-book'>Sales Manager Email</label>
                                <input type="text" className='w-full py-[.25rem] px-[.5rem] outline-none border-[1px] border-[#cfcfd7] rounded-[8px] ' />
                            </div>
                            <div className='flex flex-col gap-[.25rem] w-full'>
                                <label htmlFor="" className='text-[.875rem] font-2-book'>Sales Manager Phone No</label>
                                <input type="text" className='w-full py-[.25rem] px-[.5rem] outline-none border-[1px] border-[#cfcfd7] rounded-[8px] ' />
                            </div>
                             <button className='w-[300px] py-[.25rem] px-[.5rem] border-[1px] border-[#0b85ff] bg-[#0b85ff] rounded-[8px] text-[white]'>Update</button>
                        </div>
                        {/* -------------------------------------------------------------------------------- */}
                    </div>
                    {/* ============================================================================================================ */}

                   
                </div>
                 <div className='w-full p-[1rem] flex flex-col items-start gap-[1rem] border-[1px] rounded-[12px] border-[#cfcfd7]'>
                        <h1 className='text-[1.25rem] font-2'>Subscription & Billing</h1>
                        <button className='text-[#0b85ff] text-[1rem] font-2-book'>Manage Subscription</button>
                    </div>

                    <button
                    onClick={()=>{setComplaintSubmittedPopup(true)}}
                    className='w-[50%] bg-[#0b85ff] py-[.5rem] px-[1rem] text-center text-[white] rounded-[12px] font-2'> Request a Callback</button>

        </div>
      </div>
  )
}

export default Settings