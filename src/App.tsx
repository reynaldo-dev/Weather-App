import { useEffect, useState } from 'react'


import { Header } from './components/Header';
import { Container } from './screen/Container';
import {MainInfo } from './components/info/index'
import {  ChartComponent } from './components/Chart';
import { ForecastContainer } from './screen/ForecastContainer';
import {DaysForecast} from './components/daysForecast/index'
import { useAppDispatch, useAppSelector } from './app/redux.hooks';
import { RootState } from './redux/store';
import { Loader } from './screen/Loader';
import { getData } from './redux/thunks/wather.thunk';
import { showLoader } from './redux/slices/ui.slice';
import { getForecast } from './redux/thunks/forecast.thunk';


function App() {
  const state = useAppSelector((state : RootState) => state.ui)
  const dispatch = useAppDispatch()

  useEffect(() => {
  
    setTimeout(() => {
      dispatch(getForecast({ lat: 13.6894, lon: -89.1872}))
      dispatch( getData() )
      dispatch(showLoader(false))
    }, 4000);
  }, [])

  return (
    <>

      {
        state?.show ? <Loader /> :
          <>
            <Header />
            <Container>
              <MainInfo />
            </Container>
            <ForecastContainer>
              <ChartComponent />
              <DaysForecast />
            </ForecastContainer>
          </>
      }
    </>


  )
}

export default App
