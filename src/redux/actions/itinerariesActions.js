import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";
const getItinerariesAsync = createAsyncThunk('getItinerariesAsync', async (cityId) => {
    try {
        const res = await axios.get(apiUrl + `/api/itineraries/city/${cityId}`)
        return res.data.response
    } catch (error) {
        return []
    }
})

export { getItinerariesAsync }
