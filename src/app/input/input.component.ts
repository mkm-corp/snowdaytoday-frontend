import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  location
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(value: string) {
    this.router.navigate(["/chance/"+value])
  }

}
