
import { grill,headlight,frontview,rearview,rearview2,sideview,kia1,kia2,kia3,kia4,kia5,kia6,kia7,kia8,upcoming } from "../assets/Images";



export const BrandCars = [
    {
      image: kia1,
      name: 'Kia Seltos',
      MinPrice: '9.95',
      MaxPrice: '17.65',
      features: ["Diesel / Petrol", "17 to 20.7 kmpl", "Manual/Automatic", "1482 cc - 1497 cc", "113.42 - 157.81 bhp", "3 Star Safety"],
      facelift: true,
      electric: false,
      moreimages: [grill, headlight],
      rating: 4.5,
      reviews: 1200
    },
    {
      image: kia2,
      name: 'Kia Sonet',
      MinPrice: '6.79',
      MaxPrice: '13.25',
      features: ["Diesel / Petrol", "17 to 20.7 kmpl", "Manual/Automatic", "1482 cc - 1497 cc", "113.42 - 157.81 bhp", "3 Star Safety"],
      facelift: true,
      electric: false,
      moreimages: [frontview, rearview],
      rating: 4.2,
      reviews: 950
    },
    {
      image: kia3,
      name: 'Kia Carnival',
      MinPrice: '24.95',
      MaxPrice: '33.95',
      features: ["Diesel / Petrol", "17 to 20.7 kmpl", "Manual/Automatic", "1482 cc - 1497 cc", "113.42 - 157.81 bhp", "3 Star Safety"],
      facelift: false,
      electric: false,
      moreimages: [sideview, rearview2],
      rating: 4.7,
      reviews: 800
    },
    {
      image: kia4,
      name: 'Kia Carens',
      MinPrice: '8.99',
      MaxPrice: '15.99',
      features: ["Diesel / Petrol", "17 to 20.7 kmpl", "Manual/Automatic", "1482 cc - 1497 cc", "113.42 - 157.81 bhp", "3 Star Safety"],
      facelift: false,
      electric: false,
      rating: 4.3,
      reviews: 1100
    },
    {
      image: kia5,
      name: 'Kia EV6',
      MinPrice: '20.00',
      MaxPrice: '30.00',
      features: ["Diesel / Petrol", "17 to 20.7 kmpl", "Manual/Automatic", "1482 cc - 1497 cc", "113.42 - 157.81 bhp", "3 Star Safety"],
      facelift: false,
      electric: true,
      rating: 4.8,
      reviews: 500
    },
    {
      image: kia6,
      name: 'Kia EV5',
      MinPrice: '20.00',
      MaxPrice: '30.00',
      features: ["Diesel / Petrol", "17 to 20.7 kmpl", "Manual/Automatic", "1482 cc - 1497 cc", "113.42 - 157.81 bhp", "3 Star Safety"],
      facelift: false,
      electric: 'Yes',
      rating: 4.6,
      reviews: 600
    },
    {
      image: kia7,
      name: 'Kia Seltos EV',
      MinPrice: '20.00',
      MaxPrice: '30.00',
      features: ["Diesel / Petrol", "17 to 20.7 kmpl", "Manual/Automatic", "1482 cc - 1497 cc", "113.42 - 157.81 bhp", "3 Star Safety"],
      facelift: false,
      electric: 'Yes',
      rating: 4.4,
      reviews: 700
    },
    {
      image: kia8,
      name: 'Kia Syros',
      MinPrice: '20.00',
      MaxPrice: '30.00',
      features: ["Diesel / Petrol", "17 to 20.7 kmpl", "Manual/Automatic", "1482 cc - 1497 cc", "113.42 - 157.81 bhp", "3 Star Safety"],
      facelift: false,
      electric: true,
      rating: 4.5,
      reviews: 650
    }
  ];
  export const faqs = [
    "Which is the lowest priced model in Kia?",
    "Which is the highest priced model in Kia?",
    "What are the upcoming models from Kia?",
    "Which are the latest car launched by Kia?",
    "Which is the most mileage efficient car model in Kia?",
    "What are the Popular Kia cars In India?",
    "Is there any Kia electric car?",
    "Which is the cheapest electric car by Kia?",
    "Which Kia car is best in EV?",
    "Which is the upcoming cheapest electric car from Kia?",
  ];

