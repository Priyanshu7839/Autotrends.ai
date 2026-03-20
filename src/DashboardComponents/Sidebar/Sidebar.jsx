import { setDealershipdetails } from "../../Store/DealershipDetailsSlice";
import { LogoWithName } from "../../assets/Images/SVG";
import { LogOut } from "lucide-react";
import React, { useEffect, useState,Suspense,lazy } from "react";
import { FaHandHoldingUsd, FaHeartbeat } from "react-icons/fa";
import { FaHandHoldingHand, FaWarehouse } from "react-icons/fa6";
import { HiMiniUsers } from "react-icons/hi2";
import { ImCalculator } from "react-icons/im";
import { IoSettings } from "react-icons/io5";
import { MdHeadphones, MdAutoGraph, MdOutlineCloudSync } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SiGoogleanalytics, SiGoogleadsense } from "react-icons/si";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";

const Sidebar = () => {
  const SidebarItems = [
    {
      name: "Dashboard",
      icon: <TbLayoutDashboardFilled />,
      click: "/Dashboard/",
    },

    {
      name: "Market Analytics",
      icon: <MdAutoGraph />,
      click: "/Dashboard/marketAnalytics",
    },
    {
      name: "Inventory",
      dropdown:<RiArrowDropDownLine />,
      icon: <FaWarehouse />,
      click: "/Dashboard/MasterInventory",
    },
    {
      name: "Impact Simulator",
      icon: <ImCalculator />,
      click: "/Dashboard/Strategytools",
    },
    {
      name: "Customers",
      icon: <HiMiniUsers />,
      click: "/Dashboard/customer",
    },
    {
      name: "Leads",
      icon: <SiGoogleadsense />,
      click: "/Dashboard/Leads",
    },
    {
      name: "Insurance Partners",
      icon: <FaHandHoldingHand />,
      click: "/Dashboard/insurancepartners",
    },
    {
      name: "Finance Partners",
      icon: <FaHandHoldingUsd />,
      click: "/Dashboard/financepartners",
    },
    {
      name: "Data Sync",
      icon:  <MdOutlineCloudSync className="text-[1.25rem]"/>,
      click: "/Dashboard/datasync",
    }
  ];

  const SidebarItems2 = [
    {
      name: "Settings",
      icon: <IoSettings />,
      click:'/Dashboard/Settings'
    },
    {
      name: "Contact Us",
      icon: <MdHeadphones />,
      click:"/Dashboard/ContactUs"

    },
  ];

  const InventoryItems = [
    {
      name: "Master",
      click:'/Dashboard/masterinventory'
    },
    {
      name: "Normal",
      click:'/Dashboard/Inventory'
    },
    {
      name: "BBND",
      click:'/Dashboard/bbndinventory'
    },
  ];

  const [currentActiveInventory, setCurrentActiveInventory] = useState(
    InventoryItems[0].name
  );

  const [currentActiveSlide, setCurrentActiveSlide] = useState(
    SidebarItems[0].name
  );
   const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();
  useEffect(() => {
    const matchedItem = SidebarItems.find(
      (item) => item.click === location.pathname
    );
    const name = matchedItem ? matchedItem.name : "Not Found";
    setCurrentActiveSlide(name);
    console.log(matchedItem?.click)
    navigate(matchedItem?.click);
  }, []);

 


  return (
    <div className="w-[230px] h-[100vh] fixed left-0 flex flex-col p-[1rem] font-2-book ">
      <div className="  ">
        <LogoWithName />
      </div>

      <div className="w-full h-full flex flex-col">
        <div className="w-full h-fit  p-[1rem] flex flex-col gap-[.5rem] ">
          {SidebarItems.map((item, index) => {
            return (
              <div key={index} className="flex flex-col">
                <div
                  className={`flex items-center  justify-between gap-[.5rem]  py-[.35rem] px-[.5rem] rounded-[8px] cursor-pointer transition-width duration-300 relative text-[1rem]
                       ${
                         currentActiveSlide === item.name
                           ? "w-[180px] bg-[#0b85ff] text-[#fff]"
                           : "w-[0px] "
                       }
                    
                        `}
                  onClick={() => {
                    setCurrentActiveSlide(item.name);
                    navigate(item.click);
                  }}
                >
                 <div className="flex items-center justify-start gap-[.5rem]">
                   <p>{item.icon}</p>
                  <h1 className="whitespace-nowrap">{item.name}</h1>
                 </div>
                  <div className="text-[1.5rem]">{item.dropdown}</div>

                  <div
                    className={`w-[180px] h-full  absolute left-0 rounded-[8px] ${
                      currentActiveSlide !== item.name &&
                      "hover:bg-[#0b85ff26]"
                    }`}
                  ></div>
                </div>
                {currentActiveSlide==='Inventory' && index===2 && (
                  <div className="flex  w-full h-full ml-[15px] ">
                    <div className="h-[82%] border-l-[1px]">

                    </div>
                   <div className="w-full">
                     {InventoryItems.map((item, i) => {
                      return (
                        <div key={i} className="flex items-end w-full ">
                          <div className="w-[10px] h-[20px] border-b-[1px]  rounded-bl-[10px] mb-[15px]"></div>
                          <div
                          onClick={()=>{
                            setCurrentActiveInventory(item.name)
                            navigate(item.click)
                          }}
                          className={`  py-[.25rem] px-[.5rem]    rounded-[8px] text-[.875rem] transition-all duration-300 cursor-pointer relative
                             ${
                         currentActiveInventory === item.name
                           ? "w-full bg-[#0b85ffE6] text-[#fff]"
                           : "w-[0px] "
                       }
                            `} >
                                {item.name }

                                <div className={`w-[155px] h-full absolute left-0 top-0 rounded-[8px] 
                                  ${currentActiveInventory!==item.name && 'hover:bg-[#0b85ff26]'}
                                  `}></div>
                          </div>
                        </div>
                      );
                    })}
                   </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="w-full h-full  p-[1rem] flex flex-col gap-[.5rem] justify-between  border-t-[1px] border-[#cfcfd5]">
          <div className="flex flex-col gap-[.5rem]">
            {SidebarItems2.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`flex items-center  justify-start gap-[.35rem]  py-[.5rem] px-[.5rem] rounded-[8px] cursor-pointer transition-width duration-300 relative
                       ${
                         currentActiveSlide === item.name
                           ? "w-[180px] bg-[#0b85ff] text-[#fff]"
                           : "w-[0px]"
                       }
                    
                        `}
                  onClick={() => {
                    setCurrentActiveSlide(item.name);
                    navigate(item.click)
                  }}
                >
                  <p>{item.icon}</p>
                  <h1 className="whitespace-nowrap">{item.name}</h1>
                  <div
                    className={`w-[180px] h-full  absolute left-0 rounded-[8px] ${
                      currentActiveSlide !== item.name &&
                      "hover:bg-[#0b85ff26]"
                    }`}
                  ></div>
                </div>
              );
            })}
          </div>
          <div
            className={`flex items-center  justify-start gap-[.5rem]  py-[.5rem] px-[.5rem] rounded-[8px] cursor-pointer  relative`}
            onClick={() => {
              dispatch(
                setDealershipdetails({
                  dealership_name: "",
                  dealership_brand: "",
                  contact: "",
                  city: "",
                  dealership_state: "",
                  loggedIn: false,
                  accessToken: "",
                  lat: "",
                  lon: "",
                })
              );
              navigate("/");
            }}
          >
            <p>
              <LogOut />
            </p>
            <h1 className="whitespace-nowrap">Logout</h1>

            <div
              className={`w-[180px] h-full  absolute left-0 rounded-[8px]  
                        hover:bg-[#0b85ff26]`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
