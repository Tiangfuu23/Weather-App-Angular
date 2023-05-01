import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherInfor } from '../interfaces/weather-infor';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss'],
})
export class CurrentComponent implements OnInit {
  myWeather: WeatherInfor = {};
  myWeatherArr: WeatherInfor[] = [];
  constructor(private ws: WeatherService) {}
  ngOnInit() {
    // this.myWeatherArr.push(this.ws.getCurrentWeather());
    this.myWeatherArr.push(this.ws.getLocalWeather('Ho Chi Minh'));
    console.log('this.myWeatherArr:', this.myWeatherArr);
    this.myWeatherArr.push(this.ws.getLocalWeather('Can Tho'));
    console.log('this.myWeatherArr:', this.myWeatherArr);
    this.myWeatherArr.push(this.ws.getLocalWeather('Ha Noi'));
    console.log(`this.myWeatherArr:`, this.myWeatherArr);
  }
  onSubmit(weather: NgForm) {
    console.log(`Form:`, weather);
    this.myWeather = this.ws.getLocalWeather(weather.value.city);
  }
}
