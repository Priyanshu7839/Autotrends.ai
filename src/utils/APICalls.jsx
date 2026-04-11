import axios from "axios";

const api = axios.create({
  baseURL:
    "https://autotrends-b6edfffvgmfafncy.centralindia-01.azurewebsites.net/api",
});
const api2 = axios.create({
  // baseURL: "https://autotrends-backend.onrender.com/",
  // baseURL:"http://localhost:8002"
  baseURL:"https://autotrends-backend.wonderfulisland-5beba373.centralindia.azurecontainerapps.io"
});

const api3 = axios.create({
  // baseURL:"http://localhost:8000/api/v1/"
  baseURL:"https://vahan-scraper-uttarpradesh.wonderfulisland-5beba373.centralindia.azurecontainerapps.io/api/v1",
});

export const CarNames = async () => {
  try {
    const response = await api.post("/brand/", { brandname: "Kia" });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const CarDetails = async (brandslug, modelslug, modelurl) => {
  try {
    const response = await api.post("/details/", {
      brandslug: brandslug,
      modelslug: modelslug,
      modelurl: modelurl,
    });
    const data = response.data.DATA;
    return data;
  } catch (error) {
    console.log("Car Details api Error", error);
    return null;
  }
};

export const UpdateStock = async (
  dealer_id,
  car_id,
  variant_id,
  year,
  color,
  color_code,
  stock,
  accessories,
  tcs,
  insurance,
  agent,
  fasttag,
  warranty,
  miscellaneous,
  rto,
  delivery,
  qty,
  bid
) => {
  try {
    const response = await api2.post("/submit/updateInventory", {
      dealer_id: dealer_id,
      car_id: car_id,
      variant_id: variant_id,
      year: year,
      color: color,
      color_code: color_code,
      stock: stock,
      accessories: accessories,
      tcs: tcs,
      insurance: insurance,
      agent: agent,
      fasttag: fasttag,
      warranty: warranty,
      rto: rto,
      miscellaneous: miscellaneous,
      delivery: delivery,
      qty: qty,
      bid: bid,
    });

    return response;
  } catch (error) {
    console.log("Inventory update Error");
    return error.response;
  }
};

export const InventoryList = async (dealer_id, dealerCodes) => {
  try {
    const response = await api2.post("/Dashboard/InventoryList", {
      dealer_id: dealer_id,
      dealerCodes: dealerCodes,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const InventoryListOrderDealer = async (dealer_id, dealer_code) => {
  try {
    const response = await api2.post("/Dashboard/InventoryListOrderDealer", {
      dealer_id: dealer_id,
      dealer_code: dealer_code,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const QuotationsList = async () => {
  try {
    const response = await api2.get("/deals/Quotations");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const LoginDealer = async (dealerDetails) => {
  try {
    // const response = await api.post('/user/login/',{email:SignUpData.email,password:SignUpData.password})
    const response = await api2.post("/user/dealer/signup", {
      email: dealerDetails.email,
      password: dealerDetails.password,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const UploadXL = async (formData) => {
  try {
    const response = await api2.post("/exceluploads/uploadInventory", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const AverageSalesUpload = async (averagesales, dealer_id) => {
  try {
    const response = await api2.post("/submit/uploadaveragesales", {
      averageSales: averagesales,
      dealer_id: dealer_id,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const AverageSalesFetch = async (dealer_id) => {
  try {
    const response = await api2.post("/deals/GetAverageSales", {
      dealer_id: dealer_id,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const InventoryUnitsFetch = async (dealership_id, dealerCodes) => {
  try {
    const response = await api2.post("/InventoryData/GettotalCars/:dealer_id/:order_dealer/:stock_status/:Model/:Variants", {
      dealer_id: dealership_id,
      dealerCodes: dealerCodes,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const FastStarsFetch = async (dealer_id, dealerCodes) => {
  try {
    const response = await api2.get(`/InventoryData/fastStars/${dealer_id}/ALL`);
    return response;
  } catch (error) {
    return error.response;
  }
};
export const SlowSnailsFetch = async (dealer_id, dealerCodes) => {
  try {
    const response = await api2.get(`/InventoryData/slowSnails/${dealer_id}/ALL`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const GetDealerCodes = async (dealership_id) => {
  try {
    const response = await api2.post("/dashboard/getdealercodes", {
      dealership_id: dealership_id,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const GetOwnedDealerships = async (userID) => {
  try {
    const response = await api2.post("/user/dealer/getowneddealerships", {
      userID: userID,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const GetDealershipDetails = async (dealership_id) => {
  try {
    const response = await api2.post("/user/dealer/getdealershipdetails", {
      dealership_id: dealership_id,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const GetBBNDExcelCompared = async (formData) => {
  try {
    const response = await api2.post("/submit/uploadbbndxlcompare", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const UploadBBndExcel = async (formData) => {
  try {
    const response = await api2.post("/exceluploads/uploadBBNDInventory", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const BBNDInventoryList = async (dealer_id, dealerCodes) => {
  try {
    const response = await api2.post("/Dashboard/BBNDInventoryList", {
      dealer_id: dealer_id,
      dealerCodes: dealerCodes,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const BBNDInventoryListOrderDealer = async (dealer_id, dealer_code) => {
  try {
    const response = await api2.post(
      "/Dashboard/BBNDInventoryListOrderDealer",
      { dealer_id: dealer_id, dealer_code: dealer_code }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const GetBBNDStockUnits = async (dealer_id, dealerCodes) => {
  try {
    const response = await api2.post("/Dashboard/getbbndstockunits", {
      dealer_id: dealer_id,
      dealerCodes: dealerCodes,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const FetchFestiveSales = async (
  fromDate,
  toDate,
  dealership_id,
  dealer_code,
  Model,
  Variant,
  Insurance,
  Finance
) => {
  try {
    const response = await api2.post("/Dashboard/fetchfestivesales", {
      fromDate: fromDate,
      toDate: toDate,
      dealership_id: dealership_id,
      dealer_code: dealer_code,
      Model: Model,
      Variant: Variant,
      Insurance: Insurance,
      Finance: Finance,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const FetchCustomerSalesHeader = async (dealership_id) => {
  try {
    const response = await api2.post("/Dashboard/fetchsalesheader", {
      dealership_id: dealership_id,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const FetchCustomerSales = async (
  dealership_id,
  Model,
  Variant,
  Year,
  Month
) => {
  try {
    const response = await api2.post("/Dashboard/fetchcustomersales", {
      dealership_id: dealership_id,
      Model: Model,
      Variant: Variant,
      Year: Year,
      Month: Month,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const SendOTP = async (dealership_id, email, id) => {
  try {
    const response = await api2.post("/user/dealer/sendotp", {
      dealership_id: dealership_id,
      email: email,
      id: id,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const VerifyOTP = async (dealership_id, otp) => {
  try {
    const response = await api2.post("/user/dealer/verifyotp", {
      dealership_id: dealership_id,
      otp: otp,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const MasterInventoryList = async (dealer_id, dealerCodes) => {
  try {
    const response = await api2.post("/Dashboard/MasterInventoryList", {
      dealer_id: dealer_id,
      dealerCodes: dealerCodes,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
export const MasterInventoryListOrderDealer = async (
  dealer_id,
  dealer_code
) => {
  try {
    const response = await api2.post(
      "/Dashboard/MasterInventoryListOrderDealer",
      { dealer_id: dealer_id, dealer_code: dealer_code }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};








 




/* --------------------------New APIS---------------------------------------------------------------*/

export const InventoryDataFetch = async(dealer_id,order_dealer,stockStatusFilter,modelFilter,variantFilter) => {



try {
  const CapitalStuck  = api2.get(`/InventoryData/CapitalStuck/${dealer_id}/${order_dealer}/${stockStatusFilter}/${modelFilter}/${variantFilter}`)
  const TotalCars  = api2.get(`/InventoryData/GettotalCars/${dealer_id}/${order_dealer}/${stockStatusFilter}/${modelFilter}/${variantFilter}`)
  const UniqueModels  = api2.get(`/InventoryData/GetUniqueModels/${dealer_id}/${order_dealer}/${stockStatusFilter}`)
  const UniqueVariants  = api2.get(`/InventoryData/GetUniqueVariants/${dealer_id}/${order_dealer}/${stockStatusFilter}/${modelFilter}`)
  const AgeBuckets  = api2.get(`/InventoryData/GetAgeBuckets/${dealer_id}/${order_dealer}/${stockStatusFilter}/${modelFilter}/${variantFilter}`)
  const LastUpdateDate  = api2.get(`/InventoryData/GetLastUpdateDate/${dealer_id}/`)
  const Ages  = api2.get(`/InventoryData/GetAges/${dealer_id}/${order_dealer}/${stockStatusFilter}/${modelFilter}/${variantFilter}`)
  const StockStatus = api2.get(`/InventoryData/GetStockStatusHeader/${dealer_id}/${order_dealer}/${modelFilter}/${variantFilter}`)


  const results = await Promise.allSettled([
      CapitalStuck,
      TotalCars,
      UniqueModels,
      UniqueVariants,
      AgeBuckets,
      LastUpdateDate,
      Ages,
      StockStatus
    ]);
    console.log(results?.[3])

    return {
      capitalStuck: results[0]?.value?.data?.capital_stuck,
      totalCars: results[1]?.value?.data?.total_stock,
      uniqueModels: results[2]?.value?.data?.uniqueModels,
      uniqueVariants: results[3]?.value?.data?.uniqueVariants,
      ageBuckets: results[4]?.value?.data?.ageBuckets,
      lastUpdateDate: results[5]?.value?.data?.date,
      ages:results[6]?.value?.data?.ages,
      stockStatus:results[7]?.value?.data?.stock_status
    };

} catch (error) {
  return error.response
}

}

export const GetAllStock = async(dealer_id,order_dealer,stockStatusFilter,modelFilter,variantFilter) => {
  try {
    const response = await api2.get(`/InventoryData/GetAllStock/${dealer_id}/${order_dealer}/${stockStatusFilter}/${modelFilter}/${variantFilter}`)
    return response
  } catch (error) {
    return error.response
  }
}
export const BBNDInventoryDataFetch = async(dealer_id,order_dealer,stockStatusFilter,modelFilter,variantFilter) => {
  
try {
  const TotalCars  = api2.get(`/BBNDInventoryData/GettotalCars/${dealer_id}/${order_dealer}/${stockStatusFilter}/${modelFilter}/${variantFilter}`)
  const UniqueModels  = api2.get(`/BBNDInventoryData/GetUniqueModels/${dealer_id}/${order_dealer}/${stockStatusFilter}`)
  const UniqueVariants  = api2.get(`/BBNDInventoryData/GetUniqueVariants/${dealer_id}/${order_dealer}/${stockStatusFilter}/${modelFilter}`)
  const AgeBuckets  = api2.get(`/BBNDInventoryData/GetAgeBuckets/${dealer_id}/${order_dealer}/${stockStatusFilter}/${modelFilter}/${variantFilter}`)
  const LastUpdateDate  = api2.get(`/BBNDInventoryData/GetLastUpdateDate/${dealer_id}`)
  const Ages  = api2.get(`/BBNDInventoryData/GetAges/${dealer_id}/${order_dealer}/${stockStatusFilter}/${modelFilter}/${variantFilter}`)
  const StockStatus = api2.get(`/BBNDInventoryData/GetStockStatusHeader/${dealer_id}/${order_dealer}/${modelFilter}/${variantFilter}`)



  const results = await Promise.allSettled([
      TotalCars,
      UniqueModels,
      UniqueVariants,
      AgeBuckets,
      LastUpdateDate,
      Ages,
      StockStatus
    ]);

    return {
      totalCars: results[0]?.value?.data?.total_stock,
      uniqueModels: results[1]?.value?.data?.uniqueModels,
      uniqueVariants: results[2]?.value?.data?.uniqueVariants,
      ageBuckets: results[3]?.value?.data?.ageBuckets,
      lastUpdateDate: results[4]?.value?.data?.date,
      ages:results[5]?.value?.data?.ages,
      stockStatus:results[6]?.value?.data?.stock_status

    };

} catch (error) {
  return error.response
}

}

export const GetAllBBNDStock = async(dealer_id,order_dealer,stockStatusFilter,modelFilter,variantFilter) => {
  try {
    const response = await api2.get(`/BBNDInventoryData/GetAllStock/${dealer_id}/${order_dealer}/${stockStatusFilter}/${modelFilter}/${variantFilter}`)
    return response
  } catch (error) {
    return error.response
  }
}

export const GetAllDeletedBBNDStock = async(dealer_id,order_dealer) => {
  try {
    const response = await api2.get(`/BBNDInventoryData/GetAllDeletedStock/${dealer_id}/${order_dealer}`)
    return response
  } catch (error) {
    return error.response
  }
}


export const GetLastUpdatedDates = async(dealer_id) => {
  try {
    const LastUpdateDate  = api2.get(`/InventoryData/GetLastUpdateDate/${dealer_id}`)
    const BBNDLastUpdateDate  = api2.get(`/BBNDInventoryData/GetLastUpdateDate/${dealer_id}`)
    const vnaLastUpdateDate = api2.get(`poolstock/GetLastUpdateDateVNA/${dealer_id}`)
    const poolstockLastUpdateDate = api2.get(`poolstock/GetLastUpdateDatepoolstock/${dealer_id}`)
  

    const response = await Promise.allSettled([LastUpdateDate,BBNDLastUpdateDate,vnaLastUpdateDate,poolstockLastUpdateDate])
    return {
      lastupdate:response?.[0]?.value?.data?.date,
      bbndlastupdate:response?.[1]?.value?.data?.date,
      vnalastupdate:response?.[2]?.value?.data?.date,
      poolstocklastupdate:response?.[3]?.value?.data?.date,
  

    }

  } catch (error) {
    return error.response
  }
}

export const MasterInventoryDataFetch = async(dealer_id,order_dealer,stockStatusFilter,modelFilter,variantFilter) => {
  
try {
  const TotalCars  = api2.get(`/MasterInventoryData/GettotalCars/${dealer_id}/${order_dealer}/${stockStatusFilter}/${modelFilter}/${variantFilter}`)
   const TotalCarsBBND  = api2.get(`/BBNDInventoryData/GettotalCars/${dealer_id}/${order_dealer}/${stockStatusFilter}/${modelFilter}/${variantFilter}`)
  const TotalCarsMain  = api2.get(`/InventoryData/GettotalCars/${dealer_id}/${order_dealer}/${stockStatusFilter}/${modelFilter}/${variantFilter}`)
  const UniqueModels  = api2.get(`/MasterInventoryData/GetUniqueModels/${dealer_id}/${order_dealer}/${stockStatusFilter}`)
  const UniqueVariants  = api2.get(`/MasterInventoryData/GetUniqueVariants/${dealer_id}/${order_dealer}/${stockStatusFilter}/${modelFilter}`)
  const AgeBuckets  = api2.get(`/MasterInventoryData/GetAgeBuckets/${dealer_id}/${order_dealer}/${stockStatusFilter}/${modelFilter}/${variantFilter}`)
  const Ages  = api2.get(`/MasterInventoryData/GetAges/${dealer_id}/${order_dealer}/${stockStatusFilter}/${modelFilter}/${variantFilter}`)
  const StockStatus  = api2.get(`/MasterInventoryData/GetStockStatusHeader/${dealer_id}/${order_dealer}/${modelFilter}/${variantFilter}`)
  const LastUpdateDateMain  = api2.get(`/InventoryData/GetLastUpdateDate/${dealer_id}`)
  const LastUpdateDateBBND  = api2.get(`/BBNDInventoryData/GetLastUpdateDate/${dealer_id}`)




  const results = await Promise.allSettled([
      TotalCars,
      TotalCarsBBND ,
      TotalCarsMain ,
      UniqueModels,
      UniqueVariants,
      AgeBuckets,
      Ages,
      StockStatus,
      LastUpdateDateMain,
      LastUpdateDateBBND

    ]);

    return {
      totalCars: results[0]?.value?.data?.total_stock,
      bbndUnits: results[1]?.value?.data?.total_stock,
      mainUnits: results[2]?.value?.data?.total_stock,
      uniqueModels: results[3]?.value?.data?.uniqueModels,
      uniqueVariants: results[4]?.value?.data?.uniqueVariants,
      ageBuckets: results[5]?.value?.data?.ageBuckets,
      ages:results[6]?.value?.data?.ages,
      stockStatus:results[7]?.value?.data?.stock_status,
      lastUpdateDatemain: results[8]?.value?.data?.date,
      lastUpdateDatebbnd: results[9]?.value?.data?.date,


    };

} catch (error) {
  return error.response
}

}


export const StrategyToolsInventoryDataFetch  =async(dealer_id,order_dealer,stockStatusFilter,modelFilter,variantFilter)=>{
 
try {

   const TotalCars  = api2.get(`/InventoryData/GettotalCars/${dealer_id}/${order_dealer}/${stockStatusFilter}/${modelFilter}/${variantFilter}`)

   const BBNDTotalCars  = api2.get(`/BBNDInventoryData/GettotalCars/${dealer_id}/${order_dealer}/${stockStatusFilter}/${modelFilter}/${variantFilter}`)

   const results = await Promise.allSettled([
      TotalCars,
      BBNDTotalCars ,
     

    ]);

    
    return {
    
      mainUnits: results[0]?.value?.data?.total_stock,
      bbndUnits: results[1]?.value?.data?.total_stock,
    


    };

} catch (error) {
  return error.response
}
}



//////////////////////////Vahan Portal//////////////////////////////////////////////////////////////////////////////
export const FetchStateData = async (selectedState) => {
  try {
    const response = await api3.get(
      `summary?state_name=${selectedState}&page=1&size=5000&vehicle_class=LIGHT PASSENGER VEHICLE&vehicle_class=FOUR WHEELER (Invalid Carriage)&vehicle_class=LIGHT MOTOR VEHICLE`,
      {
        headers: {
          "X-API-Key":
            "cmm080zHOgpPAptZ9lqMOd6PKuHYKkT7qJGYq28PxhcrXu3dAL0sGIqrpdYUWxxJ",
        },
      }
    );

    return response;
  } catch (error) {
    return error.response;
  }
};
export const FetchRTOData = async (selectedState, selectedRTO) => {
  try {
    const response = await api3.get(
      `summary?state_name=${selectedState}&page=1&size=5000&rto_name=${selectedRTO}&vehicle_class=LIGHT PASSENGER VEHICLE&vehicle_class=FOUR WHEELER (Invalid Carriage)&vehicle_class=LIGHT MOTOR VEHICLE`,
      {
        headers: {
          "X-API-Key":
            "cmm080zHOgpPAptZ9lqMOd6PKuHYKkT7qJGYq28PxhcrXu3dAL0sGIqrpdYUWxxJ",
        },
      }
    );

    return response;
  } catch (error) {
    return error.response;
  }
};
export const FetchIndiaData = async () => {
  try {
    const response = await api3.get(
      `summary?state_name=All Vahan4 Running States (36/36)&rto_name=All Vahan4 Running Office(1463/1466)&page=1&size=5000&vehicle_class=LIGHT PASSENGER VEHICLE&vehicle_class=FOUR WHEELER (Invalid Carriage)&vehicle_class=LIGHT MOTOR VEHICLE`,
      {
        headers: {
          "X-API-Key":
            "cmm080zHOgpPAptZ9lqMOd6PKuHYKkT7qJGYq28PxhcrXu3dAL0sGIqrpdYUWxxJ",
        },
      }
    );

    return response;
  } catch (error) {
    return error.response;
  }
};



export const PoolstockMatchedData = async(dealer_id,asm_id) => {

  try {
    const response =await api2.post('/poolstock/getComputedVna',{
      dealer_id:dealer_id,
      asm_id:asm_id
    })
    return response
  } catch (error) {
    return error.response;
  }
}

export const UploadPoolStock = async(formData) => {
  try {
    const response = await api2.post("/exceluploads/uploadPoolStock", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response;
  } catch (error) {
    return error.response;
  }
};
export const UploadVNA = async(formData) => {
  try {
    const response = await api2.post("/exceluploads/uploadVNA", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response;
  } catch (error) {
    return error.response;
  }
};

