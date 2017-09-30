import { Injectable } from '@angular/core';

@Injectable()
export class DataStore {
    private data: any;
    private cities: string[];

    constructor() {}

    public getCountriesHabitants(country: string): any {
        return this.data[country];
    }

    public get _cities() {
        return this.cities;
    }

    public initData(data: any) {
        this.data = data;
        this.cities = Object.keys(data);
    }

}

