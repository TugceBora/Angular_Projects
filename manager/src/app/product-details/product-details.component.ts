import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productserviceService: ProductserviceService
  ) { }

  ngOnInit() {
    this.product = [];
    this.product = {

      name:'',
      qty:0,
      price:0
    };
    this._route.params.subscribe((params: Params) => {
      this._productserviceService.getProduct(params['id'])
        .subscribe(
          (product) => {
            this.product = product;
          },
          (err) => { console.log(err); }
        );
    })

  }
  getAllProducts() {
    this._productserviceService.getAllProducts()
    .subscribe(
      (products) => {
        this.product = products;
      },
      (err) => { console.log(err); }
    );
  }

  deleteProduct(id) {
    this._productserviceService.deleteProduct(id)
    .subscribe(
      (res) => {
        this.getAllProducts();

      },
      (err) => { console.log (err);}
    )
  }

}
