import { createSlice } from "@reduxjs/toolkit";

const savedDealer = localStorage.getItem("dealerDetails");
const initialState = savedDealer
  ? JSON.parse(savedDealer)
  : {
      id:'',
      dealership_name: '',
      dealership_brand:'',
      contact: '',
      city: '',
      dealership_state:'',
      loggedIn: false,
      accessToken: '',
      lat:'',
      lon:'',
      role:'',
      user_name:'',
      userID:''
    };

const DealershipDetailsSlice = createSlice({
    name:'DealershipDetails',
    initialState,
    reducers:{
       setDealershipdetails: (state, action) => {
  for (const key in action.payload) {
    state[key] = action.payload[key];
  }
  localStorage.setItem("dealerDetails", JSON.stringify(state));
}
    }
})

export const {setDealershipdetails} = DealershipDetailsSlice.actions;
export default DealershipDetailsSlice.reducer