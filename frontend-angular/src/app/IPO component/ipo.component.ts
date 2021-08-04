import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ipo } from 'src/app/model/Ipo';
import { IpoService } from 'src/app/services/ipo.service';

@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent implements OnInit {

ipo:Ipo[]
  constructor(private ipoService:IpoService,private router:Router) { }

  ngOnInit(): void {
    this.ipoService.findAll().subscribe(data=>{this.ipo=data;
    });
  }
  getIpoList(){
    this.ipoService.findAll().subscribe(data=>{this.ipo=data;
    });
  }
  goToIpoForm(){
    this.router.navigate(['addipo'])
  }
  deleteIpo(id){
    console.log("deleted")
    this.ipoService.delete(id).subscribe(response=>{console.log(response);
    this.getIpoList()})
    
  }
  updateIpo(ipo,id){
    console.log("updated")
    this.ipoService.update(ipo,id).subscribe(response=>{console.log(response);
    this.getIpoList()})
    
  }
  

}
