import React from 'react'
import bmw3 from "../../Asset/BuyUsedCar/bmw3.png"
import kiaSonet from "../../Asset/BuyUsedCar/kia-sonet.png"
import kiaSonetPetrol from "../../Asset/BuyUsedCar/kia-sonet-petrol.png"
import nissan from "../../Asset/BuyUsedCar/nissan-magnite.png"
const RecommendedCars = [
    {
      id: 1,
      title: "2023 BMW 3 Series Gran Li...",
      distanceTravelled: "1,623 kms",
      fuelType: "Diesel",
      transmissionMode: "Automatic",
      price: "65",
      location: "Gandhipuram, Coimbatore",
      image:bmw3
    },
    {
      id: 2,
      title: "2024 Kia Sonet HTX Diesel...",
      distanceTravelled: "5,900 kms",
      fuelType: "Diesel",
      transmissionMode: "Automatic",
      price: "14.75",
       location:"Goregaon (w), Mumbai",
       image:kiaSonet
    },
    {
      id: 3,
      title: "2024 Nissan Magnite XE B...",
      distanceTravelled: "7,000 kms",
      fuelType: "Petrol",
      transmissionMode: "Manual",
       price: "6.30",
       location: "Badarpur Syed, Faridabad",
       image:nissan
    },
    {
      id: 4,
      title: "2020 Kia Sonet HTX Turbo...",
      distanceTravelled: "36,523 kms",
      fuelType: "Petrol",
       transmissionMode: "Manual",
       price: "6.50",
       location:"Council House Street, Kolkata",
       image:kiaSonetPetrol
    }
  ]

export default RecommendedCars