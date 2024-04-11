import { hourConverter } from "../utils/hour-converter"
import { WeatherProperty } from "./weather-property"
import { Forecast } from "../../container/types/forecast"

export const WeatherProperties = ({forecast} : {forecast: Forecast}) => {
    const properties = [{
        property: "Pressure",
        value: `${forecast.pressure} hPa`
    },{
        property: "Humidity",
        value: `${forecast.humidity}%`
    },{
        property: "Wind",
        value: `${forecast.wind} m/s`
    },{
        property: "Sunrise",
        value: hourConverter(forecast.sunrise,forecast.timezone)
    },{
        property: "Sunset",
        value: hourConverter(forecast.sunset,forecast.timezone)
    
    }]
    return(
        <div className="flex flex-wrap justify-around w-72">
            {
                properties.map((property,index) => (
                    <WeatherProperty key={index} property={property.property} value={property.value} />
                ))
            }                          
        </div>
    )
}