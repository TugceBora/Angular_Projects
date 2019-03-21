import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  newProduct; 
  nameError;
  qtyError;
  priceError;


  constructor(
    private _ProductserviceService: ProductserviceService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
      this.nameError = '',
      this.qtyError = 0,
      this.priceError = 0,
      this.newProduct = {
        name: '',
        qty: 0,
        price: 0

      }
  }
  createProduct() {
    const tempObservable = this._ProductserviceService.createProduct(this.newProduct)
    tempObservable.subscribe(
      (response) => {

        if (response['status']) {
          this._router.navigateByUrl('/products/list');
        } else {
          console.log(response['error']['errors']);
          if (response['error']['errors']['name']) {
            this.nameError = response['error']['errors']['name']['message']
          } else { this.nameError = '' }
          if (response['error']['errors']['qty']) {
            this.qtyError = response['error']['errors']['qty']['message']
          } else { this.qtyError };
          if (response['error']['errors']['price']) {
            this.priceError = response['error']['errors']['price']['message']
          } else {
            this.priceError = '';
          }

        }
      },
      (error) => {
        console.log(error);
      })
      }
    
    }
