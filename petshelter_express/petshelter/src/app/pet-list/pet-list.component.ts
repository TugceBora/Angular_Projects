import { Component, OnInit } from '@angular/core';
import { PetShelterService } from '../pet-shelter.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pet: any;
  pets: any;
  petdetails: any;


  constructor(private _PetShelterService: PetShelterService) { 
    this.pets = [];
    this.pet = {name:'', type:'', description:'', skill1:'', skill2:'', skill3:''};
    this.getPets();

  }

  getPets(){
    const tempObservable=this._PetShelterService.getPets();
    tempObservable.subscribe(
    (pets) =>{
      console.log ('Success:',pets)
        this.pets = pets;
    },
    (err)=>{
      console.log ('Error:',err);

    }      
    );
  }
    

  ngOnInit() {
  }

}
