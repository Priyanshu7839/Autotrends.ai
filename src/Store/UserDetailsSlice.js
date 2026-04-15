import { createSlice } from "@reduxjs/toolkit";

const savedUser = localStorage.getItem("userDetails");
const initialState = savedUser
  ? JSON.parse(savedUser)
  : {
      name: '',
      phoneNumber: '',
      location: 'Jhansi',
      loggedIn: false,
      accessToken: '',
      lat:'',
      lon:'',
      pan:'',
      uid:''
    };


const UserDetailsSlice = createSlice({
    name:'UserDetails',
    initialState,
    reducers:{
        setUserDetails: (state, action) => {
            const { name, phoneNumber, uid,location, loggedIn,accessToken,lat,lon,pan } = action.payload;
            state.name = name;
            state.phoneNumber = phoneNumber;
            state.location = location;
            state.loggedIn = loggedIn;
            state.accessToken = accessToken
            state.lat = lat;
            state.lon = lon;
            state.pan = pan;
            state.uid = uid

            localStorage.setItem(
                "userDetails",
                JSON.stringify({
                  name,
                  phoneNumber,
                  location,
                  loggedIn,
                  accessToken,
                  lat,
                  lon,
                  pan,
                  uid
                })
              );
        }

        
    }
})

export const {setUserDetails} = UserDetailsSlice.actions
export default UserDetailsSlice.reducer;