import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(UserService.getToken()!=null && !req.url.includes("/api/authenticate")) {
      req = req.clone({
          setHeaders: {
            'Authorization': `Bearer ${UserService.getToken()}`
          }
        });
    }
    return next.handle(req);
  }
}