import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { DjService } from '../dj.service';
@Component({
  selector: 'app-customerorders',
  templateUrl: './customerorders.component.html',
  styleUrl: './customerorders.component.css'
})
export class CustomerordersComponent {
   total:any;
   ay:string="image/png"
   count:number=0;
   ayy: string = '';
  constructor(public router:Router,public http:HttpClient,public dj:DjService){
  
  let token=localStorage.getItem('token');
  let headers=new HttpHeaders({'Authorization':`${token}`})
  http.post("http://localhost:48/customerorders",{name:"ravi"},{headers}).subscribe((s:any)=>{
 
      this.total=s.orders
      console.log(this.total)
  })
  
}

getitems11(t:any)
{
  this.dj.fromcustomerorders(t)
  this.router.navigate(['/customerorders1'])
}

onTableRowClick(event: MouseEvent, item: any) {
  console.log('Row clicked:', item);
  // Handle tap event logic here
}


}
