import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";
const getCitiesAsync = createAsyncThunk('getCitiesAsync', async () => {
    try {
        const res = await axios.get(apiUrl + "/api/cities")
        return res.data.response
    } catch (error) {
        return []
    }
})

const citiesFilter = createAction('citiesFilter', (search) => {
    return {
        payload: search
    }
})

export { getCitiesAsync, citiesFilter }

