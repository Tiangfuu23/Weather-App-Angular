import { Injectable } from '@angular/core';
import { WeatherInfor } from '../interfaces/weather-infor';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  currentWeather: WeatherInfor = {
    cityName: '',
    temp: '',
    icon: '',
    weatherKind: '',
    tempMax: '',
    tempMin: '',
  };
  location: any;
  constructor(private http: HttpClient) {}
  getJSON(url: string): any {
    return this.http.get(url);
  }
  getLocalWeather(cityName: string): WeatherInfor {
    this.getJSON(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cb3036dd596de35d22e9e919b543f358&units=metric
    `
    ).subscribe((data: any) => {
      console.log(data);
      this.currentWeather.cityName = data.name;
      this.currentWeather.temp = data.main.temp;
      this.currentWeather.icon = data.weather[0].icon;
      this.currentWeather.weatherKind = data.weather[0].description;
      this.currentWeather.tempMax = data.main.temp_max;
      this.currentWeather.tempMin = data.main.temp_min;
    });
    return this.currentWeather;
  }
}
