import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../model/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
companyUrl="http://localhost:8081/company"
  constructor(private http:HttpClient) { }
  public findAll():Observable<Company[]>{
    return this.http.get<Company[]>(this.companyUrl);}

  public save(company:Company){
    return this.http.post<Company>(this.companyUrl,company);}

    public delete(cid:number){
      return this.http.delete(`http://localhost:8090/company/${cid}`)
    }
    public update(company:Company,cid:number){
      return this.http.put(`http://localhost:8090/company/${cid}`,company)
    }
    
}
