import { Component } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { TestingService } from '../testing.service';
import { Router } from '@angular/router';
import { DjService } from '../dj.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {
  totalprice:number=0;
  mycart:any;
  df:string="Cart"
  ap:any;
  a:string="image/png";
  pp: any[] = [];//carts items array
  loginname:any;
  
  constructor(public http:HttpClient,public t:TestingService,public r:Router,public dj:DjService){
   
  
     let token=localStorage.getItem('token')

    this.http.get(`http://localhost:48/getcart/${token}`).subscribe((jk:any)=>{
      
    this.ap=jk.cart
    this.loginname= this.dj.loginname2();
      
    }) 
   
  }
 
  
 async incrementQuantity(gkk:any){
    
   this.ap.forEach((l:any)=>{
        const a=l.price
       if(l.itemname==gkk.itemname){
            l.quantity++
            l.updatedprice=l.price*l.quantity
         
        }   
   })
   let token=localStorage.getItem('token')
  // let headers=new HttpHeaders({'authorization':`${token}`})
   
   let g=await fetch(`http://localhost:48/increcart`,{method:'POST',headers:{'Content-Type': 'application/json','authorization':`${token}`},body:JSON.stringify(this.ap)})
   //.then(y=>{
        
   //})
  
  }
  
 
 dec(gkk:any){
  this.ap.forEach( (l:any)=>{
    if(l.itemname==gkk.itemname&&l.quantity>1){
         l.quantity--
         l.updatedprice=l.updatedprice-l.price
         
    }   
   })
   
   let token=localStorage.getItem('token')
   let headers=new HttpHeaders({'authorization':`${token}`})
   this.http.post(`http://localhost:48/increcart`,this.ap,{headers}).subscribe(y=>{
        
   })



  }

 gettotalprice(){
     try{
  return this.ap.reduce((total:any,item:any)=> total+(item.quantity*item.price),0)
     }
     catch(err){

     } 
 }
  
 deleteitemcart(h:any){
  
  this. ap=this.ap.filter((k:any)=>{
      if(k.itemname!=h.itemname){
         return k.itemname
      }
  })

  let token=localStorage.getItem('token')
  let headers=new HttpHeaders({'Authorization':`${token}`})
  this.http.post(`http://localhost:48/deleteitemcart123`,h,{headers}).subscribe((s:any)=>{
   

  })
 }
 
 checkout(){

   console.log(this.ap,"test1")

   this.ap.forEach((y:any)=>{
      if(!y.updatedprice||y.updatedprice==null){
        y.updatedprice=y.price
      }
   })
   
   console.log(this.ap,"test2")
  let token=localStorage.getItem('token')
  let headers= new HttpHeaders({'authorization':`${token}`})
  
  this.dj.fromupdatcart(this.ap)

 this.http.post("http://localhost:48/updacart",this.ap,{headers}).subscribe((s:any)=>{
 
  
  this.r.navigate(['/placeorder'])
 })
 
 }

}
  


