import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/Company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
company:Company[]
  constructor(private companyService:CompanyService,private router:Router) { }

  ngOnInit(): void {
    this.companyService.findAll().subscribe(data=>{this.company=data;
    });
  }
  getCompnyList(){
    this.companyService.findAll().subscribe(data=>{this.company=data;
    });
  }
  goToCompanyForm(){
    this.router.navigate(['addcompany'])
  }
  deleteCompany(id){
    console.log("deleted")
    this.companyService.delete(id).subscribe(response=>{console.log(response);
    this.getCompnyList()})
    
  }
  updateCompany(company,id){
    console.log("updated")
    this.companyService.update(company,id).subscribe(response=>{console.log(response);
    this.getCompnyList()})
    
  }
  
}
