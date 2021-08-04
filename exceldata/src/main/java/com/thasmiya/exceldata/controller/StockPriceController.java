package com.thasmiya.exceldata.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thasmiya.exceldata.model.StockPrice;
import com.thasmiya.exceldata.repository.StockPriceRepository;
import com.thasmiya.exceldata.service.StockPriceService;

@RestController
@RequestMapping("/stockprices")
@CrossOrigin(origins="http://localhost:4200")
public class StockPriceController {

	@Autowired
	private StockPriceService service;
	
	@GetMapping
	public List<StockPrice> findAll(){
		return service.findAll();
	};
	
	@PostMapping
	 public void addEntries(@RequestBody List<StockPrice> stockPrices) {
		 service.save(stockPrices);
		
	}
	
	
}
