export interface Forecast {
    name: string;
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    };
    main: {
        temp: number;
        pressure: number;
        humidity: number;
    }
    wind: {
        speed: number;
    };
    weather: Array<{icon: string}>;
}