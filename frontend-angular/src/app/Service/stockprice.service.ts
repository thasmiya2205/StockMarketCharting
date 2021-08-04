import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockPrice } from '../model/StockPrice';

@Injectable({
  providedIn: 'root'
})
export class StockpriceService {
  private stockpriceUrl:string;
  constructor(private http:HttpClient) { }

  public findAll():Observable<StockPrice[]>{
    return this.http.get<StockPrice[]>("http://localhost:8090/stockprices");}

  addStockPriceList(stockPrices:StockPrice[]){
    
   return this.http.post<StockPrice[]>("http://localhost:8090/stockprices",stockPrices);
   
  }

  // executeHelloWorld(){
  //   return this.http.get("http://localhost:8080/login");
  // }

}
