import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-dashboard-three-years-before',
  templateUrl: './dashboard-three-years-before.component.html',
  styleUrls: ['./dashboard-three-years-before.component.css']
})
export class DashboardThreeYearsBeforeComponent implements OnInit {

  saftFile: any;

  constructor(public rest: RestService) { }

  ngOnInit(): void {
    this.rest.getSaftFile().subscribe((data: {}) => {
      console.log(data);
      this.saftFile = data;
    });
  }

}
