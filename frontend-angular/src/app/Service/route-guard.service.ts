import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import { LoginService } from './login.service';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private userService:UserService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.userService.isUserLoggedIn()){
    return true;
  }
    return false;
    
  }
  }

