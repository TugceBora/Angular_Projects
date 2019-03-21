import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product: any;
  products: any;
  productdetails: any;

  constructor(private _ProductserviceService: ProductserviceService) { 
    this.products = [];
    this.product = {name:'', qty:0, price:0};
    this.getProducts();
  }

  getProducts() {
    const tempObservable=this._ProductserviceService.getAllProducts();
    tempObservable.subscribe(
    (products) =>{
      console.log ('Success:',products)
        this.products = products;
    },
    (err)=>{
      console.log ('Error:',err);

    }      
    );
  }
   

  ngOnInit() {
  }

}
