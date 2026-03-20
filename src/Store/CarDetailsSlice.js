import { createSlice } from "@reduxjs/toolkit";


const loadState = () => {
    try {
        const storedState = localStorage.getItem("carDetails");
        return storedState ? JSON.parse(storedState) : {};
    } catch (error) {
        console.error("Error loading state from localStorage", error);
        return {};
    }
};

const CarDetailsSlice = createSlice({
    name: "CarDetails",
    initialState: loadState(),
    reducers: {
        setCarDetailsSlice: (state, action) => {
            const newState = action.payload;
            
            // Save updated state to localStorage
            localStorage.setItem("carDetails", JSON.stringify(newState));

            return newState;
        }
    }
});

export const { setCarDetailsSlice } = CarDetailsSlice.actions;
export default CarDetailsSlice.reducer;
