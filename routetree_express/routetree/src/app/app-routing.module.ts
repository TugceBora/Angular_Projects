import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { BrandComponent } from './products/brand/brand.component';
import { DetailsComponent } from './products/details/details.component';
import { CategoryComponent } from './products/category/category.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AuthorComponent } from './reviews/author/author.component';
import { AllComponent } from './reviews/all/all.component';
import { ReviewdetailComponent } from './reviews/reviewdetail/reviewdetail.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent, 
  children:[
    {path:'brand/:brand',component:BrandComponent},
    {path:'details/:id',component:DetailsComponent},
    {path:'category/:cat',component:CategoryComponent}
  
  ]
},

{
  path: 'reviews', component: ReviewsComponent, 
children:[
  {path:'details/:id',component:ReviewdetailComponent},
  {path:'author/:id',component:DetailsComponent},
  {path:'all/:id',component:CategoryComponent}

]
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
