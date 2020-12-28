import { Component, OnInit } from '@angular/core';
import add from 'date-fns/add';
import getTime from 'date-fns/getTime';
import toDate from 'date-fns/toDate';
@Component({
  selector: 'app-fast',
  templateUrl: './fast.component.html',
  styleUrls: ['./fast.component.scss']
})
export class FastComponent implements OnInit {

  time: number;

  constructor() { }

  ngOnInit(): void {
    console.log(new Date());
    console.log(add(new Date(), {hours: 16}));
    console.log(getTime(new Date()));
    console.log(toDate(
      getTime(new Date())
    ));
  }

}
