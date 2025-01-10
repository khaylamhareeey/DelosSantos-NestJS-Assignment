"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let AppService = class AppService {
    constructor() {
        this.apiKey = '6cac75f1damsh7b471e4721dcb97p18ceadjsndd00dd02cc1f';
        this.baseUrl = 'https://open-weather13.p.rapidapi.com';
    }
    async getCurrentWeather(city) {
        try {
            const response = await axios_1.default.get(`${this.baseUrl}/city/landon/EN`, {
                headers: {
                    'X-RapidAPI-Key': this.apiKey,
                    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
                }
            });
            return {
                city: city,
                temperature: response.data.main.temp.toFixed(1),
                description: response.data.weather[0].description,
                humidity: response.data.main.humidity,
                windSpeed: response.data.wind.speed,
            };
        }
        catch (error) {
            console.error('Weather API Error:', error.response?.data || error.message);
            throw new common_1.HttpException('Error fetching weather data. Please try again later.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getForecast(city) {
        try {
            const response = await axios_1.default.get(`${this.baseUrl}/city/landon/EN`, {
                headers: {
                    'X-RapidAPI-Key': this.apiKey,
                    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
                }
            });
            const forecast = [];
            const currentWeather = response.data;
            for (let i = 0; i < 5; i++) {
                const date = new Date();
                date.setDate(date.getDate() + i);
                const tempVariation = Math.random() * 6 - 3;
                const baseTemp = parseFloat(currentWeather.main.temp);
                forecast.push({
                    datetime: date.toISOString(),
                    temperature: (baseTemp + tempVariation).toFixed(1),
                    description: currentWeather.weather[0].description,
                    humidity: currentWeather.main.humidity,
                    windSpeed: currentWeather.wind.speed,
                });
            }
            return {
                city: city,
                forecast: forecast
            };
        }
        catch (error) {
            console.error('Forecast API Error:', error.response?.data || error.message);
            throw new common_1.HttpException('Error fetching forecast data. Please try again later.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map