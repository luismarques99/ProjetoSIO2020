import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-tables-taxes',
  templateUrl: './tables-taxes.component.html',
  styleUrls: ['./tables-taxes.component.css']
})
export class TablesTaxesComponent implements OnInit {

  saftFile: any;
  taxes: any;

  constructor(public rest: RestService) { }

  ngOnInit(): void {
    this.rest.getCurrentYearSaftFile().subscribe((data: {}) => {
      console.log(data);
      this.saftFile = data;
      this.taxes = this.saftFile.data.MasterFiles[0].TaxTable[0].TaxTableEntry;
    });
  }

}
