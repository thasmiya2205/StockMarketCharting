import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockExchange } from 'src/app/model/StockExchange';
import { StockexchangeService } from 'src/app/services/stockexchange.service';

@Component({
  selector: 'app-stockexchange',
  templateUrl: './stockexchange.component.html',
  styleUrls: ['./stockexchange.component.css']
})
export class StockexchangeComponent implements OnInit {

  stockExchange:StockExchange[];

  constructor(private stockExchangeService:StockexchangeService,private router:Router) { }

  ngOnInit(): void {
    this.stockExchangeService.findAll().subscribe(data=>{this.stockExchange=data;
    });
  }
  goToStockExchangeForm(){
    this.router.navigate(['addstockexchange'])
  }
 
}
