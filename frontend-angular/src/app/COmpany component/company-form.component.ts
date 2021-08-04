import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/Company';
import { CompanyService } from 'src/app/services/company.service';
import { StockExchange } from 'src/app/model/StockExchange';
import { StockexchangeService } from 'src/app/services/stockexchange.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {
company:Company
stockExchange:StockExchange[];
  constructor(private companyService:CompanyService,private router:Router,private stockExchangeService:StockexchangeService) {
     this.company=new Company();
      this.stockExchangeService.findAll().subscribe(data=>{this.stockExchange=data;
      });

    }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.company)
    this.companyService.save(this.company).subscribe(result=>this.gotoCompaniesList());
  }

  gotoCompaniesList(){
this.router.navigate(['companies']);
  }
}
