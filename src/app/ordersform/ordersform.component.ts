import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DjService } from '../dj.service';

@Component({
  selector: 'app-ordersform',
  templateUrl: './ordersform.component.html',
  styleUrl: './ordersform.component.css'
})
export class OrdersformComponent {
   f:any;
   orders:any;
   total:any;
  constructor(public router:Router,public http:HttpClient,public dj:DjService){
  
    this.f= this.dj.sendallorders();
     
    http.post('http://localhost:48/getallordersbyuser',this.f).subscribe(h=>{
   
         this.orders=h;
         console.log(this.orders,"hello from americz")

         this.orders.forEach((y:any)=>{
          this.total=y.orders

         })
         
       console.log(this.total)
    })
  }


  getitems(y:any){
    this.dj.senditems(y)
    this.router.navigate(['/ordersform1'])
   // console.log(y,"from the items of ")
  
  }

}
