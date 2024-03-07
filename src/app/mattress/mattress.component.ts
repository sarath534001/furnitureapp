import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mattress',
  templateUrl: './mattress.component.html',
  styleUrl: './mattress.component.css'
})
export class MattressComponent {
  
  constructor(public http:HttpClient,public router:Router){}
  
  foam(){
    this.router.navigate(['/foammattress'])
  }
  coir(){
    this.router.navigate(['/coirmattress'])
  }
  spring(){
    this.router.navigate(['/springmattress'])
  }
  kurlon(){

  }
  centuary(){

  }
  duroflex(){

  }
  nilkamal(){

  }
  peps(){
    
  }
}
