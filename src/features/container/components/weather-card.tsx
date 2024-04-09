import { hourConverter } from "../utils/hour-converter"
import { WeatherProperty } from "./weather-property"

export const WeatherCard = ({index,forecast} : {index:number,forecast: any}) => {

    return(
        <div key={index} className="bg-white bg-opacity-50 p-5 rounded-lg m-5">
            <div className="flex flex-col justify-start">
                <div className="flex justify-start items-center">
                {forecast.sys.country && 
                    (<img 
                        src={`https://flagcdn.com/128x96/${forecast.sys.country.toLowerCase()}.png`} 
                        className="mr-3"
                        alt="" 
                        width={30} 
                    />)}
                    <h1 className="text-3xl font-bold mb-1">{forecast.name}</h1>
                </div>
                <div className="flex w-[100%] justify-around items-center">
                    <div>
                        <p className="text-5xl font-bold">{Math.round(forecast.main.temp)}°C</p>
                    </div>
                    <div className="flex flex-wrap justify-around w-80">
                        <WeatherProperty property="Pressure" value={`${forecast.main.pressure} hPa`} />
                        <WeatherProperty property="Humidity" value={`${forecast.main.humidity}%`} />
                        <WeatherProperty property="Wind" value={`${forecast.wind.speed} m/s`} />
                        <WeatherProperty property="Sunrise" value={hourConverter(forecast.sys.sunrise,forecast.timezone)} />
                        <WeatherProperty property="Sunset" value={hourConverter(forecast.sys.sunset,forecast.timezone)} />
                    </div>
                    <div>
                        <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" width={50} />
                    </div>
                </div>
                
                
                
            </div>
    </div>
    )
    
}