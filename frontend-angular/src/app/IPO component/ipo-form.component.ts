import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ipo } from 'src/app/model/Ipo';
import { IpoService } from 'src/app/services/ipo.service';

@Component({
  selector: 'app-ipo-form',
  templateUrl: './ipo-form.component.html',
  styleUrls: ['./ipo-form.component.css']
})
export class IpoFormComponent implements OnInit {

  ipo:Ipo
  constructor(private ipoService:IpoService,private router:Router) { this.ipo=new Ipo();}

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.ipo)
    this.ipoService.save(this.ipo).subscribe(result=>this.gotoIposList());
  }

  gotoIposList(){
this.router.navigate(['ipos']);
  }
}


