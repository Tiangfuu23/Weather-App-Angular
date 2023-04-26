import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherInfor } from '../interfaces/weather-infor';
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
    this.myWeather = this.ws.getLocalWeather('Ha Noi');
    console.log(this.myWeather);
  }
}
