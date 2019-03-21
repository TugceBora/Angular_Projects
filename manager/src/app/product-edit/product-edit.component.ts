import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { ProductserviceService } from '../productservice.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  editProduct;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productserviceService: ProductserviceService
  ) { }

  ngOnInit() {

    this.editProduct={
      name:'',
      qty:0,
      price:0
    }
    this._route.params.subscribe((params: Params) =>{
      this._productserviceService.getProduct(params ['id'])
      .subscribe(
       (product) =>{
         this.editProduct = product;
       },
       (err) => {console.log(err)}
      );
    });
  }
  updateProducts(){
    this._productserviceService.updateProducts(this.editProduct)
    .subscribe(
      (response) => {
        this._router.navigateByUrl('/products/list');
      },
      (err)=>{console.log (err);}
    )
  }

}
