import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './users/login/login.component';
//import { AboutComponent } from './about/about.component'
//import { SignInHomePageComponent } from './sign-in-home-page/sign-in-home-page.component'
import { PieComponent } from './pie/pie.component'
import { OurProductsComponent } from './our-products/our-products.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartEditComponent } from './shopping-cart-edit/shopping-cart-edit.component';
import { BigSpendersComponent } from './big-spenders/big-spenders.component';
import { OrdersComponent } from './orders/orders.component';
//import { DetailsOrderComponent } from './details-order/details-order.component';
import { SignInViewComponent } from './sign-in-view/sign-in-view.component';


const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign', component: SignInViewComponent },
  //{ path: 'about', component: AboutComponent },
 // { path: 'sn-home-page', component: SignInHomePageComponent },
  { path: 'pie', component: PieComponent },
  { path: 'our-products', component: OurProductsComponent },
  { path: 'product-create', component: ProductCreateComponent },
  { path: 'product-edit/:product._id/:product.name/:product.price/:product.quantity/:product.category', component: ProductEditComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'shopping-cart-edit/:shopping._id/:shopping.name/:shopping.price/:shopping.quantity/:shopping.category', component: ShoppingCartEditComponent },
  { path: 'big-spenders', component: BigSpendersComponent },
  { path: 'orders', component: OrdersComponent },
 // { path: 'app-details-order/:order.cart', component: DetailsOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
