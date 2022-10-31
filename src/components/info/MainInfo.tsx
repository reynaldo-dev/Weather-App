import { useState } from 'react'
import { TiWeatherCloudy} from 'react-icons/ti'
import { useAppSelector } from '../../app/redux.hooks'
import { toCelsius } from '../../helpers/kelvinToCelsius'
import { toKM } from '../../helpers/mToKm'
import { RootState } from '../../redux/store'


export const MainInfo = () => {
    const data = useAppSelector( (state : RootState) => state.clima )
    const date = new Date()

    return (
        <div className=' '>
            <div className='ml-5'>
                <span className='text-orange-500 font-regular'>{date.getMonth()} / {date.getDay()} / {date.getFullYear()}</span>
                <p className='font-bold text-2xl text-gray-600'>{data?.name}</p>
                <p className='text-5xl text-gray-600 flex mt-4 mb-1'> <TiWeatherCloudy />{ toCelsius(data?.main?.temp).toFixed(1) }° C</p>

                <p 
                    className='font-bold text-gray-600'
                >   
                    Feels like {toCelsius(data?.main?.temp).toFixed(1)}° C. {data?.weather[0]?.description}.  {data?.weather[0]?.main}.  
                </p>

                <div className='border-l-orange-500 border-l w-60'>
                    <div className=' w-60 grid grid-cols-2 ml-2'>
                        <span>Speed: {data.wind.speed}m/s</span>
                        <span>Humidity: {data?.main?.humidity}%</span>
                        <span>Min: {toCelsius(data?.main?.temp_min).toFixed(1)}° C</span>
                        <span>Max: {toCelsius(data?.main?.temp_max).toFixed(1)}° C</span>
                    </div>

                    <span className='ml-2'>Visibility: {toKM(data?.visibility)} km</span>
                </div>
                
            </div>
        </div>
    )
}
