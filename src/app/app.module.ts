import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
// Import Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ForecastComponent } from './forecast/forecast.component';
import { CurrentComponent } from './current/current.component';
// Import Service
import { WeatherService } from './services/weather.service';

const AppRoute: Routes = [
  {
    path: '',
    component: CurrentComponent,
  },
  {
    path: 'forecast',
    component: ForecastComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ForecastComponent,
    CurrentComponent,
  ],
  imports: [BrowserModule, HttpClientModule ,AppRoutingModule, RouterModule.forRoot(AppRoute)],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
