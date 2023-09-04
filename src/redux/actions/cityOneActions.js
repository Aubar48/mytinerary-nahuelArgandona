import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const cityOneAction = createAsyncThunk('cityOneAction', async (cityId) => {
    try {
        const res = await axios.get(`http://localhost:3000/api/cities/${cityId}`)
        return res.data.response
    } catch (error) {
        return {}
    }
})

export {cityOneAction}