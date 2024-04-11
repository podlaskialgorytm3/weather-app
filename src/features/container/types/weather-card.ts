import { Forecast } from "./forecast";

export interface WeatherCardType {
    index: number;
    forecast: Forecast;
    onDelete: (id: string) => void;
}