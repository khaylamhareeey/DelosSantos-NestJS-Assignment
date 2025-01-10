export declare class AppService {
    private readonly apiKey;
    private readonly baseUrl;
    getCurrentWeather(city: string): Promise<{
        city: string;
        temperature: any;
        description: any;
        humidity: any;
        windSpeed: any;
    }>;
    getForecast(city: string): Promise<{
        city: string;
        forecast: any[];
    }>;
}
