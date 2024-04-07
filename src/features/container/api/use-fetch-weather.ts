import { useQuery } from "@tanstack/react-query";

const fetchWeather = async (location: string) => {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${process.env.REACT_APP_API_WEATHER_KEY}`);

    if(!response.ok){
        throw new Error('Something went wrong');
    }

    const data = await response.json();

    return data;
}

export const useFetchWeather = (location: string) => (
    useQuery({
        queryKey: ['weather'],
        queryFn: () => fetchWeather(location)
    })
)