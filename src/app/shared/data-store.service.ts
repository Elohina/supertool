import { Injectable } from '@angular/core';

@Injectable()
export class DataStore {
    private data: any;
    private cities: string[];

    constructor() {}

    public getCountriesHabitants(country: string, total?: number): any {
        return this.data[country];
    }

    public get _cities(): any[] {
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

    public getHabitanstByAge(city: string, start: number, end: number): any[] {
      if (start >= 0) {
        return this.data[city].filter((element) => {
          return element.age >= start && element.age < end;
        });
      } else {
        return this.data[city];
      }
    }
}
