import { configureStore } from "@reduxjs/toolkit";
import popupreducer from './GlobalSigninSlice'
import carNamesReducer from './CarNamesSlice';
import CarDetailsReducer from './CarDetailsSlice'
import UserSliceReducer from './UserDetailsSlice';
import DealershipDetailsReducer from './DealershipDetailsSlice';
import DealerLocationReducer from './DealerLocationSlice'
import VahanPortalDataReducer from './VahanPortalDataSlice'

export const Store = configureStore({
    reducer:{
        popup:popupreducer,
        CarNames:carNamesReducer,
        CarDetails:CarDetailsReducer,
        UserDetails:UserSliceReducer,
        DealershipDetails:DealershipDetailsReducer,
        DealerLocation:DealerLocationReducer,
        VahanPortalData:VahanPortalDataReducer
    }
})