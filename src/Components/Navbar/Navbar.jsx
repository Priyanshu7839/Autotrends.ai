import React, { useEffect, useState,useRef } from "react";
import { useNavigate } from "react-router";
import { useScreenResizeValue } from "../../ScreenSizeFunction";
import {
  CartIconSvg,
  LogoWithName,
  PhoneIconSvg,
  SearchIcon,
} from "../../assets/Images/SVG";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  openSignInPopup
} from "../../Store/GlobalSigninSlice";
import { RiMenu2Fill } from "react-icons/ri";
import { FaMapLocation } from "react-icons/fa6";
import {LocationSearch} from "../../components";
import { fetchallcardetails, getip, getlocationbyip, SearchAPICall } from "../../Context/ApiCall";
import parse from 'html-react-parser'
import { setCarDetailsSlice } from "../../Store/CarDetailsSlice";
import { carnamesbybrands } from "../../Store/CarNamesSlice";
import { IoIosCloseCircle } from "react-icons/io";
import { setUserDetails } from "../../Store/UserDetailsSlice";


const MenuItems = ({
  className,
  HeaderButtonsActive,
  activeButton,
  setActiveButton,
}) => {
  const HeaderButtons = [
    {
      name: "New",
      subheader: [
        {
          name: "Electric Cars",
          navig: "/electriccars",
        },
        {
          name: "Popular Cars",
          navig: "/popularcars",
        },
        {
          name: "Upcoming Cars",
          navig: "/upcomingcars",
        },
        {
          name: "Latest Cars",
          navig: "/latestcars",
        },
        {
          name: "Offers And Discount",
          navig: "/offersanddiscounts",
        },
        {
          name: "Popular Brands",
          navig: "/popularbrands",
        },
        {
          name: "New Car Loan",
          navig: "/new-car-loan",
        },
        {
          name: "Car Insurance",
          navig: "/car-insurance",
        },
        {
          name: "Find Charging Stations",
          navig: "/find-charging-station",
        },
        {
          name: "EMI Calculator",
          navig: "/emi-calculator",
        },
      ],
    },
    {
      name: "Used",
      subheader: [
        {
          name: "Buy Used Cars",
          navig: "/buy-used-car",
        },
        {
          name: "Loan Against Car",
          navig: "/loan-against-car",
        },
        {
          name: "Used Car Loan",
          navig: "/used-car-loan",
        },
        {
          name: "Used Car Valuation",
          navig: "/used-car-valuation",
        },
        {
          name: "Sell My Car",
          navig: "/sell-my-car",
        },
        {
          name: "Dealership Near Me",
          navig: "/dealership-near-me",
        },
        {
          name: "Spare Parts",
          navig: "/spare-parts",
        },
      ],
    },
    {
      name: "Review",
      subheader: [
        {
          name: "Review",
          navig: "/review",
        },
      ],
    },
  ];
  const [HeaderSubButtonsActive, SetHeaderSubButtonActive] = useState("");
  const breakpoint = useScreenResizeValue();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userDetails = useSelector((state)=>state.UserDetails);
  


  return (
    <div className="flex flex-col gap-[.75rem] ">
      <div className={`flex   relative  z-[500]  ${className}`}>
        {HeaderButtons.map((item, index) => {
          return (
            <div key={index} className="relative group flex">
              <div className="relative flex flex-col ">
                <button
                  key={index}
                  className={`text-[1rem]  ${
                    HeaderButtonsActive === item.name
                      ? "text-color-7 font-2"
                      : "text-color-18 font-2-book"
                  }`}
                >
                  {item.name}
                </button>

                <span
                  className={`bg-[#0B66FA] h-[1px] transition-all duration-100 ${
                    HeaderButtonsActive === item.name ? "w-full" : "w-0"
                  }`}
                ></span>
              </div>

              {/* -----------------Sub options */}
              <div
                className={`absolute left-[0%] top-[100%]  z-[500]  overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible   flex flex-col gap-[1rem] transition-all duration-300 group-hover:h-fit  group-hover:p-[1rem] hover:h-fit  h-[0px] p-0 bg-[#FAFAFA] drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)] rounded-[12px] rounded-tl-[0]  `}
              >
                {item.subheader?.map((subhead, i) => {
                  return (
                    <div
                      key={i}
                      className={`font-2-book text-[1rem] cursor-pointer hover:text-[#0b66fa]  whitespace-nowrap ${
                        HeaderSubButtonsActive === subhead.name
                          ? "text-color-7"
                          : "text-color-18"
                      } `}
                      onClick={() => {
                        SetHeaderSubButtonActive(subhead.name);
                        navigate(subhead.navig);
                      }}
                    >
                      {subhead.name}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      

      {breakpoint<=650 &&
            <div className="flex items-center justify-center gap-[.5rem]">
            <CartIconSvg />
            <h1 className="font-2-book text-color-18 text-[1rem]">My Cart</h1>
            <IoIosArrowDown />
          </div>}

      {(breakpoint <= 1200 && !userDetails.loggedIn) && 
        <div className="p-[3px] rounded-[8px] border-[1px] border-[#C1C7CD] flex items-center justify-center gap-[9px] font-2 text-[.875rem] ">
          <button
            className={`py-[5px] rounded-[6px] px-[17px] text-color-1
                    ${
                      activeButton === "Login"
                        ? "bg-[#0b66fa] text-color-1"
                        : "text-color-7"
                    }
                    `}
            onClick={() => {
              dispatch(openSignInPopup(true));
             
              setActiveButton("Login");
            }}
          >
            Login
          </button>
          <button
            className={`py-[5px] rounded-[6px]  px-[17px]
                    ${
                      activeButton === "Register"
                        ? "bg-[#0b66fa] text-color-1"
                        : "text-color-7"
                    }
                    `}
            onClick={() => {
              dispatch(openSignInPopup(true));
            
              setActiveButton("Register");
            }}
          >
            Register
          </button>
        </div>
      
      }
      {breakpoint <= 1000 && (
        <div className=" bg-white rounded-[8px]  border-[1px] border-[#C1C7CD] flex  text-color-2 font-2">
          <button className="px-[17px] py-[8px]  border-r-[1px] rounded-l-[8px] border-[#C1C7CD] flex items-center justify-center gap-[10px]  text-[.8125rem] whitespace-nowrap">
            <PhoneIconSvg />
            Sell my car
          </button>
          <button className="text-sm flex gap-[5px] items-center justify-center px-[17px] py-[8px] text-[.875rem]">
            EN
            <IoIosArrowDown />
          </button>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const breakpoint = useScreenResizeValue();

  const [HeaderButtonsActive, SetHeaderButtonsActive] = useState("New");
  const [activeButton, setActiveButton] = useState("Login");
  const [MenuItemOpen, SetMenuItemOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Jhansi');
  const [latlon,setlatlon] = useState({
    lat:'25.5298550',lon:'78.6527802'
  })
  const [showLocationSearch,setshowLocationSearch] = useState('false')
  const [SearchInput,SetSearchInput] = useState("");
  

  

  const timeoutRef = useRef(null); //

  const [SearchResults,SetSearchResults] = useState([]);
  const [ShowSearchResults,SetShowSearchResults] = useState(false);

  const searchdivRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchdivRef.current && !searchdivRef.current.contains(event.target)) {
        SetShowSearchResults(false);
      }
    };

    if (ShowSearchResults) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ShowSearchResults]);

  

  useEffect(()=>{
    if(selectedLocation){
      setshowLocationSearch('false');
    }
  },[selectedLocation])

  const handleChange = (e) => {
    const value = e.target.value;
    SetSearchInput(value);
    SetShowSearchResults(true)

  
   if (timeoutRef.current) clearTimeout(timeoutRef.current);

   
   timeoutRef.current = setTimeout(() => {
      SearchAPICall(value,{SetSearchResults})
   }, 500); 
};




   const [carNamesonPage,setCarNamesonPage] = useState([]);
  
 
  
    const firstRender = useRef(true);
  
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
  
    if (carNamesonPage.length > 0) {
      dispatch(carnamesbybrands(carNamesonPage));
      SetShowSearchResults(false)
      navigate("/brand");
    }
  }, [carNamesonPage, dispatch, navigate]);

const userDetails = useSelector((state)=>state.UserDetails)

useEffect(()=>{
  const GetIP = async() => {
    const response = await getip();

    if(response && response.data){
      const response1 = await getlocationbyip(response.data)
      if(response1 && response1?.data?.location){
        setSelectedLocation(response1?.data?.location?.city)
        dispatch(setUserDetails({
          ...userDetails,
          location:response1?.data?.location?.city,
          lat:response1?.data?.location?.lat,
          lon:response1?.data?.location?.lng
        }))
        
      }
    }
    
  }

  GetIP();
},[])


useEffect(()=>{
  dispatch(setUserDetails({
    ...userDetails,
    location:selectedLocation,
    lat:latlon.lat,
    lon:latlon.lon
  }))
},[selectedLocation])

const logout = () =>{
  dispatch(setUserDetails({
    name:'',
    phoneNumber:'',
    location:'',
    loggedIn:false,
    accessToken:''
  }))
}


  

  
const BrandSlug = false
const ModelSlug = false


  return (
    <div className={`bg-[#FFFFFF]  w-full  flex  items-center relative justify-center drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)]  z-[500] 
            ${breakpoint<=650 ?'flex-col-reverse':'flex-col'}
    `}>
      {showLocationSearch === 'true' &&
        <LocationSearch className='absolute top-[150%]' selectedLocation={selectedLocation} setshowLocationSearch={setshowLocationSearch} setselectedLocation={setSelectedLocation} latlon={latlon} setlatlon={setlatlon}/>}

      {/* ----------------Section-1---------------------------------------------------------------------------------- */}
      <div className=" w-full flex items-center justify-center">
        <div
          className={`${
            breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]"
          } py-[8px] flex items-center justify-between `}
        >
          
          {breakpoint>650 &&
            <div className="flex gap-[.5rem] ">
            {/* <LocationIconSvg /> */}
            <FaMapLocation className="text-[#21272CB3] mt-[.65px] cursor-pointer"
            onClick={()=>{setshowLocationSearch('true')}}
            
            />

            <h1 className="text-[.875rem] font-2-book text-color-9-70 text-color-7 cursor-pointer"
            onClick={()=>{setshowLocationSearch('true')}}
            >
             {selectedLocation ?
             selectedLocation:'Location' 
             }
            </h1>
          </div>}
          <div ref={searchdivRef} className="flex flex-col relative">
          <div
            className={`text-[#ababab]  flex h-max  bg-[#FFFFFF] border-[#C1C7CD]  border-[1px] 
               
            ${breakpoint <=650 &&'w-full'}
            ${(SearchResults.length>0 && ShowSearchResults) ?'rounded-t-[8px]':'rounded-[8px]'}

            `}
          >
            <div className={` flex  px-[16px] py-[8px] items-center border-r-[1px] border-[#C1C7CD] 
              ${breakpoint>750&&'min-w-[380px]'}
              ${(breakpoint<=750&&  breakpoint>650) &&'min-w-[300px]'}
              ${breakpoint <=650 &&'w-full'}


              `}>
              <SearchIcon/>
              <input
                type="text"
                placeholder="Search for..."
                className=" outline-none  rounded-tl-[8px] rounded-bl-[8px] w-full px-2 bg-[#FFFFFF] text-[.8125rem] focus:outline-none 
                placeholder:text-[#ABABAB] text-color-8 font-2-book
                "
                value={SearchInput}
                onChange={handleChange}

              />
             {SearchInput &&  <IoIosCloseCircle className="text-[1rem] text-color-8 cursor-pointer"
             onClick={()=>{SetSearchInput("") 
                      SetShowSearchResults(false)

             }}
             />}
            </div>
            <div className=" relative cursor-pointer    flex items-center justify-center w-[max]  ">
              {/* <select className=" appearance-none bg-[#FFFFFF] pl-[16px] pr-[38px] outline-none text-[.8125rem] text-color-8 font-medium ">
                <option>All Categories</option>
              </select> */}
              <h1 className=" px-[30px] text-color-8 font-2 text-[.8125rem]">New</h1>
              {/* <div className=" absolute inset-y-0 right-[12px] flex items-center justify-center pointer-events-none text-color-8 ">
                <IoIosArrowDown />
              </div> */}
            </div>

          </div>
           {(SearchResults.length>0 && ShowSearchResults) && 
            <div className={`bg-[#ffffff] opacity-100 z-[1000]  absolute w-full top-[100%] border-[1px] border-[#c1cdc7]
            ${(SearchResults.length>0 && ShowSearchResults) ?'rounded-b-[8px] border-t-[0px]':'rounded-[8px]'}
            `}>
              {SearchResults.map((res,index)=>{
                  return(
                    <h1
                  key={index}
                    className="px-[2rem] cursor-pointer py-[.25rem] hover:bg-[rgba(0,0,0,0.1)] text-[1rem] text-color-8 font-2-book"
                    onClick={()=>{
                      if(res.type==='oem'){
                        navigate(`/brand/${res.key}`)
                        SetShowSearchResults(false)
                      }
                      if(res.type==='Model'){
                        fetchallcardetails(res.url,BrandSlug,ModelSlug,{dispatch,navigate,setCarDetailsSlice,SetShowSearchResults})
                        
                      }
                    }}

                  >
                    {parse(res.name)}
                  </h1>
                  )
              })}
            </div>}
            </div>

          {breakpoint > 1000 && (
            <div className="flex items-center justify-center gap-[2rem]">
              <div className="flex items-center justify-center gap-[1rem]">
                <div className=" bg-white rounded-[8px]  border-[1px] border-[#C1C7CD] flex  text-color-2 font-2">
                  <button className="px-[17px] py-[8px]   rounded-[8px] border-[#C1C7CD] border-r-[1px] rounded-r-[0px] flex items-center justify-center gap-[10px]  text-[.8125rem] whitespace-nowrap font-medium ">
                    <PhoneIconSvg />
                    Sell my car
                   
                  </button>
                  <button className="text-sm flex gap-[5px] items-center justify-center px-[17px] py-[8px] text-[.875rem]">
                    EN
                    <IoIosArrowDown />
                  </button>
                  
                </div>
                {/* {(breakpoint > 1200 && !userDetails.loggedIn) && 
                  <div className="p-[3px] rounded-[8px] border-[1px] border-[#C1C7CD] flex items-center justify-center gap-[9px] font-2 text-[.875rem] ">
                    <button
                      className={`py-[5px] rounded-[6px] px-[17px] text-color-1
                    ${
                      activeButton === "Login"
                        ? "bg-[#0b66fa] text-color-1"
                        : "text-color-7"
                    }
                    `}
                      onClick={() => {
                      navigate('/Dealers')
                        
                        setActiveButton("Register");
                      }}
                    >
                      Dealer Engine
                    </button>
                    <button
                      className={`py-[5px] rounded-[6px]  px-[17px]
                    ${
                      activeButton === "Register"
                        ? "bg-[#0b66fa] text-color-1"
                        : "text-color-7"
                    }
                    `}
                      onClick={() => {
                        dispatch(openSignInPopup(true));
                        
                        setActiveButton("Login");
                      }}
                    >
                      Login
                    </button>
                 </div>
                } */}

                { (breakpoint > 1200 && !userDetails.loggedIn) && 
                 <button
                      className={`py-[8px] rounded-[6px] px-[17px] text-color-1 text-center flex items-center justify-center font-2 text-[.875rem]
                    ${
                      activeButton === "Login"
                        ? "bg-[#0b66fa] text-color-1"
                        : "text-color-7"
                    }
                    `}
                      onClick={() => {
                      navigate('/Dealers')
                        
                        setActiveButton("Login");
                      }}
                    >
                      Dealer Engine
                    </button>}
                {(breakpoint > 1200 && userDetails.loggedIn) && 
                  <div className="p-[3px] rounded-[8px] border-[1px] border-[#C1C7CD] flex items-center justify-center gap-[9px] font-2 text-[.875rem] ">
                    <button
                      className={`py-[5px] rounded-[6px] px-[17px] text-color-1 text-color-7
                   
                    `}
                      onClick={() => {
                       
                      }}
                    >
                      {userDetails.name}
                    </button>
                    <button
                      className={`py-[5px] rounded-[6px]  px-[17px] bg-[#0b66fa] text-color-1
                  
                    `}
                      onClick={() => {
                       logout()
                      }}
                    >
                      Logout
                    </button>
                 </div>
                }
              </div>
            </div>
          )}
        </div>
      </div>
      {/* ----------------Section-2---------------------------------------------------------------------------------- */}
      <div className="w-full flex items-center justify-center">
        <div
          className={`${
            breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]"
          } py-[8px] flex items-center justify-between `}
        >
          <div className={`flex items-center   ${breakpoint<=550?'justify-start gap-[.25rem] w-full':'justify-center gap-[1rem]'}`}>
            {breakpoint <= 1200 && (
              <div
                className={`"text-[1.5rem] cursor-pointer ${breakpoint>650 && 'relative'}`}
                onClick={() => {
                  SetMenuItemOpen(!MenuItemOpen);
                }}
              >
               <div className="cursor-pointer"> <RiMenu2Fill /></div>
                <div
                  className={` absolute  z-[500]   group-hover: group-hover:   flex flex-col gap-[1rem] transition-all duration-300 group-hover: group-hover: h-[0px] p-0   bg-[#FAFAFA] drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)] rounded-[12px] rounded-tl-[0]
                ${
                  (MenuItemOpen)
                    ? "visible opacity-100 p-[1rem]"
                    : "invisible opacity-0 "
                }
                ${
                  (MenuItemOpen && breakpoint<=650) ?'h-[100vh]':'h-fit'
                }
                
                ${
                  breakpoint<=650 ?'left-0 top-0':'left-[0%] top-[100%]'
                }
                `}
                >
                  <MenuItems
                    HeaderButtonsActive={HeaderButtonsActive}
                    activeButton={activeButton}
                    setActiveButton={setActiveButton}
                    className="flex-col gap-[.75rem] items-center"
                  />
                </div>
              </div>
            )}

            <div
              onClick={() => {
                navigate("/");
                SetHeaderButtonsActive("0");
              }}
              className="cursor-pointer"
            >
              <LogoWithName 
              height={((breakpoint<=650 && breakpoint>500) && 35) || ((breakpoint<=500 && breakpoint>420) && 30) || breakpoint<=420 && 25}
              />
            </div>
          </div>
          {breakpoint > 1200 && (
            <MenuItems
              HeaderButtonsActive={HeaderButtonsActive}
              className="gap-[2rem] items-center"
            />
          )}

          {breakpoint>650 &&
            <div className="flex items-center justify-center gap-[.5rem]">
            <CartIconSvg />
            <h1 className="font-2-book text-color-18 text-[1rem]">My Cart</h1>
            <IoIosArrowDown />
          </div>}
          {breakpoint<=650 &&
            <div className="flex gap-[.5rem] ">
            {/* <LocationIconSvg /> */}
            <FaMapLocation className="text-[#21272CB3] mt-[.65px] cursor-pointer"
            onClick={()=>{setshowLocationSearch('true')}}
            
            />

            <h1 className="text-[.875rem] font-2-book text-color-9-70 text-color-7 cursor-pointer"
            onClick={()=>{setshowLocationSearch('true')}}
            >
             {selectedLocation ?
             selectedLocation:'Location' 
             }
            </h1>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
