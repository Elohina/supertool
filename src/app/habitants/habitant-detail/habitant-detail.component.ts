import { Component, Input, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-habitant-detail',
  templateUrl: './habitant-detail.component.html',
  styleUrls: ['./habitant-detail.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({transform: 'rotateY(179.9deg)'})),
      state('inactive', style({transform: 'rotateY(0)'})),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class HabitantDetailComponent {
  @Input('habitant') habitant;
  public flip = 'inactive';

  toggleFlip() {
    this.flip = this.flip === 'inactive' ? 'active' : 'inactive';
  }
}
