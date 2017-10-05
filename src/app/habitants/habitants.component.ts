import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { DataStore } from '../shared/data-store.service';

@Component({
  selector: 'app-habitants',
  templateUrl: './habitants.component.html',
  styleUrls: ['./habitants.component.css']
})
export class HabitantsComponent implements OnInit {
  public cities: string[];
  public data: any;
  public city: string;
  public list: any[] = [];
  public search_input: string;
  public ageFilters = [
    {name: 'All', start: -1, end: -1},
    {name: '0 - 20 years old', start: 0, end: 20},
    {name: '20 - 50 years old', start: 20, end: 50},
    {name: '50 - 100 years old', start: 50, end: 100},
    {name: '100 - 200 years old', start: 100, end: 200},
    {name: '200 - 300 years old', start: 200, end: 300},
    {name: '300 - more', start: 300, end: 10000},
  ];
  public selected_age: any = {};

  constructor(private dataService: DataService,
              private dataStore: DataStore) {}
  ngOnInit() {
    this.dataService.getData().subscribe(
      (data: any) => {
        this.cities = this.dataStore._cities;
      }
    );
  }

  selectedCity() {
    this.list = this.dataStore.getCountriesHabitants(this.city);
  }

  searchHabitant() {
    if (this.city) {
      this.list = this.dataStore.searchHabitant(this.search_input, this.city);
    }
  }

  selectedAge() {
    if (this.city && this.selected_age) {
      this.list = this.dataStore.getHabitanstByAge(this.city, this.selected_age.start, this.selected_age.end);
    }
  }

}
