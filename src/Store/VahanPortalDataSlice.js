import { createSlice } from "@reduxjs/toolkit";

const SavedVahanData = localStorage.getItem("VahanPortalData");
const initialState = SavedVahanData?JSON.parse(SavedVahanData):
{
    StateData:[],
    RtoData:[]
}




const VahanPortalDataSlice = createSlice({
    name:'VahanPortalData',
    initialState,
    reducers:{
        setStateData:(state,action)=>{
            state.StateData = action.payload;
        },
        setRtoData:(state,action)=>{
            state.RtoData = action.payload;
        }
    }
})

export default VahanPortalDataSlice.reducer
export const {setStateData,setRtoData} = VahanPortalDataSlice.actions