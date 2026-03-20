import marutiAltoWhite from "../../Asset/BuyUsedCar/DiscountedCars/maruti-alto-white.png"
import marutiAltoBlack from "../../Asset/BuyUsedCar/DiscountedCars/maruti-alto.png"
import skoda from "../../Asset/BuyUsedCar/DiscountedCars/skoda.png"
import renault from "../../Asset/BuyUsedCar/DiscountedCars/Renault.png"

const DiscountedCars = [
    {
        id: 1,
        title: "2023 Maruti Alto K10 VXI",
        distanceTravelled: "6,252 kms",
        fuelType: "Petrol",
        transmissionMode: "Manual",
        price: "4.10",
        location: "Begumbazar, Hyderabad",
        actualPrice:"5.32",
        image:marutiAltoBlack,
    },
    {
        id: 2,
        title: "2023 Maruti Alto K10 VXI",
        distanceTravelled: "6,792 kms",
        fuelType: "Petrol",
        transmissionMode: "Manual",
        price: "4.34",
        location: "Thathawade, Pune",
         actualPrice:"4.60",
         image:marutiAltoWhite,
    },
    {
        id: 3,
        title: "2021 Renault Triber RXL BS...",
        distanceTravelled: "20,000 kms",
        fuelType: "Petrol",
        transmissionMode: "Manual",
        price: "6.10",
         location: "Sector 16, Noida",
        image:renault,
          
    },
    {
        id: 4,
        title: "2019 Skoda Rapid 1.6 MPI ...",
        distanceTravelled: "15,786 kms",
        fuelType: "Petrol",
        transmissionMode: "Manual",
        price: "6.25",
        location: "Borivali West, Mumbai",
        image:skoda,
         actualPrice:"7.45"
    }
]

export default DiscountedCars