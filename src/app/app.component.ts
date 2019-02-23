import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, slideInDown } from 'ng-animate';
import {RouterOutlet} from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInDown', [transition('* => *', useAnimation(slideInDown))]),
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))]),
    trigger('routeAnimations', [transition('* <=> *', useAnimation(fadeIn))])
  ]})
export class AppComponent {
  title = 'snowday';
  slideInUp: any;
  fadeIn: any;
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  
}
