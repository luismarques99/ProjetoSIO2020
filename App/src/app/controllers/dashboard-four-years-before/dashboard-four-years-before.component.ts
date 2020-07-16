import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-dashboard-four-years-before',
  templateUrl: './dashboard-four-years-before.component.html',
  styleUrls: ['./dashboard-four-years-before.component.css']
})
export class DashboardFourYearsBeforeComponent implements OnInit {

  saftFile: any;

  constructor(public rest: RestService) { }

  ngOnInit(): void {
    this.rest.getSaftFile().subscribe((data: {}) => {
      console.log(data);
      this.saftFile = data;
    });
  }

}
