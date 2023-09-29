import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {
  
    constructor() {}

 

    ngOnInit() {}
  
   
  
    displayStyle = "none";
  
   
  
    openPopup() {
  
      this.displayStyle = "block";
  
    }
  
    closePopup() {
  
      this.displayStyle = "none";
  
    }
  



}
