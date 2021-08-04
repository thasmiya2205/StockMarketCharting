import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { CompanyComponent } from './components/company/company.component';
import { IpoFormComponent } from './components/ipo-form/ipo-form.component';
import { IpoComponent } from './components/ipo/ipo.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { StockExchangeFormComponent } from './components/stock-exchange-form/stock-exchange-form.component';
import { StockexchangeComponent } from './components/stockexchange/stockexchange.component';
import { StockpriceComponent } from './components/stockprice/stockprice.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'welcome/:name',component:WelcomeComponent,canActivate:[RouteGuardService]},
  {path:'stockprices',component:StockpriceComponent,canActivate:[RouteGuardService]},
  {path:'addstockexchange',component:StockExchangeFormComponent,canActivate:[RouteGuardService]},
  {path:'companies',component:CompanyComponent,canActivate:[RouteGuardService]},
  {path:'addcompany',component:CompanyFormComponent,canActivate:[RouteGuardService]},
  {path:'ipos',component:IpoComponent,canActivate:[RouteGuardService]},
  {path:'addipo',component:IpoFormComponent,canActivate:[RouteGuardService]},
  {path:'stockexchanges',component:StockexchangeComponent,canActivate:[RouteGuardService]},
  {path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
