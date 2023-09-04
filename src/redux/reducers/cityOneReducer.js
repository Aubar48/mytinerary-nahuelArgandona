import { createReducer } from "@reduxjs/toolkit";
import { cityOneAction } from "../actions/cityOneActions";

const initialState = {
    cityOne:[]
}

const cityOneReducered = createReducer(initialState,
    (builder) => builder
        .addCase(cityOneAction.fulfilled, (state, action) => {
            const newState = { ...state, cityOne: action.payload };
            return newState
        })
)
export default cityOneReducered