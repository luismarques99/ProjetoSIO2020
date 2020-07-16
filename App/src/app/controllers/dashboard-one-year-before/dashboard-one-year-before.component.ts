import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-dashboard-one-year-before',
  templateUrl: './dashboard-one-year-before.component.html',
  styleUrls: ['./dashboard-one-year-before.component.css']
})
export class DashboardOneYearBeforeComponent implements OnInit {

  saftFile: any;

  constructor(public rest: RestService) { }

  ngOnInit(): void {
    this.rest.getSaftFile().subscribe((data: {}) => {
      console.log(data);
      this.saftFile = data;
    });
  }

}
