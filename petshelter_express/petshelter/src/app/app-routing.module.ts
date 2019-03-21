import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetNewComponent } from './pet-new/pet-new.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/'},
  {path:'pets/list', component:PetListComponent},
  {path:'pets/new', component: PetNewComponent},
  {path:'pets/:id/edit', component:PetEditComponent},
  {path:'pets/:id', component:PetDetailsComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
