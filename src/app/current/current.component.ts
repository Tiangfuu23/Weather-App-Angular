import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherInfor } from '../interfaces/weather-infor';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss'],
})
export class CurrentComponent implements OnInit {
  myWeather: WeatherInfor = {};
  myWeatherArr: WeatherInfor[] = [];
  // defaultOn: boolean = true;
  constructor(private ws: WeatherService, private router: Router) {}
  ngOnInit() {
    // this.myWeatherArr.push(this.ws.getCurrentWeather());
    this.myWeatherArr.push(this.ws.getLocalWeather('Ho Chi Minh'));
    this.myWeatherArr.push(this.ws.getLocalWeather('Ha Noi'));
    console.log(`this.myWeatherArr:`, this.myWeatherArr);
  }
  onSubmit(weather: NgForm) {
    // this.defaultOn = false;
    console.log(`Form:`, weather);
    this.myWeatherArr = [];
    this.myWeatherArr.push(this.ws.getLocalWeather(weather.value.city));
  }
  // Navigation
  navigateToForecasting(): void {
    console.log(`navigating`);
    this.router.navigate([`forecast`]);
  }
}
