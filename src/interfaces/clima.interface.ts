export interface ICoord {
    lon: number,
    lat: number
}
export interface IWeather {
    id: number,
    main: string,
    description: string,
    icon: string
}

export interface IMain {

    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    visibility: number,
}

export interface IWind {
    speed: number,
    deg: number,
    gust: number
}

export interface ISys {
    type: number,
    id: number,
    country: string
    sunrise: number,
    sunset: number
}

export interface IMainInterface {
    coord: ICoord,
    weather: IWeather[],
    base: string,
    main: IMain,
    visibility: number,
    wind: IWind,
    sys: ISys,
    name: string,
    isLoading: boolean
}


export interface ITempForecast {
    day: number,
    min: number,
    max: number,
    night: number,
    eve: number,
    morn: number
}

export interface IFeelsForecast {
    day: number,
    night: number,
    eve: number,
    morn: number
}


export interface IForecastDaily{
    temp: ITempForecast,
    feels_like: IFeelsForecast,
    pressure: number,
    humidity: number,
    dew_point: number,
    wind_speed: number,
    wind_deg: number,
    wind_gust: number,
    clouds: number,
    pop: number,
    uvi: number

}


