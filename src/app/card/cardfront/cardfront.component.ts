import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardfront',
  templateUrl: './cardfront.component.html',
  styleUrls: ['./cardfront.component.css']
})
export class CardfrontComponent implements OnInit {
   name: string = 'jaime nunes'
  constructor() { }

  ngOnInit(): void {

  }

}
