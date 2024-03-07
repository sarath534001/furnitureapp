import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DjService } from '../dj.service';
@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.css'
})
export class AllordersComponent {
   allinone:any;
  constructor(public routr:Router,public http :HttpClient,public dj:DjService){
  
 this.http.get(`http://localhost:48/getallorders`).subscribe((y:any)=>{

    this.allinone=y
     console.log(y)
  })

 }

 allordersofuser(k:any){
   
  this.dj.fromallorders(k)
   this.routr.navigate(['/ordersform'])
 }



}