import { configureStore } from '@reduxjs/toolkit'
import climaReducer from './slices/clima.slice'
import uiReducer from './slices/ui.slice'
import forecastReducer from './slices/forecast.slice'


export const store = configureStore({
    reducer: {
     clima: climaReducer,
     ui : uiReducer,
    forecast: forecastReducer
    },
})


export type RootState = ReturnType<typeof store.getState>


export type AppDispatch = typeof store.dispatch