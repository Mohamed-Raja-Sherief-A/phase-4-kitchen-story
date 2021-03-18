import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { AdminComponent } from './component/admin/admin.component';
import { ProductComponent } from './component/product/product.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductDetialsComponent } from './component/product-detials/product-detials.component';
import { PasswordComponent } from './component/password/password.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './component/shopping-cart/products/products.component';
import { OneprodComponent } from './component/shopping-cart/products/oneprod/oneprod.component';
import { CartsComponent } from './component/shopping-cart/carts/carts.component';
import { CartComponent } from './component/shopping-cart/carts/cart/cart.component';
import { SearchPipe } from './pipes/search/search.pipe';
import { UserformComponent } from './component/userform/userform.component';
//Main Module with declaration ,imports
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    ProductComponent,
    ProductAddComponent,
    ProductListComponent,
    ProductDetialsComponent,
    PasswordComponent,
    ShoppingCartComponent,
    ProductsComponent,
    OneprodComponent,
    CartsComponent,
    CartComponent,
    SearchPipe,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
