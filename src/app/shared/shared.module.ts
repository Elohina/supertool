import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { DataStore } from './data-store.service';
import { Http } from '@angular/http';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [DataService, DataStore, Http],
})
export class SharedModule { }
