import { useFetchWeather } from "../api/use-fetch-weather";
import { Forecast } from "../types/forecast";
import { FILTER_PROPERTIES } from "../constants/filter-pop-up";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { SelectChangeEvent } from "@mui/material";
import { PropertyProps } from "../types/property";

export const useProcessingData = (location: string) => {
    const [forecasts, setForecasts] = useState<Forecast[]>([]);
    const [properties, setProperties] = useState(FILTER_PROPERTIES)
    const [changedProperty, setChangedProperty] = useState(FILTER_PROPERTIES)
    const { data, isError, error, refetch, isLoading } = useFetchWeather(location);

    const id = uuidv4();

    const handleDelete: (id: string) => void = (id: string) => {
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
        let isCityInList = false;
        if(data !== undefined){
            forecasts.forEach((forecast) => {
                if(forecast.city == data.name){
                    Swal.fire({
                        title: "Error",
                        text: "City is already in the list!",
                        icon: "error",
                        confirmButtonText: "Ok"
                    })
                    isCityInList = true;
                }
            })
            if(!isCityInList){
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
                    timezone: data.timezone,
                    visable: true
                }])
            }
        }

    },[data])

    const handleSort = (event: SelectChangeEvent) => {
        const property = JSON.parse(event.target.value);
        const propertyType: keyof Forecast = property[0]; 
        const isDescending: boolean = property[2];
    
        const sortedForecasts = [...forecasts].sort((a, b) => {
            const firstValue = a[propertyType];
            const secondValue = b[propertyType];
    
            if (isDescending) {
                return Number(firstValue) - Number(secondValue);
            }
            return Number(secondValue) - Number(firstValue);
        });
    
        setForecasts(sortedForecasts);
    }

    const changeProperty = (event: React.ChangeEvent<HTMLInputElement>, newValue: number[]) => {
        const name = event.target.name;
        setChangedProperty((prevValue) => prevValue.map((item) => {
          if (item[0] === name) {
            return [item[0], item[1], item[2], item[3],newValue[0],newValue[1]]
          }
          return item
        }))
      }
    
      const handleFilter = () => {
        setProperties(() => changedProperty)
        setForecasts((prevValues) => prevValues.map((forecast) => {
          let isVisable = true;
          changedProperty.forEach((property) => {
            const propertyType: keyof Forecast = property[0];
            const minValue = property[4];
            const maxValue = property[5];
            if (forecast[propertyType] < minValue || forecast[propertyType] > maxValue) {
              isVisable = false;
            }
          })
          return {
            ...forecast,
            visable: isVisable
          }
        }))
      }

    const filterTools: PropertyProps = {properties, changeProperty, handleFilter}

    return {
        forecasts,
        isLoading,
        refetch,
        handleDelete,
        handleSort,
        filterTools
    }
}