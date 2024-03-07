import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DjService } from '../dj.service';

@Component({
  selector: 'app-ordersform1',
  templateUrl: './ordersform1.component.html',
  styleUrl: './ordersform1.component.css'
})
export class Ordersform1Component {
  a:any;
 total:number=0;
  ay:string="image/png";
  constructor(public http:HttpClient,public dj:DjService){
 
    this.a=this.dj.getitems()
      console.log(this.a)
     this.a.forEach((y:any)=>{

        if(y.updatedprice!=null){

        this.total=this.total+y.updatedprice
        console.log(this.total)

        }
        else if(!y.updatedprice){
          this.total=this.total+y.price
          console.log(this.total)
        }
     })


  }
 
}
