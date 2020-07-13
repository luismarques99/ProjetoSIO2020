import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-tables-customers',
  templateUrl: './tables-customers.component.html',
  styleUrls: ['./tables-customers.component.css']
})
export class TablesCustomersComponent implements OnInit {

  saftFile: any;
  customers: any;

  constructor(public rest: RestService) { }

  ngOnInit(): void {
    this.rest.getSaftFile().subscribe((data: {}) => {
      console.log(data);
      this.saftFile = data;
      this.customers = this.saftFile.data.MasterFiles[0].Customer;
    });
  }

}
