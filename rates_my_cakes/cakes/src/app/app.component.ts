import { Component } from '@angular/core';
import {CakeService} from './cakes.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Cakes: any;
  Cake:any;
  CakeDetails: any;
  

  constructor (private _cakeService: CakeService){
    this.Cakes = [];
    this.Cake = {baker_name:'', url:'', comment:''}
    this.getCakes();

  }


getCakes(){
  const tempObservable=this._cakeService.getCakes();
  tempObservable.subscribe(
  (cakes) =>{
    console.log ('Success:',cakes)
      this.Cakes = cakes;
  },
  (err)=>{
    console.log ('Error:',err);

  }      
  );
}
}