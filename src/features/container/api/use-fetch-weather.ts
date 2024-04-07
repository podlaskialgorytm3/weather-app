import { useQuery } from "@tanstack/react-query";

const fetchWeather = async (location: string) => {
    if (!location) {
        throw new Error('Location is empty');
    }

    try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${process.env.REACT_APP_API_WEATHER_KEY}`);

        if (!response.ok) {
            throw new Error('Something went wrong');
        }

        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
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