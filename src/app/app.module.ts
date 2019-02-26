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
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';

const appRoutes = [
  {path: "", component: InputComponent},
  {path: "chance/:location", component: PercentageComponent, data: {animation: 'routeAnimations'}},
  {path: "about", component: AboutComponent},
  {path: "*", component: NotfoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    PercentageComponent,
    InputComponent,
    NavComponent,
    NotfoundComponent,
    AboutComponent,
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
