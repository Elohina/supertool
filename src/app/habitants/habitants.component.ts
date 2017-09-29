import { Component, OnInit } from '@angular/core';
import { Habitant } from './shared/habitants-class.service';
import { HabitantsService } from './shared/habitants.service';

@Component({
  selector: 'app-habitants',
  templateUrl: './habitants.component.html'
//   styleUrls: ['./habitants.component.sass']
})
export class HabitantsComponent implements OnInit {
  public habitants_list: any[];
  public countries: string[];
  constructor(private habitant: Habitant,
              private habitantsService: HabitantsService) {}

    ngOnInit() {
      this.habitantsService.getHabitants().subscribe(
        (data: any) => {
          this.habitant.habitants = data.json();
          this.habitants_list = this.habitant.habitants;
          this.countries = this.habitant.getCountries();
        }
      );
    }
}
