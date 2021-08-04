package com.thasmiya.exceldata.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thasmiya.exceldata.model.StockPrice;
import com.thasmiya.exceldata.repository.StockPriceRepository;

@Service
public class StockPriceService {
	
	@Autowired
	private StockPriceRepository repository;
	
	
	
	public List<StockPrice> findAll(){
		return (List<StockPrice>) repository.findAll();
	}
	
	public void save(List<StockPrice> stockPrices){
	
		repository.saveAll(stockPrices);	
		
		}

}
