import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './users/login/login.component';
import { ShoppingListComponent } from './product/shopping-list/shopping-list.component';
import { SignInComponent } from './users/sign-in/sign-in.component'
import { AboutComponent } from './about/about.component'
import { SignInHomePageComponent } from './sign-in-home-page/sign-in-home-page.component'
import { PieComponent } from './pie/pie.component'
import { OurProductsComponent } from './our-products/our-products.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartEditComponent } from './shopping-cart-edit/shopping-cart-edit.component';
import { BigSpendersComponent } from './big-spenders/big-spenders.component';
import { OrdersComponent } from './orders/orders.component';
import { DetailsOrderComponent } from './details-order/details-order.component';


const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign', component: SignInComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sn-home-page', component: SignInHomePageComponent },
  { path: 'app-pie', component: PieComponent },
  { path: 'app-our-products', component: OurProductsComponent },
  { path: 'app-product-create', component: ProductCreateComponent },
  { path: 'app-product-edit/:product._id/:product.name/:product.price/:product.quantity/:product.category', component: ProductEditComponent },
  { path: 'app-shopping-cart', component: ShoppingCartComponent },
  { path: 'app-shopping-cart-edit/:shopping._id/:shopping.name/:shopping.price/:shopping.quantity/:shopping.category', component: ShoppingCartEditComponent },
  { path: 'app-big-spenders', component: BigSpendersComponent },
  { path: 'app-orders', component: OrdersComponent },
  { path: 'app-details-order/:order.cart', component: DetailsOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
