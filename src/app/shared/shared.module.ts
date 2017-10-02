import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { DataStore } from './data-store.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [DataService, DataStore],
})
export class SharedModule { }
