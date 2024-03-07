import { Component } from '@angular/core';
import { TestingService } from '../testing.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrl: './buynow.component.css'
})
export class BuynowComponent {
  a:string="image/png";
   j:any;
   nameof:any;
   // object on s variable about item 
   s:any;
   rk:any;
   cartlength:any;
   cartlen:any;
  
   totalcartitems: any;
   constructor(public t:TestingService,public as:ActivatedRoute,public http:HttpClient){

    this.j=this.t.maindata
    
    this.as.params.subscribe(p=>{
      this.nameof =p['name']
    console.log(this.nameof+"from buynow ts")


    })
    
    try{
   this.s= this.j.filter((y: any)=>{
         if(y.itemname==this.nameof){
           return y.itemname
         }
    })
   }
   catch(err){

   }
   
     let token=localStorage.getItem('token')
    // let headers=new HttpHeaders({'authorization':`${token}`})
     this.http.get(`http://localhost:48/getcart/${token}`).subscribe((jk:any)=>{
          this.totalcartitems=jk.cart
          try{
        this.cartlength=jk.cart.length;
          }
          catch(err){
            console.log(err,"thisis my err")
          }
     })
      
  }
 
  addtocart(gf:any){
   try{
  let df=this.totalcartitems.filter((h:any)=>{

        if(h.itemname==gf.itemname){
          return h.itemname
        }
   
    })

    if(df.length==0){
         this.cartlength++
         this.totalcartitems.push(gf)   
    }     
   }
   catch(err){
    
   }

    this.t.addcart1(gf).subscribe((y:any)=>{
      
      alert(y.message)
    })
    
  }
 

  
  

   
}
