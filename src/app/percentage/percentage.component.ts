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
  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {
  }
  showValue(loc: string) {
    this.apiService.getValue(loc).subscribe((data: APIResponse) => {
      this.percentage = data.chance
      if (data.error) {
        this.error = data.error
      }
    })
  }
  ngOnInit() { 
    this.showValue(this.route.snapshot.params.location)
  }

}
