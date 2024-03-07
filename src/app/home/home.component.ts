
declare var google:any;
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TestingService } from '../testing.service';

import { DjService } from '../dj.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  loggedin: boolean | undefined;
   loginname:any;
  
constructor(public http:HttpClient,public router:Router,public tc:TestingService,public dj:DjService){
  }
   
  ngOnInit(){

    google.accounts.id.initialize({

      client_id:'531034718992-lfmes1kimcslmc8u8nb2tg0kl8qbgu22.apps.googleusercontent.com',
      callback:(resp:any)=>{
        
           this.router.navigate(['/category'])
         
      }
    });
    
    google.accounts.id.renderButton(document.getElementById("google-btn"),{
     theme:'filledblue',
     size:"large",
     shape:"rectangle",
     width:250
      
    })

  }

 
  sendtots(data:any){
    console.log(data)
   this.http.post('http://localhost:48/register',data,{responseType:"text"}).subscribe((lk: any)=>{
     
   console.log(lk)
    alert(lk)
   });
  
  }
 

   sendto(log:any){
    console.log(log)
   // this.loggedin=true;
   // this.tc.routingdecideservice(this.loggedin)
   this.http.post('http://localhost:48/login',log,{responseType:"text"}).subscribe((pg: any)=>{

      
       let ds=JSON.parse(pg)
       console.log(ds.message)
       this.loginname=ds.dj.name
       if(ds.message=="validuser"){
        this.dj.loginname(this.loginname)
        localStorage.setItem("token",ds.token);
       alert("loggined successfully")
       
       this.router.navigate(['/category']);
     
     
       }

       else{
        alert(pg)
       }
   })

   this.loggedin=true;
   this.tc.routingdecideservice(this.loggedin)
  }
   
  handleCredentialResponse(response:any){
     console.log(response.credential)
  }
  

}
