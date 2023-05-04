import { Injectable, OnDestroy } from '@angular/core';
import { WeatherInfor } from '../interfaces/weather-infor';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, map, Subscription, catchError } from 'rxjs';
import { ToolBoxService } from './tool-box.service';
import { SpinnerService } from './ui/spinner.service';
@Injectable({
  providedIn: 'root',
})
export class WeatherService implements OnDestroy {
  // currentWeather: WeatherInfor = {};
  // location: any;
  subscription?: Subscription;
  constructor(
    private http: HttpClient,
    private toolBox: ToolBoxService,
    private spinnerS: SpinnerService
  ) {}
  unSub(): void {
    console.log(`unsubscribe`);
    this.subscription?.unsubscribe();
  }
  getJSON(url: string): any {
    return this.http.get(url);
  }
  getLocalWeather(cityName: string): WeatherInfor {
    const temp: WeatherInfor = {};
    cityName = this.toolBox.validateCityName(cityName);
    this.subscription = this.getJSON(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cb3036dd596de35d22e9e919b543f358&units=metric`
    ).subscribe(
      (data: any) => {
        // console.log(data);
        temp.cityName = data.name;
        temp.temp = data.main.temp;
        temp.icon = data.weather[0].icon;
        temp.weatherKind = data.weather[0].description;
        temp.humidity = data.main.humidity;
        temp.windSpeed = data.wind.speed;
        temp.found = true;
        this.spinnerS.showSpinner = false;
      },
      (err: HttpErrorResponse) => {
        // console.log(err);
        temp.found = false;
        this.spinnerS.showSpinner = false;
      }
    );
    // console.log(temp);
    return temp;
  }
  // getCurrentWeather(): WeatherInfor {
  //   navigator.geolocation.getCurrentPosition((pos) => {
  //     // console.log(pos.coords);
  //     this.getJSON(
  //       `http://api.openweathermap.org/geo/1.0/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&=&appid=cb3036dd596de35d22e9e919b543f358`
  //     ).subscribe((data: any) => {
  //       // console.log(data[0].name);
  //       this.getLocalWeather(data[0].name);
  //     });
  //   });
  //   return this.currentWeather;
  // }
  ngOnDestroy(): void {
    this.unSub();
  }
}
