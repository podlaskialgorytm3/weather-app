import { hourConverter } from "../utils/hour-converter"
import { WeatherProperty } from "./weather-property"
import { Forecast } from "../types/forecast"

export const WeatherCard = ({index,forecast,onDelete} : {index:number,forecast: Forecast,onDelete: (city: string) => void}) => {
    return(
        <div key={index} className="bg-white bg-opacity-50 p-5 rounded-lg m-5 relative">
            <div className="flex flex-col justify-start">
                <div className="flex justify-start items-center">
                {forecast.country && 
                    (<img 
                        src={`https://flagcdn.com/128x96/${forecast.country.toLowerCase()}.png`} 
                        className="mr-3"
                        alt="" 
                        width={30} 
                    />)}
                    <h1 className="text-3xl font-bold mb-1">{forecast.city}</h1>
                </div>
                <div className="flex w-[100%] justify-around items-center">
                    <div>
                        <p className="text-5xl font-bold">{Math.round(forecast.temp)}°C</p>
                    </div>
                    <div className="flex flex-wrap justify-around w-72">
                        <WeatherProperty property="Pressure" value={`${forecast.pressure} hPa`} />
                        <WeatherProperty property="Humidity" value={`${forecast.humidity}%`} />
                        <WeatherProperty property="Wind" value={`${forecast.wind} m/s`} />
                        <WeatherProperty property="Sunrise" value={hourConverter(forecast.sunrise,forecast.timezone)} />
                        <WeatherProperty property="Sunset" value={hourConverter(forecast.sunset,forecast.timezone)} />
                    </div>
                    <div>
                        <img src={`https://openweathermap.org/img/wn/${forecast.icon}.png`} alt="" width={50} />
                    </div>
                    
                </div>
            </div>
            <img 
                 src="https://static.thenounproject.com/png/53235-200.png" 
                 width={30}
                 className="cursor-pointer absolute top-2 right-2" 
                 onClick={() => onDelete(forecast.city)}
            />
    </div>
    )
    
}