import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PercentageComponent } from './percentage/percentage.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';

const appRoutes = [
  {path: "", component: InputComponent},
  {path: ":location", component: PercentageComponent, data: {animation: 'routeAnimations'}}
]
@NgModule({
  declarations: [
    AppComponent,
    PercentageComponent,
    InputComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
