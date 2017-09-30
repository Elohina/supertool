import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import {SharedModule} from '../shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HabitantsListComponent} from './habitants-list/habitants-list.component';
import {HabitantDetailComponent} from './habitant-detail/habitant-detail.component';


import { HabitantsComponent } from './habitants.component';

import { MatSelectModule,
  MatInputModule,
  MatCardModule,
  MatGridListModule,
  MatButtonModule,
  MatToolbarModule,
  MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [
    HabitantsComponent,
    HabitantsListComponent,
    HabitantDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatPaginatorModule
  ],
  exports: [
    HabitantsComponent
  ],
  providers: [],
  bootstrap: [HabitantsComponent]
})
export class HabitantsModule { }
