import React,{useState,useEffect} from 'react'
import {Features, CarComparison, CarDeals, Carousel, CheckAIPrice, CompareInsurance, Header, ContactUs, BigDeals, TrendingChart} from '../../components'
import { ExtendedHomepageApi, HomePageApiCall } from '../../Context/ApiCall';
import PopularHomepageBrands from '../../Components/PopularHomepageBrands';

const LandingPage = () => {

 
    useEffect(() => {
      document.title = "Autotrends.ai";
    }, []);

  const [PopularElectricCars,SetPopularElectricCars] = useState([]);
  const [UpcomingCars,SetUpcomingCars] = useState([]);


  //For the Most Serches Cars and Latest Cars
  const [CarDealsHeadings, SetCarDealsHeadings] = useState([]);
  const [CarDealHeading, SetCarDealHeading] = useState("SUV");
  const [CarDealCars, SetCarDealCars] = useState([]);

  //For Latest Cars
  const [LatestCars,SetLatestCars] = useState([]);

  


  useEffect(()=>{
  HomePageApiCall({SetPopularElectricCars})
  ExtendedHomepageApi({SetUpcomingCars,SetLatestCars})
  },[])


  useEffect(() => {
    HomePageApiCall({ SetCarDealCars, CarDealHeading, SetCarDealsHeadings });

    
  }, [CarDealHeading]);


  


  return (
    <div className='w-screen flex flex-col gap-[20px]'>
      <Header/>
      <Features/>
      <BigDeals />
      <Carousel PopularElectricCars={PopularElectricCars}/>
      <Carousel UpcomingCars={UpcomingCars}/>
      <CheckAIPrice/>
      <CarDeals  CarDealsHeadings={CarDealsHeadings} CarDealHeading={CarDealHeading} SetCarDealHeading={SetCarDealHeading} CarDealCars={CarDealCars} />
      <CarDeals LatestCars={LatestCars}/>
      <CompareInsurance/>
      <CarComparison/>
      <PopularHomepageBrands/>
      <TrendingChart/>
      <ContactUs/>

    </div>
  )
}

export default LandingPage