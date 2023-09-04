import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getCitiesAsync = createAsyncThunk('getCitiesAsync', async () => {
    try {
        const res = await axios.get("http://localhost:3000/api/cities")
        return res.data.response
    } catch (error) {
        return []
    }
})

export {getCitiesAsync}

