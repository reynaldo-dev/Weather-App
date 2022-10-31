
import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useAppSelector } from '../app/redux.hooks';
import { toCelsius } from '../helpers/kelvinToCelsius';
import { toKM } from '../helpers/mToKm';


export const ChartComponent = () => {
    const state = useAppSelector((state) => state.clima) 

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'forecast',
            },
        },
    };

    const labels = ['Actual (°C)', 'Minima (°C)', 'Maxima (°C)', 'Visibilidad (km)', 'Humedad (%)', 'Viento (m/s)'];

    const data: ChartData<"line", number[], string> = {
        labels,
        datasets: [
            {
                data:
                    [ 
                        parseFloat(toCelsius(state?.main?.temp).toFixed(1)),
                        parseFloat(toCelsius(state?.main?.temp_min).toFixed(1)),
                        parseFloat(toCelsius(state?.main?.temp_max).toFixed(1)),
                        parseFloat(toKM(state?.visibility).toFixed(1)),
                        state?.main?.humidity,
                        state?.wind?.speed,



                    ],
                borderColor: '#c2410c',
                borderWidth: .3,
                backgroundColor: '#c2410c',
                label: '', 
                
            },
           
        ],
    };

    return (
        <div className=' w-1/2' >
            <Line datasetIdKey='id' data={data} options={options} />
        </div>
    )
}
