import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './component/landing/landing.component';
import { LandingHeaderComponent } from './component/landing/landing-header/landing-header.component';
import { LoginRegistrationComponent } from './component/landing/login-registration/login-registration.component';
import { CustomCarouselComponent } from './component/landing/custom-carousel/custom-carousel.component';
import { LoginComponent } from './component/landing/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './component/landing/registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './component/admin/admin.component';
import { AdminNavComponent } from './component/admin/admin-nav/admin-nav.component';
import { ProductAddComponent } from './component/admin/product-add/product-add.component';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { ProductViewComponent } from './component/admin/product-view/product-view.component';
import { ProductComponent } from './component/admin/product-view/product/product.component';
import { ProductEditComponent } from './component/admin/product-edit/product-edit.component';
import { AdminPasswordComponent } from './component/admin/admin-password/admin-password.component';
import { OfferComponent } from './component/admin/offer/offer.component';
import { OfferAddComponent } from './component/admin/offer/offer-add/offer-add.component';
import { OfferViewComponent } from './component/admin/offer/offer-view/offer-view.component';
import { ShoppingComponent } from './component/shopping/shopping.component';
import { ShoppingNavComponent } from './component/shopping/shopping-nav/shopping-nav.component';
import { ShoppingCarouselComponent } from './component/shopping/shopping-carousel/shopping-carousel.component';
import { ProductsComponent } from './component/shopping/products/products.component';
import { ProductShopComponent } from './component/shopping/products/product-shop/product-shop.component';
import { CartMainComponent } from './component/shopping/cart-main/cart-main.component';
import { MainShoppingComponent } from './component/shopping/main-shopping/main-shopping.component';
import { CartsComponent } from './component/shopping/cart-main/carts/carts.component';
import { CartComponent } from './component/shopping/cart-main/carts/cart/cart.component';
import { BillingComponent } from './component/shopping/cart-main/billing/billing.component';
import { CustomPipe } from './pipe/custom.pipe';
import { UserComponent } from './component/admin/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingHeaderComponent,
    LoginRegistrationComponent,
    CustomCarouselComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    AdminNavComponent,
    ProductAddComponent,
    AdminHomeComponent,
    ProductViewComponent,
    ProductComponent,
    ProductEditComponent,
    AdminPasswordComponent,
    OfferComponent,
    OfferAddComponent,
    OfferViewComponent,
    ShoppingComponent,
    ShoppingNavComponent,
    ShoppingCarouselComponent,
    ProductsComponent,
    ProductShopComponent,
    CartMainComponent,
    MainShoppingComponent,
    CartsComponent,
    CartComponent,
    BillingComponent,
    CustomPipe,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