export const highlights = [["Popular Models", "Seltos, Sonet, Carens, Carnival, EV6"], ["Most Expensive", "Kia EV9(Rs. 1.30 Cr)"], ["Affordable Model", "Kia Sonet(Rs. 8 Lakh)"],["Upcoming Models","Kia EV5, Kia Carens EV, Kia Carens 2025, Kia EV3, Kia EV6 2025"],["Fuel Type","Petrol, Diesel, Electric"]];
export const CarNews=[{thumbnail:kia3,title:"Kia Syros To Be Crash Tested By Bharat NCAP Soon, Can It Get A Full 5 Star Rating?",description:"The Kia Syros is expected to be launched in India by the end of 2022 and will be positioned below the Kia Seltos in the brand's lineup.",source:"CarDekho",date:"April 15, 2025"},{thumbnail:kia4,title:"Kia Carens 2025 To Get A New 1.5-litre Turbo Petrol Engine",description:"The new engine will be more powerful than the current 1.4-litre turbo-petrol unit and will be offered with a 7-speed DCT.",source:"CarDekho",date:"April 15, 2025"},{thumbnail:kia5,title:"Kia EV6 Launched In India At Rs 20.00 Lakh",description:"The Kia EV6 is available in three variants: Premium, Luxury, and Signature, with a claimed range of up to 528 km.",source:"CarDekho",date:"April 15, 2025"},{thumbnail:kia6,title:"Kia EV5 To Be Launched In India By The End Of 2025",description:"The Kia EV5 will be the brand's first electric SUV in India and is expected to be priced between Rs 20.00 lakh and Rs 30.00 lakh.",source:"CarDekho",date:"April 15, 2025"}];

export const carvideos =[{title:'Kia Seltos',url:'https://youtu.be/ai8UCP2hoqw',time:1,views:12242},{title:"Kia Sonet",url:'https://youtu.be/oxtk-SB9row',time:6,views:12242},{title:"Kia Carnival",url:'https://youtu.be/ai8UCP2hoqw',time:2,views:12242},{title:"Kia Carens",url:'https://youtu.be/oxtk-SB9row',time:3,views:12242}];
export const upcomingModels = [{ image: upcoming, expectedDate: 'April 15, 2025', name: 'Kia Carens EV', MinPrice: '20.00  ', MaxPrice: '30.00  ', features: ["Diesel / Petrol", "17 to 20.7 kmpl", "Manual/Automatic", "1482 cc - 1497 cc", "113.42 - 157.81 bhp", "3 Star Safety"], facelift: false, electric: 'Yes' }, { image: upcoming, expectedDate: 'April 15, 2025', name: 'Kia Carens 2025', MinPrice: '20', MaxPrice: '25', features: ["Diesel / Petrol", "17 to 20.7 kmpl", "Manual/Automatic", "1482 cc - 1497 cc", "113.42 - 157.81 bhp", "3 Star Safety"], facelift: false, electric: false }, { image: upcoming, expectedDate: 'April 15, 2025', name: 'Kia EV3', MinPrice: '20', MaxPrice: '25', features: ["Diesel / Petrol", "17 to 20.7 kmpl", "Manual/Automatic", "1482 cc - 1497 cc", "113.42 - 157.81 bhp", "3 Star Safety"], facelift: false, electric: true }, { image: upcoming, expectedDate: 'April 15, 2025', name: 'Kia EV6 2025', MinPrice: '20', MaxPrice: '25', features: ["Diesel / Petrol", "17 to 20.7 kmpl", "Manual/Automatic", "1482 cc - 1497 cc", "113.42 - 157.81 bhp", "3 Star Safety"], facelift: false, electric: true }];
export const kiaSeltosVariants = [
    {
      name: 'HTE G',
      petrol: true,
      diesel: false,
      basemodel: true,
      price: 995000,
      roadtax: 100000,
      insurance: 50000,
      others: 20000
    },
    {
      name: 'HTK G',
      petrol: true,
      diesel: false,
      basemodel: false,
      price: 1095000,
      roadtax: 110000,
      insurance: 55000,
      others: 22000
    },
    {
      name: 'HTK Plus G',
      petrol: true,
      diesel: false,
      basemodel: false,
      price: 1175000,
      roadtax: 115000,
      insurance: 57500,
      others: 23000
    },
    {
      name: 'HTX G',
      petrol: true,
      diesel: false,
      basemodel: false,
      price: 1365000,
      roadtax: 125000,
      insurance: 60000,
      others: 25000
    },
    {
      name: 'HTX Plus G',
      petrol: true,
      diesel: false,
      basemodel: false,
      price: 1475000,
      roadtax: 130000,
      insurance: 65000,
      others: 27000
    },
    {
      name: 'GTX Plus G',
      petrol: true,
      diesel: false,
      basemodel: false,
      price: 1765000,
      roadtax: 150000,
      insurance: 70000,
      others: 30000
    },
    {
      name: 'HTE D',
      petrol: false,
      diesel: true,
      basemodel: true,
      price: 1045000,
      roadtax: 105000,
      insurance: 52500,
      others: 21000
    },
    {
      name: 'HTK D',
      petrol: false,
      diesel: true,
      basemodel: false,
      price: 1155000,
      roadtax: 115000,
      insurance: 57500,
      others: 23000
    },
    {
      name: 'HTK Plus D',
      petrol: false,
      diesel: true,
      basemodel: false,
      price: 1275000,
      roadtax: 120000,
      insurance: 60000,
      others: 24000
    },
    {
      name: 'HTX D',
      petrol: false,
      diesel: true,
      basemodel: false,
      price: 1465000,
      roadtax: 130000,
      insurance: 65000,
      others: 26000
    },
    {
      name: 'HTX Plus D',
      petrol: false,
      diesel: true,
      basemodel: false,
      price: 1575000,
      roadtax: 135000,
      insurance: 67500,
      others: 28000
    },
    {
      name: 'GTX Plus D',
      petrol: false,
      diesel: true,
      basemodel: false,
      price: 1865000,
      roadtax: 155000,
      insurance: 75000,
      others: 32000
    }
  ];

 export const BrandModelArticles = [
    {
      title: "Kia Seltos 2023 Facelift Launched",
      description: "The 2023 Kia Seltos facelift has been launched with updated features and design enhancements. The new model includes advanced safety features and improved fuel efficiency.",
      source: "John Doe",
      date: "January 15, 2023",
      thumbnail:kia5
    },
    {
      title: "Kia Seltos Tops Sales Charts in 2022",
      description: "The Kia Seltos has emerged as the top-selling SUV in 2022, thanks to its robust performance, stylish design, and advanced features.",
      source: "Jane Smith",
      date: "December 31, 2022",
      thumbnail:kia7
    },
    {
      title: "Kia Seltos Receives 5-Star Safety Rating",
      description: "The Kia Seltos has received a 5-star safety rating from the Global NCAP, making it one of the safest SUVs in its segment.",
      source: "Michael Johnson",
      date: "November 20, 2022",
      thumbnail:kia8
    },
    {
      title: "Kia Seltos: A Comprehensive Review",
      description: "In this comprehensive review, we take a closer look at the Kia Seltos, exploring its features, performance, and overall value for money.",
      source: "Emily Davis",
      date: "October 10, 2022"
    },
    {
      title: "Kia Seltos vs Hyundai Creta: Which One to Buy?",
      description: "We compare the Kia Seltos with its closest rival, the Hyundai Creta, to help you decide which SUV is the better choice for you.",
      source: "David Wilson",
      date: "September 5, 2022"
    },
    {
      title: "Kia Seltos: Best Features and Specifications",
      description: "Discover the best features and specifications of the Kia Seltos, including its powerful engine options, advanced infotainment system, and premium interior.",
      source: "Sarah Brown",
      date: "August 25, 2022"
    },
    {
      title: "Kia Seltos: Maintenance and Ownership Costs",
      description: "Learn about the maintenance and ownership costs of the Kia Seltos, including service intervals, spare parts prices, and overall cost of ownership.",
      source: "James Taylor",
      date: "July 15, 2022"
    },
    {
      title: "Kia Seltos: Pros and Cons",
      description: "We list the pros and cons of the Kia Seltos to help you make an informed decision before purchasing this popular SUV.",
      source: "Patricia Anderson",
      date: "June 10, 2022"
    },
    {
      title: "Kia Seltos: User Reviews and Ratings",
      description: "Read user reviews and ratings of the Kia Seltos to get an idea of what real owners think about this SUV.",
      source: "Robert Thomas",
      date: "May 20, 2022"
    },
    {
      title: "Kia Seltos: Upcoming Variants and Features",
      description: "Get the latest updates on the upcoming variants and features of the Kia Seltos, including new engine options and advanced technology.",
      source: "Linda Martinez",
      date: "April 15, 2022"
    }
  ];

