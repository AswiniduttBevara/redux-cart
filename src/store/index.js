import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cart-Slice";
import uiSliceReducer from './ui-Slice';

const store = configureStore({
    reducer : {ui : uiSliceReducer, cart:cartSliceReducer}
})

export default store;