import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public res: any;

  constructor(private weatherAPI: WeatherService) {}

  ngOnInit() { this.getWeatherData(); }

  getWeatherData() {

    const inspect = obj => {
      for (const prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          console.log(`${prop}: ${obj[prop]}`)
        }
      }
    }

    this.weatherAPI.getWeatherData().subscribe((response: any) => {
      this.res = response;
      inspect(this.res);
      console.log('------------');
      inspect(this.res.current_weather);

      console.log(this.res);
    });
  }
}
