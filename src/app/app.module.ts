import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './product/shopping-list/shopping-list.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './users/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    ShoppingListComponent,
    SearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
