import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherForecastingInfor } from '../interfaces/weather-forecasting-infor';
import { ForecastingService } from '../services/forecasting.service';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  cityName: string = 'Ha Noi';
  fiveDaysForecasting: WeatherForecastingInfor[] = [];
  constructor(private fs: ForecastingService) {}
  ngOnInit(): void {
    this.getFiveDaysForecast();
  }

  // Get 5-days forecasting
  getFiveDaysForecast(): void {
    this.fiveDaysForecasting = this.fs.getForecastingWeatherArr(this.cityName);
    console.log(this.fiveDaysForecasting);
  }
  // Handle Form
  onSubmit(form: NgForm) {
    this.cityName = form.value.cityName;
    console.log(`Forecasting city name: ${this.cityName}`);
    this.getFiveDaysForecast();
  }
}
