import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockExchange } from '../model/StockExchange';

@Injectable({
  providedIn: 'root'
})
export class StockexchangeService {
  private stockexchangeUrl:string;
  constructor(private http:HttpClient) { this.stockexchangeUrl='http://localhost:8090/stockexchanges';}
  
  public findAll():Observable<StockExchange[]>{return this.http.get<StockExchange[]>(this.stockexchangeUrl);}

  public save(stockExchange:StockExchange){
    return this.http.post<StockExchange>(this.stockexchangeUrl,stockExchange);}
  }

  

