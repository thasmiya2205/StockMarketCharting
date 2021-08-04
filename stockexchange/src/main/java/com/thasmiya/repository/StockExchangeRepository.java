package com.thasmiya.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.thasmiya.entity.StockExchange;

@Repository
public interface StockExchangeRepository extends JpaRepository<StockExchange,Long> {

}
