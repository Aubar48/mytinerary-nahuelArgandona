import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";
const cityOneAction = createAsyncThunk('cityOneAction', async (cityId) => {
    try {
        const res = await axios.get(apiUrl + `/cities/${cityId}`)
        return res.data.response
    } catch (error) {
        return {}
    }
})

export { cityOneAction }