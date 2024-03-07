import { Component } from '@angular/core';
import { TestingService } from '../testing.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { DjService } from '../dj.service';
@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrl: './placeorder.component.css'
})
export class PlaceorderComponent {
 
   a:string="image/png";

   aap:any
   result:any
   cartfromdjserv:any;
   mobile:any;
   city:any;
   address:any;
   street:any;
   totalamount:any
   docker:any;
   constructor(public t:TestingService,public http:HttpClient,public router:Router,public dj:DjService){
   // this.result=  this.t.datafromcart

    
    /*  let token=localStorage.getItem('token')
      this.http.get(`http://localhost:48/getcart/${token}`).subscribe((jk:any)=>{
       
       this.aap=jk.cart
        console.log(this.aap,"from placeorder") 
       }) 
   
     */

       this.docker= this.dj.sendupdatcart();
  
   } 

   placeorder(){

    let token=localStorage.getItem('token')
    let headers=new HttpHeaders({'Authorization':`${token}`})
    let a={mobile:this.mobile,city:this.city,address:this.address,street:this.street}
    console.log(a)
    
    this.http.post('http://localhost:48/orders',{addressobj:a,cartarray:this.aap},{headers}).subscribe((y:any)=>{

    })

    this.router.navigate(['/orderplaced'])
   }
   



}
   
   
   
   
   

 

