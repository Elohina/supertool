import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-habitants-list',
  templateUrl: './habitants-list.component.html',
  styleUrls: ['./habitants-list.component.css']
})
export class HabitantsListComponent {
  @Input('list') list: any;
}
