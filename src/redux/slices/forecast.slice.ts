import { createSlice } from '@reduxjs/toolkit'
import {  IForecastDaily } from '../../interfaces/clima.interface'
import { getForecast } from '../thunks/forecast.thunk'

const initialState: IForecastDaily[] = []
   


export const forecastSlice = createSlice({
    name: 'forecast',

    initialState,
    reducers: {
        clear:()=>{
            
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getForecast.fulfilled, (state, { payload }) => {
        state.splice(0, state.length)
         payload.daily.forEach((element:IForecastDaily) => {
            state.push(element)
          });
        })
    }
})

export default forecastSlice.reducer
export const {clear} = forecastSlice.actions