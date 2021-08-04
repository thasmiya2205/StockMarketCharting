package com.thasmiya.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.thasmiya.entity.Ipo;


@Repository
public interface IpoRepository extends JpaRepository<Ipo,Long> {

}
