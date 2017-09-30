import { Injectable } from '@angular/core';
import { AppConfig } from '../app.config';
import { DataStore } from './data-store.service';
import {
    HttpModule,
    Http,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    constructor(private http: Http, private dataStore: DataStore) {}

    getData(): Observable<void> {
        return this.http.get(
            AppConfig.API_URL
        ).map(
            (data: any) => {
                return this.dataStore.initData(data.json());
            }
        );
    }
}
