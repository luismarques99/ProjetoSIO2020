import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-tables-sales',
  templateUrl: './tables-sales.component.html',
  styleUrls: ['./tables-sales.component.css']
})
export class TablesSalesComponent implements OnInit {

  saftFile: any;
  sales: any;

  constructor(public rest: RestService) { }

  ngOnInit(): void {
    this.rest.getCurrentYearSaftFile().subscribe((data: {}) => {
      console.log(data);
      this.saftFile = data;
      this.sales = this.saftFile.data.GeneralLedgerEntries[0].Journal[1].Transaction;
    });
  }

}
