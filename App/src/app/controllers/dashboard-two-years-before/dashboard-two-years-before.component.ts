import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-dashboard-two-years-before',
  templateUrl: './dashboard-two-years-before.component.html',
  styleUrls: ['./dashboard-two-years-before.component.css']
})
export class DashboardTwoYearsBeforeComponent implements OnInit {

  saftFile: any;

  constructor(public rest: RestService) { }

  ngOnInit(): void {
    this.rest.getSaftFile().subscribe((data: {}) => {
      console.log(data);
      this.saftFile = data;
    });
  }

}
