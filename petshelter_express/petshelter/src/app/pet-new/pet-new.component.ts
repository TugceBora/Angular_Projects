import { Component, OnInit } from '@angular/core';
import { PetShelterService } from '../pet-shelter.service';
import { ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-pet-new',
  templateUrl: './pet-new.component.html',
  styleUrls: ['./pet-new.component.css']
})
export class PetNewComponent implements OnInit {
  newPet;

  constructor(private _PetShelterservice: PetShelterService,
  
      private _route: ActivatedRoute,
      private _router: Router,
      private _petShelterService: PetShelterService
  
    ) { }

  ngOnInit() {
    this.newPet={
      name:'',
      type:'',
      description:'',
      skill1:'',
      skill2:'',
      skill3:''
    }
  }
  createPet(){
    const tempObservable= this._PetShelterservice.createPet(this.newPet)
    tempObservable.subscribe(
      (response) => {
        console.log(response);
        this._router.navigateByUrl('/pets/list');
      },
      (error) => {
        console.log(error);
      });
    }
}
