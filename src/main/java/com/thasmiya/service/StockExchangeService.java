package com.thasmiya.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.thasmiya.entity.StockExchange;
import com.thasmiya.repository.StockExchangeRepository;


@Service
public class StockExchangeService {
	
	
	@Autowired
	private StockExchangeRepository repository;

	public List<StockExchange> getStockExchangeList(){
		return (List<StockExchange>)repository.findAll();
	}
	
	
	public void addStockExchange(StockExchange stockexchange) {
		repository.save(stockexchange);
		}

	
}
