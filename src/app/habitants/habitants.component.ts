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
  public habitants: any[];

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

  seachHabitant() {
    if (this.city) {
      this.list = this.dataStore.searchHabitant(this.search_input, this.city);
    }
  }
}
