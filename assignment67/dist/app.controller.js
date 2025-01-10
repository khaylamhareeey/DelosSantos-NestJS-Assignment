"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async getWeatherPage(res) {
        const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Weather App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: 'Poppins', sans-serif;
            }

            body {
              min-height: 100vh;
              background: linear-gradient(45deg, #1a1a2e, #16213e, #0f3460);
              color: #fff;
              padding: 20px;
            }

            .container {
              max-width: 1200px;
              margin: 0 auto;
            }

            .weather-app {
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(10px);
              border-radius: 20px;
              padding: 30px;
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            }

            .app-header {
              text-align: center;
              margin-bottom: 40px;
            }

            .app-header h1 {
              font-size: 2.5em;
              margin-bottom: 10px;
              background: linear-gradient(45deg, #00b4d8, #90e0ef);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            .app-header p {
              color: #caf0f8;
              font-size: 1.1em;
            }

            .search-box {
              display: flex;
              gap: 15px;
              margin-bottom: 30px;
              flex-wrap: wrap;
            }

            input {
              flex: 1;
              padding: 15px 25px;
              border: none;
              border-radius: 50px;
              background: rgba(255, 255, 255, 0.1);
              color: white;
              font-size: 16px;
              min-width: 200px;
              transition: all 0.3s ease;
            }

            input::placeholder {
              color: rgba(255, 255, 255, 0.7);
            }

            input:focus {
              outline: none;
              background: rgba(255, 255, 255, 0.2);
            }

            .btn {
              padding: 15px 30px;
              border: none;
              border-radius: 50px;
              font-size: 16px;
              cursor: pointer;
              transition: all 0.3s ease;
              display: flex;
              align-items: center;
              gap: 8px;
              min-width: 180px;
              justify-content: center;
            }

            .current-btn {
              background: linear-gradient(45deg, #00b4d8, #0077b6);
              color: white;
            }

            .forecast-btn {
              background: linear-gradient(45deg, #48cae4, #00b4d8);
              color: white;
            }

            .btn:hover {
              transform: translateY(-2px);
              box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            }

            .weather-card {
              background: rgba(255, 255, 255, 0.1);
              border-radius: 20px;
              padding: 25px;
              margin-bottom: 20px;
              backdrop-filter: blur(10px);
              transition: all 0.3s ease;
            }

            .weather-card:hover {
              transform: translateY(-5px);
            }

            .weather-info {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 20px;
              margin-top: 20px;
            }

            .weather-item {
              background: rgba(255, 255, 255, 0.1);
              padding: 20px;
              border-radius: 15px;
              text-align: center;
              transition: all 0.3s ease;
            }

            .weather-item:hover {
              background: rgba(255, 255, 255, 0.15);
              transform: translateY(-3px);
            }

            .weather-icon {
              font-size: 2.5em;
              margin-bottom: 15px;
              color: #90e0ef;
            }

            .weather-item h3 {
              color: #caf0f8;
              margin-bottom: 10px;
              font-size: 1.2em;
            }

            .weather-item p {
              color: #fff;
              font-size: 1.5em;
              font-weight: 500;
            }

            .error {
              background: rgba(255, 59, 59, 0.2);
              color: #ff8080;
              padding: 20px;
              border-radius: 15px;
              text-align: center;
              backdrop-filter: blur(10px);
            }

            .loading {
              text-align: center;
              padding: 40px;
            }

            .loading-spinner {
              width: 50px;
              height: 50px;
              border: 5px solid rgba(255, 255, 255, 0.1);
              border-top: 5px solid #00b4d8;
              border-radius: 50%;
              animation: spin 1s linear infinite;
              margin: 0 auto 20px;
            }

            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }

            @media (max-width: 768px) {
              .search-box {
                flex-direction: column;
              }
              
              .btn {
                width: 100%;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="weather-app">
              <div class="app-header">
                <h1>Weather Dashboard</h1>
                <p>Get real-time weather updates for any city</p>
              </div>

              <div class="search-box">
                <input 
                  type="text" 
                  id="cityInput" 
                  placeholder="Enter city name (e.g., Manila, London, Tokyo)"
                >
                <button class="btn current-btn" onclick="getCurrentWeather()">
                  <i class="fas fa-cloud-sun"></i>
                  Current Weather
                </button>
                <button class="btn forecast-btn" onclick="getForecast()">
                  <i class="fas fa-calendar-alt"></i>
                  5-Day Forecast
                </button>
              </div>

              <div id="result"></div>
            </div>
          </div>

          <script>
            async function getCurrentWeather() {
              const city = document.getElementById('cityInput').value;
              const resultDiv = document.getElementById('result');
              
              if (!city) {
                resultDiv.innerHTML = '<div class="error">Please enter a city name</div>';
                return;
              }

              try {
                resultDiv.innerHTML = \`
                  <div class="loading">
                    <div class="loading-spinner"></div>
                    <p>Fetching weather data...</p>
                  </div>
                \`;

                const response = await fetch(\`/weather/current?city=\${encodeURIComponent(city)}\`);
                const data = await response.json();
                
                if (!response.ok) throw new Error(data.message || 'Failed to fetch weather data');
                
                resultDiv.innerHTML = \`
                  <div class="weather-card">
                    <h2><i class="fas fa-map-marker-alt"></i> \${data.city}</h2>
                    <div class="weather-info">
                      <div class="weather-item">
                        <i class="fas fa-temperature-high weather-icon"></i>
                        <h3>Temperature</h3>
                        <p>\${data.temperature}°F</p>
                      </div>
                      <div class="weather-item">
                        <i class="fas fa-cloud weather-icon"></i>
                        <h3>Condition</h3>
                        <p>\${data.description}</p>
                      </div>
                      <div class="weather-item">
                        <i class="fas fa-tint weather-icon"></i>
                        <h3>Humidity</h3>
                        <p>\${data.humidity}%</p>
                      </div>
                      <div class="weather-item">
                        <i class="fas fa-wind weather-icon"></i>
                        <h3>Wind Speed</h3>
                        <p>\${data.windSpeed} mph</p>
                      </div>
                    </div>
                  </div>
                \`;
              } catch (err) {
                resultDiv.innerHTML = \`<div class="error">\${err.message}</div>\`;
              }
            }

            async function getForecast() {
              const city = document.getElementById('cityInput').value;
              const resultDiv = document.getElementById('result');
              
              if (!city) {
                resultDiv.innerHTML = '<div class="error">Please enter a city name</div>';
                return;
              }

              try {
                resultDiv.innerHTML = \`
                  <div class="loading">
                    <div class="loading-spinner"></div>
                    <p>Fetching forecast data...</p>
                  </div>
                \`;

                const response = await fetch(\`/weather/forecast?city=\${encodeURIComponent(city)}\`);
                const data = await response.json();
                
                if (!response.ok) throw new Error(data.message || 'Failed to fetch forecast data');
                
                let forecastHtml = \`
                  <div class="weather-card">
                    <h2><i class="fas fa-calendar-alt"></i> 5-Day Forecast: \${data.city}</h2>
                \`;
                
                data.forecast.forEach(item => {
                  const date = new Date(item.datetime);
                  forecastHtml += \`
                    <div class="weather-info" style="margin-top: 20px;">
                      <div class="weather-item">
                        <i class="fas fa-calendar-day weather-icon"></i>
                        <h3>Date</h3>
                        <p>\${date.toLocaleDateString()}</p>
                      </div>
                      <div class="weather-item">
                        <i class="fas fa-temperature-high weather-icon"></i>
                        <h3>Temperature</h3>
                        <p>\${item.temperature}°F</p>
                      </div>
                      <div class="weather-item">
                        <i class="fas fa-cloud weather-icon"></i>
                        <h3>Condition</h3>
                        <p>\${item.description}</p>
                      </div>
                      <div class="weather-item">
                        <i class="fas fa-tint weather-icon"></i>
                        <h3>Humidity</h3>
                        <p>\${item.humidity}%</p>
                      </div>
                      <div class="weather-item">
                        <i class="fas fa-wind weather-icon"></i>
                        <h3>Wind Speed</h3>
                        <p>\${item.windSpeed} mph</p>
                      </div>
                    </div>
                  \`;
                });
                
                forecastHtml += '</div>';
                resultDiv.innerHTML = forecastHtml;
              } catch (err) {
                resultDiv.innerHTML = \`<div class="error">\${err.message}</div>\`;
              }
            }

            // Add event listener for Enter key
            document.getElementById('cityInput').addEventListener('keypress', function(event) {
              if (event.key === 'Enter') {
                getCurrentWeather();
              }
            });
          </script>
        </body>
      </html>
    `;
        res.send(html);
    }
    async getCurrentWeather(city) {
        if (!city) {
            throw new common_1.HttpException('City parameter is required', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.appService.getCurrentWeather(city);
    }
    async getForecast(city) {
        if (!city) {
            throw new common_1.HttpException('City parameter is required', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const forecast = await this.appService.getForecast(city);
            if (!forecast || !forecast.forecast || forecast.forecast.length === 0) {
                throw new common_1.HttpException('No forecast data available', common_1.HttpStatus.NOT_FOUND);
            }
            return forecast;
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException('Error fetching forecast data', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getWeatherPage", null);
__decorate([
    (0, common_1.Get)('weather/current'),
    __param(0, (0, common_1.Query)('city')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getCurrentWeather", null);
__decorate([
    (0, common_1.Get)('weather/forecast'),
    __param(0, (0, common_1.Query)('city')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getForecast", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map