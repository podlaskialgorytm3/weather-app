export interface Forecast {
    id: string;
    city: string;
    temp: number;
    pressure: number;
    humidity: number;
    wind: number;
    sunrise: number;
    sunset: number;
    country: string;
    icon: string;
    timezone: number;
    visable: boolean;
}