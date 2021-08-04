import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockExchange } from 'src/app/model/StockExchange';
import { StockexchangeService } from 'src/app/services/stockexchange.service';

@Component({
  selector: 'app-stock-exchange-form',
  templateUrl: './stock-exchange-form.component.html',
  styleUrls: ['./stock-exchange-form.component.css']
})
export class StockExchangeFormComponent implements OnInit {
stockExchange:StockExchange
  constructor(private router:Router,private stockExchangeService:StockexchangeService) { this.stockExchange=new StockExchange();}

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.stockExchange)
    this.stockExchangeService.save(this.stockExchange).subscribe(result=>this.gotoStockExchangesList());
  }

  gotoStockExchangesList(){
this.router.navigate(['stockexchanges']);
  }
}
