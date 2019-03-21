import { Component, OnInit } from '@angular/core';
import { PetShelterService } from '../pet-shelter.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pet-home',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
  pet;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _petShelterService: PetShelterService
  ) { }

  ngOnInit() {
    this.pet=[];
    this.pet = {

      name: '',
      type: '',
      description: '',
      skill1: '',
      skill2: '',
      skill3: ''

    };
    this._route.params.subscribe((params: Params) => {
      this._petShelterService.getPet(params['id'])
        .subscribe(
          (pet) => {
            this.pet = pet;
          },
          (err) => { console.log(err); }
        );
    })

  }

  getPets() {
    this._petShelterService.getPets()
    .subscribe(
      (pets) => {
        this.pet = pets;
      },
      (err) => { console.log(err); }
    );
  }

  deletePet(id) {
    this._petShelterService.deletePet(id)
    .subscribe(
      (res) => {
        this.getPets();

      },
      (err) => { console.log (err);}
    )
  }



}
