import { createReducer } from "@reduxjs/toolkit";
import { getCitiesAsync } from "../actions/citiesActions.js";
const initialState = {
    cities: []
}
const citiesReducer = createReducer(initialState,
    (builder) => builder
        .addCase(getCitiesAsync.fulfilled, (state, action) => {
            const newState = { ...state, cities: action.payload };
            return newState
        })
)
export default citiesReducer