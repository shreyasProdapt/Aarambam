import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loginForm:FormGroup;
  //constructor(private fb:FormBuilder){}
  

  
  constructor(private router:Router,private userservice :UserserviceService) //inject formbuilder
  {

  }
    model:any={}
    getData:boolean;

    
    onSubmit(){

      var user = this.model.username;
      var pwd = this.model.password;

      this.userservice.getUserData(user,pwd).subscribe((res:any)=>{
          this.getData=res;
          if(this.getData==true){
              alert("Hello");
          }else{
            alert("Veliya po");
          }
      })
      
      
      // this.userservice()
    }
}
