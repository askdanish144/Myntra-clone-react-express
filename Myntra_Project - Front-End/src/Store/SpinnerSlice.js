import { createSlice } from "@reduxjs/toolkit";

const SpinnerSlice = createSlice({
    name: "spinner",
    initialState: false, 
    reducers: {
        toggleState(state, action){
            return action.payload; 
        }
    }
})

export const spinnerActions = SpinnerSlice.actions;  

export default SpinnerSlice; 