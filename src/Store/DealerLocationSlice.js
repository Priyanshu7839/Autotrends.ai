import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


const SavedLocation = localStorage.getItem("DealerLocation");
const initialState = SavedLocation?JSON.parse(SavedLocation):
{
    state:'',
    rto:''
}


const DealerLocationSlice = createSlice({
    name:"DealerLocation",
    initialState,
    reducers:{
        setState:(state,action)=>{
            state.state = action.payload
        },
        setRto:(state,action)=>{
            state.rto = action.payload
        }
    }
})

export default DealerLocationSlice.reducer
export const {setState,setRto} = DealerLocationSlice.actions