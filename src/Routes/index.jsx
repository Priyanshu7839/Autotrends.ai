import {
  Leads,
  FinancePartners,
  InsurancePartners,
  Customers,
  ContactUs,
  Settings,
  Strategytools,
  Datasync,
} from "../DashboardPages";
import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import {
  CarDetailPage,
  CarInsuranceQuotationPage,
  CarPriceQuotationPage,
  LandingPage,
  SignIn,
  Brands,
  NewCars,
  ElectricCar,
  PopularCars,
  UpcomingCarsPage,
  LatestCars,
  OffersandDiscounts,
  Popularbrands,
  Seltos,
  ReviewPage,
  SeltosVariant,
  EmiCalculator,
  SpareParts,
  FindChargingStation,
  DealershipNearMe,
  BuyUsedCar,
  NewCarLoan,
  CarInsurance,
  SellMyCar,
  UsedCarValuation,
  LoanAgainstCar,
  UsedCarLoan,
  UsedCar,
  DealFromErpPage,
} from "../Pages";
import { lazy, Suspense, useState } from "react";
import KeepAlive from "react-activation";
import { createBrowserRouter } from "react-router";
import Landing from '../DashboardPages/LandingPage/pages/Landing'
import Login from '../DashboardPages/LandingPage/pages/Login'
import { ReportsLanding } from "../Pages/Reports/ReportsLanding";
import { ReportBuilder } from "../Pages/Reports/ReportBuilder";
import { SavedReports } from "../Pages/Reports/SavedReports";

const MarketAnalytics = lazy(() =>
  import(".././DashboardPages/MarketAnalytics/MarketAnalytics")
);
const Dashboard = lazy(() => import(".././DashboardPages/Dashboard/Dashboard"));
const Inventory = lazy(() => import(".././DashboardPages/Inventory/Inventory"));
const BBNDInventory = lazy(() =>
  import(".././DashboardPages/Inventory/BBNDInventory")
)
const MasterInventory = lazy(() =>
  import(".././DashboardPages/Inventory/MasterInventory")
) 

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/brand/:id",
        element: <Brands />,
      },
      {
        path: "/AIPricing",
        element: <CarPriceQuotationPage />,
      },
      {
        path: "/CarInsurance",
        element: <CarInsuranceQuotationPage />,
      },
      {
        path: "/CarDetails",
        element: <CarDetailPage />,
      },
      {
        path: "/UsedCars",
        element: <UsedCar />,
      },
      { path: "/newcars", element: <NewCars /> },
      { path: "/electriccars", element: <ElectricCar /> },
      { path: "/popularcars", element: <PopularCars /> },
      { path: "/upcomingcars", element: <UpcomingCarsPage /> },
      { path: "/latestcars", element: <LatestCars /> },
      { path: "/offersanddiscounts", element: <OffersandDiscounts /> },
      { path: "/popularbrands", element: <Popularbrands /> },
      { path: "/seltos", element: <Seltos /> },
      { path: "/review", element: <ReviewPage /> },
      { path: "/seltos-variant", element: <SeltosVariant /> },
      { path: "/emi-calculator", element: <EmiCalculator /> },
      { path: "/spare-parts", element: <SpareParts /> },
      { path: "/find-charging-station", element: <FindChargingStation /> },
      { path: "/dealership-near-me", element: <DealershipNearMe /> },
      { path: "/buy-used-car", element: <BuyUsedCar /> },
      { path: "/new-car-loan", element: <NewCarLoan /> },
      { path: "/car-insurance", element: <CarInsurance /> },
      { path: "/sell-my-car", element: <SellMyCar /> },
      { path: "/used-car-valuation", element: <UsedCarValuation /> },
      { path: "/loan-against-car", element: <LoanAgainstCar /> },
      { path: "/used-car-loan", element: <UsedCarLoan /> },
      { path: "/erp-deal/:id", element: <DealFromErpPage /> },
      {
        path:'/reports',element:<ReportsLanding/>
      },
      {
        path:'/reports/builder',element:<ReportBuilder/>
      },
      {
        path:'/reports/saved',element:<SavedReports/>
      }
    ],
  },

  {
    path: "/SignIn",
    element: <SignIn />,
  },
      {
        path:'/Dealers',
        element:<Landing/>
      },
      {
        path:'/Dealers/login',
        element:<Login/>
      },
  {
    path: "/Dashboard",

    element: <DashboardLayout />,
    children: [
      {
        path: "/Dashboard/",
        element: (
        
              <Dashboard />
        
        ),
      },
      {
        path: "/Dashboard/Inventory",
        element: (
         
              <Inventory />
         
        ),
      },
      {
        path: "/Dashboard/Leads",
        element: <Leads />,
      },
      {
        path: "/Dashboard/marketAnalytics",
        element: (
         
              <MarketAnalytics />
          
        ),
      },
      {
        path: "/Dashboard/financepartners",
        element: <FinancePartners />,
      },
      {
        path: "/Dashboard/insurancepartners",
        element: <InsurancePartners />,
      },
      {
        path: "/Dashboard/bbndinventory",

        element: (
        
              <BBNDInventory />
         
        ),
      },
      {
        path: "/Dashboard/masterinventory",
        element: (
         
              <MasterInventory />
         
        ),
      },
      {
        path: "/Dashboard/Customer",
        element: <Customers />,
      },
      {
        path: "/Dashboard/ContactUs",
        element: <ContactUs />,
      },
      {
        path: "/Dashboard/Settings",
        element: <Settings />,
      },
      {
        path: "/Dashboard/Strategytools",
        element: <Strategytools />,
      },
      {
        path: "/Dashboard/datasync",
        element: <Datasync />,
      },
     
    ],
  },
]);

export default Routers;
