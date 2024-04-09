import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchWeather = async (location: string) => {
    if (!location) {
        throw new Error('Location is empty');
    }

    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_WEATHER_KEY}&units=metric&lang=en`);

        if (!response.data) {
            throw new Error('Empty response');
        }

        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw new Error('Incorrect data entered');
    }
};

export const useFetchWeather = (location: string) => (
    useQuery({
        queryKey: ['weather', location],
        queryFn: () => fetchWeather(location),
        enabled: false,
        refetchOnWindowFocus: false 
    })
);
