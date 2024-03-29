import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
//import { ShoppingListComponent } from './product/shopping-list/shopping-list.component';
//import { SearchComponent } from './search/search.component';
import { LoginComponent } from './users/login/login.component'
import { AgmCoreModule } from '@agm/core';
import { SignInComponent } from './users/sign-in/sign-in.component';
//import { AboutComponent } from './about/about.component';
//import { SignInHomePageComponent } from './sign-in-home-page/sign-in-home-page.component';
import { DoughnutChartComponent, PieChartComponent, BarChartComponent } from 'angular-d3-charts';
import * as d3 from 'd3';
import { PieComponent } from './pie/pie.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartEditComponent } from './shopping-cart-edit/shopping-cart-edit.component';
import { BigSpendersComponent } from './big-spenders/big-spenders.component';
import { OrdersComponent } from './orders/orders.component';
//import { DetailsOrderComponent } from './details-order/details-order.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { TopsComponent } from './tops/tops.component';
import { SignInViewComponent } from './sign-in-view/sign-in-view.component';

const socketIoConfig: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    // ShoppingListComponent,
    // SearchComponent,
    LoginComponent,
    SignInComponent,
    // AboutComponent,
    // SignInHomePageComponent,
    DoughnutChartComponent,
    PieChartComponent,
    BarChartComponent,
    PieComponent,
    OurProductsComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ShoppingCartComponent,
    ShoppingCartEditComponent,
    BigSpendersComponent,
    OrdersComponent,
    // DetailsOrderComponent,
    NavBarComponent,
    GoogleMapComponent,
    TopsComponent,
    SignInViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(socketIoConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD-x2XCvFbeRPUUIx1yoER2DIJ088GkaWc'
    }),
    FormsModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
