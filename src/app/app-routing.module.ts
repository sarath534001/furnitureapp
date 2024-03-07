import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FooterComponent } from './footer/footer.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { BuynowComponent } from './buynow/buynow.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AdditemsComponent } from './additems/additems.component';
import { AllusersComponent } from './allusers/allusers.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { RoutedecideGuard } from './routedecide.guard';
import { TestingService } from './testing.service';
import { AllordersComponent } from './allorders/allorders.component';
import { OrdersformComponent } from './ordersform/ordersform.component';
import { Ordersform1Component } from './ordersform1/ordersform1.component';
import { CustomerordersComponent } from './customerorders/customerorders.component';
import { Customerorders1Component } from './customerorders1/customerorders1.component';
import { MattressComponent } from './mattress/mattress.component';
import { FoammattressComponent } from './foammattress/foammattress.component';
import { CoirmattessComponent } from './coirmattess/coirmattess.component';
import { SpringmattressComponent } from './springmattress/springmattress.component';


const routes: Routes = [{path:"",component:HomeComponent},
{path:"home",component:HomeComponent},
{path:"category",component:CategoryComponent,canActivate: [RoutedecideGuard]},
{path:"customerorders",component:CustomerordersComponent},
{path:"productdetails/:cate",component:ProductdetailsComponent,canActivate: [RoutedecideGuard]},
{path:"footer",component:FooterComponent},
{path:"customerorders1",component:Customerorders1Component},
{path:"ordersform1",component:Ordersform1Component},
{path:"ordersform",component:OrdersformComponent},
{path:"mattress",component:MattressComponent},
{path:"buynow/:name",component:BuynowComponent,canActivate: [RoutedecideGuard]},
{path:"admin",component:AdminComponent,children:[{path:"allorders",component:AllordersComponent},{path:"addcategory",component:AddcategoryComponent},{path:"additems",component:AdditemsComponent,children:[{path:"allusers",component:AllusersComponent}]},{path:"allusers",component:AllusersComponent}]},
{path:"cart",component:CartComponent,canActivate: [RoutedecideGuard]},
{path:"placeorder",component:PlaceorderComponent,canActivate: [RoutedecideGuard]},
{path:"orderplaced",component:OrderplacedComponent,canActivate: [RoutedecideGuard]},
{path:"foammattress",component:FoammattressComponent},
{path:"coirmattress",component:CoirmattessComponent},
{path:"springmattress",component:SpringmattressComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
