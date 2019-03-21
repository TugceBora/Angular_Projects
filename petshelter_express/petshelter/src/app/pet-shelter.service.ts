import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
 
@Injectable({
  providedIn: 'root'
})
export class PetShelterService {

  constructor(private _http: HttpClient) { }
  getPets(){
    return this._http.get('/api/pets/list');
  }
  createPet (pet){
    console.log('create',pet);
    return this._http.post('/api/pets/new',pet);
  }
  getPet (id){
    console.log ('==>Pet');
    return this._http.get('/api/pets/' + id);
  }
  deletePet (id){
    return this._http.delete('/api/pets/'+ id);
  }
  updatePet(editpet){
    return this._http.put('/api/pets/'+ editpet._id, editpet);
  } 
}
