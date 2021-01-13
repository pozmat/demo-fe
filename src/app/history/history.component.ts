import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private http: HttpClient, private detector: ChangeDetectorRef) { }

  url = 'http://35.241.236.231:8080/api/v1/history'

  history: any;

  ngOnInit(): void {
  }

  requestHistory() {
    console.log('sent a GET')
    this.http.get(this.url).toPromise().then((data) => {
      console.warn(data);
      this.history = JSON.stringify(data);
      this.detector.markForCheck();
    })

  }

}
