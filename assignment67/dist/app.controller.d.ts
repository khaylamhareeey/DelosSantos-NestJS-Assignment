import { AppService } from './app.service';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getWeatherPage(res: Response): Promise<void>;
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
