import { useAppSelector } from '../../app/redux.hooks'
import { RootState } from '../../redux/store'
import {DayForecastRow} from './index'




export const DaysForecast = () => {
    const forecast = useAppSelector((state : RootState) => state.forecast)
    return (
        <div className=' w-1/3 flex flex-col overflow-y-scroll h-96'>
            <span className='text-lg text-gray-500 self-center'>8-days forecast</span>
            {
                forecast.map((e,i) =>(
                    
                    <DayForecastRow  forecast={e} day={i+1} />
                ))
            }

        </div>
    )
}
