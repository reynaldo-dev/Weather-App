import {  createSlice } from '@reduxjs/toolkit'



import { getData } from '../thunks/wather.thunk'
import { IMainInterface } from '../../interfaces/clima.interface'



const initialState: IMainInterface = {
    coord: {
        lat: 0,
        lon: 0
    },

    weather: [],
    base: '',
    main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0,
        visibility: 0,
    },
    visibility : 0,
    wind :{
        deg : 0,
        gust : 0,
        speed : 0
    },
    sys:{
        country : '',
        sunrise : 0,
        id :0,
        sunset : 0,
        type : 0
    },
    name :'',
    isLoading : true

}

export const climaSlice = createSlice({
    name: 'clima',
    
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder.addCase(getData.fulfilled, (state, { payload }) => {
            //coord
            state.coord.lat = payload.coord.lat
            state.coord.lon = payload.coord.lon

            //weather
            state.weather = payload.weather,
            
            state.base = payload.base

            //main
            state.main.temp = payload.main.temp
            state.main.feels_like = payload.main.feels_like
            state.main.temp_min = payload.main.temp_min
            state.main.temp_max = payload.main.temp_max
            state.main.pressure = payload.main.preasure
            state.main.humidity = payload.main.humidity

            state.visibility = payload.visibility

            //wind
            state.wind.speed = payload.wind.speed
            state.wind.deg = payload.wind.deg
            state.wind.gust = payload.wind.gust

            //sys
            state.sys.type = payload.sys.type
            state.sys.id = payload.sys.id
            state.sys.country = payload.sys.country
            state.sys.sunrise = payload.sys.sunrise
            state.sys.sunset = payload.sys.sunset

            state.name = payload.name

            state.isLoading = false
        })
    }
})

//export const { changeName } = climaSlice.actions

export default climaSlice.reducer