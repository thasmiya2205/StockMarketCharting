import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipo } from '../model/Ipo';

@Injectable({
  providedIn: 'root'
})
export class IpoService {

  ipoUrl="http://localhost:8081/ipo"
  constructor(private http:HttpClient) { }
  public findAll():Observable<Ipo[]>{
    return this.http.get<Ipo[]>(this.ipoUrl);}

  public save(ipo:Ipo){
    return this.http.post<Ipo>(this.ipoUrl,ipo);}

    public delete(cid:number){
      return this.http.delete(`http://localhost:8081/ipo/${cid}`)
    }
    public update(ipo:Ipo,cid:number){
      return this.http.put(`http://localhost:8081/ipo/${cid}`,ipo)
    }
    
}
