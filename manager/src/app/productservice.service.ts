import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor( private _http: HttpClient) { }

  getAllProducts(){
    return this._http.get('/api/products');
  }
  createProduct (product){
    console.log('create',product);
    return this._http.post('/api/products/new',product);
  }
  getProduct (id){
    console.log ('==>Product');
    return this._http.get('/api/product/' + id);
  }
  deleteProduct (id){
    return this._http.delete('/api/products/'+ id);
  }
  updateProducts(editProduct){
    return this._http.put('/api/products/'+ editProduct._id, editProduct);
  } 
}

