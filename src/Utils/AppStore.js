import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";

// create a store named as AppStore.
const AppStore =  configureStore({
    reducer: {
        cart: CartReducer
    },    
}
);

export default AppStore;