export const dealers = [
    {
      name: "ABC Motors",
      address: "123 Main Street, Sector 21, New Delhi, Delhi 110001"
    },
    {
      name: "XYZ Auto Sales",
      address: "456 Park Avenue, Andheri West, Mumbai, Maharashtra 400053"
    },
    {
      name: "PQR Car Dealership",
      address: "789 MG Road, Indiranagar, Bangalore, Karnataka 560038"
    },
    {
      name: "LMN Auto Hub",
      address: "101 High Street, T. Nagar, Chennai, Tamil Nadu 600017"
    },
    {
      name: "DEF Motors",
      address: "202 Central Avenue, Banjara Hills, Hyderabad, Telangana 500034"
    },
    {
      name: "GHI Car World",
      address: "303 Lake Road, Salt Lake City, Kolkata, West Bengal 700091"
    },
    {
      name: "JKL Auto Plaza",
      address: "404 Green Park, Viman Nagar, Pune, Maharashtra 411014"
    },
    {
      name: "MNO Car Dealers",
      address: "505 Blue Street, Sector 62, Noida, Uttar Pradesh 201301"
    },
    {
      name: "QRS Auto Sales",
      address: "606 Red Road, Alkapuri, Vadodara, Gujarat 390007"
    },
    {
      name: "TUV Motors",
      address: "707 Yellow Lane, Civil Lines, Jaipur, Rajasthan 302006"
    }
  ];
  
 


  
  
  
