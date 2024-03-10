import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrl: './additems.component.css'
})
export class AdditemsComponent {
  a:string="image/png";
    jg:any;
    allite:any;
    d:any;
  mattressInputsVisible: boolean=false;
  selectedCategory: string = '';
   constructor(public http:HttpClient,public rout:Router){

    http.get('http://localhost:48/getcategories',{responseType:"text"}).subscribe(ds=>{
        let phd:any;
       phd=JSON.parse(ds)
        this.jg=phd.message
      console.log(this.jg)
    })
    
    http.get('http://localhost:48/getallitems',{responseType:"text"}).subscribe(dp=>{
           let pg= JSON.parse(dp)
              this.allite=pg
    
    })

   }

 itemimage:any;

   additem(data:any){
      console.log(data)

      this.jg.forEach((y:any)=>{
             
               if(y.categoryname==data.name){
                if(!y.items){
                  y.items=[]
                  y.items.push(data)
                 }
                 else{
               y.items.push(data)
                 }
               }
      })
      
      let formdata=new FormData();
      formdata.append('itemim',this.itemimage);
      formdata.append('data',JSON.stringify(data))
         console.log(formdata)

      this.http.put('http://localhost:48/additem',formdata,{responseType:"text"}).subscribe(res=>{

       
      })

  }

  addimage(d:any){
    const fil:File=d.target.files[0];
    this.itemimage=fil
  }

  deleteitem(j:any){
       
    this.allite=this.allite.filter((k:any)=>{
         if(k.itemname!=j){
          return k.itemname
         }
    })

    this.http.delete(`http://localhost:48/deleteitemincategory/${j}`).subscribe(res=>{

    })

  }
   
  updateFormInputs(selectedCategory: string): void {
    // Update form inputs based on selected category
    if (selectedCategory === 'Mattress') {
      this.mattressInputsVisible = true;
    } else {
      this.mattressInputsVisible = false;
    }
  }


  tes(){
   this.rout.navigate(['/category'])
    console.log("ram")
  }

  categorymeth(k:any){
   
    this.jg.forEach((y:any)=>{
          if(y.categoryname==k){
           this.d= y.items
          }
    })

    console.log(this.d)
  }



}
