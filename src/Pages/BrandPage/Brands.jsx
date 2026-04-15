import {
  BrandModelCard,
  CarRecommender,
  BrandCarCompare,
  BrandCarHighlights,
  BrandCarDealers,
  BrandCarVideosCard,
  BrandCarImages,
  BrandNewsCard,
  Accordion,
  UserReviews,
  Menu,
  BrandDealers,
} from "../../components";
import { GetBrandcars } from "../../Context/ApiCall";
import { kia_logo, city_background } from "../../assets/Images";
import {
  ReadLessicon,
  ReadMoreicon,
  Rightarrow,
} from "../../assets/Images/SVG";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";
import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { GoStarFill } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useParams } from "react-router";

import { AstonMartinLogo, AudiLogo, BentleyLogo, BMWLogo, BYDLogo, CitroenLogo, FerrariLogo, FiskerLogo, ForceLogo, HondaLogo, HyundaiLogo, IsuzuLogo, JaguarLogo, JeepLogo, KiaLogo, LamboLogo, LandRoverLogo, LeapLogo, LexusLogo, LotusLogo, MahindraLogo, MarutiLogo, MaseratiLogo, McLarenLogo, MercedesLogo, MGLogo, MiniLogo, NissanLogo, OlaLogo, PorscheLogo, PravaigLogo, RenaultLogo, RollsRoyceLogo, SkodaLogo, TataLogo, TeslaLogo, ToyotaLogo, VinfastLogo, VolkswagenLogo, VolvoLogo } from "../../assets/Images";
import { useScreenResizeValue } from "../../ScreenSizeFunction";

