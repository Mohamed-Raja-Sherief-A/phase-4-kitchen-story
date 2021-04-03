import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { AdminPasswordComponent } from './component/admin/admin-password/admin-password.component';
import { AdminComponent } from './component/admin/admin.component';
import { OfferComponent } from './component/admin/offer/offer.component';
import { ProductAddComponent } from './component/admin/product-add/product-add.component';
import { ProductEditComponent } from './component/admin/product-edit/product-edit.component';
import { ProductViewComponent } from './component/admin/product-view/product-view.component';
import { UserComponent } from './component/admin/user/user.component';
import { LandingComponent } from './component/landing/landing.component';
import { CartMainComponent } from './component/shopping/cart-main/cart-main.component';
import { MainShoppingComponent } from './component/shopping/main-shopping/main-shopping.component';
import { ShoppingComponent } from './component/shopping/shopping.component';


const routes: Routes = [
  {path:'Landing',component:LandingComponent},
  {path:'Admin',component:AdminComponent,children:[
    {path:'Offer',component:OfferComponent},
    {path:'User',component:UserComponent},
    {path:'AddProduct',component:ProductAddComponent},
    {path:'ProductView',component:ProductViewComponent},
    {path:'Password',component:AdminPasswordComponent},
    {path:'Home',component:AdminHomeComponent},
    {path:'ProductEdit/:id',component:ProductEditComponent},
    {path:'',redirectTo:'/Admin/Home',pathMatch:'full'}
  ]},
  {path:'Shopping',component:ShoppingComponent,children:[
    {path:'CheckOut',component:CartMainComponent},
    {path:'Home',component:MainShoppingComponent},
    {path:'',redirectTo:'/Shopping/Home',pathMatch:'full'}
  ]
  },
  {path:'',redirectTo:'/Landing',pathMatch:'full'},
  {path:'**',redirectTo:'/Landing',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
