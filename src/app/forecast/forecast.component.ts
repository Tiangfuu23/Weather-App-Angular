import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherForecastingInfor } from '../interfaces/weather-forecasting-infor';
import { ForecastingService } from '../services/forecasting.service';
import { ShareCityNameService } from '../services/share-city-name.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SpinnerService } from '../services/ui/spinner.service';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit, OnDestroy {
  sub?: Subscription;
  cityName: string = 'Ha Noi';
  fiveDaysForecasting: WeatherForecastingInfor[] = [];
  constructor(
    private fs: ForecastingService,
    private shareCityName: ShareCityNameService,
    private router: Router,
    public spinnerS: SpinnerService
  ) {}
  ngOnInit(): void {
    this.spinnerS.showSpinner = true;
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
    // console.log(this.fiveDaysForecasting);
  }
  // navigate back to main page
  navigateToCurrent(): void {
    // console.log(`navigate to current`);
    // console.log(e);
    this.router.navigate([``]);
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
