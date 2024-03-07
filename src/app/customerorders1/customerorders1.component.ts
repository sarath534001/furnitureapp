import { Component } from '@angular/core';
import { DjService } from '../dj.service';

@Component({
  selector: 'app-customerorders1',
  templateUrl: './customerorders1.component.html',
  styleUrl: './customerorders1.component.css'
})
export class Customerorders1Component {
  p:any;
  total:number=0
  ay:string="image/png"

 constructor(public dj:DjService){

 this.p= dj.sentocustomerorders1()
 console.log(this.p)
 this.p.forEach((y:any)=>{

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
