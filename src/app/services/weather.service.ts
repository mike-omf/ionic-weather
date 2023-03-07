import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })

export class WeatherService { 
    constructor(private http: HttpClient) { } 

    getWeatherData(): Observable<any> {
        const lat = -37.840935;
        const lon = 144.946457;

        const timezone = 'America/Chicago'
        const queryString = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_min&timezone=${timezone}`

        return this.http.get(queryString);
    }
}
