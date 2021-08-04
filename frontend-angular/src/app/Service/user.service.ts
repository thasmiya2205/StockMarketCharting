import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public logged:boolean = false;
  public username: string | null | undefined;
  public admin:boolean = false;

 

  static getToken(): string {
    return <string>localStorage.getItem('token')
  }

  static setToken(value: string) {
    localStorage.setItem('token',value)
  }

  clear(){
    this.admin = false;
    this.username = null;
    this.logged = false;
  }

  logOut(){
    
      this.admin = false;
      this.username = null;
      this.logged = false;
    }
  

  login(username:string, isAdmin:boolean){
    this.admin = isAdmin;
    this.username = username;
    this.logged = true;
    localStorage.setItem('logged','true')
    localStorage.setItem('admin','true')
    localStorage.setItem('username',username)
  }

  isUserLoggedIn(){
    let user=localStorage.getItem('logged')
    return !(user===null)
  }

  constructor() {
    let logStatus = localStorage.getItem('logged')
    if(logStatus!=null && logStatus=='true') {
      this.logged = true;
      let isAdmin = localStorage.getItem('admin')
      if (isAdmin != null && isAdmin == 'true') {
        this.admin = true;
      }
      this.username = localStorage.getItem('username')
    }
  }
}
 
