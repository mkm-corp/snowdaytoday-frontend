import { Component, OnInit, Input } from '@angular/core';
import { ApiService, APIResponse } from '../api.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'
import {switchMap} from 'rxjs/operators'
import { fadeIn } from 'ng-animate';

@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.scss'],
  providers: [ApiService],
})
export class PercentageComponent implements OnInit {
  percentage: number
  error: string
  date: Date
  dateString: string
  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {
  }
  showValue(loc: string) {
    this.apiService.getValue(loc).subscribe((data: APIResponse) => {
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',' December']
      this.percentage = data.chance
      if (data.error) {
        this.error = data.error
      }
      this.date = new Date(data.date)
      this.dateString = days[this.date.getDay()]+", "+months[this.date.getMonth()]+" "+this.date.getDay()+1
    })
  }
  ngOnInit() { 
    this.showValue(this.route.snapshot.params.location)
  }

}
