import ford from "../../Asset/BuyUsedCar/CarByBudget/ford-figo-diesel.png"
import celerio from "../../Asset/BuyUsedCar/CarByBudget/maruti-celerio.png"
import ertiga from "../../Asset/BuyUsedCar/CarByBudget/maruti-ertiga.png"
import wagon from "../../Asset/BuyUsedCar/CarByBudget/maruti-vagon-r.png"

const CarBudget=[
  {
    id: 1,
    budget: "0-5 Lakh"
  },
  {
    id: 1,
    budget: "5-10 Lakh"
  },
  {
    id: 1,
    budget: "10-15 Lakh"
  },
  {
    id: 1,
    budget: "15-20 Lakh"
  },
]
const CarByBudget = [
    {
      id: 1,
      title: "2019 Maruti Ertiga VXI",
      distanceTravelled: "1,40,000 kms",
      fuelType: "Petrol",
      transmissionMode: "Manual",
      price: "80,000",
      location: "Sisupalgarh, Bhubaneswar",
      image:ertiga
    },
    {
      id: 2,
      title: "2012 Ford Figo Diesel EXI",
      distanceTravelled: "1,04,000 kms",
      fuelType: "Diesel",
      transmissionMode: "Manual",
      price: "1.30",
      location: "Bagher, Jhalawar",
      image:ford
    },
    {
      id: 3,
      title: "2010 Maruti Wagon R LXI B...",
      distanceTravelled: "95,369 kms",
      fuelType: "Petrol",
      transmissionMode: "Manual",
      price: "1.30",
      location: "Town, Sirsa",
      image:wagon
    },
    {
      id: 4,
      title: "2015 Maruti Celerio ZXI",
      distanceTravelled: "99,000 kms",
      fuelType: "Petrol",
      transmissionMode: "Manual",
      price: "4",
      location: "Bhatumra, Washim",
      image:celerio
    }
  ]

export  {CarByBudget,CarBudget}