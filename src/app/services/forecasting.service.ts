import { Injectable, OnDestroy } from '@angular/core';
import { WeatherForecastingInfor } from '../interfaces/weather-forecasting-infor';
import { WeatherService } from './weather.service';
import { ToolBoxService } from './tool-box.service';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { SpinnerService } from './ui/spinner.service';
@Injectable({
  providedIn: 'root',
})
export class ForecastingService implements OnDestroy {
  subscription?: Subscription;
  constructor(
    private ws: WeatherService,
    private tool: ToolBoxService,
    public spinnerS: SpinnerService
  ) {}
  getForecastingWeatherArr(cityName: string): WeatherForecastingInfor[] {
    const fiveDaysForecasting: WeatherForecastingInfor[] = [];
    cityName = this.tool.validateCityName(cityName);
    this.unSub();
    this.subscription = this.ws
      .getJSON(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=cb3036dd596de35d22e9e919b543f358&units=metric`
      )
      .subscribe((data: any) => {
        // console.log(data);
        for (let i = 0; i < data.list.length; i += 8) {
          const currentObj = data.list[i];
          fiveDaysForecasting.push({
            date: currentObj.dt_txt,
            imgURL: currentObj.weather[0].icon,
            tempMax: currentObj.main.temp_max,
            tempMin: currentObj.main.temp_min,
          });
          // console.log(fiveDaysForecasting.at(-1));
          this.spinnerS.showSpinner = false;
        }
      });
    return fiveDaysForecasting;
  }
  //Clean up
  unSub(): void {
    this.subscription?.unsubscribe();
  }
  ngOnDestroy(): void {
    this.unSub();
  }
}
