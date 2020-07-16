import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-tables-accounts',
  templateUrl: './tables-accounts.component.html',
  styleUrls: ['./tables-accounts.component.css']
})
export class TablesAccountsComponent implements OnInit {

  saftFile: any;
  accounts: any;

  constructor(public rest: RestService) { }

  ngOnInit(): void {
    this.rest.getCurrentYearSaftFile().subscribe((data: {}) => {
      console.log(data);
      this.saftFile = data;
      this.accounts = this.saftFile.data.MasterFiles[0].GeneralLedgerAccounts[0].Account;
    });
  }

}
