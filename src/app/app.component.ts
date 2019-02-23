import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, slideInDown } from 'ng-animate';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInDown', [transition('* => *', useAnimation(slideInDown))]),
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn), {
      delay: 5
    })])
  ],
})
export class AppComponent {
  title = 'snowday';
  slideInUp: any;
  fadeIn: any;
}
