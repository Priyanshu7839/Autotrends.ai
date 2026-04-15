import { createSlice } from "@reduxjs/toolkit";

const CarNamesSlice = createSlice({
    name:'CarNames',
    initialState:[],
    reducers:{
        carnamesbybrands:(state,action)=>{
           return action.payload
        }
    }
})

export const {carnamesbybrands} = CarNamesSlice.actions;
export default CarNamesSlice.reducer