import { createReducer } from "@reduxjs/toolkit";
import { getItinerariesAsync } from "../actions/itinerariesActions.js";

const initialState = {
    itineraries:[]
}

const itinerariesReducer = createReducer(initialState,
    (builder) => builder
        .addCase(getItinerariesAsync.fulfilled, (state, action) => {
            const newState = { ...state, itineraries: action.payload };
            return newState
        })
)
export default itinerariesReducer