import { Injectable } from '@angular/core';
import { AppConfig } from '../../app.config';
import {
    HttpModule,
    Http,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';

@Injectable()
export class HabitantsService {
    constructor(private http: Http) {}

    getHabitants() {
        return this.http.get(
            AppConfig.API_URL
        );
    }
}
