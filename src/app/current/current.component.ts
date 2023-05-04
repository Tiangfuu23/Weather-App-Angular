import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherInfor } from '../interfaces/weather-infor';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareCityNameService } from '../services/share-city-name.service';
import { SpinnerService } from '../services/ui/spinner.service';
@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss'],
})
export class CurrentComponent implements OnInit {
  // myWeather: WeatherInfor = {};
  myWeatherArr: WeatherInfor[] = [];
  // defaultOn: boolean = true;
  constructor(
    private ws: WeatherService,
    private router: Router,
    private shareData: ShareCityNameService,
    public spinnerS: SpinnerService
  ) {}
  ngOnInit() {
    // this.myWeatherArr.push(this.ws.getCurrentWeather());
    this.myWeatherArr.push(this.ws.getLocalWeather('Ho Chi Minh'));
    this.myWeatherArr.push(this.ws.getLocalWeather('Ha Noi'));
    // console.log(`this.myWeatherArr:`, this.myWeatherArr);
    /*** UI ****/
    this.spinnerS.showSpinner = true;
  }
  onSubmit(weather: NgForm) {
    // this.defaultOn = false;
    // console.log(`Form:`, weather);
    this.myWeatherArr = [];
    this.spinnerS.showSpinner = true;
    this.myWeatherArr.push(this.ws.getLocalWeather(weather.value.city));
  }
  // Navigation
  navigateToForecasting(cityName: string | undefined): void {
    // console.log(`City Name in Current ${cityName}`);
    this.shareData.sentCityName(cityName);
    this.router.navigate([`forecast`], {
      skipLocationChange: true,
    });
  }
}
