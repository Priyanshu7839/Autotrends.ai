import React, { useEffect, useState ,useRef} from "react";
import { useScreenResizeValue } from "../ScreenSizeFunction";
import { brandoffers } from "../MockData";
import { BMWHomepageIcon } from "../assets/Images/SVG";
import { useDispatch } from "react-redux";
import { carnamesbybrands } from "../Store/CarNamesSlice";
import { useNavigate } from "react-router";
import { AstonMartinLogo, AudiLogo, BentleyLogo, BMWLogo, BYDLogo, CitroenLogo, FerrariLogo, FiskerLogo, ForceLogo, HondaLogo, HyundaiLogo, IsuzuLogo, JaguarLogo, JeepLogo, KiaLogo, LamboLogo, LandRoverLogo, LeapLogo, LexusLogo, LotusLogo, MahindraLogo, MarutiLogo, MaseratiLogo, McLarenLogo, MercedesLogo, MGLogo, MiniLogo, NissanLogo, OlaLogo, PorscheLogo, PravaigLogo, RenaultLogo, RollsRoyceLogo, SkodaLogo, TataLogo, TeslaLogo, ToyotaLogo, VinfastLogo, VolkswagenLogo, VolvoLogo } from "../assets/Images";
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";







const PopularHomepageBrands = () => {
  const breakpoint = useScreenResizeValue();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [carNamesonPage,setCarNamesonPage] = useState([]);

 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const firstRender = useRef(true);

useEffect(() => {
  if (firstRender.current) {
    firstRender.current = false;
    return;
  }

  if (carNamesonPage.length > 0) {
    dispatch(carnamesbybrands(carNamesonPage));
    navigate("/brand");
  }
}, [carNamesonPage, dispatch, navigate]);

const brands = [
        {
            "name": "Hyundai",
            "image": HyundaiLogo,
            "offers":4
        },
        {
            "name": "Honda",
            "image": HondaLogo,
            "offers":4
        },
        {
            "name": "Tata",
            "image": TataLogo,
            "offers":4
        },
        {
            "name": "Renault",
            "image": RenaultLogo,
            "offers":4
        },
        {
            "name": "Toyota",
            "image": ToyotaLogo,
            "offers":4
        },
        {
            "name": "MG",
            "image": MGLogo,
            "offers":4
        },
        {
            "name": "Kia",
            "image": KiaLogo,
            "offers":4
        },
        {
            "name": "Maruti",
            "image": MarutiLogo,
            "offers":4
        },
        {
            "name": "Mahindra",
            "image": MahindraLogo,
            "offers":4
        },
        {
            "name": "Skoda",
            "image": SkodaLogo,
            "offers":4
        },
        {
            "name": "Jeep",
            "image": JeepLogo,
            "offers":4
        },
        {
            "name": "Nissan",
            "image": NissanLogo,
            "offers":4
        },
        {
          "name":"BMW",
          "image":BMWLogo
        },
        {
          "name":"Mercedes",
          "image":MercedesLogo
        },
        {
          "name":"Land Rover",
          "image":LandRoverLogo
        },
        {
          "name":"VolksWagen",
          "image":VolkswagenLogo
        },
        {
          "name":"Renault",
          "image":RenaultLogo
        },
        {
          "name":"Audi",
          "image":AudiLogo
        },
        {
          "name":"BYD",
          "image":BYDLogo
        },
        {
          "name":"Citroen",
          "image":CitroenLogo
        },
        {
          "name":"Volvo",
          "image":VolvoLogo
        },
        {
          "name":"Nissan",
          "image":NissanLogo
        },
        {
          "name":"Porsche",
          "image":PorscheLogo
        },
        {
          "name":"Lexus",
          "image":LexusLogo
        },
        {
          "name":"Lamborghini",
          "image":LamboLogo
        },
        {
          "name":"Rolls-Royce",
          "image":RollsRoyceLogo
        },
        {
          "name":"Jaguar",
          "image":JaguarLogo
        },
        {
          "name":"Mini",
          "image":MiniLogo
        },
        {
          "name":"Ferrari",
          "image":FerrariLogo
        },
        {
          "name":"Force Motors",
          "image":ForceLogo
        },
        {
          "name":"Maserati",
          "image":MaseratiLogo
        },
        {
          "name":"Isuzu",
          "image":IsuzuLogo
        },
        {
          "name":"Aston Martin",
          "image":AstonMartinLogo
        },
        {
          "name":"McLaren",
          "image":McLarenLogo
        },
        {
          "name":"Bentley",
          "image":BentleyLogo
        },
        {
          "name":"Tesla",
          "image":TeslaLogo
        },
        {
          "name":"Lotus",
          "image":LotusLogo
        },
        {
          "name":"VinFast",
          "image":VinfastLogo
        },
        {
          "name":"OLA",
          "image":OlaLogo
        },
        {

          "name":"Fisker",
          "image":FiskerLogo
        },
        {
          "name":"Leap Motors",
          "image":LeapLogo
        },
        {
          "name":"Pravaig",
          "image":PravaigLogo
        }
    ]


    const [VisibleLogo,setVisibleLogo] = useState({
      firstBreak:"12",
      secondBreak:"8",
      thirdBreak:"9"
    })

    const FullLength = brands.length


  return (
    <div className="flex items-center justify-center bg-[#FFFFFF]">
      <div
        className={`${breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]"} 
                    flex gap-[20px]  py-[20px] border-[1px] border-[#23242c1a]  rounded-[16px] flex-col font-1 overflow-hidden`}
      >
        <div className="  bg-[white] px-[20px]   relative flex flex-col     rounded-xl   ">
          <h3 className={`  font-[600] leading-[38.8px] text-[#24272c] 
            ${breakpoint>1250 && 'text-[32px]'}
            ${(breakpoint<=1250 && breakpoint>750) && 'text-[28px]'}
            ${breakpoint<=750 && 'text-[24px]'}
            `}>
            Popular Brands
          </h3>

          <div className=" w-full overflow-hidden">
            <div className="  flex mt-[20px]   flex-wrap items-start justify-start border-[1px] rounded-[8px] border-[#23242c1a]">
             
               

<table className="table-auto border-collapse border-[1px] rounded-[8px] border-[#23242c1a] w-full overflow-hidden">
 {
 breakpoint>700 &&
 <tbody>
    {brands.slice(0,VisibleLogo.firstBreak).map((brand, index) => 
      index % 6 === 0 ? ( 
        <tr key={index} className="border-[1px]  border-[#23242c1a]">
          {brands.slice(index, index + 6).map((b, i) => (
            <td 
              key={i} 
              className="cursor-pointer border border-[#23242c1a] p-[1rem] text-[.825rem] font-2-book text-color-9-70"
              onClick={()=>{
                navigate(`/brand/${b.name}`)
                window.scrollTo(0,0)

              }}
            >
             <div className="flex items-center justify-between flex-col gap-[9px]">
             {/* <BMWHomepageIcon/> */}
             <img src={b.image} alt=""  className="w-[100px] aspect-video "/>
                {b.name}
             </div>
            </td>
          ))}
        </tr>
      ) : null
    )}
  </tbody>}
 {
 (breakpoint<=700 && breakpoint>550) &&
 <tbody>
    {brands.slice(0,VisibleLogo.secondBreak).map((brand, index) => 
      index % 4 === 0 ? ( 
        <tr key={index} className="border-[1px]  border-[#23242c1a]">
          {brands.slice(index, index + 4).map((b, i) => (
            <td 
              key={i} 
              className="cursor-pointer border border-[#23242c1a] p-[1rem] text-[.825rem] font-2-book text-color-9-70"
               onClick={()=>{
                navigate(`/brand/${b.name}`)
                window.scrollTo(0,0)

              }}
            >
             <div className="flex items-center justify-between flex-col gap-[9px]">
             {/* <BMWHomepageIcon/> */}
             <img src={b.image} alt=""  className="w-[100px] aspect-video "/>
                {b.name}
             </div>
            </td>
          ))}
        </tr>
      ) : null
    )}
  </tbody>}
 {
 (breakpoint<=550) &&
 <tbody>
    {brands.slice(0,VisibleLogo.thirdBreak).map((brand, index) => 
      index % 3 === 0 ? ( 
        <tr key={index} className="border-[1px]  border-[#23242c1a]">
          {brands.slice(index, index + 3).map((b, i) => (
            <td 
              key={i} 
              className="cursor-pointer border border-[#23242c1a] p-[1rem] text-[.75rem] font-2-book text-color-9-70"
               onClick={()=>{
                navigate(`/brand/${b.name}`)
                window.scrollTo(0,0)
              }}
            >
             <div className="flex items-center justify-between flex-col gap-[9px]">
             {/* <BMWHomepageIcon/> */}
             <img src={b.image} alt=""  className="w-[100px] aspect-video "/>
                {b.name}
             </div>
            </td>
          ))}
        </tr>
      ) : null
    )}
  </tbody>}
</table>


             
            </div>
           {breakpoint>700 &&
            <p className="pt-[24px] pl-[12px] text-color-7 font-2 cursor-pointer flex items-center justify-center gap-[.25rem] "
            onClick={()=>{
              if(VisibleLogo.firstBreak==='12'){
                setVisibleLogo({firstBreak:FullLength})
              }
              else{
                setVisibleLogo({firstBreak:'12'})
              }
            }}
            >
              {VisibleLogo.firstBreak === '12'?'View all':'View less'}
              {VisibleLogo.firstBreak === '12'?<IoIosArrowDropdownCircle/>:<IoIosArrowDropupCircle />}  
            </p>}
           {(breakpoint<=700 && breakpoint>550) &&
            <p className="pt-[24px] pl-[12px] text-color-7 font-2 cursor-pointer flex items-center justify-center gap-[.25rem] "
            onClick={()=>{
              if(VisibleLogo.secondBreak==='8'){
                setVisibleLogo({secondBreak:FullLength})
              }
              else{
                setVisibleLogo({secondBreak:'8'})
              }
            }}
            >
              {VisibleLogo.secondBreak === '8'?'View all':'View less'}
              {VisibleLogo.secondBreak === '8'?<IoIosArrowDropdownCircle/>:<IoIosArrowDropupCircle />}  
            </p>}
           {breakpoint<=550 &&
            <p className="pt-[24px] pl-[12px] text-color-7 font-2 cursor-pointer flex items-center justify-center gap-[.25rem]"
            onClick={()=>{
              if(VisibleLogo.thirdBreak==='9'){
                setVisibleLogo({thirdBreak:FullLength})
              }
              else{
                setVisibleLogo({thirdBreak:'9'})
              }
            }}
            >
              {VisibleLogo.thirdBreak === '9'?'View all':'View less'}
              {VisibleLogo.thirdBreak === '9'?<IoIosArrowDropdownCircle/>:<IoIosArrowDropupCircle />}  
            </p>}


          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularHomepageBrands;
