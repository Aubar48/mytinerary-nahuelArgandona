import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getItinerariesAsync = createAsyncThunk('getItinerariesAsync', async () => {
    try {
        const res = await axios.get("http://localhost:3000/api/itineraries/city/${cityId}")
        return res.data.response
    } catch (error) {
        return []
    }
})

export {getItinerariesAsync}
