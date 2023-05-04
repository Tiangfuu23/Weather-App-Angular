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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareCityNameService } from './services/share-city-name.service';
import { SpinnerService } from './services/ui/spinner.service';
//
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// NGPrime
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AnimateModule } from 'primeng/animate';
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
    FontAwesomeModule,
    // ngPrime
    ButtonModule,
    InputTextModule,
    ProgressSpinnerModule,
    AnimateModule,
  ],
  providers: [
    WeatherService,
    ForecastingService,
    ToolBoxService,
    ShareCityNameService,
    SpinnerService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
