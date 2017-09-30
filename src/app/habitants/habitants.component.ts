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
  public tests = ['test1', 'test2'];
  public data: any;
  public city: string;
  public list: any[] = [];
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
}
