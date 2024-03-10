import { HttpClient } from '@angular/common/http';
import { Component,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrl: './addcategory.component.css'
})
export class AddcategoryComponent {
  a:string="image/png"
  imgs:any;
  ht:any;
  arraycat:any;
  getcat:any;
  
  td:any;
  constructor(public http:HttpClient){
        http.get('http://localhost:48/getcategories',{responseType:"text"}).subscribe(u=>{
                 
                  this.getcat=JSON.parse(u);   
                  
                             
        })

        
  }


  fileselected(img:any){
   
   const file:File=img.target.files[0];
     
    this.imgs=file;
 }
  
 
 
  categoryts(val:any){
    console.log(val)
  let formdata=new FormData();
  formdata.append('image',this.imgs);
  formdata.append('data',JSON.stringify(val.name))
     console.log(formdata)
    this.http.post('http://localhost:48/addcategory',formdata,{responseType:"text"}).subscribe(result=>{
      this.ht= JSON.parse(result)
      
      console.log(this.ht)
   })
  }
  
  delete(va:any){

    this.getcat.message=this.getcat.message.filter((k:any)=>{
      if(k.categoryname!=va){
       return k.categoryname
      }
 })
    this.td=JSON.stringify({ns:va})
    console.log(va)
    this.http.delete(`http://localhost:48/deletecategory/${va}`).subscribe(res=>{
      console.log(res)
  })
  }
 

}
