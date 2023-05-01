import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
// Import Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ForecastComponent } from './forecast/forecast.component';
import { CurrentComponent } from './current/current.component';
// Import Service
import { WeatherService } from './services/weather.service';
import { ToolBoxService } from './services/tool-box.service';
import { ForecastingService } from './services/forecasting.service';

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
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(AppRoute),
  ],
  providers: [WeatherService, ForecastingService, ToolBoxService],
  bootstrap: [AppComponent],
})
export class AppModule {}
