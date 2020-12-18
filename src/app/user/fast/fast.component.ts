import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fast',
  templateUrl: './fast.component.html',
  styleUrls: ['./fast.component.scss']
})
export class FastComponent implements OnInit {

  time: number;

  constructor() { }

  ngOnInit(): void {
    this.time = new Date().getTime()
  }

}
