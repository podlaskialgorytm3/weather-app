import { WeatherProperties } from "./weather-properites"
import { WeatherCardType } from "../types/weather-card";
import { CountryIcon } from "./country-icon";

export const WeatherCard = ({index,forecast,onDelete} : WeatherCardType) => {
    return(
        <div key={index} className="bg-white bg-opacity-50 p-5 rounded-lg m-5 relative">
            <div className="flex flex-col justify-start">
                <div className="flex justify-start items-center">
                {forecast.country && (<CountryIcon country={forecast.country} />)}
                    <h1 className="text-3xl font-bold mb-1">
                        <a 
                            href={`https://www.google.pl/maps/place/${forecast.city}`}
                            target="_blank"
                            >{forecast.city}</a>
                    </h1>
                </div>
                <div className="flex w-[100%] justify-around items-center">
                    <div>
                        <p className="text-5xl font-bold">{Math.round(forecast.temp)}°C</p>
                    </div>
                    <WeatherProperties forecast={forecast} />
                    <div>
                        <img src={`https://openweathermap.org/img/wn/${forecast.icon}.png`} alt="" width={50} />
                    </div>
                </div>
            </div>
            <img 
                 src="https://static.thenounproject.com/png/53235-200.png" 
                 width={30}
                 className="cursor-pointer absolute top-2 right-2" 
                 onClick={() => onDelete(forecast.id)}
            />
    </div>
    )
    
}