import { createReducer } from "@reduxjs/toolkit";
import { citiesFilter, getCitiesAsync } from "../actions/citiesActions.js";
const initialState = {
    cities: [],
    citiesFiltered: []

}
const citiesReducer = createReducer(initialState,
    (builder) => builder
        .addCase(getCitiesAsync.fulfilled, (state, action) => {
            const newState = { ...state, cities: action.payload, citiesFiltered: action.payload };
            return newState
        })
        .addCase(citiesFilter, (state, action) =>{
            const filteredCityCards = state.cities.filter((city) =>
            city.city.toLowerCase().includes(action.payload.toLowerCase())
          )
          return {...state , citiesFiltered :filteredCityCards};
        })
)
export default citiesReducer