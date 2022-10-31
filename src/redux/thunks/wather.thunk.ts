import { createAsyncThunk } from "@reduxjs/toolkit"


import { weatherAPI } from "../../api/weatherAPI"


export const getData = createAsyncThunk(
    'getWeatherByCity',
    async (city: string = 'san salvador') => {
      
        const res = await weatherAPI.get(`?q=${city}&appid=111720aa4bbf8d4e6610bb37f0d5cf0d`)
       
        return res.data
    })