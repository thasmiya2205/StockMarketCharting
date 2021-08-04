import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockpriceComponent } from './components/stockprice/stockprice.component';
import { StockpriceService } from './services/stockprice.service';
import { StockexchangeComponent } from './components/stockexchange/stockexchange.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { StockExchangeFormComponent } from './components/stock-exchange-form/stock-exchange-form.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { LogoutComponent } from './components/logout/logout.component';
import { IpoComponent } from './components/ipo/ipo.component';
import { IpoFormComponent } from './components/ipo-form/ipo-form.component';
import { AuthInterceptor } from './auth-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    StockpriceComponent,
    StockexchangeComponent,
    LoginComponent,
    NavbarComponent,
    NotfoundComponent,
    WelcomeComponent,
    StockExchangeFormComponent,
    CompanyComponent,
    CompanyFormComponent,
    LogoutComponent,
    IpoComponent,
    IpoFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi   : true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
