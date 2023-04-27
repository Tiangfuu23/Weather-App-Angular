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
  myWeather: WeatherInfor = {
    cityName: '',
    temp: '',
    icon: '',
    weatherKind: '',
    tempMax: '',
    tempMin: '',
  };

  constructor(private ws: WeatherService) {}
  ngOnInit() {
    this.myWeather = this.ws.getCurrentWeather();
    console.log(this.myWeather);
  }
  onSubmit(weather: NgForm) {
    console.log(`Form:`, weather);
    this.myWeather = this.ws.getLocalWeather(weather.value.city);
  }
}
