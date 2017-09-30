import { Injectable } from '@angular/core';

@Injectable()
export class DataStore {
    private data: any;
    private cities: string[];

    constructor() {}

    public getCountriesHabitants(country: string, total?: number): any {
        return this.data[country].slice(0, total ? total : this.data[country].length);
    }

    public get _cities() {
        return this.cities;
    }

    public initData(data: any) {
        this.data = data;
        this.cities = Object.keys(data);
    }

    public searchHabitant(text: string, city: string) {
        return this.data[city].filter(
            (person: any) => {
                return person.name.toLowerCase().match(text.toLowerCase());
            }
        );
    }
}

