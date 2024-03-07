import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DjService } from '../dj.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})


export class CategoryComponent {
  hj:any;
  fg:any;
  ds:any;
 a:string="image/png";
 loginname:any;
  constructor(public df:HttpClient,public rs:Router,public dj:DjService){ }
  ngOnInit(){

    console.log("hello")
  this.df.get('http://localhost:48/getcategories',{responseType:"text"}).subscribe(j=>{
   this.hj= JSON.parse(j)
    
    this.ds=this.hj.message;
   this.loginname= this.dj.loginname2();
    console.log(this.ds)
  })

 }

 gotoproductdetails(categoryy:any){
  console.log()
  if(categoryy=='Mattress'){
    this.rs.navigate(['/mattress'])
  }
  else{

    this.rs.navigate(['/productdetails',categoryy])
  }
 }

 



}