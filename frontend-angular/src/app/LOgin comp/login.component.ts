import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User={
  username:'',
  password:''
};
  errorMessage:string;
  invalidLogin:boolean;

  constructor(private router:Router,private loginService:LoginService,private userService:UserService) { }

  ngOnInit(): void {
    
  }
handleLogin(){

  this.loginService.login(this.user).subscribe(response =>{
    console.log(response)
    let res:any=response;
    if(res.hasOwnProperty("jwt"))
    {
     UserService.setToken(res.jwt);
      this.userService.login(res.username,res.admin);
      this.router.navigate(['welcome',this.user.username]);
      
    }
  });




  // if(this.loginService.authenticate(this.username,this.password)){
  //   this.invalidLogin=false;
  //   this.router.navigate(['welcome',this.username])
  //   console.log(this.username);
  // }else{
  //   this.invalidLogin=true;
  // }
}
}
