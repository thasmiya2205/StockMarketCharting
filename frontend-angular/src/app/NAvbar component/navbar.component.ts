import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
//isUserLoggedIn:boolean=false;
  constructor(public userService:UserService) { }

  ngOnInit(): void {
  // this.isUserLoggedIn= this.loginService.isUserLoggedIn()
  }

}
