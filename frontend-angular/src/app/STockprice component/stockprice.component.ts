import { Component, OnInit } from '@angular/core';
import { StockPrice } from 'src/app/model/StockPrice';
import { StockpriceService } from 'src/app/services/stockprice.service';
import  * as XLSX from 'xlsx';
@Component({
  selector: 'app-stockprice',
  templateUrl: './stockprice.component.html',
  styleUrls: ['./stockprice.component.css']
})
export class StockpriceComponent implements OnInit {

  file: File
  arrayBuffer:any
  fileList:any
  numberOfRecords:number;
  stockPrice:StockPrice;
  stockPrices:StockPrice[]=[];
  isUploaded:boolean=false;
  companyCode:string;
  stockexchangeName:string;
  fromDate:string;
  toDate:string;



  constructor(private stockPriceService:StockpriceService) { }

  ngOnInit(): void {
    this.stockPriceService.findAll().subscribe(data=>{this.stockPrices=data;
    });
  }

  addFile(event)     
  {    
  this.file= event.target.files[0];     
  let fileReader = new FileReader();    
  fileReader.readAsArrayBuffer(this.file);     
  fileReader.onload = (e) => {    
      this.arrayBuffer = fileReader.result;    
      var data = new Uint8Array(this.arrayBuffer);    
      var arr = new Array();    
      for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);    
      var bstr = arr.join("");    
      var workbook = XLSX.read(bstr, {type:"binary"});    
      var first_sheet_name = workbook.SheetNames[0];    
      var worksheet = workbook.Sheets[first_sheet_name];    
      console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));    
        var records = XLSX.utils.sheet_to_json(worksheet,{raw:true});     
            this.numberOfRecords=records.length;
            console.log(this.numberOfRecords);   
            records.filter(record=>{this.stockPrice={
              ccode:record["ccode"],
              stockex:record["stockex"],
              ppshare:record["ppshare"],
              date:new Date(record["date"]),
              time:record["time"]
            }
            this.stockPrices.push(this.stockPrice);
          });
          console.log(this.stockPrices);
      //     this.companyCode = this.stockPrices[0].companyCode;
      // this.stockexchangeName = this.stockPrices[0].stockExchangeName;
      // this.fromDate = this.stockPrices[0].date;
      // this.toDate = this.stockPrices[this.numberOfRecords-1].date;
      // this.isUploaded = true;
    }

  }

  uploadStockPrices(){
    this.stockPriceService.addStockPriceList(this.stockPrices).subscribe(result=>result);
  }
    // getMessage(){
    //   //console.log(this.stockPriceService.executeHelloWorld());
    //  console.log( this.stockPriceService.executeHelloWorld().subscribe());
    // }
  }    

