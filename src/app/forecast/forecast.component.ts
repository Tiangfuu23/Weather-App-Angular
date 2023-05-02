import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherForecastingInfor } from '../interfaces/weather-forecasting-infor';
import { ForecastingService } from '../services/forecasting.service';
import { ShareCityNameService } from '../services/share-city-name.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit, OnDestroy {
  sub?: Subscription;
  cityName: string = 'New York';
  fiveDaysForecasting: WeatherForecastingInfor[] = [];
  constructor(
    private fs: ForecastingService,
    private shareCityName: ShareCityNameService
  ) {}
  ngOnInit(): void {
    this.sub = this.shareCityName.subj.subscribe((val: any) => {
      console.log(`data : ${val}, ${typeof val}`);
      this.cityName = val;
    });
    console.log(`City Name in Forecast : ${this.cityName}`);
    this.getFiveDaysForecast();
  }

  // Get 5-days forecasting
  getFiveDaysForecast(): void {
    this.fiveDaysForecasting = this.fs.getForecastingWeatherArr(this.cityName);
    console.log(this.fiveDaysForecasting);
  }
  // Handle Form
  // onSubmit(form: NgForm) {
  //   this.cityName = form.value.cityName;
  //   console.log(`Forecasting city name: ${this.cityName}`);
  //   this.getFiveDaysForecast();
  // }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
