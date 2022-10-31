import { createAsyncThunk } from "@reduxjs/toolkit";
import { forecastAPI } from "../../api/forecastAPI";



interface IPayload {
    lat : number,
    lon : number
}

export const getForecast = createAsyncThunk(
    'getforecast',
    async (payload : IPayload)=>{
        
        const res = await forecastAPI.get(`onecall?lat=${payload.lat}&lon=${payload.lon}&units=metric&exclude=hourly,minutely&cnt=8&lang=es&APPID=111720aa4bbf8d4e6610bb37f0d5cf0d`)
       
        return res.data
    }
)