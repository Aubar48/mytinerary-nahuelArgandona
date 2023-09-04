/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducers.js";
import itinerariesReducer from "./reducers/itinerariesReducer.js";
export default configureStore({
    reducer: {
        citiesReducer,
        itinerariesReducer
    }


})