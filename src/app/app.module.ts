import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FooterComponent } from './footer/footer.component';
import { BuynowComponent } from './buynow/buynow.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { AllbuttonsComponent } from './allbuttons/allbuttons.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AdditemsComponent } from './additems/additems.component';
import { AllusersComponent } from './allusers/allusers.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { AllordersComponent } from './allorders/allorders.component';
import { OrdersformComponent } from './ordersform/ordersform.component';
import { Ordersform1Component } from './ordersform1/ordersform1.component';
import { CustomerordersComponent } from './customerorders/customerorders.component';
import { Customerorders1Component } from './customerorders1/customerorders1.component';
import { MattressComponent } from './mattress/mattress.component';
import { FoammattressComponent } from './foammattress/foammattress.component';
import { CoirmattessComponent } from './coirmattess/coirmattess.component';
import { SpringmattressComponent } from './springmattress/springmattress.component';
import { KurlonComponent } from './kurlon/kurlon.component';
import { TestModule } from './test/test.module';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HomeComponent,
    ProductdetailsComponent,
    FooterComponent,
    BuynowComponent,
    AdminComponent,
    CartComponent,
    AllbuttonsComponent,
    AddcategoryComponent,
    AdditemsComponent,
    AllusersComponent,
    PlaceorderComponent,
    OrderplacedComponent,
    AllordersComponent,
    OrdersformComponent,
    Ordersform1Component,
    CustomerordersComponent,
    Customerorders1Component,
    MattressComponent,
    FoammattressComponent,
    CoirmattessComponent,
    SpringmattressComponent,
    KurlonComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TestModule

  ],
  exports: [
    
    FooterComponent
  ],
  providers: [ ],
    
  bootstrap: [AppComponent]
})
export class AppModule {

  ngOnInit(): void {
    console.log('app module initialized'); // This message will be printed to the console when the component is initialized
  }
 }
