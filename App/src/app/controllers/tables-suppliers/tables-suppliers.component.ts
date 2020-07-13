import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-tables-suppliers',
  templateUrl: './tables-suppliers.component.html',
  styleUrls: ['./tables-suppliers.component.css']
})
export class TablesSuppliersComponent implements OnInit {

  saftFile: any;
  suppliers: any;

  constructor(public rest: RestService) { }

  ngOnInit(): void {
    this.rest.getSaftFile().subscribe((data: {}) => {
      console.log(data);
      this.saftFile = data;
      this.suppliers = this.saftFile.data.MasterFiles[0].Supplier;
    });
  }

}
