import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSignInOpen:false,
    formOpen:false,
    appKey:'0'
}

const popupSlice = createSlice({
    name:'popup',
    initialState,
    reducers:{
        openSignInPopup:(state,action)=>{
            state.isSignInOpen = action.payload;
        },
        setformOpen:(state,action)=>{
            state.formOpen = action.payload
        },
        setappKey:(state,action)=>{
            state.appKey = action.payload
        }
    }
})

export const {openSignInPopup,setformOpen,setappKey} = popupSlice.actions;
export default popupSlice.reducer