const Brands = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [news, setnews] = useState("news");

  const [carData, setCarData] = useState(null);

  const { id } = useParams();
  const [selectedBrand, setSelectedBrand] = useState(id);

  useEffect(() => {
  setSelectedBrand(id);
}, [id]);

  useEffect(() => {
    const GetBrand = async () => {
      const response = await GetBrandcars(selectedBrand);
      console.log(response.data.DATA);
      setCarData(response?.data?.DATA);
    };

    GetBrand();
  }, [selectedBrand]);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
    LineElement,
    PointElement
  );

  const breakpoint = useScreenResizeValue()

  const allSalesData = {
    Delhi: {
      Hyundai: [2676, 1642, 1775, 1823, 1142],
      Honda: [882, 430, 392, 440,298],
      Tata: [3004, 1774, 2247, 2018, 1201],
      Toyota: [1703, 1253, 1244, 1241, 950],
      MG: [627,523, 725, 389, 349],
      Kia: [1461, 1097, 1102, 1282, 643],
      Maruti: [9972, 4268, 4764, 5915, 3304],
      Mahindra: [1756, 1479, 1431, 1336, 932],
      Skoda: [628, 463, 596, 609, 387],
      Jeep: [0, 0, 0, 0, 1],
      Nissan: [150, 83, 68, 96, 53],
      BMW: [138, 102, 124, 93, 57],
      Mercedes: [227, 122, 154, 105, 87],
     "Land Rover": [0,0,0,0,0],
      VolksWagen: [0, 0, 0, 0, 1],
      Renault: [125, 105, 64, 86, 66],
      Audi: [4, 1, 0, 4, 2],
      BYD: [62, 28, 49, 32, 39],
      Citroen: [31, 21, 15, 18, 19],
      Volvo: [11, 1, 12, 12, 9],
      Porsche: [9, 5, 4, 4, 2],
      Lexus: [0,0, 0, 0, 0],
      Lamborghini: [0, 0, 1, 0, 2],
     "Rolls-Royce": [0, 1, 3, 0, 0],
      Jaguar: [28,26,34,28,19],
      Mini: [0,0, 0, 0, 0],
      Ferrari: [0,0,0,0,0],
      "Force Motors": [1, 2, 0, 0, 0],
      Maserati: [0, 1, 0, 0, 0],
      Isuzu: [1,2,0,0,0],
      "Aston Martin": [0,0, 0, 0, 0],
      McLaren: [0,0, 0, 0, 0],
      Bentley: [1, 0, 0, 0, 0],
      Tesla: [0,0, 0, 0, 0],
      Lotus: [0,0, 0, 0, 0],
      VinFast: [0,0, 0, 0, 0],
      Ola: [0,0, 0, 0, 0],
      Fisker: [0,0, 0, 0, 0],
      "Leap Motors": [0,0, 0, 0, 0],
      Pravaig: [0, 0, 0, 0, 0],
      Ford:[1,1,0,1,0]
    },
    Jhansi: {
      Hyundai: [46, 46, 39, 43, 19],
      Honda: [8, 4, 6, 4,7],
      Tata: [88, 63, 69, 56, 30],
      Toyota: [39,32,29,32,23],
      MG: [6,9, 4, 9, 3],
      Kia: [55,42,34,41,25],
      Maruti: [378, 187, 158, 262, 132],
      Mahindra: [137,113,102,144,73],
      Skoda: [4,3,4,6,4],
      Jeep: [0, 0, 0, 1, 0],
      Nissan: [5,1,3,1,3],
      BMW: [1, 1, 0, 0, 0],
      Mercedes: [0,0,0,0,1],
      "Land Rover": [0,0,0,0,0],
      VolksWagen: [0, 0, 0, 0, 0],
      Renault: [10,9,6,3,7],
      Audi: [0,0,0,0,0],
      BYD: [0,0,0,0,0],
      Citroen: [1,0,0,0,0],
      Volvo: [0,0,0,0,0],
      Porsche: [0,0,0,0,0],
      Lexus: [0,0, 0, 0, 0],
      Lamborghini: [0,0,0,0,0],
      "Rolls-Royce": [0, 1, 3, 0, 0],
      Jaguar: [0,0,1,0,0],
      Mini: [0,0, 0, 0, 0],
      Ferrari: [0,0,0,0,0],
      "Force Motors": [0, 0, 0, 1, 1],
      Maserati: [0, 1, 0, 0, 0],
      Isuzu: [0,0, 0, 0, 0],
       "Aston Martin": [0,0, 0, 0, 0],
      McLaren: [0,0, 0, 0, 0],
      Bentley: [1, 0, 0, 0, 0],
      Tesla: [0,0, 0, 0, 0],
      Lotus: [0,0, 0, 0, 0],
      VinFast: [0,0, 0, 0, 0],
      Ola: [0,0, 0, 0, 0],
      Fisker: [0,0, 0, 0, 0],
      "Leap Motors": [0,0, 0, 0, 0],
      Pravaig: [0, 0, 0, 0, 0],
      Ford:[0,0,0,0,0]
    },
    Lucknow: {
      Hyundai: [181,139,72,187,85],
      Honda: [5,13,10,32,9],
      Tata: [113,81,110,81,57],
      Toyota: [54,98,39,109,37],
      MG: [5,4,4,7,7],
      Kia: [83,93,69,138,55],
      Maruti: [775,328,305,1122,315],
      Mahindra: [130,200,78,211,84],
      Skoda: [19,8,4,17,0],
      Jeep: [0, 2, 0, 0, 0],
      Nissan: [0,0,0,1,0],
      BMW: [1, 1, 0, 0, 0],
      Mercedes: [3,1,3,2,1],
      "Land Rover": [0,0,0,0,0],
      VolksWagen: [0, 0, 0, 0, 0],
      Renault: [5,0,0,7,0],
      Audi: [0,0,0,0,0],
      BYD: [0,1,0,0,0],
      Citroen: [1,0,1,0,0],
      Volvo: [0,1,0,1,0],
      Porsche: [0,0,0,0,0],
      Lexus: [0,0, 0, 0, 0],
      Lamborghini: [0,0,0,0,0],
      "Rolls-Royce": [0, 1, 3, 0, 0],
      Jaguar: [0,1,1,5,1],
      Mini: [0,0, 0, 0, 0],
      Ferrari: [0,0,0,0,0],
      "Force Motors": [0, 0, 0, 0,0],
      Maserati: [0, 0, 0, 0, 0],
      Isuzu: [0,0, 0, 0, 0],
       "Aston Martin": [0,0, 0, 0, 0],
      McLaren: [0,0, 0, 0, 0],
      Bentley: [0, 0, 0, 0, 0],
      Tesla: [0,0, 0, 0, 0],
      Lotus: [0,0, 0, 0, 0],
      VinFast: [0,0, 0, 0, 0],
      Ola: [0,0, 0, 0, 0],
      Fisker: [0,0, 0, 0, 0],
      "Leap Motors": [0,0, 0, 0, 0],
      Pravaig: [0, 0, 0, 0, 0],
      Ford:[0,0,0,0,0]
    },
    Noida: {
     Hyundai: [560,384,401,414,285],
      Honda: [252,167,183,141,80],
      Tata: [712,466,656,562,275],
      Toyota: [496,459,483,430,299],
      MG: [170,127,97,116,85],
      Kia: [283,257,265,260,128],
      Maruti: [2536,1313,1242,1609,854],
      Mahindra: [738,560,650,671,166],
      Skoda: [186,132,165,177,122],
      Jeep: [13,5,7,5,3],
      Nissan: [25,20,9,20,13],
      BMW: [41,29,26,33,17],
      Mercedes: [55,56,60,61,34],
      "Land Rover": [0,0,0,0,0],
      VolksWagen: [0, 0, 0, 0, 0],
      Renault: [41,23,42,21,9],
      Audi: [0,0,0,0,0],
      BYD: [10,8,1,5,6],
      Citroen: [12,9,3,13,3],
      Volvo: [2,5,4,3,3],
      Porsche: [2,0,1,1,0],
      Lexus: [0,0, 0, 0, 0],
      Lamborghini: [0,0,0,0,0],
      "Rolls-Royce": [0, 1, 3, 0, 0],
      Jaguar: [12,12,13,7,5],
      Mini: [0,0, 0, 0, 0],
      Ferrari: [0,0,0,0,0],
      "Force Motors": [1,0,0,2,1],
      Maserati: [0, 0, 0, 0, 0],
      Isuzu: [0,0,0,2,0],
       "Aston Martin": [0,0, 0, 0, 0],
      McLaren: [0,0, 0, 0, 0],
      Bentley: [0, 0, 0, 0, 0],
      Tesla: [0,0, 0, 0, 0],
      Lotus: [0,0, 0, 0, 0],
      VinFast: [0,0, 0, 0, 0],
      Ola: [0,0, 0, 0, 0],
      Fisker: [0,0, 0, 0, 0],
      "Leap Motors": [0,0, 0, 0, 0],
      Pravaig: [0, 0, 0, 0, 0],
      Ford:[0,0,0,0,0]
    },
    "Mumbai Central": {
      Hyundai: [240,175,226,215,116],
      Honda: [84,49,48,45,41],
      Tata: [0,0,0,0,0],
      Toyota: [0,0,0,0,0],
      MG: [106,57,77,64,40],
      Kia: [131,96,152,144,76],
      Maruti: [431,204,380,257,138],
      Mahindra: [161,104,152,119,65],
      Skoda: [186,132,165,177,122],
      Jeep: [0,0,1,0,0],
      Nissan: [3,1,3,3,1],
      BMW: [77,48,59,45,21],
      Mercedes: [87,79,99,66,38],
      "Land Rover": [0,0,0,0,0],
      VolksWagen: [0, 0, 0, 0, 0],
      Renault: [8,2,7,5,3],
      Audi: [2,0,1,0,0],
      BYD: [15,11,34,18,22],
      Citroen: [6,5,5,3,1],
      Volvo: [0,0,0,0,0],
      Porsche: [5,1,4,3,1],
      Lexus: [0,0, 0, 0, 0],
      Lamborghini: [6,2,5,0,0,],
      "Rolls-Royce": [0, 1, 3, 0, 0],
      Jaguar: [22,25,17,12,4],
      Mini: [0,0, 0, 0, 0],
      Ferrari: [3,1,0,0,2],
      "Force Motors": [1,0,0,0,0],
      Maserati: [0, 0, 0, 0, 0],
      Isuzu: [0,0,0,0,0],
       "Aston Martin": [0,0, 0, 0, 0],
      McLaren: [0,0, 0, 1, 0],
      Bentley: [0,1,1,0,0],
      Tesla: [0,0, 0, 0, 0],
      Lotus: [0,0, 0, 0, 0],
      VinFast: [0,0, 0, 0, 0],
      Ola: [0,0, 0, 0, 0],
      Fisker: [0,0, 0, 0, 0],
      "Leap Motors": [0,0, 0, 0, 0],
      Pravaig: [0, 0, 0, 0, 0],
      Ford:[0,0,0,0,0]
    },
    Ahemdabad: {
      Hyundai: [718,532,450,536,424],
      Honda: [166,106,87,99,83],
      Tata: [595,448,525,520,331],
      Toyota: [0,0,0,0,0],
      MG: [120,93,76,116,74],
      Kia: [314,418,366,357,257],
      Maruti: [1272,750,726,831,554],
      Mahindra: [369,408,318,344,339],
      Skoda: [141,138,148,137,152],
      Jeep: [5,3,2,7,11],
      Nissan: [16,13,7,6,7],
      BMW: [22,49,24,25,39],
      Mercedes: [18,53,37,19,40],
      "Land Rover": [0,0,0,0,0],
      VolksWagen: [0, 0, 0, 0, 0],
      Renault: [11,11,4,8,5],
      Audi: [1,0,2,1,0],
      BYD: [10,6,8,9,20],
      Citroen: [11,3,8,9,1],
      Volvo: [0,0,0,0,0],
      Porsche: [0,4,2,2,1],
      Lexus: [0,0, 0, 0, 0],
      Lamborghini: [0,0,0,0,0],
      "Rolls-Royce": [0,0,1,0,0],
      Jaguar: [7,11,8,4,10],
      Mini: [0,0, 0, 0, 0],
      Ferrari: [0,0,0,0,0],
      "Force Motors": [0,1,0,0,0],
      Maserati: [0,1,1,0,0],
      Isuzu: [0,0,0,1,0],
       "Aston Martin": [0,0, 0, 0, 0],
      McLaren: [0,0, 0, 0, 0],
      Bentley: [1,0,0,0,0],
      Tesla: [0,0, 0, 0, 0],
      Lotus: [0,0, 0, 0, 0],
      VinFast: [0,0, 0, 0, 0],
      Ola: [0,0, 0, 0, 0],
      Fisker: [0,0, 0, 0, 0],
      "Leap Motors": [0,0, 0, 0, 0],
      Pravaig: [0, 0, 0, 0, 0],
      Ford:[0,0,0,0,0]
    },
    "Banglore Central": {
      Hyundai: [336,220,240,246,168],
      Honda: [55,64,60,28,22],
      Tata: [216,187,243,237,127],
      Toyota: [224,311,218,209,127],
      MG: [65,69,47,57,50],
      Kia: [124,115,116,111,72],
      Maruti: [576,292,318,294,182],
      Mahindra: [295,361,320,316,,255],
      Skoda: [174,159,264,177,102],
      Jeep: [11,11,5,6,4],
      Nissan: [53,24,51,53,29],
      BMW: [33,27,32,11,8],
      Mercedes: [16,29,28,21,14],
      "Land Rover": [0,0,0,0,0],
      VolksWagen: [0, 0, 0, 0, 0],
      Renault: [39,18,30,29,16],
      Audi: [1,1,1,1,0],
      BYD: [4,4,4,4,0],
      Citroen: [5,6,4,2,7],
      Volvo: [0,0,0,0,0],
      Porsche: [3,5,7,1,2],
      Lexus: [0,0, 0, 0, 0],
      Lamborghini: [0,0,0,0,0],
      "Rolls-Royce": [0,0,0,1,0],
      Jaguar: [2,8,9,13,5],
      Mini: [0,0, 0, 0, 0],
      Ferrari: [0,0,0,0,0],
      "Force Motors": [0,0,1,2,0],
      Maserati: [0, 0, 0, 0, 0],
      Isuzu: [0,0,0,1,0],
       "Aston Martin": [0,0, 0, 0, 0],
      McLaren: [0,0, 0, 0, 0],
      Bentley: [0,0,0,0,0],
      Tesla: [0,0, 0, 0, 0],
      Lotus: [0,0, 0, 0, 0],
      VinFast: [0,0, 0, 0, 0],
      Ola: [0,0, 0, 0, 0],
      Fisker: [0,0, 0, 0, 0],
      "Leap Motors": [0,0, 0, 0, 0],
      Pravaig: [0, 0, 0, 0, 0],
      Ford:[0,0,0,0,0]
    },
    // Add more cities and brands
  };
  const citiesName = [
    "Delhi",
    "Jhansi",
    "Lucknow",
    "Noida",
    "Mumbai Central",
    "Ahemdabad",
    "Banglore Central",
  ];
  const [citiesNamePopup, setCitiesNamePopup] = useState(false);
  const [selectedCityName, setSelectedCityName] = useState("Delhi");

  const data = {
    labels: ["Jan", "Feb", "March", "April", "May"],
    datasets: [
      {
        label: "Car sales",
        data: allSalesData[selectedCityName][selectedBrand],
        backgroundColor: [
          "#0b85ff",
          "#0b85ff",
          "#0b85ff",
          "#0b85ff",
          "#0b85ff",
          "#0b85ff",
          "#0b85ff",
        ],
        borderColor: [
          "#0b85ff",
          "#0b85ff",
          "#0b85ff",
          "#0b85ff",
          "#0b85ff",
          "#0b85ff",
          "#0b85ff",
        ],
        borderWidth: 1,
        barThickness: 20,
        borderRadius: 0,
      },
    ],
  };


  

  const options = {
    responsive: true, // Make the chart responsive to screen size
    maintainAspectRatio: false, // Allow the chart to resize according to the container
    plugins: {
      legend: {
        display: false, // Position of the legend ('top', 'bottom', 'left', 'right')
      },
      tooltip: {
        enabled: true, // Show tooltips when hovering over bars
      },
    },
    scales: {
      x: {
        beginAtZero: true, // Start the x-axis at zero
        grid: {
          display: false, // Disable grid lines on the x-axis
        },
        ticks: {
          display: true, // Remove x-axis labels
        },
      },
      y: {
        beginAtZero: true, // Start the y-axis at zero
        grid: {
          display: true, // Disable grid lines on the y-axis
        },
        ticks: {
          display: true, // Remove x-axis labels
        },
      },
    },
  };


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
            "name":"BMW",
            "image":BMWLogo
          },
          {
            "name":"Mercedes",
            "image":MercedesLogo
          },
          {
            "name":"Land Rover Rover",
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

  return (
    <div className="w-full h-full flex items-center justify-center font-1 ">
      <div
        className={` mt-[20px]    ${
          breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]"
        }`}
      >
        <div className={`flex flex-col gap-[20px] ${breakpoint<=1050 ?'w-full':'w-[76%]'}`}>
          <div className="flex flex-col">
           {
            brands.map((b,i)=>{
              return(b.name===selectedBrand &&
                  <img key={i}
              src={b.image || logo}
              alt=""
              width={164}
              height={82}
              className="border-[1px] border-black"
            />
               
              )
            })
           }
            <div className="flex gap-[20px] items-center">
              <p className={` font-[500]
                ${breakpoint>750 && 'text-[27px]'}
                ${(breakpoint<=750 && breakpoint>500) && 'text-[23px]'}
                ${breakpoint<=500 && 'text-[20px]'}
                `}>
                {carData?.brandName} Cars
              </p>
              <div className="flex gap-2 h-max items-center">
                <div className="text-[10px] flex items-center gap-2">
                  <span className="text-[13px]">
                    <strong className="text-bold text-[15px]">
                      {carData?.brandRating}
                    </strong>
                    /5
                  </span>
                  <span className="block">
                    <GoStarFill className="w-[20px] h-[20px] text-[#6bad23]" />
                  </span>
                </div>

                <div className="text-[15px]">{carData?.brandRatingDesc}</div>
              </div>
            </div>
          </div>
          <div className={`w-full rounded-xl bg-[#fff] p-[1rem] pb-[.5rem] flex flex-col gap-[1rem] h-[280px] border-[rgba(36,39,44,0.1)] border `}>
            <h1 className="font-2 flex items-center justify-start gap-[.5rem]">
              Current Trends Of {selectedBrand} in
              <span
                onClick={() => {
                  setCitiesNamePopup(!citiesNamePopup);
                }}
                className="text-[#0b85ff] flex items-center justify-start gap-[.25rem] cursor-pointer relative"
              >
                {selectedCityName}{" "}
                <RiArrowDropDownLine className="text-[1.75rem]" />
                <div
                  className={`absolute top-6 bg-[#fff] py-[.25rem] rounded-xl  border-[rgba(36,39,44,0.1)] border 
                ${citiesNamePopup ? "block" : "hidden"}
                `}
                >
                  {citiesName&&
                  citiesName.map((city, index) => {
                    return (
                      <h1
                        className={`border-[rgba(36,39,44,0.1)] border-b px-[1rem] py-[.25rem] whitespace-nowrap ${
                          index === citiesName.length - 1 && "border-b-0"
                        }`}
                        onClick={() => {
                          setSelectedCityName(city);
                          setCitiesNamePopup(false);
                        }}
                      >
                        {city}
                      </h1>
                    );
                  })}
                </div>
              </span>
            </h1>

            <div className="h-full w-full">
              <Line data={data} options={options} />
            </div>
          </div>
          <div className="w-full flex flex-col gap-[11.3px] rounded-xl border px-[21px] pt-[18px] pb-[21px]   border-[rgba(36,39,44,0.1)]">
            <p
              className={`text-[15px] text-[rgba(36,39,44,0.7)] leading-[24px] ${
                collapsed && "line-clamp-3"
              }`}
            >
              {carData?.pageDescription ? parse(carData.pageDescription) : null}
            </p>
            <span
              className="cursor-pointer text-[15px] text-color-7 font-medium leading-[24px]"
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            >
              {" "}
              {collapsed ? "Read More" : "Read Less"}{" "}
            </span>
          </div>

          <div className="w-full flex flex-col gap-[20px]">
            <div className=" flex flex-col gap-[10px] w-full">
              <div className="flex w-full text-[rgba(36,39,44,0.5)] justify-between px-[10px]">
                <p className="text-[23px] text-[rgba(36,39,44)] font-[500]">
                  {carData?.brandName} Car Models
                </p>
                <div className=" relative">
                  <select
                    name="brands"
                    id="brands"
                    defaultValue={selectedBrand}
                    onChange={(e) => {
                      setSelectedBrand(e.target.value);
                      window.scrollTo(0, 0);
                    }}
                    className=" border-[1px] bg-[white] bg-opacity-0 w-full relative z-10 border-[rgba(36,39,44,0.3)] text-[rgba(36,39,44,0.7)] appearance-none rounded-lg pl-[17px] pr-[37px] py-[5px] outline-none"
                  >
                    {
                      brands.map((b,i)=>{
                        return(
                          <option key={i} >{b.name}</option>
                        )
                      })
                    }
                  </select>
                  <IoMdArrowDropdown className="absolute text-[black]  top-[10px]  right-[10px] z-0 " />
                </div>
              </div>
              <div className=" flex flex-col gap-[20px] ">
                {carData?.carModels&&
                carData?.carModels.map((model) => {
                  
                  return (
                    <BrandModelCard
                      key={model.id}
                      image={model.image}
                      priceRange={model.priceRange}
                      name={model.name}
                      rating={model.avgRating}
                      reviewCount={model.reviewCount}
                      BrandSlug={model.brandSlug}
                      ModelSlug={model.slug}
                      modelUrl={model.modelUrl}
                    />
                  );
                })}
              </div>
            </div>
            {carData?.upcomingCars && (
              <div className=" flex flex-col gap-[24px] w-full">
                <div className="flex w-full justify-between px-[10px]">
                  <p className="text-[23px] text-[rgba(36,39,44)] font-[500] mt-[8px]">
                    Upcoming {carData?.brandName} Cars
                  </p>
                </div>
                <div className=" flex flex-col gap-[20px] ">
                  {carData?.upcomingCars?.items.map((model) => {
                   
                    return (
                      <BrandModelCard
                        upcoming={true}
                        name={model.name}
                        rating={model.avgRating}
                        reviewCount={model.reviewCount}
                        priceRange={model.priceRange}
                        image={model.image}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          {/* <div className=' w-full border-[rgba(36,39,44,0.1)] border-2 rounded-xl text-[14px] flex justify-center text-[#0085ff] font-[500] leading-[48px]'>
            View All Upcoming Kia Cars
          </div> */}
          {/* <CarRecommender /> */}
          <div className=" w-full flex flex-col gap-[8px] pt-[18px] px-[21px] rounded-xl border border-[rgba(36,39,44,0.1)] shadow-md shadow-[rgba(36,39,44,0.1)]">
            <h3 className=" text-[23px] leading-[33.2px] font-[500]">
              {carData?.brandName} Car Comparisons
            </h3>
            <div
              className="w-full flex gap-[15px] overflow-x-scroll "
              style={{ scrollbarWidth: "none" }}
            >
              {carData?.comparecar?.items.map((item, index) => {
                return (
                  <BrandCarCompare
                    key={index}
                    img1={item.image}
                    img2={item.image2}
                    brandname1={item.modelBrandName}
                    brandname2={item.modelBrandName2}
                    modelname1={item.shortModelName}
                    modelname2={item.shortModelName2}
                    priceRange1={item.priceRange}
                    priceRange2={item.priceRange2}
                    title={item.title}
                  />
                );
              })}
            </div>
            <button className=" text-blue text-[15px] font-[700] flex gap-[8px] mb-[20px] mt-[10px] items-center">
              View All Car Comparisons <Rightarrow />
            </button>
          </div>
          <div className=" w-full flex flex-col gap-[8px] py-[18px] px-[21px] rounded-xl border border-[rgba(36,39,44,0.1)] shadow-md shadow-[rgba(36,39,44,0.1)]">
            <h3 className=" text-[23px] leading-[33.2px] font-[500]">
              {carData?.keyHighlight?.title}
            </h3>
            <BrandCarHighlights highlights={carData?.keyHighlight?.items} />
          </div>
          {/* <div className=' w-full relative flex flex-col gap-[8px] pt-[18px] pb-[35px] px-[31.22px] rounded-xl border border-[rgba(36,39,44,0.1)] shadow-md shadow-[rgba(36,39,44,0.1)]'>
            <h3 className=' text-[23px] leading-[33.2px] font-[500]'>Kia Dealers</h3>
            <BrandDealers />
            <img src={city_background} alt="" className=' absolute w-[50%] z-0 bottom-0 right-0' />
          </div> */}
          {/* <div className=' w-full relative flex flex-col pt-[18px]  px-[31.22px] rounded-xl border border-[rgba(36,39,44,0.1)] shadow-md shadow-[rgba(36,39,44,0.1)]'>
            <h3 className=' text-[23px] leading-[33.2px] font-[500]'>Kia Car Videos</h3>
            <p className=' mt-[5.25px] mb-[20.75px] text-[13px] leading-[19.5px] text-[#24272c] text-opacity-70'>
              Kia has 103 videos of its popular & latest car models. Watch our detailed videos to know the prices, features, specs & car review in Hindi.
            </p>
            <BrandCarVideosCard videos={carvideos} />
            <button className=' text-blue text-[15px] font-[700] flex gap-[8px] mb-[10px] mt-[10px] items-center'>
              View All Kia Cars Videos <Rightarrow />
            </button>
          </div> */}
          <div className=" w-full relative flex flex-col gap-[8px] pt-[18px]  px-[31.22px] rounded-xl border border-[rgba(36,39,44,0.1)] shadow-md shadow-[rgba(36,39,44,0.1)]">
            <h3 className=" text-[23px] leading-[33.2px] font-[500]">
              {carData?.oemGalleryWidgetDto?.title}
            </h3>
            <p className=" mt-[5.25px] mb-[20.75px] text-[13px] leading-[19.5px] text-[#24272c] text-opacity-70">
              {carData?.oemGalleryWidgetDto?.contentTitle}
            </p>
            <BrandCarImages CarModels={carData?.oemGalleryWidgetDto?.items} />
            <button className=" text-blue text-[15px] font-[700] flex gap-[8px] mb-[10px] mt-[10px] items-center">
              View All {carData?.brandName} Images <Rightarrow />
            </button>
          </div>
          {/* <div className=' w-full relative flex flex-col gap-[8px] pt-[18px]  px-[31.22px] rounded-xl border border-[rgba(36,39,44,0.1)] shadow-md shadow-[rgba(36,39,44,0.1)]'>
            <h3 className=' text-[23px] leading-[33.2px] font-[500]'>{carData?.brandName} News & Reviews</h3>
            <Menu menuItems={["Recent News", "Expert Reviews"]} />
            <BrandNewsCard CarNews={carData?.newsAndReviews?.items?.recentNews?.items} />
            <button className=' text-blue text-[15px] font-[700] flex gap-[8px] mb-[10px] mt-[10px] items-center'>
              View All {carData?.brandName} News <Rightarrow />
            </button>

          </div> */}
          <UserReviews reviews={carData?.userReviews} />
          <div className=" w-full relative flex flex-col gap-[8px] pt-[18px] pb-[26.5px]  px-[31.22px] rounded-xl border border-[rgba(36,39,44,0.1)] shadow-md shadow-[rgba(36,39,44,0.1)]">
            <h3 className=" text-[23px] leading-[33.2px] font-[500]">
              {carData?.brandName} Cars Faqs
            </h3>
            <Accordion qna={carData?.qna?.items[0].items} />
          </div>
          <div className=" w-full relative flex flex-col gap-[8px] pt-[18px] pb-[26.5px]  px-[31.22px] rounded-xl border border-[rgba(36,39,44,0.1)] shadow-md shadow-[rgba(36,39,44,0.1)]">
            <h3 className=" text-[23px] leading-[33.2px] font-[500]">
              {carData?.brandName} Cars Qna
            </h3>

            <Accordion faq={carData?.faqs?.items[0].items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
