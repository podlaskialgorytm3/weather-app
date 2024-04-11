import { Forecast } from "../../container/types/forecast";

export interface WeatherCardType {
    index: number;
    forecast: Forecast;
    onDelete: (id: string) => void;
}