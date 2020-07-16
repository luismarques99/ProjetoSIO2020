import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-tables-products',
  templateUrl: './tables-products.component.html',
  styleUrls: ['./tables-products.component.css']
})
export class TablesProductsComponent implements OnInit {

  saftFile: any;;
  products: any;

  constructor(public rest: RestService) { }

  ngOnInit(): void {
    this.rest.getCurrentYearSaftFile().subscribe((data: {}) => {
      console.log(data);
      this.saftFile = data;
      this.products = this.saftFile.data.MasterFiles[0].Product;
    });
  }

}
