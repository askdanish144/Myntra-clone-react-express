import {configureStore} from "@reduxjs/toolkit"; 
import itemsSlice from "./itemsSlice";
import SpinnerSlice from "./SpinnerSlice";
import bagSlice from "./BagSlice";

const myntraStore = configureStore({
    reducer: {
        items: itemsSlice.reducer, 
        spinner: SpinnerSlice.reducer, 
        bag: bagSlice.reducer, 
    }
})

export default myntraStore; 