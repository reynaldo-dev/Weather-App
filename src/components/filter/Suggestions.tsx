import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { motion } from "framer-motion"

import { Suggestion } from './Suggestion'
import { FormikValues, useFormik } from 'formik'
import { useAppDispatch, useAppSelector } from '../../app/redux.hooks'
import { getData } from '../../redux/thunks/wather.thunk'
import { showLoader } from '../../redux/slices/ui.slice'
import { getForecast } from '../../redux/thunks/forecast.thunk'
import { RootState } from '../../redux/store'

interface IFormikProps {
    cityName : string
}

export const Suggestions = () => {

    const data = useAppSelector((state: RootState) => state.clima)
    const forecast = useAppSelector((state: RootState) => state.forecast)

    const dispatch = useAppDispatch()

   

    const handleSearch = ()=>{
        dispatch( showLoader(true) )
        setTimeout(() => {
            dispatch(getData(formik.values.cityName.trim().toLocaleLowerCase()) )
            dispatch(getForecast(data.coord))
            dispatch(showLoader(false))

        }, 4000);
    }

    const formik  = useFormik<IFormikProps>({
        initialValues :{
            cityName : ''
        },
        onSubmit : handleSearch
    })



    return (
        <div className='p-2  flex flex-col '>
            <div className='flex mb-2'>
                <input
                    type="text"
                    name="cityName"
                    value={formik.values.cityName}
                    placeholder='Search city'
                    onChange={formik.handleChange}
                    className='p-2 w-80 rounded-l-md focus:outline-none'
                />

                <button
                    className='bg-slate-900 rounded-r-md w-10 p-2 flex justify-center items-center focus:outline-none'
                    onClick={handleSearch}
                >
                    <FiSearch color='white' />
                </button>
            </div>


        </div>
    )
}
