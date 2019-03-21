import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/products/list'},
  {path:'products/list', component:ProductListComponent},
  {path:'products/new', component: ProductNewComponent},
  {path:'products/:id/edit', component:ProductEditComponent},
  {path:'products/:id', component:ProductDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
