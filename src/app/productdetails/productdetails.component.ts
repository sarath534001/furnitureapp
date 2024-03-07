import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TestingService } from '../testing.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})



export class ProductdetailsComponent {
  a:string="image/png";
    tp:any
  public ca:any;
     pars:any;
     item:any;
    constructor(public rout: Router,public rou:ActivatedRoute,public http:HttpClient,public ts
      :TestingService){
    }

    
    ngOnInit(){
    this.rou.params.subscribe(p=>{
      this.ca=p['cate']
     console.log(this.ca)
     })
       
    
     this.http.post('http://localhost:48/getitembycategory',{name:this.ca},{responseType:"text"}).subscribe(tp=>{
     
     this.pars=JSON.parse(tp)
     this.item=this.pars.message.items
     this.ts.senditem(this.item);
          
    })
    
   }


   buynow(re:any)
   {
     
     this.ts.senddata(this.item);
      this.rout.navigate(['/buynow',re])
   } 
   

}
