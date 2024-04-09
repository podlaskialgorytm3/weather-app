import { useFetchWeather } from "../api/use-fetch-weather";
import { Forecast } from "../types/forecast";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

export const useProcessingData = (location: string) => {
    const [forecasts, setForecasts] = useState<Forecast[]>([]);
    const { data, isError, error, refetch, isLoading } = useFetchWeather(location);
    const id = uuidv4();

    const handleDelete = (id: string) => {
        setForecasts((prevValues) => prevValues.filter((forecast) => forecast.id !== id))
    }
    
    useEffect(() => {
        if(isError) {
            Swal.fire({
                title: "Error",
                text: error.message,
                icon: "error",
                confirmButtonText: "Ok"
            })
        }
    
    },[isError, error])

    useEffect(() => {
        if(data !== undefined){
            setForecasts((prevValues) => [...prevValues, {
                id: id,
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                humidity: data.main.humidity,
                wind: data.wind.speed,
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset,
                country: data.sys.country,
                icon: data.weather[0].icon,
                timezone: data.timezone
            }])
        }

    },[data])


    return {
        forecasts,
        isLoading,
        refetch,
        handleDelete
    }
}