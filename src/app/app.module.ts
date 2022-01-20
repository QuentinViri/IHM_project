import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { UsersListComponent } from './users-list/users-list.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UsersListComponent,
    OrdersListComponent,
    ProductsListComponent,
    UserDetailsComponent,
    ProductDetailsComponent,
    OrderDetailsComponent
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
