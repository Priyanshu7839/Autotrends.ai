import bmw3 from "../../Asset/BuyUsedCar/bmw3.png"
import marutiAltoWhite from "../../Asset/BuyUsedCar/DiscountedCars/maruti-alto-white.png"
import marutiAltoBlack from "../../Asset/BuyUsedCar/DiscountedCars/maruti-alto.png"
import ford from "../../Asset/BuyUsedCar/DiscountedCars/ford-figo.png"
import marutiIgnis from "../../Asset/BuyUsedCar/DiscountedCars/maruti-ignis.png"


const CarBodyTypes=[
  {
    id: 1,
    bodyType: "Hatchback"
  },
  {
    id: 2,
    bodyType: "SUV"
  },
  {
    id: 3,
    bodyType: "Sedan"
  },
   {
    id: 4,
    bodyType: "MUV"
  },
   {
    id: 5,
    bodyType: "Minivan"
  },
  {
    id: 6,
    bodyType: "Pickup Truck"
  },
   {
    id: 7,
    bodyType: "Convertible"
  },
  {
    id: 8,
    bodyType: "Coupe"
  },
  {
     id: 9,
     bodyType: "Wagon"
  },
  {
    id: 10,
    bodyType: "Hybrid"
  }
]

const CarByBodyTypes = [
    {
      id: 1,
      title: "2023 Maruti Alto K10 VXI",
      distanceTravelled: "6,252 kms",
      fuelType: "Petrol",
      transmissionMode: "Manual",
      price: "4.10",
      location: "Begumbazar, Hyderabad",
      image:marutiAltoBlack,
      actualPrice:"5.32"
    },
    {
      id: 2,
      title: "2023 Maruti Alto K10 VXI",
      distanceTravelled: "6,792 kms",
      fuelType: "Petrol",
      transmissionMode: "Manual",
      price: "4.34",
      location: "Thathawade, Pune",
      image:marutiAltoWhite,
      actualPrice:"4.60"
    },
    {
      id: 3,
      title: "2012 Ford Figo Diesel EXI",
      distanceTravelled: "1,04,000 kms",
      fuelType: "Diesel",
      transmissionMode: "Manual",
      price: "1.30",
      location: "Bagher, Jhalawar",
      image:ford
    },
    {
      id: 4,
      title: "2024 Maruti Ignis Alpha",
      distanceTravelled: "2,486 kms",
      fuelType: "Petrol",
      transmissionMode: "Manual",
      price: "7.50",
      location: "Udayan Vihar, Kamrup",
      image:marutiIgnis,
    }
  ]

export { CarByBodyTypes,CarBodyTypes};