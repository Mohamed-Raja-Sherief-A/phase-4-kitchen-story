import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { ProductComponent } from './component/product/product.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { PasswordComponent } from './component/password/password.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { CartsComponent } from './component/shopping-cart/carts/carts.component';
import { UserformComponent } from './component/userform/userform.component';
//Custom Routes
const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'admin',component:AdminComponent},    
  {path:'product',component:ProductComponent},
  {path:'productAdd',component:ProductAddComponent},
  {path:'productList',component:ProductListComponent},
  {path:"password",component:PasswordComponent},
  {path:"shoppingCart",component:ShoppingCartComponent},
  {path:"cart",component:CartsComponent},
  {path:"userReview",component:UserformComponent},
  {path:'**',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
