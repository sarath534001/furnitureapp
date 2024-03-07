import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  http: any;
  router: any;

  constructor(http:HttpClient,router:Router){}

  sendto(log:any){
    console.log(log)
   this.http.post('http://localhost:48/login',log,{responseType:"text"}).subscribe((pg: any)=>{

      
       let ds=JSON.parse(pg)
       console.log(ds.message)
       if(ds.message=="validuser"){
       localStorage.setItem("token",ds.token);
       alert(ds)
       this.router.navigate(['category']);
        
       }

       else{
        alert(pg)
       }
   })


  }
}
