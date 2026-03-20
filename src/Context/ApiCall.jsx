import axios from "axios";

const api = axios.create({
  baseURL:
    "https://autotrends-b6edfffvgmfafncy.centralindia-01.azurewebsites.net/api",
});

const nodeapi = axios.create({
  baseURL:"https://autotrends-backend.onrender.com/"
        // baseURL:"http://localhost:8002"

})


export const HomePageApiCall = async ({
  SetHeaderBannerImages,
  SetPopularElectricCars,
  SetCarDealCars,
  CarDealHeading,
  SetCarDealsHeadings,
}) => {
  try {
    const response = await api.get("/homepage/");
    //For the Carousel Component//
    const banners = response.data.DATA.data.banner;
    if (SetHeaderBannerImages) {
      if (banners && banners.length > 0) {
        SetHeaderBannerImages(banners.map((banner) => banner.pathOfSponsor));
      }
    }

    //For the electric Cars component//
    const ElectricCars = response.data.DATA.data.electricCars.items[0];

    if (SetPopularElectricCars) {
      if (ElectricCars && ElectricCars.items && ElectricCars.items.length > 0) {
        SetPopularElectricCars(ElectricCars.items);
      }
    }

    const CarTypes = response.data.DATA.data.carsByBodyType.items;
    if (SetCarDealsHeadings) {
      if (CarTypes && CarTypes.length > 0) {
        SetCarDealsHeadings(CarTypes.map((type) => type.title));
      }
    }
    if (SetCarDealCars && CarDealHeading) {
      response.data.DATA.data.carsByBodyType.items.forEach((item) => {
        if (item.title === CarDealHeading) {
          SetCarDealCars(item.items);
        }
      });
    }
  } catch (error) {
    console.log("Error in HomepageApicall", error);
  }
};

export const ExtendedHomepageApi = async ({
  SetCarCompareItems,
  SetUpcomingCars,
  SetLatestCars,
}) => {
  try {
    const response = await api.get("/homepage_extended/");
    const carCompare = response.data.DATA.data.comparecar.items;
    const upcomingCars =
      response.data.DATA.data.upcomingandlatestCars.items[0].items;

    if (SetCarCompareItems) {
      if (carCompare && carCompare.length > 0) {
        SetCarCompareItems(carCompare);
      }
    }

    if (SetUpcomingCars) {
      if (upcomingCars && upcomingCars.length > 0) {
        SetUpcomingCars(upcomingCars);
      }
    }

    const LatestCar = response.data.DATA.data.latestCars.items[0].items;

    if (SetLatestCars) {
      if (LatestCar && LatestCar.length > 0) {
        SetLatestCars(LatestCar);
      }
    }
  } catch (error) {
    console.log("Error in Extended Homepage API");
  }
};

export const SearchAPICall = async(input,{ SetSearchResults }) => {
  
  try {
    const response = await api.post(
      '/search/',
      new URLSearchParams({ INPUT: input }), // Convert to form-urlencoded
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Set correct content type
        },
      }
    );


      const SearchResults = response.data.DATA.data.searchResult.results
   
      SetSearchResults(SearchResults);
      return SearchResults;
   
  } catch (error) {
    console.log(error,"Error in Search Api")
  }
}

export const RegisterUser = async ( SignUpData ) => {
  try {
    const response = await nodeapi.post("/user/signup", {
      number:SignUpData.email,
      name:SignUpData.name,
      uid:SignUpData.password
    });
    return response
  } catch (error) {
    
    return error.response
  }
};

export const LoginUser = async(SignUpData)=> {

  try {
    // const response = await api.post('/user/login/',{email:SignUpData.email,password:SignUpData.password})
    const response = await nodeapi.post('/user/login',{number:SignUpData.email,uid:SignUpData.password})
    return response
  } catch (error) {
    return error.response
  }
}

export const userProfile = async(token)=>{
  try {
    const response = await api.get('/user/profile/',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    return response;
  } catch (error) {
    return error.response
  }
}

// export const SearchAPICallForCarNames = async(input,{setCarNamesonPage}) => {
   
//   try {
//     const response = await api.post(
//       '/search/',
//       new URLSearchParams({ INPUT: input }), // Convert to form-urlencoded
//       {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded', // Set correct content type
//         },
//       }
//     );

//       const carNames = response.data.DATA.data.searchResult.results
//      if(setCarNamesonPage){
//       if(carNames && carNames.length >0 ){
//         setCarNamesonPage(carNames);
//       }
//      }
     
//   } catch (error) {
//     console.log(error,"Error in Search Api")
//   }
// }

export const fetchCarDetails = async(brandslug,modelslug,modelurl) => {
  try {
    const response = await api.post(
      '/details/',
      new URLSearchParams({brandslug:brandslug,modelslug:modelslug,modelurl:modelurl}), // Convert to form-urlencoded
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Set correct content type
        },
      }
    );
    const data = response.data.DATA
    return data;
    

  } catch (error) {
    console.log('Car Details api Error',error)
    return null
  }
}

export const fetchallcardetails = async(URL,BrandSlug,ModelSlug,{dispatch,navigate,setCarDetailsSlice,SetShowSearchResults}) => {
  
    let details ={}

            
   
          const url = URL;
          const [, brandSlug, modelSlug] = url.split("/");

          let brandslug = brandSlug
          let modelslug=modelSlug

          if(BrandSlug){
            brandslug = BrandSlug
          }
          if(ModelSlug){
            modelslug = ModelSlug
          }
          



          const modelurl = url
         const data = await fetchCarDetails(brandslug,modelslug,modelurl)
      
         if(data){
          details = data
         }
      
       if(dispatch){ dispatch(setCarDetailsSlice(details))}
        navigate('/CarDetails')
       if(SetShowSearchResults){ SetShowSearchResults(false)}
  }

  export const GetBrandcars = async(brandname) => {
        try {
          const response = await api.post('/brand/',
      new URLSearchParams({brandname:brandname}), // Convert to form-urlencoded
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Set correct content type
        },
      })

      return response
        } catch (error) {
          return error.response
        }
  }


  export const getCarPrice = async(car_id,variant_id,brand,lat,lon)=>{
   try {
     const response =  await nodeapi.post('/deals/',{"car_id":car_id,"variant_id":variant_id,"brand":brand,"lat":lat,"lon":lon});
    return response
   } catch (error) {
    return error.response;
    
   }
  }

  export const getip = async() => {
    try {
      const response = await api.get('https://api.ipify.org');
      return response
    } catch (error) {
      return error.response;
    }
  }

  export const getlocationbyip = async(ip) => {
    try {
      const response = await api.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_J0tkzmm0vMx4Kw729QiiDk37UIHlE&ipAddress=${ip}`);
      return response;
    } catch (error) {
      return error.response
    }
  }

  export const SubmitPan = async(pan,uid) => {
    try {
      const response = await nodeapi.post('/submit/pan',{"pan":pan,"uid":uid})
      return response
    } catch (error) {
      return error.response;
    }
  }

  export const SubmitcarQuotation = async(uid,lat,lon,city,price,dealership,color,car_id,variant_id,hexCode) => {
    try {
      const response = await nodeapi.post('/submit/carQuotation',{"uid":uid,"lat":lat,"lon":lon,"city":city,"price":price,"dealership":dealership,"color":color,"car_id":car_id,"variant_id":variant_id,hexCode:hexCode})

      return response;
    } catch (error) {
      return error.response
    }
  }

