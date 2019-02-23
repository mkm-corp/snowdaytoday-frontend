import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PercentageComponent } from './percentage/percentage.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    PercentageComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule 
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
