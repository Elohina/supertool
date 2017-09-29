import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';

import { HabitantsComponent } from './habitants.component';

import { Habitant } from './shared/habitants-class.service';
import { HabitantsService } from './shared/habitants.service';

@NgModule({
  declarations: [
    HabitantsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HabitantsComponent,
  ],
  providers: [Habitant, HabitantsService, Http],
  bootstrap: [HabitantsComponent]
})
export class HabitantsModule { }
