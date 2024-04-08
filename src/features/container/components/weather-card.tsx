import { hourConverter } from "../utils/hour-converter"

export const WeatherCard = ({index,forecast} : {index:number,forecast: any}) => {
    

    return(
        <div key={index} className="bg-white bg-opacity-50 p-5 rounded-lg m-5">
            <div className="flex flex-col justify-start">
                <h1 className="text-2xl font-bold">{forecast.name}</h1>
                <h1 className="text-2xl font-bold">{forecast.main.temp}°C</h1>
                <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" width={50} />
                <img src={`https://flagcdn.com/128x96/${forecast.sys.country.toLowerCase()}.png`} alt="" width={50} />
                <h1 className="text-lg">{forecast.main.pressure} hPa</h1>
                <h1>{forecast.main.humidity} %</h1>
                <h1>{Math.floor(forecast.wind.speed * 1.609344)} km/h</h1>
                <h1>{hourConverter(forecast.sys.sunrise,forecast.timezone)}</h1>
                <h1>{hourConverter(forecast.sys.sunset,forecast.timezone)}</h1>
            </div>
    </div>
    )
    
}