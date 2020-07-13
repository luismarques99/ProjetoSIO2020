import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  saftFile: any;

  constructor(public rest: RestService) { }

  ngOnInit(): void {
    this.rest.getSaftFile().subscribe((data: {}) => {
      console.log(data);
      this.saftFile = data;
    });
  }

}
