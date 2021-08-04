package com.thasmiya.exceldata.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.thasmiya.exceldata.model.StockPrice;

@Repository
public interface StockPriceRepository extends CrudRepository<StockPrice, Long> {

}
