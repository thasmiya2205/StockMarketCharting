import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
private url:string
  constructor(private http:HttpClient) {this.url='http://localhost:8090/api/authenticate';
}
login(user:User){
  return this.http.post<User>(this.url,user);

}

  // authenticate(username,password){
  // if(username==="thasmiya" && password==="apple"){
  //   sessionStorage.setItem('authenticatedUser',username)
  //   return true
  // }
  //   return false;
  // }

  

  // logOut(){
  //   sessionStorage.removeItem('authenticatedUser')
  // }

  // createBasicAuthenticationHttpHeader(){
  //   let username='thasmiya'
  //   let password='apple'
  //   let basicAuthHeaderString='Basic'+window.btoa(username+':'+password) 
  //   return basicAuthHeaderString;
  // }
}

