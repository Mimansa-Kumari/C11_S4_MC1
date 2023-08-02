import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData!:FormGroup;
  data?:User;

  constructor(private fb : FormBuilder,
     private getDetails : UserService,
      private goToViewCard : Router)
      {
        this.loginDetails();
      }

  loginDetails()
  {
    this.loginData = this.fb.group({
      userId:["",Validators.required],
      password:["",[Validators.minLength(2),Validators.required]]
    })
  }

  get userId() { return this.loginData.get('userId')};
  get password() { return this.loginData.get('password')};

  check:boolean=false;
  var1:User[]=[];
  var2:User[]=[];

  validateUser()
  {
    this.getDetails.getUser().subscribe({
      next:d=>{
        this.var1=(d.filter(n=>n.email==this.userId?.value));
        this.var2=(d.filter(n=>n.password==this.password?.value));
        if(this.var1.length==1 && this.var2.length==1)
        {
          this.goToViewCard.navigateByUrl("/note-view");  
        }
        else
        {
          alert(`Invalid Username and Password!`);   
        }
      }
    })
  }
}
