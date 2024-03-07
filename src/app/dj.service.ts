import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DjService {
  p:any;
  ty:any;
  kv:any;
  sa:any;
  datafromcart:any;
  constructor() { }

  fromallorders(t:any){
   this.p=t
  }

  sendallorders(){
    return this.p
  }

  senditems(y:any){
    console.log(y,"from the item i einsteiun")
  this.ty=y
  }
  
  getitems(){
    return this.ty
  }

  fromcustomerorders(k:any){
    this.kv=k
    console.log(k)
  }

  sentocustomerorders1(){
    return this.kv;
  }

  fromupdatcart(u:any){
   this.datafromcart=u
   console.log(this.datafromcart)
  }
 
  sendupdatcart(){
    return this.datafromcart;
  }

  loginname(l:any){
    this.sa=l
   console.log("from dj service",l)

   console.log(l,"from djservice loginname")
  }
 
  loginname2(){
    return this.sa
  }

}
