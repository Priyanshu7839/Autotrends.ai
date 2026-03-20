import { toast } from "sonner";
import GmailIcon from "../../assets/Images/GmailIcon.png";
import MetaIcon from "../../assets/Images/MetaIcon.png";
import TallyDataSync from "../../assets/Images/TallyDataSync.png";
import WhatsappIcon from "../../assets/Images/WhatsappIcon.png";
import atttendanceDataSync from "../../assets/Images/atttendanceDataSync.png";
import realbooksDataSync from "../../assets/Images/realbooksDataSync.png";
import {
  GetDealerCodes,
  GetLastUpdatedDates,
  UploadBBndExcel,
  UploadXL,
} from "../../utils/APICalls";
import React, { useEffect, useState } from "react";
import { FaDatabase } from "react-icons/fa";
import { IoIosCloudUpload, IoIosLink } from "react-icons/io";
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";
import {
  Bot,
  Upload,
  Package,
  ShoppingCart,
  DollarSign,
  Wrench,
  CreditCard,
  Shield,
  Clock,
  CheckCircle,
} from "lucide-react";

const Datasync = () => {
  const dealershipDetails = useSelector((state) => state.DealershipDetails);

  const [uploading, setUploading] = useState(null);

  const [uploadSections, setUploadSections] = useState([
    {
      id: "inventory",
      title: "Inventory Upload",
      icon: Package,
      lastUpdated: "...",
      file: null,
      color: "#0066CC",
      progress: 0,
      status: "idle",
      description: "Upload your inventory data here.",
    },
    {
      id: "bbnd-inventory",
      title: "BBND Inventory Upload",
      icon: ShoppingCart,
      lastUpdated: "...",
      file: null,
      color: "#0066CC",
      progress: 0,
      status: "idle",
      description: "Upload BBND inventory data here.",
    },
    {
      id: "sales",
      title: "Sales Upload",
      icon: DollarSign,
      lastUpdated: "08:45 P.M. 29/12/2025",
      file: null,
      color: "#0066CC",
      progress: 0,
      status: "idle",
      description: "Upload your sales data here.",
    },
    {
      id: "service",
      title: "Service Upload",
      icon: Wrench,
      lastUpdated: "08:45 P.M. 29/12/2025",
      file: null,
      color: "#0066CC",
      progress: 0,
      status: "idle",
      description: "Upload service data here.",
    },
    {
      id: "finance",
      title: "Finance Payout Upload",
      icon: CreditCard,
      lastUpdated: "08:45 P.M. 29/12/2025",
      file: null,
      color: "#0066CC",
      progress: 0,
      status: "idle",
      description: "Upload finance payout data here.",
    },
    {
      id: "insurance",
      title: "Insurance Payout Upload",
      icon: Shield,
      lastUpdated: "08:45 P.M. 29/12/2025",
      file: null,
      color: "#0066CC",
      progress: 0,
      status: "idle",
      description: "Upload insurance payout data here.",
    },
  ]);

  

  useEffect(() => {
  

   const FetchLastUpdateDate = async () => {
    try {
      const response = await GetLastUpdatedDates(dealershipDetails?.id);

       setUploadSections(prev => prev.map(s => 
        s.id === 'inventory' 
          ? { ...s, lastUpdated: new Date(response?.lastupdate).toLocaleString('en-In',{
            timeStyle:'short',
            dateStyle:'medium'
          }), file: null, progress: 100, status: 'success' }
          : s.id === 'bbnd-inventory' ?{ ...s, lastUpdated: new Date(response?.bbndlastupdate).toLocaleString('en-IN',{
            timeStyle:'short',
            dateStyle:'medium'
          }), file: null, progress: 100, status: 'success' }:s
      ));

    } catch (error) {
      console.log(error);
    }
  };

  FetchLastUpdateDate()

   
  }, []);

  const handleFileChange = (sectionId, file) => {
    if (file) {
      // File size validation (10MB max)
      const maxSize = 10 * 1024 * 1024; // 10MB in bytes
      if (file.size > maxSize) {
        toast.error(
          `File size exceeds 10MB limit. Please choose a smaller file.`
        );
        return;
      }

      // File type validation
      const allowedTypes = [".xlsx", ".xls"];
      const fileExtension = "." + file.name.split(".").pop()?.toLowerCase();
      if (!allowedTypes.includes(fileExtension)) {
        toast.error(
          "Invalid file type. Please upload CSV or Excel files only."
        );
        return;
      }
    }

    setUploadSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? { ...section, file, status: "idle", progress: 0 }
          : section
      )
    );
  };

  const handleUpload = async (sectionId) => {
    const section = uploadSections.find((s) => s.id === sectionId);
    if (!section?.file) {
      toast.error("Please select a file first");
      return;
    }

    setUploading(sectionId);


    if (section?.id === "inventory") {
      const formData = new FormData();
      formData.append("file", section?.file);
      formData.append("dealer_id", dealershipDetails?.id);

      try {
        const response = await UploadXL(formData);
        console.log(response)
     
         

        const timeresponse =await GetLastUpdatedDates(dealershipDetails?.id);
        setUploadSections((prev) =>
          prev.map((s) =>
            s.id === "inventory"
              ? {
                  ...s,
                  lastUpdated: new Date(timeresponse?.lastupdate).toLocaleString('en-In',{
            timeStyle:'short',
            dateStyle:'medium'
          }),
                  file: null,
                  progress: 100,
                  status: "success",
                }
              : s
          )
        );


        if(response.data.msg === 'Data uploaded'){

        

        setUploading(null);
        toast.success(`${section.title} completed successfully!`);
        }
      
else{
 setUploading(null);
        toast.error(`${response.data.error}`);
}

      } catch (error) {
        setUploadSections((prev) =>
          prev.map((s) =>
            s.id === sectionId
              ? { ...s, file: null, progress: 100, status: "success" }
              : s
          )
        );

        setUploading(null);
        toast.error(`${section.title} failed!`);
      }
    }
    if (section?.id === "bbnd-inventory") {
      const formData = new FormData();
      formData.append("file", section?.file);
      formData.append("dealer_id", dealershipDetails?.id);

      try {
        const response = await UploadBBndExcel(formData);
    
       
           const timeresponse = await GetLastUpdatedDates(dealershipDetails?.id);

        setUploadSections((prev) =>
          prev.map((s) =>
            s.id === "inventory"
              ? {
                  ...s,
                  lastUpdated: new Date(timeresponse?.lastupdate).toLocaleString('en-In',{
            timeStyle:'short',
            dateStyle:'medium'
          }),
                  file: null,
                  progress: 100,
                  status: "success",
                }
              : s
          )
        );

         if(response.data.msg === 'Data uploaded'){

        

        setUploading(null);
        toast.success(`${section.title} completed successfully!`);
        }
else{
 setUploading(null);
        toast.error(`${response.data.error}`);
}



        
       
      } catch (error) {
        setUploadSections((prev) =>
          prev.map((s) =>
            s.id === sectionId
              ? { ...s, file: null, progress: 100, status: "success" }
              : s
          )
        );

        setUploading(null);
        toast.error(`${section.title} failed!`);
      }
    }
  };

  return (
    <div className="w-[calc(100vw-230px)] h-[100vh]  p-[1rem] font-roboto ">
      <div
        className={`w-full h-full border-[1px] border-[#cfcfd5] rounded-[20px] flex flex-col gap-[1rem] relative px-[2rem] overflow-y-scroll py-[1rem]
          
            `}
        style={{ scrollbarWidth: "none" }}
      >
        <div className=" rounded-2xl sm:rounded-3xl p-6 backdrop-blur-xl border border-white/20 shadow-xl   bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 ">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl 
                      flex items-center justify-center bg-[#FFFFFF26] backdrop-blur-sm shadow-lg p-4 border border-[#FFFFFF4D]"
              >
                <Upload
                  className="w-6 h-6 sm:w-7 sm:h-7 text-[white]"
                  strokeWidth={2}
                />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[white] tracking-tight font-bold">
                  Data Sync
                </h1>
                <p className="text-sm sm:text-base text-white mt-1">
                  Seamless dealership data synchronization
                </p>
              </div>
            </div>

            {/* DAN Advantage Badge */}
            <div
              className="hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-full 
                    bg-[#FFFFFF26] backdrop-blur-sm shadow-lg p-4 border border-[#FFFFFF4D]"
            >
              <Bot className="w-4.5 h-4.5 text-[#fff]" strokeWidth={2} />
              <span className="text-sm font-semibold text-[#fff]">
                DAN Powered
              </span>
            </div>
          </div>
        </div>

        <div className="w-full flex items-start gap-[1rem]">
          <div className="grid gap-4 w-[70%]">
            {uploadSections.map((section) => {
              const IconComponent = section.icon;
              const isUploading = uploading === section.id;
              const hasFile = section.file !== null;

              // Unique color scheme for each section
              const colorSchemes = {
                inventory: {
                  gradient: "from-blue-400/20 to-blue-500/20",
                  border: "border-blue-400/30",
                  icon: "text-blue-600",
                  shadow: "shadow-blue-500/10",
                  hoverShadow: "group-hover:shadow-blue-500/20",
                },
                "bbnd-inventory": {
                  gradient: "from-amber-400/20 to-amber-500/20",
                  border: "border-amber-400/30",
                  icon: "text-amber-600",
                  shadow: "shadow-amber-500/10",
                  hoverShadow: "group-hover:shadow-amber-500/20",
                },
                sales: {
                  gradient: "from-emerald-400/20 to-emerald-500/20",
                  border: "border-emerald-400/30",
                  icon: "text-emerald-600",
                  shadow: "shadow-emerald-500/10",
                  hoverShadow: "group-hover:shadow-emerald-500/20",
                },
                service: {
                  gradient: "from-orange-400/20 to-orange-500/20",
                  border: "border-orange-400/30",
                  icon: "text-orange-600",
                  shadow: "shadow-orange-500/10",
                  hoverShadow: "group-hover:shadow-orange-500/20",
                },
                finance: {
                  gradient: "from-purple-400/20 to-purple-500/20",
                  border: "border-purple-400/30",
                  icon: "text-purple-600",
                  shadow: "shadow-purple-500/10",
                  hoverShadow: "group-hover:shadow-purple-500/20",
                },
                insurance: {
                  gradient: "from-indigo-400/20 to-indigo-500/20",
                  border: "border-indigo-400/30",
                  icon: "text-indigo-600",
                  shadow: "shadow-indigo-500/10",
                  hoverShadow: "group-hover:shadow-indigo-500/20",
                },
              };

              const colors = colorSchemes[section.id];

              return (
                <div
                  key={section.id}
                  className="glass-card rounded-2xl px-4 py-2 sm:px-6 sm:py-4
                        backdrop-blur-xl border border-white/20 shadow-lg hover:border-[#0066CC]/30 hover:shadow-xl 
                        transition-all group "
                >
                  <div className="flex flex-col sm:flex-row lg:items-center justify-between gap-4 lg:gap-6">
                    {/* Left: Icon + Title + Status Dot */}
                    <div className="flex items-center gap-3 sm:gap-4 lg:flex-1">
                      <div className="relative">
                        <div
                          className={`w-12 h-12 sm:w-13 sm:h-13 rounded-xl bg-gradient-to-br ${colors.gradient}
                              flex items-center justify-center border ${colors.border} flex-shrink-0 shadow-md ${colors.shadow}
                              group-hover:shadow-lg ${colors.hoverShadow} transition-all`}
                        >
                          <IconComponent
                            className={`w-6 h-6 sm:w-6 sm:h-6 ${colors.icon}`}
                          />
                        </div>
                        {/* Status Indicator */}
                        <div
                          className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white
                              shadow-md shadow-emerald-500/50"
                        ></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg text-gray-900 font-semibold tracking-tight mb-1">
                          {section.title}
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 font-medium">
                          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <span>Last: {section.lastUpdated}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: File Input + Upload Button */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:flex-shrink-0">
                      {/* File Input */}
                      <div className="relative">
                        <input
                          type="file"
                          id={`file-${section.id}`}
                          accept=".xlsx,.xls"
                          onChange={(e) =>
                            handleFileChange(
                              section.id,
                              e.target.files?.[0] || null
                            )
                          }
                          className="hidden"
                        />
                        <label
                          htmlFor={`file-${section.id}`}
                          className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl 
                                glass-card-dark border border-gray-200/60 text-gray-700 font-medium
                                hover:border-[#0066CC]/40 hover:shadow-md transition-all cursor-pointer
                                text-sm sm:text-base whitespace-nowrap"
                        >
                          {hasFile ? (
                            <>
                              <CheckCircle className="w-4 h-4 text-emerald-600" />
                              <span className="max-w-[150px] truncate">
                                {section.file?.name}
                              </span>
                            </>
                          ) : (
                            <>
                              <Upload className="w-4 h-4" />
                              <span>Choose File</span>
                            </>
                          )}
                        </label>
                      </div>

                      {/* Upload Button */}
                      <button
                        onClick={() => handleUpload(section.id)}
                        disabled={!hasFile || isUploading}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all text-sm sm:text-base tracking-wide
                              focus:outline-none focus:ring-2 focus:ring-[#0066CC]/20
                              ${
                                !hasFile || isUploading
                                  ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
                                  : "btn-primary hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                              }`}
                      >
                        {isUploading ? (
                          <span className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Uploading...
                          </span>
                        ) : (
                          "Upload"
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* ------------------------------------------------------------------------------------------------------------------ */}
          <div className="w-[50%] h-full flex flex-col gap-[1rem]">
            <div className="w-full h-full flex items-center gap-[1rem]">
              <div className="w-full h-full border-[1px] border-[#cfcfd7] rounded-[10px] p-[1rem] flex flex-col gap-[.5rem] items-center justify-center relative">
                <div className="absolute top-5 right-5 h-[15px] w-[15px] rounded-full bg-[#64DD17]"></div>
                <IoCarSportOutline className="text-[3rem] text-[#0b85ff]" />
                <h1 className="font-2">Vahan Portal</h1>
                <div className="p-[.1rem] px-[1rem] border-[1px] border-[#0b85ff] bg-[#0b85ff] text-[white]  font-2 rounded-[10px]">
                  Connected
                </div>
              </div>
              <div className="w-full h-full border-[1px] border-[#cfcfd7] rounded-[10px] p-[1rem] flex flex-col gap-[.5rem] items-center justify-center">
                <img src={GmailIcon} className="w-[65px]" alt="" />
                <h1 className="font-2">Gmail</h1>
                <div className="p-[.1rem] px-[1rem] border-[1px] border-[#0b85ff] bg-[#0b85ff] text-[white]  font-2 rounded-[10px]">
                  Request
                </div>
              </div>
            </div>
            <div className="w-full h-full flex items-center gap-[1rem]">
              <div className="w-full h-full border-[1px] border-[#cfcfd7] rounded-[10px] p-[1rem] flex flex-col gap-[.5rem] items-center justify-center">
                <FaDatabase className="text-[3rem] text-[#0b85ff]" />
                <h1 className="font-2">OEM Database</h1>
                <div className="p-[.1rem] px-[1rem] border-[1px] border-[#0b85ff] bg-[#0b85ff] text-[white]  font-2 rounded-[10px]">
                  Request
                </div>
              </div>
              <div className="w-full h-full border-[1px] border-[#cfcfd7] rounded-[10px] p-[1rem] flex flex-col gap-[.5rem] items-center justify-center">
                <img src={WhatsappIcon} className="w-[80px]" alt="" />

                <h1 className="font-2">Whatsapp</h1>
                <div className="p-[.1rem] px-[1rem] border-[1px] border-[#0b85ff] bg-[#0b85ff] text-[white]  font-2 rounded-[10px]">
                  Request
                </div>
              </div>
            </div>
            <div className="w-full h-full flex items-center gap-[1rem]">
              <div className="w-full h-full border-[1px] border-[#cfcfd7] rounded-[10px] p-[1rem] flex flex-col gap-[.5rem] items-center justify-center">
                {/* <FaDatabase className="text-[3rem] text-[#0b85ff]" /> */}
                <img src={atttendanceDataSync} className="w-[50px]" alt="" />
                <h1 className="font-2">Attendance Monitor</h1>
                <div className="p-[.1rem] px-[1rem] border-[1px] border-[#0b85ff] bg-[#0b85ff] text-[white]  font-2 rounded-[10px]">
                  Request
                </div>
              </div>
              <div className="w-full h-full border-[1px] border-[#cfcfd7] rounded-[10px] p-[1rem] flex flex-col gap-[.5rem] items-center justify-center">
                <img src={MetaIcon} alt="" className="w-[70px]" />
                <h1 className="font-2">Meta</h1>
                <div className="p-[.1rem] px-[1rem] border-[1px] border-[#0b85ff] bg-[#0b85ff] text-[white]  font-2 rounded-[10px]">
                  Request
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datasync;
