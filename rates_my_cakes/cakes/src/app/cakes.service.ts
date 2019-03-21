import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private _http: HttpClient ) { }

  getCakes (){
    return this._http.get('/cakes');
  }
  createCake (cake){
    console.log ('create',cake);
    return this._http.post('/cakes',cake);
  }
}
