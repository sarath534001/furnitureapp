import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { TestingService } from './testing.service';
import { Router } from '@angular/router';
import { DjService } from './dj.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  tokr:any;
  
  kj:any;
  pk:string="hello"
  loggedin: boolean | undefined;
  loginname:any
  test1:string | undefined;

 constructor(public htc:HttpClient,private tc:TestingService, public rout:Router,public dj:DjService){
  let test="sarath"
  this.test1=test
  this.loginname= this.dj.loginname2();
  console.log(this.loginname)
 }


  forgotpassword(jk:any){
    console.log(jk)
    this.htc.post('http://localhost:48/forgotpassword',jk,{responseType:"text"}).subscribe(kj=>{
       
        alert(kj)
        console.log(kj)
 
   })
  }

  signout(){
    console.log("from signout")
    this.loggedin=false
    this.tc.routingdecideservice(this.loggedin)
    localStorage.removeItem('token')
   
    this.rout.navigate(['/home'])
    
  }
  
   
  
}
