import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { DataStore } from '../shared/data-store.service';
import {PageEvent} from '@angular/material';

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

}
