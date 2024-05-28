import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice.js";

const Store = configureStore({
    reducer: {
        cart: Slice, 
    },
});

export default Store;