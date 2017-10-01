import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HabitantsModule } from './habitants/habitants.module';
import { HabitantsComponent } from './habitants/habitants.component';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HabitantsComponent
  ],
  imports: [
    BrowserModule,
    HabitantsModule,
    HttpModule,
    SharedModule
  ],
  exports: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
