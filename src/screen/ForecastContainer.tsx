import React, { ReactNode } from 'react'

interface IProps  {
    children : ReactNode
}
export const ForecastContainer = ({children} : IProps) => {
    return (
        <div className='flex md:flex-row justify-around  mt-10 items-center flex-col'>
            {children}
        </div>
    )
}
