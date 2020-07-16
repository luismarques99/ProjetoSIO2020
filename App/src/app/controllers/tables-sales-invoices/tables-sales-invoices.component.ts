import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-tables-sales-invoices',
  templateUrl: './tables-sales-invoices.component.html',
  styleUrls: ['./tables-sales-invoices.component.css']
})
export class TablesSalesInvoicesComponent implements OnInit {

  saftFile: any;
  sales: any;
  salesInvoices: any;

  constructor(public rest: RestService) { }

  ngOnInit(): void {
    this.rest.getCurrentYearSaftFile().subscribe((data: {}) => {
      console.log(data);
      this.saftFile = data;
      this.sales = this.saftFile.data.GeneralLedgerEntries[0].Journal[1].Transaction;
      this.salesInvoices = this.saftFile.data.SourceDocuments[0].SalesInvoices[0].Invoice;
    });
  }

}
