import React, { useState } from "react";
import { LogoSvgWhite } from "../../assets/Images/SVG";
import { useScreenResizeValue } from "../../ScreenSizeFunction";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
  const FooterLinks = [
    {
      heading: "Popular Searches",
      links: [
        "Trending Cars",
        "Popular Brands",
        "Upcoming Cars",
        "Most Searched EVs",
      ],
    },
    {
      heading: "Resources",
      links: [
        "Immersive Video Reviews",
        "Guide & Tips",
        "Car Buying Tips",
        "Car Selling Insights",
        "Maintenance Guides",
      ],
    },
    {
      heading: "Explore",
      links: [
        "Discover Cars",
        "Explore New Vehicles",
        "Future Launches",
        "Trending Models",
        "Pre-Owned Marketplace",
      ],
    },
    {
      heading: "Car Offers ",
      links: [
        "Buy Used Cars",
        "Sell My Car",
        "AI Car Valuation",
        "Car Financing	New",
        "Dealer Promotions",
      ],
    },
    {
      heading: "Legal",
      links: [
        "Terms & Conditions",
        "Privacy Policy",
        "Cookie Policy",
        "Disclaimer",
      ],
    },
  ];

  const breakpoint = useScreenResizeValue();

  const [FooterItemOpen,SetFooterItemOpen] = useState('')

  return (
    <div className="flex items-center w-full justify-center bg-[#0A142F] font-1 text-color-1 ">
      <div
        className={`${breakpoint <= 1440 ? "w-[84%]" : "w-[1200px] "} 
`}
      >
        <div
          className={`py-[2rem] border-b-[1px] border-[#ffffff]
                ${
                  breakpoint > 1250 &&
                  "flex items-end justify-between gap-[1rem]"
                }
                ${
                  breakpoint <= 1250 &&
                  "flex flex-col items-start justify-between gap-[2rem]"
                }
                `}
        >
          <div
            className={`flex gap-[.25rem] justify-center flex-col 
                    ${breakpoint > 1250 && "w-[25%] items-start pr-[2rem]"}
                    ${
                      breakpoint <= 1250 &&
                      breakpoint > 750 &&
                      "w-[50%] items-start pr-[2rem]"
                    }
                    ${
                      breakpoint <= 750 &&
                      breakpoint > 500 &&
                      "w-[100%] items-start pr-[2rem]"
                    }
                    ${
                      breakpoint <= 500 &&
                      "w-[100%] items-center"
                    }
                    `}
          >
            <LogoSvgWhite />
            <h1
              className={`font-medium
                        ${breakpoint > 1200 && "text-[1.5rem]"}
                        ${
                          breakpoint <= 1200 &&
                          breakpoint > 768 &&
                          "text-[1.25rem]"
                        }
                        ${
                          breakpoint <= 768 && breakpoint > 480 && "text-[1rem]"
                        } 
                        ${breakpoint <= 480 && "text-[.75rem]"}
                        `}
            >
              Autotrends.ai
            </h1>
            <p
              className={`text-justify text-color-11
                        ${breakpoint > 1200 && "text-[.8125rem]"}
                        ${
                          breakpoint <= 1200 &&
                          breakpoint > 768 &&
                          "text-[.6875rem]"
                        }
                        ${
                          breakpoint <= 768 &&
                          "text-[.5625rem]"
                        } 
                        `}
            >
              AutoTrends.ai is your one-stop advanced platform for discovering,
              buying, and selling cars. From AI-powered vehicle valuation to EV
              station locators, we leverage technology to simplify and enhance
              your car ownership journey.
            </p>
          </div>
          <div
            className={`w-full flex items-start justify-between 
                     ${breakpoint > 1250 && "w-[75%]"}
                    ${breakpoint <= 1250 && breakpoint > 750 && "w-[100%]"}
                    ${
                      breakpoint <= 900 &&
                      "w-[100%] flex-col gap-[1rem] "
                    }
                    `}
          >
            {FooterLinks.map((item, index) => {
              return (
                <div
                  className={`w-full flex flex-col gap-[1rem] 
                                ${breakpoint > 900 && "items-start"}
                                 ${
                                   breakpoint <= 900 &&
                                   breakpoint > 500 &&
                                   "w-[45%] items-start"
                                 }
                                 ${
                                   breakpoint <= 500 &&
                                   "w-[45%] items-start"
                                 }
                                     
                                     `}
                  key={index}
                >
                 
                    <h1
                      className={`font-medium whitespace-nowrap  flex items-center justify-between w-full
                                          ${
                                            breakpoint > 1200 &&
                                            "text-[1.125rem]"
                                          }
                                          ${
                                            breakpoint <= 1200 &&
                                            breakpoint > 768 &&
                                            "text-[1rem]"
                                          }
                                          ${
                                            breakpoint <= 768 &&
                                          
                                            "text-[.875rem]"
                                          } 
                               `}

                               onClick={()=>{
                                if(FooterItemOpen!==item.heading){
                                  SetFooterItemOpen(item.heading)
                                }
                                else{
                                  SetFooterItemOpen('')
                                }
                              }}
                    >
                      {item.heading} 
                    {breakpoint<=900 &&
                      <h1 className={`text-[1.5rem] ${FooterItemOpen === item.heading && 'rotate-180'}`}>
                      <MdOutlineKeyboardArrowDown />
                    </h1>}
                    </h1>
                 

                  <div
                    className={`flex flex-col gap-[.5rem] text-color-11  overflow-hidden transition-all duration-200
                      
                                          ${
                                            (breakpoint<=900 && FooterItemOpen !==item.heading) ?'h-0':'h-fit'
                                          }
                                         ${
                                           breakpoint > 1200 && "text-[.875rem]"
                                         }
                                         ${
                                           breakpoint <= 1200 &&
                                           breakpoint > 768 &&
                                           "text-[.75rem]"
                                         }
                                         ${
                                           breakpoint <= 768 &&
                                           "text-[.625rem]"
                                         } 

                                         ${
                                          (FooterItemOpen=== item.heading && breakpoint<=900) && 'h-fit'
                                         }
                                        
                                        
                                         `}
                  >
                    {item.links.map((link, key) => {
                      return (
                        <a href="" key={key}>
                          {link}
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={`pt-[1rem] pb-[2rem] flex  items-center text-color-11 font-2 
            ${breakpoint<=480 ?'justify-center flex-col gap-[1rem]':'justify-between'}
            `}
        >
          <div className="flex items-center justify-center gap-[.5rem]">
            <h1 className="text-[.875rem]">Social</h1>
            <div className="flex items-center justify-center gap-[1rem] text-color-1">
              <FaInstagram />
              <FaFacebook />
              <FaYoutube />
              <FaXTwitter />
            </div>
          </div>

          <h1
            className={` 
                ${breakpoint > 1200 && "text-[.875rem]"}
                ${breakpoint <= 1200 && breakpoint > 768 && "text-[.75rem]"}
                ${breakpoint <= 768  && "text-[.625rem]"} `}
          >
            © 2026 Autotrends.ai | All Right Reserved
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
