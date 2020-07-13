import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-tables-purchases',
  templateUrl: './tables-purchases.component.html',
  styleUrls: ['./tables-purchases.component.css']
})
export class TablesPurchasesComponent implements OnInit {

  saftFile: any;
  purchases: any;

  constructor(public rest: RestService) { }

  ngOnInit(): void {
    this.rest.getSaftFile().subscribe((data: {}) => {
      console.log(data);
      this.saftFile = data;
      this.purchases = this.saftFile.data.GeneralLedgerEntries[0].Journal[0].Transaction;
    });
  }
}
