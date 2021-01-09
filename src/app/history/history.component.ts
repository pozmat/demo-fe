import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor() { }

  history: any;

  ngOnInit(): void {
  }

}
