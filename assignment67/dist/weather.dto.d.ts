export declare class WeatherResponse {
    city: string;
    temperature: number;
    description: string;
    humidity: number;
    windSpeed: number;
}
export declare class ForecastResponse {
    city: string;
    forecast: {
        datetime: string;
        temperature: number;
        description: string;
        humidity: number;
        windSpeed: number;
    }[];
}
