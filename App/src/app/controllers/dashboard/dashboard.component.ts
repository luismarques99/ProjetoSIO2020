import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  saftFile: any;
  accounts: any;
  customers: any;
  suppliers: any;
  products:any;
  taxes:any;
  purchases: any;
  sales: any;

  constructor(public rest: RestService) { }

  ngOnInit(): void {
    this.rest.getSaftFile().subscribe((data: {}) => {
      console.log(data);
      this.saftFile = data;
      this.accounts = this.saftFile.data.MasterFiles[0].GeneralLedgerAccounts[0].Account;
      this.customers = this.saftFile.data.MasterFiles[0].Customer;
      this.suppliers = this.saftFile.data.MasterFiles[0].Supplier;
      this.products = this.saftFile.data.MasterFiles[0].Product;
      this.taxes = this.saftFile.data.MasterFiles[0].TaxTable[0].TaxTableEntry;
      this.purchases = this.saftFile.data.GeneralLedgerEntries[0].Journal[0].Transaction;
      this.sales = this.saftFile.data.GeneralLedgerEntries[0].Journal[1].Transaction;
    });
  }

}
