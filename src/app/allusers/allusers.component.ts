import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrl: './allusers.component.css'
})
export class AllusersComponent {
  kv: any;
  constructor(public http:HttpClient){


   this. http.get('http://localhost:48/allusers',{responseType:"text"}).subscribe(result=>{
       let h=JSON.parse(result)
   // let h=result
      this.kv= h

      console.log(this.kv)
    })

  }
  
  deleteuser(y:any){
      this.http.delete(`http://localhost:48/deleteuser/${y}`).subscribe(result=>{
        
      })
  }
  
}
