import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestingService {
  routdecide:boolean | undefined;
  postitem:any;
  maindata:any;
  allcar: any[] = [];
  datafromcart:any;
  cartlengt:any
  cartfromserv:any
  constructor(public hv:HttpClient) { }

 public getdata(dj:any):Observable<any>{
    return this.hv.post<any>("/user",dj)
  }

  senddata(data:any){
   
    this.maindata=data
  }
   
  senditem(receiveditem:any){
    this.postitem=receiveditem;
  }
  

  addcart1(jk:any):Observable<any>
  {
    
     let token= localStorage.getItem('token')
    
   return this.hv.post<any>(`http://localhost:48/addtocart/${token}`,jk)//.subscribe(y=>{
    
    
  }


  fromcart(dat:any){
   this.datafromcart=dat;
   console.log(dat,"frm ser cart daf")
  }

  cartlength(k:any){
   
    this.cartlengt=k
   
  }

  routingdecideservice(roudserv:any){
    this.routdecide=roudserv
    console.log(this.routdecide,"from routedecide")
  }


}
