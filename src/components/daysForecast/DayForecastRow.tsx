
import { TiWeatherCloudy, TiWeatherPartlySunny } from 'react-icons/ti'
import {motion} from 'framer-motion'
import { Accordion, AccordionDetails, AccordionSummary, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useAppSelector } from '../../app/redux.hooks';
import { RootState } from '../../redux/store';
import { IForecastDaily } from '../../interfaces/clima.interface';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            marginTop: theme.spacing(2),
            padding:theme.spacing(2)
            
            
        },
       
    }),
);

interface IProps {
    forecast: IForecastDaily,
    day:number
}

export const DayForecastRow = ({forecast, day} : IProps) => {
  

    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className=' text-orange-500 font-thin'>Day {day}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='ml-5'>
                        
                       <div className='grid grid-cols-2 mb-2'>
                            <p className='text-sm text-gray-600 flex mt-4 mb-1'>Day: {forecast?.temp?.day}° C</p>
                            <p className='text-sm text-gray-600 flex mt-4 mb-1'>Evening: {forecast?.temp?.eve}° C</p>
                            <p className='text-sm text-gray-600 flex mt-4 mb-1'>Night: {forecast?.temp?.night}° C</p>
                            <p className='text-sm text-gray-600 flex mt-4 mb-1'>Morning: {forecast?.temp?.morn}° C</p>
                       </div>


                        <p
                            className='font-bold text-gray-600'
                        >
                            Feels like {forecast.feels_like.day}° C.
                        </p>

                        <div className='border-l-orange-500 border-l w-60'>
                            <div className=' w-60 grid grid-cols-2 ml-2'>
                                <span>Speed: {forecast.wind_speed}m/s</span>
                                <span>Humidity: {forecast?.humidity}%</span>
                                <span>Min: {forecast.temp.min}° C</span>
                                <span>Max: {forecast.temp.max}° C</span>
                            </div>

                            <span className='ml-2'>Preassure: {forecast?.pressure}</span>
                        </div>

                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
