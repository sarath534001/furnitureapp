import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderplaced',
  templateUrl: './orderplaced.component.html',
  styleUrl: './orderplaced.component.css'
})
export class OrderplacedComponent{
  constructor(public ror:Router){

  }
 
  ngOnInit(){
    setTimeout(() => {
        this.ror.navigate(['/category'])
    },2000);
  }
}
