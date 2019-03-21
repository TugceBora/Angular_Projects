import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { PetNewComponent } from '../pet-new/pet-new.component';
import { PetShelterService } from '../pet-shelter.service';



@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {
  editpet;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _petShelterService: PetShelterService

  ) { }

  ngOnInit() {
      this.editpet={
        name:'',
        type:'',
        description:'',
      }

      this._route.params.subscribe((params: Params) =>{
      this._petShelterService.getPet(params ['id'])
      .subscribe(
       (pet) =>{
         this.editpet = pet;
       },
       (err) => {console.log(err)}
      );
    });
  }

  updatePet(){
    this._petShelterService.updatePet(this.editpet)
    .subscribe(
      (response) => {
        this._router.navigateByUrl('/pets/' + this.editpet._id);
      },
      (err)=>{console.log (err);}
    )
  }

}
